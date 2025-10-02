import copy
import torch
from itertools import combinations
import numpy as np

class Base_SVRG():
    def __init__(self, optim):
        print("Using optimizer: SVRG")
        self.u = None
        self.optim = optim
        self.param_groups = optim.param_groups
        self.num_weights = 0
        for group in self.param_groups:
            for _ in group['params']:
                # core SVRG gradient
                self.num_weights += 1
        self.curr_step = 0
        num_devices = torch.cuda.device_count()
        self.devices = list(range(num_devices))

    def state_dict(self):
        return self.optim.state_dict()
    
    def load_state_dict(self, state_dict):
        self.optim.load_state_dict(state_dict)
        # update param groups with the loaded one
        self.param_groups = self.optim.param_groups

    def zero_grad(self):
        self.optim.zero_grad()
    
    def update_grad(self, step=None):
        raise NotImplementedError

    def step(self):
        self.optim.step()
    
    def save_epoch_state(self):
        self.torch_epoch_state = torch.get_rng_state()
        self.np_epoch_state = np.random.get_state()
        self.epoch_gpu_rng_states = []
        for device in self.devices:
            self.epoch_gpu_rng_states.append(torch.cuda.get_rng_state(device))

    def set_epoch_state(self):
        torch.set_rng_state(self.torch_epoch_state)
        np.random.set_state(self.np_epoch_state)
        for device, gpu_rng_state in zip(self.devices, self.epoch_gpu_rng_states):
            torch.cuda.set_rng_state(gpu_rng_state, device)

    def save_curr_state(self):
        self.torch_curr_state = torch.get_rng_state()
        self.np_curr_state = np.random.get_state()
        self.curr_gpu_rng_states = []
        for device in self.devices:
            self.curr_gpu_rng_states.append(torch.cuda.get_rng_state(device))
    
    def set_curr_state(self):
        torch.set_rng_state(self.torch_curr_state)
        np.random.set_state(self.np_curr_state)
        for device, gpu_rng_state in zip(self.devices, self.curr_gpu_rng_states):
            torch.cuda.set_rng_state(gpu_rng_state, device)

class Cache_SVRG(Base_SVRG):
    def __init__(self, optim):
        super().__init__(optim)

    def start_collect_grads_phase(self):
        # reset both th empty list
        self.optim.zero_grad()
        self.mini_batch_grads = list()

    def start_snapshot_phase(self):
        self.curr_step = 0
        self.start_collect_grads_phase()

    def end_snapshot_phase(self):
        self.snapshot_mini_batch_grads = self.mini_batch_grads
        self.snapshot_full_batch_grad = []
        for grads in zip(*self.snapshot_mini_batch_grads):
            avg_grad = torch.mean(torch.stack(grads, axis = 0), dim = 0)
            self.snapshot_full_batch_grad.append(avg_grad)
        self.optim.zero_grad()
    
    def start_model_phase(self):
        self.start_collect_grads_phase()

    def end_model_phase(self):
        self.model_mini_batch_grads = self.mini_batch_grads
        self.model_full_batch_grad = []
        for grads in zip(*self.model_mini_batch_grads):
            avg_grad = torch.mean(torch.stack(grads, dim = 0), dim = 0)
            self.model_full_batch_grad.append(avg_grad)
        self.optim.zero_grad()
    
    def collect_mini_batch_grad(self):
        curr_grad = list()
        for group in self.param_groups:  
            for weight in group['params']:
                curr_grad.append(weight.grad.clone())
        self.mini_batch_grads.append(curr_grad)

    def compute_optimal_coefficient(self):
        E_xys = []
        E_yys = [] 
        for model_grads, snapshot_grads in zip(zip(*self.model_mini_batch_grads), zip(*self.snapshot_mini_batch_grads)):
            E_xys.append(torch.mean(torch.stack(model_grads, dim = 0)*torch.stack(snapshot_grads, dim = 0), dim = 0))
            E_yys.append(torch.mean(torch.stack(snapshot_grads, dim = 0)**2, dim = 0))
        self.coefficient = []
        for i in range(len(self.snapshot_full_batch_grad)):
            E_x = self.model_full_batch_grad[i]
            E_y = self.snapshot_full_batch_grad[i]
            E_xy = E_xys[i]
            E_yy = E_yys[i]
            if self.curr_step == 0:
                value = torch.ones_like(E_xy)
            else:
                value = (E_xy - E_x*E_y)/(E_yy - E_y**2+1e-24)
            self.coefficient.append(torch.clamp(value, min=-2,max=2))

    def update_grad(self):
        # get the exact stepth mini batch gradient
        mini_batch_grad = self.snapshot_mini_batch_grads[self.curr_step]
        coefficient = self.coefficient
        if isinstance(coefficient, np.floating):
            coefficient = torch.full((self.num_weights,), coefficient)
        i = 0
        for group in self.param_groups:
            for weight in group['params']:
                # core SVRG gradient
                weight.grad = weight.grad.data + (self.snapshot_full_batch_grad[i] - mini_batch_grad[i]) * coefficient[i]
                i += 1
    def step(self):
        self.curr_step += 1
        super().step()

class Vanilla_SVRG(Base_SVRG):
    def __init__(self, optim, snapshot_optim):
        super().__init__(optim)
        self.snapshot_optim = snapshot_optim
        self.full_batch_param_groups = None
    
    def calculate_full_batch_grad(self):
        if self.full_batch_param_groups is None:
            self.full_batch_param_groups = copy.deepcopy(self.optim.param_groups)
        for old_group, new_group in zip(self.full_batch_param_groups, self.optim.param_groups):  
            for weight, new_weight in zip(old_group['params'], new_group['params']):
                weight.grad = new_weight.grad.clone()
        self.zero_grad()

    def zero_grad(self):
        super().zero_grad()
        self.snapshot_optim.zero_grad()

    def update_grad(self):
        # get the exact stepth mini batch gradient
        for group, full_batch_group, stochastic_group in zip(self.optim.param_groups, self.full_batch_param_groups, self.snapshot_optim.param_groups):
            for weight, full_batch_weight, stochastic_weight in zip(group['params'], full_batch_group['params'], stochastic_group['params']):
                # core SVRG gradient
                weight.grad = weight.grad.data + (full_batch_weight.grad.data - stochastic_weight.grad.data) * self.coefficient
    
    def synchronize(self):
        for old_group, new_group in zip(self.snapshot_optim.param_groups, self.optim.param_groups):  
            for weight, new_weight in zip(old_group['params'], new_group['params']):
                weight.data[:] = new_weight.data[:]

def svrg_scheduler(coefficient, epochs, niter_per_ep, snapshot_pass_freq, schedule="constant"):
    if schedule in ['constant', "optimal"]:
        values = np.full(epochs*niter_per_ep, coefficient)
    else:
        partitions = range(0, niter_per_ep, snapshot_pass_freq)
        end_values = np.linspace(coefficient, 0, epochs*len(partitions))
        values = []
        for i in range(epochs):
            for k, start in enumerate(partitions):
                index = i*len(partitions)+k
                end = min(niter_per_ep, start + snapshot_pass_freq)
                value = np.full(end - start, end_values[index])
                values.append(value)
        values = np.concatenate(values, axis = 0)
    assert len(values) == epochs*niter_per_ep
    return values

def variance_metrics(all_grads):
    cosine_dist = cosine_distance(all_grads)
    variance, spectral_norm = raw_variance_and_spectral_norm(all_grads)
    return cosine_dist, variance, spectral_norm

def cosine_distance(grads):
    running_dist = 0
    for i, j in combinations(range(len(grads)), 2):
        cosine_similiarity = torch.dot(grads[i], grads[j])/(torch.norm(grads[i])*torch.norm(grads[j]))
        running_dist += 1 - cosine_similiarity
    return running_dist.item() / (len(grads)*(len(grads)-1))

def raw_variance_and_spectral_norm(grads):
    cov = calculate_covariance(grads)
    trace = torch.trace(cov)
    spectral_norm = torch.linalg.norm(cov, ord = 2)
    return trace.item(), spectral_norm.item()

def calculate_covariance(X):
    mean = torch.mean(X, dim=0, keepdim=True)
    X = X - mean
    return 1/X.size(0) * X @ X.transpose(-1, -2)
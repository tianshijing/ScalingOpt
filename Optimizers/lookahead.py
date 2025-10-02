#!/usr/bin/env python
# -*- coding: utf-8 -*-

import torch
from torch.optim.optimizer import Optimizer

class Lookahead(Optimizer):
    def __init__(self, optimizer, k=5, alpha=0.5):
        """
        Lookahead optimizer wrapper.
        
        :param optimizer: Inner optimizer
        :param k: Number of lookahead steps
        :param alpha: Slow weight update coefficient
        """
        self.optimizer = optimizer
        self.k = k
        self.alpha = alpha
        self.param_groups = self.optimizer.param_groups
        self.state = defaultdict(dict)
        self.fast_state = self.optimizer.state
        
        for group in self.param_groups:
            group["step_counter"] = 0

    def __getstate__(self):
        return {
            'state': self.state,
            'optimizer': self.optimizer,
            'k': self.k,
            'alpha': self.alpha
        }

    def __setstate__(self, state):
        self.__dict__.update(state)

    def step(self, closure=None):
        loss = None
        if closure is not None:
            loss = closure()

        for group in self.param_groups:
            group["step_counter"] += 1
            if group["step_counter"] % self.k == 0:
                for fast_p in group['params']:
                    if fast_p.grad is None:
                        continue
                    param_state = self.state[fast_p]
                    if 'slow_buffer' not in param_state:
                        param_state['slow_buffer'] = torch.empty_like(fast_p.data)
                        param_state['slow_buffer'].copy_(fast_p.data)
                    slow = param_state['slow_buffer']
                    slow += (fast_p.data - slow) * self.alpha
                    fast_p.data.copy_(slow)

        self.optimizer.step(closure)
        return loss

    def state_dict(self):
        fast_state_dict = self.optimizer.state_dict()
        slow_state_dict = {
            'state': self.state,
            'param_groups': self.param_groups,
        }
        return {
            'fast_state_dict': fast_state_dict,
            'slow_state_dict': slow_state_dict,
            'k': self.k,
            'alpha': self.alpha
        }

    def load_state_dict(self, state_dict):
        self.optimizer.load_state_dict(state_dict['fast_state_dict'])
        self.state = state_dict['slow_state_dict']['state']
        self.param_groups = state_dict['slow_state_dict']['param_groups']
        self.k = state_dict['k']
        self.alpha = state_dict['alpha']
#!/usr/bin/env python
# -*- coding: utf-8 -*-

import torch

class SAM(torch.optim.Optimizer):
    def __init__(self, params, base_optimizer, rho=0.05):
        """
        Sharpness-Aware Minimization (SAM) optimizer.
        
        :param params: Model parameters
        :param base_optimizer: Base optimizer (e.g., SGD, Adam)
        :param rho: Neighborhood size
        """
        defaults = dict(rho=rho)
        super(SAM, self).__init__(params, defaults)
        self.base_optimizer = base_optimizer(params, **base_optimizer.defaults)

    @torch.no_grad()
    def first_step(self, zero_grad=False):
        grad_norm = self._grad_norm()
        for group in self.param_groups:
            for p in group['params']:
                if p.grad is None:
                    continue
                e_w = (torch.sqrt(grad_norm) / p.grad.norm()).clamp(max=group['rho']) * p.grad
                p.add_(e_w)  # climb to the local maximum "w + e(w)"
                self.state[p]['e_w'] = e_w

        if zero_grad:
            self.zero_grad()

    @torch.no_grad()
    def second_step(self, zero_grad=False):
        for group in self.param_groups:
            for p in group['params']:
                if p.grad is None:
                    continue
                p.sub_(self.state[p]['e_w'])  # get back to "w" from "w + e(w)"

        self.base_optimizer.step()  # do the actual "sharpness-aware" update

        if zero_grad:
            self.zero_grad()

    def _grad_norm(self):
        shared_device = self.param_groups[0]['params'][0].device  # put everything on the same device, in case of model parallelism
        norm = torch.norm(
            torch.stack([
                p.grad.norm(p=2).to(shared_device)
                for group in self.param_groups
                for p in group['params']
                if p.grad is not None
            ]),
            p=2
        )
        return norm

    def load_state_dict(self, state_dict):
        super().load_state_dict(state_dict)
        self.base_optimizer.param_groups = self.param_groups
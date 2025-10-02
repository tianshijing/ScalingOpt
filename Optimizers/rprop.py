#!/usr/bin/env python
# -*- coding: utf-8 -*-

import torch
from torch.optim.optimizer import Optimizer

class Rprop(Optimizer):
    def __init__(self, params, etas=(0.5, 1.2), step_sizes=(1e-6, 50)):
        defaults = dict(etas=etas, step_sizes=step_sizes)
        super(Rprop, self).__init__(params, defaults)

    def __setstate__(self, state):
        super(Rprop, self).__setstate__(state)

    def step(self, closure=None):
        loss = None
        if closure is not None:
            loss = closure()

        for group in self.param_groups:
            etas = group['etas']
            step_sizes = group['step_sizes']

            for p in group['params']:
                if p.grad is None:
                    continue
                d_p = p.grad.data

                state = self.state[p]

                # State initialization
                if len(state) == 0:
                    state['step'] = 0
                    state['prev'] = torch.zeros_like(d_p)
                    state['step_size'] = torch.full_like(d_p, step_sizes[0])

                prev = state['prev']
                step_size = state['step_size']

                sign = torch.sign(d_p * prev)
                step_size.mul_(torch.where(sign > 0, etas[1], etas[0]))
                step_size.clamp_(step_sizes[0], step_sizes[1])

                # Update parameters
                p.data.addcmul_(d_p.sign(), -step_size, value=-1)

                # Save the current gradient
                state['prev'] = d_p.clone()
                state['step'] += 1

        return loss

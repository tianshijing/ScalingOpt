#!/usr/bin/env python
# -*- coding: utf-8 -*-

import torch
from torch.optim.optimizer import Optimizer

class NAG(Optimizer):
    def __init__(self, params, lr=1e-3, momentum=0.9):
        if lr < 0.0:
            raise ValueError("Invalid learning rate: {}".format(lr))
        if momentum < 0.0:
            raise ValueError("Invalid momentum value: {}".format(momentum))

        defaults = dict(lr=lr, momentum=momentum)
        super(NAG, self).__init__(params, defaults)

    def __setstate__(self, state):
        super(NAG, self).__setstate__(state)

    def step(self, closure=None):
        loss = None
        if closure is not None:
            loss = closure()

        for group in self.param_groups:
            lr = group['lr']
            momentum = group['momentum']

            for p in group['params']:
                if p.grad is None:
                    continue
                d_p = p.grad.data

                state = self.state[p]

                # State initialization
                if len(state) == 0:
                    state['momentum_buffer'] = torch.zeros_like(p.data)

                buf = state['momentum_buffer']

                # Update momentum_buffer
                buf.mul_(momentum).add_(d_p)

                # Nesterov look-ahead gradient
                look_ahead_grad = d_p.add(buf, alpha=momentum)

                # Update parameters
                p.data.add_(look_ahead_grad, alpha=-lr)

        return loss


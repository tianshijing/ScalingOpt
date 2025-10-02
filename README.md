# ScalingOpt

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-green) 
![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green)

Welcome to ScalingOpt(Optimization Community), a meticulously curated collection of optimization algorithms implemented in PyTorch, designed to serve the diverse needs of the machine learning research community.

If this repository has been helpful to you, please consider giving it a ⭐️ to show your support. Your support helps us reach more researchers and contributes to the growth of this resource. Thank you! ☺️

## Table of Contents

- [Introduction](#introduction)
- [Awesome Optimizers](#awesome-optimizers)
- [Optimizer Paradigm Definition](#optimizer-paradigm-definition)
- [Our Latest Work: A Decade’s Battle on the Bias of Vision Backbone and Optimizer](#our-latest-work-a-decades-battle-on-the-bias-of-vision-backbone-and-optimizer)
- [Benchmark](#benchmark)
- [Four categories of optimizers](#four-categories-of-optimizers)
- [Recommended Hyperparameter Settings](#recommended-hyperparameter-settings)
- [Contribution](#contribution)
## Introduction

**ScalingOpt** - A comprehensive platform for discovering, comparing, and contributing to cutting-edge optimization algorithms designed for large-scale machine learning.

[![GitHub](https://img.shields.io/badge/GitHub-ScalingOpt-blue?style=flat-square&logo=github)](https://github.com/tianshijing/ScalingOpt)
[![Website](https://img.shields.io/badge/Website-Live-green?style=flat-square)](https://tianshijing.github.io/ScalingOpt/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

## 🌟 Introduction

ScalingOpt is a comprehensive platform dedicated to optimization algorithms for large-scale machine learning. As deep learning models grow increasingly complex and datasets become massive, choosing the right optimizer becomes crucial for achieving optimal performance and efficiency.

This platform provides:

- **📚 Extensive Optimizer Library**: 44+ optimization algorithms from foundational SGD to cutting-edge Adam-mini and Muon
- **🔬 Research Hub**: 21+ research papers covering optimization theory and latest developments  
- **📊 Performance Benchmarks**: Comprehensive comparisons across multiple datasets and model architectures
- **🎓 Educational Resources**: Tutorials, guides, and learning paths for all skill levels
- **🤝 Open Source Community**: Collaborative environment for researchers and practitioners

## Awesome Optimizers
<!-- 
<details>
<summary><strong>Click to Expand</strong></summary>-->

<h3>Awesome Optimizers List</h3>

Here is a list of some popular optimizers and their corresponding papers:

| Optimizer Name | Paper | Year | Advantages |
|----------------|-------|------|------------|
| SGD | [On the importance of initialization and momentum in deep learning](https://www.cs.toronto.edu/~hinton/absps/momentum.pdf) | 1999 | Simple and effective; foundational for many other optimizers. |
| Rprop | [Rprop - A Fast Adaptive Learning Algorithm](http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.52.4576) | 2000 | Adaptive step sizes per parameter; fast convergence for small networks. |
| AdaGrad | [Adaptive Subgradient Methods for Online Learning and Stochastic Optimization](http://www.jmlr.org/papers/volume12/duchi11a/duchi11a.pdf) | 2011 | Adaptive learning rates; effective for sparse data. |
| RMSprop | [Lecture 6.5 - rmsprop, COURSERA: Neural Networks for Machine Learning](https://www.cs.toronto.edu/~tijmen/csc321/slides/lecture_slides_lec6.pdf) | 2012 | Adaptive learning rates; suitable for non-stationary objectives. |
| AdaDelta | [ADADELTA: An Adaptive Learning Rate Method](https://arxiv.org/abs/1212.5701) | 2012 | Adaptive learning rates without manual tuning; addresses AdaGrad's diminishing learning rates. |
| Adam | [Adam: A Method for Stochastic Optimization](https://arxiv.org/abs/1412.6980) | 2014 | Combines best properties of AdaGrad and RMSprop; widely used and effective. |
| LARS | [Large Batch Training of Convolutional Networks](https://arxiv.org/abs/1708.03888) | 2017 | Enables large batch training with stability; improves training efficiency. |
| AdamW | [Decoupled Weight Decay Regularization](https://arxiv.org/abs/1711.05101) | 2017 | Fixes weight decay regularization in Adam; improves generalization. |
| SWATS | [Improving Generalization Performance by Switching from Adam to SGD](https://arxiv.org/abs/1712.07628) | 2017 | Hybrid approach combining Adam and SGD; improves generalization. |
| Shampoo | [Shampoo: Preconditioned Stochastic Tensor Optimization](https://arxiv.org/abs/1802.09568) | 2018 | Preconditions stochastic tensor optimization; improves convergence. |
| QHAdam | [Quasi-hyperbolic momentum and Adam for deep learning](https://arxiv.org/abs/1810.06801) | 2018 | Combines quasi-hyperbolic terms with Adam; balances momentum and adaptivity. |
| QHM | [Quasi-hyperbolic momentum and Adam for deep learning](https://arxiv.org/abs/1810.06801) | 2018 | Introduces quasi-hyperbolic momentum; balances Nesterov momentum and SGD. |
| Yogi | [Adaptive Methods for Nonconvex Optimization](https://papers.nips.cc/paper/8186-adaptive-methods-for-nonconvex-optimization.pdf) | 2018 | Improved update rule for adaptive methods; handles nonconvex optimization better. |
| AdaFactor | [AdaFactor: Adaptive Learning Rates with Sublinear Memory Cost](https://arxiv.org/abs/1804.04235) | 2018 | Reduces memory usage compared to Adam; suitable for large models. |
| AggMo | [Aggregated Momentum: Stability Through Passive Damping](https://arxiv.org/abs/1804.00325) | 2018 | Uses multiple momentum terms; improves stability and convergence. |
| PID | [A PID Controller Approach for Stochastic Optimization of Deep Networks](https://arxiv.org/abs/1802.07640) | 2018 | Employs PID control principles; improves convergence and stability. |
| AccSGD | [Accelerating Stochastic Gradient Descent via Online Learning to Learn](https://arxiv.org/abs/1807.02259) | 2018 | Accelerates SGD by learning to adapt the learning rate online. |
| AdaBound | [Adaptive Gradient Methods with Dynamic Bound of Learning Rate](https://arxiv.org/abs/1902.09843) | 2019 | Bounds the learning rate dynamically; combines benefits of adaptive and SGD methods. |
| LAMB | [Large Batch Optimization for Deep Learning: Training BERT in 76 minutes](https://arxiv.org/abs/1904.00962) | 2019 | Enables large batch training for BERT; improves training efficiency. |
| Lookahead | [Lookahead Optimizer: k steps forward, 1 step back](https://arxiv.org/abs/1907.08610) | 2019 | Combines with other optimizers to improve convergence and stability. |
| RAdam | [On the Variance of the Adaptive Learning Rate and Beyond](https://arxiv.org/abs/1908.03265) | 2019 | Rectifies variance of the adaptive learning rate; improves stability. |
| AdaMod | [AdaMod: An Adaptive Momentum Method for Stochastic Gradient Descent](https://arxiv.org/abs/1910.12249) | 2019 | Modulates the momentum term adaptively; improves stability and convergence. |
| Ranger | [Ranger: A Hybrid Optimizer for Deep Learning](https://medium.com/@lessw/new-deep-learning-optimizer-ranger-synergistic-combination-of-radam-lookahead-for-the-best-of-2dc83f79a48d) | 2019 | Combines RAdam and Lookahead; improves convergence and generalization. |
| NAdam | [Incorporating Nesterov Momentum into Adam](https://openreview.net/forum?id=OM0jvwB8jIp57ZJjtNEZ) | 2019 | Combines Nesterov momentum with Adam; improves convergence. |
| NovoGrad | [Stochastic Gradient Methods with Layer-wise Adaptive Moments for Training of Deep Networks](https://arxiv.org/abs/1905.11286) | 2019 | Uses layer-wise adaptive moments; efficient for deep networks. |
| DiffGRAD | [DiffGrad: An Optimization Method for Convolutional Neural Networks](https://arxiv.org/abs/1909.11015) | 2019 | Differentiates the gradient history; improves convergence. |
| Adahessian | [ADAHESSIAN: An Adaptive Second Order Optimizer for Machine Learning](https://arxiv.org/abs/2006.00719) | 2020 | Uses Hessian information adaptively; suitable for nonconvex optimization. |
| AdaBelief | [AdaBelief Optimizer: Adapting Stepsizes by the Belief in Observed Gradients](https://arxiv.org/abs/2010.07468) | 2020 | Adapts stepsizes based on the belief in observed gradients; improves convergence. |
| AdamP | [Slowing Down the Weight Norm Increase in Momentum-based Optimizers](https://arxiv.org/abs/2006.08217) | 2020 | Mitigates weight norm increase; improves generalization. |
| SGDP | [Slowing Down the Weight Norm Increase in Momentum-based Optimizers](https://arxiv.org/abs/2006.08217) | 2020 | Prevents excessive weight norm increase; improves stability. |
| Apollo | [Apollo: An Adaptive Parameter-wise Diagonal Quasi-Newton Method for Nonconvex Stochastic Optimization](https://arxiv.org/abs/2009.13586) | 2020 | Adaptive quasi-Newton method; efficient for nonconvex optimization. |
| SAM | [Sharpness-Aware Minimization for Efficiently Improving Generalization](https://arxiv.org/abs/2010.01412) | 2020 | Minimizes sharpness of the loss landscape; improves generalization. |
| MADGRAD | [Adaptive Gradient Methods with Dynamic Bound of Learning Rate](https://arxiv.org/abs/2101.11075) | 2021 | Dynamically bounds the learning rate; improves stability. |
| LION | [LION: Lévy-inspired Optimizer for Deep Learning](https://arxiv.org/abs/2102.07227) | 2021 | Inspired by Lévy flights; explores the loss landscape efficiently. |
| Adan | [Adaptive Nesterov Momentum Algorithm for Faster Optimizing Deep Models](https://arxiv.org/abs/2208.06677) | 2022 | Adaptive Nesterov momentum; faster optimization for deep models. |
| CAME | [CAME: Confidence-guided Adaptive Memory Efficient Optimization](https://arxiv.org/abs/2307.02047) | 2023 | Adaptive and memory-efficient; improves optimization with confidence guidance. |
| Sophia | [Sophia: A Scalable Stochastic Second-order Optimizer for Language Model Pre-training](https://arxiv.org/abs/2305.14342) | 2023 | Scalable second-order optimizer; efficient for large-scale pre-training. |
| SVRG | [A Coefficient Makes SVRG Effective](https://arxiv.org/abs/2311.05589) | 2023 | Adaptive and memory-efficient, enhancing optimization with a confidence-guided adjustment of variance reduction strength. |
| Prodigy | [Prodigy: An Expeditiously Adaptive Parameter-Free Learner](https://arxiv.org/abs/2306.06101) | 2024 | Prodigy is an adaptive, parameter-free optimizer that dynamically adjusts the learning rate by accurately estimating the distance to the optimal solution, significantly improving convergence speed and solution quality. |
| Adam-mini | [Adam-mini: Use Fewer Learning Rates To Gain More](https://arxiv.org/abs/2406.16793) | 2024 | Reduces the number of learning rates; simplifies hyperparameter tuning. |
| GALORE | [GALORE: Gradient Low-Rank Projection Training](https://arxiv.org/abs/2403.03507) | 2024 | Projects gradients to low-rank subspaces with dynamic switching; memory-efficient. |
| SWAN | [SWAN: State-Free Learning for Deep Neural Networks](https://arxiv.org/pdf/2412.13148) | 2024 | No optimizer state storage; scales additively (small models) or multiplicatively (large models). |
| APOLLO | [APOLLO: Memory-Efficient Optimization via Low-Rank Gradient Approximation](https://arxiv.org/abs/2412.05270) | 2024 | Low-rank gradient projection with diagonal scaling. |
| AdEMAMix | [AdEMAMix: Adaptive EMA Momentum for Deep Learning](https://arxiv.org/abs/2409.03137) | 2024 | Dual EMA system balances recent/historical gradients. |
| Muon | [Muon: Orthogonal Weight Updates via Newton-Schulz Iteration](https://arxiv.org/abs/2502.16982) | 2024 | Orthogonalizes gradient momentum via Newton-Schulz. |
| SOAP | [SOAP: Efficient Stochastic Optimization of the Second-Order Loss](https://arxiv.org/abs/2409.11321) | 2025 | Shampoo/Adafactor hybrid that runs AdamW in Shampoo's eigenbasis. |
| SPAM | [SPAM: Spike-Aware Momentum Optimization](https://arxiv.org/abs/2501.06842) | 2025 | Moment resetting + spike-aware clipping + sparse momentum. |
</details>

## 📊 Platform Statistics

- **Optimizers** 
- **Research Papers** 
- **Benchmark Suites** 
- **Growing Community** 

## 🤝 Contributing

We welcome contributions from the optimization community! Here's how you can help:

### 📝 Add New Optimizers
1. Implement your optimizer in the `Optimizers/` directory
2. Follow our coding standards and documentation guidelines
3. Submit a pull request with performance benchmarks

### 📊 Improve Benchmarks
1. Add new datasets or model architectures
2. Improve existing performance metrics
3. Contribute visualization improvements

### 📚 Educational Content
1. Write tutorials or guides
2. Translate content to other languages
3. Improve existing documentation

### 🐛 Bug Reports & Feature Requests
- Use GitHub Issues for bug reports
- Suggest new features or improvements
- Help improve the website and user experience

## 🌐 Community

Join our growing community of optimization researchers and practitioners:

- **GitHub Discussions**: Technical discussions and Q&A
- **Research Collaboration**: Connect with other researchers
- **Blog Posts**: Share your optimization insights
- **Tutorial Contributions**: Help others learn optimization

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

We thank the optimization research community for their groundbreaking work and contributions. Special thanks to:

- All researchers who developed the optimization algorithms featured in this platform
---

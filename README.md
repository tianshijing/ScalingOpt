# ScalingOpt - Optimization Community
<img width="1536" height="1024" alt="ChatGPT Image 2025年10月5日 02_25_58" src="https://github.com/user-attachments/assets/ce823292-491f-4221-bc49-c964b6b5fa0b" />

[![GitHub](https://img.shields.io/badge/GitHub-ScalingOpt-blue?style=flat-square&logo=github)](https://github.com/tianshijing/ScalingOpt)
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-green) 
![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green)

Welcome to **ScalingOpt (Optimization Community)**, a meticulously curated collection of optimization algorithms implemented in PyTorch, designed to serve the diverse needs of the machine learning research community.

If this repository has been helpful to you, please consider giving it a ⭐️ to show your support. Your support helps us reach more researchers and contributes to the growth of this resource. Thank you! ☺️

## 🌟 Introduction

**ScalingOpt** is a comprehensive platform dedicated to optimization algorithms for large-scale machine learning. As deep learning models grow increasingly complex and datasets become massive, choosing the right optimizer becomes crucial for achieving optimal performance and efficiency.

This platform provides:

- **📚 Extensive Optimizer Library**: optimizers from foundational SGD to cutting-edge Adam-mini and Muon
- **🔬 Research Hub**: research papers covering optimization theory and latest developments  
- **📊 Performance Benchmarks**: Comprehensive comparisons across multiple datasets and model architectures
- **🎓 Educational Resources**: Tutorials, guides, and learning paths for all skill levels
- **🤝 Open Source Community**: Collaborative environment for researchers and practitioners

## 🚀 Awesome Optimizers Collection

A comprehensive collection of optimization algorithms spanning from foundational methods to cutting-edge research:

### 📚 Complete Optimizer List

| **Optimizer** | **Year** | **Paper** |
|:-------------:|:--------:|:---------:|
| **SGD** | 1999 | [On the importance of initialization and momentum in deep learning](https://www.cs.toronto.edu/~hinton/absps/momentum.pdf) |
| **Rprop** | 2000 | [Rprop - A Fast Adaptive Learning Algorithm](http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.52.4576) |
| **AdaGrad** | 2011 | [Adaptive Subgradient Methods for Online Learning and Stochastic Optimization](http://www.jmlr.org/papers/volume12/duchi11a/duchi11a.pdf) |
| **RMSprop** | 2012 | [Lecture 6.5 - rmsprop, COURSERA: Neural Networks for Machine Learning](https://www.cs.toronto.edu/~tijmen/csc321/slides/lecture_slides_lec6.pdf) |
| **AdaDelta** | 2012 | [ADADELTA: An Adaptive Learning Rate Method](https://arxiv.org/abs/1212.5701) |
| **Adam** | 2014 | [Adam: A Method for Stochastic Optimization](https://arxiv.org/abs/1412.6980) |
| **LARS** | 2017 | [Large Batch Training of Convolutional Networks](https://arxiv.org/abs/1708.03888) |
| **AdamW** | 2017 | [Decoupled Weight Decay Regularization](https://arxiv.org/abs/1711.05101) |
| **SWATS** | 2017 | [Improving Generalization Performance by Switching from Adam to SGD](https://arxiv.org/abs/1712.07628) |
| **Shampoo** | 2018 | [Shampoo: Preconditioned Stochastic Tensor Optimization](https://arxiv.org/abs/1802.09568) |
| **QHAdam** | 2018 | [Quasi-hyperbolic momentum and Adam for deep learning](https://arxiv.org/abs/1810.06801) |
| **QHM** | 2018 | [Quasi-hyperbolic momentum and Adam for deep learning](https://arxiv.org/abs/1810.06801) |
| **Yogi** | 2018 | [Adaptive Methods for Nonconvex Optimization](https://papers.nips.cc/paper/8186-adaptive-methods-for-nonconvex-optimization.pdf) |
| **AdaFactor** | 2018 | [AdaFactor: Adaptive Learning Rates with Sublinear Memory Cost](https://arxiv.org/abs/1804.04235) |
| **AggMo** | 2018 | [Aggregated Momentum: Stability Through Passive Damping](https://arxiv.org/abs/1804.00325) |
| **PID** | 2018 | [A PID Controller Approach for Stochastic Optimization of Deep Networks](https://arxiv.org/abs/1802.07640) |
| **AccSGD** | 2018 | [Accelerating Stochastic Gradient Descent via Online Learning to Learn](https://arxiv.org/abs/1807.02259) |
| **AdaBound** | 2019 | [Adaptive Gradient Methods with Dynamic Bound of Learning Rate](https://arxiv.org/abs/1902.09843) |
| **LAMB** | 2019 | [Large Batch Optimization for Deep Learning: Training BERT in 76 minutes](https://arxiv.org/abs/1904.00962) |
| **Lookahead** | 2019 | [Lookahead Optimizer: k steps forward, 1 step back](https://arxiv.org/abs/1907.08610) |
| **RAdam** | 2019 | [On the Variance of the Adaptive Learning Rate and Beyond](https://arxiv.org/abs/1908.03265) |
| **AdaMod** | 2019 | [AdaMod: An Adaptive Momentum Method for Stochastic Gradient Descent](https://arxiv.org/abs/1910.12249) |
| **Ranger** | 2019 | [Ranger: A Hybrid Optimizer for Deep Learning](https://medium.com/@lessw/new-deep-learning-optimizer-ranger-synergistic-combination-of-radam-lookahead-for-the-best-of-2dc83f79a48d) |
| **NAdam** | 2019 | [Incorporating Nesterov Momentum into Adam](https://openreview.net/forum?id=OM0jvwB8jIp57ZJjtNEZ) |
| **NovoGrad** | 2019 | [Stochastic Gradient Methods with Layer-wise Adaptive Moments for Training of Deep Networks](https://arxiv.org/abs/1905.11286) |
| **DiffGRAD** | 2019 | [DiffGrad: An Optimization Method for Convolutional Neural Networks](https://arxiv.org/abs/1909.11015) |
| **Adahessian** | 2020 | [ADAHESSIAN: An Adaptive Second Order Optimizer for Machine Learning](https://arxiv.org/abs/2006.00719) |
| **AdaBelief** | 2020 | [AdaBelief Optimizer: Adapting Stepsizes by the Belief in Observed Gradients](https://arxiv.org/abs/2010.07468) |
| **AdamP** | 2020 | [Slowing Down the Weight Norm Increase in Momentum-based Optimizers](https://arxiv.org/abs/2006.08217) |
| **SGDP** | 2020 | [Slowing Down the Weight Norm Increase in Momentum-based Optimizers](https://arxiv.org/abs/2006.08217) |
| **SAM** | 2020 | [Sharpness-Aware Minimization for Efficiently Improving Generalization](https://arxiv.org/abs/2010.01412) |
| **MADGRAD** | 2021 | [Adaptive Gradient Methods with Dynamic Bound of Learning Rate](https://arxiv.org/abs/2101.11075) |
| **LION** | 2021 | [LION: Lévy-inspired Optimizer for Deep Learning](https://arxiv.org/abs/2102.07227) |
| **Adan** | 2022 | [Adaptive Nesterov Momentum Algorithm for Faster Optimizing Deep Models](https://arxiv.org/abs/2208.06677) |
| **CAME** | 2023 | [CAME: Confidence-guided Adaptive Memory Efficient Optimization](https://arxiv.org/abs/2307.02047) |
| **Sophia** | 2023 | [Sophia: A Scalable Stochastic Second-order Optimizer for Language Model Pre-training](https://arxiv.org/abs/2305.14342) |
| **SVRG** | 2023 | [A Coefficient Makes SVRG Effective](https://arxiv.org/abs/2311.05589) |
| **Prodigy** | 2024 | [Prodigy: An Expeditiously Adaptive Parameter-Free Learner](https://arxiv.org/abs/2306.06101) |
| **Adam-mini** | 2024 | [Adam-mini: Use Fewer Learning Rates To Gain More](https://arxiv.org/abs/2406.16793) |
| **GALORE** | 2024 | [GALORE: Gradient Low-Rank Projection Training](https://arxiv.org/abs/2403.03507) |
| **SWAN** | 2024 | [SWAN: State-Free Learning for Deep Neural Networks](https://arxiv.org/pdf/2412.13148) |
| **Apollo** | 2024 | [APOLLO: SGD-like Memory, AdamW-level Performance](https://arxiv.org/abs/2412.05270) |
| **AdEMAMix** | 2024 | [AdEMAMix: Adaptive EMA Momentum for Deep Learning](https://arxiv.org/abs/2409.03137) |
| **Muon** | 2024 | [Muon: Orthogonal Weight Updates via Newton-Schulz Iteration](https://arxiv.org/abs/2502.16982) |
| **MARS** | 2024 | [MARS: Unleashing the Power of Variance Reduction for Training Large Models](https://arxiv.org/abs/2411.10438) |
| **SOAP** | 2024 | [SOAP: Improving and Stabilizing Shampoo using Adam](https://arxiv.org/abs/2409.11321) |
| **SPAM** | 2024 | [SPAM: Spike-Aware Adam with Momentum Reset for Stable LLM Training](https://arxiv.org/abs/2501.06842) |
| **Stable-SPAM** | 2024 | [Stable-SPAM: How to Train in 4-Bit More Stably than 16-Bit Adam](https://arxiv.org/abs/2502.17055) |

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

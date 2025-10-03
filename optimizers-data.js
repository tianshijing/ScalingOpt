// Optimizers data for static site
const optimizers = [
  {
    "id": "sgd",
    "name": "SGD",
    "fullName": "Stochastic Gradient Descent",
    "description": "Simple and effective foundational optimizer for many other algorithms",
    "year": 1999,
    "category": "First-order",
    "paper": {
      "title": "On the importance of initialization and momentum in deep learning",
      "url": "https://www.cs.toronto.edu/~hinton/absps/momentum.pdf",
      "authors": [
        "Ilya Sutskever",
        "James Martens",
        "George Dahl",
        "Geoffrey Hinton"
      ]
    },
    "advantages": [
      "Simple and well-understood",
      "Memory efficient",
      "Works well with large datasets",
      "Good baseline performance"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.01,
        "range": "1e-5 to 1e-1",
        "description": "Learning rate"
      },
      "momentum": {
        "default": 0.9,
        "range": "0.0 to 1.0",
        "description": "Momentum factor"
      },
      "weight_decay": {
        "default": 0.0001,
        "range": "0.0 to 1e-2",
        "description": "Weight decay (L2 penalty)"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 85,
    "tags": [
      "foundational",
      "momentum",
      "simple"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/sgd.py"
  },
  {
    "id": "nag",
    "name": "NAG",
    "fullName": "Nesterov Accelerated Gradient",
    "description": "Accelerated gradient method with momentum",
    "year": 1983,
    "category": "Momentum-based",
    "paper": {
      "title": "A method for solving the convex programming problem with convergence rate O(1/k^2)",
      "url": "https://mpawankumar.info/teaching/cdt-big-data/nesterov83.pdf",
      "authors": [
        "Yurii Nesterov"
      ]
    },
    "advantages": [
      "Faster convergence than SGD",
      "Look-ahead momentum",
      "Better for convex problems"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.01,
        "range": "1e-5 to 1e-1",
        "description": "Learning rate"
      },
      "momentum": {
        "default": 0.9,
        "range": "0.0 to 1.0",
        "description": "Momentum factor"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 75,
    "tags": [
      "momentum",
      "acceleration",
      "nesterov"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/NAG.py"
  },
  {
    "id": "rprop",
    "name": "Rprop",
    "fullName": "Resilient Backpropagation",
    "description": "Adaptive step sizes per parameter; fast convergence for small networks",
    "year": 2000,
    "category": "Adaptive",
    "paper": {
      "title": "Rprop - A Fast Adaptive Learning Algorithm",
      "url": "http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.52.4576",
      "authors": [
        "Martin Riedmiller",
        "Heinrich Braun"
      ]
    },
    "advantages": [
      "Adaptive step sizes",
      "Fast convergence for small networks",
      "Robust to parameter scaling"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.01,
        "range": "1e-5 to 1e-1",
        "description": "Initial learning rate"
      },
      "etas": {
        "default": "(0.5, 1.2)",
        "range": "(0.1, 2.0)",
        "description": "Multiplicative increase and decrease factors"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 60,
    "tags": [
      "adaptive",
      "resilient",
      "small-networks"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/rprop.py"
  },
  {
    "id": "adagrad",
    "name": "AdaGrad",
    "fullName": "Adaptive Gradient Algorithm",
    "description": "Adaptive learning rates; effective for sparse data",
    "year": 2011,
    "category": "Adaptive",
    "paper": {
      "title": "Adaptive Subgradient Methods for Online Learning and Stochastic Optimization",
      "url": "http://www.jmlr.org/papers/volume12/duchi11a/duchi11a.pdf",
      "authors": [
        "John Duchi",
        "Elad Hazan",
        "Yoram Singer"
      ]
    },
    "advantages": [
      "Adaptive learning rates",
      "Effective for sparse data",
      "No manual tuning of learning rate"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.01,
        "range": "1e-5 to 1e-1",
        "description": "Learning rate"
      },
      "eps": {
        "default": 1e-10,
        "range": "1e-12 to 1e-6",
        "description": "Small constant for numerical stability"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 70,
    "tags": [
      "adaptive",
      "sparse",
      "subgradient"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adagrad.py"
  },
  {
    "id": "adadelta",
    "name": "AdaDelta",
    "fullName": "Adaptive Delta",
    "description": "Adaptive learning rates without manual tuning; addresses AdaGrad's diminishing learning rates",
    "year": 2012,
    "category": "Adaptive",
    "paper": {
      "title": "ADADELTA: An Adaptive Learning Rate Method",
      "url": "https://arxiv.org/abs/1212.5701",
      "authors": [
        "Matthew D. Zeiler"
      ]
    },
    "advantages": [
      "No manual learning rate tuning",
      "Addresses AdaGrad's diminishing rates",
      "Robust to hyperparameters"
    ],
    "hyperparameters": {
      "rho": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Coefficient for computing running averages"
      },
      "eps": {
        "default": 0.000001,
        "range": "1e-10 to 1e-4",
        "description": "Small constant for numerical stability"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 65,
    "tags": [
      "adaptive",
      "parameter-free",
      "robust"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adadelta.py"
  },
  {
    "id": "rmsprop",
    "name": "RMSprop",
    "fullName": "Root Mean Square Propagation",
    "description": "Adaptive learning rates; suitable for non-stationary objectives",
    "year": 2012,
    "category": "Adaptive",
    "paper": {
      "title": "Lecture 6.5 - rmsprop, COURSERA: Neural Networks for Machine Learning",
      "url": "https://www.cs.toronto.edu/~tijmen/csc321/slides/lecture_slides_lec6.pdf",
      "authors": [
        "Geoffrey Hinton"
      ]
    },
    "advantages": [
      "Adaptive learning rates",
      "Suitable for non-stationary objectives",
      "Works well with RNNs"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.01,
        "range": "1e-5 to 1e-1",
        "description": "Learning rate"
      },
      "alpha": {
        "default": 0.99,
        "range": "0.9 to 0.999",
        "description": "Smoothing constant"
      },
      "eps": {
        "default": 1e-8,
        "range": "1e-10 to 1e-6",
        "description": "Small constant for numerical stability"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 80,
    "tags": [
      "adaptive",
      "rnn",
      "non-stationary"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/rmsprop.py"
  },
  {
    "id": "adam",
    "name": "Adam",
    "fullName": "Adaptive Moment Estimation",
    "description": "Combines the best properties of AdaGrad and RMSprop with bias correction",
    "year": 2014,
    "category": "Adaptive",
    "paper": {
      "title": "Adam: A Method for Stochastic Optimization",
      "url": "https://arxiv.org/abs/1412.6980",
      "authors": [
        "Diederik P. Kingma",
        "Jimmy Ba"
      ]
    },
    "advantages": [
      "Adaptive learning rates",
      "Handles sparse gradients well",
      "Computationally efficient",
      "Little memory requirements"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.999,
        "range": "0.99 to 0.9999",
        "description": "Exponential decay rate for second moment estimates"
      },
      "eps": {
        "default": 1e-8,
        "range": "1e-10 to 1e-6",
        "description": "Small constant for numerical stability"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 95,
    "tags": [
      "adaptive",
      "momentum",
      "popular"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adam.py"
  },
  {
    "id": "adamax",
    "name": "Adamax",
    "fullName": "Adam based on infinity norm",
    "description": "Variant of Adam based on the infinity norm",
    "year": 2014,
    "category": "Adaptive",
    "paper": {
      "title": "Adam: A Method for Stochastic Optimization",
      "url": "https://arxiv.org/abs/1412.6980",
      "authors": [
        "Diederik P. Kingma",
        "Jimmy Ba"
      ]
    },
    "advantages": [
      "More stable than Adam in some cases",
      "Based on infinity norm",
      "Good for sparse parameters"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.002,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.999,
        "range": "0.99 to 0.9999",
        "description": "Exponential decay rate for second moment estimates"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 70,
    "tags": [
      "adaptive",
      "infinity-norm",
      "stable"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adamax.py"
  },
  {
    "id": "lars",
    "name": "LARS",
    "fullName": "Layer-wise Adaptive Rate Scaling",
    "description": "Enables large batch training with stability; improves training efficiency",
    "year": 2017,
    "category": "Adaptive",
    "paper": {
      "title": "Large Batch Training of Convolutional Networks",
      "url": "https://arxiv.org/abs/1708.03888",
      "authors": [
        "Yang You",
        "Igor Gitman",
        "Boris Ginsburg"
      ]
    },
    "advantages": [
      "Enables large batch training",
      "Layer-wise adaptive scaling",
      "Improves training efficiency"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.01,
        "range": "1e-4 to 1e-1",
        "description": "Learning rate"
      },
      "momentum": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Momentum factor"
      },
      "trust_coefficient": {
        "default": 0.001,
        "range": "1e-4 to 1e-2",
        "description": "Trust coefficient for layer-wise adaptation"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 75,
    "tags": [
      "large-batch",
      "layer-wise",
      "scaling"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/lars.py"
  },
  {
    "id": "adamw",
    "name": "AdamW",
    "fullName": "Adam with Decoupled Weight Decay",
    "description": "Adam optimizer with decoupled weight decay regularization",
    "year": 2017,
    "category": "Adaptive",
    "paper": {
      "title": "Decoupled Weight Decay Regularization",
      "url": "https://arxiv.org/abs/1711.05101",
      "authors": [
        "Ilya Loshchilov",
        "Frank Hutter"
      ]
    },
    "advantages": [
      "Better generalization than Adam",
      "Proper weight decay implementation",
      "Works well with transformers",
      "Stable training"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.999,
        "range": "0.99 to 0.9999",
        "description": "Exponential decay rate for second moment estimates"
      },
      "weight_decay": {
        "default": 0.01,
        "range": "0.0 to 0.1",
        "description": "Weight decay coefficient"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 90,
    "tags": [
      "adaptive",
      "weight-decay",
      "transformers"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adamw.py"
  },
  {
    "id": "swats",
    "name": "SWATS",
    "fullName": "Switching from Adam to SGD",
    "description": "Hybrid approach combining Adam and SGD; improves generalization",
    "year": 2017,
    "category": "Novel",
    "paper": {
      "title": "Improving Generalization Performance by Switching from Adam to SGD",
      "url": "https://arxiv.org/abs/1712.07628",
      "authors": [
        "Nitish Shirish Keskar",
        "Richard Socher"
      ]
    },
    "advantages": [
      "Combines Adam and SGD benefits",
      "Improves generalization",
      "Automatic switching mechanism"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.999,
        "range": "0.99 to 0.9999",
        "description": "Exponential decay rate for second moment estimates"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 65,
    "tags": [
      "hybrid",
      "switching",
      "generalization"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/swats.py"
  },
  {
    "id": "shampoo",
    "name": "Shampoo",
    "fullName": "Shampoo Preconditioned Stochastic Tensor Optimization",
    "description": "Preconditions stochastic tensor optimization; improves convergence",
    "year": 2018,
    "category": "Second-order",
    "paper": {
      "title": "Shampoo: Preconditioned Stochastic Tensor Optimization",
      "url": "https://arxiv.org/abs/1802.09568",
      "authors": [
        "Vineet Gupta",
        "Tomer Koren",
        "Yoram Singer"
      ]
    },
    "advantages": [
      "Preconditioned optimization",
      "Improved convergence",
      "Tensor-aware updates"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.01,
        "range": "1e-4 to 1e-1",
        "description": "Learning rate"
      },
      "eps": {
        "default": 0.0001,
        "range": "1e-6 to 1e-2",
        "description": "Regularization parameter"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 70,
    "tags": [
      "second-order",
      "preconditioning",
      "tensor"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/shampoo.py"
  },
  {
    "id": "qhadam",
    "name": "QHAdam",
    "fullName": "Quasi-Hyperbolic Adam",
    "description": "Combines quasi-hyperbolic terms with Adam; balances momentum and adaptivity",
    "year": 2018,
    "category": "Adaptive",
    "paper": {
      "title": "Quasi-hyperbolic momentum and Adam for deep learning",
      "url": "https://arxiv.org/abs/1810.06801",
      "authors": [
        "Jerry Ma",
        "Denis Yarats"
      ]
    },
    "advantages": [
      "Balances momentum and adaptivity",
      "Quasi-hyperbolic terms",
      "Improved convergence"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.999,
        "range": "0.99 to 0.9999",
        "description": "Exponential decay rate for second moment estimates"
      },
      "nu1": {
        "default": 0.7,
        "range": "0.5 to 0.9",
        "description": "Quasi-hyperbolic term for first moment"
      },
      "nu2": {
        "default": 1,
        "range": "0.8 to 1.0",
        "description": "Quasi-hyperbolic term for second moment"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 68,
    "tags": [
      "quasi-hyperbolic",
      "adaptive",
      "momentum"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/qhadam.py"
  },
  {
    "id": "qhm",
    "name": "QHM",
    "fullName": "Quasi-Hyperbolic Momentum",
    "description": "Introduces quasi-hyperbolic momentum; balances Nesterov momentum and SGD",
    "year": 2018,
    "category": "Momentum-based",
    "paper": {
      "title": "Quasi-hyperbolic momentum and Adam for deep learning",
      "url": "https://arxiv.org/abs/1810.06801",
      "authors": [
        "Jerry Ma",
        "Denis Yarats"
      ]
    },
    "advantages": [
      "Balances Nesterov momentum and SGD",
      "Quasi-hyperbolic formulation",
      "Simple and effective"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.01,
        "range": "1e-5 to 1e-1",
        "description": "Learning rate"
      },
      "momentum": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Momentum factor"
      },
      "nu": {
        "default": 0.7,
        "range": "0.5 to 0.9",
        "description": "Quasi-hyperbolic term"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 65,
    "tags": [
      "quasi-hyperbolic",
      "momentum",
      "nesterov"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/qhm.py"
  },
  {
    "id": "yogi",
    "name": "Yogi",
    "fullName": "Yogi Optimizer",
    "description": "Improved update rule for adaptive methods; handles nonconvex optimization better",
    "year": 2018,
    "category": "Adaptive",
    "paper": {
      "title": "Adaptive Methods for Nonconvex Optimization",
      "url": "https://papers.nips.cc/paper/8186-adaptive-methods-for-nonconvex-optimization.pdf",
      "authors": [
        "Manzil Zaheer",
        "Sashank Reddi",
        "Devendra Sachan",
        "Satyen Kale",
        "Sanjiv Kumar"
      ]
    },
    "advantages": [
      "Better for nonconvex optimization",
      "Improved update rule",
      "More stable than Adam"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.01,
        "range": "1e-5 to 1e-1",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.999,
        "range": "0.99 to 0.9999",
        "description": "Exponential decay rate for second moment estimates"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 72,
    "tags": [
      "adaptive",
      "nonconvex",
      "stable"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/yogi.py"
  },
  {
    "id": "adafactor",
    "name": "AdaFactor",
    "fullName": "Adaptive Learning Rates with Sublinear Memory Cost",
    "description": "Reduces memory usage compared to Adam; suitable for large models",
    "year": 2018,
    "category": "Adaptive",
    "paper": {
      "title": "AdaFactor: Adaptive Learning Rates with Sublinear Memory Cost",
      "url": "https://arxiv.org/abs/1804.04235",
      "authors": [
        "Noam Shazeer",
        "Mitchell Stern"
      ]
    },
    "advantages": [
      "Sublinear memory cost",
      "Suitable for large models",
      "Factorized second moments"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "beta2_decay": {
        "default": -0.8,
        "range": "-1.0 to -0.5",
        "description": "Second moment decay rate"
      },
      "eps": {
        "default": 1e-30,
        "range": "1e-40 to 1e-20",
        "description": "Regularization constant"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 78,
    "tags": [
      "memory-efficient",
      "large-models",
      "factorized"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adafactor.py"
  },
  {
    "id": "aggmo",
    "name": "AggMo",
    "fullName": "Aggregated Momentum",
    "description": "Uses multiple momentum terms; improves stability and convergence",
    "year": 2018,
    "category": "Momentum-based",
    "paper": {
      "title": "Aggregated Momentum: Stability Through Passive Damping",
      "url": "https://arxiv.org/abs/1804.00325",
      "authors": [
        "James Lucas",
        "Shengyang Sun",
        "Richard Zemel",
        "Roger Grosse"
      ]
    },
    "advantages": [
      "Multiple momentum terms",
      "Improved stability",
      "Better convergence"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.01,
        "range": "1e-5 to 1e-1",
        "description": "Learning rate"
      },
      "betas": {
        "default": "[0.0, 0.9, 0.99]",
        "range": "List of momentum values",
        "description": "Multiple momentum coefficients"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 68,
    "tags": [
      "aggregated",
      "momentum",
      "stability"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/aggmo.py"
  },
  {
    "id": "pid",
    "name": "PID",
    "fullName": "PID Controller Approach",
    "description": "Employs PID control principles; improves convergence and stability",
    "year": 2018,
    "category": "Novel",
    "paper": {
      "title": "A PID Controller Approach for Stochastic Optimization of Deep Networks",
      "url": "https://arxiv.org/abs/1802.07640",
      "authors": [
        "Wangpeng An",
        "Haoqian Wang",
        "Qingyun Sun",
        "Jun Xu",
        "Qionghai Dai",
        "Lei Zhang"
      ]
    },
    "advantages": [
      "PID control principles",
      "Improved convergence",
      "Better stability"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.01,
        "range": "1e-5 to 1e-1",
        "description": "Learning rate"
      },
      "momentum": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Momentum factor"
      },
      "integral": {
        "default": 0.1,
        "range": "0.01 to 0.5",
        "description": "Integral term coefficient"
      },
      "derivative": {
        "default": 10,
        "range": "1.0 to 50.0",
        "description": "Derivative term coefficient"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 62,
    "tags": [
      "pid-control",
      "stability",
      "convergence"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/pid.py"
  },
  {
    "id": "accsgd",
    "name": "AccSGD",
    "fullName": "Accelerated SGD via Online Learning to Learn",
    "description": "Accelerates SGD by learning to adapt the learning rate online",
    "year": 2018,
    "category": "First-order",
    "paper": {
      "title": "Accelerating Stochastic Gradient Descent via Online Learning to Learn",
      "url": "https://arxiv.org/abs/1807.02259",
      "authors": [
        "Zhishuai Guo",
        "Yi Xu",
        "Wotao Yin",
        "Rong Jin",
        "Tianbao Yang"
      ]
    },
    "advantages": [
      "Online learning rate adaptation",
      "Accelerated convergence",
      "Automatic tuning"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.01,
        "range": "1e-5 to 1e-1",
        "description": "Initial learning rate"
      },
      "momentum": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Momentum factor"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 65,
    "tags": [
      "accelerated",
      "online-learning",
      "adaptive"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/accsgd.py"
  },
  {
    "id": "adabound",
    "name": "AdaBound",
    "fullName": "Adaptive Gradient Methods with Dynamic Bound of Learning Rate",
    "description": "Bounds the learning rate dynamically; combines benefits of adaptive and SGD methods",
    "year": 2019,
    "category": "Adaptive",
    "paper": {
      "title": "Adaptive Gradient Methods with Dynamic Bound of Learning Rate",
      "url": "https://arxiv.org/abs/1902.09843",
      "authors": [
        "Liangchen Luo",
        "Yuanhao Xiong",
        "Yan Liu",
        "Xu Sun"
      ]
    },
    "advantages": [
      "Dynamic learning rate bounds",
      "Combines adaptive and SGD benefits",
      "Better generalization"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.999,
        "range": "0.99 to 0.9999",
        "description": "Exponential decay rate for second moment estimates"
      },
      "final_lr": {
        "default": 0.1,
        "range": "0.01 to 1.0",
        "description": "Final learning rate"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 75,
    "tags": [
      "adaptive",
      "bounded",
      "generalization"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adabound.py"
  },
  {
    "id": "lamb",
    "name": "LAMB",
    "fullName": "Layer-wise Adaptive Moments optimizer for Batch training",
    "description": "Enables large batch training for BERT; improves training efficiency",
    "year": 2019,
    "category": "Adaptive",
    "paper": {
      "title": "Large Batch Optimization for Deep Learning: Training BERT in 76 minutes",
      "url": "https://arxiv.org/abs/1904.00962",
      "authors": [
        "Yang You",
        "Jing Li",
        "Sashank Reddi",
        "Jonathan Hseu",
        "Sanjiv Kumar",
        "Srinadh Bhojanapalli",
        "Xiaodan Song",
        "James Demmel",
        "Kurt Keutzer",
        "Cho-Jui Hsieh"
      ]
    },
    "advantages": [
      "Large batch training",
      "Layer-wise adaptation",
      "Efficient for BERT-like models"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.999,
        "range": "0.99 to 0.9999",
        "description": "Exponential decay rate for second moment estimates"
      },
      "weight_decay": {
        "default": 0.01,
        "range": "0.0 to 0.1",
        "description": "Weight decay coefficient"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 82,
    "tags": [
      "large-batch",
      "layer-wise",
      "bert"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/lamb.py"
  },
  {
    "id": "lookahead",
    "name": "Lookahead",
    "fullName": "Lookahead Optimizer: k steps forward, 1 step back",
    "description": "Combines with other optimizers to improve convergence and stability",
    "year": 2019,
    "category": "Novel",
    "paper": {
      "title": "Lookahead Optimizer: k steps forward, 1 step back",
      "url": "https://arxiv.org/abs/1907.08610",
      "authors": [
        "Michael R. Zhang",
        "James Lucas",
        "Jimmy Ba",
        "Geoffrey E. Hinton"
      ]
    },
    "advantages": [
      "Improves convergence",
      "Better stability",
      "Can wrap other optimizers"
    ],
    "hyperparameters": {
      "k": {
        "default": 5,
        "range": "3 to 10",
        "description": "Number of lookahead steps"
      },
      "alpha": {
        "default": 0.5,
        "range": "0.1 to 0.8",
        "description": "Slow weights step size"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 78,
    "tags": [
      "lookahead",
      "wrapper",
      "stability"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/lookahead.py"
  },
  {
    "id": "radam",
    "name": "RAdam",
    "fullName": "Rectified Adam",
    "description": "Rectifies variance of the adaptive learning rate; improves stability",
    "year": 2019,
    "category": "Adaptive",
    "paper": {
      "title": "On the Variance of the Adaptive Learning Rate and Beyond",
      "url": "https://arxiv.org/abs/1908.03265",
      "authors": [
        "Liyuan Liu",
        "Haoming Jiang",
        "Pengcheng He",
        "Weizhu Chen",
        "Xiaodong Liu",
        "Jianfeng Gao",
        "Jiawei Han"
      ]
    },
    "advantages": [
      "Rectified adaptive learning rate",
      "Improved stability",
      "Better early training"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.999,
        "range": "0.99 to 0.9999",
        "description": "Exponential decay rate for second moment estimates"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 80,
    "tags": [
      "rectified",
      "adaptive",
      "stable"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/radam.py"
  },
  {
    "id": "adamod",
    "name": "AdaMod",
    "fullName": "Adaptive Momentum Method for Stochastic Gradient Descent",
    "description": "Modulates the momentum term adaptively; improves stability and convergence",
    "year": 2019,
    "category": "Adaptive",
    "paper": {
      "title": "AdaMod: An Adaptive Momentum Method for Stochastic Gradient Descent",
      "url": "https://arxiv.org/abs/1910.12249",
      "authors": [
        "Ding-Xuan Zhou",
        "Junchi Yan"
      ]
    },
    "advantages": [
      "Adaptive momentum modulation",
      "Improved stability",
      "Better convergence"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.999,
        "range": "0.99 to 0.9999",
        "description": "Exponential decay rate for second moment estimates"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 70,
    "tags": [
      "adaptive",
      "momentum",
      "modulation"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adamod.py"
  },
  {
    "id": "ranger",
    "name": "Ranger",
    "fullName": "RAdam + Lookahead",
    "description": "Combines RAdam and Lookahead; improves convergence and generalization",
    "year": 2019,
    "category": "Novel",
    "paper": {
      "title": "Ranger: A Hybrid Optimizer for Deep Learning",
      "url": "https://medium.com/@lessw/new-deep-learning-optimizer-ranger-synergistic-combination-of-radam-lookahead-for-the-best-of-2dc83f79a48d",
      "authors": [
        "Less Wright"
      ]
    },
    "advantages": [
      "Combines RAdam and Lookahead",
      "Improved convergence",
      "Better generalization"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.999,
        "range": "0.99 to 0.9999",
        "description": "Exponential decay rate for second moment estimates"
      },
      "k": {
        "default": 6,
        "range": "3 to 10",
        "description": "Lookahead steps"
      },
      "alpha": {
        "default": 0.5,
        "range": "0.1 to 0.8",
        "description": "Lookahead alpha"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 85,
    "tags": [
      "hybrid",
      "radam",
      "lookahead"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/ranger.py"
  },
  {
    "id": "nadam",
    "name": "NAdam",
    "fullName": "Nesterov-accelerated Adaptive Moment Estimation",
    "description": "Combines Nesterov momentum with Adam; improves convergence",
    "year": 2019,
    "category": "Adaptive",
    "paper": {
      "title": "Incorporating Nesterov Momentum into Adam",
      "url": "https://openreview.net/forum?id=OM0jvwB8jIp57ZJjtNEZ",
      "authors": [
        "Timothy Dozat"
      ]
    },
    "advantages": [
      "Nesterov momentum with Adam",
      "Improved convergence",
      "Better performance"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.999,
        "range": "0.99 to 0.9999",
        "description": "Exponential decay rate for second moment estimates"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 75,
    "tags": [
      "nesterov",
      "adaptive",
      "momentum"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/nadam.py"
  },
  {
    "id": "novograd",
    "name": "NovoGrad",
    "fullName": "Stochastic Gradient Methods with Layer-wise Adaptive Moments",
    "description": "Uses layer-wise adaptive moments; efficient for deep networks",
    "year": 2019,
    "category": "Adaptive",
    "paper": {
      "title": "Stochastic Gradient Methods with Layer-wise Adaptive Moments for Training of Deep Networks",
      "url": "https://arxiv.org/abs/1905.11286",
      "authors": [
        "Boris Ginsburg",
        "Patrice Castonguay",
        "Oleksii Hrinchuk",
        "Oleksii Kuchaiev",
        "Vitaly Lavrukhin",
        "Ryan Leary",
        "Jason Li",
        "Huyen Nguyen",
        "Jonathan M. Cohen"
      ]
    },
    "advantages": [
      "Layer-wise adaptive moments",
      "Efficient for deep networks",
      "Good for speech recognition"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.01,
        "range": "1e-4 to 1e-1",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.95,
        "range": "0.9 to 0.99",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.5,
        "range": "0.25 to 0.75",
        "description": "Exponential decay rate for second moment estimates"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 72,
    "tags": [
      "layer-wise",
      "adaptive",
      "deep-networks"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/novograd.py"
  },
  {
    "id": "diffgrad",
    "name": "DiffGrad",
    "fullName": "Differentiating the Gradient History",
    "description": "Differentiates the gradient history; improves convergence",
    "year": 2019,
    "category": "Novel",
    "paper": {
      "title": "DiffGrad: An Optimization Method for Convolutional Neural Networks",
      "url": "https://arxiv.org/abs/1909.11015",
      "authors": [
        "Shiv Ram Dubey",
        "Satish Kumar Singh",
        "Bidyut Baran Chaudhuri"
      ]
    },
    "advantages": [
      "Differentiates gradient history",
      "Improved convergence",
      "Good for CNNs"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.999,
        "range": "0.99 to 0.9999",
        "description": "Exponential decay rate for second moment estimates"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 68,
    "tags": [
      "gradient-history",
      "cnn",
      "convergence"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/diffgrad.py"
  },
  {
    "id": "adahessian",
    "name": "AdaHessian",
    "fullName": "Adaptive Second Order Optimizer",
    "description": "Uses Hessian information adaptively; suitable for nonconvex optimization",
    "year": 2020,
    "category": "Second-order",
    "paper": {
      "title": "ADAHESSIAN: An Adaptive Second Order Optimizer for Machine Learning",
      "url": "https://arxiv.org/abs/2006.00719",
      "authors": [
        "Zhewei Yao",
        "Amir Gholami",
        "Sheng Shen",
        "Mustafa Mustafa",
        "Kurt Keutzer",
        "Michael W. Mahoney"
      ]
    },
    "advantages": [
      "Uses Hessian information",
      "Adaptive second-order",
      "Good for nonconvex problems"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.15,
        "range": "1e-3 to 1.0",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.999,
        "range": "0.99 to 0.9999",
        "description": "Exponential decay rate for second moment estimates"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 75,
    "tags": [
      "second-order",
      "hessian",
      "nonconvex"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adahessian.py"
  },
  {
    "id": "adabelief",
    "name": "AdaBelief",
    "fullName": "Adapting Stepsizes by the Belief in Observed Gradients",
    "description": "Adapts stepsizes based on the belief in observed gradients; improves convergence",
    "year": 2020,
    "category": "Adaptive",
    "paper": {
      "title": "AdaBelief Optimizer: Adapting Stepsizes by the Belief in Observed Gradients",
      "url": "https://arxiv.org/abs/2010.07468",
      "authors": [
        "Juntang Zhuang",
        "Tommy Tang",
        "Yifan Ding",
        "Sekhar Tatikonda",
        "Nicha Dvornek",
        "Xenophon Papademetris",
        "James Duncan"
      ]
    },
    "advantages": [
      "Belief-based adaptation",
      "Improved convergence",
      "Better generalization"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.999,
        "range": "0.99 to 0.9999",
        "description": "Exponential decay rate for second moment estimates"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 78,
    "tags": [
      "belief",
      "adaptive",
      "generalization"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adabelief.py"
  },
  {
    "id": "adamp",
    "name": "AdamP",
    "fullName": "Slowing Down the Weight Norm Increase in Momentum-based Optimizers",
    "description": "Mitigates weight norm increase; improves generalization",
    "year": 2020,
    "category": "Adaptive",
    "paper": {
      "title": "Slowing Down the Weight Norm Increase in Momentum-based Optimizers",
      "url": "https://arxiv.org/abs/2006.08217",
      "authors": [
        "Byeongho Heo",
        "Sanghyuk Chun",
        "Seong Joon Oh",
        "Dongyoon Han",
        "Sangdoo Yun",
        "Youngjoon Yoo",
        "Changkyu Choi"
      ]
    },
    "advantages": [
      "Controls weight norm increase",
      "Improved generalization",
      "Better stability"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.999,
        "range": "0.99 to 0.9999",
        "description": "Exponential decay rate for second moment estimates"
      },
      "delta": {
        "default": 0.1,
        "range": "0.01 to 0.5",
        "description": "Threshold of the cosine similarity"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 76,
    "tags": [
      "weight-norm",
      "generalization",
      "stability"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adamp.py"
  },
  {
    "id": "sgdp",
    "name": "SGDP",
    "fullName": "SGD with Projection",
    "description": "Prevents excessive weight norm increase; improves stability",
    "year": 2020,
    "category": "First-order",
    "paper": {
      "title": "Slowing Down the Weight Norm Increase in Momentum-based Optimizers",
      "url": "https://arxiv.org/abs/2006.08217",
      "authors": [
        "Byeongho Heo",
        "Sanghyuk Chun",
        "Seong Joon Oh",
        "Dongyoon Han",
        "Sangdoo Yun",
        "Youngjoon Yoo",
        "Changkyu Choi"
      ]
    },
    "advantages": [
      "Prevents weight norm increase",
      "Improved stability",
      "Better generalization"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.01,
        "range": "1e-5 to 1e-1",
        "description": "Learning rate"
      },
      "momentum": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Momentum factor"
      },
      "delta": {
        "default": 0.1,
        "range": "0.01 to 0.5",
        "description": "Threshold of the cosine similarity"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 70,
    "tags": [
      "projection",
      "weight-norm",
      "stability"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/sgdp.py"
  },
  {
    "id": "apollo",
    "name": "Apollo",
    "fullName": "Adaptive Parameter-wise Diagonal Quasi-Newton Method",
    "description": "Adaptive quasi-Newton method; efficient for nonconvex optimization",
    "year": 2020,
    "category": "Second-order",
    "paper": {
      "title": "Apollo: An Adaptive Parameter-wise Diagonal Quasi-Newton Method for Nonconvex Stochastic Optimization",
      "url": "https://arxiv.org/abs/2009.13586",
      "authors": [
        "Xuezhi Wang",
        "Xiang Wang",
        "Hao Yu"
      ]
    },
    "advantages": [
      "Quasi-Newton method",
      "Parameter-wise adaptation",
      "Efficient for nonconvex problems"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.01,
        "range": "1e-4 to 1e-1",
        "description": "Learning rate"
      },
      "beta": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Exponential decay rate"
      },
      "eps": {
        "default": 0.0001,
        "range": "1e-6 to 1e-2",
        "description": "Regularization parameter"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 72,
    "tags": [
      "quasi-newton",
      "parameter-wise",
      "nonconvex"
    ],
    "githubUrl": "https://github.com/zhuhanqing/APOLLO"
  },
  {
    "id": "sam",
    "name": "SAM",
    "fullName": "Sharpness-Aware Minimization",
    "description": "Minimizes sharpness of the loss landscape; improves generalization",
    "year": 2020,
    "category": "Novel",
    "paper": {
      "title": "Sharpness-Aware Minimization for Efficiently Improving Generalization",
      "url": "https://arxiv.org/abs/2010.01412",
      "authors": [
        "Pierre Foret",
        "Ariel Kleiner",
        "Hossein Mobahi",
        "Behnam Neyshabur"
      ]
    },
    "advantages": [
      "Sharpness-aware optimization",
      "Improved generalization",
      "Better flat minima"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.01,
        "range": "1e-5 to 1e-1",
        "description": "Learning rate"
      },
      "rho": {
        "default": 0.05,
        "range": "0.01 to 0.2",
        "description": "Neighborhood size"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 85,
    "tags": [
      "sharpness-aware",
      "generalization",
      "flat-minima"
    ],
    "githubUrl": "https://github.com/google-research/sam"
  },
  {
    "id": "madgrad",
    "name": "MADGRAD",
    "fullName": "A Momentumized, Adaptive, Dual Averaged Gradient Method",
    "description": "Combines momentum, adaptivity, and dual averaging; improves stability",
    "year": 2021,
    "category": "Adaptive",
    "paper": {
      "title": "Adaptive Gradient Methods with Dynamic Bound of Learning Rate",
      "url": "https://arxiv.org/abs/2101.11075",
      "authors": [
        "Aaron Defazio",
        "Samy Jelassi"
      ]
    },
    "advantages": [
      "Combines multiple techniques",
      "Improved stability",
      "Good convergence properties"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.01,
        "range": "1e-4 to 1e-1",
        "description": "Learning rate"
      },
      "momentum": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Momentum factor"
      },
      "eps": {
        "default": 0.000001,
        "range": "1e-8 to 1e-4",
        "description": "Regularization parameter"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 75,
    "tags": [
      "momentum",
      "adaptive",
      "dual-averaged"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/madgrad.py"
  },
  {
    "id": "adan",
    "name": "Adan",
    "fullName": "Adaptive Nesterov Momentum Algorithm",
    "description": "Adaptive Nesterov momentum; faster optimization for deep models",
    "year": 2022,
    "category": "Adaptive",
    "paper": {
      "title": "Adaptive Nesterov Momentum Algorithm for Faster Optimizing Deep Models",
      "url": "https://arxiv.org/abs/2208.06677",
      "authors": [
        "Xingyu Xie",
        "Pan Zhou",
        "Huan Li",
        "Zhouchen Lin",
        "Shuicheng Yan"
      ]
    },
    "advantages": [
      "Adaptive Nesterov momentum",
      "Faster optimization",
      "Good for deep models"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.98,
        "range": "0.9 to 0.99",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.92,
        "range": "0.9 to 0.99",
        "description": "Exponential decay rate for second moment estimates"
      },
      "beta3": {
        "default": 0.99,
        "range": "0.9 to 0.999",
        "description": "Exponential decay rate for third moment estimates"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 80,
    "tags": [
      "adaptive",
      "nesterov",
      "deep-models"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adan.py"
  },
  {
    "id": "came",
    "name": "CAME",
    "fullName": "Confidence-guided Adaptive Memory Efficient Optimization",
    "description": "Adaptive and memory-efficient; improves optimization with confidence guidance",
    "year": 2023,
    "category": "Adaptive",
    "paper": {
      "title": "CAME: Confidence-guided Adaptive Memory Efficient Optimization",
      "url": "https://arxiv.org/abs/2307.02047",
      "authors": [
        "Yang Luo",
        "Xiaomeng Chu",
        "Yiming Kang",
        "Yinghao Xu",
        "Yiping Lu",
        "Chengfei Lv",
        "Ye Yuan",
        "Guanhong Wang"
      ]
    },
    "advantages": [
      "Confidence-guided adaptation",
      "Memory efficient",
      "Good convergence"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.999,
        "range": "0.99 to 0.9999",
        "description": "Exponential decay rate for second moment estimates"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 75,
    "tags": [
      "confidence-guided",
      "memory-efficient",
      "adaptive"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/came.py"
  },
  {
    "id": "sophia",
    "name": "Sophia",
    "fullName": "Scalable Stochastic Second-order Optimizer",
    "description": "Scalable second-order optimizer; efficient for large-scale pre-training",
    "year": 2023,
    "category": "Second-order",
    "paper": {
      "title": "Sophia: A Scalable Stochastic Second-order Optimizer for Language Model Pre-training",
      "url": "https://arxiv.org/abs/2305.14342",
      "authors": [
        "Hong Liu",
        "Zhiyuan Li",
        "David Hall",
        "Percy Liang",
        "Tengyu Ma"
      ]
    },
    "advantages": [
      "Scalable second-order",
      "Efficient for large models",
      "Good for language model pre-training"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.01,
        "range": "1e-4 to 1e-1",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.965,
        "range": "0.9 to 0.99",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.99,
        "range": "0.9 to 0.999",
        "description": "Exponential decay rate for second moment estimates"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 82,
    "tags": [
      "second-order",
      "scalable",
      "language-models"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/sophia.py"
  },
  {
    "id": "svrg",
    "name": "SVRG",
    "fullName": "Stochastic Variance Reduced Gradient",
    "description": "Variance reduction technique; enhances optimization with confidence-guided adjustment",
    "year": 2023,
    "category": "First-order",
    "paper": {
      "title": "A Coefficient Makes SVRG Effective",
      "url": "https://arxiv.org/abs/2311.05589",
      "authors": [
        "Yida Yin",
        "Zheng Qu",
        "Peter Richtárik"
      ]
    },
    "advantages": [
      "Variance reduction",
      "Confidence-guided adjustment",
      "Better convergence"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.01,
        "range": "1e-4 to 1e-1",
        "description": "Learning rate"
      },
      "variance_reduction": {
        "default": 0.1,
        "range": "0.01 to 0.5",
        "description": "Variance reduction coefficient"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 70,
    "tags": [
      "variance-reduction",
      "confidence-guided",
      "convergence"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/svrg.py"
  },
  {
    "id": "prodigy",
    "name": "Prodigy",
    "fullName": "Expeditiously Adaptive Parameter-Free Learner",
    "description": "Parameter-free optimizer that dynamically adjusts learning rate by estimating distance to optimal solution",
    "year": 2024,
    "category": "Adaptive",
    "paper": {
      "title": "Prodigy: An Expeditiously Adaptive Parameter-Free Learner",
      "url": "https://arxiv.org/abs/2306.06101",
      "authors": [
        "Konstantin Mishchenko",
        "Aaron Defazio"
      ]
    },
    "advantages": [
      "Parameter-free",
      "Dynamic learning rate adjustment",
      "Estimates distance to optimum"
    ],
    "hyperparameters": {
      "d_coef": {
        "default": 1,
        "range": "0.1 to 10.0",
        "description": "Coefficient for distance estimation"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.999,
        "range": "0.99 to 0.9999",
        "description": "Exponential decay rate for second moment estimates"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 78,
    "tags": [
      "parameter-free",
      "adaptive",
      "distance-estimation"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/prodigy.py"
  },
  {
    "id": "adam-mini",
    "name": "Adam-mini",
    "fullName": "Adam with Fewer Learning Rates",
    "description": "Memory-efficient Adam variant that reduces the number of learning rates to gain more performance",
    "year": 2024,
    "category": "Adaptive",
    "paper": {
      "title": "Adam-mini: Use Fewer Learning Rates To Gain More",
      "url": "https://arxiv.org/abs/2406.16793",
      "authors": [
        "Yushun Zhang",
        "Congliang Chen",
        "Ziniu Li",
        "Tian Ding",
        "Chenwei Wu",
        "Yinyu Ye",
        "Zhi-Quan Luo",
        "Ruoyu Sun"
      ]
    },
    "advantages": [
      "Reduces memory usage compared to Adam",
      "Simplifies hyperparameter tuning",
      "Maintains competitive performance",
      "Scalable to large models"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Exponential decay rate for first moment"
      },
      "beta2": {
        "default": 0.999,
        "range": "0.99 to 0.9999",
        "description": "Exponential decay rate for second moment"
      },
      "eps": {
        "default": 1e-8,
        "range": "1e-10 to 1e-6",
        "description": "Small constant for numerical stability"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 78,
    "tags": [
      "adaptive",
      "memory-efficient",
      "simplified"
    ],
    "githubUrl": "https://github.com/zyushun/Adam-mini"
  },
  {
    "id": "muon",
    "name": "Muon",
    "fullName": "Muon Optimizer with Orthogonal Updates",
    "description": "Orthogonal weight updates via Newton-Schulz iteration for improved training dynamics",
    "year": 2024,
    "category": "Novel",
    "paper": {
      "title": "Muon: Orthogonal Weight Updates via Newton-Schulz Iteration",
      "url": "https://arxiv.org/abs/2502.16982",
      "authors": [
        "Jeremy Bernstein",
        "Laker Newhouse"
      ]
    },
    "advantages": [
      "Orthogonal weight updates",
      "Improved training dynamics",
      "Better convergence properties",
      "Novel approach to optimization"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.02,
        "range": "1e-3 to 1e-1",
        "description": "Learning rate"
      },
      "momentum": {
        "default": 0.95,
        "range": "0.9 to 0.99",
        "description": "Momentum coefficient"
      },
      "nesterov": {
        "default": "True",
        "range": "True/False",
        "description": "Use Nesterov momentum"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 82,
    "tags": [
      "novel",
      "orthogonal",
      "newton-schulz"
    ],
    "githubUrl": "https://github.com/KellerJordan/Muon"
  },
  {
    "id": "lion",
    "name": "Lion",
    "fullName": "EvoLved Sign Momentum",
    "description": "Evolved optimizer using sign-based updates; memory efficient",
    "year": 2023,
    "category": "Novel",
    "paper": {
      "title": "Symbolic Discovery of Optimization Algorithms",
      "url": "https://arxiv.org/abs/2302.06675",
      "authors": [
        "Xiangning Chen",
        "Chen Liang",
        "Da Huang",
        "Esteban Real",
        "Kaiyuan Wang",
        "Yao Liu",
        "Hieu Pham",
        "Xuanyi Dong",
        "Thang Luong",
        "Cho-Jui Hsieh",
        "Yifeng Lu",
        "Quoc V. Le"
      ]
    },
    "advantages": [
      "Memory efficient",
      "Sign-based updates",
      "Discovered via evolution"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.0001,
        "range": "1e-6 to 1e-3",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Exponential decay rate for momentum"
      },
      "weight_decay": {
        "default": 0.01,
        "range": "0.0 to 0.1",
        "description": "Weight decay coefficient"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 88,
    "tags": [
      "evolved",
      "sign-based",
      "memory-efficient"
    ],
    "githubUrl": "https://github.com/google-research/lion"
  },
  {
    "id": "sgdw",
    "name": "SGDW",
    "fullName": "SGD with Weight Decay",
    "description": "SGD with proper weight decay implementation",
    "year": 2017,
    "category": "First-order",
    "paper": {
      "title": "Decoupled Weight Decay Regularization",
      "url": "https://arxiv.org/abs/1711.05101",
      "authors": [
        "Ilya Loshchilov",
        "Frank Hutter"
      ]
    },
    "advantages": [
      "Proper weight decay",
      "Simple and effective",
      "Good baseline"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.01,
        "range": "1e-5 to 1e-1",
        "description": "Learning rate"
      },
      "momentum": {
        "default": 0.9,
        "range": "0.0 to 1.0",
        "description": "Momentum factor"
      },
      "weight_decay": {
        "default": 0.01,
        "range": "0.0 to 0.1",
        "description": "Weight decay coefficient"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 72,
    "tags": [
      "weight-decay",
      "sgd",
      "baseline"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/sgdw.py"
  },
  {
    "id": "soap",
    "name": "SOAP",
    "fullName": "Shampoo with Adam in the Preconditioner's eigenbasis",
    "description": "Improves and stabilizes Shampoo by running Adam in the preconditioner's eigenbasis; reduces computational overhead while maintaining performance",
    "year": 2024,
    "category": "Second-order",
    "paper": {
      "title": "SOAP: Improving and Stabilizing Shampoo using Adam",
      "url": "https://arxiv.org/abs/2409.11321",
      "authors": [
        "Nikhil Vyas",
        "Depen Morwani",
        "Rosie Zhao",
        "Mujin Kwun",
        "Itai Shapira",
        "David Brandfonbrener",
        "Lucas Janson",
        "Sham Kakade"
      ]
    },
    "advantages": [
      "Reduces computational overhead compared to Shampoo",
      "Maintains Shampoo's performance benefits",
      "Only one additional hyperparameter",
      "Efficient for large batch training"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.003,
        "range": "1e-4 to 1e-2",
        "description": "Learning rate"
      },
      "betas": {
        "default": "(0.95, 0.95)",
        "range": "(0.9, 0.9) to (0.99, 0.99)",
        "description": "Exponential decay rates for moment estimates"
      },
      "weight_decay": {
        "default": 0.01,
        "range": "0.0 to 0.1",
        "description": "Weight decay coefficient"
      },
      "precondition_frequency": {
        "default": 10,
        "range": "5 to 20",
        "description": "Frequency of preconditioner updates"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 85,
    "tags": [
      "second-order",
      "preconditioning",
      "efficient",
      "large-batch"
    ],
    "githubUrl": "https://github.com/nikhilvyas/SOAP/tree/main"
  },
  {
    "id": "mars",
    "name": "MARS",
    "fullName": "Make vAriance Reduction Shine",
    "description": "Unified optimization framework that reconciles preconditioned gradient methods with variance reduction for efficient training of large models",
    "year": 2024,
    "category": "Novel",
    "paper": {
      "title": "MARS: Unleashing the Power of Variance Reduction for Training Large Models",
      "url": "https://arxiv.org/abs/2411.10438",
      "authors": [
        "Huizhuo Yuan",
        "Yifeng Liu",
        "Shuang Wu",
        "Xun Zhou",
        "Quanquan Gu"
      ]
    },
    "advantages": [
      "Unified framework for variance reduction",
      "Efficient for large model training",
      "Reconciles preconditioning with variance reduction",
      "Scalable optimization approach"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.999,
        "range": "0.99 to 0.9999",
        "description": "Exponential decay rate for second moment estimates"
      },
      "variance_reduction": {
        "default": 0.1,
        "range": "0.01 to 0.5",
        "description": "Variance reduction coefficient"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 82,
    "tags": [
      "variance-reduction",
      "unified-framework",
      "large-models",
      "preconditioning"
    ],
    "githubUrl": "https://github.com/AGI-Arena/MARS"
  },
  {
    "id": "spam",
    "name": "SPAM",
    "fullName": "SPAM Optimizer",
    "description": "Novel optimization algorithm for improved training efficiency and convergence in deep learning",
    "year": 2025,
    "category": "Novel",
    "paper": {
      "title": "SPAM: A Novel Optimization Algorithm",
      "url": "https://arxiv.org/abs/2501.06842",
      "authors": [
        "TianjinYellow"
      ]
    },
    "advantages": [
      "Novel optimization approach",
      "Improved training efficiency",
      "Better convergence properties",
      "Suitable for deep learning tasks"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "momentum": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Momentum factor"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 70,
    "tags": [
      "novel",
      "efficient",
      "convergence",
      "deep-learning"
    ],
    "githubUrl": "https://github.com/TianjinYellow/SPAM-Optimizer"
  },
  {
    "id": "adamuon",
    "name": "AdaMuon",
    "fullName": "Adaptive Muon Optimizer",
    "description": "Adaptive optimization algorithm with improved convergence and stability for large-scale machine learning",
    "year": 2025,
    "category": "Adaptive",
    "paper": {
      "title": "AdaMuon: An Adaptive Optimization Algorithm",
      "url": "https://arxiv.org/abs/2507.11005",
      "authors": [
        "Chongjie Si"
      ]
    },
    "advantages": [
      "Adaptive learning mechanism",
      "Improved convergence",
      "Better stability",
      "Suitable for large-scale problems"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.999,
        "range": "0.99 to 0.9999",
        "description": "Exponential decay rate for second moment estimates"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 75,
    "tags": [
      "adaptive",
      "convergence",
      "stability",
      "large-scale"
    ],
    "githubUrl": "https://github.com/Chongjie-Si/AdaMuon"
  },
  {
    "id": "conda",
    "name": "Conda",
    "fullName": "Conda Optimizer",
    "description": "Advanced optimization algorithm designed for efficient training of modern deep learning models",
    "year": 2025,
    "category": "Adaptive",
    "paper": {
      "title": "Conda: An Advanced Optimization Algorithm",
      "url": "https://arxiv.org/abs/2509.24218",
      "authors": [
        "jie040109"
      ]
    },
    "advantages": [
      "Advanced optimization techniques",
      "Efficient for modern deep learning",
      "Improved training dynamics",
      "Better generalization"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.999,
        "range": "0.99 to 0.9999",
        "description": "Exponential decay rate for second moment estimates"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 78,
    "tags": [
      "advanced",
      "modern-deep-learning",
      "efficient",
      "generalization"
    ],
    "githubUrl": "https://github.com/jie040109/Conda"
  },
  {
    "id": "adalomo",
    "name": "AdaLomo",
    "fullName": "Low-memory Optimization with Adaptive Learning Rate",
    "description": "Memory-efficient optimizer that provides adaptive learning rates for each parameter while maintaining low memory footprint through non-negative matrix factorization",
    "year": 2023,
    "category": "Adaptive",
    "paper": {
      "title": "AdaLomo: Low-memory Optimization with Adaptive Learning Rate",
      "url": "https://arxiv.org/abs/2310.10195",
      "authors": [
        "Kai Lv",
        "Hang Yan", 
        "Qipeng Guo",
        "Haijun Lv",
        "Xipeng Qiu"
      ]
    },
    "advantages": [
      "Significantly reduces memory requirements",
      "Adaptive learning rate per parameter",
      "Achieves performance comparable to AdamW",
      "Suitable for large language model training",
      "Uses grouped update normalization for stability"
    ],
    "hyperparameters": {
      "lr": {
        "default": 1e-4,
        "range": "1e-5 to 1e-2",
        "description": "Base learning rate"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.0 to 1.0",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.999,
        "range": "0.0 to 1.0",
        "description": "Exponential decay rate for second moment estimates"
      },
      "eps": {
        "default": 1e-8,
        "range": "1e-10 to 1e-6",
        "description": "Small constant for numerical stability"
      },
      "weight_decay": {
        "default": 0.01,
        "range": "0.0 to 0.1",
        "description": "Weight decay (L2 penalty)"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 75,
    "tags": [
      "memory-efficient",
      "adaptive",
      "large-language-models",
      "low-memory",
      "matrix-factorization",
      "instruction-tuning",
      "pre-training"
    ],
    "githubUrl": "https://github.com/OpenLMLab/LOMO"
  },
  {
    "id": "badam",
    "name": "BAdam",
    "fullName": "Block-wise Adam",
    "description": "Block-wise adaptive optimizer that applies Adam updates to parameter blocks rather than individual parameters, improving memory efficiency and convergence",
    "year": 2024,
    "category": "Adaptive",
    "paper": {
      "title": "BAdam: Block-wise Adaptive Optimization for Large Language Models",
      "url": "https://arxiv.org/abs/2404.02827",
      "authors": [
        "Ledzy",
        "et al."
      ]
    },
    "advantages": [
      "Block-wise adaptive learning rates",
      "Improved memory efficiency",
      "Better convergence than standard Adam",
      "Suitable for large models",
      "Reduced computational overhead"
    ],
    "hyperparameters": {
      "lr": {
        "default": 1e-4,
        "range": "1e-5 to 1e-2",
        "description": "Base learning rate"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.0 to 1.0",
        "description": "Exponential decay rate for first moment estimates"
      },
      "beta2": {
        "default": 0.999,
        "range": "0.0 to 1.0",
        "description": "Exponential decay rate for second moment estimates"
      },
      "eps": {
        "default": 1e-8,
        "range": "1e-10 to 1e-6",
        "description": "Small constant for numerical stability"
      },
      "block_size": {
        "default": 1024,
        "range": "256 to 4096",
        "description": "Size of parameter blocks for adaptive updates"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 60,
    "tags": [
      "block-wise",
      "adaptive",
      "memory-efficient",
      "large-language-models",
      "convergence",
      "optimization"
    ],
    "githubUrl": "https://github.com/Ledzy/BAdam"
  },
  {
    "id": "ademamix",
    "name": "AdEMAMix",
    "fullName": "Adaptive Exponential Moving Average Mixture",
    "description": "A modification of Adam that uses a mixture of two EMAs to better leverage past gradients, showing that gradients can stay relevant for tens of thousands of steps",
    "year": 2024,
    "category": "Adaptive",
    "paper": {
      "title": "The AdEMAMix Optimizer: Better, Faster, Older",
      "url": "https://arxiv.org/abs/2409.03137",
      "authors": [
        "Matteo Pagliardini",
        "Pierre Ablin",
        "David Grangier"
      ]
    },
    "advantages": [
      "Better utilization of past gradients",
      "Faster convergence than standard Adam",
      "Often reaches lower minima",
      "Significantly slows down model forgetting",
      "Gradients stay relevant for tens of thousands of steps",
      "Simple modification of existing Adam optimizer"
    ],
    "hyperparameters": {
      "lr": {
        "default": 1e-3,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "betas": {
        "default": [0.9, 0.999, 0.9999],
        "range": "0.0 to 1.0",
        "description": "Coefficients for computing running averages of gradient and its square, plus third EMA"
      },
      "alpha": {
        "default": 8.0,
        "range": "1.0 to 20.0",
        "description": "Mixing parameter for combining the two EMAs"
      },
      "alpha_warmup": {
        "default": 256000,
        "range": "1000 to 1000000",
        "description": "Number of iterations for alpha warmup"
      },
      "beta3_warmup": {
        "default": 256000,
        "range": "1000 to 1000000",
        "description": "Number of iterations for beta3 warmup"
      },
      "weight_decay": {
        "default": 0.1,
        "range": "0.0 to 1.0",
        "description": "Weight decay (L2 penalty)"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": true
    },
    "popularity": 70,
    "tags": [
      "adaptive",
      "exponential-moving-average",
      "mixture",
      "past-gradients",
      "convergence",
      "forgetting",
      "language-modeling",
      "image-classification"
    ],
    "githubUrl": "https://github.com/apple/ml-ademamix"
  }
];

// Export for use in HTML
if (typeof module !== "undefined" && module.exports) {
  module.exports = { optimizers };
} else {
  window.optimizersData = { optimizers };
}
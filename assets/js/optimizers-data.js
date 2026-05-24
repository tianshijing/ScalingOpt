// Optimizers data for static site
const optimizers = [
  {
    "id": "sgd",
    "name": "SGD",
    "fullName": "Stochastic Gradient Descent",
    "description": "Simple and effective foundational optimizer for many other algorithms",
    "year": 1951,
    "month": "September",
    "category": "First-order",
    "paper": {
      "title": "A Stochastic Approximation Method",
      "url": "https://projecteuclid.org/journals/annals-of-mathematical-statistics/volume-22/issue-3/A-Stochastic-Approximation-Method/10.1214/aoms/1177729586.full",
      "authors": [
        "Herbert Robbins",
        "Sutton Monro"
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
      "Gradient Descent",
      "Stochastic",
      "Baselines"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/sgd.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\text{ learning rate } \\eta_t \\\\\n        &\\textbf{Initialize:} \\theta_0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta_t g_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "nag",
    "name": "NAG",
    "fullName": "Nesterov Accelerated Gradient",
    "description": "Accelerated gradient method with momentum",
    "year": 1983,
    "month": "January",
    "category": "First-order",
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
      "Momentum",
      "Nesterov",
      "Acceleration"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/NAG.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\mu \\\\\n        &\\textbf{Initialize:} \\theta_0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad \\hat{\\theta}_t \\leftarrow \\theta_{t-1} - \\eta \\mu v_{t-1} \\\\\n        &\\quad g_t \\leftarrow \\nabla f_t(\\hat{\\theta}_t) \\\\\n        &\\quad v_t \\leftarrow \\mu v_{t-1} + g_t \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta v_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "rprop",
    "name": "Rprop",
    "fullName": "Resilient Backpropagation",
    "description": "Adaptive step sizes per parameter; fast convergence for small networks",
    "year": 2000,
    "month": "January",
    "category": "First-order",
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
      "Adaptive Step",
      "Full Batch",
      "Gradient Sign"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/rprop.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\text{ step sizes } \\Delta_0, \\eta^+ > 1, \\eta^- < 1, \\Delta_{\\min}, \\Delta_{\\max} \\\\\n        &\\textbf{Initialize:} \\theta_0, g_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad \\textbf{for } i \\text{ in params do} \\\\\n        &\\quad \\quad \\text{if } g_{t,i} \\cdot g_{t-1,i} > 0 \\text{ then} \\\\\n        &\\quad \\quad \\quad \\Delta_{t,i} \\leftarrow \\min(\\Delta_{t-1,i} \\cdot \\eta^+, \\Delta_{\\max}) \\\\\n        &\\quad \\quad \\quad \\Delta\\theta_{t,i} \\leftarrow -\\text{sgn}(g_{t,i}) \\cdot \\Delta_{t,i} \\\\\n        &\\quad \\quad \\text{else if } g_{t,i} \\cdot g_{t-1,i} < 0 \\text{ then} \\\\\n        &\\quad \\quad \\quad \\Delta_{t,i} \\leftarrow \\max(\\Delta_{t-1,i} \\cdot \\eta^-, \\Delta_{\\min}) \\\\\n        &\\quad \\quad \\quad \\Delta\\theta_{t,i} \\leftarrow 0 \\\\\n        &\\quad \\quad \\text{else} \\\\\n        &\\quad \\quad \\quad \\Delta_{t,i} \\leftarrow \\Delta_{t-1,i} \\\\\n        &\\quad \\quad \\quad \\Delta\\theta_{t,i} \\leftarrow -\\text{sgn}(g_{t,i}) \\cdot \\Delta_{t,i} \\\\\n        &\\quad \\quad \\theta_{t,i} \\leftarrow \\theta_{t-1,i} + \\Delta\\theta_{t,i} \\\\\n        &\\quad \\textbf{end for} \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "adagrad",
    "name": "AdaGrad",
    "fullName": "Adaptive Gradient Algorithm",
    "description": "Adaptive learning rates; effective for sparse data",
    "year": 2011,
    "month": "February",
    "category": "First-order",
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
      "Adaptive Learning Rate",
      "Sparse Data",
      "Convex"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adagrad.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\text{ learning rate } \\eta, \\text{ constant } \\epsilon \\\\\n        &\\textbf{Initialize:} \\theta_0, G_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad G_t \\leftarrow G_{t-1} + g_t \\odot g_t \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\frac{\\eta}{\\sqrt{G_t} + \\epsilon} \\odot g_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "adadelta",
    "name": "AdaDelta",
    "fullName": "Adaptive Delta",
    "description": "Adaptive learning rates without manual tuning; addresses AdaGrad's diminishing learning rates",
    "year": 2012,
    "month": "December",
    "category": "First-order",
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
        "default": 1e-06,
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
      "Adaptive Learning Rate",
      "Rolling Window",
      "No Learning Rate"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adadelta.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\text{ decay rate } \\rho, \\text{ constant } \\epsilon \\\\\n        &\\textbf{Initialize:} \\theta_0, E[g^2]_0 \\leftarrow 0, E[\\Delta\\theta^2]_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad E[g^2]_t \\leftarrow \\rho E[g^2]_{t-1} + (1-\\rho) g_t^2 \\\\\n        &\\quad \\text{RMS}[g]_t \\leftarrow \\sqrt{E[g^2]_t + \\epsilon} \\\\\n        &\\quad \\Delta\\theta_t \\leftarrow - \\frac{\\sqrt{E[\\Delta\\theta^2]_{t-1} + \\epsilon}}{\\text{RMS}[g]_t} g_t \\\\\n        &\\quad E[\\Delta\\theta^2]_t \\leftarrow \\rho E[\\Delta\\theta^2]_{t-1} + (1-\\rho) \\Delta\\theta_t^2 \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} + \\Delta\\theta_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "rmsprop",
    "name": "RMSprop",
    "fullName": "Root Mean Square Propagation",
    "description": "Adaptive learning rates; suitable for non-stationary objectives",
    "year": 2012,
    "month": "May",
    "category": "First-order",
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
        "default": 1e-08,
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
      "Adaptive Learning Rate",
      "RNN",
      "Non-stationary"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/rmsprop.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\text{ learning rate } \\eta, \\text{ decay rate } \\alpha, \\text{ constant } \\epsilon \\\\\n        &\\textbf{Initialize:} \\theta_0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad v_t \\leftarrow \\alpha v_{t-1} + (1-\\alpha) g_t^2 \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\frac{\\eta}{\\sqrt{v_t} + \\epsilon} \\odot g_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "adam",
    "name": "Adam",
    "fullName": "Adaptive Moment Estimation",
    "description": "Combines the best properties of AdaGrad and RMSprop with bias correction",
    "year": 2014,
    "month": "December",
    "category": "First-order",
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
        "default": 1e-08,
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
      "Adaptive Learning Rate",
      "Momentum",
      "Bias Correction"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adam.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2, \\epsilon \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1) g_t \\\\\n        &\\quad v_t \\leftarrow \\beta_2 v_{t-1} + (1-\\beta_2) g_t^2 \\\\\n        &\\quad \\hat{m}_t \\leftarrow m_t / (1-\\beta_1^t) \\\\\n        &\\quad \\hat{v}_t \\leftarrow v_t / (1-\\beta_2^t) \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\frac{\\hat{m}_t}{\\sqrt{\\hat{v}_t} + \\epsilon} \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "adamax",
    "name": "Adamax",
    "fullName": "Adam based on infinity norm",
    "description": "Variant of Adam based on the infinity norm",
    "year": 2014,
    "month": "December",
    "category": "First-order",
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
      "Infinity Norm",
      "Adaptive",
      "Sparse"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adamax.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2 \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, u_0 \\leftarrow 0, t \\leftarrow 0 \\\\\n        &\\textbf{while } \\theta_t \\text{ not converged} \\textbf{ do} \\\\\n        &\\quad t \\leftarrow t + 1 \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1) g_t \\\\\n        &\\quad u_t \\leftarrow \\max(\\beta_2 u_{t-1}, |g_t|) \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\frac{\\eta}{1-\\beta_1^t} \\frac{m_t}{u_t} \\\\\n        &\\textbf{end while}\n    \\end{aligned}"
  },
  {
    "id": "lars",
    "name": "LARS",
    "fullName": "Layer-wise Adaptive Rate Scaling",
    "description": "Enables large batch training with stability; improves training efficiency",
    "year": 2017,
    "month": "August",
    "category": "First-order",
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
      "Layer-wise",
      "Large Batch",
      "Scaling"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/lars.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\mu, \\lambda, \\epsilon \\\\\n        &\\textbf{Initialize:} \\theta_0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad \\eta_t \\leftarrow \\eta \\times \\frac{\\|\\theta_{t-1}\\|}{\\|g_t\\| + \\lambda \\|\\theta_{t-1}\\| + \\epsilon} \\\\\n        &\\quad v_t \\leftarrow \\mu v_{t-1} + \\eta_t (g_t + \\lambda \\theta_{t-1}) \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - v_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "adamw",
    "name": "AdamW",
    "fullName": "Adam with Decoupled Weight Decay",
    "description": "Adam optimizer with decoupled weight decay regularization",
    "year": 2017,
    "month": "November",
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
      "Weight Decay",
      "Adaptive",
      "Transformers"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adamw.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2, \\epsilon, \\lambda \\text{ (weight decay)} \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\lambda \\theta_{t-1} \\\\\n        &\\quad m_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1) g_t \\\\\n        &\\quad v_t \\leftarrow \\beta_2 v_{t-1} + (1-\\beta_2) g_t^2 \\\\\n        &\\quad \\hat{m}_t \\leftarrow m_t / (1-\\beta_1^t) \\\\\n        &\\quad \\hat{v}_t \\leftarrow v_t / (1-\\beta_2^t) \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_t - \\eta \\frac{\\hat{m}_t}{\\sqrt{\\hat{v}_t} + \\epsilon} \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "swats",
    "name": "SWATS",
    "fullName": "Switching from Adam to SGD",
    "description": "Hybrid approach combining Adam and SGD; improves generalization",
    "year": 2017,
    "month": "December",
    "category": "First-order",
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
      "Switching",
      "Hybrid",
      "Generalization"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/swats.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2, \\epsilon \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, v_0 \\leftarrow 0, \\text{phase} \\leftarrow \\text{ADAM} \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad \\text{if phase is ADAM:} \\\\\n        &\\quad \\quad m_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1) g_t \\\\\n        &\\quad \\quad v_t \\leftarrow \\beta_2 v_{t-1} + (1-\\beta_2) g_t^2 \\\\\n        &\\quad \\quad \\hat{m}_t \\leftarrow m_t / (1-\\beta_1^t), \\hat{v}_t \\leftarrow v_t / (1-\\beta_2^t) \\\\\n        &\\quad \\quad p_t \\leftarrow -\\eta \\frac{\\hat{m}_t}{\\sqrt{\\hat{v}_t} + \\epsilon} \\\\\n        &\\quad \\quad \\gamma_t \\leftarrow \\frac{p_t^T p_t}{-p_t^T g_t} \\\\\n        &\\quad \\quad \\text{if } |\\gamma_t - \\gamma_{t-1}| < \\epsilon \\text{ then phase} \\leftarrow \\text{SGD} \\\\\n        &\\quad \\quad \\theta_t \\leftarrow \\theta_{t-1} + p_t \\\\\n        &\\quad \\text{else (SGD):} \\\\\n        &\\quad \\quad \\theta_t \\leftarrow \\theta_{t-1} - \\gamma_t g_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "shampoo",
    "name": "Shampoo",
    "fullName": "Shampoo Preconditioned Stochastic Tensor Optimization",
    "description": "Preconditions stochastic tensor optimization; improves convergence",
    "year": 2018,
    "month": "February",
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
      "Preconditioning",
      "Tensor",
      "Second-order"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/shampoo.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\epsilon \\\\\n        &\\textbf{Initialize:} \\theta_0, L_0 \\leftarrow \\epsilon I, R_0 \\leftarrow \\epsilon I \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad L_t \\leftarrow L_{t-1} + g_t g_t^T \\\\\n        &\\quad R_t \\leftarrow R_{t-1} + g_t^T g_t \\\\\n        &\\quad \\tilde{g}_t \\leftarrow L_t^{-1/4} g_t R_t^{-1/4} \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\tilde{g}_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "qhadam",
    "name": "QHAdam",
    "fullName": "Quasi-Hyperbolic Adam",
    "description": "Combines quasi-hyperbolic terms with Adam; balances momentum and adaptivity",
    "year": 2018,
    "month": "October",
    "category": "First-order",
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
      "Quasi-Hyperbolic",
      "Adaptive",
      "Momentum"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/qhadam.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2, \\nu_1, \\nu_2, \\epsilon \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1) g_t \\\\\n        &\\quad v_t \\leftarrow \\beta_2 v_{t-1} + (1-\\beta_2) g_t^2 \\\\\n        &\\quad \\hat{m}_t \\leftarrow m_t / (1-\\beta_1^t), \\hat{v}_t \\leftarrow v_t / (1-\\beta_2^t) \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\frac{(1-\\nu_1) m_t + \\nu_1 g_t}{\\sqrt{(1-\\nu_2) v_t + \\nu_2 g_t^2} + \\epsilon} \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "qhm",
    "name": "QHM",
    "fullName": "Quasi-Hyperbolic Momentum",
    "description": "Introduces quasi-hyperbolic momentum; balances Nesterov momentum and SGD",
    "year": 2018,
    "month": "October",
    "category": "First-order",
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
      "Quasi-Hyperbolic",
      "Momentum",
      "Nesterov"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/qhm.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta, \\nu \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f_t(\\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow \\beta m_{t-1} + (1-\\beta) g_t \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta [(1-\\nu) m_t + \\nu g_t] \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "yogi",
    "name": "Yogi",
    "fullName": "Yogi Optimizer",
    "description": "Improved update rule for adaptive methods; handles nonconvex optimization better",
    "year": 2018,
    "month": "December",
    "category": "First-order",
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
      "Adaptive",
      "Non-convex",
      "Stability"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/yogi.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2, \\epsilon \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1) g_t \\\\\n        &\\quad v_t \\leftarrow v_{t-1} - (1-\\beta_2) \\text{sgn}(v_{t-1} - g_t^2) \\odot g_t^2 \\\\\n        &\\quad \\hat{m}_t \\leftarrow m_t / (1-\\beta_1^t), \\hat{v}_t \\leftarrow v_t / (1-\\beta_2^t) \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\frac{\\hat{m}_t}{\\sqrt{\\hat{v}_t} + \\epsilon} \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "adafactor",
    "name": "AdaFactor",
    "fullName": "Adaptive Learning Rates with Sublinear Memory Cost",
    "description": "Reduces memory usage compared to Adam; suitable for large models",
    "year": 2018,
    "month": "April",
    "category": "First-order",
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
      "Memory Efficient",
      "Factorization",
      "Large Models"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adafactor.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta_t, \\beta_2 \\\\\n        &\\textbf{Initialize:} \\theta_0, \\hat{v}_0 \\leftarrow 0, R_0 \\leftarrow 0, C_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad \\hat{v}_t \\leftarrow \\hat{v}_{t-1} + (1-\\beta_2) (g_t^2 - \\hat{v}_{t-1}) \\\\\n        &\\quad R_t \\leftarrow \\beta_2 R_{t-1} + (1-\\beta_2) (g_t^2 + \\epsilon_1) \\\\\n        &\\quad C_t \\leftarrow \\beta_2 C_{t-1} + (1-\\beta_2) (g_t^2 + \\epsilon_1) \\\\\n        &\\quad \\hat{u}_t \\leftarrow g_t / \\sqrt{R_t C_t} \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta_t \\hat{u}_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "aggmo",
    "name": "AggMo",
    "fullName": "Aggregated Momentum",
    "description": "Uses multiple momentum terms; improves stability and convergence",
    "year": 2018,
    "month": "April",
    "category": "First-order",
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
      "Aggregated Momentum",
      "Damping",
      "Stability"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/aggmo.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\dots, \\beta_K \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0^{(k)} \\leftarrow 0 \\text{ for } k=1\\dots K \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad \\textbf{for } k=1 \\text{ to } K \\text{ do} \\\\\n        &\\quad \\quad m_t^{(k)} \\leftarrow \\beta_k m_{t-1}^{(k)} + g_t \\\\\n        &\\quad \\textbf{end for} \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\frac{\\eta}{K} \\sum_{k=1}^K m_t^{(k)} \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "pid",
    "name": "PID",
    "fullName": "PID Controller Approach",
    "description": "Employs PID control principles; improves convergence and stability",
    "year": 2018,
    "month": "February",
    "category": "First-order",
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
      "Control Theory",
      "PID",
      "Feedback"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/pid.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, K_P, K_I, K_D, \\beta \\\\\n        &\\textbf{Initialize:} \\theta_0, I_0 \\leftarrow 0, D_0 \\leftarrow 0, g_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad I_t \\leftarrow \\beta I_{t-1} + (1-\\beta) g_t \\\\\n        &\\quad D_t \\leftarrow \\beta D_{t-1} + (1-\\beta) (g_t - g_{t-1}) \\\\\n        &\\quad \\Delta \\theta_t \\leftarrow K_P g_t + K_I I_t + K_D D_t \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\Delta \\theta_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "accsgd",
    "name": "AccSGD",
    "fullName": "Accelerated SGD via Online Learning to Learn",
    "description": "Accelerates SGD by learning to adapt the learning rate online",
    "year": 2018,
    "month": "July",
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
      "Accelerated",
      "Online Learning",
      "Optimization"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/accsgd.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\kappa, \\xi, \\delta \\\\\n        &\\textbf{Initialize:} \\theta_0, v_0 \\leftarrow 0, \\xi_0 \\leftarrow \\xi \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad \\xi_t \\leftarrow \\xi + \\delta^t \\\\\n        &\\quad v_t \\leftarrow \\kappa v_{t-1} + g_t \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta (g_t + \\xi_t v_t) \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "adabound",
    "name": "AdaBound",
    "fullName": "Adaptive Gradient Methods with Dynamic Bound of Learning Rate",
    "description": "Bounds the learning rate dynamically; combines benefits of adaptive and SGD methods",
    "year": 2019,
    "month": "February",
    "category": "First-order",
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
      "Dynamic Bound",
      "Adaptive",
      "SGD-like"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adabound.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2, \\eta_L(t), \\eta_U(t) \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1) g_t \\\\\n        &\\quad v_t \\leftarrow \\beta_2 v_{t-1} + (1-\\beta_2) g_t^2 \\\\\n        &\\quad \\hat{\\eta}_t \\leftarrow \\text{Clip}\\left(\\frac{\\eta}{\\sqrt{v_t}+\\epsilon}, \\eta_L(t), \\eta_U(t)\\right) \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\hat{\\eta}_t m_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "lamb",
    "name": "LAMB",
    "fullName": "Layer-wise Adaptive Moments optimizer for Batch training",
    "description": "Enables large batch training for BERT; improves training efficiency",
    "year": 2019,
    "month": "April",
    "category": "First-order",
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
      "Large Batch",
      "Layer-wise",
      "BERT"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/lamb.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2, \\lambda, \\epsilon \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1) g_t \\\\\n        &\\quad v_t \\leftarrow \\beta_2 v_{t-1} + (1-\\beta_2) g_t^2 \\\\\n        &\\quad \\hat{m}_t \\leftarrow m_t / (1-\\beta_1^t), \\hat{v}_t \\leftarrow v_t / (1-\\beta_2^t) \\\\\n        &\\quad r_t \\leftarrow \\frac{\\hat{m}_t}{\\sqrt{\\hat{v}_t} + \\epsilon} + \\lambda \\theta_{t-1} \\\\\n        &\\quad \\phi_t \\leftarrow \\frac{\\|\\theta_{t-1}\\|}{\\|r_t\\|} \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\phi_t r_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "lookahead",
    "name": "Lookahead",
    "fullName": "Lookahead Optimizer: k steps forward, 1 step back",
    "description": "Combines with other optimizers to improve convergence and stability",
    "year": 2019,
    "month": "July",
    "category": "First-order",
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
      "Wrapper",
      "Slow Weights",
      "Exploration"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/lookahead.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\text{Optimizer } \\mathcal{A}, k, \\alpha \\\\\n        &\\textbf{Initialize:} \\phi_0 \\leftarrow \\theta_0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad \\text{Synchronize: } \\theta_{t,0} \\leftarrow \\phi_{t-1} \\\\\n        &\\quad \\textbf{for } i=1 \\text{ to } k \\text{ do} \\\\\n        &\\quad \\quad g_{t,i} \\leftarrow \\nabla f_t(\\theta_{t,i-1}) \\\\\n        &\\quad \\quad \\theta_{t,i} \\leftarrow \\mathcal{A}(\\theta_{t,i-1}, g_{t,i}) \\\\\n        &\\quad \\textbf{end for} \\\\\n        &\\quad \\phi_t \\leftarrow \\phi_{t-1} + \\alpha (\\theta_{t,k} - \\phi_{t-1}) \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "radam",
    "name": "RAdam",
    "fullName": "Rectified Adam",
    "description": "Rectifies variance of the adaptive learning rate; improves stability",
    "year": 2019,
    "month": "August",
    "category": "First-order",
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
      "Rectified",
      "Variance Reduction",
      "Warm-up"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/radam.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2 \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1) g_t \\\\\n        &\\quad v_t \\leftarrow \\beta_2 v_{t-1} + (1-\\beta_2) g_t^2 \\\\\n        &\\quad \\rho_t \\leftarrow \\rho_{\\infty} - 2 t \\beta_2^t / (1-\\beta_2^t) \\\\\n        &\\quad \\text{if } \\rho_t > 4 \\text{ then compute } l_t \\text{ and update } \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta l_t \\frac{m_t}{\\sqrt{v_t} + \\epsilon} \\\\\n        &\\quad \\text{else update as SGD with momentum} \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "adamod",
    "name": "AdaMod",
    "fullName": "Adaptive Momentum Method for Stochastic Gradient Descent",
    "description": "Modulates the momentum term adaptively; improves stability and convergence",
    "year": 2019,
    "month": "October",
    "category": "First-order",
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
      "Momentum Modulation",
      "Adaptive",
      "Stability"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adamod.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2, \\beta_3 \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, v_0 \\leftarrow 0, s_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1) g_t \\\\\n        &\\quad v_t \\leftarrow \\beta_2 v_{t-1} + (1-\\beta_2) g_t^2 \\\\\n        &\\quad \\eta_t \\leftarrow \\eta / (\\sqrt{v_t} + \\epsilon) \\\\\n        &\\quad s_t \\leftarrow \\beta_3 s_{t-1} + (1-\\beta_3) \\eta_t \\\\\n        &\\quad \\hat{\\eta}_t \\leftarrow \\min(\\eta_t, s_t) \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\hat{\\eta}_t m_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "ranger",
    "name": "Ranger",
    "fullName": "RAdam + Lookahead",
    "description": "Combines RAdam and Lookahead; improves convergence and generalization",
    "year": 2019,
    "month": "August",
    "category": "First-order",
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
      "RAdam",
      "Lookahead",
      "Hybrid"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/ranger.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, k, \\alpha \\\\\n        &\\textbf{Initialize:} \\theta_0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad \\text{Gradient Centralization: } g_t \\leftarrow g_t - \\text{mean}(g_t) \\\\\n        &\\quad \\theta_{\\text{temp}} \\leftarrow \\text{RAdamStep}(\\theta_{t-1}, g_t) \\\\\n        &\\quad \\text{if } t \\mod k = 0 \\text{ then} \\\\\n        &\\quad \\quad \\theta_{\\text{slow}} \\leftarrow \\theta_{\\text{slow}} + \\alpha (\\theta_{\\text{temp}} - \\theta_{\\text{slow}}) \\\\\n        &\\quad \\quad \\theta_t \\leftarrow \\theta_{\\text{slow}} \\\\\n        &\\quad \\text{else } \\theta_t \\leftarrow \\theta_{\\text{temp}} \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "nadam",
    "name": "NAdam",
    "fullName": "Nesterov-accelerated Adaptive Moment Estimation",
    "description": "Combines Nesterov momentum with Adam; improves convergence",
    "year": 2016,
    "month": "March",
    "category": "First-order",
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
      "Nesterov",
      "Adam",
      "Adaptive"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/nadam.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2, \\epsilon \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, v_0 \\leftarrow 0, t \\leftarrow 0 \\\\\n        &\\textbf{while } \\theta_t \\text{ not converged} \\textbf{ do} \\\\\n        &\\quad t \\leftarrow t + 1 \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1) g_t \\\\\n        &\\quad v_t \\leftarrow \\beta_2 v_{t-1} + (1-\\beta_2) g_t^2 \\\\\n        &\\quad \\hat{m}_t \\leftarrow \\frac{m_t}{1-\\beta_1^t} \\\\\n        &\\quad \\hat{v}_t \\leftarrow \\frac{v_t}{1-\\beta_2^t} \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\frac{\\eta}{\\sqrt{\\hat{v}_t} + \\epsilon} (\\beta_1 \\hat{m}_t + \\frac{1-\\beta_1}{1-\\beta_1^t} g_t) \\\\\n        &\\textbf{end while}\n    \\end{aligned}"
  },
  {
    "id": "novograd",
    "name": "NovoGrad",
    "fullName": "Stochastic Gradient Methods with Layer-wise Adaptive Moments",
    "description": "Uses layer-wise adaptive moments; efficient for deep networks",
    "year": 2019,
    "month": "May",
    "category": "First-order",
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
      "Layer-wise",
      "Adaptive",
      "Deep Networks"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/novograd.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2 \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad v_t \\leftarrow \\beta_2 v_{t-1} + (1-\\beta_2) \\|g_t\\|^2 \\\\\n        &\\quad m_t \\leftarrow \\beta_1 m_{t-1} + \\frac{g_t}{\\sqrt{v_t} + \\epsilon} \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta m_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "diffgrad",
    "name": "DiffGrad",
    "fullName": "Differentiating the Gradient History",
    "description": "Differentiates the gradient history; improves convergence",
    "year": 2019,
    "month": "September",
    "category": "First-order",
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
      "Gradient Difference",
      "Adaptive",
      "CNN"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/diffgrad.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2 \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad \\xi_t \\leftarrow \\frac{1}{1 + e^{-|g_t - g_{t-1}|}} \\\\\n        &\\quad m_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1) g_t \\\\\n        &\\quad v_t \\leftarrow \\beta_2 v_{t-1} + (1-\\beta_2) g_t^2 \\\\\n        &\\quad \\hat{m}_t \\leftarrow \\xi_t m_t \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\frac{\\eta}{\\sqrt{v_t}+\\epsilon} \\hat{m}_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "adahessian",
    "name": "AdaHessian",
    "fullName": "Adaptive Second Order Optimizer",
    "description": "Uses Hessian information adaptively; suitable for nonconvex optimization",
    "year": 2020,
    "month": "June",
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
      "Hessian",
      "Second-order",
      "Adaptive"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adahessian.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2 \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}), D_t \\leftarrow \\text{diag}(H_t) \\\\\n        &\\quad m_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1) g_t \\\\\n        &\\quad v_t \\leftarrow \\beta_2 v_{t-1} + (1-\\beta_2) D_t^2 \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\frac{\\eta}{\\sqrt{v_t} + \\epsilon} m_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "adabelief",
    "name": "AdaBelief",
    "fullName": "Adapting Stepsizes by the Belief in Observed Gradients",
    "description": "Adapts stepsizes based on the belief in observed gradients; improves convergence",
    "year": 2020,
    "month": "October",
    "category": "First-order",
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
      "Gradient Belief",
      "Adaptive",
      "Stability"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adabelief.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2 \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, s_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1) g_t \\\\\n        &\\quad s_t \\leftarrow \\beta_2 s_{t-1} + (1-\\beta_2) (g_t - m_t)^2 + \\epsilon \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\frac{m_t}{\\sqrt{s_t} + \\epsilon} \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "adamp",
    "name": "AdamP",
    "fullName": "Slowing Down the Weight Norm Increase in Momentum-based Optimizers",
    "description": "Mitigates weight norm increase; improves generalization",
    "year": 2020,
    "month": "June",
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
      "Projection",
      "Weight Norm",
      "Generalization"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adamp.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2, \\delta \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1) g_t \\\\\n        &\\quad v_t \\leftarrow \\beta_2 v_{t-1} + (1-\\beta_2) g_t^2 \\\\\n        &\\quad \\eta_t \\leftarrow \\text{Projection}(m_t, v_t, \\theta_{t-1}, \\delta) \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\eta_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "sgdp",
    "name": "SGDP",
    "fullName": "SGD with Projection",
    "description": "Prevents excessive weight norm increase; improves stability",
    "year": 2020,
    "month": "June",
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
      "Projection",
      "Weight Norm",
      "SGD"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/sgdp.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\delta \\\\\n        &\\textbf{Initialize:} \\theta_0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad \\eta_t \\leftarrow \\text{Projection}(g_t, \\theta_{t-1}, \\delta) \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\eta_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "apollo",
    "name": "Apollo (1)",
    "fullName": "Adaptive Parameter-wise Diagonal Quasi-Newton Method",
    "description": "Adaptive quasi-Newton method; efficient for nonconvex optimization",
    "year": 2020,
    "month": "September",
    "category": "Second-order",
    "paper": {
      "title": "Apollo: An Adaptive Parameter-wise Diagonal Quasi-Newton Method for Nonconvex Stochastic Optimization",
      "url": "https://arxiv.org/abs/2009.13586",
      "authors": [
        "Xuezhe Ma"
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
      "Quasi-Newton",
      "Non-convex",
      "Parameter-wise"
    ],
    "githubUrl": "https://github.com/XuezheMax/apollo",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta \\\\\n        &\\textbf{Initialize:} \\theta_0, B_0 \\leftarrow \\epsilon I \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad s_t \\leftarrow \\theta_t - \\theta_{t-1} \\\\\n        &\\quad y_t \\leftarrow g_t - g_{t-1} \\\\\n        &\\quad B_t \\leftarrow B_{t-1} + \\frac{y_t y_t^T}{y_t^T s_t} - \\frac{B_{t-1} s_t s_t^T B_{t-1}}{s_t^T B_{t-1} s_t} \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta B_t^{-1} g_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "apollo-2",
    "name": "Apollo (2)",
    "fullName": "APOLLO: SGD-like Memory, AdamW-level Performance",
    "description": "A memory-efficient optimizer achieving AdamW-level performance with SGD-like memory usage.",
    "year": 2024,
    "month": "December",
    "category": "First-order",
    "paper": {
      "title": "APOLLO: SGD-like Memory, AdamW-level Performance",
      "url": "https://arxiv.org/abs/2412.05270",
      "authors": [
        "Hanqing Zhu",
        "et al."
      ]
    },
    "advantages": [
      "Memory efficient (SGD-like)",
      "AdamW-level performance",
      "Suitable for LLMs"
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
        "default": 1e-08,
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
      "Memory Efficient",
      "LLM",
      "Adaptive"
    ],
    "githubUrl": "https://github.com/zhuhanqing/APOLLO",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta, \\beta_2 \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f(\\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow \\beta m_{t-1} + (1-\\beta) g_t \\\\\n        &\\quad v_t \\leftarrow \\beta_2 v_{t-1} + (1-\\beta_2) \\text{mean}(g_t^2) \\text{ (channel-wise)} \\\\\n        &\\quad \\alpha_t \\leftarrow \\text{ComputeWarmupLearningRate}(t) \\\\\n        &\\quad w_t \\leftarrow \\frac{1}{\\sqrt{v_t} + \\epsilon} \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\alpha_t w_t \\odot m_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "sam",
    "name": "SAM",
    "fullName": "Sharpness-Aware Minimization",
    "description": "Minimizes sharpness of the loss landscape; improves generalization",
    "year": 2020,
    "month": "October",
    "category": "First-order",
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
      "Sharpness Aware",
      "Regularization",
      "Generalization"
    ],
    "githubUrl": "https://github.com/google-research/sam",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\theta_0, \\rho, \\eta, \\text{Optimizer } \\mathcal{A} \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f_t(\\theta_{t-1}) \\\\\n        &\\quad \\epsilon_t \\leftarrow \\rho \\frac{g_t}{\\|g_t\\|_2} \\\\\n        &\\quad \\tilde{g}_t \\leftarrow \\nabla f_t(\\theta_{t-1} + \\epsilon_t) \\\\\n        &\\quad \\theta_t \\leftarrow \\mathcal{A}(\\theta_{t-1}, \\tilde{g}_t) \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "madgrad",
    "name": "MADGRAD",
    "fullName": "A Momentumized, Adaptive, Dual Averaged Gradient Method",
    "description": "Combines momentum, adaptivity, and dual averaging; improves stability",
    "year": 2021,
    "month": "January",
    "category": "First-order",
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
        "default": 1e-06,
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
      "Dual Averaging",
      "Momentum",
      "Adaptive"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/madgrad.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2, \\epsilon \\\\\n        &\\textbf{Initialize:} \\theta_0, s_0 \\leftarrow 0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=0 \\text{ to } T-1 \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f(\\theta_t) \\\\\n        &\\quad s_{t+1} \\leftarrow s_t + \\lambda g_t \\\\\n        &\\quad v_{t+1} \\leftarrow v_t + \\lambda g_t^2 \\\\\n        &\\quad z_{t+1} \\leftarrow z_t - \\frac{\\lambda}{\\sqrt[3]{v_{t+1}} + \\epsilon} (g_t + s_t) \\\\\n        &\\quad \\theta_{t+1} \\leftarrow (1 - \\tau) \\theta_t + \\tau z_{t+1} \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "adan",
    "name": "Adan",
    "fullName": "Adaptive Nesterov Momentum Algorithm",
    "description": "Adaptive Nesterov momentum; faster optimization for deep models",
    "year": 2022,
    "month": "August",
    "category": "First-order",
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
      "Nesterov",
      "Multi-moment",
      "Adaptive"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adan.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2, \\beta_3, \\epsilon \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, v_0 \\leftarrow 0, n_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f(\\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow (1-\\beta_1)m_{t-1} + \\beta_1 g_t \\\\\n        &\\quad v_t \\leftarrow (1-\\beta_2)v_{t-1} + \\beta_2 (g_t - g_{t-1}) \\\\\n        &\\quad n_t \\leftarrow (1-\\beta_3)n_{t-1} + \\beta_3 (g_t + (1-\\beta_2)(g_t - g_{t-1}))^2 \\\\\n        &\\quad \\eta_t \\leftarrow \\eta / (\\sqrt{n_t} + \\epsilon) \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta_t (m_t + (1-\\beta_2)v_t) \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "came",
    "name": "CAME",
    "fullName": "Confidence-guided Adaptive Memory Efficient Optimization",
    "description": "Adaptive and memory-efficient; improves optimization with confidence guidance",
    "year": 2023,
    "month": "July",
    "category": "First-order",
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
      "Confidence-guided",
      "Memory Efficient",
      "Large Models"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/came.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2, \\beta_3 \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, v_0 \\leftarrow 0, n_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow (1-\\beta_1)m_{t-1} + \\beta_1 g_t \\\\\n        &\\quad v_t \\leftarrow (1-\\beta_2)v_{t-1} + \\beta_2 (g_t - g_{t-1}) \\\\\n        &\\quad n_t \\leftarrow (1-\\beta_3)n_{t-1} + \\beta_3 [g_t + (1-\\beta_2)(g_t - g_{t-1})]^2 \\\\\n        &\\quad \\hat{m}_t \\leftarrow m_t + (1-\\beta_2)v_t \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\hat{m}_t / (\\sqrt{n_t} + \\epsilon) \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "sophia",
    "name": "Sophia",
    "fullName": "Scalable Stochastic Second-order Optimizer",
    "description": "Scalable second-order optimizer; efficient for large-scale pre-training",
    "year": 2023,
    "month": "May",
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
      "Hessian Diagonal",
      "Scalable",
      "LLM Pre-training"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/sophia.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2, \\rho, \\epsilon \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, h_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f(\\theta_{t-1}) \\\\\n        &\\quad u_t \\leftarrow \\text{EstHessianDiag}(\\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1) g_t \\\\\n        &\\quad h_t \\leftarrow \\beta_2 h_{t-1} + (1-\\beta_2) u_t \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\cdot \\text{clip}\\left(\\frac{m_t}{\\max(h_t, \\epsilon)}, \\rho\\right) \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "svrg",
    "name": "SVRG (Variant)",
    "fullName": "Stochastic Variance Reduced Gradient",
    "description": "Variance reduction technique; enhances optimization with confidence-guided adjustment",
    "year": 2023,
    "month": "November",
    "category": "First-order",
    "paper": {
      "title": "A Coefficient Makes SVRG Effective",
      "url": "https://arxiv.org/abs/2311.05589",
      "authors": [
        "Yida Yin",
        "Zheng Qu",
        "Peter Richt\u00e1rik"
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
      "Variance Reduction",
      "Stochastic",
      "Convex"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/svrg.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2 \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0, h_0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad \\text{Estimate Hessian Diagonal } H_t \\\\\n        &\\quad h_t \\leftarrow \\beta_2 h_{t-1} + (1-\\beta_2) H_t \\\\\n        &\\quad m_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1) g_t \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\frac{m_t}{\\max(h_t, \\epsilon)} \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "prodigy",
    "name": "Prodigy",
    "fullName": "Expeditiously Adaptive Parameter-Free Learner",
    "description": "Parameter-free optimizer that dynamically adjusts learning rate by estimating distance to optimal solution",
    "year": 2023,
    "month": "June",
    "category": "First-order",
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
      "Parameter-free",
      "Distance Estimation",
      "Adaptive"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/prodigy.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\text{Growth rate } d, \\beta \\\\\n        &\\textbf{Initialize:} x_1, s_1 \\leftarrow d, \\eta_1 \\leftarrow 1 \\\\\n        &\\textbf{for } k=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad \\eta_k \\leftarrow \\min(\\eta_k, d / \\sqrt{s_k}) \\\\\n        &\\quad x_{k+1} \\leftarrow x_k - \\eta_k g_k \\\\\n        &\\quad s_{k+1} \\leftarrow s_k + \\beta \\eta_k \\langle g_k, x_0 - x_k \\rangle \\\\\n        &\\quad \\eta_{k+1} \\leftarrow \\eta_k \\cdot \\text{GrowthFactor} \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "adam-mini",
    "name": "Adam-mini",
    "fullName": "Adam with Fewer Learning Rates",
    "description": "Memory-efficient Adam variant that reduces the number of learning rates to gain more performance",
    "year": 2024,
    "month": "June",
    "category": "First-order",
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
        "default": 1e-08,
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
      "Memory Efficient",
      "Learning Rate Reduction",
      "LLM"
    ],
    "githubUrl": "https://github.com/zyushun/Adam-mini",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2 \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{Partition:} \\text{Assign parameters to blocks } B_1, \\dots, B_k \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f(\\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1) g_t \\\\\n        &\\quad \\textbf{for } j=1 \\text{ to } k \\text{ do} \\\\\n        &\\quad \\quad \\hat{v}_{t,j} \\leftarrow \\text{mean}(g_{t, B_j}^2) \\\\\n        &\\quad \\quad v_{t,j} \\leftarrow \\beta_2 v_{t-1,j} + (1-\\beta_2) \\hat{v}_{t,j} \\\\\n        &\\quad \\quad \\theta_{t, B_j} \\leftarrow \\theta_{t-1, B_j} - \\frac{\\eta}{\\sqrt{v_{t,j}} + \\epsilon} m_{t, B_j} \\\\\n        &\\quad \\textbf{end for} \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "muon",
    "name": "Muon",
    "fullName": "Muon Optimizer with Orthogonal Updates",
    "description": "Orthogonal weight updates via Newton-Schulz iteration for improved training dynamics",
    "year": 2025,
    "month": "February",
    "category": "Second-order",
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
      "Orthogonal Updates",
      "Newton-Schulz",
      "Second-order"
    ],
    "githubUrl": "https://github.com/KellerJordan/Muon",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\mu, K \\text{ (NS steps)} \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f(\\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow \\mu m_{t-1} + g_t \\\\\n        &\\quad O_t \\leftarrow \\text{NewtonSchulz}(m_t, K) \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta O_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "htmuon",
    "name": "HTMuon",
    "fullName": "HTMuon: Heavy-Tailed Spectral Correction for Muon",
    "description": "Extends Muon with heavy-tailed spectral correction (HT-SR motivated) to yield heavier-tailed updates and weight spectra while retaining cross-parameter structure; interpretable as steepest descent under a Schatten-q norm and usable as a plug-in on Muon variants",
    "year": 2026,
    "month": "March",
    "category": "Second-order",
    "paper": {
      "title": "HTMuon: Improving Muon via Heavy-Tailed Spectral Correction",
      "url": "https://arxiv.org/abs/2603.10067",
      "authors": [
        "Tianyu Pang",
        "Yujie Fang",
        "Zihang Liu",
        "Shenyang Deng",
        "Lei Hsiung",
        "Shuhua Yu",
        "Yaoqing Yang"
      ]
    },
    "advantages": [
      "Improves Muon on LLM pretraining and image classification",
      "Heavier-tailed updates and induced heavy-tailed weight spectra",
      "Preserves Muon-style modeling of parameter interdependence",
      "Plug-in on existing Muon variants",
      "Theoretical link to Schatten-q constrained steepest descent"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.02,
        "range": "1e-3 to 1e-1",
        "description": "Learning rate (often aligned with Muon schedules)"
      },
      "momentum": {
        "default": 0.95,
        "range": "0.9 to 0.99",
        "description": "Momentum coefficient"
      },
      "nesterov": {
        "default": "True",
        "range": "True/False",
        "description": "Use Nesterov momentum (as in standard Muon setups)"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 80,
    "tags": [
      "Muon Variant",
      "Heavy-Tailed",
      "Spectral",
      "LLM"
    ],
    "githubUrl": "https://github.com/TDCSZ327/HTmuon",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\mu, K \\text{ (NS steps)} \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f(\\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow \\mu m_{t-1} + g_t \\\\\n        &\\quad O_t \\leftarrow \\text{NewtonSchulz}(m_t, K) \\\\\n        &\\quad \\tilde{O}_t \\leftarrow \\text{HTSpectralCorr}(O_t) \\quad \\text{(heavy-tailed Schatten-}q\\text{ correction)} \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\tilde{O}_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "lion",
    "name": "Lion",
    "fullName": "EvoLved Sign Momentum",
    "description": "Evolved optimizer using sign-based updates; memory efficient",
    "year": 2023,
    "month": "February",
    "category": "First-order",
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
      "Sign-based",
      "Memory Efficient",
      "Evolutionary"
    ],
    "githubUrl": "https://github.com/google-research/lion",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2, \\lambda \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad c_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1) g_t \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta (\\text{sign}(c_t) + \\lambda \\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow \\beta_2 m_{t-1} + (1-\\beta_2) g_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "sgdw",
    "name": "SGDW",
    "fullName": "SGD with Weight Decay",
    "description": "SGD with proper weight decay implementation",
    "year": 2017,
    "month": "November",
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
      "Decoupled Weight Decay",
      "SGD",
      "Baselines"
    ],
    "githubUrl": "https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/sgdw.py",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\mu, \\lambda \\\\\n        &\\textbf{Initialize:} \\theta_0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\lambda \\theta_{t-1} \\\\\n        &\\quad v_t \\leftarrow \\mu v_{t-1} + g_t \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_t - \\eta v_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "soap",
    "name": "SOAP",
    "fullName": "Shampoo with Adam in the Preconditioner's eigenbasis",
    "description": "Improves and stabilizes Shampoo by running Adam in the preconditioner's eigenbasis; reduces computational overhead while maintaining performance",
    "year": 2024,
    "month": "September",
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
      "Preconditioning",
      "Eigenbasis",
      "Efficient"
    ],
    "githubUrl": "https://github.com/nikhilvyas/SOAP/tree/main",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2 \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f(\\theta_{t-1}) \\\\\n        &\\quad \\text{Update Preconditioner } L_t, R_t \\\\\n        &\\quad \\text{Run Adam in Eigenbasis of } L_t, R_t \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\cdot \\text{Update} \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "mars",
    "name": "MARS",
    "fullName": "Make vAriance Reduction Shine",
    "description": "Unified optimization framework that reconciles preconditioned gradient methods with variance reduction for efficient training of large models",
    "year": 2024,
    "month": "November",
    "category": "First-order",
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
      "Variance Reduction",
      "Preconditioning",
      "Large Models"
    ],
    "githubUrl": "https://github.com/AGI-Arena/MARS",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2, \\gamma, \\epsilon \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, v_0 \\leftarrow 0, c_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f(\\theta_{t-1}) \\\\\n        &\\quad c_t \\leftarrow (1-\\gamma)c_{t-1} + \\gamma g_t + (1-\\gamma)(g_t - g_{t-1}) \\\\\n        &\\quad m_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1) c_t \\\\\n        &\\quad v_t \\leftarrow \\beta_2 v_{t-1} + (1-\\beta_2) c_t^2 \\\\\n        &\\quad \\hat{m}_t \\leftarrow m_t / (1-\\beta_1^t), \\hat{v}_t \\leftarrow v_t / (1-\\beta_2^t) \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\hat{m}_t / (\\sqrt{\\hat{v}_t} + \\epsilon) \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "spam",
    "name": "SPAM",
    "fullName": "SPAM Optimizer",
    "description": "Novel optimization algorithm for improved training efficiency and convergence in deep learning",
    "year": 2025,
    "month": "January",
    "category": "First-order",
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
      "Novel",
      "Optimization",
      "Deep Learning"
    ],
    "githubUrl": "https://github.com/TianjinYellow/SPAM-Optimizer",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2, \\epsilon, \\tau \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f(\\theta_{t-1}) \\\\\n        &\\quad \\textbf{if } \\|g_t\\| > \\tau \\textbf{ then} \\\\\n        &\\quad \\quad m_{t-1} \\leftarrow 0 \\quad \\text{// Momentum Reset} \\\\\n        &\\quad \\quad g_t \\leftarrow \\text{Clip}(g_t, \\tau) \\\\\n        &\\quad \\textbf{end if} \\\\\n        &\\quad m_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1) g_t \\\\\n        &\\quad v_t \\leftarrow \\beta_2 v_{t-1} + (1-\\beta_2) g_t^2 \\\\\n        &\\quad \\hat{m}_t \\leftarrow m_t / (1-\\beta_1^t), \\hat{v}_t \\leftarrow v_t / (1-\\beta_2^t) \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\hat{m}_t / (\\sqrt{\\hat{v}_t} + \\epsilon) \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "adamuon",
    "name": "AdaMuon",
    "fullName": "Adaptive Muon Optimizer",
    "description": "Adaptive optimization algorithm with improved convergence and stability for large-scale machine learning",
    "year": 2025,
    "month": "July",
    "category": "Second-order",
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
      "Adaptive",
      "Muon Variant",
      "Optimization"
    ],
    "githubUrl": "https://github.com/Chongjie-Si/AdaMuon",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\mu, \\beta_2, \\epsilon, K \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f(\\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow \\mu m_{t-1} + g_t \\\\\n        &\\quad v_t \\leftarrow \\beta_2 v_{t-1} + (1-\\beta_2) g_t^2 \\\\\n        &\\quad O_t \\leftarrow \\text{NewtonSchulz}(m_t, K) \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta (O_t \\odot \\frac{1}{\\sqrt{v_t} + \\epsilon}) \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "conda",
    "name": "Conda",
    "fullName": "Conda Optimizer",
    "description": "Advanced optimization algorithm designed for efficient training of modern deep learning models",
    "year": 2025,
    "month": "September",
    "category": "First-order",
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
      "Advanced",
      "Optimization",
      "Deep Learning"
    ],
    "githubUrl": "https://github.com/jie040109/Conda",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2, \\epsilon \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f(\\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1) g_t \\\\\n        &\\quad v_t \\leftarrow \\beta_2 v_{t-1} + (1-\\beta_2) \\text{ColMean}(g_t^2) \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\frac{m_t}{\\sqrt{v_t} + \\epsilon} \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "adalomo",
    "name": "AdaLomo",
    "fullName": "Low-memory Optimization with Adaptive Learning Rate",
    "description": "Memory-efficient optimizer that provides adaptive learning rates for each parameter while maintaining low memory footprint through non-negative matrix factorization",
    "year": 2023,
    "month": "October",
    "category": "First-order",
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
        "default": 0.0001,
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
        "default": 1e-08,
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
      "Low Memory",
      "Adaptive",
      "LLM Tuning"
    ],
    "githubUrl": "https://github.com/OpenLMLab/LOMO",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta \\\\\n        &\\textbf{Initialize:} \\theta_0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f(\\theta_{t-1}) \\\\\n        &\\quad \\text{Update NMF factors } U_t, V_t \\text{ of second moment } \\hat{v}_t \\approx g_t^2 \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\frac{g_t}{\\sqrt{U_t V_t^T} + \\epsilon} \\\\\n        &\\quad \\text{Free } g_t \\text{ immediately} \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "badam",
    "name": "BAdam",
    "fullName": "Block-wise Adam",
    "description": "Block-wise adaptive optimizer that applies Adam updates to parameter blocks rather than individual parameters, improving memory efficiency and convergence",
    "year": 2024,
    "month": "April",
    "category": "First-order",
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
        "default": 0.0001,
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
        "default": 1e-08,
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
      "Block-wise",
      "Memory Efficient",
      "LLM"
    ],
    "githubUrl": "https://github.com/Ledzy/BAdam",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta \\\\\n        &\\textbf{Initialize:} \\theta_0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad \\text{Block-wise Adam Update} \\\\\n        &\\quad \\text{Partition } \\theta \\text{ into blocks } B_i \\\\\n        &\\quad \\text{For each } B_i: \\theta_{B_i} \\leftarrow \\text{Adam}(\\theta_{B_i}, g_{B_i}) \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "ademamix",
    "name": "AdEMAMix",
    "fullName": "Adaptive Exponential Moving Average Mixture",
    "description": "A modification of Adam that uses a mixture of two EMAs to better leverage past gradients, showing that gradients can stay relevant for tens of thousands of steps",
    "year": 2024,
    "month": "September",
    "category": "First-order",
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
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "betas": {
        "default": [
          0.9,
          0.999,
          0.9999
        ],
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
      "EMA Mixture",
      "Long-term Memory",
      "Forgetfulness"
    ],
    "githubUrl": "https://github.com/apple/ml-ademamix",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2, \\beta_3, \\alpha, \\lambda \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, m_0^{(s)} \\leftarrow 0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f(\\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1)g_t \\\\\n        &\\quad m_t^{(s)} \\leftarrow \\beta_3 m_{t-1}^{(s)} + (1-\\beta_3)g_t \\\\\n        &\\quad v_t \\leftarrow \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2 \\\\\n        &\\quad \\text{Bias-correct } \\hat{m}_t, \\hat{m}_t^{(s)}, \\hat{v}_t \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\left(\\frac{\\hat{m}_t + \\alpha \\hat{m}_t^{(s)}}{\\sqrt{\\hat{v}_t} + \\epsilon} + \\lambda \\theta_{t-1}\\right) \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "root",
    "name": "ROOT",
    "fullName": "Robust Orthogonalized Optimizer for Neural Network Training",
    "description": "Enhances training stability through dimension-robust orthogonalization using adaptive Newton iterations and an optimization-robust framework via proximal optimization.",
    "year": 2025,
    "month": "November",
    "category": "Second-order",
    "paper": {
      "title": "ROOT: Robust Orthogonalized Optimizer for Neural Network Training",
      "url": "https://arxiv.org/abs/2511.20626",
      "authors": [
        "Wei He",
        "Kai Han",
        "Hang Zhou",
        "Hanting Chen",
        "Zhicheng Liu",
        "Xinghao Chen",
        "Yunhe Wang"
      ]
    },
    "advantages": [
      "Dimension-robust orthogonalization",
      "Suppresses outlier-induced noise",
      "Consistent precision across architectures",
      "Superior performance in noisy scenarios"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-4 to 1e-2",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Momentum factor"
      },
      "weight_decay": {
        "default": 0.01,
        "range": "0.0 to 0.1",
        "description": "Weight decay"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 60,
    "tags": [
      "Robustness",
      "Orthogonalization",
      "Newton Iterations",
      "Large Models"
    ],
    "githubUrl": "https://github.com/huawei-noah/noah-research/tree/master/ROOT",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2, \\epsilon, K \\text{ (NS steps)} \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f(\\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1) g_t \\\\\n        &\\quad v_t \\leftarrow \\beta_2 v_{t-1} + (1-\\beta_2) g_t^2 \\\\\n        &\\quad \\hat{v}_t \\leftarrow v_t / (1-\\beta_2^t) \\\\\n        &\\quad \\text{Reshape } m_t \\text{ to matrix } M_t \\text{ for layer-wise orthogonalization} \\\\\n        &\\quad O_t \\leftarrow \\text{NewtonSchulz}(M_t, K) \\text{ (dimension-robust)} \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\frac{O_t}{\\sqrt{\\hat{v}_t} + \\epsilon} \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "gluon",
    "name": "Gluon",
    "fullName": "Gluon: Making Muon & Scion Great Again!",
    "description": "LMO-based optimizer that introduces a refined generalized smoothness model to capture layer-wise geometry, bridging the gap between theory and practice for Muon and Scion.",
    "year": 2025,
    "month": "May",
    "category": "Second-order",
    "paper": {
      "title": "Gluon: Making Muon & Scion Great Again! (Bridging Theory and Practice of LMO-based Optimizers for LLMs)",
      "url": "https://arxiv.org/abs/2505.13416",
      "authors": [
        "Artem Riabinin",
        "Egor Shulgin",
        "Kaja Gruntkowska",
        "Peter Richt\u00e1rik"
      ]
    },
    "advantages": [
      "Bridges theory and practice for LMO methods",
      "Captures layer-wise geometry",
      "Improved theoretical step sizes",
      "Strong practical predictive power"
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
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 65,
    "tags": [
      "LMO-based",
      "Layer-wise Geometry",
      "Theoretical Analysis",
      "LLM"
    ],
    "githubUrl": "",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta \\\\\n        &\\textbf{Initialize:} \\theta_0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f(\\theta_{t-1}) \\\\\n        &\\quad \\text{Apply Generalized LMO (Gluon)} \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\cdot \\text{Update} \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "dion",
    "name": "Dion",
    "fullName": "Distributed Orthonormalized Updates",
    "description": "Scalable optimizer using amortized power iterations on momentum buffers for orthonormalized updates, reducing wall-clock time for large-scale training.",
    "year": 2025,
    "month": "April",
    "category": "Second-order",
    "paper": {
      "title": "Dion: Distributed Orthonormalized Updates",
      "url": "https://arxiv.org/abs/2504.05295",
      "authors": [
        "Kushal Tirumala",
        "Sourabh Garg",
        "Zaid Harchaoui",
        "Ross Girshick",
        "Sewoong Oh",
        "Armand Joulin",
        "Ludwig Schmidt"
      ]
    },
    "advantages": [
      "Efficient distributed training",
      "Amortized power iterations",
      "Reduced wall-clock time",
      "Compatible with weight sharding"
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
      "rank_fraction": {
        "default": 1.0,
        "range": "0.1 to 1.0",
        "description": "Rank fraction for updates"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 70,
    "tags": [
      "Distributed",
      "Orthonormalized",
      "Power Iterations",
      "Efficient"
    ],
    "githubUrl": "https://github.com/microsoft/dion/",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta \\\\\n        &\\textbf{Initialize:} \\theta_0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f(\\theta_{t-1}) \\\\\n        &\\quad \\text{Distributed Power Iteration (Dion)} \\\\\n        &\\quad O_t \\leftarrow \\text{PowerIter}(g_t) \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta O_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "stable-spam",
    "name": "Stable-SPAM",
    "fullName": "Stable-SPAM: How to Train in 4-Bit More Stably than 16-Bit Adam",
    "description": "Enhances SPAM with adaptive gradient clipping, matrix normalization, and momentum reset to enable stable and efficient 4-bit LLM training.",
    "year": 2025,
    "month": "February",
    "category": "First-order",
    "paper": {
      "title": "Stable-SPAM: How to Train in 4-Bit More Stably than 16-Bit Adam",
      "url": "https://arxiv.org/abs/2502.17055",
      "authors": [
        "Tianjin Huang",
        "Haotian Hu",
        "Zhenyu Zhang",
        "Gaojie Jin",
        "Xiang Li",
        "Li Shen",
        "Tianlong Chen",
        "Lu Liu",
        "Qingsong Wen",
        "Zhangyang Wang",
        "Shiwei Liu"
      ]
    },
    "advantages": [
      "Stabilizes gradient norms in 4-bit training",
      "Outperforms BF16 Adam with 4-bit training",
      "Faster convergence than Adam",
      "Effective for low-bit LLM training"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-4 to 1e-2",
        "description": "Learning rate"
      },
      "gamma1": {
        "default": 0.7,
        "range": "0.5 to 0.9",
        "description": "Hyperparameter for momentum reset"
      },
      "gamma2": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Hyperparameter for momentum reset"
      },
      "gamma3": {
        "default": 0.999,
        "range": "0.9 to 0.9999",
        "description": "Hyperparameter for momentum reset"
      },
      "update_proj_gap": {
        "default": 1000,
        "range": "100 to 2000",
        "description": "Gap for updating projection"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 50,
    "tags": [
      "4-bit Training",
      "Quantization",
      "Stability",
      "LLM"
    ],
    "githubUrl": "https://github.com/TianjinYellow/StableSPAM",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2, \\epsilon, \\tau_0 \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f(\\theta_{t-1}) \\\\\n        &\\quad \\tau_t \\leftarrow \\text{UpdateThreshold}(\\tau_{t-1}, g_t) \\\\\n        &\\quad g_t \\leftarrow \\text{MatrixNorm}(\\text{Clip}(g_t, \\tau_t)) \\\\\n        &\\quad \\textbf{if } \\text{Spike}(g_t) \\textbf{ then } m_{t-1} \\leftarrow 0 \\\\\n        &\\quad m_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1) g_t \\\\\n        &\\quad v_t \\leftarrow \\beta_2 v_{t-1} + (1-\\beta_2) g_t^2 \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\text{Quantize}\\left(\\frac{m_t}{\\sqrt{v_t} + \\epsilon}, \\text{4-bit}\\right) \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "kfac",
    "name": "K-FAC",
    "fullName": "Kronecker-Factored Approximate Curvature",
    "description": "Efficient method for approximating natural gradient descent in neural networks by approximating the Fisher information matrix with Kronecker products.",
    "year": 2015,
    "month": "March",
    "category": "Second-order",
    "paper": {
      "title": "Optimizing Neural Networks with Kronecker-factored Approximate Curvature",
      "url": "https://arxiv.org/abs/1503.05671",
      "authors": [
        "James Martens",
        "Roger Grosse"
      ]
    },
    "advantages": [
      "Approximates natural gradient",
      "Efficient inversion via Kronecker factors",
      "Faster convergence than SGD"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-4 to 1e-1",
        "description": "Learning rate"
      },
      "damping": {
        "default": 0.001,
        "range": "1e-4 to 1e-1",
        "description": "Damping parameter"
      },
      "cov_ema_decay": {
        "default": 0.95,
        "range": "0.9 to 0.99",
        "description": "Covariance moving average decay"
      },
      "invert_freq": {
        "default": 10,
        "range": "1 to 100",
        "description": "Inverse update frequency"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 80,
    "tags": [
      "Second-order",
      "Natural Gradient",
      "Approximation"
    ],
    "githubUrl": "https://github.com/gpauloski/kfac-pytorch",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\epsilon_{\\text{damp}} \\\\\n        &\\textbf{Initialize:} \\theta_0, A_0, G_0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f(\\theta_{t-1}) \\\\\n        &\\quad \\text{Update curvature factors } A_t, G_t \\text{ (Kronecker)} \\\\\n        &\\quad \\Delta \\theta \\leftarrow (A_t \\otimes G_t + \\lambda I)^{-1} g_t \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\cdot \\Delta \\theta \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "signsgd",
    "name": "signSGD",
    "fullName": "signSGD: Compressed Optimisation for Non-Convex Problems",
    "description": "Transmits just the sign of each minibatch stochastic gradient, enabling compressed worker-server communication.",
    "year": 2018,
    "month": "February",
    "category": "First-order",
    "paper": {
      "title": "signSGD: Compressed Optimisation for Non-Convex Problems",
      "url": "https://arxiv.org/abs/1802.04434",
      "authors": [
        "Jeremy Bernstein",
        "Yu-Xiang Wang",
        "Kamyar Azizzadenesheli",
        "Anima Anandkumar"
      ]
    },
    "advantages": [
      "Compressed gradients (1-bit)",
      "Efficient communication",
      "SGD-level convergence rate"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-4 to 1e-1",
        "description": "Learning rate"
      },
      "momentum": {
        "default": 0.9,
        "range": "0.0 to 1.0",
        "description": "Momentum factor (optional)"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 75,
    "tags": [
      "Compressed",
      "Sign-based",
      "Communication Efficient"
    ],
    "githubUrl": "https://github.com/jxbz/signSGD",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\text{momentum } \\beta \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f(\\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow \\beta m_{t-1} + (1-\\beta) g_t \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\cdot \\text{sign}(m_t) \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "adashift",
    "name": "AdaShift",
    "fullName": "AdaShift: Decorrelation and Convergence of Adaptive Learning Rate Methods",
    "description": "Decouples the calculation of adaptive learning rates from the current gradient to address correlation issues in Adam.",
    "year": 2018,
    "month": "October",
    "category": "First-order",
    "paper": {
      "title": "AdaShift: Decorrelation and Convergence of Adaptive Learning Rate Methods",
      "url": "https://arxiv.org/abs/1810.00143",
      "authors": [
        "Zhiming Zhou",
        "Qingru Zhang",
        "Guansong Lu",
        "Hongwei Wang",
        "Weinan Zhang",
        "Yong Yu"
      ]
    },
    "advantages": [
      "Addresses correlation issue in Adam",
      "Improved convergence",
      "Adaptive learning rates"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "n": {
        "default": 10,
        "range": "1 to 20",
        "description": "Shift size"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 70,
    "tags": [
      "Adaptive",
      "Decorrelation",
      "Adam Variant"
    ],
    "githubUrl": "https://github.com/QingruZhang/AdaShift_Release",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta \\\\\n        &\\textbf{Initialize:} \\theta_0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f(\\theta_{t-1}) \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\cdot \\text{sgn}(g_t) \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "lomo",
    "name": "LOMO",
    "fullName": "LOw-Memory Optimization",
    "description": "Fuses gradient computation and parameter update in one step to reduce memory usage, enabling full parameter fine-tuning of LLMs on limited resources.",
    "year": 2023,
    "month": "June",
    "category": "First-order",
    "paper": {
      "title": "Full Parameter Fine-tuning for Large Language Models with Limited Resources",
      "url": "https://arxiv.org/abs/2306.09782",
      "authors": [
        "Kai Lv",
        "Hang Yan",
        "Qipeng Guo",
        "Haijun Lv",
        "Xipeng Qiu"
      ]
    },
    "advantages": [
      "Extremely low memory usage",
      "Enables full fine-tuning of LLMs",
      "Fused gradient update"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 85,
    "tags": [
      "Low Memory",
      "LLM Fine-tuning",
      "SGD-based"
    ],
    "githubUrl": "https://github.com/OpenLMLab/LOMO",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta \\\\\n        &\\textbf{Initialize:} \\theta_0 \\\\\n        &\\textbf{for } i=1 \\text{ to } L \\text{ (layers) do} \\\\\n        &\\quad g_i \\leftarrow \\nabla_{\\theta_i} f(\\theta) \\\\\n        &\\quad \\theta_i \\leftarrow \\theta_i - \\eta g_i \\\\\n        &\\quad \\text{Free } g_i \\text{ immediately to save memory} \\\\\n        &\\textbf{end for} \\\\\n        &\\text{(Full-Parameter Fine-Tuning with O(1) Memory)} \\\\\n    \\end{aligned}"
  },
  {
    "id": "dowg",
    "name": "DoWG",
    "fullName": "Distance over Weighted Gradients",
    "description": "Parameter-free gradient descent method that adapts to the distance to the optimum over weighted gradients.",
    "year": 2023,
    "month": "May",
    "category": "First-order",
    "paper": {
      "title": "DoWG Unleashed: An Efficient Universal Parameter-Free Gradient Descent Method",
      "url": "https://arxiv.org/abs/2305.16284",
      "authors": [
        "Aaron Defazio",
        "Konstantin Mishchenko"
      ]
    },
    "advantages": [
      "Parameter-free",
      "No learning rate tuning",
      "Efficient and universal"
    ],
    "hyperparameters": {
      "epsilon": {
        "default": 1e-08,
        "range": "1e-10 to 1e-6",
        "description": "Small constant for stability"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 80,
    "tags": [
      "Parameter-free",
      "Adaptive",
      "Universal"
    ],
    "githubUrl": "https://github.com/rka97/dowg",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\epsilon \\\\\n        &\\textbf{Initialize:} x_0, r_0 \\leftarrow \\epsilon, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f(x_{t-1}) \\\\\n        &\\quad r_t \\leftarrow \\max(r_{t-1}, \\|g_t\\|) \\\\\n        &\\quad v_t \\leftarrow v_{t-1} + g_t^2 \\\\\n        &\\quad x_t \\leftarrow x_{t-1} - \\frac{r_t^2}{\\sqrt{v_t}} g_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "schedule_free_adamw",
    "name": "Schedule-Free AdamW",
    "fullName": "Schedule-Free Optimization (AdamW)",
    "description": "Replaces the learning rate schedule with a novel iterate averaging scheme. Requires no stopping time T and no additional hyperparameters.",
    "year": 2024,
    "month": "May",
    "category": "First-order",
    "paper": {
      "title": "The Road Less Scheduled",
      "url": "https://arxiv.org/abs/2405.15682",
      "authors": [
        "Aaron Defazio",
        "Xingyu Alice Yang",
        "Harsh Mehta",
        "Konstantin Mishchenko",
        "Ahmed Khaled",
        "Ashok Cutkosky"
      ]
    },
    "advantages": [
      "No learning rate schedule needed",
      "State-of-the-art performance",
      "No extra hyperparameters",
      "Unifies scheduling and averaging"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.01,
        "range": "1x-10x larger than standard",
        "description": "Learning rate (larger than standard)"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.9 to 0.99",
        "description": "Momentum factor (increase for long training)"
      },
      "beta2": {
        "default": 0.999,
        "range": "0.99 to 0.9999",
        "description": "Exponential decay rate for second moment"
      },
      "warmup_steps": {
        "default": 0,
        "range": ">= 0",
        "description": "Number of warmup steps (recommended)"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 85,
    "tags": [
      "Schedule-Free",
      "Iterate Averaging",
      "AdamW"
    ],
    "githubUrl": "https://github.com/facebookresearch/schedule_free",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1, \\beta_2, \\lambda \\\\\n        &\\textbf{Initialize:} \\theta_0, z_0 \\leftarrow \\theta_0, m_0 \\leftarrow 0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad y_t \\leftarrow (1-\\beta_1) z_{t-1} + \\beta_1 \\theta_{t-1} \\\\\n        &\\quad g_t \\leftarrow \\nabla f(y_t) \\\\\n        &\\quad m_t \\leftarrow \\beta_1 m_{t-1} + (1-\\beta_1) g_t \\\\\n        &\\quad v_t \\leftarrow \\beta_2 v_{t-1} + (1-\\beta_2) g_t^2 \\\\\n        &\\quad \\hat{m}_t \\leftarrow m_t / (1-\\beta_1^t), \\hat{v}_t \\leftarrow v_t / (1-\\beta_2^t) \\\\\n        &\\quad z_t \\leftarrow z_{t-1} - \\eta (\\frac{\\hat{m}_t}{\\sqrt{\\hat{v}_t} + \\epsilon} + \\lambda z_{t-1}) \\\\\n        &\\quad \\theta_t \\leftarrow (1-\\frac{1}{t+1})\\theta_{t-1} + \\frac{1}{t+1} z_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "adai",
    "name": "Adai",
    "fullName": "Adaptive Inertia",
    "description": "Disentangles the effects of adaptive learning rate and momentum. Uses adaptive inertia to escape saddle points efficiently while selecting flat minima like SGD.",
    "year": 2022,
    "month": "June",
    "category": "First-order",
    "paper": {
      "title": "Adaptive Inertia: Disentangling the Effects of Adaptive Learning Rate and Momentum",
      "url": "https://arxiv.org/abs/2006.15815",
      "authors": [
        "Zeke Xie",
        "Xinrui Wang",
        "Huishuai Zhang",
        "Issei Sato",
        "Masashi Sugiyama"
      ]
    },
    "advantages": [
      "Fast saddle-point escaping",
      "Selects flat minima for better generalization",
      "Balances adaptive learning rate and momentum",
      "Better generalization than Adam",
      "Faster convergence than SGD"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "beta1": {
        "default": 0.1,
        "range": "0.0 to 0.5",
        "description": "Exponential decay rate for first moment (adaptive inertia)"
      },
      "beta2": {
        "default": 0.99,
        "range": "0.9 to 0.999",
        "description": "Exponential decay rate for second moment estimates"
      },
      "eps": {
        "default": 1e-08,
        "range": "1e-10 to 1e-6",
        "description": "Small constant for numerical stability"
      },
      "weight_decay": {
        "default": 0.0,
        "range": "0.0 to 0.1",
        "description": "Weight decay coefficient"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 78,
    "tags": [
      "Adaptive Inertia",
      "Flat Minima",
      "Generalization",
      "Momentum"
    ],
    "githubUrl": "https://github.com/zeke-xie/adaptive-inertia-adai",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_1 \\\\\n        &\\textbf{Initialize:} \\theta_0, z_0 \\leftarrow \\theta_0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f(\\theta_{t-1}) \\\\\n        &\\quad z_t \\leftarrow \\beta_1 z_{t-1} + (1-\\beta_1) \\theta_{t-1} - \\eta g_t \\\\\n        &\\quad \\theta_t \\leftarrow (1-\\frac{1}{t}) \\theta_{t-1} + \\frac{1}{t} z_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "sso",
    "name": "SSO",
    "fullName": "Spectral Sphere Optimizer",
    "description": "Enforces strict module-wise spectral constraints on both weights and their updates, realizing a fully μP-aligned optimization process through steepest descent on the spectral sphere",
    "year": 2026,
    "month": "January",
    "category": "Second-order",
    "paper": {
      "title": "Controlled LLM Training on Spectral Sphere",
      "url": "https://arxiv.org/pdf/2601.08393v1",
      "authors": [
        "Tian Xie",
        "Haoming Luo",
        "Haoyu Tang",
        "Yiwen Hu",
        "Jason Klein",
        "Liu Qingnan Ren",
        "Yang Wang",
        "Wayne Xin Zhao",
        "Rui Yan",
        "Bing Su",
        "Chong Luo",
        "Baining Guo"
      ]
    },
    "advantages": [
      "Fully μP-aligned optimization",
      "Strict spectral constraints on weights and updates",
      "Improved MoE router load balancing",
      "Suppressed outliers and bounded activations",
      "Better stability than AdamW and Muon"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-4 to 1e-2",
        "description": "Learning rate (scaled by μP LR scaler)"
      },
      "spectral_radius": {
        "default": 1.0,
        "range": "0.5 to 2.0",
        "description": "Target spectral radius R for weight matrices"
      },
      "lambda": {
        "default": 0.01,
        "range": "1e-3 to 0.1",
        "description": "Dynamic retraction coefficient (spectral weight decay)"
      },
      "retraction_type": {
        "default": "dynamic",
        "range": "hard/dynamic",
        "description": "Hard retraction (exact projection) or dynamic retraction (soft spectral decay)"
      }
    },
    "implementation": {
      "pytorch": false,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 75,
    "tags": [
      "Spectral Norm",
      "μP-aligned",
      "Manifold Optimization",
      "Stability"
    ],
    "githubUrl": "https://github.com/Unakar/Spectral-Sphere-Optimizer",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, R, \\lambda \\\\\n        &\\textbf{Initialize:} \\boldsymbol{W}_0 \\text{ with } \\|\\boldsymbol{W}_0\\|_2 = R \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad \\boldsymbol{G}_t \\leftarrow \\nabla_{\\boldsymbol{W}} f(\\boldsymbol{W}_{t-1}) \\\\\n        &\\quad \\text{Solve } h(\\lambda^*) = \\|\\boldsymbol{G}_t + \\lambda^* \\boldsymbol{W}_{t-1}\\|_* - R = 0 \\text{ for } \\lambda^* \\\\\n        &\\quad \\boldsymbol{T}_t \\leftarrow \\text{msign}(\\boldsymbol{G}_t + \\lambda^* \\boldsymbol{W}_{t-1}) \\\\\n        &\\quad \\boldsymbol{W}_t \\leftarrow \\boldsymbol{W}_{t-1} - \\eta \\boldsymbol{T}_t \\\\\n        &\\quad \\sigma_t \\leftarrow \\|\\boldsymbol{W}_t\\|_2 \\text{ (via Power Iteration)} \\\\\n        &\\quad \\boldsymbol{W}_t \\leftarrow \\frac{R}{\\sigma_t} \\boldsymbol{W}_t \\text{ (retraction)} \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "mano",
    "name": "Mano",
    "fullName": "Mano: Restriking Manifold Optimization for LLM Training",
    "description": "Manifold optimization method that projects momentum onto tangent space and constrains it on rotational Oblique manifold",
    "year": 2026,
    "month": "January",
    "category": "Second-order",
    "paper": {
      "title": "Mano: Restriking Manifold Optimization for LLM Training",
      "url": "https://arxiv.org/abs/2601.23000",
      "authors": [
        "Yufei Gu",
        "Zeke Xie"
      ]
    },
    "advantages": [
      "Manifold optimization for LLMs",
      "Projects momentum onto tangent space",
      "Constrains on rotational Oblique manifold",
      "Better performance than AdamW and Muon",
      "Lower memory consumption",
      "Reduced computational complexity"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-4 to 1e-2",
        "description": "Learning rate"
      },
      "wd": {
        "default": 0.1,
        "range": "0.0 to 0.1",
        "description": "Weight decay coefficient"
      },
      "momentum": {
        "default": 0.95,
        "range": "0.9 to 0.99",
        "description": "Momentum coefficient for internal SGD"
      },
      "nesterov": {
        "default": "False",
        "range": "True/False",
        "description": "Use Nesterov-style momentum"
      },
      "adamw_betas": {
        "default": "(0.9, 0.95)",
        "range": "(0.8-0.99, 0.9-0.99)",
        "description": "Betas for internal AdamW optimizer"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 85,
    "tags": [
      "Manifold Optimization",
      "Oblique Manifold",
      "Tangent Space",
      "LLM Training",
      "Second-order"
    ],
    "githubUrl": "https://github.com/xie-lab-ml/Mano-Restriking-Manifold-Optimization-for-LLM-Training",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\mu, \\lambda \\text{ (weight decay)} \\\\\n        &\\textbf{Initialize:} \\theta_0, m_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla f(\\theta_{t-1}) \\\\\n        &\\quad m_t \\leftarrow \\mu m_{t-1} + g_t \\\\\n        &\\quad d \\leftarrow t \\bmod 2 \\text{ (rotating dimension)} \\\\\n        &\\quad \\hat{\\theta} \\leftarrow \\frac{\\theta_{t-1}}{\\|\\theta_{t-1}\\|_2} \\text{ (normalize)} \\\\\n        &\\quad \\boldsymbol{T}_t \\leftarrow m_t - (m_t^T \\hat{\\theta}) \\hat{\\theta} \\text{ (tangent projection)} \\\\\n        &\\quad \\boldsymbol{u}_t \\leftarrow \\frac{\\boldsymbol{T}_t}{\\|\\boldsymbol{T}_t\\|_2} \\text{ (oblique mapping)} \\\\\n        &\\quad \\theta_t \\leftarrow (1 - \\eta \\lambda) \\theta_{t-1} - \\eta \\cdot 0.2 \\sqrt{n_d} \\boldsymbol{u}_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "aro",
    "name": "ARO",
    "fullName": "Adaptively Rotated Optimization",
    "description": "Matrix optimization framework with rotational symmetries for large model training",
    "year": 2026,
    "month": "February",
    "category": "First-order",
    "paper": {
      "title": "ARO: A New Lens On Matrix Optimization For Large Models",
      "url": "https://arxiv.org/abs/2602.09006",
      "authors": [
        "Wenbo Gong",
        "Javier Zazo",
        "Qijun Luo",
        "Puqian Wang",
        "James Hensman",
        "Chao Ma"
      ]
    },
    "advantages": [
      "1.3-1.35× improvement over AdamW in LLM pretraining",
      "Normed steepest descent in rotated coordinate system",
      "Exploits cross-layer and cross-module couplings",
      "Grounded in rotational symmetries of residual streams",
      "Scales to 8B parameters with no diminishing returns"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "rotation_policy": {
        "default": "norm_informed",
        "range": "norm_informed, adaptive",
        "description": "Policy for determining gradient rotation"
      },
      "weight_decay": {
        "default": 0.01,
        "range": "0.0 to 0.1",
        "description": "Weight decay coefficient"
      }
    },
    "implementation": {
      "pytorch": false,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 88,
    "tags": [
      "Matrix Optimization",
      "Rotational Symmetry",
      "Large Models",
      "LLM Training",
      "Gradient Rotation"
    ],
    "githubUrl": "",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta \\text{ (learning rate)}, \\text{rotation policy} \\\\\n        &\\textbf{Initialize:} \\theta_0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad R_t \\leftarrow \\text{RotationMatrix}(g_t, \\text{policy}) \\\\\n        &\\quad \\tilde{g}_t \\leftarrow R_t^T g_t \\text{ (rotate gradient)} \\\\\n        &\\quad d_t \\leftarrow \\frac{\\tilde{g}_t}{\\|\\tilde{g}_t\\|} \\text{ (normed direction)} \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta R_t d_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "swan",
    "name": "SWAN",
    "fullName": "SGD with Whitening And Normalization",
    "description": "Stateless optimizer using SGD with gradient normalization and whitening preprocessing",
    "year": 2024,
    "month": "December",
    "category": "First-order",
    "paper": {
      "title": "SWAN: SGD with Normalization and Whitening Enables Stateless LLM Training",
      "url": "https://arxiv.org/abs/2412.13148",
      "authors": [
        "Chao Ma",
        "Wenbo Gong",
        "Meyer Scetbon",
        "Edward Meeds"
      ]
    },
    "advantages": [
      "~50% memory reduction compared to Adam",
      "Stateless optimizer with no stored state variables",
      "2x speedup in LLaMA training (same perplexity, half tokens)",
      "Normalization stabilizes gradient distributions",
      "Whitening counteracts local curvature effects",
      "Performance comparable or better than Adam"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.01,
        "range": "1e-5 to 1e-1",
        "description": "Learning rate"
      },
      "normalization": {
        "default": "True",
        "range": "True/False",
        "description": "Enable gradient normalization"
      },
      "whitening": {
        "default": "True",
        "range": "True/False",
        "description": "Enable gradient whitening"
      },
      "momentum": {
        "default": 0.9,
        "range": "0.0 to 1.0",
        "description": "Momentum factor for SGD"
      }
    },
    "implementation": {
      "pytorch": false,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 92,
    "tags": [
      "Memory Efficient",
      "Stateless",
      "SGD",
      "Normalization", 
      "Whitening",
      "LLM Training"
    ],
    "githubUrl": "",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta \\text{ (learning rate)}, \\mu \\text{ (momentum)} \\\\\n        &\\textbf{Initialize:} \\theta_0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad \\bar{g}_t \\leftarrow \\frac{g_t}{\\|g_t\\|} \\text{ (normalization)} \\\\\n        &\\quad \\tilde{g}_t \\leftarrow \\text{Whiten}(\\bar{g}_t) \\text{ (whitening)} \\\\\n        &\\quad v_t \\leftarrow \\mu v_{t-1} + \\tilde{g}_t \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta v_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "sinkgd",
    "name": "SinkGD",
    "fullName": "Sinkhorn Gradient Descent",
    "description": "Stateless optimizer using gradient multi-normalization with Sinkhorn alternating projections",
    "year": 2025,
    "month": "February",
    "category": "First-order",
    "paper": {
      "title": "Gradient Multi-Normalization for Stateless and Scalable LLM Training",
      "url": "https://arxiv.org/abs/2502.06742",
      "authors": [
        "Anonymous"
      ]
    },
    "advantages": [
      "3x speedup in effective throughput vs Adam",
      "Stateless optimizer with no memory overhead",
      "More efficient than SWAN's whitening operations",
      "Alternating projection scheme with Sinkhorn normalization",
      "Scalable to large LLM training (1B+ parameters)",
      "Competitive perplexity performance"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.01,
        "range": "1e-5 to 1e-1",
        "description": "Learning rate"
      },
      "multi_norm_weights": {
        "default": "[0.5, 0.3, 0.2]",
        "range": "List of positive weights",
        "description": "Weights for multi-normalization scheme"
      },
      "sinkhorn_iterations": {
        "default": 5,
        "range": "1 to 20",
        "description": "Number of Sinkhorn iterations for alternating projections"
      },
      "momentum": {
        "default": 0.9,
        "range": "0.0 to 1.0",
        "description": "Momentum factor"
      }
    },
    "implementation": {
      "pytorch": false,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 89,
    "tags": [
      "Stateless",
      "Memory Efficient",
      "Multi-Normalization",
      "Sinkhorn",
      "LLM Training",
      "Scalable"
    ],
    "githubUrl": "",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\{w_i\\}_i, K \\text{ (Sinkhorn iters)} \\\\\n        &\\textbf{Initialize:} \\theta_0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad \\text{for } i=1 \\text{ to } n \\text{ do} \\\\\n        &\\quad\\quad \\bar{g}_t^{(i)} \\leftarrow w_i \\frac{g_t}{\\|g_t\\|_i} \\text{ (multi-norm)} \\\\\n        &\\quad \\text{end for} \\\\\n        &\\quad \\tilde{g}_t \\leftarrow \\text{Sinkhorn}(\\{\\bar{g}_t^{(i)}\\}_i, K) \\\\\n        &\\quad v_t \\leftarrow \\mu v_{t-1} + \\tilde{g}_t \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta v_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "normuon",
    "name": "NorMuon",
    "fullName": "Neuron-wise Normalized Muon",
    "description": "Enhanced Muon optimizer combining orthogonalization with neuron-level adaptive learning rates",
    "year": 2025,
    "month": "October",
    "category": "Second-order",
    "paper": {
      "title": "NorMuon: Making Muon more efficient and scalable",
      "url": "https://arxiv.org/abs/2510.05491",
      "authors": [
        "Zichong Li",
        "Liming Liu", 
        "Chen Liang",
        "Weizhu Chen",
        "Tuo Zhao"
      ]
    },
    "advantages": [
      "21.74% better training efficiency than Adam",
      "11.31% improvement over Muon",
      "Combines orthogonalization with adaptive learning rates",
      "Row-wise normalization after orthogonalization",
      "Balanced parameter utilization across neurons",
      "Efficient distributed implementation under FSDP2",
      "Comparable memory footprint to Muon"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Learning rate"
      },
      "beta2": {
        "default": 0.95,
        "range": "0.9 to 0.999",
        "description": "Second-order momentum coefficient for neuron statistics"
      },
      "orthogonal_eps": {
        "default": 1e-8,
        "range": "1e-10 to 1e-6",
        "description": "Epsilon for orthogonalization stability"
      },
      "normalize_neurons": {
        "default": "True",
        "range": "True/False",
        "description": "Enable neuron-wise normalization"
      },
      "weight_decay": {
        "default": 0.01,
        "range": "0.0 to 0.1",
        "description": "Weight decay coefficient"
      }
    },
    "implementation": {
      "pytorch": false,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 91,
    "tags": [
      "Orthogonalization",
      "Adaptive Learning Rate",
      "Neuron-wise Normalization",
      "Distributed Training",
      "LLM Training",
      "Memory Efficient"
    ],
    "githubUrl": "",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\beta_2, \\epsilon \\text{ (orthogonal)} \\\\\n        &\\textbf{Initialize:} \\theta_0, v_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad v_t \\leftarrow \\beta_2 v_{t-1} + (1-\\beta_2) g_t^2 \\text{ (neuron stats)} \\\\\n        &\\quad \\hat{g}_t \\leftarrow \\text{Orthogonalize}(g_t) \\\\\n        &\\quad \\tilde{g}_t \\leftarrow \\text{RowNormalize}(\\hat{g}_t, \\sqrt{v_t}) \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta \\tilde{g}_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "skipupdate",
    "name": "SkipUpdate",
    "fullName": "SkipUpdate (Masked Updates for Adaptive Optimizers)",
    "description": "Randomly masks block updates in adaptive optimizers to induce curvature-dependent geometric regularization",
    "year": 2026,
    "month": "February",
    "category": "First-order",
    "paper": {
      "title": "On Surprising Effectiveness of Masking Updates in Adaptive Optimizers",
      "url": "https://arxiv.org/abs/2602.15322",
      "authors": [
        "Taejong Joo",
        "Wenhan Xia",
        "Cheolmin Kim",
        "Ming Zhang",
        "Eugene Ie"
      ]
    },
    "advantages": [
      "Consistently outperforms dense adaptive optimizers in LLM pre-training",
      "Induces curvature-dependent regularization without explicit curvature computation",
      "Simple drop-in wrapper for adaptive optimizers",
      "Negligible computational overhead"
    ],
    "hyperparameters": {
      "mask_prob": {
        "default": 0.5,
        "range": "0.1 to 0.9",
        "description": "Bernoulli mask probability for skipping block updates"
      }
    },
    "implementation": {
      "pytorch": false,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 82,
    "tags": [
      "Adaptive Optimizers",
      "Gradient Masking",
      "Geometric Regularization",
      "LLM Training",
      "RMSProp Variant",
      "First-order"
    ],
    "githubUrl": "",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, p \\text{ (mask prob)}, \\Delta_t \\text{ (base update)} \\\\\n        &\\textbf{for each block } b \\text{ do} \\\\\n        &\\quad m_t^{(b)} \\sim \\text{Bernoulli}(p) \\\\\n        &\\quad \\theta_{t+1}^{(b)} \\leftarrow \\theta_t^{(b)} - m_t^{(b)} \\Delta_t^{(b)} \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "magma",
    "name": "Magma",
    "fullName": "Momentum-aligned Gradient Masking",
    "description": "Modulates masked updates using momentum–gradient alignment to prioritize consistent directions",
    "year": 2026,
    "month": "February",
    "category": "First-order",
    "paper": {
      "title": "On Surprising Effectiveness of Masking Updates in Adaptive Optimizers",
      "url": "https://arxiv.org/abs/2602.15322",
      "authors": [
        "Taejong Joo",
        "Wenhan Xia",
        "Cheolmin Kim",
        "Ming Zhang",
        "Eugene Ie"
      ]
    },
    "advantages": [
      "Consistent gains over adaptive optimizers and SkipUpdate",
      "Drop-in replacement with negligible computational overhead",
      "Improves with model scale in LLM pre-training",
      "Suppresses momentum-inconsistent updates"
    ],
    "hyperparameters": {
      "mask_prob": {
        "default": 0.5,
        "range": "0.1 to 0.9",
        "description": "Bernoulli mask probability for updates"
      },
      "tau": {
        "default": 1.0,
        "range": "0.1 to 5.0",
        "description": "Temperature for cosine-similarity sigmoid"
      },
      "alignment_momentum": {
        "default": 0.9,
        "range": "0.5 to 0.99",
        "description": "EMA coefficient for alignment score"
      }
    },
    "implementation": {
      "pytorch": false,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 84,
    "tags": [
      "Adaptive Optimizers",
      "Gradient Masking",
      "Momentum Alignment",
      "LLM Training",
      "RMSProp Variant",
      "First-order"
    ],
    "githubUrl": "",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, p, \\tau \\\\\n        &\\textbf{for each block } b \\text{ do} \\\\\n        &\\quad \\tilde{s}_t^{(b)} \\leftarrow \\sigma\\left(\\frac{\\cos(\\mu_t^{(b)}, g_t^{(b)})}{\\tau}\\right) \\\\\n        &\\quad s_t^{(b)} \\leftarrow \\alpha s_{t-1}^{(b)} + (1-\\alpha) \\tilde{s}_t^{(b)} \\\\\n        &\\quad m_t^{(b)} \\sim \\text{Bernoulli}(p) \\\\\n        &\\quad \\theta_{t+1}^{(b)} \\leftarrow \\theta_t^{(b)} - s_t^{(b)} m_t^{(b)} \\Delta_t^{(b)} \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "muon_plus",
    "name": "Muon+",
    "fullName": "Muon+ (Muon with Post-Orthogonalization Normalization)",
    "description": "Enhances Muon by adding a normalization step after orthogonalization, improving optimization stability and final model quality across architectures and training regimes",
    "year": 2026,
    "month": "February",
    "category": "Second-order",
    "paper": {
      "title": "Muon+: Towards Better Muon via One Additional Normalization Step",
      "url": "https://arxiv.org/abs/2602.21545",
      "authors": [
        "Ruijie Zhang",
        "Yequan Zhao",
        "Ziyue Liu",
        "Zhengyang Wang",
        "Zheng Zhang"
      ]
    },
    "advantages": [
      "Consistent improvement over Muon across all model scales and architectures",
      "Reduces learning rate sensitivity; stable over a broader LR range",
      "Effective in both compute-optimal and long-horizon overtraining regimes",
      "Compatible with any polar/orthogonalization method (Jordan, You, PolarExpress)",
      "Simple one-line addition on top of Muon"
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
        "description": "Momentum coefficient (mu)"
      },
      "norm_direction": {
        "default": "col_row",
        "range": "col / row / col_row / row_col",
        "description": "Direction for post-orthogonalization normalization; col_row and row_col typically perform best"
      },
      "eps": {
        "default": 1e-8,
        "range": "1e-10 to 1e-6",
        "description": "Epsilon for numerical stability in normalization denominator"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 78,
    "tags": [
      "Orthogonal Updates",
      "Newton-Schulz",
      "Post-Orthogonalization Normalization",
      "Second-order",
      "LLM Training",
      "Muon Variant"
    ],
    "githubUrl": "https://github.com/K1seki221/MuonPlus",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\mu, d \\in \\{\\text{col, row, col\\_row, row\\_col}\\}, \\epsilon \\\\\n        &\\textbf{Initialize:} W_0,\\; M_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad G_t \\leftarrow \\nabla_W f_t(W_{t-1}) \\\\\n        &\\quad M_t \\leftarrow \\mu M_{t-1} + (1-\\mu) G_t \\\\\n        &\\quad U_t \\leftarrow \\operatorname{Ortho}(M_t) \\quad\\text{(Newton-Schulz)} \\\\\n        &\\quad O_t \\leftarrow \\operatorname{Norm}_{(d)}(U_t) \\quad\\text{(col/row } \\ell_2 \\text{ normalization)} \\\\\n        &\\quad W_t \\leftarrow W_{t-1} - \\eta \\sqrt{m/n}\\; O_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "moga",
    "name": "MOGA",
    "fullName": "MOGA: Matrix Operator Geometry Aware",
    "description": "A width-aware optimizer built on row and column normalization that enables stable learning-rate transfer across model widths",
    "year": 2026,
    "month": "March",
    "category": "First-order",
    "paper": {
      "title": "On the Width Scaling of Neural Optimizers Under Matrix Operator Norms I: Row/Column Normalization and Hyperparameter Transfer",
      "url": "https://arxiv.org/abs/2603.09952",
      "authors": [
        "Ruihan Xu",
        "Jiajin Li",
        "Yiping Lu"
      ]
    },
    "advantages": [
      "Uses only row and column normalization while remaining competitive with Muon",
      "Provides width-independent smoothness guarantees under mean-normalized operator norms",
      "Supports principled cross-width learning-rate transfer and recovers muP-style scaling rules",
      "Notably faster than Muon in large-token and low-loss training regimes"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-2",
        "description": "Base learning rate before width-aware scaling"
      },
      "normalization": {
        "default": "row",
        "range": "row / column / row_column",
        "description": "Normalization geometry applied to matrix updates"
      },
      "scaling_rule": {
        "default": "muP-compatible",
        "range": "width-aware",
        "description": "Rule used to transfer the learning rate across model widths"
      },
      "eps": {
        "default": 1e-8,
        "range": "1e-10 to 1e-6",
        "description": "Numerical stabilizer for normalization"
      }
    },
    "implementation": {
      "pytorch": false,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 80,
    "tags": [
      "Width-aware",
      "Row Normalization",
      "Column Normalization",
      "Hyperparameter Transfer",
      "LLM Training",
      "First-order"
    ],
    "githubUrl": "",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta_0, \\epsilon, \\mathcal{N} \\in \\{\\text{row, column, row\\_column}\\} \\\\\n        &\\textbf{Initialize:} W_0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad G_t \\leftarrow \\nabla_W f_t(W_{t-1}) \\\\\n        &\\quad \\widetilde{G}_t \\leftarrow \\operatorname{Normalize}_{\\mathcal{N}}(G_t; \\epsilon) \\\\\n        &\\quad \\eta_t \\leftarrow \\operatorname{WidthScale}(\\eta_0, W_{t-1}) \\\\\n        &\\quad W_t \\leftarrow W_{t-1} - \\eta_t \\, \\widetilde{G}_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "rmnp",
    "name": "RMNP",
    "fullName": "RMNP: Row-Momentum Normalized Preconditioning",
    "description": "A scalable matrix-based optimizer that replaces Muon's Newton-Schulz orthogonalization with simple row-wise momentum normalization",
    "year": 2026,
    "month": "March",
    "category": "Second-order",
    "paper": {
      "title": "RMNP: Row-Momentum Normalized Preconditioning for Scalable Matrix-Based Optimization",
      "url": "https://arxiv.org/abs/2603.20527",
      "authors": [
        "Shenyang Deng",
        "Zhuoli Ouyang",
        "Tianyu Pang",
        "Zihang Liu",
        "Ruochen Jin",
        "Shuhua Yu",
        "Yaoqing Yang"
      ]
    },
    "advantages": [
      "Cuts per-step preconditioning complexity from O(mn min(m,n)) to O(mn)",
      "Maintains competitive optimization performance relative to Muon in LLM pretraining",
      "Motivated by the diagonal block structure of Transformer layerwise Hessians",
      "Comes with non-convex convergence guarantees matching recent Muon-style results"
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
      "eps": {
        "default": 1e-8,
        "range": "1e-10 to 1e-6",
        "description": "Stabilizer for row-wise normalization"
      },
      "weight_decay": {
        "default": 0.01,
        "range": "0.0 to 0.1",
        "description": "Weight decay coefficient"
      }
    },
    "implementation": {
      "pytorch": false,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 81,
    "tags": [
      "Muon Variant",
      "Row Normalization",
      "Preconditioning",
      "LLM Training",
      "Scalable",
      "Second-order"
    ],
    "githubUrl": "",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\mu, \\epsilon \\\\\n        &\\textbf{Initialize:} W_0,\\; M_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad G_t \\leftarrow \\nabla_W f_t(W_{t-1}) \\\\\n        &\\quad M_t \\leftarrow \\mu M_{t-1} + (1-\\mu) G_t \\\\\n        &\\quad R_t \\leftarrow \\operatorname{RowNormalize}(M_t; \\epsilon) \\\\\n        &\\quad W_t \\leftarrow W_{t-1} - \\eta \\, R_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "muoneq",
    "name": "MuonEq",
    "fullName": "MuonEq: Balancing Before Orthogonalization with Lightweight Equilibration",
    "description": "A lightweight Muon variant that rebalances the momentum matrix before Newton-Schulz orthogonalization using row and column norm statistics",
    "year": 2026,
    "month": "March",
    "category": "Second-order",
    "paper": {
      "title": "MuonEq: Balancing Before Orthogonalization with Lightweight Equilibration",
      "url": "https://arxiv.org/abs/2603.28254",
      "authors": [
        "Da Chang",
        "Qiankun Shi",
        "Lvgang Zhang",
        "Yu Li",
        "Ruijie Zhang",
        "Yao Lu",
        "Yongxiang Liu",
        "Ganzhao Yuan"
      ]
    },
    "advantages": [
      "Balances Muon updates before orthogonalization with only O(m+n) auxiliary state",
      "Row-normalized variant is the natural default for hidden matrix weights",
      "Improves convergence and validation perplexity over Muon on LLaMA2 pretraining",
      "Removes marginal scale mismatch without heavier whitening preconditioners",
      "Preserves Muon-type stationarity guarantees"
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
      "variant": {
        "default": "R",
        "range": "R / C / RC",
        "description": "Row, column, or two-sided row-column equilibration before orthogonalization"
      },
      "eps": {
        "default": 1e-8,
        "range": "1e-10 to 1e-6",
        "description": "Numerical stabilizer for row and column norm normalization"
      }
    },
    "implementation": {
      "pytorch": false,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 79,
    "tags": [
      "Muon Variant",
      "Equilibration",
      "Pre-Orthogonalization",
      "Newton-Schulz",
      "LLM Training",
      "Second-order"
    ],
    "githubUrl": "",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\mu, v \\in \\{\\text{R, C, RC}\\}, \\epsilon \\\\\n        &\\textbf{Initialize:} W_0,\\; M_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad G_t \\leftarrow \\nabla_W f_t(W_{t-1}) \\\\\n        &\\quad M_t \\leftarrow \\mu M_{t-1} + (1-\\mu) G_t \\\\\n        &\\quad E_t \\leftarrow \\operatorname{Equilibrate}(M_t; v, \\epsilon) \\quad\\text{(row/col norm balancing)} \\\\\n        &\\quad U_t \\leftarrow \\operatorname{Ortho}(E_t) \\quad\\text{(finite-step Newton-Schulz)} \\\\\n        &\\quad W_t \\leftarrow W_{t-1} - \\eta\\, U_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "hyperp",
    "name": "HyperP",
    "fullName": "HyperP (Hypersphere Parameterization)",
    "description": "A transferable hypersphere optimization framework for Muon that constrains weights to a Frobenius sphere and enables stable learning-rate transfer across scale",
    "year": 2026,
    "month": "March",
    "category": "Second-order",
    "paper": {
      "title": "Rethinking Language Model Scaling under Transferable Hypersphere Optimization",
      "url": "https://arxiv.org/abs/2603.28743",
      "authors": [
        "Liliang Ren",
        "Yang Liu",
        "Yelong Shen",
        "Weizhu Chen"
      ]
    },
    "advantages": [
      "Transfers a single base learning rate across width, depth, token budget, and MoE granularity",
      "Delivers 1.58x compute efficiency over a strong Muon baseline at large scale",
      "Keeps instability indicators bounded and non-increasing under FLOPs scaling",
      "Shows weight decay is a first-order no-op on the Frobenius sphere",
      "Introduces SqrtGate for improved MoE granularity scaling"
    ],
    "hyperparameters": {
      "base_lr": {
        "default": 0.001,
        "range": "1e-4 to 1e-2",
        "description": "Base learning rate transferred across scales under HyperP"
      },
      "sphere_radius": {
        "default": 1.0,
        "range": "Positive scalar",
        "description": "Target Frobenius-sphere radius for constrained weight matrices"
      },
      "optimizer": {
        "default": "Muon",
        "range": "Muon",
        "description": "Underlying optimizer used with hypersphere parameterization"
      },
      "scaling_rule": {
        "default": "Depth-μP",
        "range": "Depth-μP",
        "description": "Scaling rule retained under HyperP for width/depth transfer"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 77,
    "tags": [
      "Hypersphere Constraint",
      "Hyperparameter Transfer",
      "Muon",
      "Scaling Laws",
      "MoE",
      "Second-order"
    ],
    "githubUrl": "https://github.com/microsoft/ArchScale",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\mu, R \\\\\n        &\\textbf{Initialize:} W_0 \\text{ on the Frobenius sphere},\\; M_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad G_t \\leftarrow \\nabla_W f_t(W_{t-1}) \\\\\n        &\\quad G_t^{\\top} \\leftarrow G_t - \\frac{\\langle G_t, W_{t-1} \\rangle}{\\|W_{t-1}\\|_F^2} W_{t-1} \\quad\\text{(tangent projection)} \\\\\n        &\\quad M_t \\leftarrow \\mu M_{t-1} + G_t^{\\top} \\\\\n        &\\quad U_t \\leftarrow \\operatorname{Muon}(M_t) \\\\\n        &\\quad \\widetilde{W}_t \\leftarrow W_{t-1} - \\eta U_t \\\\\n        &\\quad W_t \\leftarrow R \\cdot \\widetilde{W}_t / \\|\\widetilde{W}_t\\|_F \\quad\\text{(sphere retraction)} \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "nexus",
    "name": "Nexus",
    "fullName": "Nexus Optimizer",
    "description": "An optimizer that maximizes gradient similarity across pretraining data sources to encourage common minima and better downstream generalization",
    "year": 2026,
    "month": "April",
    "category": "First-order",
    "paper": {
      "title": "Nexus: Same Pretraining Loss, Better Downstream Generalization via Common Minima",
      "url": "https://arxiv.org/abs/2604.09258",
      "authors": [
        "Huanran Chen",
        "Huaqing Zhang",
        "Xiao Li",
        "Yinpeng Dong",
        "Ke Shen",
        "Jun Zhu"
      ]
    },
    "advantages": [
      "Improves downstream performance without improving pretraining loss",
      "Encourages task-specific minima to stay geometrically close during pretraining",
      "Reduces out-of-distribution loss and improves complex reasoning benchmarks",
      "Highlights optimizer implicit bias beyond scalar pretraining-loss comparisons"
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
        "description": "First-moment coefficient"
      },
      "beta2": {
        "default": 0.95,
        "range": "0.9 to 0.999",
        "description": "Second-moment coefficient"
      },
      "similarity_weight": {
        "default": 1.0,
        "range": "0.1 to 10.0",
        "description": "Weight on the gradient-similarity regularization signal"
      }
    },
    "implementation": {
      "pytorch": false,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 84,
    "tags": [
      "Gradient Similarity",
      "Generalization",
      "LLM Pretraining",
      "Common Minima",
      "Multi-source Training",
      "First-order"
    ],
    "githubUrl": "",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\alpha, K, \\operatorname{Opt}_{\\mathrm{outer}} \\\\\n        &\\textbf{Initialize:} W^{\\mathrm{main}} \\leftarrow W_0,\\; W^{\\mathrm{inner}} \\leftarrow W_0 \\\\\n        &\\textbf{for each mini-batch } B_t \\textbf{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_W \\mathcal{L}(B_t; W^{\\mathrm{inner}}) \\\\\n        &\\quad W^{\\mathrm{inner}} \\leftarrow W^{\\mathrm{inner}} - \\alpha \\, \\frac{g_t}{\\|g_t\\|_2 + \\epsilon} \\quad\\text{(NSGD inner step)} \\\\\n        &\\quad \\textbf{if } t \\bmod K = 0 \\textbf{ then} \\\\\n        &\\quad\\quad \\Delta_t \\leftarrow W^{\\mathrm{main}} - W^{\\mathrm{inner}} \\quad\\text{(Nexus pseudo-gradient)} \\\\\n        &\\quad\\quad W^{\\mathrm{main}} \\leftarrow \\operatorname{Opt}_{\\mathrm{outer}}\\!\\left(W^{\\mathrm{main}}, \\Delta_t\\right) \\\\\n        &\\quad\\quad W^{\\mathrm{inner}} \\leftarrow W^{\\mathrm{main}} \\quad\\text{(re-synchronize inner model)} \\\\\n        &\\quad \\textbf{end if} \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "muon2",
    "name": "Muon^2",
    "fullName": "Muon^2: Adaptive Second-Moment Preconditioned Muon",
    "description": "An extension of Muon that applies Adam-style second-moment preconditioning before orthogonalization to reduce Newton-Schulz iterations",
    "year": 2026,
    "month": "April",
    "category": "Second-order",
    "paper": {
      "title": "Muon^2: Boosting Muon via Adaptive Second-Moment Preconditioning",
      "url": "https://arxiv.org/abs/2604.09967",
      "authors": [
        "Ziyue Liu",
        "Ruijie Zhang",
        "Zhengyang Wang",
        "Yequan Zhao",
        "Yupeng Su",
        "Zi Yang",
        "Zheng Zhang"
      ]
    },
    "advantages": [
      "Improves Muon's orthogonalization quality through adaptive second-moment preconditioning",
      "Consistently outperforms Muon and recent Muon variants from 60M to 1.3B models",
      "Reduces Newton-Schulz iterations by 40 percent in reported experiments",
      "Includes a factorized memory-efficient variant with most of the gains preserved"
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
      "beta2": {
        "default": 0.95,
        "range": "0.9 to 0.999",
        "description": "Second-moment coefficient for adaptive preconditioning"
      },
      "ns_steps": {
        "default": 3,
        "range": "1 to 5",
        "description": "Number of Newton-Schulz iterations after preconditioning"
      }
    },
    "implementation": {
      "pytorch": false,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 86,
    "tags": [
      "Muon Variant",
      "Adaptive Preconditioning",
      "Newton-Schulz",
      "LLM Training",
      "Matrix Optimization",
      "Second-order"
    ],
    "githubUrl": "",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\mu, \\beta_2, K, \\epsilon \\\\\n        &\\textbf{Initialize:} W_0,\\; M_0 \\leftarrow 0,\\; V_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad G_t \\leftarrow \\nabla_W f_t(W_{t-1}) \\\\\n        &\\quad M_t \\leftarrow \\mu M_{t-1} + (1-\\mu) G_t \\\\\n        &\\quad V_t \\leftarrow \\beta_2 V_{t-1} + (1-\\beta_2) (M_t \\odot M_t) \\\\\n        &\\quad P_t \\leftarrow M_t \\oslash (\\sqrt{V_t} + \\epsilon) \\\\\n        &\\quad U_t \\leftarrow \\operatorname{Ortho}_K(P_t) \\quad\\text{(Newton-Schulz)} \\\\\n        &\\quad W_t \\leftarrow W_{t-1} - \\eta \\, U_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "gram_newton_schulz",
    "name": "Gram Newton-Schulz",
    "fullName": "Gram Newton-Schulz (GramMuon)",
    "description": "A hardware-aware Muon acceleration that performs Newton-Schulz iterations on the Gram matrix to cut orthogonalization cost while preserving training quality",
    "year": 2026,
    "month": "March",
    "category": "Second-order",
    "paper": {
      "title": "Gram Newton-Schulz: A Fast, Hardware-Aware Newton-Schulz Algorithm for Muon",
      "url": "https://dao-lab.ai/blog/2026/gram-newton-schulz/",
      "authors": [
        "Dao AI Lab"
      ]
    },
    "advantages": [
      "Reduces Muon orthogonalization runtime by roughly 40-50% in reported experiments",
      "Preserves optimization quality within 0.01 validation perplexity of standard Muon",
      "Shifts most computation to smaller symmetric Gram-matrix operations",
      "Enables greater use of optimized symmetric GEMM kernels",
      "Provides a drop-in replacement path for standard Muon orthogonalization"
    ],
    "hyperparameters": {
      "ns_steps": {
        "default": 5,
        "range": "3 to 7",
        "description": "Number of Newton-Schulz polynomial iterations"
      },
      "restart_after": {
        "default": 2,
        "range": "1 to 4",
        "description": "Iteration after which the stabilized variant reconstructs the Gram matrix"
      },
      "eps": {
        "default": 1e-7,
        "range": "1e-8 to 1e-6",
        "description": "Normalization epsilon before half-precision Gram iterations"
      },
      "precision": {
        "default": "float16",
        "range": "float16 / bfloat16",
        "description": "Reduced precision used for the accelerated orthogonalization routine"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 74,
    "tags": [
      "Muon Variant",
      "Gram Matrix",
      "Newton-Schulz",
      "Hardware-aware",
      "Orthogonal Updates",
      "Second-order"
    ],
    "githubUrl": "",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} X, \\{(a_t, b_t, c_t)\\}_{t=1}^T, \\epsilon \\\\\n        &\\quad X \\leftarrow X / (\\|X\\|_F + \\epsilon) \\\\\n        &\\quad R_0 \\leftarrow XX^{\\top},\\; Q_0 \\leftarrow I \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad Z_t \\leftarrow b_t R_{t-1} + c_t R_{t-1}^2 \\\\\n        &\\quad Q_t \\leftarrow a_t Q_{t-1} + Z_t Q_{t-1} \\\\\n        &\\quad R_t \\leftarrow a_t R_{t-1} + Z_t R_{t-1} Z_t \\\\\n        &\\quad \\text{if } t = t_{\\mathrm{restart}} \\text{ then reconstruct Gram state} \\\\\n        &\\textbf{end for} \\\\\n        &\\quad \\operatorname{GramNS}(X) \\leftarrow Q_T X\n    \\end{aligned}"
  },
  {
    "id": "stosignsgd",
    "name": "StoSignSGD",
    "fullName": "Stochastic SignSGD with Unbiased Structural Stochasticity",
    "description": "Sign-based optimizer that injects unbiased structural stochasticity into the sign operator for stable LLM training",
    "year": 2026,
    "month": "April",
    "category": "First-order",
    "paper": {
      "title": "StoSignSGD: Unbiased Structural Stochasticity Fixes SignSGD for Training Large Language Models",
      "url": "https://arxiv.org/abs/2604.15416",
      "authors": [
        "Dingzhi Yu",
        "Rui Pan",
        "Yuxing Liu",
        "Tong Zhang"
      ]
    },
    "advantages": [
      "Fixes SignSGD non-convergence issues on non-smooth objectives through unbiased structural stochasticity",
      "Matches sharp lower-bound convergence rates in online convex optimization",
      "Improves non-convex non-smooth complexity bounds by dimensional factors",
      "Stable in low-precision FP8 LLM pretraining where AdamW can fail",
      "Improves fine-tuning performance on 7B mathematical reasoning tasks"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.001,
        "range": "1e-5 to 1e-1",
        "description": "Learning rate"
      },
      "stochasticity": {
        "default": "structural",
        "range": "structural / converted sign",
        "description": "Unbiased stochastic sign conversion strategy"
      },
      "eps": {
        "default": 1e-8,
        "range": "1e-10 to 1e-6",
        "description": "Numerical stabilizer for sign conversion"
      }
    },
    "implementation": {
      "pytorch": false,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 86,
    "tags": [
      "Sign-based",
      "Structural Stochasticity",
      "Unbiased Updates",
      "LLM Training",
      "FP8",
      "First-order"
    ],
    "githubUrl": "",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\epsilon, \\mathcal{S}_{\\mathrm{sto}} \\text{ (unbiased stochastic sign map)} \\\\\n        &\\textbf{Initialize:} \\theta_0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad g_t \\leftarrow \\nabla_{\\theta} f_t(\\theta_{t-1}) \\\\\n        &\\quad u_t \\leftarrow \\mathcal{S}_{\\mathrm{sto}}(g_t; \\epsilon) \\quad\\text{with } \\mathbb{E}[u_t\\mid g_t] = g_t \\\\\n        &\\quad \\theta_t \\leftarrow \\theta_{t-1} - \\eta\\, u_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "nora",
    "name": "Nora",
    "fullName": "Normalized Orthogonal Row Alignment",
    "description": "A scalable matrix optimizer that stabilizes weight norms and angular velocities with row-wise orthogonal momentum projection",
    "year": 2026,
    "month": "May",
    "category": "Second-order",
    "paper": {
      "title": "Nora: Normalized Orthogonal Row Alignment for Scalable Matrix Optimizer",
      "url": "https://arxiv.org/abs/2605.03769",
      "authors": [
        "Jinghui Yuan",
        "Jiaxuan Zou",
        "Shuo Wang",
        "Yong Liu",
        "Feiping Nie"
      ]
    },
    "advantages": [
      "Unifies Muon-like preconditioning, scale-invariant stability, and low computational overhead",
      "Projects row-wise momentum onto the orthogonal complement of the weights",
      "Maintains optimal O(mn) matrix-update complexity",
      "Leverages Transformer Hessian block-diagonal dominance for structured preconditioning",
      "Provides scaling theorems for large-scale training"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.02,
        "range": "1e-4 to 1e-1",
        "description": "Learning rate for matrix blocks"
      },
      "momentum": {
        "default": 0.95,
        "range": "0.9 to 0.99",
        "description": "Momentum coefficient"
      },
      "eps": {
        "default": 1e-8,
        "range": "1e-10 to 1e-6",
        "description": "Numerical stabilizer for row norms"
      },
      "weight_decay": {
        "default": 0.01,
        "range": "0.0 to 0.1",
        "description": "Weight decay coefficient"
      }
    },
    "implementation": {
      "pytorch": false,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 87,
    "tags": [
      "Matrix Optimizer",
      "Row Alignment",
      "Scale-invariant",
      "LLM Training",
      "Scalable",
      "Second-order"
    ],
    "githubUrl": "",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\mu, \\epsilon \\\\\n        &\\textbf{Initialize:} W_0,\\; M_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad G_t \\leftarrow \\nabla_W f_t(W_{t-1}) \\\\\n        &\\quad M_t \\leftarrow \\mu M_{t-1} + (1-\\mu)G_t \\\\\n        &\\quad C_t \\leftarrow \\frac{\\langle M_t, W_{t-1}\\rangle_{\\mathrm{row}}}{\\|W_{t-1}\\|_{\\mathrm{row}}^2 + \\epsilon} \\\\\n        &\\quad P_t \\leftarrow M_t - C_t \\odot W_{t-1} \\quad\\text{(row-wise orthogonal projection)} \\\\\n        &\\quad U_t \\leftarrow \\operatorname{RowNormalize}(P_t;\\epsilon) \\\\\n        &\\quad W_t \\leftarrow W_{t-1} - \\eta\\, U_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "pion",
    "name": "Pion",
    "fullName": "sPectral hIgh-pass Optimization on momeNtum",
    "description": "A Muon drop-in replacement that swaps uniform spectral whitening for high-pass Newton-Schulz filtering to keep dominant directions while suppressing noisy tail singular modes",
    "year": 2026,
    "month": "May",
    "category": "Second-order",
    "paper": {
      "title": "Rethinking Muon Beyond Pretraining: Spectral Failures and High-Pass Remedies for VLA and RLVR",
      "url": "https://chongyu-fan.netlify.app/posts/pion/",
      "authors": [
        "Chongyu Fan",
        "Gaowen Liu",
        "Mingyi Hong",
        "Ramana Rao Kompella",
        "Sijia Liu"
      ]
    },
    "advantages": [
      "Drop-in replacement for Muon-style Newton-Schulz orthogonalization",
      "Uses Promotion plus Suppression steps to create a spectral high-pass filter",
      "Anchors dominant singular values near one while suppressing noisy tail components",
      "Supports per-head filtering to preserve attention-head heterogeneity during post-training",
      "Improves VLA training and stabilizes RLVR post-training where Muon can collapse"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.02,
        "range": "1e-4 to 1e-1",
        "description": "Learning rate for matrix-aware updates"
      },
      "momentum": {
        "default": 0.95,
        "range": "0.9 to 0.99",
        "description": "Momentum coefficient for the update matrix"
      },
      "promotion_steps": {
        "default": 1,
        "range": "1 to 3",
        "description": "Number of high-singular-value promotion iterations"
      },
      "suppression_steps": {
        "default": 4,
        "range": "3 to 6",
        "description": "Number of low-singular-value suppression iterations"
      },
      "per_head": {
        "default": "False",
        "range": "True/False",
        "description": "Apply Pion independently to reshaped attention-head blocks"
      }
    },
    "implementation": {
      "pytorch": false,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 90,
    "tags": [
      "Muon Variant",
      "High-pass Filtering",
      "Newton-Schulz",
      "VLA Training",
      "RLVR",
      "Second-order"
    ],
    "githubUrl": "",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\mu, k_p, k_s, \\text{per-head flag} \\\\\n        &\\textbf{Initialize:} W_0,\\; M_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad G_t \\leftarrow \\nabla_W f_t(W_{t-1}) \\\\\n        &\\quad M_t \\leftarrow \\mu M_{t-1} + (1-\\mu)G_t \\\\\n        &\\quad X_t \\leftarrow M_t /(\\|M_t\\|_F + \\epsilon) \\\\\n        &\\quad \\text{if per-head then reshape } X_t \\text{ into head blocks} \\\\\n        &\\quad Y_t \\leftarrow \\operatorname{Promote}_{k_p}(X_t) \\quad\\text{(lift dominant singular modes)} \\\\\n        &\\quad U_t \\leftarrow \\operatorname{Suppress}_{k_s}(Y_t) \\quad\\text{(damp noisy tail modes)} \\\\\n        &\\quad \\text{restore original shape if needed} \\\\\n        &\\quad W_t \\leftarrow W_{t-1} - \\eta\\, U_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  },
  {
    "id": "aurora",
    "name": "Aurora",
    "fullName": "Aurora: A Leverage-Aware Optimizer for Rectangular Matrices",
    "description": "A Muon-family optimizer for rectangular matrices that corrects row-leverage imbalance while preserving semi-orthogonal update structure to mitigate MLP neuron death",
    "year": 2026,
    "month": "May",
    "category": "Second-order",
    "paper": {
      "title": "Aurora: A Leverage-Aware Optimizer for Rectangular Matrices",
      "url": "https://blog.tilderesearch.com/blog/aurora#d-solving-for-the-riemannian-gradient",
      "authors": [
        "Alec Dewulf",
        "Dhruv Pai",
        "Li Yang",
        "Ashley Zhang",
        "Ben Keigwin"
      ]
    },
    "advantages": [
      "Targets row-leverage anisotropy in tall MLP matrices where Muon can leave neurons under-updated",
      "Jointly encourages semi-orthogonality and uniform row update energy",
      "Keeps the polar-update precision that naive row normalization can degrade",
      "Improves reported 1.1B-scale training and modded-nanoGPT optimization results",
      "Open-source release includes practical Aurora and a Riemannian reference solver"
    ],
    "hyperparameters": {
      "lr": {
        "default": 0.02,
        "range": "1e-4 to 1e-1",
        "description": "Learning rate for matrix blocks"
      },
      "momentum": {
        "default": 0.95,
        "range": "0.9 to 0.99",
        "description": "Momentum coefficient for the gradient matrix"
      },
      "mode": {
        "default": "damped",
        "range": "damped / Riemannian",
        "description": "Practical damped iteration or reference Riemannian solver"
      },
      "row_energy_target": {
        "default": "n/m",
        "range": "n/m for tall m x n matrices",
        "description": "Target squared row norm for equal-row-energy updates"
      },
      "projection_steps": {
        "default": 2,
        "range": "1 to 4",
        "description": "Alternating or damped projection steps used to balance row energy"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 92,
    "tags": [
      "Muon Variant",
      "Leverage Scores",
      "Rectangular Matrices",
      "Riemannian Optimization",
      "Neuron Death",
      "Second-order"
    ],
    "githubUrl": "https://github.com/tilde-research/aurora-release",
    "pseudocode": "\\begin{aligned}\n        &\\textbf{Input:} \\eta, \\mu, r=n/m, K \\\\\n        &\\textbf{Initialize:} W_0,\\; M_0 \\leftarrow 0 \\\\\n        &\\textbf{for } t=1 \\text{ to } T \\text{ do} \\\\\n        &\\quad G_t \\leftarrow \\nabla_W f_t(W_{t-1}) \\\\\n        &\\quad M_t \\leftarrow \\mu M_{t-1} + (1-\\mu)G_t \\\\\n        &\\quad O_t \\leftarrow \\operatorname{polar}(M_t) \\quad\\text{(semi-orthogonal Muon direction)} \\\\\n        &\\quad U_t \\leftarrow \\operatorname{AuroraBalance}_K(O_t, r) \\\\\n        &\\quad \\text{s.t. } U_t^{\\top}U_t \\approx I,\\; \\|U_{t,i:}\\|_2^2 \\approx r \\\\\n        &\\quad W_t \\leftarrow W_{t-1} - \\eta\\, U_t \\\\\n        &\\textbf{end for}\n    \\end{aligned}"
  }
];

// Export for use in HTML
if (typeof module !== "undefined" && module.exports) {
  module.exports = { optimizers };
} else {
  window.optimizersData = { optimizers };
}

// Schedulers data for static site
const schedulers = [
  {
    "id": "step_lr",
    "name": "StepLR",
    "fullName": "Step Learning Rate Decay",
    "description": "Decays the learning rate of each parameter group by gamma every step_size epochs.",
    "year": 2010,
    "month": "January",
    "category": "Decay",
    "paper": {
      "title": "Deep Learning",
      "url": "https://www.deeplearningbook.org/",
      "authors": ["Ian Goodfellow", "Yoshua Bengio", "Aaron Courville"]
    },
    "advantages": [
      "Simple and easy to tune",
      "Standard baseline for many tasks",
      "Predictable behavior"
    ],
    "hyperparameters": {
      "step_size": {
        "default": 30,
        "range": "10 to 100",
        "description": "Period of learning rate decay"
      },
      "gamma": {
        "default": 0.1,
        "range": "0.1 to 0.5",
        "description": "Multiplicative factor of learning rate decay"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": true,
      "jax": true
    },
    "popularity": 90,
    "tags": ["Decay", "Step", "Baseline"]
  },
  {
    "id": "multi_step_lr",
    "name": "MultiStepLR",
    "fullName": "Multi-Step Learning Rate Decay",
    "description": "Decays the learning rate of each parameter group by gamma once the number of epoch reaches one of the milestones.",
    "year": 2012,
    "month": "January",
    "category": "Decay",
    "paper": {
      "title": "ImageNet Classification with Deep Convolutional Neural Networks",
      "url": "https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf",
      "authors": ["Alex Krizhevsky", "Ilya Sutskever", "Geoffrey E. Hinton"]
    },
    "advantages": [
      "Flexible decay points",
      "Common in ResNet training",
      "Good for manual schedule design"
    ],
    "hyperparameters": {
      "milestones": {
        "default": "[30, 80]",
        "range": "List of epoch indices",
        "description": "List of epoch indices. Must be increasing."
      },
      "gamma": {
        "default": 0.1,
        "range": "0.1 to 0.5",
        "description": "Multiplicative factor of learning rate decay"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": true,
      "jax": true
    },
    "popularity": 85,
    "tags": ["Decay", "Milestones", "CV"]
  },
  {
    "id": "exponential_lr",
    "name": "ExponentialLR",
    "fullName": "Exponential Learning Rate Decay",
    "description": "Decays the learning rate of each parameter group by gamma every epoch.",
    "year": 2010,
    "month": "January",
    "category": "Decay",
    "paper": {
      "title": "Deep Learning",
      "url": "https://www.deeplearningbook.org/",
      "authors": ["Ian Goodfellow", "Yoshua Bengio", "Aaron Courville"]
    },
    "advantages": [
      "Smooth decay",
      "Continuous adjustment",
      "Simple single parameter"
    ],
    "hyperparameters": {
      "gamma": {
        "default": 0.9,
        "range": "0.8 to 0.99",
        "description": "Multiplicative factor of learning rate decay"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": true,
      "jax": true
    },
    "popularity": 70,
    "tags": ["Decay", "Continuous", "Smooth"]
  },
  {
    "id": "cosine_annealing_lr",
    "name": "CosineAnnealingLR",
    "fullName": "Cosine Annealing Learning Rate",
    "description": "Set the learning rate of each parameter group using a cosine annealing schedule.",
    "year": 2016,
    "month": "August",
    "category": "Cyclic",
    "paper": {
      "title": "SGDR: Stochastic Gradient Descent with Warm Restarts",
      "url": "https://arxiv.org/abs/1608.03983",
      "authors": ["Ilya Loshchilov", "Frank Hutter"]
    },
    "advantages": [
      "Smooth transition",
      "Reaches lower minima",
      "No abrupt drops"
    ],
    "hyperparameters": {
      "T_max": {
        "default": 50,
        "range": "10 to 200",
        "description": "Maximum number of iterations"
      },
      "eta_min": {
        "default": 0,
        "range": "0 to 1e-4",
        "description": "Minimum learning rate"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": true,
      "jax": true
    },
    "popularity": 95,
    "tags": ["Cosine", "Annealing", "Smooth"]
  },
  {
    "id": "reduce_lr_on_plateau",
    "name": "ReduceLROnPlateau",
    "fullName": "Reduce LR On Plateau",
    "description": "Reduce learning rate when a metric has stopped improving.",
    "year": 2011,
    "month": "January",
    "category": "Adaptive",
    "paper": {
      "title": "Efficient BackProp",
      "url": "http://yann.lecun.com/exdb/publis/pdf/lecun-98b.pdf",
      "authors": ["Yann LeCun", "et al."]
    },
    "advantages": [
      "Dynamic adjustment",
      "Responds to training progress",
      "No need to pre-define schedule"
    ],
    "hyperparameters": {
      "factor": {
        "default": 0.1,
        "range": "0.1 to 0.5",
        "description": "Factor by which the learning rate will be reduced"
      },
      "patience": {
        "default": 10,
        "range": "5 to 20",
        "description": "Number of epochs with no improvement"
      },
      "mode": {
        "default": "min",
        "range": "min/max",
        "description": "One of min, max"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": true,
      "jax": false
    },
    "popularity": 92,
    "tags": ["Adaptive", "Dynamic", "Metric-based"]
  },
  {
    "id": "cyclic_lr",
    "name": "CyclicLR",
    "fullName": "Cyclical Learning Rates",
    "description": "Sets the learning rate of each parameter group according to cyclical learning rate policy.",
    "year": 2015,
    "month": "June",
    "category": "Cyclic",
    "paper": {
      "title": "Cyclical Learning Rates for Training Neural Networks",
      "url": "https://arxiv.org/abs/1506.01186",
      "authors": ["Leslie N. Smith"]
    },
    "advantages": [
      "Escapes saddle points",
      "Improved generalization",
      "No need for fine-tuning"
    ],
    "hyperparameters": {
      "base_lr": {
        "default": 0.001,
        "range": "1e-4 to 1e-2",
        "description": "Initial learning rate which is the lower boundary in the cycle"
      },
      "max_lr": {
        "default": 0.006,
        "range": "1e-3 to 1e-1",
        "description": "Upper learning rate boundary in the cycle"
      },
      "step_size_up": {
        "default": 2000,
        "range": "1000 to 5000",
        "description": "Number of training iterations in the increasing half of a cycle"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": true,
      "jax": true
    },
    "popularity": 75,
    "tags": ["Cyclic", "Saddle Points", "Generalization"]
  },
  {
    "id": "one_cycle_lr",
    "name": "OneCycleLR",
    "fullName": "One Cycle Learning Rate",
    "description": "Sets the learning rate of each parameter group according to the 1cycle learning rate policy.",
    "year": 2018,
    "month": "March",
    "category": "Cyclic",
    "paper": {
      "title": "A Discipline of Deep Learning",
      "url": "https://arxiv.org/abs/1803.09820",
      "authors": ["Leslie N. Smith"]
    },
    "advantages": [
      "Super-convergence",
      "Fast training",
      "Regularization effect"
    ],
    "hyperparameters": {
      "max_lr": {
        "default": 0.01,
        "range": "1e-3 to 1e-1",
        "description": "Upper learning rate boundary in the cycle"
      },
      "total_steps": {
        "default": "None",
        "range": "Auto",
        "description": "The total number of steps in the cycle"
      },
      "pct_start": {
        "default": 0.3,
        "range": "0.1 to 0.5",
        "description": "The percentage of the cycle (in number of steps) spent increasing the learning rate"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": true,
      "jax": true
    },
    "popularity": 88,
    "tags": ["Super-convergence", "Fast Training", "One Cycle"]
  },
  {
    "id": "cosine_annealing_warm_restarts",
    "name": "CosineAnnealingWarmRestarts",
    "fullName": "Cosine Annealing with Warm Restarts",
    "description": "Set the learning rate of each parameter group using a cosine annealing schedule with warm restarts.",
    "year": 2016,
    "month": "August",
    "category": "Cyclic",
    "paper": {
      "title": "SGDR: Stochastic Gradient Descent with Warm Restarts",
      "url": "https://arxiv.org/abs/1608.03983",
      "authors": ["Ilya Loshchilov", "Frank Hutter"]
    },
    "advantages": [
      "Escapes local minima",
      "Warm restarts improve exploration",
      "Good for ensembles"
    ],
    "hyperparameters": {
      "T_0": {
        "default": 10,
        "range": "5 to 50",
        "description": "Number of iterations for the first restart"
      },
      "T_mult": {
        "default": 1,
        "range": "1 to 2",
        "description": "A factor increases T_i after a restart"
      },
      "eta_min": {
        "default": 0,
        "range": "0 to 1e-4",
        "description": "Minimum learning rate"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": true,
      "jax": true
    },
    "popularity": 82,
    "tags": ["SGDR", "Warm Restarts", "Ensemble"]
  },
  {
    "id": "linear_lr",
    "name": "LinearLR",
    "fullName": "Linear Learning Rate Decay",
    "description": "Decays the learning rate of each parameter group by linearly changing small multiplicative factor.",
    "year": 2020,
    "month": "January",
    "category": "Decay",
    "paper": {
      "title": "PyTorch Documentation",
      "url": "https://pytorch.org/docs/stable/generated/torch.optim.lr_scheduler.LinearLR.html",
      "authors": ["PyTorch Team"]
    },
    "advantages": [
      "Simple linear interpolation",
      "Good for warmup or cooldown",
      "Deterministic"
    ],
    "hyperparameters": {
      "start_factor": {
        "default": 0.33,
        "range": "0.0 to 1.0",
        "description": "The number we multiply learning rate in the first epoch"
      },
      "end_factor": {
        "default": 1.0,
        "range": "0.0 to 1.0",
        "description": "The number we multiply learning rate at the end of linear changing process"
      },
      "total_iters": {
        "default": 5,
        "range": "1 to 100",
        "description": "The number of iterations that multiplicative factor decays"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": true,
      "jax": true
    },
    "popularity": 60,
    "tags": ["Linear", "Decay", "Interpolation"]
  },
  {
    "id": "polynomial_lr",
    "name": "PolynomialLR",
    "fullName": "Polynomial Learning Rate Decay",
    "description": "Decays the learning rate of each parameter group using a polynomial function.",
    "year": 2015,
    "month": "January",
    "category": "Decay",
    "paper": {
      "title": "ParseNet: Looking Wider to See Better",
      "url": "https://arxiv.org/abs/1506.04579",
      "authors": ["Wei Liu", "Andrew Rabinovich", "Alexander C. Berg"]
    },
    "advantages": [
      "Standard in semantic segmentation",
      "More flexible than linear",
      "Controls decay speed via power"
    ],
    "hyperparameters": {
      "power": {
        "default": 1.0,
        "range": "0.5 to 2.0",
        "description": "The power of the polynomial"
      },
      "total_iters": {
        "default": 5,
        "range": "1 to 100",
        "description": "The number of steps that the scheduler decays the learning rate"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": true,
      "jax": true
    },
    "popularity": 65,
    "tags": ["Polynomial", "Decay", "Segmentation"]
  },
  {
    "id": "constant_lr",
    "name": "ConstantLR",
    "fullName": "Constant Learning Rate",
    "description": "Decays the learning rate of each parameter group by a small constant factor until the number of epoch reaches a pre-defined milestone.",
    "year": 2020,
    "month": "January",
    "category": "Decay",
    "paper": {
      "title": "PyTorch Documentation",
      "url": "https://pytorch.org/docs/stable/generated/torch.optim.lr_scheduler.ConstantLR.html",
      "authors": ["PyTorch Team"]
    },
    "advantages": [
      "Useful for warmup",
      "Simple",
      "Keeps LR constant for a period"
    ],
    "hyperparameters": {
      "factor": {
        "default": 0.33,
        "range": "0.0 to 1.0",
        "description": "The number we multiply learning rate until the milestone"
      },
      "total_iters": {
        "default": 5,
        "range": "1 to 100",
        "description": "The number of steps that the scheduler keeps the learning rate constant"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": true,
      "jax": true
    },
    "popularity": 50,
    "tags": ["Constant", "Warmup", "Simple"]
  },
  {
    "id": "inv_sqrt_lr",
    "name": "InverseSquareRootLR",
    "fullName": "Inverse Square Root Decay",
    "description": "Decays the learning rate based on the inverse square root of the step number. Widely used in Transformer training.",
    "year": 2017,
    "month": "June",
    "category": "Decay",
    "paper": {
      "title": "Attention Is All You Need",
      "url": "https://arxiv.org/abs/1706.03762",
      "authors": ["Ashish Vaswani", "Noam Shazeer", "et al."]
    },
    "advantages": [
      "Standard for Transformers",
      "Handles warmup naturally",
      "Stable for large models"
    ],
    "hyperparameters": {
      "warmup_steps": {
        "default": 4000,
        "range": "1000 to 10000",
        "description": "Number of warmup steps"
      },
      "d_model": {
        "default": 512,
        "range": "128 to 4096",
        "description": "Model dimension size"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": true,
      "jax": true
    },
    "popularity": 92,
    "tags": ["Transformer", "Inverse Sqrt", "NLP"]
  },
  {
    "id": "chained_scheduler",
    "name": "ChainedScheduler",
    "fullName": "Chained Learning Rate Scheduler",
    "description": "Chains list of learning rate schedulers. It allows to chain schedulers that change the learning rate of the optimizer.",
    "year": 2020,
    "month": "January",
    "category": "Composite",
    "paper": {
      "title": "PyTorch Documentation",
      "url": "https://pytorch.org/docs/stable/generated/torch.optim.lr_scheduler.ChainedScheduler.html",
      "authors": ["PyTorch Team"]
    },
    "advantages": [
      "Compose multiple schedulers",
      "Flexible",
      "Complex schedules"
    ],
    "hyperparameters": {
      "schedulers": {
        "default": "[]",
        "range": "List",
        "description": "List of chained schedulers"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": true,
      "jax": false
    },
    "popularity": 40,
    "tags": ["Composite", "Flexible", "Chain"]
  },
  {
    "id": "sequential_lr",
    "name": "SequentialLR",
    "fullName": "Sequential Learning Rate Scheduler",
    "description": "Receives the list of schedulers that is expected to be called sequentially during optimization process and milestone points.",
    "year": 2021,
    "month": "January",
    "category": "Composite",
    "paper": {
      "title": "PyTorch Documentation",
      "url": "https://pytorch.org/docs/stable/generated/torch.optim.lr_scheduler.SequentialLR.html",
      "authors": ["PyTorch Team"]
    },
    "advantages": [
      "Sequence of distinct phases",
      "Good for Warmup + Decay",
      "Clear transitions"
    ],
    "hyperparameters": {
      "schedulers": {
        "default": "[]",
        "range": "List",
        "description": "List of schedulers"
      },
      "milestones": {
        "default": "[]",
        "range": "List",
        "description": "List of integers where we transition"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": true,
      "jax": false
    },
    "popularity": 55,
    "tags": ["Sequential", "Phases", "Warmup+Decay"]
  },
  {
    "id": "lambda_lr",
    "name": "LambdaLR",
    "fullName": "Lambda Learning Rate",
    "description": "Sets the learning rate of each parameter group to the initial lr times a given function.",
    "year": 2016,
    "month": "January",
    "category": "Custom",
    "paper": {
      "title": "PyTorch Documentation",
      "url": "https://pytorch.org/docs/stable/generated/torch.optim.lr_scheduler.LambdaLR.html",
      "authors": ["PyTorch Team"]
    },
    "advantages": [
      "Fully customizable",
      "Arbitrary functions",
      "Maximum flexibility"
    ],
    "hyperparameters": {
      "lr_lambda": {
        "default": "function",
        "range": "function",
        "description": "A function which computes a multiplicative factor given an integer epoch"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": true,
      "jax": true
    },
    "popularity": 60,
    "tags": ["Custom", "Flexible", "Lambda"]
  },
  {
    "id": "schedule_free",
    "name": "Schedule-Free",
    "fullName": "Schedule-Free Optimization",
    "description": "Eschews learning rate schedules entirely in favor of a novel iterate averaging scheme, achieving SOTA performance without the need to specify a stopping step T.",
    "year": 2024,
    "month": "May",
    "category": "Schedule-Free",
    "paper": {
      "title": "The Road Less Scheduled",
      "url": "https://arxiv.org/abs/2405.15682",
      "authors": ["Aaron Defazio", "Xingyu Alice Yang", "Harsh Mehta", "Konstantin Mishchenko", "Ahmed Khaled", "Ashok Cutkosky"]
    },
    "advantages": [
      "No need to specify stopping step T",
      "State-of-the-art performance",
      "No additional hyperparameters over momentum",
      "Unifies scheduling and iterate averaging"
    ],
    "hyperparameters": {
      "lr": {
        "default": "Standard",
        "range": "Standard",
        "description": "Learning rate (standard values work well)"
      },
      "beta1": {
        "default": 0.9,
        "range": "0.9 to 0.99",
        "description": "Momentum parameter"
      }
    },
    "implementation": {
      "pytorch": true,
      "tensorflow": false,
      "jax": false
    },
    "popularity": 85,
    "tags": ["Schedule-Free", "Iterate Averaging", "SOTA"]
  }
];

// Export for use in HTML
if (typeof module !== "undefined" && module.exports) {
  module.exports = { schedulers };
} else {
  window.schedulersData = { schedulers };
}


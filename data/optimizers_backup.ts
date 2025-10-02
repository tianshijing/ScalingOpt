export interface Optimizer {
  id: string
  name: string
  fullName: string
  description: string
  year: number
  category: 'First-order' | 'Second-order' | 'Adaptive' | 'Momentum-based' | 'Novel'
  paper: {
    title: string
    url: string
    authors: string[]
  }
  advantages: string[]
  disadvantages?: string[]
  hyperparameters: {
    [key: string]: {
      default: number | string
      range?: string
      description: string
    }
  }
  implementation: {
    pytorch: boolean
    tensorflow?: boolean
    jax?: boolean
  }
  popularity: number // 1-100
  benchmarkResults?: {
    dataset: string
    accuracy: number
    convergenceSpeed: 'Fast' | 'Medium' | 'Slow'
  }[]
  tags: string[]
  codeExample?: string
  githubUrl?: string // GitHub implementation URL
}

export const optimizers: Optimizer[] = [
  {
    id: 'sgd',
    name: 'SGD',
    fullName: 'Stochastic Gradient Descent',
    description: 'Simple and effective foundational optimizer for many other algorithms',
    year: 1999,
    category: 'First-order',
    paper: {
      title: 'On the importance of initialization and momentum in deep learning',
      url: 'https://www.cs.toronto.edu/~hinton/absps/momentum.pdf',
      authors: ['Ilya Sutskever', 'James Martens', 'George Dahl', 'Geoffrey Hinton']
    },
    advantages: [
      'Simple and well-understood',
      'Memory efficient',
      'Good generalization properties',
      'Stable convergence'
    ],
    disadvantages: [
      'Slow convergence on poorly conditioned problems',
      'Sensitive to learning rate',
      'May get stuck in saddle points'
    ],
    hyperparameters: {
      lr: {
        default: 0.01,
        range: '1e-5 to 1e-1',
        description: 'Learning rate'
      },
      momentum: {
        default: 0.9,
        range: '0 to 1',
        description: 'Momentum factor'
      },
      weight_decay: {
        default: 0,
        range: '0 to 1e-2',
        description: 'Weight decay (L2 penalty)'
      }
    },
    implementation: {
      pytorch: true,
      tensorflow: true,
      jax: true
    },
    popularity: 85,
    tags: ['classic', 'momentum', 'first-order'],
    githubUrl: 'https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/sgd.py'
  },
  {
    id: 'adam',
    name: 'Adam',
    fullName: 'Adaptive Moment Estimation',
    description: 'Combines best properties of AdaGrad and RMSprop; widely used and effective',
    year: 2014,
    category: 'Adaptive',
    paper: {
      title: 'Adam: A Method for Stochastic Optimization',
      url: 'https://arxiv.org/abs/1412.6980',
      authors: ['Diederik P. Kingma', 'Jimmy Ba']
    },
    advantages: [
      'Adaptive learning rates',
      'Works well in practice',
      'Handles sparse gradients well',
      'Computationally efficient'
    ],
    disadvantages: [
      'May not converge to optimal solution',
      'Can have poor generalization',
      'Sensitive to hyperparameters'
    ],
    hyperparameters: {
      lr: {
        default: 0.001,
        range: '1e-5 to 1e-2',
        description: 'Learning rate'
      },
      beta1: {
        default: 0.9,
        range: '0.8 to 0.99',
        description: 'Exponential decay rate for first moment'
      },
      beta2: {
        default: 0.999,
        range: '0.99 to 0.9999',
        description: 'Exponential decay rate for second moment'
      },
      eps: {
        default: 1e-8,
        range: '1e-10 to 1e-6',
        description: 'Small constant for numerical stability'
      }
    },
    implementation: {
      pytorch: true,
      tensorflow: true,
      jax: true
    },
    popularity: 95,
    tags: ['adaptive', 'popular', 'momentum'],
    githubUrl: 'https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adam.py'
  },
  {
    id: 'adamw',
    name: 'AdamW',
    fullName: 'Adam with Decoupled Weight Decay',
    description: 'Fixes weight decay regularization in Adam; improves generalization',
    year: 2017,
    category: 'Adaptive',
    paper: {
      title: 'Decoupled Weight Decay Regularization',
      url: 'https://arxiv.org/abs/1711.05101',
      authors: ['Ilya Loshchilov', 'Frank Hutter']
    },
    advantages: [
      'Better generalization than Adam',
      'Proper weight decay implementation',
      'Works well with transformers',
      'Stable training'
    ],
    hyperparameters: {
      lr: {
        default: 0.001,
        range: '1e-5 to 1e-2',
        description: 'Learning rate'
      },
      beta1: {
        default: 0.9,
        range: '0.8 to 0.99',
        description: 'Exponential decay rate for first moment'
      },
      beta2: {
        default: 0.999,
        range: '0.99 to 0.9999',
        description: 'Exponential decay rate for second moment'
      },
      weight_decay: {
        default: 0.01,
        range: '0 to 0.1',
        description: 'Weight decay coefficient'
      }
    },
    implementation: {
      pytorch: true,
      tensorflow: true,
      jax: true
    },
    popularity: 90,
    tags: ['adaptive', 'weight-decay', 'transformers'],
    githubUrl: 'https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adamw.py'
  },
  {
    id: 'lion',
    name: 'Lion',
    fullName: 'Lévy-inspired Optimizer',
    description: 'Inspired by Lévy flights; explores the loss landscape efficiently',
    year: 2021,
    category: 'Novel',
    paper: {
      title: 'Symbolic Discovery of Optimization Algorithms',
      url: 'https://arxiv.org/abs/2302.06675',
      authors: ['Xiangning Chen', 'Chen Liang', 'Da Huang', 'Esteban Real', 'Kaiyuan Wang', 'Yao Liu', 'Hieu Pham', 'Xuanyi Dong', 'Thang Luong', 'Cho-Jui Hsieh', 'Yifeng Lu', 'Quoc V. Le']
    },
    advantages: [
      'Memory efficient',
      'Fast convergence',
      'Good performance on large models',
      'Simple implementation'
    ],
    hyperparameters: {
      lr: {
        default: 0.0001,
        range: '1e-6 to 1e-3',
        description: 'Learning rate'
      },
      beta1: {
        default: 0.9,
        range: '0.8 to 0.99',
        description: 'Momentum coefficient'
      },
      weight_decay: {
        default: 0.01,
        range: '0 to 0.1',
        description: 'Weight decay coefficient'
      }
    },
    implementation: {
      pytorch: true,
      tensorflow: false,
      jax: true
    },
    popularity: 75,
    tags: ['novel', 'memory-efficient', 'large-models'],
    githubUrl: 'https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/lion.py'
  },
  {
    id: 'sophia',
    name: 'Sophia',
    fullName: 'Scalable Stochastic Second-order Optimizer',
    description: 'Scalable second-order optimizer; efficient for large-scale pre-training',
    year: 2023,
    category: 'Second-order',
    paper: {
      title: 'Sophia: A Scalable Stochastic Second-order Optimizer for Language Model Pre-training',
      url: 'https://arxiv.org/abs/2305.14342',
      authors: ['Hong Liu', 'Zhiyuan Li', 'David Hall', 'Percy Liang', 'Tengyu Ma']
    },
    advantages: [
      'Uses second-order information',
      'Faster convergence than first-order methods',
      'Scalable to large models',
      'Good for language model pre-training'
    ],
    hyperparameters: {
      lr: {
        default: 0.001,
        range: '1e-5 to 1e-2',
        description: 'Learning rate'
      },
      beta1: {
        default: 0.965,
        range: '0.9 to 0.99',
        description: 'Exponential decay rate for first moment'
      },
      beta2: {
        default: 0.99,
        range: '0.95 to 0.999',
        description: 'Exponential decay rate for Hessian'
      },
      rho: {
        default: 0.04,
        range: '0.01 to 0.1',
        description: 'Hessian update parameter'
      }
    },
    implementation: {
      pytorch: true,
      tensorflow: false,
      jax: false
    },
    popularity: 80,
    tags: ['second-order', 'language-models', 'scalable'],
    githubUrl: 'https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/sophia.py'
  },
  {
    id: 'adagrad',
    name: 'AdaGrad',
    fullName: 'Adaptive Gradient Algorithm',
    description: 'Adaptive learning rates; effective for sparse data',
    year: 2011,
    category: 'Adaptive',
    paper: {
      title: 'Adaptive Subgradient Methods for Online Learning and Stochastic Optimization',
      url: 'http://www.jmlr.org/papers/volume12/duchi11a/duchi11a.pdf',
      authors: ['John Duchi', 'Elad Hazan', 'Yoram Singer']
    },
    advantages: [
      'Adaptive learning rates per parameter',
      'Good for sparse data',
      'No manual learning rate tuning'
    ],
    disadvantages: [
      'Learning rate diminishes over time',
      'May stop learning too early',
      'Accumulates squared gradients indefinitely'
    ],
    hyperparameters: {
      lr: {
        default: 0.01,
        range: '1e-4 to 1e-1',
        description: 'Learning rate'
      },
      eps: {
        default: 1e-10,
        range: '1e-12 to 1e-6',
        description: 'Small constant for numerical stability'
      }
    },
    implementation: {
      pytorch: true,
      tensorflow: true,
      jax: true
    },
    popularity: 60,
    tags: ['adaptive', 'sparse-data', 'classic'],
    githubUrl: 'https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adagrad.py'
  },
  {
    id: 'rmsprop',
    name: 'RMSprop',
    fullName: 'Root Mean Square Propagation',
    description: 'Adaptive learning rates; suitable for non-stationary objectives',
    year: 2012,
    category: 'Adaptive',
    paper: {
      title: 'Lecture 6.5 - rmsprop, COURSERA: Neural Networks for Machine Learning',
      url: 'https://www.cs.toronto.edu/~tijmen/csc321/slides/lecture_slides_lec6.pdf',
      authors: ['Geoffrey Hinton']
    },
    advantages: [
      'Addresses AdaGrad diminishing learning rates',
      'Good for non-stationary objectives',
      'Adaptive per-parameter learning rates'
    ],
    hyperparameters: {
      lr: {
        default: 0.01,
        range: '1e-5 to 1e-1',
        description: 'Learning rate'
      },
      alpha: {
        default: 0.99,
        range: '0.9 to 0.999',
        description: 'Smoothing constant'
      },
      eps: {
        default: 1e-8,
        range: '1e-10 to 1e-6',
        description: 'Small constant for numerical stability'
      }
    },
    implementation: {
      pytorch: true,
      tensorflow: true,
      jax: true
    },
    popularity: 70,
    tags: ['adaptive', 'non-stationary', 'classic'],
    githubUrl: 'https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/rmsprop.py'
  },
  {
    id: 'adadelta',
    name: 'AdaDelta',
    fullName: 'Adaptive Delta',
    description: 'Adaptive learning rates without manual tuning; addresses AdaGrad\'s diminishing learning rates',
    year: 2012,
    category: 'Adaptive',
    paper: {
      title: 'ADADELTA: An Adaptive Learning Rate Method',
      url: 'https://arxiv.org/abs/1212.5701',
      authors: ['Matthew D. Zeiler']
    },
    advantages: [
      'No manual learning rate tuning',
      'Addresses AdaGrad\'s diminishing learning rates',
      'Robust to hyperparameter choices'
    ],
    disadvantages: [
      'Can be slower than other adaptive methods',
      'May not work well on all problems'
    ],
    hyperparameters: {
      rho: {
        default: 0.9,
        range: '0.8 to 0.99',
        description: 'Decay rate for moving average'
      },
      eps: {
        default: 1e-6,
        range: '1e-10 to 1e-4',
        description: 'Small constant for numerical stability'
      }
    },
    implementation: {
      pytorch: true,
      tensorflow: true,
      jax: true
    },
    popularity: 65,
    tags: ['adaptive', 'parameter-free', 'classic'],
    githubUrl: 'https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adadelta.py'
  },
  {
    id: 'radam',
    name: 'RAdam',
    fullName: 'Rectified Adam',
    description: 'Rectifies variance of the adaptive learning rate; improves stability',
    year: 2019,
    category: 'Adaptive',
    paper: {
      title: 'On the Variance of the Adaptive Learning Rate and Beyond',
      url: 'https://arxiv.org/abs/1908.03265',
      authors: ['Liyuan Liu', 'Haoming Jiang', 'Pengcheng He', 'Weizhu Chen', 'Xiaodong Liu', 'Jianfeng Gao', 'Jiawei Han']
    },
    advantages: [
      'More stable than Adam',
      'Better convergence properties',
      'Rectifies variance issues'
    ],
    hyperparameters: {
      lr: {
        default: 0.001,
        range: '1e-5 to 1e-2',
        description: 'Learning rate'
      },
      beta1: {
        default: 0.9,
        range: '0.8 to 0.99',
        description: 'Exponential decay rate for first moment'
      },
      beta2: {
        default: 0.999,
        range: '0.99 to 0.9999',
        description: 'Exponential decay rate for second moment'
      }
    },
    implementation: {
      pytorch: true,
      tensorflow: false,
      jax: true
    },
    popularity: 75,
    tags: ['adaptive', 'stable', 'rectified'],
    githubUrl: 'https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/radam.py'
  },
  {
    id: 'lamb',
    name: 'LAMB',
    fullName: 'Layer-wise Adaptive Moments optimizer for Batch training',
    description: 'Enables large batch training for BERT; improves training efficiency',
    year: 2019,
    category: 'Adaptive',
    paper: {
      title: 'Large Batch Optimization for Deep Learning: Training BERT in 76 minutes',
      url: 'https://arxiv.org/abs/1904.00962',
      authors: ['Yang You', 'Jing Li', 'Sashank Reddi', 'Jonathan Hseu', 'Sanjiv Kumar', 'Srinadh Bhojanapalli', 'Xiaodan Song', 'James Demmel', 'Kurt Keutzer', 'Cho-Jui Hsieh']
    },
    advantages: [
      'Enables large batch training',
      'Layer-wise adaptation',
      'Good for transformer models'
    ],
    hyperparameters: {
      lr: {
        default: 0.001,
        range: '1e-5 to 1e-2',
        description: 'Learning rate'
      },
      beta1: {
        default: 0.9,
        range: '0.8 to 0.99',
        description: 'Exponential decay rate for first moment'
      },
      beta2: {
        default: 0.999,
        range: '0.99 to 0.9999',
        description: 'Exponential decay rate for second moment'
      },
      weight_decay: {
        default: 0.01,
        range: '0 to 0.1',
        description: 'Weight decay coefficient'
      }
    },
    implementation: {
      pytorch: true,
      tensorflow: true,
      jax: false
    },
    popularity: 78,
    tags: ['adaptive', 'large-batch', 'transformers'],
    githubUrl: 'https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/lamb.py'
  },
  {
    id: 'adabelief',
    name: 'AdaBelief',
    fullName: 'Adapting Stepsizes by the Belief in Observed Gradients',
    description: 'Adapts stepsizes based on the belief in observed gradients; improves convergence',
    year: 2020,
    category: 'Adaptive',
    paper: {
      title: 'AdaBelief Optimizer: Adapting Stepsizes by the Belief in Observed Gradients',
      url: 'https://arxiv.org/abs/2010.07468',
      authors: ['Juntang Zhuang', 'Tommy Tang', 'Yifan Ding', 'Sekhar Tatikonda', 'Nicha Dvornek', 'Xenophon Papademetris', 'James Duncan']
    },
    advantages: [
      'Fast convergence like Adam',
      'Good generalization like SGD',
      'Adapts to gradient predictability'
    ],
    hyperparameters: {
      lr: {
        default: 0.001,
        range: '1e-5 to 1e-2',
        description: 'Learning rate'
      },
      beta1: {
        default: 0.9,
        range: '0.8 to 0.99',
        description: 'Exponential decay rate for first moment'
      },
      beta2: {
        default: 0.999,
        range: '0.99 to 0.9999',
        description: 'Exponential decay rate for second moment'
      }
    },
    implementation: {
      pytorch: true,
      tensorflow: false,
      jax: true
    },
    popularity: 72,
    tags: ['adaptive', 'belief', 'generalization'],
    githubUrl: 'https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adabelief.py'
  },
  {
    id: 'adam-mini',
    name: 'Adam-mini',
    fullName: 'Adam with Fewer Learning Rates',
    description: 'Memory-efficient Adam variant that reduces the number of learning rates to gain more performance',
    year: 2024,
    category: 'Adaptive',
    paper: {
      title: 'Adam-mini: Use Fewer Learning Rates To Gain More',
      url: 'https://arxiv.org/abs/2406.16793',
      authors: ['Yushun Zhang', 'Congliang Chen', 'Ziniu Li', 'Tian Ding', 'Chenwei Wu', 'Yinyu Ye', 'Zhi-Quan Luo', 'Ruoyu Sun']
    },
    advantages: [
      'Reduces memory usage compared to Adam',
      'Simplifies hyperparameter tuning',
      'Maintains competitive performance',
      'Scalable to large models'
    ],
    hyperparameters: {
      lr: {
        default: 0.001,
        range: '1e-5 to 1e-2',
        description: 'Learning rate'
      },
      beta1: {
        default: 0.9,
        range: '0.8 to 0.99',
        description: 'Exponential decay rate for first moment'
      },
      beta2: {
        default: 0.999,
        range: '0.99 to 0.9999',
        description: 'Exponential decay rate for second moment'
      },
      eps: {
        default: 1e-8,
        range: '1e-10 to 1e-6',
        description: 'Small constant for numerical stability'
      }
    },
    implementation: {
      pytorch: true,
      tensorflow: false,
      jax: false
    },
    popularity: 78,
    tags: ['adaptive', 'memory-efficient', 'simplified'],
    githubUrl: 'https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/adam_mini.py'
  },
  {
    id: 'muon',
    name: 'Muon',
    fullName: 'Muon Optimizer with Orthogonal Updates',
    description: 'Orthogonal weight updates via Newton-Schulz iteration for improved training dynamics',
    year: 2024,
    category: 'Novel',
    paper: {
      title: 'Muon: Orthogonal Weight Updates via Newton-Schulz Iteration',
      url: 'https://arxiv.org/abs/2502.16982',
      authors: ['Jeremy Bernstein', 'Laker Newhouse']
    },
    advantages: [
      'Orthogonal weight updates',
      'Improved training dynamics',
      'Better convergence properties',
      'Novel approach to optimization'
    ],
    hyperparameters: {
      lr: {
        default: 0.02,
        range: '1e-3 to 1e-1',
        description: 'Learning rate'
      },
      momentum: {
        default: 0.95,
        range: '0.9 to 0.99',
        description: 'Momentum coefficient'
      },
      nesterov: {
        default: 'True',
        range: 'True/False',
        description: 'Use Nesterov momentum'
      }
    },
    implementation: {
      pytorch: true,
      tensorflow: false,
      jax: false
    },
    popularity: 82,
    tags: ['novel', 'orthogonal', 'newton-schulz'],
    githubUrl: 'https://github.com/tianshijing/ScalingOpt/blob/main/Optimizers/muon.py'
  }
]

export const categories = [
  'All',
  'First-order',
  'Second-order', 
  'Adaptive',
  'Momentum-based',
  'Novel'
] as const

export const years = Array.from(
  new Set(optimizers.map(opt => opt.year))
).sort((a, b) => b - a)

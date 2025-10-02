export interface BenchmarkResult {
  optimizer: string
  dataset: string
  model: string
  accuracy: number
  convergenceEpochs: number
  trainingTime: number // in minutes
  memoryUsage: number // in MB
  hyperparameters: {
    [key: string]: any
  }
}

export interface BenchmarkSuite {
  id: string
  name: string
  description: string
  datasets: string[]
  models: string[]
  metrics: string[]
  results: BenchmarkResult[]
}

export const benchmarkSuites: BenchmarkSuite[] = [
  {
    id: 'vision-classification',
    name: 'Vision Classification Benchmark',
    description: 'Comprehensive evaluation of optimizers on image classification tasks using various CNN and Vision Transformer architectures.',
    datasets: ['CIFAR-10', 'CIFAR-100', 'ImageNet'],
    models: ['ResNet-50', 'VGG-16', 'ViT-Base', 'ConvNeXt-Base'],
    metrics: ['Top-1 Accuracy', 'Convergence Speed', 'Training Time', 'Memory Usage'],
    results: [
      {
        optimizer: 'SGD',
        dataset: 'CIFAR-10',
        model: 'ResNet-50',
        accuracy: 94.2,
        convergenceEpochs: 150,
        trainingTime: 45,
        memoryUsage: 2048,
        hyperparameters: { lr: 0.1, momentum: 0.9, weight_decay: 1e-4 }
      },
      {
        optimizer: 'Adam',
        dataset: 'CIFAR-10',
        model: 'ResNet-50',
        accuracy: 93.8,
        convergenceEpochs: 100,
        trainingTime: 42,
        memoryUsage: 2560,
        hyperparameters: { lr: 0.001, beta1: 0.9, beta2: 0.999 }
      },
      {
        optimizer: 'AdamW',
        dataset: 'CIFAR-10',
        model: 'ResNet-50',
        accuracy: 94.5,
        convergenceEpochs: 120,
        trainingTime: 43,
        memoryUsage: 2560,
        hyperparameters: { lr: 0.001, beta1: 0.9, beta2: 0.999, weight_decay: 0.01 }
      },
      {
        optimizer: 'Lion',
        dataset: 'CIFAR-10',
        model: 'ResNet-50',
        accuracy: 94.1,
        convergenceEpochs: 90,
        trainingTime: 40,
        memoryUsage: 2200,
        hyperparameters: { lr: 0.0001, beta1: 0.9, weight_decay: 0.01 }
      },
      {
        optimizer: 'SGD',
        dataset: 'CIFAR-100',
        model: 'ResNet-50',
        accuracy: 76.8,
        convergenceEpochs: 200,
        trainingTime: 60,
        memoryUsage: 2048,
        hyperparameters: { lr: 0.1, momentum: 0.9, weight_decay: 1e-4 }
      },
      {
        optimizer: 'Adam',
        dataset: 'CIFAR-100',
        model: 'ResNet-50',
        accuracy: 75.2,
        convergenceEpochs: 150,
        trainingTime: 55,
        memoryUsage: 2560,
        hyperparameters: { lr: 0.001, beta1: 0.9, beta2: 0.999 }
      },
      {
        optimizer: 'AdamW',
        dataset: 'CIFAR-100',
        model: 'ResNet-50',
        accuracy: 77.5,
        convergenceEpochs: 180,
        trainingTime: 58,
        memoryUsage: 2560,
        hyperparameters: { lr: 0.001, beta1: 0.9, beta2: 0.999, weight_decay: 0.01 }
      },
      {
        optimizer: 'Lion',
        dataset: 'CIFAR-100',
        model: 'ResNet-50',
        accuracy: 76.9,
        convergenceEpochs: 140,
        trainingTime: 52,
        memoryUsage: 2200,
        hyperparameters: { lr: 0.0001, beta1: 0.9, weight_decay: 0.01 }
      },
      // ViT results
      {
        optimizer: 'SGD',
        dataset: 'CIFAR-10',
        model: 'ViT-Base',
        accuracy: 92.1,
        convergenceEpochs: 300,
        trainingTime: 120,
        memoryUsage: 4096,
        hyperparameters: { lr: 0.01, momentum: 0.9, weight_decay: 1e-4 }
      },
      {
        optimizer: 'Adam',
        dataset: 'CIFAR-10',
        model: 'ViT-Base',
        accuracy: 95.2,
        convergenceEpochs: 150,
        trainingTime: 85,
        memoryUsage: 5120,
        hyperparameters: { lr: 0.001, beta1: 0.9, beta2: 0.999 }
      },
      {
        optimizer: 'AdamW',
        dataset: 'CIFAR-10',
        model: 'ViT-Base',
        accuracy: 95.8,
        convergenceEpochs: 180,
        trainingTime: 90,
        memoryUsage: 5120,
        hyperparameters: { lr: 0.001, beta1: 0.9, beta2: 0.999, weight_decay: 0.01 }
      },
      {
        optimizer: 'Lion',
        dataset: 'CIFAR-10',
        model: 'ViT-Base',
        accuracy: 95.5,
        convergenceEpochs: 120,
        trainingTime: 75,
        memoryUsage: 4608,
        hyperparameters: { lr: 0.0001, beta1: 0.9, weight_decay: 0.01 }
      }
    ]
  },
  {
    id: 'nlp-benchmark',
    name: 'NLP Benchmark Suite',
    description: 'Evaluation of optimizers on natural language processing tasks including language modeling and text classification.',
    datasets: ['GLUE', 'WikiText-103', 'IMDB'],
    models: ['BERT-Base', 'GPT-2', 'RoBERTa-Base'],
    metrics: ['BLEU Score', 'Perplexity', 'F1 Score', 'Training Efficiency'],
    results: [
      {
        optimizer: 'AdamW',
        dataset: 'GLUE',
        model: 'BERT-Base',
        accuracy: 84.2,
        convergenceEpochs: 3,
        trainingTime: 180,
        memoryUsage: 8192,
        hyperparameters: { lr: 2e-5, beta1: 0.9, beta2: 0.999, weight_decay: 0.01 }
      },
      {
        optimizer: 'Adam',
        dataset: 'GLUE',
        model: 'BERT-Base',
        accuracy: 83.8,
        convergenceEpochs: 4,
        trainingTime: 200,
        memoryUsage: 8192,
        hyperparameters: { lr: 2e-5, beta1: 0.9, beta2: 0.999 }
      },
      {
        optimizer: 'Lion',
        dataset: 'GLUE',
        model: 'BERT-Base',
        accuracy: 84.5,
        convergenceEpochs: 2,
        trainingTime: 160,
        memoryUsage: 7680,
        hyperparameters: { lr: 1e-5, beta1: 0.9, weight_decay: 0.01 }
      },
      {
        optimizer: 'Sophia',
        dataset: 'WikiText-103',
        model: 'GPT-2',
        accuracy: 89.2,
        convergenceEpochs: 5,
        trainingTime: 240,
        memoryUsage: 12288,
        hyperparameters: { lr: 1e-4, beta1: 0.965, beta2: 0.99, rho: 0.04 }
      }
    ]
  }
]

export const optimizerComparison = [
  {
    optimizer: 'SGD',
    overallScore: 82,
    convergenceSpeed: 70,
    finalAccuracy: 85,
    memoryEfficiency: 95,
    stability: 90
  },
  {
    optimizer: 'Adam',
    overallScore: 88,
    convergenceSpeed: 90,
    finalAccuracy: 85,
    memoryEfficiency: 75,
    stability: 80
  },
  {
    optimizer: 'AdamW',
    overallScore: 92,
    convergenceSpeed: 85,
    finalAccuracy: 92,
    memoryEfficiency: 75,
    stability: 88
  },
  {
    optimizer: 'Lion',
    overallScore: 89,
    convergenceSpeed: 95,
    finalAccuracy: 88,
    memoryEfficiency: 85,
    stability: 82
  },
  {
    optimizer: 'RMSprop',
    overallScore: 78,
    convergenceSpeed: 80,
    finalAccuracy: 78,
    memoryEfficiency: 80,
    stability: 75
  },
  {
    optimizer: 'Sophia',
    overallScore: 85,
    convergenceSpeed: 88,
    finalAccuracy: 90,
    memoryEfficiency: 70,
    stability: 85
  }
]

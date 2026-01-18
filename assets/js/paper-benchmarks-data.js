// Paper Benchmarks Data - Mapping papers to their benchmark results
const paperBenchmarks = {
  '2306.07179': {
    id: 'benchmarking-neural-network-training',
    title: 'Benchmarking Neural Network Training Algorithms',
    arxivId: '2306.07179',
    arxivUrl: 'https://arxiv.org/abs/2306.07179',
    year: 2023,
    description: 'Comprehensive benchmark results comparing various neural network training algorithms across multiple datasets and architectures.',
    benchmarks: [
      {
        name: 'CIFAR-100 Classification',
        description: 'Performance across 20 different optimizers on CIFAR-100 dataset',
        datasets: ['CIFAR-100'],
        models: ['AlexNet', 'VGG-13', 'ResNet-50', 'DenseNet-121', 'MobileNet-V2', 'EfficientNet-B0', 'RegNetVGG-A1', 'DeiT-S', 'MLP-Mixer-S', 'Swin-T', 'ConvNeXt-T', 'ConvNeXtV2-T', 'MogaNet-S', 'Uniformer-L', 'Twins-SVT-T', 'InternImage-T', 'InternViT-6', 'PVTv2-B0', 'ConvFormer-12', 'CAFormer-12'],
        metrics: ['Top-1 Accuracy'],
        dataType: 'cifar100',
        note: 'Results show optimizer performance across diverse vision architectures'
      },
      {
        name: 'ImageNet-1K Classification',
        description: 'Large-scale image classification benchmark on ImageNet-1K',
        datasets: ['ImageNet-1K'],
        models: ['DeiT-S', 'ResNet-50'],
        metrics: ['Top-1 Accuracy'],
        dataType: 'imagenet',
        note: 'Evaluation on standard ImageNet validation set'
      }
    ]
  },
  '2410.06373': {
    id: 'backbone-optimizer-coupling-bias',
    title: 'Unveiling the Backbone-Optimizer Coupling Bias in Visual Representation Learning',
    arxivId: '2410.06373',
    arxivUrl: 'https://arxiv.org/abs/2410.06373',
    year: 2024,
    description: 'Investigates the coupling between vision backbones and optimizers, showing how different architectures prefer different optimizer families.',
    benchmarks: [
      {
        name: 'CIFAR-100 Classification',
        description: 'Comprehensive evaluation of optimizer-backbone combinations on CIFAR-100',
        datasets: ['CIFAR-100'],
        models: ['AlexNet', 'VGG-13', 'ResNet-50', 'DenseNet-121', 'MobileNet-V2', 'EfficientNet-B0', 'RegNetVGG-A1', 'DeiT-S', 'MLP-Mixer-S', 'Swin-T', 'ConvNeXt-T', 'ConvNeXtV2-T', 'MogaNet-S', 'Uniformer-L', 'Twins-SVT-T', 'InternImage-T', 'InternViT-6', 'PVTv2-B0', 'ConvFormer-12', 'CAFormer-12'],
        metrics: ['Top-1 Accuracy'],
        dataType: 'cifar100',
        note: 'Demonstrates BOCB: CNNs prefer SGD families, ViTs prefer adaptive optimizers'
      },
      {
        name: 'ImageNet-1K Classification',
        description: 'Large-scale evaluation on ImageNet-1K',
        datasets: ['ImageNet-1K'],
        models: ['DeiT-S', 'ResNet-50'],
        metrics: ['Top-1 Accuracy'],
        dataType: 'imagenet',
        note: 'Shows backbone-optimizer coupling effects at scale'
      },
      {
        name: 'COCO Object Detection & Pose Estimation',
        description: 'Downstream task evaluation on COCO dataset',
        datasets: ['COCO'],
        models: ['VGG', 'ResNet-50', 'Swin-T', 'ConvNeXt-T'],
        tasks: ['2D Pose Estimation', 'Object Detection'],
        metrics: ['mAP', 'AP@0.5', 'AP@0.75'],
        dataType: 'coco',
        note: 'Evaluates transfer learning performance with different optimizer-backbone pairs'
      }
    ]
  },
  '2509.01440': {
    id: 'benchmarking-optimizers-llm-pretraining',
    title: 'Benchmarking Optimizers for Large Language Model Pretraining',
    arxivId: '2509.01440',
    arxivUrl: 'https://arxiv.org/abs/2509.01440',
    year: 2025,
    description: 'Systematic evaluation of optimizers for large language model pretraining across different model scales.',
    benchmarks: [
      {
        name: 'C4 Language Modeling',
        description: 'Language modeling benchmark on C4 dataset across multiple model scales',
        datasets: ['C4'],
        models: ['60M', '130M', '350M', '1B'],
        metrics: ['Perplexity (PPL)', 'Memory Usage (GB)', 'Training Time (s)'],
        dataType: 'c4',
        note: 'Evaluates optimizer performance across different model sizes from 60M to 1B parameters'
      }
    ]
  },
  '2509.02046': {
    id: 'fantastic-pretraining-optimizers',
    title: 'Fantastic Pretraining Optimizers and Where to Find Them',
    arxivId: '2509.02046',
    arxivUrl: 'https://arxiv.org/abs/2509.02046',
    year: 2025,
    description: 'Systematic study of optimizers for language model pretraining with fair hyperparameter tuning and comprehensive evaluation.',
    benchmarks: [
      {
        name: 'C4 Language Modeling',
        description: 'Comprehensive evaluation across four model scales (0.1B-1.2B) and data-to-model ratios',
        datasets: ['C4'],
        models: ['60M', '130M', '350M', '1B'],
        metrics: ['Perplexity (PPL)', 'Memory Usage (GB)', 'Training Time (s)'],
        dataType: 'c4',
        note: 'Shows matrix-based optimizers (Muon, SOAP) achieve 1.4x speedup for small models, decreasing to 1.1x for larger models'
      }
    ]
  }
};

// Export for use in HTML
if (typeof module !== "undefined" && module.exports) {
  module.exports = { paperBenchmarks };
} else {
  window.paperBenchmarksData = { paperBenchmarks };
}

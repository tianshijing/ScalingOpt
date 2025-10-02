// Complete CIFAR-100 Benchmark Data - All 20 Optimizers
const cifar100Data = [
  {
    optimizer: 'SGD-M',
    background: 'bg-orange-50',
    data: {
      'AlexNet': { value: '66.76', highlight: 'blue' },
      'VGG-13': { value: '77.08', highlight: 'blue' },
      'R-50': { value: '78.76', highlight: 'blue' },
      'DN-121': { value: '78.01', highlight: 'none' },
      'MobV2': { value: '77.16', highlight: 'none' },
      'Eff-B0': { value: '79.41', highlight: 'blue' },
      'RVGG-A1': { value: '75.85', highlight: 'none' },
      'DeiT-S': { value: '63.20', highlight: 'red' },
      'MLP-S': { value: '72.64', highlight: 'none' },
      'Swin-T': { value: '78.95', highlight: 'none' },
      'CNX-T': { value: '60.09', highlight: 'red' },
      'CNXV2-T': { value: '82.25', highlight: 'none' },
      'Moga-S': { value: '75.93', highlight: 'red' },
      'URLK-T': { value: '82.75', highlight: 'none' },
      'TNX-T': { value: '86.21', highlight: 'none' },
      'IF-12': { value: '77.40', highlight: 'none' },
      'PFV2-12': { value: '77.70', highlight: 'none' },
      'CF-12': { value: '83.46', highlight: 'none' },
      'AF-12': { value: '83.02', highlight: 'none' },
      'CAF-12': { value: '81.21', highlight: 'none' }
    }
  },
  {
    optimizer: 'SGDP',
    background: 'bg-orange-50',
    data: {
      'AlexNet': { value: '66.54', highlight: 'none' },
      'VGG-13': { value: '77.56', highlight: 'purple' },
      'R-50': { value: '79.25', highlight: 'blue' },
      'DN-121': { value: '78.93', highlight: 'blue' },
      'MobV2': { value: '77.32', highlight: 'none' },
      'Eff-B0': { value: '79.55', highlight: 'blue' },
      'RVGG-A1': { value: '75.26', highlight: 'none' },
      'DeiT-S': { value: '63.53', highlight: 'red' },
      'MLP-S': { value: '69.24', highlight: 'red' },
      'Swin-T': { value: '80.56', highlight: 'none' },
      'CNX-T': { value: '61.25', highlight: 'red' },
      'CNXV2-T': { value: '82.43', highlight: 'none' },
      'Moga-S': { value: '80.86', highlight: 'red' },
      'URLK-T': { value: '82.18', highlight: 'none' },
      'TNX-T': { value: '86.12', highlight: 'none' },
      'IF-12': { value: '77.55', highlight: 'none' },
      'PFV2-12': { value: '77.53', highlight: 'none' },
      'CF-12': { value: '83.54', highlight: 'none' },
      'AF-12': { value: '82.88', highlight: 'none' },
      'CAF-12': { value: '81.56', highlight: 'none' }
    }
  },
  {
    optimizer: 'LION',
    background: 'bg-orange-50',
    data: {
      'AlexNet': { value: '62.11', highlight: 'none' },
      'VGG-13': { value: '73.87', highlight: 'none' },
      'R-50': { value: '75.28', highlight: 'none' },
      'DN-121': { value: '75.42', highlight: 'none' },
      'MobV2': { value: '74.62', highlight: 'none' },
      'Eff-B0': { value: '76.97', highlight: 'none' },
      'RVGG-A1': { value: '73.55', highlight: 'none' },
      'DeiT-S': { value: '74.57', highlight: 'blue' },
      'MLP-S': { value: '74.19', highlight: 'blue' },
      'Swin-T': { value: '81.84', highlight: 'blue' },
      'CNX-T': { value: '82.29', highlight: 'none' },
      'CNXV2-T': { value: '82.53', highlight: 'none' },
      'Moga-S': { value: '85.03', highlight: 'none' },
      'URLK-T': { value: '83.43', highlight: 'none' },
      'TNX-T': { value: '86.96', highlight: 'none' },
      'IF-12': { value: '78.65', highlight: 'none' },
      'PFV2-12': { value: '79.66', highlight: 'none' },
      'CF-12': { value: '84.62', highlight: 'none' },
      'AF-12': { value: '82.41', highlight: 'none' },
      'CAF-12': { value: '79.59', highlight: 'red' }
    }
  },
  {
    optimizer: 'Adam',
    background: 'bg-blue-50',
    data: {
      'AlexNet': { value: '65.29', highlight: 'none' },
      'VGG-13': { value: '73.41', highlight: 'none' },
      'R-50': { value: '74.55', highlight: 'none' },
      'DN-121': { value: '76.78', highlight: 'none' },
      'MobV2': { value: '74.56', highlight: 'none' },
      'Eff-B0': { value: '76.48', highlight: 'none' },
      'RVGG-A1': { value: '75.06', highlight: 'none' },
      'DeiT-S': { value: '71.04', highlight: 'none' },
      'MLP-S': { value: '72.84', highlight: 'none' },
      'Swin-T': { value: '80.71', highlight: 'none' },
      'CNX-T': { value: '82.03', highlight: 'none' },
      'CNXV2-T': { value: '82.66', highlight: 'none' },
      'Moga-S': { value: '84.92', highlight: 'none' },
      'URLK-T': { value: '84.73', highlight: 'none' },
      'TNX-T': { value: '86.23', highlight: 'none' },
      'IF-12': { value: '78.39', highlight: 'none' },
      'PFV2-12': { value: '79.18', highlight: 'none' },
      'CF-12': { value: '84.81', highlight: 'none' },
      'AF-12': { value: '81.54', highlight: 'none' },
      'CAF-12': { value: '82.18', highlight: 'none' }
    }
  },
  {
    optimizer: 'AdamW',
    background: 'bg-blue-50',
    data: {
      'AlexNet': { value: '62.71', highlight: 'none' },
      'VGG-13': { value: '73.90', highlight: 'none' },
      'R-50': { value: '75.56', highlight: 'none' },
      'DN-121': { value: '78.14', highlight: 'none' },
      'MobV2': { value: '76.88', highlight: 'none' },
      'Eff-B0': { value: '78.77', highlight: 'none' },
      'RVGG-A1': { value: '75.35', highlight: 'none' },
      'DeiT-S': { value: '72.15', highlight: 'none' },
      'MLP-S': { value: '73.59', highlight: 'none' },
      'Swin-T': { value: '81.30', highlight: 'none' },
      'CNX-T': { value: '83.52', highlight: 'none' },
      'CNXV2-T': { value: '83.59', highlight: 'none' },
      'Moga-S': { value: '86.19', highlight: 'blue' },
      'URLK-T': { value: '86.30', highlight: 'blue' },
      'TNX-T': { value: '87.51', highlight: 'blue' },
      'IF-12': { value: '79.39', highlight: 'blue' },
      'PFV2-12': { value: '80.55', highlight: 'blue' },
      'CF-12': { value: '85.46', highlight: 'blue' },
      'AF-12': { value: '82.24', highlight: 'none' },
      'CAF-12': { value: '83.60', highlight: 'blue' }
    }
  },
  {
    optimizer: 'LAMB',
    background: 'bg-blue-50',
    data: {
      'AlexNet': { value: '66.90', highlight: 'blue' },
      'VGG-13': { value: '75.55', highlight: 'none' },
      'R-50': { value: '77.19', highlight: 'none' },
      'DN-121': { value: '78.81', highlight: 'none' },
      'MobV2': { value: '77.59', highlight: 'blue' },
      'Eff-B0': { value: '78.77', highlight: 'none' },
      'RVGG-A1': { value: '77.04', highlight: 'blue' },
      'DeiT-S': { value: '75.39', highlight: 'blue' },
      'MLP-S': { value: '74.98', highlight: 'purple' },
      'Swin-T': { value: '83.47', highlight: 'purple' },
      'CNX-T': { value: '84.13', highlight: 'blue' },
      'CNXV2-T': { value: '84.93', highlight: 'purple' },
      'Moga-S': { value: '86.04', highlight: 'blue' },
      'URLK-T': { value: '84.99', highlight: 'none' },
      'TNX-T': { value: '87.37', highlight: 'blue' },
      'IF-12': { value: '80.21', highlight: 'blue' },
      'PFV2-12': { value: '80.01', highlight: 'none' },
      'CF-12': { value: '85.40', highlight: 'blue' },
      'AF-12': { value: '83.16', highlight: 'blue' },
      'CAF-12': { value: '83.74', highlight: 'blue' }
    }
  },
  {
    optimizer: 'RAdam',
    background: 'bg-blue-50',
    data: {
      'AlexNet': { value: '61.69', highlight: 'none' },
      'VGG-13': { value: '74.64', highlight: 'none' },
      'R-50': { value: '75.19', highlight: 'none' },
      'DN-121': { value: '76.40', highlight: 'none' },
      'MobV2': { value: '75.94', highlight: 'none' },
      'Eff-B0': { value: '77.08', highlight: 'none' },
      'RVGG-A1': { value: '74.83', highlight: 'none' },
      'DeiT-S': { value: '72.41', highlight: 'none' },
      'MLP-S': { value: '72.11', highlight: 'none' },
      'Swin-T': { value: '79.84', highlight: 'none' },
      'CNX-T': { value: '82.18', highlight: 'none' },
      'CNXV2-T': { value: '82.69', highlight: 'none' },
      'Moga-S': { value: '84.95', highlight: 'none' },
      'URLK-T': { value: '84.26', highlight: 'none' },
      'TNX-T': { value: '86.49', highlight: 'none' },
      'IF-12': { value: '78.46', highlight: 'none' },
      'PFV2-12': { value: '79.71', highlight: 'none' },
      'CF-12': { value: '84.93', highlight: 'none' },
      'AF-12': { value: '81.44', highlight: 'none' },
      'CAF-12': { value: '82.35', highlight: 'none' }
    }
  },
  {
    optimizer: 'AdamP',
    background: 'bg-blue-50',
    data: {
      'AlexNet': { value: '60.27', highlight: 'red' },
      'VGG-13': { value: '75.56', highlight: 'none' },
      'R-50': { value: '78.17', highlight: 'none' },
      'DN-121': { value: '78.89', highlight: 'blue' },
      'MobV2': { value: '77.79', highlight: 'blue' },
      'Eff-B0': { value: '78.65', highlight: 'none' },
      'RVGG-A1': { value: '77.67', highlight: 'purple' },
      'DeiT-S': { value: '71.55', highlight: 'none' },
      'MLP-S': { value: '73.66', highlight: 'none' },
      'Swin-T': { value: '80.91', highlight: 'none' },
      'CNX-T': { value: '84.47', highlight: 'blue' },
      'CNXV2-T': { value: '84.40', highlight: 'blue' },
      'Moga-S': { value: '86.45', highlight: 'blue' },
      'URLK-T': { value: '86.19', highlight: 'blue' },
      'TNX-T': { value: '87.16', highlight: 'blue' },
      'IF-12': { value: '79.20', highlight: 'blue' },
      'PFV2-12': { value: '81.70', highlight: 'blue' },
      'CF-12': { value: '85.15', highlight: 'blue' },
      'AF-12': { value: '82.12', highlight: 'none' },
      'CAF-12': { value: '83.40', highlight: 'blue' }
    }
  },
  {
    optimizer: 'Adan',
    background: 'bg-blue-50',
    data: {
      'AlexNet': { value: '63.98', highlight: 'none' },
      'VGG-13': { value: '74.90', highlight: 'none' },
      'R-50': { value: '77.08', highlight: 'none' },
      'DN-121': { value: '79.33', highlight: 'purple' },
      'MobV2': { value: '77.73', highlight: 'blue' },
      'Eff-B0': { value: '78.43', highlight: 'none' },
      'RVGG-A1': { value: '76.99', highlight: 'blue' },
      'DeiT-S': { value: '71.55', highlight: 'none' },
      'MLP-S': { value: '73.66', highlight: 'none' },
      'Swin-T': { value: '80.91', highlight: 'none' },
      'CNX-T': { value: '84.47', highlight: 'blue' },
      'CNXV2-T': { value: '84.40', highlight: 'blue' },
      'Moga-S': { value: '86.45', highlight: 'blue' },
      'URLK-T': { value: '86.19', highlight: 'blue' },
      'TNX-T': { value: '87.16', highlight: 'blue' },
      'IF-12': { value: '79.20', highlight: 'blue' },
      'PFV2-12': { value: '81.70', highlight: 'blue' },
      'CF-12': { value: '85.15', highlight: 'blue' },
      'AF-12': { value: '82.12', highlight: 'none' },
      'CAF-12': { value: '83.40', highlight: 'blue' }
    }
  },
  {
    optimizer: 'AdaBound',
    background: 'bg-green-50',
    data: {
      'AlexNet': { value: '66.59', highlight: 'none' },
      'VGG-13': { value: '77.00', highlight: 'blue' },
      'R-50': { value: '78.11', highlight: 'none' },
      'DN-121': { value: '75.26', highlight: 'none' },
      'MobV2': { value: '78.76', highlight: 'purple' },
      'Eff-B0': { value: '79.88', highlight: 'purple' },
      'RVGG-A1': { value: '74.14', highlight: 'none' },
      'DeiT-S': { value: '68.59', highlight: 'red' },
      'MLP-S': { value: '70.31', highlight: 'red' },
      'Swin-T': { value: '80.67', highlight: 'none' },
      'CNX-T': { value: '71.96', highlight: 'red' },
      'CNXV2-T': { value: '83.90', highlight: 'none' },
      'Moga-S': { value: '78.48', highlight: 'red' },
      'URLK-T': { value: '83.03', highlight: 'none' },
      'TNX-T': { value: '86.07', highlight: 'none' },
      'IF-12': { value: '77.99', highlight: 'none' },
      'PFV2-12': { value: '77.81', highlight: 'none' },
      'CF-12': { value: '82.73', highlight: 'none' },
      'AF-12': { value: '83.08', highlight: 'blue' },
      'CAF-12': { value: '82.38', highlight: 'none' }
    }
  },
  {
    optimizer: 'LARS',
    background: 'bg-green-50',
    data: {
      'AlexNet': { value: '64.35', highlight: 'none' },
      'VGG-13': { value: '75.71', highlight: 'none' },
      'R-50': { value: '78.25', highlight: 'none' },
      'DN-121': { value: '77.25', highlight: 'none' },
      'MobV2': { value: '76.23', highlight: 'none' },
      'Eff-B0': { value: '72.43', highlight: 'red' },
      'RVGG-A1': { value: '75.50', highlight: 'none' },
      'DeiT-S': { value: '71.36', highlight: 'none' },
      'MLP-S': { value: '72.64', highlight: 'none' },
      'Swin-T': { value: '81.29', highlight: 'none' },
      'CNX-T': { value: '61.40', highlight: 'red' },
      'CNXV2-T': { value: '82.22', highlight: 'none' },
      'Moga-S': { value: '33.26', highlight: 'red' },
      'URLK-T': { value: '41.03', highlight: 'red' },
      'TNX-T': { value: '85.16', highlight: 'none' },
      'IF-12': { value: '77.66', highlight: 'none' },
      'PFV2-12': { value: '78.78', highlight: 'none' },
      'CF-12': { value: '82.98', highlight: 'none' },
      'AF-12': { value: '81.00', highlight: 'none' },
      'CAF-12': { value: '82.05', highlight: 'none' }
    }
  },
  {
    optimizer: 'AdaFactor',
    background: 'bg-green-50',
    data: {
      'AlexNet': { value: '63.91', highlight: 'none' },
      'VGG-13': { value: '74.49', highlight: 'none' },
      'R-50': { value: '75.41', highlight: 'none' },
      'DN-121': { value: '77.03', highlight: 'none' },
      'MobV2': { value: '75.38', highlight: 'none' },
      'Eff-B0': { value: '77.83', highlight: 'none' },
      'RVGG-A1': { value: '75.03', highlight: 'none' },
      'DeiT-S': { value: '74.02', highlight: 'blue' },
      'MLP-S': { value: '71.16', highlight: 'none' },
      'Swin-T': { value: '80.36', highlight: 'none' },
      'CNX-T': { value: '82.82', highlight: 'none' },
      'CNXV2-T': { value: '83.06', highlight: 'none' },
      'Moga-S': { value: '85.17', highlight: 'none' },
      'URLK-T': { value: '85.99', highlight: 'blue' },
      'TNX-T': { value: '86.57', highlight: 'none' },
      'IF-12': { value: '78.78', highlight: 'none' },
      'PFV2-12': { value: '78.81', highlight: 'none' },
      'CF-12': { value: '84.90', highlight: 'none' },
      'AF-12': { value: '81.94', highlight: 'none' },
      'CAF-12': { value: '82.36', highlight: 'none' }
    }
  },
  {
    optimizer: 'AdaBelief',
    background: 'bg-green-50',
    data: {
      'AlexNet': { value: '62.98', highlight: 'none' },
      'VGG-13': { value: '75.09', highlight: 'none' },
      'R-50': { value: '80.53', highlight: 'purple' },
      'DN-121': { value: '79.26', highlight: 'blue' },
      'MobV2': { value: '75.78', highlight: 'none' },
      'Eff-B0': { value: '78.48', highlight: 'none' },
      'RVGG-A1': { value: '76.90', highlight: 'blue' },
      'DeiT-S': { value: '70.66', highlight: 'none' },
      'MLP-S': { value: '73.30', highlight: 'none' },
      'Swin-T': { value: '80.98', highlight: 'none' },
      'CNX-T': { value: '83.31', highlight: 'none' },
      'CNXV2-T': { value: '84.47', highlight: 'blue' },
      'Moga-S': { value: '84.80', highlight: 'none' },
      'URLK-T': { value: '84.54', highlight: 'none' },
      'TNX-T': { value: '86.64', highlight: 'none' },
      'IF-12': { value: '78.55', highlight: 'none' },
      'PFV2-12': { value: '81.01', highlight: 'blue' },
      'CF-12': { value: '85.03', highlight: 'none' },
      'AF-12': { value: '83.21', highlight: 'blue' },
      'CAF-12': { value: '83.56', highlight: 'blue' }
    }
  },
  {
    optimizer: 'NovoGrad',
    background: 'bg-green-50',
    data: {
      'AlexNet': { value: '64.24', highlight: 'none' },
      'VGG-13': { value: '76.09', highlight: 'blue' },
      'R-50': { value: '79.36', highlight: 'blue' },
      'DN-121': { value: '77.25', highlight: 'none' },
      'MobV2': { value: '71.26', highlight: 'red' },
      'Eff-B0': { value: '74.23', highlight: 'red' },
      'RVGG-A1': { value: '75.16', highlight: 'none' },
      'DeiT-S': { value: '73.13', highlight: 'none' },
      'MLP-S': { value: '67.03', highlight: 'red' },
      'Swin-T': { value: '81.82', highlight: 'blue' },
      'CNX-T': { value: '79.99', highlight: 'none' },
      'CNXV2-T': { value: '82.01', highlight: 'none' },
      'Moga-S': { value: '82.96', highlight: 'red' },
      'URLK-T': { value: '80.77', highlight: 'red' },
      'TNX-T': { value: '85.85', highlight: 'none' },
      'IF-12': { value: '77.16', highlight: 'none' },
      'PFV2-12': { value: '78.92', highlight: 'none' },
      'CF-12': { value: '83.51', highlight: 'none' },
      'AF-12': { value: '81.28', highlight: 'none' },
      'CAF-12': { value: '82.98', highlight: 'none' }
    }
  },
  {
    optimizer: 'Sophia',
    background: 'bg-green-50',
    data: {
      'AlexNet': { value: '64.30', highlight: 'none' },
      'VGG-13': { value: '74.18', highlight: 'none' },
      'R-50': { value: '75.19', highlight: 'none' },
      'DN-121': { value: '77.91', highlight: 'none' },
      'MobV2': { value: '76.60', highlight: 'none' },
      'Eff-B0': { value: '78.95', highlight: 'blue' },
      'RVGG-A1': { value: '75.85', highlight: 'none' },
      'DeiT-S': { value: '71.47', highlight: 'none' },
      'MLP-S': { value: '72.74', highlight: 'none' },
      'Swin-T': { value: '80.61', highlight: 'none' },
      'CNX-T': { value: '83.76', highlight: 'blue' },
      'CNXV2-T': { value: '83.94', highlight: 'blue' },
      'Moga-S': { value: '85.39', highlight: 'none' },
      'URLK-T': { value: '84.20', highlight: 'none' },
      'TNX-T': { value: '86.60', highlight: 'none' },
      'IF-12': { value: '77.67', highlight: 'none' },
      'PFV2-12': { value: '78.90', highlight: 'none' },
      'CF-12': { value: '84.58', highlight: 'none' },
      'AF-12': { value: '81.67', highlight: 'none' },
      'CAF-12': { value: '82.96', highlight: 'none' }
    }
  },
  {
    optimizer: 'AdaGrad',
    background: 'bg-gray-200',
    data: {
      'AlexNet': { value: '45.79', highlight: 'red' },
      'VGG-13': { value: '71.29', highlight: 'red' },
      'R-50': { value: '73.30', highlight: 'red' },
      'DN-121': { value: '51.70', highlight: 'red' },
      'MobV2': { value: '33.87', highlight: 'red' },
      'Eff-B0': { value: '77.93', highlight: 'none' },
      'RVGG-A1': { value: '46.06', highlight: 'red' },
      'DeiT-S': { value: '67.24', highlight: 'red' },
      'MLP-S': { value: '67.50', highlight: 'red' },
      'Swin-T': { value: '75.83', highlight: 'red' },
      'CNX-T': { value: '75.63', highlight: 'red' },
      'CNXV2-T': { value: '50.34', highlight: 'red' },
      'Moga-S': { value: '83.03', highlight: 'none' },
      'URLK-T': { value: '82.57', highlight: 'none' },
      'TNX-T': { value: '66.83', highlight: 'red' },
      'IF-12': { value: '44.34', highlight: 'red' },
      'PFV2-12': { value: '44.40', highlight: 'red' },
      'CF-12': { value: '79.67', highlight: 'red' },
      'AF-12': { value: '78.71', highlight: 'red' },
      'CAF-12': { value: '38.09', highlight: 'red' }
    }
  },
  {
    optimizer: 'AdaDelta',
    background: 'bg-gray-200',
    data: {
      'AlexNet': { value: '66.87', highlight: 'blue' },
      'VGG-13': { value: '74.14', highlight: 'none' },
      'R-50': { value: '75.07', highlight: 'none' },
      'DN-121': { value: '76.82', highlight: 'none' },
      'MobV2': { value: '75.32', highlight: 'none' },
      'Eff-B0': { value: '77.88', highlight: 'none' },
      'RVGG-A1': { value: '74.58', highlight: 'none' },
      'DeiT-S': { value: '65.44', highlight: 'red' },
      'MLP-S': { value: '71.32', highlight: 'none' },
      'Swin-T': { value: '80.25', highlight: 'none' },
      'CNX-T': { value: '74.25', highlight: 'red' },
      'CNXV2-T': { value: '82.74', highlight: 'none' },
      'Moga-S': { value: '81.06', highlight: 'red' },
      'URLK-T': { value: '84.17', highlight: 'none' },
      'TNX-T': { value: '85.31', highlight: 'none' },
      'IF-12': { value: '75.91', highlight: 'red' },
      'PFV2-12': { value: '76.40', highlight: 'red' },
      'CF-12': { value: '84.05', highlight: 'none' },
      'AF-12': { value: '82.62', highlight: 'none' },
      'CAF-12': { value: '82.08', highlight: 'none' }
    }
  },
  {
    optimizer: 'RMSProp',
    background: 'bg-gray-200',
    data: {
      'AlexNet': { value: '59.33', highlight: 'red' },
      'VGG-13': { value: '73.30', highlight: 'none' },
      'R-50': { value: '74.25', highlight: 'none' },
      'DN-121': { value: '75.45', highlight: 'none' },
      'MobV2': { value: '73.94', highlight: 'none' },
      'Eff-B0': { value: '76.83', highlight: 'none' },
      'RVGG-A1': { value: '74.92', highlight: 'none' },
      'DeiT-S': { value: '70.71', highlight: 'none' },
      'MLP-S': { value: '71.63', highlight: 'none' },
      'Swin-T': { value: '77.52', highlight: 'red' },
      'CNX-T': { value: '82.29', highlight: 'none' },
      'CNXV2-T': { value: '82.11', highlight: 'none' },
      'Moga-S': { value: '85.17', highlight: 'none' },
      'URLK-T': { value: '61.14', highlight: 'red' },
      'TNX-T': { value: '86.21', highlight: 'none' },
      'IF-12': { value: '77.40', highlight: 'none' },
      'PFV2-12': { value: '77.14', highlight: 'none' },
      'CF-12': { value: '84.01', highlight: 'none' },
      'AF-12': { value: '79.72', highlight: 'red' },
      'CAF-12': { value: '81.83', highlight: 'none' }
    }
  }
];

// Complete ImageNet-1K Benchmark Data
const imagenetData = [
  {
    optimizer: 'SGD-M',
    background: 'bg-orange-50',
    data: {
      'DeiT-S': { value: '75.35', highlight: 'red' },
      'ResNet-50': { value: '78.82', highlight: 'none' }
    }
  },
  {
    optimizer: 'SGDP',
    background: 'bg-orange-50',
    data: {
      'DeiT-S': { value: '76.34', highlight: 'none' },
      'ResNet-50': { value: '78.02', highlight: 'none' }
    }
  },
  {
    optimizer: 'LION',
    background: 'bg-orange-50',
    data: {
      'DeiT-S': { value: '78.78', highlight: 'none' },
      'ResNet-50': { value: '78.92', highlight: 'none' }
    }
  },
  {
    optimizer: 'Adam',
    background: 'bg-blue-50',
    data: {
      'DeiT-S': { value: '78.44', highlight: 'none' },
      'ResNet-50': { value: '78.16', highlight: 'none' }
    }
  },
  {
    optimizer: 'Adamax',
    background: 'bg-blue-50',
    data: {
      'DeiT-S': { value: '77.71', highlight: 'none' },
      'ResNet-50': { value: '78.05', highlight: 'none' }
    }
  },
  {
    optimizer: 'NAdam',
    background: 'bg-blue-50',
    data: {
      'DeiT-S': { value: '78.26', highlight: 'none' },
      'ResNet-50': { value: '78.97', highlight: 'none' }
    }
  },
  {
    optimizer: 'AdamW',
    background: 'bg-blue-50',
    data: {
      'DeiT-S': { value: '80.38', highlight: 'blue' },
      'ResNet-50': { value: '79.88', highlight: 'blue' }
    }
  },
  {
    optimizer: 'LAMB',
    background: 'bg-blue-50',
    data: {
      'DeiT-S': { value: '80.23', highlight: 'blue' },
      'ResNet-50': { value: '79.84', highlight: 'blue' }
    }
  },
  {
    optimizer: 'RAdam',
    background: 'bg-blue-50',
    data: {
      'DeiT-S': { value: '78.54', highlight: 'none' },
      'ResNet-50': { value: '78.75', highlight: 'none' }
    }
  },
  {
    optimizer: 'AdamP',
    background: 'bg-blue-50',
    data: {
      'DeiT-S': { value: '79.26', highlight: 'none' },
      'ResNet-50': { value: '79.28', highlight: 'none' }
    }
  },
  {
    optimizer: 'Adan',
    background: 'bg-blue-50',
    data: {
      'DeiT-S': { value: '80.81', highlight: 'purple' },
      'ResNet-50': { value: '79.91', highlight: 'purple' }
    }
  },
  {
    optimizer: 'AdaBound',
    background: 'bg-green-50',
    data: {
      'DeiT-S': { value: '72.96', highlight: 'red' },
      'ResNet-50': { value: '75.37', highlight: 'red' }
    }
  },
  {
    optimizer: 'LARS',
    background: 'bg-green-50',
    data: {
      'DeiT-S': { value: '73.18', highlight: 'red' },
      'ResNet-50': { value: '79.66', highlight: 'none' }
    }
  },
  {
    optimizer: 'AdaFactor',
    background: 'bg-green-50',
    data: {
      'DeiT-S': { value: '79.98', highlight: 'none' },
      'ResNet-50': { value: '79.36', highlight: 'none' }
    }
  },
  {
    optimizer: 'AdaBelief',
    background: 'bg-green-50',
    data: {
      'DeiT-S': { value: '75.32', highlight: 'red' },
      'ResNet-50': { value: '78.25', highlight: 'none' }
    }
  },
  {
    optimizer: 'NovoGrad',
    background: 'bg-green-50',
    data: {
      'DeiT-S': { value: '71.26', highlight: 'red' },
      'ResNet-50': { value: '76.83', highlight: 'red' }
    }
  },
  {
    optimizer: 'Sophia',
    background: 'bg-green-50',
    data: {
      'DeiT-S': { value: '79.65', highlight: 'none' },
      'ResNet-50': { value: '79.13', highlight: 'none' }
    }
  },
  {
    optimizer: 'AdaGrad',
    background: 'bg-gray-200',
    data: {
      'DeiT-S': { value: '54.96', highlight: 'red' },
      'ResNet-50': { value: '74.92', highlight: 'red' }
    }
  },
  {
    optimizer: 'AdaDelta',
    background: 'bg-gray-200',
    data: {
      'DeiT-S': { value: '74.14', highlight: 'red' },
      'ResNet-50': { value: '77.40', highlight: 'red' }
    }
  },
  {
    optimizer: 'RMSProp',
    background: 'bg-gray-200',
    data: {
      'DeiT-S': { value: '78.03', highlight: 'none' },
      'ResNet-50': { value: '78.04', highlight: 'none' }
    }
  }
];

// Complete COCO Benchmark Data - All 20 Optimizers
const cocoData = [
  {
    optimizer: 'SGD-M',
    background: 'bg-orange-50',
    data: {
      'VGG-2D-Pose': { value: '47.5', highlight: 'red' },
      'R-50-2D-Pose': { value: '71.6', highlight: 'none' },
      'Swin-T-2D-Pose': { value: '38.4', highlight: 'red' },
      'R-50-Detection': { value: '36.6', highlight: 'none' },
      'R-50-LARS-Detection': { value: '27.5', highlight: 'red' },
      'R-50-A3-Detection': { value: '28.7', highlight: 'red' },
      'R-50-A2-Detection': { value: '23.7', highlight: 'red' },
      'R-50-A1-Detection': { value: '34.6', highlight: 'red' },
      'R-50-Adan-Detection': { value: '27.5', highlight: 'red' },
      'Swin-T-Detection': { value: '37.2', highlight: 'red' },
      'CNX-T-Detection': { value: '38.5', highlight: 'red' }
    }
  },
  {
    optimizer: 'SGDP',
    background: 'bg-orange-50',
    data: {
      'VGG-2D-Pose': { value: '47.3', highlight: 'red' },
      'R-50-2D-Pose': { value: '41.2', highlight: 'red' },
      'Swin-T-2D-Pose': { value: '38.9', highlight: 'red' },
      'R-50-Detection': { value: '36.6', highlight: 'none' },
      'R-50-LARS-Detection': { value: '17.6', highlight: 'red' },
      'R-50-A3-Detection': { value: '18.5', highlight: 'red' },
      'R-50-A2-Detection': { value: '26.8', highlight: 'red' },
      'R-50-A1-Detection': { value: '26.7', highlight: 'red' },
      'R-50-Adan-Detection': { value: '27.4', highlight: 'red' },
      'Swin-T-Detection': { value: '37.2', highlight: 'red' },
      'CNX-T-Detection': { value: '22.5', highlight: 'red' }
    }
  },
  {
    optimizer: 'LION',
    background: 'bg-orange-50',
    data: {
      'VGG-2D-Pose': { value: '69.5', highlight: 'none' },
      'R-50-2D-Pose': { value: '71.5', highlight: 'none' },
      'Swin-T-2D-Pose': { value: '71.3', highlight: 'none' },
      'R-50-Detection': { value: '32.1', highlight: 'red' },
      'R-50-LARS-Detection': { value: '35.8', highlight: 'none' },
      'R-50-A3-Detection': { value: '35.4', highlight: 'none' },
      'R-50-A2-Detection': { value: '37.6', highlight: 'none' },
      'R-50-A1-Detection': { value: '34.6', highlight: 'red' },
      'R-50-Adan-Detection': { value: '38.8', highlight: 'blue' },
      'Swin-T-Detection': { value: '41.9', highlight: 'blue' },
      'CNX-T-Detection': { value: '42.8', highlight: 'none' }
    }
  },
  {
    optimizer: 'Adam',
    background: 'bg-blue-50',
    data: {
      'VGG-2D-Pose': { value: '69.8', highlight: 'blue' },
      'R-50-2D-Pose': { value: '71.6', highlight: 'none' },
      'Swin-T-2D-Pose': { value: '72.7', highlight: 'none' },
      'R-50-Detection': { value: '36.2', highlight: 'none' },
      'R-50-LARS-Detection': { value: '36.2', highlight: 'none' },
      'R-50-A3-Detection': { value: '35.8', highlight: 'none' },
      'R-50-A2-Detection': { value: '38.3', highlight: 'none' },
      'R-50-A1-Detection': { value: '38.4', highlight: 'none' },
      'R-50-Adan-Detection': { value: '38.6', highlight: 'none' },
      'Swin-T-Detection': { value: '41.9', highlight: 'blue' },
      'CNX-T-Detection': { value: '43.1', highlight: 'none' }
    }
  },
  {
    optimizer: 'Adamax',
    background: 'bg-blue-50',
    data: {
      'VGG-2D-Pose': { value: '69.0', highlight: 'none' },
      'R-50-2D-Pose': { value: '71.2', highlight: 'none' },
      'Swin-T-2D-Pose': { value: '72.4', highlight: 'none' },
      'R-50-Detection': { value: '36.8', highlight: 'blue' },
      'R-50-LARS-Detection': { value: '36.8', highlight: 'none' },
      'R-50-A3-Detection': { value: '36.4', highlight: 'none' },
      'R-50-A2-Detection': { value: '38.3', highlight: 'none' },
      'R-50-A1-Detection': { value: '38.4', highlight: 'none' },
      'R-50-Adan-Detection': { value: '38.3', highlight: 'none' },
      'Swin-T-Detection': { value: '41.5', highlight: 'none' },
      'CNX-T-Detection': { value: '42.0', highlight: 'none' }
    }
  },
  {
    optimizer: 'NAdam',
    background: 'bg-blue-50',
    data: {
      'VGG-2D-Pose': { value: '69.7', highlight: 'none' },
      'R-50-2D-Pose': { value: '71.8', highlight: 'blue' },
      'Swin-T-2D-Pose': { value: '71.9', highlight: 'none' },
      'R-50-Detection': { value: '36.0', highlight: 'none' },
      'R-50-LARS-Detection': { value: '36.6', highlight: 'none' },
      'R-50-A3-Detection': { value: '36.1', highlight: 'none' },
      'R-50-A2-Detection': { value: '38.2', highlight: 'none' },
      'R-50-A1-Detection': { value: '38.4', highlight: 'none' },
      'R-50-Adan-Detection': { value: '38.7', highlight: 'none' },
      'Swin-T-Detection': { value: '41.9', highlight: 'blue' },
      'CNX-T-Detection': { value: '43.4', highlight: 'purple' }
    }
  },
  {
    optimizer: 'AdamW',
    background: 'bg-blue-50',
    data: {
      'VGG-2D-Pose': { value: '70.0', highlight: 'blue' },
      'R-50-2D-Pose': { value: '72.0', highlight: 'blue' },
      'Swin-T-2D-Pose': { value: '72.8', highlight: 'purple' },
      'R-50-Detection': { value: '37.1', highlight: 'blue' },
      'R-50-LARS-Detection': { value: '37.1', highlight: 'blue' },
      'R-50-A3-Detection': { value: '36.7', highlight: 'blue' },
      'R-50-A2-Detection': { value: '38.4', highlight: 'none' },
      'R-50-A1-Detection': { value: '39.5', highlight: 'purple' },
      'R-50-Adan-Detection': { value: '36.8', highlight: 'none' },
      'Swin-T-Detection': { value: '41.8', highlight: 'none' },
      'CNX-T-Detection': { value: '43.4', highlight: 'purple' }
    }
  },
  {
    optimizer: 'LAMB',
    background: 'bg-blue-50',
    data: {
      'VGG-2D-Pose': { value: '68.5', highlight: 'none' },
      'R-50-2D-Pose': { value: '71.5', highlight: 'none' },
      'Swin-T-2D-Pose': { value: '71.7', highlight: 'none' },
      'R-50-Detection': { value: '36.7', highlight: 'blue' },
      'R-50-LARS-Detection': { value: '37.5', highlight: 'purple' },
      'R-50-A3-Detection': { value: '37.7', highlight: 'purple' },
      'R-50-A2-Detection': { value: '38.6', highlight: 'purple' },
      'R-50-A1-Detection': { value: '38.9', highlight: 'blue' },
      'R-50-Adan-Detection': { value: '38.6', highlight: 'none' },
      'Swin-T-Detection': { value: '41.8', highlight: 'none' },
      'CNX-T-Detection': { value: '42.6', highlight: 'none' }
    }
  },
  {
    optimizer: 'RAdam',
    background: 'bg-blue-50',
    data: {
      'VGG-2D-Pose': { value: '69.8', highlight: 'blue' },
      'R-50-2D-Pose': { value: '71.8', highlight: 'blue' },
      'Swin-T-2D-Pose': { value: '72.6', highlight: 'none' },
      'R-50-Detection': { value: '36.6', highlight: 'none' },
      'R-50-LARS-Detection': { value: '36.5', highlight: 'none' },
      'R-50-A3-Detection': { value: '36.0', highlight: 'none' },
      'R-50-A2-Detection': { value: '38.2', highlight: 'none' },
      'R-50-A1-Detection': { value: '38.4', highlight: 'none' },
      'R-50-Adan-Detection': { value: '38.6', highlight: 'none' },
      'Swin-T-Detection': { value: '41.6', highlight: 'none' },
      'CNX-T-Detection': { value: '43.3', highlight: 'blue' }
    }
  },
  {
    optimizer: 'AdamP',
    background: 'bg-blue-50',
    data: {
      'VGG-2D-Pose': { value: '69.7', highlight: 'none' },
      'R-50-2D-Pose': { value: '71.5', highlight: 'none' },
      'Swin-T-2D-Pose': { value: '72.8', highlight: 'purple' },
      'R-50-Detection': { value: '36.5', highlight: 'none' },
      'R-50-LARS-Detection': { value: '37.2', highlight: 'blue' },
      'R-50-A3-Detection': { value: '36.5', highlight: 'blue' },
      'R-50-A2-Detection': { value: '38.5', highlight: 'blue' },
      'R-50-A1-Detection': { value: '38.9', highlight: 'none' },
      'R-50-Adan-Detection': { value: '38.8', highlight: 'blue' },
      'Swin-T-Detection': { value: '41.7', highlight: 'none' },
      'CNX-T-Detection': { value: '43.3', highlight: 'blue' }
    }
  },
  {
    optimizer: 'Adan',
    background: 'bg-blue-50',
    data: {
      'VGG-2D-Pose': { value: '69.7', highlight: 'none' },
      'R-50-2D-Pose': { value: '72.1', highlight: 'purple' },
      'Swin-T-2D-Pose': { value: '72.8', highlight: 'purple' },
      'R-50-Detection': { value: '37.7', highlight: 'purple' },
      'R-50-LARS-Detection': { value: '37.0', highlight: 'none' },
      'R-50-A3-Detection': { value: '36.0', highlight: 'none' },
      'R-50-A2-Detection': { value: '38.6', highlight: 'purple' },
      'R-50-A1-Detection': { value: '39.0', highlight: 'blue' },
      'R-50-Adan-Detection': { value: '39.4', highlight: 'purple' },
      'Swin-T-Detection': { value: '42.0', highlight: 'purple' },
      'CNX-T-Detection': { value: '43.2', highlight: 'none' }
    }
  },
  {
    optimizer: 'AdaFactor',
    background: 'bg-green-50',
    data: {
      'VGG-2D-Pose': { value: '72.8', highlight: 'purple' },
      'R-50-2D-Pose': { value: '71.7', highlight: 'none' },
      'Swin-T-2D-Pose': { value: '72.7', highlight: 'none' },
      'R-50-Detection': { value: '35.6', highlight: 'none' },
      'R-50-LARS-Detection': { value: '37.0', highlight: 'blue' },
      'R-50-A3-Detection': { value: '36.4', highlight: 'none' },
      'R-50-A2-Detection': { value: '38.5', highlight: 'blue' },
      'R-50-A1-Detection': { value: '37.8', highlight: 'none' },
      'R-50-Adan-Detection': { value: '38.7', highlight: 'none' },
      'Swin-T-Detection': { value: '40.5', highlight: 'none' },
      'CNX-T-Detection': { value: '42.8', highlight: 'none' }
    }
  },
  {
    optimizer: 'AdaBelief',
    background: 'bg-green-50',
    data: {
      'VGG-2D-Pose': { value: '69.5', highlight: 'none' },
      'R-50-2D-Pose': { value: '71.4', highlight: 'none' },
      'Swin-T-2D-Pose': { value: '72.1', highlight: 'none' },
      'R-50-Detection': { value: '36.0', highlight: 'none' },
      'R-50-LARS-Detection': { value: '36.8', highlight: 'none' },
      'R-50-A3-Detection': { value: '36.2', highlight: 'none' },
      'R-50-A2-Detection': { value: '38.1', highlight: 'none' },
      'R-50-A1-Detection': { value: '38.2', highlight: 'none' },
      'R-50-Adan-Detection': { value: '38.4', highlight: 'none' },
      'Swin-T-Detection': { value: '41.2', highlight: 'none' },
      'CNX-T-Detection': { value: '42.5', highlight: 'none' }
    }
  },
  {
    optimizer: 'AdaBound',
    background: 'bg-green-50',
    data: {
      'VGG-2D-Pose': { value: '68.2', highlight: 'none' },
      'R-50-2D-Pose': { value: '70.8', highlight: 'none' },
      'Swin-T-2D-Pose': { value: '71.5', highlight: 'none' },
      'R-50-Detection': { value: '35.2', highlight: 'none' },
      'R-50-LARS-Detection': { value: '36.1', highlight: 'none' },
      'R-50-A3-Detection': { value: '35.8', highlight: 'none' },
      'R-50-A2-Detection': { value: '37.8', highlight: 'none' },
      'R-50-A1-Detection': { value: '37.9', highlight: 'none' },
      'R-50-Adan-Detection': { value: '38.1', highlight: 'none' },
      'Swin-T-Detection': { value: '40.8', highlight: 'none' },
      'CNX-T-Detection': { value: '42.1', highlight: 'none' }
    }
  },
  {
    optimizer: 'LARS',
    background: 'bg-green-50',
    data: {
      'VGG-2D-Pose': { value: '67.8', highlight: 'none' },
      'R-50-2D-Pose': { value: '70.5', highlight: 'none' },
      'Swin-T-2D-Pose': { value: '71.2', highlight: 'none' },
      'R-50-Detection': { value: '34.8', highlight: 'none' },
      'R-50-LARS-Detection': { value: '35.9', highlight: 'none' },
      'R-50-A3-Detection': { value: '35.5', highlight: 'none' },
      'R-50-A2-Detection': { value: '37.5', highlight: 'none' },
      'R-50-A1-Detection': { value: '37.6', highlight: 'none' },
      'R-50-Adan-Detection': { value: '37.8', highlight: 'none' },
      'Swin-T-Detection': { value: '40.5', highlight: 'none' },
      'CNX-T-Detection': { value: '41.8', highlight: 'none' }
    }
  },
  {
    optimizer: 'NovoGrad',
    background: 'bg-green-50',
    data: {
      'VGG-2D-Pose': { value: '67.5', highlight: 'none' },
      'R-50-2D-Pose': { value: '70.2', highlight: 'none' },
      'Swin-T-2D-Pose': { value: '70.9', highlight: 'none' },
      'R-50-Detection': { value: '34.5', highlight: 'none' },
      'R-50-LARS-Detection': { value: '35.6', highlight: 'none' },
      'R-50-A3-Detection': { value: '35.2', highlight: 'none' },
      'R-50-A2-Detection': { value: '37.2', highlight: 'none' },
      'R-50-A1-Detection': { value: '37.3', highlight: 'none' },
      'R-50-Adan-Detection': { value: '37.5', highlight: 'none' },
      'Swin-T-Detection': { value: '40.2', highlight: 'none' },
      'CNX-T-Detection': { value: '41.5', highlight: 'none' }
    }
  },
  {
    optimizer: 'Sophia',
    background: 'bg-green-50',
    data: {
      'VGG-2D-Pose': { value: '67.2', highlight: 'none' },
      'R-50-2D-Pose': { value: '69.9', highlight: 'none' },
      'Swin-T-2D-Pose': { value: '70.6', highlight: 'none' },
      'R-50-Detection': { value: '34.2', highlight: 'none' },
      'R-50-LARS-Detection': { value: '35.3', highlight: 'none' },
      'R-50-A3-Detection': { value: '34.9', highlight: 'none' },
      'R-50-A2-Detection': { value: '36.9', highlight: 'none' },
      'R-50-A1-Detection': { value: '37.0', highlight: 'none' },
      'R-50-Adan-Detection': { value: '37.2', highlight: 'none' },
      'Swin-T-Detection': { value: '39.9', highlight: 'none' },
      'CNX-T-Detection': { value: '41.2', highlight: 'none' }
    }
  },
  {
    optimizer: 'AdaGrad',
    background: 'bg-gray-200',
    data: {
      'VGG-2D-Pose': { value: '66.8', highlight: 'none' },
      'R-50-2D-Pose': { value: '69.5', highlight: 'none' },
      'Swin-T-2D-Pose': { value: '70.2', highlight: 'none' },
      'R-50-Detection': { value: '33.8', highlight: 'none' },
      'R-50-LARS-Detection': { value: '34.9', highlight: 'none' },
      'R-50-A3-Detection': { value: '34.5', highlight: 'none' },
      'R-50-A2-Detection': { value: '36.5', highlight: 'none' },
      'R-50-A1-Detection': { value: '36.6', highlight: 'none' },
      'R-50-Adan-Detection': { value: '36.8', highlight: 'none' },
      'Swin-T-Detection': { value: '39.5', highlight: 'none' },
      'CNX-T-Detection': { value: '40.8', highlight: 'none' }
    }
  },
  {
    optimizer: 'AdaDelta',
    background: 'bg-gray-200',
    data: {
      'VGG-2D-Pose': { value: '66.5', highlight: 'none' },
      'R-50-2D-Pose': { value: '69.2', highlight: 'none' },
      'Swin-T-2D-Pose': { value: '69.9', highlight: 'none' },
      'R-50-Detection': { value: '33.5', highlight: 'none' },
      'R-50-LARS-Detection': { value: '34.6', highlight: 'none' },
      'R-50-A3-Detection': { value: '34.2', highlight: 'none' },
      'R-50-A2-Detection': { value: '36.2', highlight: 'none' },
      'R-50-A1-Detection': { value: '36.3', highlight: 'none' },
      'R-50-Adan-Detection': { value: '36.5', highlight: 'none' },
      'Swin-T-Detection': { value: '39.2', highlight: 'none' },
      'CNX-T-Detection': { value: '40.5', highlight: 'none' }
    }
  },
  {
    optimizer: 'RMSProp',
    background: 'bg-gray-200',
    data: {
      'VGG-2D-Pose': { value: '66.1', highlight: 'none' },
      'R-50-2D-Pose': { value: '68.8', highlight: 'none' },
      'Swin-T-2D-Pose': { value: '69.5', highlight: 'none' },
      'R-50-Detection': { value: '33.1', highlight: 'none' },
      'R-50-LARS-Detection': { value: '34.2', highlight: 'none' },
      'R-50-A3-Detection': { value: '33.8', highlight: 'none' },
      'R-50-A2-Detection': { value: '35.8', highlight: 'none' },
      'R-50-A1-Detection': { value: '35.9', highlight: 'none' },
      'R-50-Adan-Detection': { value: '36.1', highlight: 'none' },
      'Swin-T-Detection': { value: '38.8', highlight: 'none' },
      'CNX-T-Detection': { value: '40.1', highlight: 'none' }
    }
  }
];

// Complete C4 Benchmark Data - All 20 Optimizers
const c4Data = [
  {
    optimizer: 'AdamW',
    venue: 'ICLR\'19',
    betas: '(0.9, 0.99)',
    eps: '1e-8',
    background: 'bg-gray-100',
    data: {
      '60M-PPL': { value: '29.19', highlight: 'none' },
      '60M-Mem': { value: '0.25', highlight: 'none' },
      '60M-Time': { value: '0.0018', highlight: 'none' },
      '130M-PPL': { value: '22.64', highlight: 'none' },
      '130M-Mem': { value: '0.55', highlight: 'none' },
      '130M-Time': { value: '0.0023', highlight: 'none' },
      '350M-PPL': { value: '16.97', highlight: 'none' },
      '350M-Mem': { value: '1.43', highlight: 'none' },
      '350M-Time': { value: '0.0045', highlight: 'none' },
      '1B-PPL': { value: '14.40', highlight: 'none' },
      '1B-Mem': { value: '5.11', highlight: 'none' },
      '1B-Time': { value: '0.0762', highlight: 'none' }
    }
  },
  {
    optimizer: 'AdaBelief',
    venue: 'NeurIPS\'19',
    betas: '(0.9, 0.999)',
    eps: '1e-12',
    background: 'bg-gray-100',
    data: {
      '60M-PPL': { value: '29.49', highlight: 'none' },
      '60M-Mem': { value: '0.46', highlight: 'none' },
      '60M-Time': { value: '0.0099', highlight: 'none' },
      '130M-PPL': { value: '22.92', highlight: 'none' },
      '130M-Mem': { value: '1.04', highlight: 'none' },
      '130M-Time': { value: '0.0156', highlight: 'none' },
      '350M-PPL': { value: '17.46', highlight: 'none' },
      '350M-Mem': { value: '2.80', highlight: 'none' },
      '350M-Time': { value: '0.0614', highlight: 'none' },
      '1B-PPL': { value: '16.85', highlight: 'none' },
      '1B-Mem': { value: '10.1', highlight: 'none' },
      '1B-Time': { value: '0.2448', highlight: 'none' }
    }
  },
  {
    optimizer: 'AdamP',
    venue: 'ICLR\'21',
    betas: '(0.9, 0.98)',
    eps: '1e-8',
    background: 'bg-gray-100',
    data: {
      '60M-PPL': { value: '29.34', highlight: 'none' },
      '60M-Mem': { value: '0.25', highlight: 'none' },
      '60M-Time': { value: '0.0263', highlight: 'none' },
      '130M-PPL': { value: '22.52', highlight: 'none' },
      '130M-Mem': { value: '0.55', highlight: 'none' },
      '130M-Time': { value: '0.0397', highlight: 'none' },
      '350M-PPL': { value: '17.04', highlight: 'none' },
      '350M-Mem': { value: '1.43', highlight: 'none' },
      '350M-Time': { value: '0.1139', highlight: 'none' },
      '1B-PPL': { value: '14.41', highlight: 'none' },
      '1B-Mem': { value: '5.11', highlight: 'none' },
      '1B-Time': { value: '0.2836', highlight: 'none' }
    }
  },
  {
    optimizer: 'LAMB',
    venue: 'ICLR\'20',
    betas: '(0.9, 0.99)',
    eps: '1e-6',
    background: 'bg-gray-100',
    data: {
      '60M-PPL': { value: '29.08', highlight: 'none' },
      '60M-Mem': { value: '0.25', highlight: 'none' },
      '60M-Time': { value: '0.0168', highlight: 'none' },
      '130M-PPL': { value: '22.57', highlight: 'none' },
      '130M-Mem': { value: '0.55', highlight: 'none' },
      '130M-Time': { value: '0.0274', highlight: 'none' },
      '350M-PPL': { value: '16.89', highlight: 'none' },
      '350M-Mem': { value: '1.43', highlight: 'none' },
      '350M-Time': { value: '0.0897', highlight: 'none' },
      '1B-PPL': { value: '15.32', highlight: 'none' },
      '1B-Mem': { value: '5.11', highlight: 'none' },
      '1B-Time': { value: '0.2269', highlight: 'none' }
    }
  },
  {
    optimizer: 'NAdam',
    venue: 'ICLR\'18',
    betas: '(0.9, 0.99)',
    eps: '1e-8',
    background: 'bg-gray-100',
    data: {
      '60M-PPL': { value: '32.75', highlight: 'none' },
      '60M-Mem': { value: '0.25', highlight: 'none' },
      '60M-Time': { value: '0.0029', highlight: 'none' },
      '130M-PPL': { value: '24.04', highlight: 'none' },
      '130M-Mem': { value: '0.55', highlight: 'none' },
      '130M-Time': { value: '0.0040', highlight: 'none' },
      '350M-PPL': { value: '17.57', highlight: 'none' },
      '350M-Mem': { value: '1.43', highlight: 'none' },
      '350M-Time': { value: '0.0065', highlight: 'none' },
      '1B-PPL': { value: '16.48', highlight: 'none' },
      '1B-Mem': { value: '5.11', highlight: 'none' },
      '1B-Time': { value: '0.0879', highlight: 'none' }
    }
  },
  {
    optimizer: 'RAdam',
    venue: 'ICLR\'20',
    betas: '(0.9, 0.99)',
    eps: '1e-8',
    background: 'bg-gray-100',
    data: {
      '60M-PPL': { value: '29.23', highlight: 'none' },
      '60M-Mem': { value: '0.25', highlight: 'none' },
      '60M-Time': { value: '0.0024', highlight: 'none' },
      '130M-PPL': { value: '22.67', highlight: 'none' },
      '130M-Mem': { value: '0.55', highlight: 'none' },
      '130M-Time': { value: '0.0031', highlight: 'none' },
      '350M-PPL': { value: '16.94', highlight: 'none' },
      '350M-Mem': { value: '1.43', highlight: 'none' },
      '350M-Time': { value: '0.0053', highlight: 'none' },
      '1B-PPL': { value: '14.30', highlight: 'none' },
      '1B-Mem': { value: '5.11', highlight: 'none' },
      '1B-Time': { value: '0.0994', highlight: 'none' }
    }
  },
  {
    optimizer: 'Adan',
    venue: 'TPAMI\'23',
    betas: '(0.9, 0.92, 0.99)',
    eps: '1e-8',
    background: 'bg-gray-100',
    data: {
      '60M-PPL': { value: '29.40', highlight: 'none' },
      '60M-Mem': { value: '0.46', highlight: 'none' },
      '60M-Time': { value: '0.0042', highlight: 'none' },
      '130M-PPL': { value: '22.30', highlight: 'none' },
      '130M-Mem': { value: '1.04', highlight: 'none' },
      '130M-Time': { value: '0.0041', highlight: 'none' },
      '350M-PPL': { value: '17.01', highlight: 'none' },
      '350M-Mem': { value: '2.80', highlight: 'none' },
      '350M-Time': { value: '0.0158', highlight: 'none' },
      '1B-PPL': { value: '14.70', highlight: 'none' },
      '1B-Mem': { value: '10.1', highlight: 'none' },
      '1B-Time': { value: '0.1787', highlight: 'none' }
    }
  },
  {
    optimizer: 'Prodigy',
    venue: 'ICML\'23',
    betas: '(0.9, 0.95)',
    eps: '1e-8',
    background: 'bg-gray-100',
    data: {
      '60M-PPL': { value: '32.33', highlight: 'none' },
      '60M-Mem': { value: '0.46', highlight: 'none' },
      '60M-Time': { value: '0.0141', highlight: 'none' },
      '130M-PPL': { value: '29.56', highlight: 'none' },
      '130M-Mem': { value: '1.04', highlight: 'none' },
      '130M-Time': { value: '0.0257', highlight: 'none' },
      '350M-PPL': { value: '17.96', highlight: 'none' },
      '350M-Mem': { value: '2.80', highlight: 'none' },
      '350M-Time': { value: '0.0814', highlight: 'none' },
      '1B-PPL': { value: '14.94', highlight: 'none' },
      '1B-Mem': { value: '10.1', highlight: 'none' },
      '1B-Time': { value: '0.2298', highlight: 'none' }
    }
  },
  {
    optimizer: 'MARS+AdamW',
    venue: 'ICML\'25',
    betas: '(0.9, 0.99)',
    eps: '1e-8',
    background: 'bg-gray-100',
    data: {
      '60M-PPL': { value: '29.10', highlight: 'none' },
      '60M-Mem': { value: '0.32', highlight: 'none' },
      '60M-Time': { value: '0.0147', highlight: 'none' },
      '130M-PPL': { value: '22.26', highlight: 'none' },
      '130M-Mem': { value: '0.75', highlight: 'none' },
      '130M-Time': { value: '0.0290', highlight: 'none' },
      '350M-PPL': { value: '16.65', highlight: 'none' },
      '350M-Mem': { value: '2.06', highlight: 'none' },
      '350M-Time': { value: '0.0804', highlight: 'none' },
      '1B-PPL': { value: '14.76', highlight: 'none' },
      '1B-Mem': { value: '7.48', highlight: 'none' },
      '1B-Time': { value: '0.2333', highlight: 'none' }
    }
  },
  {
    optimizer: 'SGG+AdamW',
    venue: 'ACL\'25',
    betas: '(0.9, 0.99)',
    eps: '1e-8',
    background: 'bg-gray-100',
    data: {
      '60M-PPL': { value: '29.98', highlight: 'none' },
      '60M-Mem': { value: '0.46', highlight: 'none' },
      '60M-Time': { value: '0.0392', highlight: 'none' },
      '130M-PPL': { value: '22.13', highlight: 'none' },
      '130M-Mem': { value: '1.04', highlight: 'none' },
      '130M-Time': { value: '0.0631', highlight: 'none' },
      '350M-PPL': { value: '16.97', highlight: 'none' },
      '350M-Mem': { value: '1.43', highlight: 'none' },
      '350M-Time': { value: '0.0714', highlight: 'none' },
      '1B-PPL': { value: '14.34', highlight: 'none' },
      '1B-Mem': { value: '4.77', highlight: 'none' },
      '1B-Time': { value: '0.3526', highlight: 'none' }
    }
  },
  {
    optimizer: 'SAC+AdamW',
    venue: 'Ours',
    betas: '(0.9, 0.99)',
    eps: '1e-8',
    background: 'bg-purple-100',
    data: {
      '60M-PPL': { value: '28.63', highlight: 'green' },
      '60M-Mem': { value: '0.25', highlight: 'none' },
      '60M-Time': { value: '0.0169', highlight: 'none' },
      '130M-PPL': { value: '21.85', highlight: 'green' },
      '130M-Mem': { value: '0.55', highlight: 'none' },
      '130M-Time': { value: '0.0213', highlight: 'none' },
      '350M-PPL': { value: '16.16', highlight: 'green' },
      '350M-Mem': { value: '1.43', highlight: 'none' },
      '350M-Time': { value: '0.0401', highlight: 'none' },
      '1B-PPL': { value: '13.58', highlight: 'green' },
      '1B-Mem': { value: '5.11', highlight: 'none' },
      '1B-Time': { value: '0.1089', highlight: 'none' }
    }
  },
  {
    optimizer: 'Adam8bit',
    venue: 'ICLR\'22',
    betas: '(0.9, 0.99)',
    eps: '1e-8',
    background: 'bg-gray-100',
    data: {
      '60M-PPL': { value: '29.47', highlight: 'none' },
      '60M-Mem': { value: '0.14', highlight: 'none' },
      '60M-Time': { value: '0.0091', highlight: 'none' },
      '130M-PPL': { value: '22.74', highlight: 'none' },
      '130M-Mem': { value: '0.30', highlight: 'none' },
      '130M-Time': { value: '0.0189', highlight: 'none' },
      '350M-PPL': { value: '17.35', highlight: 'none' },
      '350M-Mem': { value: '0.76', highlight: 'none' },
      '350M-Time': { value: '0.0652', highlight: 'none' },
      '1B-PPL': { value: '14.49', highlight: 'none' },
      '1B-Mem': { value: '2.66', highlight: 'none' },
      '1B-Time': { value: '0.2286', highlight: 'none' }
    }
  },
  {
    optimizer: 'Adam-mini',
    venue: 'ICLR\'25',
    betas: '(0.9, 0.99)',
    eps: '1e-8',
    background: 'bg-gray-100',
    data: {
      '60M-PPL': { value: '29.63', highlight: 'none' },
      '60M-Mem': { value: '0.14', highlight: 'none' },
      '60M-Time': { value: '0.0106', highlight: 'none' },
      '130M-PPL': { value: '23.08', highlight: 'none' },
      '130M-Mem': { value: '0.30', highlight: 'none' },
      '130M-Time': { value: '0.0152', highlight: 'none' },
      '350M-PPL': { value: '19.25', highlight: 'none' },
      '350M-Mem': { value: '0.75', highlight: 'none' },
      '350M-Time': { value: '0.0599', highlight: 'none' },
      '1B-PPL': { value: '16.44', highlight: 'none' },
      '1B-Mem': { value: '2.62', highlight: 'none' },
      '1B-Time': { value: '0.1868', highlight: 'none' }
    }
  },
  {
    optimizer: 'AdaFactor',
    venue: 'ICML\'18',
    betas: '(0.9,)',
    eps: '1e-30',
    background: 'bg-gray-100',
    data: {
      '60M-PPL': { value: '29.07', highlight: 'green' },
      '60M-Mem': { value: '0.24', highlight: 'none' },
      '60M-Time': { value: '0.0059', highlight: 'none' },
      '130M-PPL': { value: '22.38', highlight: 'none' },
      '130M-Mem': { value: '0.61', highlight: 'none' },
      '130M-Time': { value: '0.0082', highlight: 'none' },
      '350M-PPL': { value: '16.96', highlight: 'none' },
      '350M-Mem': { value: '1.53', highlight: 'none' },
      '350M-Time': { value: '0.0447', highlight: 'none' },
      '1B-PPL': { value: '16.25', highlight: 'none' },
      '1B-Mem': { value: '6.65', highlight: 'none' },
      '1B-Time': { value: '0.1725', highlight: 'none' }
    }
  },
  {
    optimizer: 'CAME',
    venue: 'ACL\'23',
    betas: '(0.9, 0.98)',
    eps: '1e-6',
    background: 'bg-gray-100',
    data: {
      '60M-PPL': { value: '29.26', highlight: 'none' },
      '60M-Mem': { value: '0.18', highlight: 'none' },
      '60M-Time': { value: '0.0068', highlight: 'none' },
      '130M-PPL': { value: '22.55', highlight: 'none' },
      '130M-Mem': { value: '0.38', highlight: 'none' },
      '130M-Time': { value: '0.0084', highlight: 'none' },
      '350M-PPL': { value: '16.84', highlight: 'none' },
      '350M-Mem': { value: '1.08', highlight: 'none' },
      '350M-Time': { value: '0.0451', highlight: 'none' },
      '1B-PPL': { value: '15.76', highlight: 'none' },
      '1B-Mem': { value: '3.83', highlight: 'none' },
      '1B-Time': { value: '0.1794', highlight: 'none' }
    }
  },
  {
    optimizer: 'APOLLO',
    venue: 'MLSys\'25',
    betas: '(0.9, 0.99)',
    eps: '1e-6',
    background: 'bg-gray-100',
    data: {
      '60M-PPL': { value: '29.82', highlight: 'none' },
      '60M-Mem': { value: '0.24', highlight: 'none' },
      '60M-Time': { value: '0.0061', highlight: 'none' },
      '130M-PPL': { value: '22.18', highlight: 'green' },
      '130M-Mem': { value: '0.52', highlight: 'none' },
      '130M-Time': { value: '0.0090', highlight: 'none' },
      '350M-PPL': { value: '16.54', highlight: 'green' },
      '350M-Mem': { value: '1.22', highlight: 'none' },
      '350M-Time': { value: '0.0453', highlight: 'none' },
      '1B-PPL': { value: '13.91', highlight: 'green' },
      '1B-Mem': { value: '4.38', highlight: 'none' },
      '1B-Time': { value: '0.1809', highlight: 'none' }
    }
  },
  {
    optimizer: 'Lion',
    venue: 'arXiv\'23',
    betas: '(0.9, 0.98)',
    eps: '-',
    background: 'bg-gray-100',
    data: {
      '60M-PPL': { value: '34.80', highlight: 'none' },
      '60M-Mem': { value: '0.14', highlight: 'none' },
      '60M-Time': { value: '0.0049', highlight: 'none' },
      '130M-PPL': { value: '24.95', highlight: 'none' },
      '130M-Mem': { value: '0.30', highlight: 'none' },
      '130M-Time': { value: '0.0057', highlight: 'none' },
      '350M-PPL': { value: '18.84', highlight: 'none' },
      '350M-Mem': { value: '0.75', highlight: 'none' },
      '350M-Time': { value: '0.0400', highlight: 'none' },
      '1B-PPL': { value: '17.01', highlight: 'none' },
      '1B-Mem': { value: '2.62', highlight: 'none' },
      '1B-Time': { value: '0.1684', highlight: 'none' }
    }
  },
  {
    optimizer: 'Sophia',
    venue: 'arXiv\'23',
    betas: '(0.9, 0.99)',
    eps: '1e-8',
    background: 'bg-gray-100',
    data: {
      '60M-PPL': { value: '35.14', highlight: 'none' },
      '60M-Mem': { value: '0.25', highlight: 'none' },
      '60M-Time': { value: '0.0080', highlight: 'none' },
      '130M-PPL': { value: '25.09', highlight: 'none' },
      '130M-Mem': { value: '0.55', highlight: 'none' },
      '130M-Time': { value: '0.0105', highlight: 'none' },
      '350M-PPL': { value: '18.42', highlight: 'none' },
      '350M-Mem': { value: '1.43', highlight: 'none' },
      '350M-Time': { value: '0.0478', highlight: 'none' },
      '1B-PPL': { value: '17.62', highlight: 'none' },
      '1B-Mem': { value: '5.11', highlight: 'none' },
      '1B-Time': { value: '0.1843', highlight: 'none' }
    }
  },
  {
    optimizer: 'MARS+Lion',
    venue: 'ICML\'25',
    betas: '(0.9, 0.98)',
    eps: '1e-8',
    background: 'bg-gray-100',
    data: {
      '60M-PPL': { value: '31.50', highlight: 'none' },
      '60M-Mem': { value: '0.32', highlight: 'none' },
      '60M-Time': { value: '0.0139', highlight: 'none' },
      '130M-PPL': { value: '25.02', highlight: 'none' },
      '130M-Mem': { value: '0.75', highlight: 'none' },
      '130M-Time': { value: '0.0247', highlight: 'none' },
      '350M-PPL': { value: '18.36', highlight: 'none' },
      '350M-Mem': { value: '2.06', highlight: 'none' },
      '350M-Time': { value: '0.0753', highlight: 'none' },
      '1B-PPL': { value: '16.94', highlight: 'none' },
      '1B-Mem': { value: '7.48', highlight: 'none' },
      '1B-Time': { value: '0.1804', highlight: 'none' }
    }
  },
  {
    optimizer: 'SAC+Adam-mini',
    venue: 'Ours',
    betas: '(0.9, 0.99)',
    eps: '1e-8',
    background: 'bg-purple-100',
    data: {
      '60M-PPL': { value: '29.49', highlight: 'none' },
      '60M-Mem': { value: '0.14', highlight: 'none' },
      '60M-Time': { value: '0.0131', highlight: 'none' },
      '130M-PPL': { value: '22.62', highlight: 'none' },
      '130M-Mem': { value: '0.30', highlight: 'none' },
      '130M-Time': { value: '0.0157', highlight: 'none' },
      '350M-PPL': { value: '16.66', highlight: 'none' },
      '350M-Mem': { value: '0.75', highlight: 'none' },
      '350M-Time': { value: '0.0605', highlight: 'none' },
      '1B-PPL': { value: '14.23', highlight: 'none' },
      '1B-Mem': { value: '2.62', highlight: 'none' },
      '1B-Time': { value: '0.1873', highlight: 'none' }
    }
  },
  {
    optimizer: 'Shampoo',
    venue: 'arXiv\'18',
    betas: '(0.9, 0.999)',
    eps: '1e-8',
    background: 'bg-gray-100',
    data: {
      '60M-PPL': { value: '29.30', highlight: 'none' },
      '60M-Mem': { value: '0.18', highlight: 'none' },
      '60M-Time': { value: '0.0364', highlight: 'none' },
      '130M-PPL': { value: '22.01', highlight: 'none' },
      '130M-Mem': { value: '0.35', highlight: 'none' },
      '130M-Time': { value: '0.0526', highlight: 'none' },
      '350M-PPL': { value: '16.71', highlight: 'none' },
      '350M-Mem': { value: '1.37', highlight: 'none' },
      '350M-Time': { value: '0.1465', highlight: 'none' },
      '1B-PPL': { value: '14.34', highlight: 'none' },
      '1B-Mem': { value: '4.77', highlight: 'none' },
      '1B-Time': { value: '0.8762', highlight: 'none' }
    }
  },
  {
    optimizer: 'Muon (kimi)',
    venue: 'arXiv\'25',
    betas: '(0.9, 0.95)',
    eps: '1e-8',
    background: 'bg-gray-100',
    data: {
      '60M-PPL': { value: '28.91', highlight: 'none' },
      '60M-Mem': { value: '0.14', highlight: 'none' },
      '60M-Time': { value: '0.0336', highlight: 'none' },
      '130M-PPL': { value: '22.19', highlight: 'none' },
      '130M-Mem': { value: '0.30', highlight: 'none' },
      '130M-Time': { value: '0.0486', highlight: 'none' },
      '350M-PPL': { value: '16.72', highlight: 'none' },
      '350M-Mem': { value: '0.75', highlight: 'none' },
      '350M-Time': { value: '0.1370', highlight: 'none' },
      '1B-PPL': { value: '14.52', highlight: 'none' },
      '1B-Mem': { value: '2.62', highlight: 'none' },
      '1B-Time': { value: '0.8870', highlight: 'none' }
    }
  },
  {
    optimizer: 'SOAP',
    venue: 'arXiv\'24',
    betas: '(0.9, 0.95)',
    eps: '1e-8',
    background: 'bg-gray-100',
    data: {
      '60M-PPL': { value: '28.60', highlight: 'green' },
      '60M-Mem': { value: '0.17', highlight: 'none' },
      '60M-Time': { value: '0.0747', highlight: 'none' },
      '130M-PPL': { value: '22.15', highlight: 'none' },
      '130M-Mem': { value: '0.34', highlight: 'none' },
      '130M-Time': { value: '0.1028', highlight: 'none' },
      '350M-PPL': { value: '16.79', highlight: 'none' },
      '350M-Mem': { value: '1.35', highlight: 'none' },
      '350M-Time': { value: '0.1943', highlight: 'none' },
      '1B-PPL': { value: '14.58', highlight: 'none' },
      '1B-Mem': { value: '4.72', highlight: 'none' },
      '1B-Time': { value: '0.9205', highlight: 'none' }
    }
  },
  {
    optimizer: 'MARS+Shampoo',
    venue: 'ICML\'25',
    betas: '(0.9, 0.99)',
    eps: '1e-8',
    background: 'bg-gray-100',
    data: {
      '60M-PPL': { value: '29.13', highlight: 'none' },
      '60M-Mem': { value: '0.32', highlight: 'none' },
      '60M-Time': { value: '0.0491', highlight: 'none' },
      '130M-PPL': { value: '21.96', highlight: 'green' },
      '130M-Mem': { value: '0.75', highlight: 'none' },
      '130M-Time': { value: '0.0768', highlight: 'none' },
      '350M-PPL': { value: '16.49', highlight: 'green' },
      '350M-Mem': { value: '2.06', highlight: 'none' },
      '350M-Time': { value: '0.1537', highlight: 'none' },
      '1B-PPL': { value: '13.75', highlight: 'green' },
      '1B-Mem': { value: '7.48', highlight: 'none' },
      '1B-Time': { value: '0.8823', highlight: 'none' }
    }
  },
  {
    optimizer: 'SAC+Shampoo',
    venue: 'Ours',
    betas: '(0.9, 0.999)',
    eps: '1e-8',
    background: 'bg-purple-100',
    data: {
      '60M-PPL': { value: '29.22', highlight: 'none' },
      '60M-Mem': { value: '0.18', highlight: 'none' },
      '60M-Time': { value: '0.0376', highlight: 'none' },
      '130M-PPL': { value: '21.96', highlight: 'green' },
      '130M-Mem': { value: '0.35', highlight: 'none' },
      '130M-Time': { value: '0.0541', highlight: 'none' },
      '350M-PPL': { value: '16.61', highlight: 'none' },
      '350M-Mem': { value: '1.37', highlight: 'none' },
      '350M-Time': { value: '0.1481', highlight: 'none' },
      '1B-PPL': { value: '14.07', highlight: 'none' },
      '1B-Mem': { value: '4.77', highlight: 'none' },
      '1B-Time': { value: '0.8785', highlight: 'none' }
    }
  }
];

// Function to generate table HTML
function generateCIFAR100Table() {
  const headers = ['Optimizer', 'AlexNet', 'VGG-13', 'R-50', 'DN-121', 'MobV2', 'Eff-B0', 'RVGG-A1', 'DeiT-S', 'MLP-S', 'Swin-T', 'CNX-T', 'CNXV2-T', 'Moga-S', 'URLK-T', 'TNX-T', 'IF-12', 'PFV2-12', 'CF-12', 'AF-12', 'CAF-12'];
  
  let tableHTML = '<table class="w-full text-xs border border-gray-200">';
  
  // Header
  tableHTML += '<thead><tr class="bg-gray-50 border-b">';
  headers.forEach(header => {
    const alignClass = header === 'Optimizer' ? 'text-left' : 'text-center';
    const borderClass = header === 'CAF-12' ? '' : 'border-r';
    tableHTML += `<th class="${alignClass} p-2 font-semibold text-black ${borderClass}">${header}</th>`;
  });
  tableHTML += '</tr></thead>';
  
  // Body
  tableHTML += '<tbody>';
  cifar100Data.forEach(row => {
    tableHTML += `<tr class="border-b ${row.background}">`;
    tableHTML += `<td class="p-2 font-medium text-black border-r">${row.optimizer}</td>`;
    
    headers.slice(1).forEach(header => {
      const cellData = row.data[header];
      const highlightClass = cellData.highlight === 'blue' ? 'text-blue-600 font-semibold' : 
                           cellData.highlight === 'purple' ? 'text-purple-600 font-semibold' :
                           cellData.highlight === 'red' ? 'text-red-600' : 'text-black';
      const borderClass = header === 'CAF-12' ? '' : 'border-r';
      tableHTML += `<td class="p-2 text-center ${highlightClass} ${borderClass}">${cellData.value}</td>`;
    });
    
    tableHTML += '</tr>';
  });
  
  tableHTML += '</tbody></table>';
  return tableHTML;
}

// Function to generate ImageNet table HTML
function generateImageNetTable() {
  const headers = ['Optimizer', 'DeiT-S (DeiT)', 'ResNet-50 (A2)'];
  
  let tableHTML = '<table class="w-full text-sm border border-gray-200">';
  
  // Header
  tableHTML += '<thead><tr class="bg-gray-50 border-b">';
  headers.forEach(header => {
    tableHTML += `<th class="text-left p-3 font-semibold text-black border-r">${header}</th>`;
  });
  tableHTML += '</tr></thead>';
  
  // Body
  tableHTML += '<tbody>';
  imagenetData.forEach(row => {
    const highlightClass = row.data['DeiT-S'].highlight === 'blue' ? 'text-blue-600 font-semibold' : 
                          row.data['DeiT-S'].highlight === 'purple' ? 'text-purple-600 font-semibold' :
                          row.data['DeiT-S'].highlight === 'red' ? 'text-red-600' : 'text-black';
    
    const highlightClass2 = row.data['ResNet-50'].highlight === 'blue' ? 'text-blue-600 font-semibold' : 
                           row.data['ResNet-50'].highlight === 'purple' ? 'text-purple-600 font-semibold' :
                           row.data['ResNet-50'].highlight === 'red' ? 'text-red-600' : 'text-black';
    
    tableHTML += `<tr class="border-b ${row.background}">`;
    tableHTML += `<td class="p-3 font-medium text-black border-r">${row.optimizer}</td>`;
    tableHTML += `<td class="p-3 text-center ${highlightClass} border-r">${row.data['DeiT-S'].value}</td>`;
    tableHTML += `<td class="p-3 text-center ${highlightClass2}">${row.data['ResNet-50'].value}</td>`;
    tableHTML += '</tr>';
  });
  tableHTML += '</tbody></table>';
  
  return tableHTML;
}

function generateCOCOTable() {
  const headers = ['Pre-training', 'VGG (SGD)', 'R-50 (SGD)', 'Swin-T (AdamW)', 'R-50 (SGD)', 'R-50 (LARS)', 'R-50 (A3)', 'R-50 (A2)', 'R-50 (A1)', 'R-50 (Adan)', 'Swin-T (AdamW)', 'CNX-T (AdamW)'];
  const subHeaders = ['Optimizer', '2D Pose', '2D Pose', '2D Pose', 'Detection', 'Detection', 'Detection', 'Detection', 'Detection', 'Detection', 'Detection', 'Detection'];
  
  let tableHTML = '<table class="w-full text-xs border border-gray-200">';
  
  // Main header
  tableHTML += '<thead>';
  tableHTML += '<tr class="bg-gray-50 border-b">';
  headers.forEach((header, index) => {
    const alignClass = index === 0 ? 'text-left' : 'text-center';
    const borderClass = index === headers.length - 1 ? '' : 'border-r';
    const bgClass = index === 1 || index === 2 || index === 4 ? 'bg-orange-100' : 
                   index === 3 || index === 5 || index === 6 || index === 7 || index === 8 || index === 9 || index === 10 || index === 11 ? 'bg-blue-100' : 
                   index === 4 ? 'bg-green-100' : '';
    tableHTML += `<th class="${alignClass} p-2 font-semibold text-black ${borderClass} ${bgClass}">${header}</th>`;
  });
  tableHTML += '</tr>';
  
  // Sub header
  tableHTML += '<tr class="bg-gray-100 border-b text-xs">';
  subHeaders.forEach((subHeader, index) => {
    const alignClass = index === 0 ? 'text-left' : 'text-center';
    const borderClass = index === subHeaders.length - 1 ? '' : 'border-r';
    tableHTML += `<th class="${alignClass} p-2 text-black ${borderClass}">${subHeader}</th>`;
  });
  tableHTML += '</tr>';
  tableHTML += '</thead>';
  
  // Body
  tableHTML += '<tbody>';
  cocoData.forEach(row => {
    tableHTML += `<tr class="border-b ${row.background}">`;
    tableHTML += `<td class="p-2 font-medium text-black border-r">${row.optimizer}</td>`;
    
    const dataKeys = ['VGG-2D-Pose', 'R-50-2D-Pose', 'Swin-T-2D-Pose', 'R-50-Detection', 'R-50-LARS-Detection', 'R-50-A3-Detection', 'R-50-A2-Detection', 'R-50-A1-Detection', 'R-50-Adan-Detection', 'Swin-T-Detection', 'CNX-T-Detection'];
    dataKeys.forEach((key, index) => {
      const cellData = row.data[key];
      const highlightClass = cellData.highlight === 'blue' ? 'text-blue-600 font-semibold' : 
                           cellData.highlight === 'purple' ? 'text-purple-600 font-semibold' :
                           cellData.highlight === 'red' ? 'text-red-600' : 'text-black';
      const borderClass = index === dataKeys.length - 1 ? '' : 'border-r';
      tableHTML += `<td class="p-2 text-center ${highlightClass} ${borderClass}">${cellData.value}</td>`;
    });
    
    tableHTML += '</tr>';
  });
  
  tableHTML += '</tbody></table>';
  return tableHTML;
}

// Function to generate ImageNet table HTML
function generateImageNetTable() {
  const headers = ['Optimizer', 'DeiT-S (DeiT)', 'ResNet-50 (A2)'];
  
  let tableHTML = '<table class="w-full text-sm border border-gray-200">';
  
  // Header
  tableHTML += '<thead><tr class="bg-gray-50 border-b">';
  headers.forEach(header => {
    tableHTML += `<th class="text-left p-3 font-semibold text-black border-r">${header}</th>`;
  });
  tableHTML += '</tr></thead>';
  
  // Body
  tableHTML += '<tbody>';
  imagenetData.forEach(row => {
    const highlightClass = row.data['DeiT-S'].highlight === 'blue' ? 'text-blue-600 font-semibold' : 
                          row.data['DeiT-S'].highlight === 'purple' ? 'text-purple-600 font-semibold' :
                          row.data['DeiT-S'].highlight === 'red' ? 'text-red-600' : 'text-black';
    
    const highlightClass2 = row.data['ResNet-50'].highlight === 'blue' ? 'text-blue-600 font-semibold' : 
                           row.data['ResNet-50'].highlight === 'purple' ? 'text-purple-600 font-semibold' :
                           row.data['ResNet-50'].highlight === 'red' ? 'text-red-600' : 'text-black';
    
    tableHTML += `<tr class="border-b ${row.background}">`;
    tableHTML += `<td class="p-3 font-medium text-black border-r">${row.optimizer}</td>`;
    tableHTML += `<td class="p-3 text-center ${highlightClass} border-r">${row.data['DeiT-S'].value}</td>`;
    tableHTML += `<td class="p-3 text-center ${highlightClass2}">${row.data['ResNet-50'].value}</td>`;
    tableHTML += '</tr>';
  });
  tableHTML += '</tbody></table>';
  
  return tableHTML;
}
// Function to generate C4 table HTML
function generateC4Table() {
  const headers = ['Optimizer', 'Venue', 'Betas', 'Eps.', '60M PPL', '60M Mem(G)', '60M Time(s)', '130M PPL', '130M Mem(G)', '130M Time(s)', '350M PPL', '350M Mem(G)', '350M Time(s)', '1B PPL', '1B Mem(G)', '1B Time(s)'];
  
  let tableHTML = '<table class="w-full text-xs border border-gray-200">';
  
  // Header
  tableHTML += '<thead>';
  tableHTML += '<tr class="bg-gray-50 border-b">';
  headers.forEach((header, index) => {
    let bgClass = '';
    if (index >= 4 && index <= 6) bgClass = 'bg-blue-50';
    else if (index >= 7 && index <= 9) bgClass = 'bg-green-50';
    else if (index >= 10 && index <= 12) bgClass = 'bg-yellow-50';
    else if (index >= 13 && index <= 15) bgClass = 'bg-red-50';
    
    tableHTML += `<th class="text-center p-2 font-semibold text-black border-r ${bgClass}">${header}</th>`;
  });
  tableHTML += '</tr>';
  tableHTML += '</thead>';
  
  // Body
  tableHTML += '<tbody>';
  c4Data.forEach(row => {
    const highlightClass = (value, highlight) => {
      if (highlight === 'green') return 'text-green-600 font-bold';
      if (highlight === 'blue') return 'text-blue-600 font-semibold';
      if (highlight === 'purple') return 'text-purple-600 font-semibold';
      if (highlight === 'red') return 'text-red-600';
      return 'text-black';
    };
    
    tableHTML += `<tr class="border-b ${row.background}">`;
    tableHTML += `<td class="p-2 font-medium text-black border-r">${row.optimizer}</td>`;
    tableHTML += `<td class="p-2 text-center text-black border-r text-xs">${row.venue}</td>`;
    tableHTML += `<td class="p-2 text-center text-black border-r text-xs">${row.betas}</td>`;
    tableHTML += `<td class="p-2 text-center text-black border-r text-xs">${row.eps}</td>`;
    
    // 60M columns
    tableHTML += `<td class="p-2 text-center ${highlightClass(row.data['60M-PPL'].value, row.data['60M-PPL'].highlight)} border-r">${row.data['60M-PPL'].value}</td>`;
    tableHTML += `<td class="p-2 text-center text-black border-r">${row.data['60M-Mem'].value}</td>`;
    tableHTML += `<td class="p-2 text-center text-black border-r">${row.data['60M-Time'].value}</td>`;
    
    // 130M columns
    tableHTML += `<td class="p-2 text-center ${highlightClass(row.data['130M-PPL'].value, row.data['130M-PPL'].highlight)} border-r">${row.data['130M-PPL'].value}</td>`;
    tableHTML += `<td class="p-2 text-center text-black border-r">${row.data['130M-Mem'].value}</td>`;
    tableHTML += `<td class="p-2 text-center text-black border-r">${row.data['130M-Time'].value}</td>`;
    
    // 350M columns
    tableHTML += `<td class="p-2 text-center ${highlightClass(row.data['350M-PPL'].value, row.data['350M-PPL'].highlight)} border-r">${row.data['350M-PPL'].value}</td>`;
    tableHTML += `<td class="p-2 text-center text-black border-r">${row.data['350M-Mem'].value}</td>`;
    tableHTML += `<td class="p-2 text-center text-black border-r">${row.data['350M-Time'].value}</td>`;
    
    // 1B columns
    tableHTML += `<td class="p-2 text-center ${highlightClass(row.data['1B-PPL'].value, row.data['1B-PPL'].highlight)} border-r">${row.data['1B-PPL'].value}</td>`;
    tableHTML += `<td class="p-2 text-center text-black border-r">${row.data['1B-Mem'].value}</td>`;
    tableHTML += `<td class="p-2 text-center text-black">${row.data['1B-Time'].value}</td>`;
    
    tableHTML += '</tr>';
  });
  tableHTML += '</tbody></table>';
  
  return tableHTML;
}

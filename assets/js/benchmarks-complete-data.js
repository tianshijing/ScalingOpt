// Complete CIFAR-100 Benchmark Data - All 20 Optimizers
const cifar100Data = [];

// Complete ImageNet-1K Benchmark Data
const imagenetData = [];

// Complete COCO Benchmark Data - All 20 Optimizers
const cocoData = [];

// Complete C4 Benchmark Data - All 20 Optimizers
const c4Data = [];

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

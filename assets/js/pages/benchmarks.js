/**
 * Benchmarks Page Functionality
 * Handles loading and displaying paper-specific benchmarks
 */

document.addEventListener('DOMContentLoaded', () => {
    renderPaperBenchmarks();
});

/**
 * Renders benchmarks for each paper defined in paperBenchmarksData
 */
function renderPaperBenchmarks() {
    const container = document.getElementById('paper-benchmarks-container');
    if (!container) return;

    const { paperBenchmarks } = window.paperBenchmarksData || {};
    if (!paperBenchmarks) return;

    // Clear container
    container.innerHTML = '';

    // Iterate through each paper and create its section
    Object.values(paperBenchmarks).forEach((paper, index) => {
        const paperSection = createPaperSection(paper, index);
        container.appendChild(paperSection);
    });

    // Re-initialize Lucide icons
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

/**
 * Creates the HTML element for a paper's benchmark section
 * @param {Object} paper Paper data object
 * @param {number} index Index for animation delay
 * @returns {HTMLElement} The paper section element
 */
function createPaperSection(paper, index) {
    const section = document.createElement('div');
    section.className = 'bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12';
    section.setAttribute('data-aos', 'fade-up');
    section.setAttribute('data-aos-delay', (index * 100).toString());

    // Paper Header
    let headerHTML = `
        <div class="p-6 md:p-8 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div class="flex-grow">
                    <div class="flex items-center gap-3 mb-2">
                        <span class="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider">${paper.year}</span>
                        <span class="text-gray-400 text-sm">arXiv:${paper.arxivId}</span>
                    </div>
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">${paper.title}</h2>
                    <p class="text-gray-700 max-w-4xl">${paper.description}</p>
                </div>
                <div class="flex-shrink-0">
                    <a href="${paper.arxivUrl}" target="_blank" rel="noopener noreferrer" 
                       class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <i data-lucide="external-link" class="w-4 h-4 mr-2"></i>
                        View Paper
                    </a>
                </div>
            </div>
        </div>
    `;

    // Benchmarks Content
    let benchmarksHTML = '<div class="p-6 md:p-8 space-y-12">';
    
    paper.benchmarks.forEach(benchmark => {
        let tableHTML = '';
        
        // Match benchmark type to data generation function
        if (benchmark.dataType === 'cifar100') {
            tableHTML = typeof generateCIFAR100Table === 'function' ? generateCIFAR100Table() : '<p class="text-center py-8 text-gray-500">Data table coming soon...</p>';
        } else if (benchmark.dataType === 'imagenet') {
            tableHTML = typeof generateImageNetTable === 'function' ? generateImageNetTable() : '<p class="text-center py-8 text-gray-500">Data table coming soon...</p>';
        } else if (benchmark.dataType === 'coco') {
            tableHTML = typeof generateCOCOTable === 'function' ? generateCOCOTable() : '<p class="text-center py-8 text-gray-500">Data table coming soon...</p>';
        } else if (benchmark.dataType === 'c4') {
            tableHTML = typeof generateC4Table === 'function' ? generateC4Table() : '<p class="text-center py-8 text-gray-500">Data table coming soon...</p>';
        } else {
            tableHTML = '<p class="text-center py-8 text-gray-500">Data table coming soon...</p>';
        }

        benchmarksHTML += `
            <div class="benchmark-item">
                <div class="flex items-center gap-3 mb-4">
                    <div class="p-2 bg-purple-100 text-purple-600 rounded-lg">
                        <i data-lucide="bar-chart-2" class="w-5 h-5"></i>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-gray-900">${benchmark.name}</h3>
                        <p class="text-gray-500 text-sm">${benchmark.description}</p>
                    </div>
                </div>
                
                <div class="overflow-x-auto rounded-xl border border-gray-100 shadow-inner bg-gray-50/30 p-1 benchmark-table-container">
                    ${tableHTML}
                </div>
                
                ${benchmark.note ? `
                <div class="mt-4 flex items-start gap-2 text-sm text-gray-600 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                    <i data-lucide="info" class="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0"></i>
                    <span><strong>Note:</strong> ${benchmark.note}</span>
                </div>
                ` : ''}
            </div>
        `;
    });

    benchmarksHTML += '</div>';

    section.innerHTML = headerHTML + benchmarksHTML;
    return section;
}

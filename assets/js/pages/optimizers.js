// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Wait for data to load, then initialize
function initializeOptimizers() {
    if (typeof optimizers === 'undefined') {
        setTimeout(initializeOptimizers, 100);
        return;
    }

    // Filter and search functionality
    let filteredOptimizers = [...optimizers];

    // Update total counts
    const totalCountEl = document.getElementById('total-count');
    const totalOptimizersEl = document.getElementById('total-optimizers');
    if(totalCountEl) totalCountEl.textContent = optimizers.length;
    if(totalOptimizersEl) totalOptimizersEl.textContent = optimizers.length + '+';

    function getMonthNumber(month) {
        const months = {
            'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6,
            'July': 7, 'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12
        };
        return months[month] || 0;
    }

    function renderTimeline() {
        const container = document.getElementById('timeline-container');
        // Clear existing items except the line
        const line = container.querySelector('div.absolute');
        container.innerHTML = '';
        container.appendChild(line);

        // Sort all optimizers chronologically
        const sortedOptimizers = [...optimizers].sort((a, b) => {
            if (a.year !== b.year) return a.year - b.year;
            return getMonthNumber(a.month) - getMonthNumber(b.month);
        });

        let currentYear = null;

        // Mark the latest optimizers (last 5) and Mano as "Latest"
        const totalOptimizers = sortedOptimizers.length;
        const latestStartIndex = Math.max(0, totalOptimizers - 5);
        
        sortedOptimizers.forEach((opt, index) => {
            const isLeft = index % 2 === 0;
            const yearChanged = opt.year !== currentYear;
            currentYear = opt.year;
            // Mark last 5 and Mano as latest, but exclude adamuon, gluon, and conda
            const isLatest = (index >= latestStartIndex || opt.id === 'mano') && opt.id !== 'adamuon' && opt.id !== 'gluon' && opt.id !== 'conda';

            const itemHtml = `
                <div class="relative flex items-center justify-between md:justify-normal mb-8 ${isLeft ? 'md:flex-row-reverse' : ''} group">
                    <!-- Date/Year Marker (Mobile: Left side, Desktop: Center) -->
                    <div class="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full ${isLatest ? 'bg-yellow-500' : 'bg-blue-500'} border-4 border-white shadow-sm z-10 group-hover:scale-125 transition-transform duration-300"></div>

                    <!-- Content Card -->
                    <div class="ml-12 md:ml-0 md:w-[45%] ${isLeft ? 'md:mr-auto md:pr-8 text-left md:text-right' : 'md:ml-auto md:pl-8 text-left'}">
                        <div class="bg-white p-5 rounded-xl shadow-sm border ${isLatest ? 'border-yellow-200' : 'border-gray-100'} hover:shadow-md transition-all duration-300 group-hover:-translate-y-1 relative overflow-hidden">
                            <!-- Decorative background gradient -->
                            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${getCategoryColor(opt.category).includes('blue') ? 'from-blue-400 to-blue-600' : 'from-purple-400 to-purple-600'}"></div>
                            
                            <div class="flex items-center gap-2 mb-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'} justify-start">
                                <span class="text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-2 py-0.5 rounded-full">
                                    ${opt.month || ''} ${opt.year}
                                </span>
                                ${isLatest ? `
                                    <span class="text-xs font-semibold tracking-wider text-yellow-700 uppercase bg-yellow-100 px-2 py-0.5 rounded-full">
                                        Latest
                                    </span>
                                ` : ''}
                            </div>
                            
                            <h3 class="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                ${opt.name}
                            </h3>
                            <p class="text-xs text-gray-500 mb-3 line-clamp-2">
                                ${opt.description}
                            </p>
                            
                            <div class="flex flex-wrap gap-1.5 ${isLeft ? 'md:justify-end' : 'md:justify-start'}">
                                ${opt.tags.slice(0, 2).map(tag => `
                                    <span class="text-[10px] px-1.5 py-0.5 bg-gray-50 text-gray-600 rounded border border-gray-100">
                                        ${tag}
                                    </span>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', itemHtml);
        });
    }

    function getCategoryColor(category) {
        const colors = {
            'First-order': 'bg-blue-100 text-blue-800',
            'Second-order': 'bg-purple-100 text-purple-800'
        };
        return colors[category] || 'bg-gray-100 text-gray-800';
    }

    function renderOptimizers(optimizersToRender, searchTerm = '') {
        const grid = document.getElementById('optimizers-grid');
        const noResults = document.getElementById('no-results');
        const resultsCount = document.getElementById('results-count');

        if (optimizersToRender.length === 0) {
            grid.innerHTML = '';
            noResults.classList.remove('hidden');
            resultsCount.textContent = '0';
            return;
        }

        noResults.classList.add('hidden');
        resultsCount.textContent = optimizersToRender.length;

        grid.innerHTML = optimizersToRender.map(optimizer => {
            const highlightedName = highlightText(optimizer.name, searchTerm);
            const highlightedDesc = highlightText(optimizer.description, searchTerm);

            return `
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden optimizer-card">
                <div class="p-6">
                    <!-- Header -->
                    <div class="flex items-center justify-between mb-4">
                        <div>
                            <h3 class="text-xl font-bold text-gray-900">${highlightedName}</h3>
                            <p class="text-sm text-gray-500">${optimizer.fullName}</p>
                        </div>
                        <div class="text-right">
                            <span class="text-sm font-medium text-gray-600">${optimizer.year}</span>
                        </div>
                    </div>

                    <!-- Description -->
                    <p class="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                        ${highlightedDesc}
                    </p>

                    <!-- Category and Tags -->
                    <div class="mb-4">
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(optimizer.category)} mb-2">
                            ${optimizer.category}
                        </span>
                        <div class="flex flex-wrap gap-1">
                            ${optimizer.tags.slice(0, 3).map(tag => {
                                const highlightedTag = highlightText(tag, searchTerm);
                                return `
                                <span class="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-600">
                                    ${highlightedTag}
                                </span>
                            `}).join('')}
                            ${optimizer.tags.length > 3 ? `
                                <span class="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-600">
                                    +${optimizer.tags.length - 3}
                                </span>
                            ` : ''}
                        </div>
                    </div>

                    <!-- Implementation badges -->
                    <div class="flex items-center space-x-2 mb-4">
                        ${optimizer.implementation.pytorch ? `
                            <span class="inline-flex items-center px-2 py-1 rounded text-xs bg-orange-100 text-orange-800 font-medium">
                                PyTorch
                            </span>
                        ` : ''}
                    </div>

                    <!-- Actions -->
                    <div class="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gray-100">
                        <button onclick="openPseudocode('${optimizer.id}')" class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg transition-colors duration-200">
                            <i data-lucide="code-2" class="w-4 h-4 mr-2"></i>
                            Pseudocode
                        </button>

                        <div class="flex items-center gap-3">
                        ${optimizer.githubUrl ? `
                                <a href="${optimizer.githubUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium text-sm hover:underline">
                                    <i data-lucide="github" class="w-4 h-4 mr-1"></i>
                                    Code
                            </a>
                            ` : ''}
                            <a href="${optimizer.paper.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-gray-600 hover:text-gray-700 text-sm hover:underline">
                            <i data-lucide="book-open" class="w-4 h-4 mr-1"></i>
                            Paper
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `}).join('');

        // Re-initialize icons for the new content
        lucide.createIcons();
    }

    function filterOptimizers() {
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        const selectedCategory = document.getElementById('category-filter').value;
        const selectedYear = document.getElementById('year-filter').value;
        const sortBy = document.getElementById('sort-select').value;
        const clearBtn = document.getElementById('clear-search');

        // Toggle clear button
        if (searchTerm) {
            clearBtn.classList.remove('hidden');
        } else {
            clearBtn.classList.add('hidden');
        }

        // Update URL
        updateURLParams({
            search: searchTerm,
            category: selectedCategory,
            year: selectedYear,
            sort: sortBy
        });

        filteredOptimizers = optimizers.filter(optimizer => {
            const terms = searchTerm.split(/\s+/).filter(t => t.length > 0);
            
            const matchesSearch = terms.length === 0 || terms.every(term => {
                return optimizer.name.toLowerCase().includes(term) ||
                       optimizer.description.toLowerCase().includes(term) ||
                       optimizer.tags.some(tag => tag.toLowerCase().includes(term));
            });
            
            const matchesCategory = selectedCategory === 'All' || optimizer.category === selectedCategory;
            const matchesYear = selectedYear === 'All' || optimizer.year.toString() === selectedYear;

            return matchesSearch && matchesCategory && matchesYear;
        });

        // Sort optimizers
        filteredOptimizers.sort((a, b) => {
            switch (sortBy) {
                case 'popularity':
                    return b.popularity - a.popularity;
                case 'year':
                    return b.year - a.year;
                case 'name':
                    return a.name.localeCompare(b.name);
                default:
                    return 0;
            }
        });

        renderOptimizers(filteredOptimizers, searchTerm);
    }

    // Initialize filters from URL
    const initialParams = readURLParams();
    document.getElementById('search-input').value = initialParams.search;
    document.getElementById('category-filter').value = initialParams.category;
    document.getElementById('year-filter').value = initialParams.year;
    document.getElementById('sort-select').value = initialParams.sort;

    // Add event listeners
    const debouncedFilter = debounce(filterOptimizers, 300);
    document.getElementById('search-input').addEventListener('input', debouncedFilter);
    
    const clearBtn = document.getElementById('clear-search');
    clearBtn.addEventListener('click', () => {
        document.getElementById('search-input').value = '';
        filterOptimizers();
        document.getElementById('search-input').focus();
    });

    document.getElementById('category-filter').addEventListener('change', filterOptimizers);
    document.getElementById('year-filter').addEventListener('change', filterOptimizers);
    document.getElementById('sort-select').addEventListener('change', filterOptimizers);

    // Timeline toggle functionality
    const timelineBtn = document.getElementById('toggle-timeline');
    const timelineWrapper = document.getElementById('timeline-wrapper');
    const timelineIcon = document.getElementById('timeline-icon');
    let isTimelineExpanded = false;

    timelineBtn.addEventListener('click', () => {
        isTimelineExpanded = !isTimelineExpanded;
        
        if (isTimelineExpanded) {
            timelineWrapper.style.maxHeight = timelineWrapper.scrollHeight + "px";
            timelineWrapper.style.opacity = "1";
            timelineIcon.style.transform = "rotate(180deg)";
        } else {
            timelineWrapper.style.maxHeight = "0";
            timelineWrapper.style.opacity = "0";
            timelineIcon.style.transform = "rotate(0deg)";
        }
    });

    // Custom Optimizer toggle functionality
    const customOptimizerBtn = document.getElementById('toggle-custom-optimizer');
    const customOptimizerWrapper = document.getElementById('custom-optimizer-wrapper');
    const customOptimizerIcon = document.getElementById('custom-optimizer-icon');
    let isCustomOptimizerExpanded = false;

    customOptimizerBtn.addEventListener('click', () => {
        isCustomOptimizerExpanded = !isCustomOptimizerExpanded;
        
        if (isCustomOptimizerExpanded) {
            customOptimizerWrapper.style.maxHeight = customOptimizerWrapper.scrollHeight + "px";
            customOptimizerWrapper.style.opacity = "1";
            customOptimizerIcon.style.transform = "rotate(180deg)";
        } else {
            customOptimizerWrapper.style.maxHeight = "0";
            customOptimizerWrapper.style.opacity = "0";
            customOptimizerIcon.style.transform = "rotate(0deg)";
        }
    });
    
    // Pseudocode Modal Functionality
    let currentOptimizerId = null;

    window.openPseudocode = function(id) {
        const optimizer = optimizers.find(o => o.id === id);
        if (!optimizer) return;
        
        currentOptimizerId = id;

        const modal = document.getElementById('pseudocode-modal');
        const content = document.getElementById('pseudocode-content');
        const title = document.getElementById('modal-title');
        
        // Set title
        title.innerHTML = `<i data-lucide="code-2" class="w-5 h-5 text-blue-600"></i> ${optimizer.name} Algorithm`;
        
        // Set content
        if (optimizer.pseudocode) {
            content.innerHTML = `$$${optimizer.pseudocode}$$`;
        } else {
            content.innerHTML = `<div class="text-gray-400 text-center p-4">Pseudocode not available. Please refer to the paper.</div>`;
        }
        
        // Show modal
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Reset dropdown state
        const dropdown = document.getElementById('copy-dropdown');
        if(dropdown) dropdown.classList.add('hidden');

        // Re-render MathJax
        if (window.MathJax) {
            window.MathJax.typesetPromise([content]);
        }
        
        // Re-render icons
        lucide.createIcons();
    };

    // Copy functionality
    window.toggleCopyDropdown = function(event) {
        event.stopPropagation();
        const dropdown = document.getElementById('copy-dropdown');
        dropdown.classList.toggle('hidden');
    };

    window.copyToClipboard = function(format) {
        const optimizer = optimizers.find(o => o.id === currentOptimizerId);
        if (!optimizer || !optimizer.pseudocode) return;

        let textToCopy = '';
        if (format === 'latex') {
            textToCopy = optimizer.pseudocode;
        } else if (format === 'markdown') {
            textToCopy = `
\`\`\`math
${optimizer.pseudocode}
\`\`\`
`;
        }

        navigator.clipboard.writeText(textToCopy).then(() => {
            const dropdown = document.getElementById('copy-dropdown');
            dropdown.classList.add('hidden');
            
            const successMsg = document.getElementById('copy-success');
            successMsg.classList.remove('hidden');
            setTimeout(() => {
                successMsg.classList.add('hidden');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    };

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const dropdown = document.getElementById('copy-dropdown');
        const copyBtn = document.getElementById('copy-btn');
        if (dropdown && !dropdown.classList.contains('hidden') && !copyBtn.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.add('hidden');
        }
    });
    
    // Bind toggle event manually since inline onclick might be tricky with scope
    document.getElementById('copy-btn').addEventListener('click', window.toggleCopyDropdown);

    function closeModal() {
        const modal = document.getElementById('pseudocode-modal');
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    }

    document.getElementById('close-modal-btn').addEventListener('click', closeModal);
    document.getElementById('close-modal-icon').addEventListener('click', closeModal);
    document.getElementById('modal-overlay').addEventListener('click', closeModal);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Update max-height on window resize if expanded
    window.addEventListener('resize', () => {
        if (isTimelineExpanded) {
            timelineWrapper.style.maxHeight = timelineWrapper.scrollHeight + "px";
        }
        if (isCustomOptimizerExpanded) {
            customOptimizerWrapper.style.maxHeight = customOptimizerWrapper.scrollHeight + "px";
        }
    });

    // Initial render
    filterOptimizers();
    renderTimeline();
}

// Initialize when page loads
initializeOptimizers();

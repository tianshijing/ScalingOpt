// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Wait for data to load, then initialize
function initializeSchedulers() {
    if (typeof schedulers === 'undefined') {
        setTimeout(initializeSchedulers, 100);
        return;
    }

    // Debounce utility
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            const later = () => {
                clearTimeout(timeout);
                func.apply(this, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Highlight utility
    function highlightText(text, searchTerm) {
        if (!searchTerm) return text;
        const terms = searchTerm.split(/\s+/).filter(t => t.length > 0);
        if (terms.length === 0) return text;

        let highlighted = text;
        const sortedTerms = [...terms].sort((a, b) => b.length - a.length);
        
        const pattern = new RegExp(`(${sortedTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
        
        return highlighted.replace(pattern, '<mark class="bg-yellow-200 text-blue-900 rounded-sm px-0.5 font-medium">$1</mark>');
    }

    // URL Params management
    function updateURLParams(params) {
        const url = new URL(window.location);
        Object.keys(params).forEach(key => {
            if (params[key] && params[key] !== 'All' && params[key] !== '') {
                url.searchParams.set(key, params[key]);
            } else {
                url.searchParams.delete(key);
            }
        });
        window.history.replaceState({}, '', url);
    }

    function readURLParams() {
        const url = new URL(window.location);
        return {
            search: url.searchParams.get('search') || '',
            category: url.searchParams.get('category') || 'All',
            year: url.searchParams.get('year') || 'All',
            sort: url.searchParams.get('sort') || 'year'
        };
    }

    // Filter and search functionality
    let filteredSchedulers = [...schedulers];

    // Update total counts
    document.getElementById('total-count').textContent = schedulers.length;
    document.getElementById('total-schedulers').textContent = schedulers.length + '+';

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

        // Sort all schedulers chronologically
        const sortedSchedulers = [...schedulers].sort((a, b) => {
            if (a.year !== b.year) return a.year - b.year;
            return getMonthNumber(a.month) - getMonthNumber(b.month);
        });

        let currentYear = null;

        sortedSchedulers.forEach((sch, index) => {
            const isLeft = index % 2 === 0;
            const yearChanged = sch.year !== currentYear;
            currentYear = sch.year;

            const itemHtml = `
                <div class="relative flex items-center justify-between md:justify-normal mb-8 ${isLeft ? 'md:flex-row-reverse' : ''} group">
                    <!-- Date/Year Marker -->
                    <div class="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm z-10 group-hover:scale-125 transition-transform duration-300"></div>

                    <!-- Content Card -->
                    <div class="ml-12 md:ml-0 md:w-[45%] ${isLeft ? 'md:mr-auto md:pr-8 text-left md:text-right' : 'md:ml-auto md:pl-8 text-left'}">
                        <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group-hover:-translate-y-1 relative overflow-hidden">
                            <!-- Decorative background gradient -->
                            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${getCategoryColor(sch.category).includes('blue') ? 'from-blue-400 to-blue-600' : 'from-purple-400 to-purple-600'}"></div>
                            
                            <div class="flex items-center gap-2 mb-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'} justify-start">
                                <span class="text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-2 py-0.5 rounded-full">
                                    ${sch.month || ''} ${sch.year}
                                </span>
                            </div>
                            
                            <h3 class="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                ${sch.name}
                            </h3>
                            <p class="text-xs text-gray-500 mb-3 line-clamp-2">
                                ${sch.description}
                            </p>
                            
                            <div class="flex flex-wrap gap-1.5 ${isLeft ? 'md:justify-end' : 'md:justify-start'}">
                                ${sch.tags.slice(0, 2).map(tag => `
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
            'Decay': 'bg-blue-100 text-blue-800',
            'Cyclic': 'bg-purple-100 text-purple-800',
            'Adaptive': 'bg-green-100 text-green-800',
            'Composite': 'bg-orange-100 text-orange-800',
            'Custom': 'bg-gray-100 text-gray-800'
        };
        return colors[category] || 'bg-gray-100 text-gray-800';
    }

    function renderSchedulers(schedulersToRender, searchTerm = '') {
        const grid = document.getElementById('schedulers-grid');
        const noResults = document.getElementById('no-results');
        const resultsCount = document.getElementById('results-count');

        if (schedulersToRender.length === 0) {
            grid.innerHTML = '';
            noResults.classList.remove('hidden');
            resultsCount.textContent = '0';
            return;
        }

        noResults.classList.add('hidden');
        resultsCount.textContent = schedulersToRender.length;

        grid.innerHTML = schedulersToRender.map(scheduler => {
            const highlightedName = highlightText(scheduler.name, searchTerm);
            const highlightedDesc = highlightText(scheduler.description, searchTerm);

            return `
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden optimizer-card">
                <div class="p-6">
                    <!-- Header -->
                    <div class="flex items-center justify-between mb-4">
                        <div>
                            <h3 class="text-xl font-bold text-gray-900">${highlightedName}</h3>
                            <p class="text-sm text-gray-500">${scheduler.fullName}</p>
                        </div>
                        <div class="text-right">
                            <span class="text-sm font-medium text-gray-600">${scheduler.year}</span>
                        </div>
                    </div>

                    <!-- Description -->
                    <p class="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                        ${highlightedDesc}
                    </p>

                    <!-- Use Case -->
                    ${scheduler.useCase ? `
                        <div class="mb-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r">
                            <p class="text-xs font-semibold text-blue-900 mb-1">
                                <i data-lucide="lightbulb" class="w-3 h-3 inline mr-1"></i>
                                When to Use:
                            </p>
                            <p class="text-xs text-blue-800 leading-relaxed">
                                ${scheduler.useCase}
                            </p>
                        </div>
                    ` : ''}

                    <!-- Category and Tags -->
                    <div class="mb-4">
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(scheduler.category)} mb-2">
                            ${scheduler.category}
                        </span>
                        <div class="flex flex-wrap gap-1">
                            ${scheduler.tags.slice(0, 3).map(tag => {
                                const highlightedTag = highlightText(tag, searchTerm);
                                return `
                                <span class="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-600">
                                    ${highlightedTag}
                                </span>
                            `}).join('')}
                        </div>
                    </div>

                    <!-- Implementation badges -->
                    <div class="flex items-center space-x-2 mb-4">
                        ${scheduler.implementation.pytorch ? `
                            <span class="inline-flex items-center px-2 py-1 rounded text-xs bg-orange-100 text-orange-800 font-medium">
                                PyTorch
                            </span>
                        ` : ''}
                        ${scheduler.implementation.tensorflow ? `
                            <span class="inline-flex items-center px-2 py-1 rounded text-xs bg-yellow-100 text-yellow-800 font-medium">
                                TensorFlow
                            </span>
                        ` : ''}
                    </div>

                    <!-- Actions -->
                    <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                        ${scheduler.paper ? `
                            <a href="${scheduler.paper.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-gray-600 hover:text-gray-700 text-sm">
                                <i data-lucide="book-open" class="w-4 h-4 mr-1"></i>
                                Paper
                                <i data-lucide="external-link" class="w-3 h-3 ml-1"></i>
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `}).join('');

        // Re-initialize icons for the new content
        lucide.createIcons();
    }

    function filterSchedulers() {
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

        filteredSchedulers = schedulers.filter(scheduler => {
            const terms = searchTerm.split(/\s+/).filter(t => t.length > 0);
            
            const matchesSearch = terms.length === 0 || terms.every(term => {
                return scheduler.name.toLowerCase().includes(term) ||
                       scheduler.description.toLowerCase().includes(term) ||
                       scheduler.tags.some(tag => tag.toLowerCase().includes(term));
            });
            
            const matchesCategory = selectedCategory === 'All' || scheduler.category === selectedCategory;
            const matchesYear = selectedYear === 'All' || scheduler.year.toString() === selectedYear;

            return matchesSearch && matchesCategory && matchesYear;
        });

        // Sort schedulers
        filteredSchedulers.sort((a, b) => {
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

        renderSchedulers(filteredSchedulers, searchTerm);
    }

    // Initialize filters from URL
    const initialParams = readURLParams();
    document.getElementById('search-input').value = initialParams.search;
    document.getElementById('category-filter').value = initialParams.category;
    document.getElementById('year-filter').value = initialParams.year;
    document.getElementById('sort-select').value = initialParams.sort;

    // Add event listeners
    const debouncedFilter = debounce(filterSchedulers, 300);
    document.getElementById('search-input').addEventListener('input', debouncedFilter);
    
    const clearBtn = document.getElementById('clear-search');
    clearBtn.addEventListener('click', () => {
        document.getElementById('search-input').value = '';
        filterSchedulers();
        document.getElementById('search-input').focus();
    });

    document.getElementById('category-filter').addEventListener('change', filterSchedulers);
    document.getElementById('year-filter').addEventListener('change', filterSchedulers);
    document.getElementById('sort-select').addEventListener('change', filterSchedulers);

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

    // Update max-height on window resize if expanded
    window.addEventListener('resize', () => {
        if (isTimelineExpanded) {
            timelineWrapper.style.maxHeight = timelineWrapper.scrollHeight + "px";
        }
    });

    // Initial render
    filterSchedulers();
    renderTimeline();
}

// Initialize when page loads
initializeSchedulers();

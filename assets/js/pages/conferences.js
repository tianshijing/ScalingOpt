// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

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
        type: url.searchParams.get('type') || 'All'
    };
}

// Filter and search functionality
let filteredConferences = [...conferences];

function renderConferences(items, searchTerm = '') {
    const container = document.getElementById('conferences-container');
    const resultsCount = document.getElementById('results-count');

    if (!container || !resultsCount) return;

    resultsCount.textContent = items.length;

    if (items.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12">
                <i data-lucide="calendar-off" class="w-16 h-16 mx-auto mb-4 text-gray-300"></i>
                <h3 class="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                <p class="text-gray-500">Try adjusting your search criteria.</p>
            </div>
        `;
        if (window.lucide) lucide.createIcons();
        return;
    }

    // Group items by type
    const grouped = items.reduce((acc, item) => {
        if (!acc[item.type]) acc[item.type] = [];
        acc[item.type].push(item);
        return acc;
    }, {});

    // Define order
    const typeOrder = ['Conference', 'Journal', 'Workshop'];
    
    let html = '';
    
    typeOrder.forEach(type => {
        if (grouped[type] && grouped[type].length > 0) {
            html += `
                <div>
                    <div class="flex items-center mb-6">
                        <div class="w-1.5 h-8 bg-blue-600 rounded-full mr-3"></div>
                        <h2 class="text-2xl font-bold text-gray-900">${type}s</h2>
                        <span class="ml-3 px-2.5 py-0.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                            ${grouped[type].length}
                        </span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            `;
            
            html += grouped[type].map(item => {
                const highlightedAbbr = highlightText(item.abbreviation, searchTerm);
                const highlightedTitle = highlightText(item.title, searchTerm);
                const highlightedDesc = highlightText(item.description, searchTerm);

                return `
                <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 flex flex-col h-full">
                    <div class="flex items-start justify-between mb-4">
                        <div>
                            <div class="flex items-center gap-2 mb-1">
                                <span class="text-2xl font-bold text-blue-600">${highlightedAbbr}</span>
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    item.type === 'Conference' ? 'bg-blue-100 text-blue-800' : 
                                    item.type === 'Journal' ? 'bg-green-100 text-green-800' : 
                                    'bg-orange-100 text-orange-800'
                                }">
                                    ${item.type}
                                </span>
                            </div>
                            <h3 class="text-lg font-semibold text-gray-900 leading-tight">${highlightedTitle}</h3>
                        </div>
                    </div>
                    
                    <p class="text-gray-600 mb-4 flex-grow text-sm">
                        ${highlightedDesc}
                    </p>

                    <div class="space-y-2 pt-4 border-t border-gray-50">
                        ${item.rank && item.rank !== 'N/A' ? `
                        <div class="flex items-center text-sm text-gray-500">
                            <i data-lucide="award" class="w-4 h-4 mr-2 text-yellow-500"></i>
                            <span>Rank: ${item.rank}</span>
                        </div>
                        ` : ''}
                        ${item.publisher ? `
                        <div class="flex items-center text-sm text-gray-500">
                            <i data-lucide="book" class="w-4 h-4 mr-2 text-purple-500"></i>
                            <span>Publisher: ${item.publisher}</span>
                        </div>
                        ` : ''}
                    </div>

                    <div class="mt-6">
                        <a href="${item.website}" target="_blank" class="block w-full text-center px-4 py-2 bg-gray-50 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200">
                            Visit Website
                        </a>
                    </div>
                </div>
            `}).join('');

            html += `
                    </div>
                </div>
            `;
        }
    });

    container.innerHTML = html;
    if (window.lucide) lucide.createIcons();
}

function filterConferences() {
    const searchInput = document.getElementById('search');
    const typeSelect = document.getElementById('type');
    const clearBtn = document.getElementById('clear-search');

    if (!searchInput || !typeSelect || !clearBtn) return;

    const searchTerm = searchInput.value.toLowerCase();
    const selectedType = typeSelect.value;

    // Toggle clear button
    if (searchTerm) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
    }

    // Update URL
    updateURLParams({
        search: searchTerm,
        type: selectedType
    });

    filteredConferences = conferences.filter(item => {
        const terms = searchTerm.split(/\s+/).filter(t => t.length > 0);
        
        const matchesSearch = terms.length === 0 || terms.every(term => {
            return item.title.toLowerCase().includes(term) ||
                   item.abbreviation.toLowerCase().includes(term) ||
                   item.description.toLowerCase().includes(term);
        });
        
        const matchesType = selectedType === 'All' || item.type === selectedType;

        return matchesSearch && matchesType;
    });

    renderConferences(filteredConferences, searchTerm);
}

// Initialize filters from URL
const initialParams = readURLParams();
const searchInput = document.getElementById('search');
const typeSelect = document.getElementById('type');

if (searchInput) {
    searchInput.value = initialParams.search;
    // Add event listeners
    const debouncedFilter = debounce(filterConferences, 300);
    searchInput.addEventListener('input', debouncedFilter);
}

if (typeSelect) {
    typeSelect.value = initialParams.type;
    typeSelect.addEventListener('change', filterConferences);
}

const clearBtn = document.getElementById('clear-search');
if (clearBtn && searchInput) {
    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        filterConferences();
        searchInput.focus();
    });
}

// Initial render
filterConferences();

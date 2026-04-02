// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Filter and search functionality
let filteredPapers = [...papers];

function comparePapersByTimeDesc(a, b) {
    if (a.year !== b.year) return b.year - a.year;
    return a.title.localeCompare(b.title);
}

// Sort papers by time (newest to oldest) by default
filteredPapers.sort(comparePapersByTimeDesc);

function getCategoryColor(category) {
    const colors = {
        'Analysis': 'bg-blue-100 text-blue-800 border-blue-200',
        'New Optimizer': 'bg-purple-100 text-purple-800 border-purple-200',
        'Survey': 'bg-orange-100 text-orange-800 border-orange-200'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 border-gray-200';
}

function renderPapers(papersToRender, searchTerm = '') {
    const container = document.getElementById('papers-container');
    const resultsCount = document.getElementById('results-count');

    resultsCount.textContent = papersToRender.length;

    if (papersToRender.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12">
                <i data-lucide="graduation-cap" class="w-16 h-16 mx-auto mb-4 text-gray-300"></i>
                <h3 class="text-lg font-medium text-gray-900 mb-2">No papers found</h3>
                <p class="text-gray-500">Try adjusting your search criteria or filters.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    container.innerHTML = papersToRender.map(paper => {
        // Use highlightText from utils.js
        const highlightedTitle = highlightText(paper.title, searchTerm);
        const highlightedAbstract = highlightText(paper.abstract, searchTerm);

        return `
        <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
            <div class="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                <div class="flex-1">
                    <div class="flex items-center justify-between mb-3">
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(paper.category)}">
                            ${paper.category}
                        </span>
                        <div class="flex items-center space-x-4 text-sm text-gray-500">
                            <span>${paper.year}</span>
                        </div>
                    </div>

                    <h3 class="text-xl font-bold text-blue-900 mb-2">
                        ${highlightedTitle}
                    </h3>

                    <p class="text-gray-700 mb-3 line-clamp-3">
                        ${highlightedAbstract}
                    </p>

                    <div class="flex flex-wrap gap-2 mb-4">
                        ${paper.tags.map(tag => {
                            const highlightedTag = highlightText(tag, searchTerm);
                            return `
                            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                                ${highlightedTag}
                            </span>
                        `}).join('')}
                    </div>

                    <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div class="text-sm text-gray-600">
                            ${paper.authors.map(author => highlightText(author, searchTerm)).join(', ')} (${paper.venue})
                        </div>
                        <a
                            href="${paper.arxivUrl}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                        >
                            Read Paper
                            <i data-lucide="external-link" class="w-4 h-4 ml-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `}).join('');

    // Re-initialize icons for the new content
    if (window.lucide) lucide.createIcons();
}

function filterPapers() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const selectedCategory = document.getElementById('category').value;
    const selectedYear = document.getElementById('year').value;
    const sortBy = document.getElementById('sort').value;
    const clearBtn = document.getElementById('clear-search');

    // Toggle clear button
    if (searchTerm) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
    }

    // Update URL using utils.js
    updateURLParams({
        search: searchTerm,
        category: selectedCategory,
        year: selectedYear,
        sort: sortBy
    });

    filteredPapers = papers.filter(paper => {
        const terms = searchTerm.split(/\s+/).filter(t => t.length > 0);
        
        const matchesSearch = terms.length === 0 || terms.every(term => {
            return paper.title.toLowerCase().includes(term) ||
                   paper.abstract.toLowerCase().includes(term) ||
                   paper.authors.some(author => author.toLowerCase().includes(term)) ||
                   paper.tags.some(tag => tag.toLowerCase().includes(term));
        });
        
        const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
        const matchesYear = selectedYear === 'All' || paper.year.toString() === selectedYear;

        return matchesSearch && matchesCategory && matchesYear;
    });

    // Sort papers
    filteredPapers.sort((a, b) => {
        switch (sortBy) {
            case 'year':
                return comparePapersByTimeDesc(a, b);
            case 'title':
                return a.title.localeCompare(b.title);
            default:
                return comparePapersByTimeDesc(a, b);
        }
    });

    renderPapers(filteredPapers, searchTerm);
}

// Initialize filters from URL using utils.js
const initialParams = readURLParams();
document.getElementById('search').value = initialParams.search;
document.getElementById('category').value = initialParams.category;
document.getElementById('year').value = initialParams.year;
document.getElementById('sort').value = initialParams.sort;

// Add event listeners
// Use debounce from utils.js
const debouncedFilter = debounce(filterPapers, 300);
document.getElementById('search').addEventListener('input', debouncedFilter);

const clearBtn = document.getElementById('clear-search');
clearBtn.addEventListener('click', () => {
    document.getElementById('search').value = '';
    filterPapers();
    document.getElementById('search').focus();
});

document.getElementById('category').addEventListener('change', filterPapers);
document.getElementById('year').addEventListener('change', filterPapers);
document.getElementById('sort').addEventListener('change', filterPapers);

// Initial render
filterPapers();

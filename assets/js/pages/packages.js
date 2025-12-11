// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Search Functionality
const searchInput = document.getElementById('package-search');
const clearBtn = document.getElementById('clear-search');
const noResults = document.getElementById('no-results');
const packageCards = document.querySelectorAll('.grid > div.group');

function filterPackages() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let hasResults = false;

    if (searchTerm) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
    }

    packageCards.forEach(card => {
        const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const description = card.querySelector('p')?.textContent.toLowerCase() || '';
        const badges = Array.from(card.querySelectorAll('span')).map(s => s.textContent.toLowerCase()).join(' ');
        
        const content = `${title} ${description} ${badges}`;
        
        if (content.includes(searchTerm)) {
            card.style.display = '';
            hasResults = true;
        } else {
            card.style.display = 'none';
        }
    });

    if (hasResults) {
        noResults.classList.add('hidden');
    } else {
        noResults.classList.remove('hidden');
        if (window.lucide) {
            lucide.createIcons();
        }
    }
}

if (searchInput) {
    searchInput.addEventListener('input', filterPackages);
}

if (clearBtn) {
    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        filterPackages();
        searchInput.focus();
    });
}

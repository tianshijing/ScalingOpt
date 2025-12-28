// Common utility functions for ScalingOpt

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
    if (!searchTerm || !text) return text;
    const terms = searchTerm.split(/\s+/).filter(t => t.length > 0);
    if (terms.length === 0) return text;

    let highlighted = text;
    // Sort terms by length desc to match longest first
    const sortedTerms = [...terms].sort((a, b) => b.length - a.length);
    
    // Escape special regex characters
    const escapedTerms = sortedTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`(${escapedTerms.join('|')})`, 'gi');
    
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
        sort: url.searchParams.get('sort') || 'year' // Default sort usually 'year'
    };
}

// Number counting animation
function animateCountUp(elementId, targetCount) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const startCount = parseInt(element.textContent) || 0;
    const duration = 1500; // 1.5 seconds
    const startTime = performance.now();
    
    function updateCount(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Use easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(startCount + (targetCount - startCount) * easeOutQuart);
        
        element.textContent = currentCount;
        
        if (progress < 1) {
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = targetCount;
        }
    }
    
    requestAnimationFrame(updateCount);
}

// Back to Top Button Logic - Enhanced
function initBackToTop() {
    // Create button if it doesn't exist
    let backToTopButton = document.getElementById('back-to-top');
    if (!backToTopButton) {
        backToTopButton = document.createElement('button');
        backToTopButton.id = 'back-to-top';
        backToTopButton.className = 'back-to-top';
        backToTopButton.setAttribute('aria-label', 'Back to top');
        backToTopButton.setAttribute('title', 'Back to top');
        backToTopButton.innerHTML = '<i data-lucide="arrow-up" class="w-6 h-6"></i>';
        document.body.appendChild(backToTopButton);
        if (window.lucide) lucide.createIcons();
    }

    // Throttled scroll handler for better performance
    let ticking = false;
    const handleScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY || window.pageYOffset;
                if (scrollY > 300) {
                    backToTopButton.classList.add('visible');
                } else {
                    backToTopButton.classList.remove('visible');
                }
                ticking = false;
            });
            ticking = true;
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        // Add haptic feedback if available
        if (navigator.vibrate) {
            navigator.vibrate(10);
        }
    });

    // Keyboard support
    backToTopButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            backToTopButton.click();
        }
    });
}

// Enhanced navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('nav');
    if (!navbar) return;

    let ticking = false;
    const handleScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY || window.pageYOffset;
                if (scrollY > 50) {
                    navbar.classList.add('navbar-scrolled');
                } else {
                    navbar.classList.remove('navbar-scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
}

// Initialize common libraries
function initCommon() {
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            easing: 'ease-out-cubic',
            disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        });
    }

    // Initialize Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Initialize navbar scroll effect
    initNavbarScroll();

    // Lazy load images
    initLazyLoading();
}

// Lazy loading for images
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        }, {
            rootMargin: '50px'
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Export functions if using modules (optional, but good for future)
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        debounce,
        highlightText,
        updateURLParams,
        readURLParams,
        animateCountUp,
        initBackToTop
    };
}


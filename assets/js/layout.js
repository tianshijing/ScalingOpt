document.addEventListener('DOMContentLoaded', function() {
    injectLayout();
    initTotalPageviews();
});

function initTotalPageviews() {
    const display = document.getElementById('total-pageviews');
    const status = document.getElementById('total-pageviews-status');
    if (!display) return;

    function setStatus(text, className) {
        if (!status) return;
        status.textContent = text;
        status.className = className;
    }

    function renderCount(value, animate = false) {
        if (!display) return;
        const count = Number(value);
        if (!Number.isFinite(count)) {
            display.textContent = String(value);
            return;
        }
        if (animate && typeof animateCountUp === 'function') {
            animateCountUp('total-pageviews', count);
        } else {
            display.textContent = count.toLocaleString();
        }
    }

    function syncFromMapWidget() {
        const source = document.querySelector('.mapmyvisitors-visitors');
        const rawText = source ? source.textContent.trim() : '';
        const match = rawText.match(/[\d,]+/);
        if (match) {
            const value = Number(match[0].replace(/,/g, ''));
            renderCount(value);
            setStatus('Live total', 'mt-2 text-xs font-semibold text-emerald-600');
            return true;
        }
        return false;
    }

    if (syncFromMapWidget()) return;

    setStatus('Awaiting map', 'mt-2 text-xs font-semibold text-blue-600');

    let attempts = 0;
    const poller = window.setInterval(() => {
        attempts += 1;
        if (syncFromMapWidget() || attempts >= 30) {
            window.clearInterval(poller);
            if (attempts >= 30 && display.textContent === '...') {
                display.textContent = 'Loading';
                setStatus('Map syncing', 'mt-2 text-xs font-semibold text-blue-600');
            }
        }
    }, 500);

    const observer = new MutationObserver(() => {
        if (syncFromMapWidget()) {
            observer.disconnect();
        }
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
    });
}

function injectLayout() {
    // Determine root path based on current location
    const isPagesDir = window.location.pathname.includes('/pages/');
    const rootPath = isPagesDir ? '../' : './';
    const githubLogo = `
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.31-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.3 1.23A11.47 11.47 0 0 1 12 6.8c1.02 0 2.05.14 3.01.41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.69.25 2.94.12 3.25.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.21.7.83.58C20.57 21.79 24 17.29 24 12c0-6.63-5.37-12-12-12Z"/>
        </svg>
    `;
    
    // Navbar HTML
    const navbarHTML = `
    <nav class="bg-white/95 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50 shadow-sm transition-all duration-300">
        <div class="max-w-screen-2xl mx-auto px-3 sm:px-4 lg:px-6">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <a href="${rootPath}index.html" class="flex items-center group transition-transform duration-300 hover:scale-105">
                        <span class="text-xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors">ScalingOpt</span>
                    </a>
                </div>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-1">
                    <a href="${rootPath}pages/about_us.html" class="px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium nav-link" data-page="about_us.html">About Us</a>
                    <a href="${rootPath}pages/optimizers.html" class="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium nav-link" data-page="optimizers.html">
                        <i data-lucide="search" class="w-4 h-4"></i>
                        <span>Optimizers</span>
                    </a>
                    <div class="relative group">
                        <button class="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium nav-link-group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" aria-expanded="false" aria-haspopup="true" aria-label="Collection menu">
                            <i data-lucide="layers" class="w-4 h-4"></i>
                            <span>Collection</span>
                            <i data-lucide="chevron-down" class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"></i>
                        </button>
                        <div class="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100 overflow-hidden" role="menu" aria-label="Collection submenu">
                            <div class="py-2">
                                <a href="${rootPath}pages/schedulers.html" class="flex items-center space-x-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 rounded-lg mx-1">
                                    <i data-lucide="clock" class="w-4 h-4"></i>
                                    <span>Schedulers</span>
                                </a>
                                <a href="${rootPath}pages/visualizations.html" class="flex items-center space-x-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 rounded-lg mx-1">
                                    <i data-lucide="activity" class="w-4 h-4"></i>
                                    <span>Visualizations</span>
                                </a>
                                <a href="${rootPath}pages/implementations.html" class="flex items-center space-x-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 rounded-lg mx-1">
                                    <i data-lucide="code-2" class="w-4 h-4"></i>
                                    <span>Implementations</span>
                                </a>
                                <a href="${rootPath}pages/training_strategy.html" class="flex items-center space-x-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 rounded-lg mx-1">
                                    <i data-lucide="brain-circuit" class="w-4 h-4"></i>
                                    <span>Training Strategy</span>
                                </a>
                                <a href="${rootPath}pages/packages.html" class="flex items-center space-x-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 rounded-lg mx-1">
                                    <i data-lucide="package" class="w-4 h-4"></i>
                                    <span>Open-source Packages</span>
                                </a>
                                <a href="${rootPath}pages/experiments.html" class="flex items-center space-x-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 rounded-lg mx-1">
                                    <i data-lucide="flask-conical" class="w-4 h-4"></i>
                                    <span>Experiments & Analysis</span>
                                </a>
                                <a href="${rootPath}pages/precision.html" class="flex items-center space-x-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 rounded-lg mx-1">
                                    <i data-lucide="cpu" class="w-4 h-4"></i>
                                    <span>Precision & Quantization</span>
                                </a>
                                <a href="${rootPath}pages/conferences.html" class="flex items-center space-x-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 rounded-lg mx-1">
                                    <i data-lucide="calendar" class="w-4 h-4"></i>
                                    <span>Conferences & Journals</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <a href="${rootPath}pages/benchmarks.html" class="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium nav-link" data-page="benchmarks.html">
                        <i data-lucide="bar-chart-3" class="w-4 h-4"></i>
                        <span>Benchmarks</span>
                    </a>
                    <a href="${rootPath}pages/papers.html" class="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium nav-link" data-page="papers.html">
                        <i data-lucide="graduation-cap" class="w-4 h-4"></i>
                        <span>Papers</span>
                    </a>
                    <a href="${rootPath}pages/tutorials.html" class="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium nav-link" data-page="tutorials.html">
                        <i data-lucide="book-open" class="w-4 h-4"></i>
                        <span>Tutorials</span>
                    </a>
                    <a href="${rootPath}pages/blogs.html" class="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium nav-link" data-page="blogs.html">
                        <i data-lucide="file-text" class="w-4 h-4"></i>
                        <span>Blogs</span>
                    </a>
                    <div class="relative group">
                        <button class="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium nav-link-group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" aria-expanded="false" aria-haspopup="true" aria-label="Links menu">
                            <i data-lucide="link" class="w-4 h-4"></i>
                            <span>Links</span>
                            <i data-lucide="chevron-down" class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"></i>
                        </button>
                        <div class="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100 overflow-hidden" role="menu" aria-label="Links submenu">
                            <div class="py-2">
                                <a href="https://openenvision.github.io/BlogXiv/" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 rounded-lg mx-1">
                                    <img src="https://openenvision.github.io/BlogXiv/site/assets/img/brand/icon.svg" alt="" class="w-5 h-5 object-contain">
                                    <span class="text-base font-semibold">BlogXiv</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <a href="${rootPath}pages/community.html" class="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium nav-link" data-page="community.html">
                        <i data-lucide="users" class="w-4 h-4"></i>
                        <span>Community</span>
                    </a>
                    <a href="https://github.com/tianshijing/ScalingOpt" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200" aria-label="GitHub repository">
                        ${githubLogo}
                        <span class="hidden lg:inline">GitHub</span>
                    </a>
                </div>

                <!-- Mobile menu button -->
                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-button" class="text-gray-700 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-2" aria-label="Toggle mobile menu" aria-expanded="false" aria-controls="mobile-menu">
                        <i data-lucide="menu" class="w-6 h-6"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="md:hidden bg-white border-t border-gray-200 hidden" role="menu" aria-label="Mobile navigation">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <a href="${rootPath}pages/about_us.html" class="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">About Us</a>
                <a href="${rootPath}pages/optimizers.html" class="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
                    <i data-lucide="search" class="w-4 h-4"></i>
                    <span>Optimizers</span>
                </a>
                <div class="space-y-1">
                    <button id="mobile-collection-btn" class="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
                        <div class="flex items-center space-x-2">
                            <i data-lucide="layers" class="w-4 h-4"></i>
                            <span>Collection</span>
                        </div>
                        <i data-lucide="chevron-down" class="w-4 h-4"></i>
                    </button>
                    <div id="mobile-collection-menu" class="hidden pl-4">
                        <a href="${rootPath}pages/schedulers.html" class="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
                            <i data-lucide="clock" class="w-4 h-4"></i>
                            <span>Schedulers</span>
                        </a>
                        <a href="${rootPath}pages/visualizations.html" class="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
                            <i data-lucide="activity" class="w-4 h-4"></i>
                            <span>Visualizations</span>
                        </a>
                        <a href="${rootPath}pages/implementations.html" class="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
                            <i data-lucide="code-2" class="w-4 h-4"></i>
                            <span>Implementations</span>
                        </a>
                        <a href="${rootPath}pages/training_strategy.html" class="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
                            <i data-lucide="brain-circuit" class="w-4 h-4"></i>
                            <span>Training Strategy</span>
                        </a>
                        <a href="${rootPath}pages/packages.html" class="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
                            <i data-lucide="package" class="w-4 h-4"></i>
                            <span>Open-source Packages</span>
                        </a>
                        <a href="${rootPath}pages/experiments.html" class="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
                            <i data-lucide="flask-conical" class="w-4 h-4"></i>
                            <span>Experiments & Analysis</span>
                        </a>
                        <a href="${rootPath}pages/precision.html" class="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
                            <i data-lucide="cpu" class="w-4 h-4"></i>
                            <span>Precision & Quantization</span>
                        </a>
                        <a href="${rootPath}pages/conferences.html" class="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
                            <i data-lucide="calendar" class="w-4 h-4"></i>
                            <span>Conferences & Journals</span>
                        </a>
                    </div>
                </div>
                <a href="${rootPath}pages/benchmarks.html" class="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
                    <i data-lucide="bar-chart-3" class="w-4 h-4"></i>
                    <span>Benchmarks</span>
                </a>
                <a href="${rootPath}pages/papers.html" class="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
                    <i data-lucide="graduation-cap" class="w-4 h-4"></i>
                    <span>Papers</span>
                </a>
                <a href="${rootPath}pages/tutorials.html" class="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
                    <i data-lucide="book-open" class="w-4 h-4"></i>
                    <span>Tutorials</span>
                </a>
                <a href="${rootPath}pages/blogs.html" class="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
                    <i data-lucide="file-text" class="w-4 h-4"></i>
                    <span>Blogs</span>
                </a>
                <div class="space-y-1">
                    <button id="mobile-links-btn" class="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200" aria-expanded="false" aria-controls="mobile-links-menu">
                        <div class="flex items-center space-x-2">
                            <i data-lucide="link" class="w-4 h-4"></i>
                            <span>Links</span>
                        </div>
                        <i data-lucide="chevron-down" class="w-4 h-4"></i>
                    </button>
                    <div id="mobile-links-menu" class="hidden pl-4">
                        <a href="https://openenvision.github.io/BlogXiv/" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
                            <img src="https://openenvision.github.io/BlogXiv/site/assets/img/brand/icon.svg" alt="" class="w-5 h-5 object-contain">
                            <span class="text-base font-semibold">BlogXiv</span>
                        </a>
                    </div>
                </div>
                <a href="${rootPath}pages/community.html" class="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
                    <i data-lucide="users" class="w-4 h-4"></i>
                    <span>Community</span>
                </a>
                <a href="https://github.com/tianshijing/ScalingOpt" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200" aria-label="GitHub repository">
                    ${githubLogo}
                    <span>GitHub</span>
                </a>
            </div>
        </div>
    </nav>
    `;

    // Footer HTML
    const footerHTML = `
    <footer class="bg-white border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
                <!-- Brand -->
                <div class="col-span-1 md:col-span-2">
                    <div class="flex items-center mb-4">
                        <span class="text-2xl font-bold text-blue-900">ScalingOpt</span>
                    </div>
                    <p class="text-gray-600 mb-4 max-w-md">
                        A comprehensive platform for scaling optimization algorithms. 
                        Discover, compare, and contribute to cutting-edge optimizers for large-scale machine learning.
                    </p>
                    <div class="flex space-x-4">
                        <a href="https://github.com/tianshijing/ScalingOpt" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-600 transition-colors duration-200" aria-label="GitHub repository">
                            ${githubLogo}
                        </a>
                        <a href="mailto:juanxitian1031@gmail.com" class="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                            <i data-lucide="mail" class="w-5 h-5"></i>
                        </a>
                    </div>
                </div>

                <!-- Library -->
                <div>
                    <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Library</h3>
                    <ul class="space-y-2">
                        <li><a href="${rootPath}pages/optimizers.html" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">Optimizers</a></li>
                        <li><a href="${rootPath}pages/schedulers.html" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">Schedulers</a></li>
                        <li><a href="${rootPath}pages/benchmarks.html" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">Benchmarks</a></li>
                        <li><a href="${rootPath}pages/packages.html" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">Packages</a></li>
                    </ul>
                </div>

                <!-- Resources -->
                <div>
                    <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Resources</h3>
                    <ul class="space-y-2">
                        <li><a href="${rootPath}pages/papers.html" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">Papers</a></li>
                        <li><a href="${rootPath}pages/tutorials.html" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">Tutorials</a></li>
                        <li><a href="${rootPath}pages/blogs.html" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">Blogs</a></li>
                        <li><a href="${rootPath}pages/visualizations.html" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">Visualizations</a></li>
                        <li><a href="${rootPath}pages/implementations.html" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">Implementations</a></li>
                    </ul>
                </div>

                <!-- Community -->
                <div>
                    <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Community</h3>
                    <ul class="space-y-2">
                        <li><a href="${rootPath}pages/community.html" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">Community</a></li>
                        <li><a href="${rootPath}pages/about_us.html" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">About Us</a></li>
                        <li><a href="${rootPath}pages/conferences.html" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">Conferences</a></li>
                        <li><a href="${rootPath}pages/experiments.html" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">Experiments</a></li>
                    </ul>
                </div>
            </div>

            <div class="border-t border-gray-100 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-500 text-sm">
                    © 2026 ScalingOpt Community. All rights reserved.
                </p>
                <div class="flex items-center space-x-1 text-gray-500 text-sm mt-4 md:mt-0">
                    <span>Made with</span>
                    <i data-lucide="heart" class="w-4 h-4 text-red-500"></i>
                    <span>by the community</span>
                </div>
            </div>
        </div>
    </footer>
    `;

    // Inject HTML
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) navbarPlaceholder.outerHTML = navbarHTML;
    
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) footerPlaceholder.outerHTML = footerHTML;

    // Initialize Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Highlight active link
    highlightActiveLink();

    // Initialize Mobile Menu
    initMobileMenu();

    // Initialize Back to Top
    if (typeof initBackToTop === 'function') {
        initBackToTop();
    }

    // Initialize Common Libraries (AOS, Lucide)
    if (typeof initCommon === 'function') {
        initCommon();
    }

    // Initialize navbar scroll effect
    if (typeof initNavbarScroll === 'function') {
        initNavbarScroll();
    }
}

function highlightActiveLink() {
    const currentPath = window.location.pathname;
    const filename = currentPath.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-link').forEach(link => {
        const page = link.getAttribute('data-page');
        if (page === filename || (filename === '' && page === 'index.html')) {
            link.classList.add('text-blue-700', 'bg-blue-50', 'font-semibold'); // Active style
            link.classList.remove('text-gray-700');
        } else {
            link.classList.remove('text-blue-700', 'bg-blue-50', 'font-semibold');
            link.classList.add('text-gray-700');
        }
    });
}

function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', function() {
        const icon = this.querySelector('i');
        const isExpanded = !menu.classList.contains('hidden');
        
        if (isExpanded) {
            menu.classList.add('hidden');
            icon.setAttribute('data-lucide', 'menu');
            btn.setAttribute('aria-expanded', 'false');
        } else {
            menu.classList.remove('hidden');
            icon.setAttribute('data-lucide', 'x');
            btn.setAttribute('aria-expanded', 'true');
        }
        
        if (window.lucide) window.lucide.createIcons();
    });

    // Keyboard support for mobile menu
    btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            btn.click();
        }
    });
    
    // Mobile Collection Submenu
    const collectionBtn = document.getElementById('mobile-collection-btn');
    const collectionMenu = document.getElementById('mobile-collection-menu');
    if (collectionBtn && collectionMenu) {
        collectionBtn.addEventListener('click', () => {
            collectionMenu.classList.toggle('hidden');
        });
    }

    const linksBtn = document.getElementById('mobile-links-btn');
    const linksMenu = document.getElementById('mobile-links-menu');
    if (linksBtn && linksMenu) {
        linksBtn.addEventListener('click', () => {
            const isHidden = linksMenu.classList.toggle('hidden');
            linksBtn.setAttribute('aria-expanded', (!isHidden).toString());
        });
    }
}

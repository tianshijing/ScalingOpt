document.addEventListener('DOMContentLoaded', function() {
    injectLayout();
});

function injectLayout() {
    // Determine root path based on current location
    const isPagesDir = window.location.pathname.includes('/pages/');
    const rootPath = isPagesDir ? '../' : './';
    
    // Navbar HTML
    const navbarHTML = `
    <nav class="bg-white/95 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <a href="${rootPath}index.html" class="flex items-center">
                        <span class="text-xl font-bold text-blue-900">ScalingOpt</span>
                    </a>
                </div>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-5">
                    <a href="${rootPath}pages/about_us.html" class="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium nav-link" data-page="about_us.html">About Us</a>
                    <a href="${rootPath}pages/optimizers.html" class="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium nav-link" data-page="optimizers.html">
                        <i data-lucide="search" class="w-4 h-4"></i>
                        <span>Optimizers</span>
                    </a>
                    <div class="relative group">
                        <button class="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium nav-link-group">
                            <i data-lucide="layers" class="w-4 h-4"></i>
                            <span>Collection</span>
                            <i data-lucide="chevron-down" class="w-4 h-4"></i>
                        </button>
                        <div class="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                            <div class="py-1">
                                <a href="${rootPath}pages/schedulers.html" class="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">
                                    <i data-lucide="clock" class="w-4 h-4"></i>
                                    <span>Schedulers</span>
                                </a>
                                <a href="${rootPath}pages/visualizations.html" class="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">
                                    <i data-lucide="activity" class="w-4 h-4"></i>
                                    <span>Visualizations</span>
                                </a>
                                <a href="${rootPath}pages/implementations.html" class="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">
                                    <i data-lucide="code-2" class="w-4 h-4"></i>
                                    <span>Implementations</span>
                                </a>
                                <a href="${rootPath}pages/training_strategy.html" class="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">
                                    <i data-lucide="brain-circuit" class="w-4 h-4"></i>
                                    <span>Training Strategy</span>
                                </a>
                                <a href="${rootPath}pages/packages.html" class="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">
                                    <i data-lucide="package" class="w-4 h-4"></i>
                                    <span>Open-source Packages</span>
                                </a>
                                <a href="${rootPath}pages/experiments.html" class="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">
                                    <i data-lucide="flask-conical" class="w-4 h-4"></i>
                                    <span>Experiments & Analysis</span>
                                </a>
                                <a href="${rootPath}pages/precision.html" class="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">
                                    <i data-lucide="cpu" class="w-4 h-4"></i>
                                    <span>Precision & Quantization</span>
                                </a>
                                <a href="${rootPath}pages/conferences.html" class="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">
                                    <i data-lucide="calendar" class="w-4 h-4"></i>
                                    <span>Conferences & Journals</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <a href="${rootPath}pages/benchmarks.html" class="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium nav-link" data-page="benchmarks.html">
                        <i data-lucide="bar-chart-3" class="w-4 h-4"></i>
                        <span>Benchmarks</span>
                    </a>
                    <a href="${rootPath}pages/papers.html" class="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium nav-link" data-page="papers.html">
                        <i data-lucide="graduation-cap" class="w-4 h-4"></i>
                        <span>Papers</span>
                    </a>
                    <a href="${rootPath}pages/tutorials.html" class="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium nav-link" data-page="tutorials.html">
                        <i data-lucide="book-open" class="w-4 h-4"></i>
                        <span>Tutorials</span>
                    </a>
                    <a href="${rootPath}pages/blogs.html" class="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium nav-link" data-page="blogs.html">
                        <i data-lucide="file-text" class="w-4 h-4"></i>
                        <span>Blogs</span>
                    </a>
                    <a href="${rootPath}pages/community.html" class="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium nav-link" data-page="community.html">
                        <i data-lucide="users" class="w-4 h-4"></i>
                        <span>Community</span>
                    </a>
                    <a href="https://github.com/tianshijing/ScalingOpt" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                        <i data-lucide="github" class="w-5 h-5"></i>
                        <span class="hidden lg:inline">GitHub</span>
                    </a>
                </div>

                <!-- Mobile menu button -->
                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-button" class="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                        <i data-lucide="menu" class="w-6 h-6"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="md:hidden bg-white border-t border-gray-200 hidden">
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
                <a href="${rootPath}pages/community.html" class="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
                    <i data-lucide="users" class="w-4 h-4"></i>
                    <span>Community</span>
                </a>
                <a href="https://github.com/tianshijing/ScalingOpt" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
                    <i data-lucide="github" class="w-4 h-4"></i>
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
                        <span class="text-xl font-bold text-blue-900">ScalingOpt</span>
                    </div>
                    <p class="text-gray-600 mb-4 max-w-md">
                        A comprehensive platform for scaling optimization algorithms. 
                        Discover, compare, and contribute to cutting-edge optimizers for large-scale machine learning.
                    </p>
                    <div class="flex space-x-4">
                        <a href="https://github.com/tianshijing/ScalingOpt" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                            <i data-lucide="github" class="w-5 h-5"></i>
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
                    © 2025 ScalingOpt Community. All rights reserved.
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
}

function highlightActiveLink() {
    const currentPath = window.location.pathname;
    const filename = currentPath.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-link').forEach(link => {
        const page = link.getAttribute('data-page');
        if (page === filename || (filename === '' && page === 'index.html')) {
            link.classList.add('text-blue-700'); // Active style
            link.classList.remove('text-gray-700');
        }
    });
}

function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', function() {
        const icon = this.querySelector('i');
        
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
            icon.setAttribute('data-lucide', 'x');
        } else {
            menu.classList.add('hidden');
            icon.setAttribute('data-lucide', 'menu');
        }
        
        if (window.lucide) window.lucide.createIcons();
    });
    
    // Mobile Collection Submenu
    const collectionBtn = document.getElementById('mobile-collection-btn');
    const collectionMenu = document.getElementById('mobile-collection-menu');
    if (collectionBtn && collectionMenu) {
        collectionBtn.addEventListener('click', () => {
            collectionMenu.classList.toggle('hidden');
        });
    }
}


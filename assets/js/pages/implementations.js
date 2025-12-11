// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Render Implementations
function renderImplementations() {
    const container = document.getElementById('implementations-grid');
    if (!container || typeof implementations === 'undefined') return;

    const html = implementations.map((section, index) => {
        return `
            <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group" data-aos="fade-up" data-aos-delay="${index * 50}">
                <div class="p-6">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="p-2 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                            <i data-lucide="folder-open" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            ${section.category}
                        </h3>
                    </div>
                    
                    ${section.items.length > 0 ? `
                        <ul class="space-y-2">
                            ${section.items.map(item => `
                                <li class="flex items-start gap-2 text-gray-600 text-sm">
                                    <i data-lucide="chevron-right" class="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0"></i>
                                    <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="hover:text-blue-600 transition-colors duration-200 hover:underline">
                                        ${item.name}
                                    </a>
                                </li>
                            `).join('')}
                        </ul>
                    ` : `
                        <p class="text-gray-500 text-sm italic">Collection</p>
                    `}
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = html;
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Run on load
document.addEventListener('DOMContentLoaded', renderImplementations);

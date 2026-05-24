// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Load and update statistics
function updateStatistics() {
    // Update optimizer count
    if (typeof optimizers !== 'undefined') {
        const optimizerCount = optimizers.length;
        const optimizerElement = document.getElementById('optimizer-count');
        if (optimizerElement) {
            animateCountUp('optimizer-count', optimizerCount);
        }
    }

    // Update papers count
    if (typeof papers !== 'undefined') {
        const papersCount = papers.length;
        const papersElement = document.getElementById('papers-count');
        if (papersElement) {
            animateCountUp('papers-count', papersCount);
        }
    }

    // Count benchmark files
    const benchmarkCount = 5; // Based on files in benchmark folder
    const benchmarksElement = document.getElementById('benchmarks-count');
    if (benchmarksElement) {
        benchmarksElement.textContent = benchmarkCount;
    }
}

// Initialize all statistics when page loads
window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        updateStatistics();
    }, 100); // Small delay to ensure data files are loaded
});

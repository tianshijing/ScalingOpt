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

// Visitor counter functionality
function updateVisitorCount() {
    // Check if this is a new visitor
    const visitorKey = 'scalingopt_visitor';
    const visitCountKey = 'scalingopt_visit_count';
    const lastVisitKey = 'scalingopt_last_visit';
    
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem(lastVisitKey);
    const isNewVisitor = !localStorage.getItem(visitorKey);
    const isNewDay = lastVisit !== today;
    
    // If this is a new visitor or a new day, increment the count
    if (isNewVisitor || isNewDay) {
        let currentCount = parseInt(localStorage.getItem(visitCountKey)) || 100;
        currentCount++;
        localStorage.setItem(visitCountKey, currentCount.toString());
        localStorage.setItem(visitorKey, 'true');
        localStorage.setItem(lastVisitKey, today);
        
        // Update the display with animation
        animateCountUp('visitor-count', currentCount);
    } else {
        // Just display the current count
        const currentCount = parseInt(localStorage.getItem(visitCountKey)) || 100;
        const visitorElement = document.getElementById('visitor-count');
        if (visitorElement) {
            visitorElement.textContent = currentCount;
        }
    }
}

// Initialize all statistics when page loads
window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        updateStatistics();
        updateVisitorCount();
    }, 100); // Small delay to ensure data files are loaded
});

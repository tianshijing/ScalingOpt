// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// GitHub API data fetching
async function fetchGitHubStats() {
    try {
        // Fetch repository data
        const repoResponse = await fetch('https://api.github.com/repos/tianshijing/ScalingOpt');
        const repoData = await repoResponse.json();
        
        // Fetch contributors data
        const contributorsResponse = await fetch('https://api.github.com/repos/tianshijing/ScalingOpt/contributors');
        const contributorsData = await contributorsResponse.json();
        
        // Fetch issues data
        const issuesResponse = await fetch('https://api.github.com/repos/tianshijing/ScalingOpt/issues?state=closed');
        const issuesData = await issuesResponse.json();
        
        // Fetch pull requests data
        const prResponse = await fetch('https://api.github.com/repos/tianshijing/ScalingOpt/pulls?state=closed');
        const prData = await prResponse.json();
        
        // Update the display with animation
        animateCountUp('contributors-count', contributorsData.length);
        animateCountUp('stars-count', repoData.stargazers_count);
        animateCountUp('pr-count', prData.length);
        animateCountUp('issues-count', issuesData.length);
        
    } catch (error) {
        console.log('GitHub API not available, using fallback data');
        // Fallback to static data if API fails
        animateCountUp('contributors-count', 1);
        animateCountUp('stars-count', 2);
        animateCountUp('pr-count', 0);
        animateCountUp('issues-count', 0);
    }
}

// Fetch GitHub stats when page loads
fetchGitHubStats();

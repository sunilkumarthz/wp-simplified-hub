// Page-specific JavaScript for podcasts page

// Extended podcast data for the podcasts page
const allPodcasts = [
    {
        id: 1,
        title: "The Future of WordPress with Matt Mullenweg",
        description: "An in-depth conversation about WordPress direction, upcoming features, and the community's future",
        thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=400&fit=crop",
        duration: "1:15:32",
        published_date: "2024-01-20",
        guest: "Matt Mullenweg",
        episode: 45
    },
    {
        id: 2,
        title: "Building WordPress Communities",
        description: "How to foster and grow WordPress communities, featuring insights from community leaders worldwide",
        thumbnail: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=400&fit=crop",
        duration: "52:18",
        published_date: "2024-01-18",
        guest: "Andrea Middleton",
        episode: 44
    },
    {
        id: 3,
        title: "WordPress Performance Optimization",
        description: "Expert tips for faster WordPress websites, covering caching, optimization, and best practices",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
        duration: "38:45",
        published_date: "2024-01-15",
        guest: "Felix Arntz",
        episode: 43
    },
    {
        id: 4,
        title: "The Business of WordPress",
        description: "Building successful WordPress businesses, from freelancing to agencies and SaaS products",
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        duration: "48:22",
        published_date: "2024-01-12",
        guest: "Chris Lema",
        episode: 42
    },
    {
        id: 5,
        title: "WordPress Security Deep Dive",
        description: "Advanced security strategies for WordPress sites, including threat analysis and prevention",
        thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=400&fit=crop",
        duration: "44:15",
        published_date: "2024-01-10",
        guest: "Kathy Zant",
        episode: 41
    },
    {
        id: 6,
        title: "Headless WordPress and JAMstack",
        description: "Exploring headless WordPress architectures, decoupled setups, and modern web development",
        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop",
        duration: "55:33",
        published_date: "2024-01-08",
        guest: "Jason Bahl",
        episode: 40
    },
    {
        id: 7,
        title: "WordPress Accessibility Standards",
        description: "Making WordPress sites accessible to everyone, covering WCAG guidelines and best practices",
        thumbnail: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=400&fit=crop",
        duration: "41:47",
        published_date: "2024-01-05",
        guest: "Joe Dolson",
        episode: 39
    },
    {
        id: 8,
        title: "The WordPress Editor Evolution",
        description: "From Classic Editor to Gutenberg and beyond, exploring the evolution of content creation",
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop",
        duration: "49:18",
        published_date: "2024-01-03",
        guest: "Riad Benguella",
        episode: 38
    },
    {
        id: 9,
        title: "WordPress Hosting Insights",
        description: "Choosing the right hosting for WordPress, from shared hosting to enterprise solutions",
        thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop",
        duration: "43:55",
        published_date: "2024-01-01",
        guest: "Jonathan Wold",
        episode: 37
    },
    {
        id: 10,
        title: "WordPress Theme Review Process",
        description: "Inside the WordPress.org theme review process, guidelines, and best practices for developers",
        thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=400&fit=crop",
        duration: "37:12",
        published_date: "2023-12-29",
        guest: "Carolina Nymark",
        episode: 36
    },
    {
        id: 11,
        title: "WordPress Plugin Development Ethics",
        description: "Ethical considerations in plugin development, user privacy, and responsible coding practices",
        thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
        duration: "46:29",
        published_date: "2023-12-27",
        guest: "Pippin Williamson",
        episode: 35
    },
    {
        id: 12,
        title: "WordPress Global Community",
        description: "WordPress communities around the world, WordCamps, and the future of global collaboration",
        thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop",
        duration: "51:08",
        published_date: "2023-12-25",
        guest: "Josepha Haden Chomphosy",
        episode: 34
    }
];

// Podcast page state
let filteredPodcasts = [...allPodcasts];
let currentDisplayCount = 9;
let isLoading = false;

function loadAllPodcasts() {
    showLoadingState();
    
    // Simulate API delay
    setTimeout(() => {
        displayPodcasts(filteredPodcasts.slice(0, currentDisplayCount));
        hideLoadingState();
        updateLoadMoreButton();
    }, 1000);
}

function displayPodcasts(podcasts) {
    const container = document.getElementById('podcasts-grid');
    const loadingElement = document.getElementById('loading-podcasts');
    const errorElement = document.getElementById('error-podcasts');
    const emptyElement = document.getElementById('empty-podcasts');
    
    if (podcasts.length === 0) {
        container.classList.add('hidden');
        emptyElement.classList.remove('hidden');
        loadingElement.classList.add('hidden');
        errorElement.classList.add('hidden');
        return;
    }
    
    container.innerHTML = podcasts.map(podcast => createPodcastCard(podcast)).join('');
    container.classList.remove('hidden');
    loadingElement.classList.add('hidden');
    errorElement.classList.add('hidden');
    emptyElement.classList.add('hidden');
    
    lucide.createIcons();
}

function showLoadingState() {
    const loadingElement = document.getElementById('loading-podcasts');
    const container = document.getElementById('podcasts-grid');
    const errorElement = document.getElementById('error-podcasts');
    const emptyElement = document.getElementById('empty-podcasts');
    
    loadingElement.classList.remove('hidden');
    container.classList.add('hidden');
    errorElement.classList.add('hidden');
    emptyElement.classList.add('hidden');
}

function hideLoadingState() {
    const loadingElement = document.getElementById('loading-podcasts');
    loadingElement.classList.add('hidden');
}

function updateLoadMoreButton() {
    const loadMoreContainer = document.getElementById('load-more-container');
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    if (currentDisplayCount < filteredPodcasts.length) {
        loadMoreContainer.classList.remove('hidden');
        
        const remaining = filteredPodcasts.length - currentDisplayCount;
        loadMoreBtn.innerHTML = `
            Load More Episodes (${remaining} remaining)
            <i data-lucide="arrow-down" class="w-5 h-5 ml-2"></i>
        `;
        lucide.createIcons();
    } else {
        loadMoreContainer.classList.add('hidden');
    }
}

function loadMorePodcasts() {
    if (isLoading) return;
    
    isLoading = true;
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    // Show loading state on button
    loadMoreBtn.innerHTML = `
        <div class="loading-spinner w-5 h-5 mr-2"></div>
        Loading...
    `;
    loadMoreBtn.disabled = true;
    
    // Simulate API delay
    setTimeout(() => {
        currentDisplayCount += 9;
        const morePodcasts = filteredPodcasts.slice(0, currentDisplayCount);
        displayPodcasts(morePodcasts);
        updateLoadMoreButton();
        
        isLoading = false;
        loadMoreBtn.disabled = false;
    }, 800);
}

// Enhanced podcast card creation with episode info and better styling
function createPodcastCard(podcast) {
    return `
        <div class="podcast-card card-hover" data-podcast-id="${podcast.id}">
            <div class="relative">
                <img src="${podcast.thumbnail}" alt="${podcast.title}" class="w-full h-48 object-cover">
                <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div class="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                        <i data-lucide="mic" class="w-6 h-6 text-slate-900"></i>
                    </div>
                </div>
                <div class="absolute top-2 left-2 bg-wp-teal text-slate-900 text-xs px-2 py-1 rounded font-semibold flex items-center">
                    <i data-lucide="mic" class="w-3 h-3 mr-1"></i>
                    Episode ${podcast.episode}
                </div>
                <div class="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    ${podcast.duration}
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-baloo font-semibold text-white mb-2 line-clamp-2 hover:text-wp-teal transition-colors cursor-pointer">
                    ${podcast.title}
                </h3>
                <p class="text-slate-400 text-sm mb-3 line-clamp-2">${podcast.description}</p>
                
                <div class="flex items-center mb-4 text-sm text-slate-500">
                    <i data-lucide="user" class="w-4 h-4 mr-2"></i>
                    <span class="mr-4">Guest: ${podcast.guest}</span>
                    <i data-lucide="calendar" class="w-4 h-4 mr-2"></i>
                    <span>${formatDate(podcast.published_date)}</span>
                </div>
                
                <div class="flex space-x-2">
                    <button class="flex-1 bg-wp-teal hover:bg-wp-teal/90 text-slate-900 py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center">
                        <i data-lucide="play" class="w-4 h-4 mr-2"></i>
                        Listen Now
                    </button>
                    <button class="p-2 border border-slate-600 hover:border-wp-teal text-slate-400 hover:text-wp-teal rounded-lg transition-colors" title="Add to playlist">
                        <i data-lucide="plus" class="w-4 h-4"></i>
                    </button>
                    <button class="p-2 border border-slate-600 hover:border-wp-teal text-slate-400 hover:text-wp-teal rounded-lg transition-colors" title="Share episode">
                        <i data-lucide="share" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Initialize podcasts page functionality
function initializePodcastsPage() {
    // Load initial podcasts
    loadAllPodcasts();
    
    // Load more functionality
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMorePodcasts);
    }
    
    // Podcast card click handlers
    document.addEventListener('click', function(e) {
        const podcastCard = e.target.closest('.podcast-card');
        if (podcastCard && (e.target.closest('.w-16') || e.target.closest('h3'))) {
            const podcastId = podcastCard.dataset.podcastId;
            const podcast = allPodcasts.find(p => p.id == podcastId);
            if (podcast) {
                playPodcast(podcast);
            }
        }
    });
}

function playPodcast(podcast) {
    // Simulate podcast player opening
    alert(`Playing Podcast: ${podcast.title}\n\nGuest: ${podcast.guest}\nEpisode: ${podcast.episode}\nDuration: ${podcast.duration}`);
    
    // In a real implementation, this would open a podcast player modal
    // or navigate to a podcast detail page with embedded audio player
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('podcasts.html')) {
        initializePodcastsPage();
    }
});

// Export functions for use in other files
window.PodcastsPage = {
    loadAllPodcasts,
    loadMorePodcasts,
    createPodcastCard,
    allPodcasts
};
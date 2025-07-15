// Page-specific JavaScript for videos page

// Extended video data for the videos page
const allVideos = [
    {
        id: 1,
        title: "WordPress Theme Development Complete Guide",
        description: "Learn how to create custom WordPress themes from scratch with modern development practices",
        thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=225&fit=crop",
        duration: "45:32",
        views: "12.5K",
        published_date: "2024-01-15",
        category: "Theme Development"
    },
    {
        id: 2,
        title: "Gutenberg Block Development Tutorial",
        description: "Master custom block creation for the WordPress editor with React and modern JavaScript",
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop",
        duration: "32:18",
        views: "8.2K",
        published_date: "2024-01-10",
        category: "Block Development"
    },
    {
        id: 3,
        title: "WordPress Security Best Practices",
        description: "Secure your WordPress site with these essential tips and advanced security measures",
        thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=225&fit=crop",
        duration: "28:45",
        views: "15.3K",
        published_date: "2024-01-05",
        category: "Security"
    },
    {
        id: 4,
        title: "WordPress Performance Optimization",
        description: "Speed up your WordPress site with caching, optimization, and performance best practices",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop",
        duration: "38:22",
        views: "9.8K",
        published_date: "2024-01-03",
        category: "Performance"
    },
    {
        id: 5,
        title: "Custom Post Types and Fields",
        description: "Create custom content types and advanced custom fields for dynamic WordPress sites",
        thumbnail: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=225&fit=crop",
        duration: "41:15",
        views: "7.1K",
        published_date: "2024-01-01",
        category: "Development"
    },
    {
        id: 6,
        title: "WooCommerce Setup and Customization",
        description: "Build and customize online stores with WooCommerce from setup to advanced features",
        thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop",
        duration: "52:33",
        views: "11.2K",
        published_date: "2023-12-28",
        category: "E-commerce"
    },
    {
        id: 7,
        title: "REST API Development in WordPress",
        description: "Build powerful APIs with WordPress REST API for headless and decoupled applications",
        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop",
        duration: "35:47",
        views: "6.4K",
        published_date: "2023-12-25",
        category: "API Development"
    },
    {
        id: 8,
        title: "WordPress Multisite Network Setup",
        description: "Configure and manage WordPress multisite networks for large-scale deployments",
        thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=225&fit=crop",
        duration: "44:18",
        views: "5.9K",
        published_date: "2023-12-22",
        category: "Multisite"
    },
    {
        id: 9,
        title: "Advanced WordPress Hooks and Filters",
        description: "Master WordPress hooks, filters, and actions for powerful plugin and theme development",
        thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=225&fit=crop",
        duration: "39:55",
        views: "8.7K",
        published_date: "2023-12-20",
        category: "Development"
    },
    {
        id: 10,
        title: "WordPress Database Optimization",
        description: "Optimize WordPress database performance with queries, indexing, and cleanup techniques",
        thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=225&fit=crop",
        duration: "33:12",
        views: "4.8K",
        published_date: "2023-12-18",
        category: "Database"
    },
    {
        id: 11,
        title: "WordPress Plugin Development Basics",
        description: "Create your first WordPress plugin with proper structure, hooks, and best practices",
        thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=225&fit=crop",
        duration: "47:29",
        views: "10.3K",
        published_date: "2023-12-15",
        category: "Plugin Development"
    },
    {
        id: 12,
        title: "WordPress SEO Complete Guide",
        description: "Optimize your WordPress site for search engines with technical SEO and content strategies",
        thumbnail: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&h=225&fit=crop",
        duration: "42:08",
        views: "13.6K",
        published_date: "2023-12-12",
        category: "SEO"
    }
];

// Search functionality
let filteredVideos = [...allVideos];
let currentDisplayCount = 9;
let isLoading = false;

function loadAllVideos() {
    showLoadingState();
    
    // Simulate API delay
    setTimeout(() => {
        displayVideos(filteredVideos.slice(0, currentDisplayCount));
        hideLoadingState();
        updateLoadMoreButton();
    }, 1000);
}

function displayVideos(videos) {
    const container = document.getElementById('videos-grid');
    const loadingElement = document.getElementById('loading-videos');
    const errorElement = document.getElementById('error-videos');
    
    if (videos.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-16">
                <i data-lucide="video-off" class="w-16 h-16 text-slate-400 mx-auto mb-4"></i>
                <h3 class="text-xl font-semibold text-white mb-2">No Videos Found</h3>
                <p class="text-slate-400">Try adjusting your search terms or browse all videos.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }
    
    container.innerHTML = videos.map(video => createVideoCard(video)).join('');
    container.classList.remove('hidden');
    loadingElement.classList.add('hidden');
    errorElement.classList.add('hidden');
    
    lucide.createIcons();
}

function showLoadingState() {
    const loadingElement = document.getElementById('loading-videos');
    const container = document.getElementById('videos-grid');
    const errorElement = document.getElementById('error-videos');
    
    loadingElement.classList.remove('hidden');
    container.classList.add('hidden');
    errorElement.classList.add('hidden');
}

function hideLoadingState() {
    const loadingElement = document.getElementById('loading-videos');
    loadingElement.classList.add('hidden');
}

function updateLoadMoreButton() {
    const loadMoreContainer = document.getElementById('load-more-container');
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    if (currentDisplayCount < filteredVideos.length) {
        loadMoreContainer.classList.remove('hidden');
        
        const remaining = filteredVideos.length - currentDisplayCount;
        loadMoreBtn.innerHTML = `
            Load More Videos (${remaining} remaining)
            <i data-lucide="arrow-down" class="w-5 h-5 ml-2"></i>
        `;
        lucide.createIcons();
    } else {
        loadMoreContainer.classList.add('hidden');
    }
}

function loadMoreVideos() {
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
        const moreVideos = filteredVideos.slice(0, currentDisplayCount);
        displayVideos(moreVideos);
        updateLoadMoreButton();
        
        isLoading = false;
        loadMoreBtn.disabled = false;
    }, 800);
}

function searchVideos(query) {
    if (!query.trim()) {
        filteredVideos = [...allVideos];
    } else {
        filteredVideos = allVideos.filter(video => 
            video.title.toLowerCase().includes(query.toLowerCase()) ||
            video.description.toLowerCase().includes(query.toLowerCase()) ||
            video.category.toLowerCase().includes(query.toLowerCase())
        );
    }
    
    currentDisplayCount = 9;
    showLoadingState();
    
    setTimeout(() => {
        displayVideos(filteredVideos.slice(0, currentDisplayCount));
        updateLoadMoreButton();
    }, 500);
}

// Enhanced video card creation with category and better styling
function createVideoCard(video) {
    return `
        <div class="video-card card-hover" data-video-id="${video.id}">
            <div class="video-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-48 object-cover">
                <div class="play-overlay">
                    <div class="play-button">
                        <i data-lucide="play" class="w-6 h-6 text-slate-900"></i>
                    </div>
                </div>
                <div class="absolute top-2 left-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    ${video.duration}
                </div>
                <div class="absolute top-2 right-2 bg-wp-teal text-slate-900 text-xs px-2 py-1 rounded font-semibold">
                    ${video.category}
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-baloo font-semibold text-white mb-2 line-clamp-2 hover:text-wp-teal transition-colors cursor-pointer">
                    ${video.title}
                </h3>
                <p class="text-slate-400 text-sm mb-4 line-clamp-2">${video.description}</p>
                <div class="flex items-center justify-between text-xs text-slate-500">
                    <span class="flex items-center">
                        <i data-lucide="eye" class="w-3 h-3 mr-1"></i>
                        ${video.views} views
                    </span>
                    <span class="flex items-center">
                        <i data-lucide="calendar" class="w-3 h-3 mr-1"></i>
                        ${formatDate(video.published_date)}
                    </span>
                </div>
                <div class="mt-4 flex space-x-2">
                    <button class="flex-1 bg-wp-teal hover:bg-wp-teal/90 text-slate-900 py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center">
                        <i data-lucide="play" class="w-4 h-4 mr-2"></i>
                        Watch Now
                    </button>
                    <button class="p-2 border border-slate-600 hover:border-wp-teal text-slate-400 hover:text-wp-teal rounded-lg transition-colors">
                        <i data-lucide="bookmark" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Initialize videos page functionality
function initializeVideosPage() {
    // Load initial videos
    loadAllVideos();
    
    // Search functionality
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = this.querySelector('input[type="text"]').value;
            searchVideos(query);
        });
        
        // Real-time search
        const searchInput = searchForm.querySelector('input[type="text"]');
        let searchTimeout;
        
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                searchVideos(this.value);
            }, 300);
        });
    }
    
    // Load more functionality
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreVideos);
    }
    
    // Video card click handlers
    document.addEventListener('click', function(e) {
        const videoCard = e.target.closest('.video-card');
        if (videoCard && (e.target.closest('.play-button') || e.target.closest('h3'))) {
            const videoId = videoCard.dataset.videoId;
            const video = allVideos.find(v => v.id == videoId);
            if (video) {
                playVideo(video);
            }
        }
    });
}

function playVideo(video) {
    // Simulate video player opening
    alert(`Playing: ${video.title}\n\nDuration: ${video.duration}\nViews: ${video.views}`);
    
    // In a real implementation, this would open a video player modal
    // or navigate to a video detail page
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('videos.html')) {
        initializeVideosPage();
    }
});

// Export functions for use in other files
window.VideosPage = {
    loadAllVideos,
    searchVideos,
    loadMoreVideos,
    createVideoCard,
    allVideos
};
// Page-specific JavaScript for playlists page

// Extended playlist data for the playlists page
const allPlaylists = [
    {
        id: 1,
        title: "WordPress for Beginners",
        description: "Complete beginner's guide to WordPress development with hands-on projects and real-world examples",
        thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=225&fit=crop",
        video_count: "12 videos",
        total_duration: "3h 45m",
        level: "beginner",
        category: "Development"
    },
    {
        id: 2,
        title: "Advanced WordPress Development",
        description: "Master advanced WordPress development techniques including custom post types, hooks, and performance optimization",
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop",
        video_count: "18 videos",
        total_duration: "6h 20m",
        level: "advanced",
        category: "Development"
    },
    {
        id: 3,
        title: "WooCommerce Mastery",
        description: "Build and customize WooCommerce stores from setup to advanced features and payment integration",
        thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop",
        video_count: "15 videos",
        total_duration: "4h 30m",
        level: "intermediate",
        category: "ecommerce"
    },
    {
        id: 4,
        title: "WordPress Theme Development",
        description: "Create custom WordPress themes from scratch using modern development practices and tools",
        thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=225&fit=crop",
        video_count: "20 videos",
        total_duration: "7h 15m",
        level: "intermediate",
        category: "Development"
    },
    {
        id: 5,
        title: "WordPress Plugin Development",
        description: "Learn to create powerful WordPress plugins with proper structure, hooks, and best practices",
        thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=225&fit=crop",
        video_count: "16 videos",
        total_duration: "5h 45m",
        level: "advanced",
        category: "Development"
    },
    {
        id: 6,
        title: "WordPress Security Essentials",
        description: "Comprehensive guide to securing WordPress sites against threats and vulnerabilities",
        thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=225&fit=crop",
        video_count: "10 videos",
        total_duration: "3h 20m",
        level: "intermediate",
        category: "Security"
    },
    {
        id: 7,
        title: "Gutenberg Block Development",
        description: "Master React-based block development for the WordPress Gutenberg editor",
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop",
        video_count: "14 videos",
        total_duration: "4h 50m",
        level: "advanced",
        category: "Development"
    },
    {
        id: 8,
        title: "WordPress Performance Optimization",
        description: "Speed up your WordPress sites with caching, optimization, and performance best practices",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop",
        video_count: "12 videos",
        total_duration: "4h 10m",
        level: "intermediate",
        category: "Performance"
    },
    {
        id: 9,
        title: "WordPress Multisite Networks",
        description: "Configure and manage WordPress multisite networks for large-scale deployments",
        thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=225&fit=crop",
        video_count: "8 videos",
        total_duration: "2h 40m",
        level: "advanced",
        category: "Development"
    },
    {
        id: 10,
        title: "WordPress REST API Development",
        description: "Build powerful APIs with WordPress REST API for headless and decoupled applications",
        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop",
        video_count: "13 videos",
        total_duration: "4h 25m",
        level: "advanced",
        category: "API"
    },
    {
        id: 11,
        title: "E-commerce with WordPress",
        description: "Complete guide to building online stores with WordPress and WooCommerce",
        thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop",
        video_count: "22 videos",
        total_duration: "8h 30m",
        level: "beginner",
        category: "ecommerce"
    },
    {
        id: 12,
        title: "WordPress SEO Mastery",
        description: "Optimize your WordPress sites for search engines with technical SEO and content strategies",
        thumbnail: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&h=225&fit=crop",
        video_count: "11 videos",
        total_duration: "3h 55m",
        level: "intermediate",
        category: "SEO"
    }
];

// Playlist page state
let filteredPlaylists = [...allPlaylists];
let currentDisplayCount = 9;
let isLoading = false;
let activeFilter = 'all';

function loadAllPlaylists() {
    showLoadingState();
    
    // Simulate API delay
    setTimeout(() => {
        displayPlaylists(filteredPlaylists.slice(0, currentDisplayCount));
        hideLoadingState();
        updateLoadMoreButton();
    }, 1000);
}

function displayPlaylists(playlists) {
    const container = document.getElementById('playlists-grid');
    const loadingElement = document.getElementById('loading-playlists');
    const errorElement = document.getElementById('error-playlists');
    const emptyElement = document.getElementById('empty-playlists');
    
    if (playlists.length === 0) {
        container.classList.add('hidden');
        emptyElement.classList.remove('hidden');
        loadingElement.classList.add('hidden');
        errorElement.classList.add('hidden');
        return;
    }
    
    container.innerHTML = playlists.map(playlist => createPlaylistCard(playlist)).join('');
    container.classList.remove('hidden');
    loadingElement.classList.add('hidden');
    errorElement.classList.add('hidden');
    emptyElement.classList.add('hidden');
    
    lucide.createIcons();
}

function showLoadingState() {
    const loadingElement = document.getElementById('loading-playlists');
    const container = document.getElementById('playlists-grid');
    const errorElement = document.getElementById('error-playlists');
    const emptyElement = document.getElementById('empty-playlists');
    
    loadingElement.classList.remove('hidden');
    container.classList.add('hidden');
    errorElement.classList.add('hidden');
    emptyElement.classList.add('hidden');
}

function hideLoadingState() {
    const loadingElement = document.getElementById('loading-playlists');
    loadingElement.classList.add('hidden');
}

function updateLoadMoreButton() {
    const loadMoreContainer = document.getElementById('load-more-container');
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    if (currentDisplayCount < filteredPlaylists.length) {
        loadMoreContainer.classList.remove('hidden');
        
        const remaining = filteredPlaylists.length - currentDisplayCount;
        loadMoreBtn.innerHTML = `
            Load More Playlists (${remaining} remaining)
            <i data-lucide="arrow-down" class="w-5 h-5 ml-2"></i>
        `;
        lucide.createIcons();
    } else {
        loadMoreContainer.classList.add('hidden');
    }
}

function loadMorePlaylists() {
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
        const morePlaylists = filteredPlaylists.slice(0, currentDisplayCount);
        displayPlaylists(morePlaylists);
        updateLoadMoreButton();
        
        isLoading = false;
        loadMoreBtn.disabled = false;
    }, 800);
}

function filterPlaylists(filter) {
    activeFilter = filter;
    
    if (filter === 'all') {
        filteredPlaylists = [...allPlaylists];
    } else {
        filteredPlaylists = allPlaylists.filter(playlist => 
            playlist.level === filter || playlist.category === filter
        );
    }
    
    currentDisplayCount = 9;
    showLoadingState();
    
    setTimeout(() => {
        displayPlaylists(filteredPlaylists.slice(0, currentDisplayCount));
        updateLoadMoreButton();
    }, 500);
}

// Enhanced playlist card creation with level and better styling
function createPlaylistCard(playlist) {
    const levelColors = {
        beginner: 'bg-green-500/20 text-green-400 border-green-500/30',
        intermediate: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
        advanced: 'bg-red-500/20 text-red-400 border-red-500/30'
    };

    return `
        <div class="playlist-card card-hover" data-playlist-id="${playlist.id}">
            <div class="relative">
                <img src="${playlist.thumbnail}" alt="${playlist.title}" class="w-full h-48 object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                    <div class="absolute bottom-4 left-4 text-white">
                        <div class="text-sm opacity-90 flex items-center mb-1">
                            <i data-lucide="play-circle" class="w-4 h-4 mr-1"></i>
                            ${playlist.video_count}
                        </div>
                        <div class="text-sm opacity-90 flex items-center">
                            <i data-lucide="clock" class="w-4 h-4 mr-1"></i>
                            ${playlist.total_duration}
                        </div>
                    </div>
                </div>
                <div class="absolute top-2 right-2 ${levelColors[playlist.level]} text-xs px-2 py-1 rounded-full font-semibold border">
                    ${playlist.level.charAt(0).toUpperCase() + playlist.level.slice(1)}
                </div>
                <div class="absolute top-2 left-2 bg-wp-blue text-white text-xs px-2 py-1 rounded font-semibold">
                    Playlist
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-baloo font-semibold text-white mb-2 line-clamp-2 hover:text-wp-teal transition-colors cursor-pointer">
                    ${playlist.title}
                </h3>
                <p class="text-slate-400 text-sm mb-4 line-clamp-3">${playlist.description}</p>
                
                <div class="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <span class="flex items-center">
                        <i data-lucide="folder" class="w-3 h-3 mr-1"></i>
                        ${playlist.category}
                    </span>
                    <span class="flex items-center">
                        <i data-lucide="users" class="w-3 h-3 mr-1"></i>
                        1.2K enrolled
                    </span>
                </div>
                
                <div class="flex space-x-2">
                    <button class="flex-1 bg-wp-teal hover:bg-wp-teal/90 text-slate-900 py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center">
                        <i data-lucide="play" class="w-4 h-4 mr-2"></i>
                        Start Learning
                    </button>
                    <button class="p-2 border border-slate-600 hover:border-wp-teal text-slate-400 hover:text-wp-teal rounded-lg transition-colors" title="Add to watchlist">
                        <i data-lucide="bookmark" class="w-4 h-4"></i>
                    </button>
                    <button class="p-2 border border-slate-600 hover:border-wp-teal text-slate-400 hover:text-wp-teal rounded-lg transition-colors" title="Share playlist">
                        <i data-lucide="share" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Initialize playlists page functionality
function initializePlaylistsPage() {
    // Load initial playlists
    loadAllPlaylists();
    
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active filter
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterPlaylists(filter);
        });
    });
    
    // Load more functionality
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMorePlaylists);
    }
    
    // Playlist card click handlers
    document.addEventListener('click', function(e) {
        const playlistCard = e.target.closest('.playlist-card');
        if (playlistCard && (e.target.closest('.bg-wp-teal') || e.target.closest('h3'))) {
            const playlistId = playlistCard.dataset.playlistId;
            const playlist = allPlaylists.find(p => p.id == playlistId);
            if (playlist) {
                startPlaylist(playlist);
            }
        }
    });
}

function startPlaylist(playlist) {
    // Simulate playlist start
    alert(`Starting Playlist: ${playlist.title}\n\nLevel: ${playlist.level}\nVideos: ${playlist.video_count}\nDuration: ${playlist.total_duration}`);
    
    // In a real implementation, this would navigate to the playlist detail page
    // or open a playlist player with the first video
}

// Add CSS for filter buttons
const filterStyles = `
.filter-btn {
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid #334155;
    color: #94a3b8;
    padding: 0.75rem 1.25rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
}

.filter-btn:hover,
.filter-btn.active {
    background: #04d98b;
    color: #1e293b;
    border-color: #04d98b;
    transform: translateY(-2px);
}

.filter-btn i {
    width: 1rem;
    height: 1rem;
}
`;

// Add styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = filterStyles;
document.head.appendChild(styleSheet);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('playlists.html')) {
        initializePlaylistsPage();
    }
});

// Export functions for use in other files
window.PlaylistsPage = {
    loadAllPlaylists,
    loadMorePlaylists,
    filterPlaylists,
    createPlaylistCard,
    allPlaylists
};
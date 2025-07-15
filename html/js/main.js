// Main JavaScript for WPSimplified

// Sample data for demonstration
const sampleVideos = [
    {
        id: 1,
        title: "WordPress Theme Development Complete Guide",
        description: "Learn how to create custom WordPress themes from scratch",
        thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=225&fit=crop",
        duration: "45:32",
        views: "12.5K",
        published_date: "2024-01-15"
    },
    {
        id: 2,
        title: "Gutenberg Block Development Tutorial",
        description: "Master custom block creation for the WordPress editor",
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop",
        duration: "32:18",
        views: "8.2K",
        published_date: "2024-01-10"
    },
    {
        id: 3,
        title: "WordPress Security Best Practices",
        description: "Secure your WordPress site with these essential tips",
        thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=225&fit=crop",
        duration: "28:45",
        views: "15.3K",
        published_date: "2024-01-05"
    }
];

const samplePodcasts = [
    {
        id: 1,
        title: "The Future of WordPress with Matt Mullenweg",
        description: "An in-depth conversation about WordPress direction",
        thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=400&fit=crop",
        duration: "1:15:32",
        published_date: "2024-01-20"
    },
    {
        id: 2,
        title: "Building WordPress Communities",
        description: "How to foster and grow WordPress communities",
        thumbnail: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=400&fit=crop",
        duration: "52:18",
        published_date: "2024-01-18"
    },
    {
        id: 3,
        title: "WordPress Performance Optimization",
        description: "Expert tips for faster WordPress websites",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
        duration: "38:45",
        published_date: "2024-01-15"
    }
];

const samplePlaylists = [
    {
        id: 1,
        title: "WordPress for Beginners",
        description: "Complete beginner's guide to WordPress",
        thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=225&fit=crop",
        video_count: "12 videos",
        total_duration: "3h 45m"
    },
    {
        id: 2,
        title: "Advanced WordPress Development",
        description: "Master advanced WordPress development techniques",
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop",
        video_count: "18 videos",
        total_duration: "6h 20m"
    },
    {
        id: 3,
        title: "WooCommerce Mastery",
        description: "Build and customize WooCommerce stores",
        thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop",
        video_count: "15 videos",
        total_duration: "4h 30m"
    }
];

const sampleShorts = [
    {
        id: 1,
        title: "Quick CSS Tip #1",
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=533&fit=crop",
        duration: "0:45",
        views: "2.1K"
    },
    {
        id: 2,
        title: "WordPress Hook Explained",
        thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=533&fit=crop",
        duration: "1:20",
        views: "3.8K"
    },
    {
        id: 3,
        title: "Plugin Development Tip",
        thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=533&fit=crop",
        duration: "0:58",
        views: "1.9K"
    },
    {
        id: 4,
        title: "Database Query Optimization",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=533&fit=crop",
        duration: "1:15",
        views: "2.7K"
    }
];

// DOM utility functions
function createElement(tag, className = '', innerHTML = '') {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
}

// Video card creation
function createVideoCard(video) {
    return `
        <div class="video-card card-hover">
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
            </div>
            <div class="p-6">
                <h3 class="text-xl font-baloo font-semibold text-white mb-2 line-clamp-2">${video.title}</h3>
                <p class="text-slate-400 text-sm mb-4 line-clamp-2">${video.description}</p>
                <div class="flex items-center justify-between text-xs text-slate-500">
                    <span>${video.views} views</span>
                    <span>${formatDate(video.published_date)}</span>
                </div>
            </div>
        </div>
    `;
}

// Podcast card creation
function createPodcastCard(podcast) {
    return `
        <div class="podcast-card card-hover">
            <div class="relative">
                <img src="${podcast.thumbnail}" alt="${podcast.title}" class="w-full h-48 object-cover">
                <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div class="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center">
                        <i data-lucide="mic" class="w-6 h-6 text-slate-900"></i>
                    </div>
                </div>
                <div class="absolute top-2 left-2 bg-wp-teal text-slate-900 text-xs px-2 py-1 rounded font-semibold">
                    Podcast
                </div>
                <div class="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    ${podcast.duration}
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-baloo font-semibold text-white mb-2 line-clamp-2">${podcast.title}</h3>
                <p class="text-slate-400 text-sm mb-4 line-clamp-2">${podcast.description}</p>
                <button class="btn-primary w-full">
                    Listen Now
                </button>
            </div>
        </div>
    `;
}

// Playlist card creation
function createPlaylistCard(playlist) {
    return `
        <div class="playlist-card card-hover">
            <div class="relative">
                <img src="${playlist.thumbnail}" alt="${playlist.title}" class="w-full h-48 object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                    <div class="absolute bottom-4 left-4 text-white">
                        <div class="text-xs opacity-90">${playlist.video_count}</div>
                        <div class="text-xs opacity-90">${playlist.total_duration}</div>
                    </div>
                </div>
                <div class="absolute top-2 right-2 bg-wp-blue text-white text-xs px-2 py-1 rounded font-semibold">
                    Playlist
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-baloo font-semibold text-white mb-2 line-clamp-2">${playlist.title}</h3>
                <p class="text-slate-400 text-sm mb-4 line-clamp-2">${playlist.description}</p>
                <button class="btn-outline w-full">
                    Start Learning
                </button>
            </div>
        </div>
    `;
}

// Shorts card creation
function createShortsCard(short) {
    return `
        <div class="shorts-card card-hover">
            <div class="relative h-full">
                <img src="${short.thumbnail}" alt="${short.title}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <div class="absolute bottom-4 left-4 right-4 text-white">
                        <h3 class="text-sm font-semibold mb-1 line-clamp-2">${short.title}</h3>
                        <div class="flex items-center justify-between text-xs opacity-90">
                            <span>${short.duration}</span>
                            <span>${short.views} views</span>
                        </div>
                    </div>
                </div>
                <div class="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold">
                    Short
                </div>
            </div>
        </div>
    `;
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
}

// Load content functions
function loadLatestVideos() {
    const container = document.getElementById('latest-videos-grid');
    if (container) {
        container.innerHTML = sampleVideos.slice(0, 6).map(createVideoCard).join('');
        lucide.createIcons();
    }
}

function loadLatestPodcasts() {
    const container = document.getElementById('latest-podcasts-grid');
    if (container) {
        container.innerHTML = samplePodcasts.slice(0, 6).map(createPodcastCard).join('');
        lucide.createIcons();
    }
}

function loadFeaturedPlaylists() {
    const container = document.getElementById('playlists-grid');
    if (container) {
        container.innerHTML = samplePlaylists.slice(0, 6).map(createPlaylistCard).join('');
        lucide.createIcons();
    }
}

function loadLatestShorts() {
    const container = document.getElementById('latest-shorts-grid');
    if (container) {
        container.innerHTML = sampleShorts.slice(0, 8).map(createShortsCard).join('');
        lucide.createIcons();
    }
}

// Search functionality
function initializeSearch() {
    const searchForms = document.querySelectorAll('.search-form');
    searchForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = this.querySelector('input[type="text"]').value;
            performSearch(query);
        });
    });
}

function performSearch(query) {
    console.log('Searching for:', query);
    // Implement search logic here
    // For now, just show an alert
    alert(`Searching for: ${query}`);
}

// Mobile menu functionality
function initializeMobileMenu() {
    const toggleButton = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (toggleButton && mobileMenu) {
        toggleButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle icon
            const icon = this.querySelector('[data-lucide]');
            if (mobileMenu.classList.contains('hidden')) {
                icon.setAttribute('data-lucide', 'menu');
            } else {
                icon.setAttribute('data-lucide', 'x');
            }
            lucide.createIcons();
        });
    }
}

// Newsletter subscription
function initializeNewsletter() {
    const newsletterForms = document.querySelectorAll('form');
    newsletterForms.forEach(form => {
        // Only target newsletter forms (those with email input)
        const emailInput = form.querySelector('input[type="email"]');
        if (emailInput && form.querySelector('button[type="submit"]')) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = emailInput.value;
                
                if (email) {
                    // Simulate subscription
                    alert('Thank you for subscribing! You will receive our latest updates.');
                    emailInput.value = '';
                } else {
                    alert('Please enter a valid email address.');
                }
            });
        }
    });
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Animation on scroll
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    });

    animatedElements.forEach(el => elementObserver.observe(el));
}

// Page-specific initialization
function initializePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch (currentPage) {
        case 'index.html':
        case '':
            loadLatestVideos();
            loadLatestPodcasts();
            loadFeaturedPlaylists();
            loadLatestShorts();
            break;
        case 'videos.html':
            loadAllVideos();
            break;
        case 'podcasts.html':
            loadAllPodcasts();
            break;
        case 'playlists.html':
            loadAllPlaylists();
            break;
        case 'shorts.html':
            loadAllShorts();
            break;
    }
}

// Load more functionality
function initializeLoadMore() {
    const loadMoreButtons = document.querySelectorAll('[data-load-more]');
    loadMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const type = this.dataset.postType;
            loadMoreContent(type);
        });
    });
}

function loadMoreContent(type) {
    // Simulate loading more content
    console.log(`Loading more ${type}...`);
    // Add loading spinner
    // Fetch more content
    // Append to grid
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize core functionality
    initializeMobileMenu();
    initializeSearch();
    initializeNewsletter();
    initializeSmoothScrolling();
    initializeLazyLoading();
    initializeScrollAnimations();
    initializeLoadMore();
    
    // Load page-specific content
    initializePage();
    
    // Initialize Lucide icons
    lucide.createIcons();
    
    console.log('WPSimplified website initialized successfully!');
});

// Export functions for use in other files
window.WPSimplified = {
    loadLatestVideos,
    loadLatestPodcasts,
    loadFeaturedPlaylists,
    loadLatestShorts,
    createVideoCard,
    createPodcastCard,
    createPlaylistCard,
    createShortsCard,
    performSearch,
    formatDate
};
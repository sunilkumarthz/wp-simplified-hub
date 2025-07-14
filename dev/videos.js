// Videos page functionality
class VideosPage {
    constructor() {
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.allVideos = [];
        this.filteredVideos = [];
        this.searchQuery = '';
        this.isLoading = false;
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupSearch();
        this.loadVideos();
        this.initializeLucideIcons();
    }

    initializeLucideIcons() {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    setupMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuClose = document.getElementById('mobileMenuClose');
        const overlay = mobileMenu.querySelector('.mobile-menu__overlay');

        const openMenu = () => {
            mobileMenu.classList.add('mobile-menu--active');
            document.body.style.overflow = 'hidden';
        };

        const closeMenu = () => {
            mobileMenu.classList.remove('mobile-menu--active');
            document.body.style.overflow = '';
        };

        mobileMenuBtn?.addEventListener('click', openMenu);
        mobileMenuClose?.addEventListener('click', closeMenu);
        overlay?.addEventListener('click', closeMenu);

        const navItems = mobileMenu.querySelectorAll('.mobile-menu__nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', closeMenu);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('mobile-menu--active')) {
                closeMenu();
            }
        });
    }

    setupSearch() {
        const searchForm = document.getElementById('videoSearchForm');
        const searchInput = document.getElementById('searchInput');
        const clearSearch = document.getElementById('clearSearch');

        // Get search query from URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const initialSearch = urlParams.get('search');
        if (initialSearch) {
            searchInput.value = initialSearch;
            this.searchQuery = initialSearch;
        }

        searchForm?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSearch();
        });

        clearSearch?.addEventListener('click', () => {
            this.clearSearch();
        });

        // Setup load more button
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        loadMoreBtn?.addEventListener('click', () => {
            this.loadMoreVideos();
        });
    }

    async handleSearch() {
        const searchInput = document.getElementById('searchInput');
        const query = searchInput.value.trim();
        
        if (query === this.searchQuery) return;
        
        this.searchQuery = query;
        this.currentPage = 1;
        
        if (query) {
            this.showSearchInfo(query);
            await this.searchVideos(query);
        } else {
            this.hideSearchInfo();
            this.filteredVideos = [...this.allVideos];
            this.renderVideos();
        }
    }

    clearSearch() {
        const searchInput = document.getElementById('searchInput');
        searchInput.value = '';
        this.searchQuery = '';
        this.currentPage = 1;
        this.hideSearchInfo();
        this.filteredVideos = [...this.allVideos];
        this.renderVideos();
    }

    showSearchInfo(query) {
        const searchInfo = document.getElementById('searchInfo');
        const searchTerm = document.getElementById('searchTerm');
        
        if (searchInfo && searchTerm) {
            searchTerm.textContent = query;
            searchInfo.style.display = 'flex';
        }
    }

    hideSearchInfo() {
        const searchInfo = document.getElementById('searchInfo');
        if (searchInfo) {
            searchInfo.style.display = 'none';
        }
    }

    async loadVideos() {
        this.showLoading();
        
        try {
            this.allVideos = await this.fetchVideos();
            this.filteredVideos = [...this.allVideos];
            
            if (this.searchQuery) {
                await this.searchVideos(this.searchQuery);
            } else {
                this.renderVideos();
            }
            
        } catch (error) {
            console.error('Error loading videos:', error);
            this.showError();
        } finally {
            this.hideLoading();
        }
    }

    async searchVideos(query) {
        this.showLoading();
        
        try {
            // Simulate search API call
            await this.delay(800);
            
            // Filter videos based on search query
            this.filteredVideos = this.allVideos.filter(video => 
                video.title.toLowerCase().includes(query.toLowerCase()) ||
                video.description.toLowerCase().includes(query.toLowerCase())
            );
            
            this.renderVideos();
            
        } catch (error) {
            console.error('Search failed:', error);
            this.showError();
        } finally {
            this.hideLoading();
        }
    }

    async fetchVideos() {
        // Simulate API delay
        await this.delay(1500);
        
        // Generate mock video data
        return Array.from({ length: 50 }, (_, i) => ({
            id: i + 1,
            title: `WordPress Tutorial ${i + 1}: ${this.getRandomTutorialTitle()}`,
            description: `Learn ${this.getRandomTopic()} in this comprehensive WordPress tutorial. Perfect for ${this.getRandomLevel()} users.`,
            thumbnail: `https://images.unsplash.com/${this.getRandomImageId()}?w=400&h=225&fit=crop`,
            videourl: `https://youtube.com/watch?v=example${i + 1}`,
            duration: `${Math.floor(Math.random() * 20 + 5)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
            views: `${Math.floor(Math.random() * 100000 + 1000).toLocaleString()} views`,
            published_date: this.getRandomDate()
        }));
    }

    renderVideos() {
        const videosGrid = document.getElementById('videosGrid');
        const loadMoreSection = document.getElementById('loadMoreSection');
        
        if (!videosGrid) return;
        
        if (this.filteredVideos.length === 0) {
            this.showEmpty();
            return;
        }
        
        this.hideEmpty();
        
        const startIndex = 0;
        const endIndex = this.currentPage * this.itemsPerPage;
        const visibleVideos = this.filteredVideos.slice(startIndex, endIndex);
        
        videosGrid.innerHTML = this.renderVideosGrid(visibleVideos);
        
        // Show/hide load more button
        const hasMore = this.filteredVideos.length > endIndex;
        if (loadMoreSection) {
            loadMoreSection.style.display = hasMore ? 'block' : 'none';
        }
        
        this.initializeLucideIcons();
    }

    loadMoreVideos() {
        this.currentPage++;
        this.renderVideos();
    }

    renderVideosGrid(videos) {
        return videos.map(video => `
            <div class="card">
                <div class="card__image">
                    <img src="${video.thumbnail}" alt="${this.decodeHtmlEntities(video.title)}" loading="lazy">
                    <div class="card__overlay">
                        <a href="${video.videourl}" target="_blank" class="card__play-btn">
                            <i data-lucide="play"></i>
                        </a>
                    </div>
                    <div class="card__badge">
                        <i data-lucide="play"></i>
                        Video
                    </div>
                    <div class="card__duration">${video.duration}</div>
                </div>
                <div class="card__content">
                    <h3 class="card__title">${this.decodeHtmlEntities(video.title)}</h3>
                    <p class="card__description">${this.decodeHtmlEntities(video.description)}</p>
                    <div class="card__meta">
                        <span><i data-lucide="eye"></i> ${video.views}</span>
                        <span><i data-lucide="calendar"></i> ${this.formatDate(video.published_date)}</span>
                    </div>
                    <a href="${video.videourl}" target="_blank" class="btn btn--primary">
                        <i data-lucide="play"></i>
                        Watch Now
                    </a>
                </div>
            </div>
        `).join('');
    }

    showLoading() {
        const loadingState = document.getElementById('loadingState');
        if (loadingState) {
            loadingState.style.display = 'flex';
        }
    }

    hideLoading() {
        const loadingState = document.getElementById('loadingState');
        if (loadingState) {
            loadingState.style.display = 'none';
        }
    }

    showError() {
        const errorState = document.getElementById('errorState');
        if (errorState) {
            errorState.style.display = 'block';
        }
    }

    showEmpty() {
        const emptyState = document.getElementById('emptyState');
        const videosGrid = document.getElementById('videosGrid');
        const loadMoreSection = document.getElementById('loadMoreSection');
        
        if (emptyState) emptyState.style.display = 'block';
        if (videosGrid) videosGrid.innerHTML = '';
        if (loadMoreSection) loadMoreSection.style.display = 'none';
    }

    hideEmpty() {
        const emptyState = document.getElementById('emptyState');
        if (emptyState) {
            emptyState.style.display = 'none';
        }
    }

    // Utility functions
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    getRandomDate() {
        const start = new Date(2023, 0, 1);
        const end = new Date();
        const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return date.toISOString().split('T')[0];
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    }

    decodeHtmlEntities(text) {
        const textArea = document.createElement('textarea');
        textArea.innerHTML = text;
        return textArea.value;
    }

    getRandomTutorialTitle() {
        const titles = [
            'Theme Development Basics',
            'Plugin Creation Guide',
            'Custom Post Types',
            'Advanced Gutenberg Blocks',
            'WooCommerce Setup',
            'Performance Optimization',
            'Security Best Practices',
            'Custom Fields Tutorial',
            'REST API Integration',
            'Multisite Configuration'
        ];
        return titles[Math.floor(Math.random() * titles.length)];
    }

    getRandomTopic() {
        const topics = [
            'theme development',
            'plugin creation',
            'custom post types',
            'Gutenberg blocks',
            'WooCommerce',
            'performance optimization',
            'security practices',
            'custom fields',
            'REST API',
            'multisite setup'
        ];
        return topics[Math.floor(Math.random() * topics.length)];
    }

    getRandomLevel() {
        const levels = ['beginner', 'intermediate', 'advanced'];
        return levels[Math.floor(Math.random() * levels.length)];
    }

    getRandomImageId() {
        const imageIds = [
            'photo-1649972904349-6e44c42644a7',
            'photo-1488590528505-98d2b5aba04b',
            'photo-1518770660439-4636190af475',
            'photo-1461749280684-dccba630e2f6',
            'photo-1486312338219-ce68d2c6f44d'
        ];
        return imageIds[Math.floor(Math.random() * imageIds.length)];
    }
}

// Initialize the videos page
document.addEventListener('DOMContentLoaded', () => {
    new VideosPage();
});
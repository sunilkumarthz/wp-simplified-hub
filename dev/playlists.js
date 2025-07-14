// Playlists page functionality
class PlaylistsPage {
    constructor() {
        this.currentPage = 1;
        this.itemsPerPage = 9;
        this.allPlaylists = [];
        this.isLoading = false;
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.loadPlaylists();
        this.initializeLucideIcons();
        this.setupLoadMore();
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

    setupLoadMore() {
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        loadMoreBtn?.addEventListener('click', () => {
            this.loadMorePlaylists();
        });
    }

    async loadPlaylists() {
        this.showLoading();
        
        try {
            this.allPlaylists = await this.fetchPlaylists();
            this.updateTotalCount();
            this.renderPlaylists();
        } catch (error) {
            console.error('Error loading playlists:', error);
            this.showError();
        } finally {
            this.hideLoading();
        }
    }

    async fetchPlaylists() {
        // Simulate API delay
        await this.delay(1500);
        
        // Generate mock playlist data
        return Array.from({ length: 25 }, (_, i) => ({
            id: i + 1,
            title: `${this.getRandomPlaylistTitle()} - Complete Guide`,
            description: `Master ${this.getRandomTopic()} with this comprehensive playlist covering everything from basics to advanced techniques.`,
            thumbnail: `https://images.unsplash.com/${this.getRandomImageId()}?w=400&h=225&fit=crop`,
            video_count: Math.floor(Math.random() * 25 + 5),
            total_duration: `${Math.floor(Math.random() * 10 + 2)} hours`,
            level: this.getRandomLevel(),
            category: this.getRandomCategory()
        }));
    }

    updateTotalCount() {
        const totalPlaylistsEl = document.getElementById('totalPlaylists');
        if (totalPlaylistsEl) {
            totalPlaylistsEl.textContent = this.allPlaylists.length;
        }
    }

    renderPlaylists() {
        const playlistsGrid = document.getElementById('playlistsGrid');
        const loadMoreSection = document.getElementById('loadMoreSection');
        const remainingCount = document.getElementById('remainingCount');
        
        if (!playlistsGrid) return;
        
        if (this.allPlaylists.length === 0) {
            this.showEmpty();
            return;
        }
        
        this.hideEmpty();
        
        const startIndex = 0;
        const endIndex = this.currentPage * this.itemsPerPage;
        const visiblePlaylists = this.allPlaylists.slice(startIndex, endIndex);
        
        playlistsGrid.innerHTML = this.renderPlaylistsGrid(visiblePlaylists);
        
        // Show/hide load more button
        const hasMore = this.allPlaylists.length > endIndex;
        const remaining = this.allPlaylists.length - endIndex;
        
        if (loadMoreSection && remainingCount) {
            loadMoreSection.style.display = hasMore ? 'block' : 'none';
            remainingCount.textContent = remaining;
        }
        
        this.initializeLucideIcons();
    }

    loadMorePlaylists() {
        this.currentPage++;
        this.renderPlaylists();
    }

    renderPlaylistsGrid(playlists) {
        return playlists.map(playlist => `
            <div class="card">
                <div class="card__image">
                    <img src="${playlist.thumbnail}" alt="${this.decodeHtmlEntities(playlist.title)}" loading="lazy">
                    <div class="card__overlay">
                        <a href="videos.html" class="card__play-btn">
                            <i data-lucide="list"></i>
                        </a>
                    </div>
                    <div class="card__badge">
                        <i data-lucide="list"></i>
                        ${playlist.video_count} videos
                    </div>
                    <div class="playlist__level playlist__level--${playlist.level.toLowerCase()}">${playlist.level}</div>
                </div>
                <div class="card__content">
                    <div class="playlist__category">${playlist.category}</div>
                    <h3 class="card__title">${this.decodeHtmlEntities(playlist.title)}</h3>
                    <p class="card__description">${this.decodeHtmlEntities(playlist.description)}</p>
                    <div class="card__meta">
                        <span><i data-lucide="play"></i> ${playlist.video_count} videos</span>
                        <span><i data-lucide="clock"></i> ${playlist.total_duration}</span>
                    </div>
                    <a href="videos.html" class="btn btn--primary">
                        <i data-lucide="list"></i>
                        View Playlist
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
        const playlistsGrid = document.getElementById('playlistsGrid');
        const loadMoreSection = document.getElementById('loadMoreSection');
        
        if (emptyState) emptyState.style.display = 'block';
        if (playlistsGrid) playlistsGrid.innerHTML = '';
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

    decodeHtmlEntities(text) {
        const textArea = document.createElement('textarea');
        textArea.innerHTML = text;
        return textArea.value;
    }

    getRandomPlaylistTitle() {
        const titles = [
            'WordPress Basics',
            'Advanced WordPress Development',
            'WordPress Theme Creation',
            'Plugin Development Mastery',
            'WooCommerce Complete',
            'WordPress Security',
            'Performance Optimization',
            'Gutenberg Block Development',
            'WordPress Multisite',
            'Custom Post Types & Fields'
        ];
        return titles[Math.floor(Math.random() * titles.length)];
    }

    getRandomTopic() {
        const topics = [
            'WordPress fundamentals',
            'advanced development',
            'theme customization',
            'plugin creation',
            'e-commerce setup',
            'security practices',
            'performance tuning',
            'block development',
            'multisite management',
            'custom content types'
        ];
        return topics[Math.floor(Math.random() * topics.length)];
    }

    getRandomLevel() {
        const levels = ['Beginner', 'Intermediate', 'Advanced'];
        return levels[Math.floor(Math.random() * levels.length)];
    }

    getRandomCategory() {
        const categories = [
            'Development',
            'Design',
            'Business',
            'Security',
            'Performance',
            'E-commerce',
            'Content',
            'SEO'
        ];
        return categories[Math.floor(Math.random() * categories.length)];
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

// Initialize the playlists page
document.addEventListener('DOMContentLoaded', () => {
    new PlaylistsPage();
});
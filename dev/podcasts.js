// Podcasts page functionality
class PodcastsPage {
    constructor() {
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.allPodcasts = [];
        this.isLoading = false;
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.loadPodcasts();
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
            this.loadMorePodcasts();
        });
    }

    async loadPodcasts() {
        this.showLoading();
        
        try {
            this.allPodcasts = await this.fetchPodcasts();
            this.renderPodcasts();
        } catch (error) {
            console.error('Error loading podcasts:', error);
            this.showError();
        } finally {
            this.hideLoading();
        }
    }

    async fetchPodcasts() {
        // Simulate API delay
        await this.delay(1500);
        
        // Generate mock podcast data
        return Array.from({ length: 30 }, (_, i) => ({
            id: i + 1,
            title: `WordPress Creator Podcast #${i + 1}: ${this.getRandomPodcastTitle()}`,
            description: `In-depth conversation about ${this.getRandomTopic()} with expert insights and practical advice for WordPress professionals.`,
            thumbnail: `https://images.unsplash.com/${this.getRandomImageId()}?w=400&h=400&fit=crop`,
            videourl: `https://youtube.com/watch?v=podcast${i + 1}`,
            duration: `${Math.floor(Math.random() * 30 + 20)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
            published_date: this.getRandomDate(),
            guest: this.getRandomGuest()
        }));
    }

    renderPodcasts() {
        const podcastsGrid = document.getElementById('podcastsGrid');
        const loadMoreSection = document.getElementById('loadMoreSection');
        
        if (!podcastsGrid) return;
        
        if (this.allPodcasts.length === 0) {
            this.showEmpty();
            return;
        }
        
        this.hideEmpty();
        
        const startIndex = 0;
        const endIndex = this.currentPage * this.itemsPerPage;
        const visiblePodcasts = this.allPodcasts.slice(startIndex, endIndex);
        
        podcastsGrid.innerHTML = this.renderPodcastsGrid(visiblePodcasts);
        
        // Show/hide load more button
        const hasMore = this.allPodcasts.length > endIndex;
        if (loadMoreSection) {
            loadMoreSection.style.display = hasMore ? 'block' : 'none';
        }
        
        this.initializeLucideIcons();
    }

    loadMorePodcasts() {
        this.currentPage++;
        this.renderPodcasts();
    }

    renderPodcastsGrid(podcasts) {
        return podcasts.map(podcast => `
            <div class="card">
                <div class="card__image">
                    <img src="${podcast.thumbnail}" alt="${this.decodeHtmlEntities(podcast.title)}" loading="lazy">
                    <div class="card__overlay">
                        <a href="${podcast.videourl}" target="_blank" class="card__play-btn">
                            <i data-lucide="mic"></i>
                        </a>
                    </div>
                    <div class="card__badge">
                        <i data-lucide="mic"></i>
                        Podcast
                    </div>
                    <div class="card__duration">${podcast.duration}</div>
                </div>
                <div class="card__content">
                    <h3 class="card__title">${this.decodeHtmlEntities(podcast.title)}</h3>
                    <p class="card__description">${this.decodeHtmlEntities(podcast.description)}</p>
                    <div class="card__meta">
                        <span><i data-lucide="user"></i> ${podcast.guest}</span>
                        <span><i data-lucide="calendar"></i> ${this.formatDate(podcast.published_date)}</span>
                    </div>
                    <a href="${podcast.videourl}" target="_blank" class="btn btn--primary">
                        <i data-lucide="mic"></i>
                        Listen Now
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
        const podcastsGrid = document.getElementById('podcastsGrid');
        const loadMoreSection = document.getElementById('loadMoreSection');
        
        if (emptyState) emptyState.style.display = 'block';
        if (podcastsGrid) podcastsGrid.innerHTML = '';
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

    getRandomPodcastTitle() {
        const titles = [
            'Building Scalable WordPress Sites',
            'The Future of Gutenberg',
            'WordPress Security Best Practices',
            'Performance Optimization Secrets',
            'Community Building Strategies',
            'Plugin Development Insights',
            'Theme Design Principles',
            'WordPress Business Models',
            'Open Source Contributions',
            'Developer Career Paths'
        ];
        return titles[Math.floor(Math.random() * titles.length)];
    }

    getRandomTopic() {
        const topics = [
            'WordPress development',
            'community building',
            'plugin architecture',
            'theme customization',
            'performance optimization',
            'security practices',
            'business strategies',
            'open source contribution',
            'developer workflows',
            'industry trends'
        ];
        return topics[Math.floor(Math.random() * topics.length)];
    }

    getRandomGuest() {
        const guests = [
            'Sarah Johnson',
            'Mike Chen',
            'Alex Rodriguez',
            'Emma Thompson',
            'David Kim',
            'Lisa Anderson',
            'James Wilson',
            'Maria Garcia',
            'Ryan Smith',
            'Jennifer Lee'
        ];
        return guests[Math.floor(Math.random() * guests.length)];
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

// Initialize the podcasts page
document.addEventListener('DOMContentLoaded', () => {
    new PodcastsPage();
});
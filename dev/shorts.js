// Shorts page functionality
class ShortsPage {
    constructor() {
        this.currentPage = 1;
        this.itemsPerPage = 12;
        this.allShorts = [];
        this.isLoading = false;
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.loadShorts();
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
            this.loadMoreShorts();
        });
    }

    async loadShorts() {
        this.showLoading();
        
        try {
            this.allShorts = await this.fetchShorts();
            this.renderShorts();
        } catch (error) {
            console.error('Error loading shorts:', error);
            this.showError();
        } finally {
            this.hideLoading();
        }
    }

    async fetchShorts() {
        // Simulate API delay
        await this.delay(1500);
        
        // Generate mock shorts data
        return Array.from({ length: 60 }, (_, i) => ({
            id: i + 1,
            title: `${this.getRandomShortsTitle()} #${i + 1}`,
            description: `Quick tip: ${this.getRandomTip()}`,
            thumbnail: `https://images.unsplash.com/${this.getRandomImageId()}?w=300&h=400&fit=crop`,
            videourl: `https://youtube.com/shorts/short${i + 1}`,
            duration: `0:${Math.floor(Math.random() * 50 + 10)}`,
            views: `${Math.floor(Math.random() * 100000 + 1000).toLocaleString()} views`,
            published_date: this.getRandomDate(),
            category: this.getRandomCategory()
        }));
    }

    renderShorts() {
        const shortsGrid = document.getElementById('shortsGrid');
        const loadMoreSection = document.getElementById('loadMoreSection');
        const remainingCount = document.getElementById('remainingCount');
        
        if (!shortsGrid) return;
        
        if (this.allShorts.length === 0) {
            this.showEmpty();
            return;
        }
        
        this.hideEmpty();
        
        const startIndex = 0;
        const endIndex = this.currentPage * this.itemsPerPage;
        const visibleShorts = this.allShorts.slice(startIndex, endIndex);
        
        shortsGrid.innerHTML = this.renderShortsGrid(visibleShorts);
        
        // Show/hide load more button
        const hasMore = this.allShorts.length > endIndex;
        const remaining = this.allShorts.length - endIndex;
        
        if (loadMoreSection && remainingCount) {
            loadMoreSection.style.display = hasMore ? 'block' : 'none';
            remainingCount.textContent = remaining;
        }
        
        this.initializeLucideIcons();
    }

    loadMoreShorts() {
        this.currentPage++;
        this.renderShorts();
    }

    renderShortsGrid(shorts) {
        return shorts.map(short => `
            <div class="shorts-card">
                <div class="shorts-card__image">
                    <img src="${short.thumbnail}" alt="${this.decodeHtmlEntities(short.title)}" loading="lazy">
                    <div class="shorts-card__overlay">
                        <a href="${short.videourl}" target="_blank" class="shorts-card__play-btn">
                            <i data-lucide="play"></i>
                        </a>
                    </div>
                    <div class="shorts-card__badge">
                        <i data-lucide="zap"></i>
                        Short
                    </div>
                    <div class="shorts-card__duration">${short.duration}</div>
                    <div class="shorts-card__category">${short.category}</div>
                </div>
                <div class="shorts-card__content">
                    <h3 class="shorts-card__title">${this.decodeHtmlEntities(short.title)}</h3>
                    <p class="shorts-card__description">${this.decodeHtmlEntities(short.description)}</p>
                    <div class="shorts-card__meta">
                        <span><i data-lucide="eye"></i> ${short.views}</span>
                        <span><i data-lucide="calendar"></i> ${this.formatDate(short.published_date)}</span>
                    </div>
                    <a href="${short.videourl}" target="_blank" class="btn btn--primary btn--sm">
                        <i data-lucide="play"></i>
                        Watch
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
        const shortsGrid = document.getElementById('shortsGrid');
        const loadMoreSection = document.getElementById('loadMoreSection');
        
        if (emptyState) emptyState.style.display = 'block';
        if (shortsGrid) shortsGrid.innerHTML = '';
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

    getRandomShortsTitle() {
        const titles = [
            'WordPress Quick Fix',
            'Pro Tip',
            'WordPress Hack',
            'Quick Tutorial',
            'WordPress Trick',
            'Fast Solution',
            'WordPress Secret',
            'Quick Guide',
            'WordPress Tip',
            'Instant Fix'
        ];
        return titles[Math.floor(Math.random() * titles.length)];
    }

    getRandomTip() {
        const tips = [
            'Speed up your WordPress site in 30 seconds',
            'Fix common WordPress errors instantly',
            'Secure your WordPress login',
            'Optimize images for better performance',
            'Create custom WordPress widgets',
            'Add custom CSS without plugins',
            'Backup WordPress in one click',
            'Hide WordPress admin from hackers',
            'Customize WordPress login page',
            'Add social media icons easily'
        ];
        return tips[Math.floor(Math.random() * tips.length)];
    }

    getRandomCategory() {
        const categories = [
            'Security',
            'Performance',
            'Design',
            'SEO',
            'Plugins',
            'Themes',
            'Content',
            'Admin'
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

// Initialize the shorts page
document.addEventListener('DOMContentLoaded', () => {
    new ShortsPage();
});
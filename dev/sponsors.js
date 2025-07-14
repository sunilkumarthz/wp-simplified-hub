// Sponsors page functionality
class SponsorsPage {
    constructor() {
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.loadSponsors();
        this.initializeLucideIcons();
        this.setupSmoothScrolling();
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

    setupSmoothScrolling() {
        document.addEventListener('click', (e) => {
            const target = e.target.closest('[href^="#"]');
            if (target && target.hash) {
                e.preventDefault();
                const element = document.querySelector(target.hash);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }

    async loadSponsors() {
        const sponsorsGrid = document.getElementById('sponsorsGrid');
        
        if (!sponsorsGrid) return;
        
        try {
            const sponsors = await this.fetchSponsors();
            sponsorsGrid.innerHTML = this.renderSponsorsGrid(sponsors);
            this.initializeLucideIcons();
        } catch (error) {
            console.error('Error loading sponsors:', error);
            sponsorsGrid.innerHTML = '<p class="text-center">Failed to load sponsors</p>';
        }
    }

    async fetchSponsors() {
        // Simulate API delay
        await this.delay(1000);
        
        // Generate mock sponsor data
        return Array.from({ length: 12 }, (_, i) => ({
            id: i + 1,
            name: this.getRandomSponsorName(),
            logo: `https://images.unsplash.com/${this.getRandomImageId()}?w=200&h=100&fit=crop`,
            website: `https://example${i + 1}.com`,
            category: this.getRandomCategory(),
            since: this.getRandomYear()
        }));
    }

    renderSponsorsGrid(sponsors) {
        return sponsors.map(sponsor => `
            <div class="sponsor-card">
                <div class="sponsor-card__logo">
                    <img src="${sponsor.logo}" alt="${sponsor.name} Logo" loading="lazy">
                </div>
                <div class="sponsor-card__content">
                    <h3 class="sponsor-card__name">${sponsor.name}</h3>
                    <div class="sponsor-card__meta">
                        <span class="sponsor-card__category">${sponsor.category}</span>
                        <span class="sponsor-card__since">Since ${sponsor.since}</span>
                    </div>
                    <a href="${sponsor.website}" target="_blank" class="sponsor-card__link">
                        <i data-lucide="external-link"></i>
                        Visit Website
                    </a>
                </div>
            </div>
        `).join('');
    }

    // Utility functions
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    getRandomSponsorName() {
        const names = [
            'WP Engine',
            'Kinsta',
            'Bluehost',
            'SiteGround',
            'Elementor',
            'Yoast',
            'WPForms',
            'MonsterInsights',
            'OptinMonster',
            'WP Rocket',
            'Cloudflare',
            'Jetpack'
        ];
        return names[Math.floor(Math.random() * names.length)];
    }

    getRandomCategory() {
        const categories = [
            'Hosting',
            'Page Builder',
            'SEO Tools',
            'Forms',
            'Analytics',
            'Marketing',
            'Performance',
            'Security'
        ];
        return categories[Math.floor(Math.random() * categories.length)];
    }

    getRandomYear() {
        const currentYear = new Date().getFullYear();
        return Math.floor(Math.random() * 5) + (currentYear - 4);
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

// Initialize the sponsors page
document.addEventListener('DOMContentLoaded', () => {
    new SponsorsPage();
});
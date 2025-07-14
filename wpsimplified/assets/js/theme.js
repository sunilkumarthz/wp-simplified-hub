/**
 * WPSimplified Theme JavaScript
 * Converted from React functionality to vanilla JS + WordPress
 */

class WPSimplifiedTheme {
    constructor() {
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupDynamicLoading();
        this.setupSearch();
        this.initializeLucideIcons();
        this.setupInfiniteScroll();
    }

    initializeLucideIcons() {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    setupMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuClose = document.getElementById('mobile-menu-close');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

        const openMenu = () => {
            mobileMenu.classList.add('active');
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        const closeMenu = () => {
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        };

        mobileMenuBtn?.addEventListener('click', openMenu);
        mobileMenuClose?.addEventListener('click', closeMenu);
        mobileMenuOverlay?.addEventListener('click', closeMenu);

        // Close menu on navigation
        const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
        mobileNavItems.forEach(item => {
            item.addEventListener('click', closeMenu);
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMenu();
            }
        });
    }

    setupSmoothScrolling() {
        // Handle smooth scrolling for anchor links
        const scrollLinks = document.querySelectorAll('a[href^="#"]');
        scrollLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    setupDynamicLoading() {
        // Load more buttons
        const loadMoreButtons = document.querySelectorAll('.load-more-btn[data-post-type]');
        loadMoreButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.loadMoreContent(button);
            });
        });
    }

    async loadMoreContent(button) {
        const postType = button.getAttribute('data-post-type');
        const currentPage = parseInt(button.getAttribute('data-page') || '1');
        const nextPage = currentPage + 1;
        const container = document.getElementById(`${postType}-grid`);

        if (!container) return;

        // Show loading state
        button.textContent = 'Loading...';
        button.disabled = true;

        try {
            const response = await fetch(wpsimplified_ajax.ajax_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    action: `load_${postType}s`,
                    page: nextPage,
                    nonce: wpsimplified_ajax.nonce
                })
            });

            const result = await response.json();

            if (result.success && result.data.length > 0) {
                // Append new content
                result.data.forEach(item => {
                    const cardHtml = this.renderCard(item, postType);
                    container.insertAdjacentHTML('beforeend', cardHtml);
                });

                // Update button page
                button.setAttribute('data-page', nextPage);
                button.textContent = `Load More ${postType.charAt(0).toUpperCase() + postType.slice(1)}s`;
                button.disabled = false;

                // Re-initialize icons
                this.initializeLucideIcons();
            } else {
                // No more content
                button.textContent = 'No more content';
                button.disabled = true;
            }
        } catch (error) {
            console.error('Error loading content:', error);
            button.textContent = 'Error loading content';
            button.disabled = false;
        }
    }

    renderCard(item, postType) {
        const cardClass = `${postType}-card`;
        
        return `
            <div class="${cardClass} fade-in">
                <div class="card-image">
                    <img 
                        src="${item.thumbnail || 'https://via.placeholder.com/640x360/1e293b/04d98b?text=' + postType.charAt(0).toUpperCase() + postType.slice(1)}" 
                        alt="${this.escapeHtml(item.title)}"
                        loading="lazy"
                    >
                    <div class="play-overlay">
                        <div class="play-button">
                            <i data-lucide="play"></i>
                        </div>
                    </div>
                    ${item.duration ? `<div class="card-duration">${item.duration}</div>` : ''}
                    ${postType === 'video' ? '<div class="card-category">Tutorial</div>' : ''}
                </div>
                <div class="card-content">
                    <h3 class="card-title">
                        <a href="${item.permalink}">${this.escapeHtml(item.title)}</a>
                    </h3>
                    <p class="card-description">
                        ${this.escapeHtml(item.excerpt || '')}
                    </p>
                    <div class="card-meta">
                        ${item.views ? `<span>${item.views} views</span>` : ''}
                        ${item.guest ? `<span>Guest: ${this.escapeHtml(item.guest)}</span>` : ''}
                        <span>${item.date}</span>
                    </div>
                </div>
            </div>
        `;
    }

    setupSearch() {
        const searchForms = document.querySelectorAll('.search-form');
        searchForms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSearch(form);
            });
        });

        // Clear search functionality
        const clearButtons = document.querySelectorAll('.clear-search');
        clearButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.clearSearch();
            });
        });
    }

    async handleSearch(form) {
        const searchInput = form.querySelector('.search-input');
        const query = searchInput.value.trim();
        const postType = form.getAttribute('data-post-type') || 'video';

        if (!query) return;

        const container = document.getElementById(`${postType}-grid`);
        const searchInfo = document.getElementById('search-info');
        const searchTerm = document.getElementById('search-term');

        if (!container) return;

        // Show search info
        if (searchInfo && searchTerm) {
            searchTerm.textContent = query;
            searchInfo.style.display = 'block';
        }

        // Show loading state
        container.innerHTML = this.getLoadingHTML();

        try {
            const response = await fetch(wpsimplified_ajax.ajax_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    action: `load_${postType}s`,
                    search: query,
                    page: 1,
                    nonce: wpsimplified_ajax.nonce
                })
            });

            const result = await response.json();

            if (result.success && result.data.length > 0) {
                container.innerHTML = '';
                result.data.forEach(item => {
                    const cardHtml = this.renderCard(item, postType);
                    container.insertAdjacentHTML('beforeend', cardHtml);
                });
                this.initializeLucideIcons();
            } else {
                container.innerHTML = '<div class="empty-state"><p>No results found for your search.</p></div>';
            }
        } catch (error) {
            console.error('Search error:', error);
            container.innerHTML = '<div class="error-state"><p>Error performing search. Please try again.</p></div>';
        }
    }

    clearSearch() {
        const searchInfo = document.getElementById('search-info');
        const searchInputs = document.querySelectorAll('.search-input');
        
        // Hide search info
        if (searchInfo) {
            searchInfo.style.display = 'none';
        }

        // Clear search inputs
        searchInputs.forEach(input => {
            input.value = '';
        });

        // Reload original content
        window.location.reload();
    }

    setupInfiniteScroll() {
        // Optional: Add infinite scroll functionality
        let isLoading = false;
        const threshold = 500; // pixels from bottom

        window.addEventListener('scroll', () => {
            if (isLoading) return;

            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;

            if (scrollTop + clientHeight >= scrollHeight - threshold) {
                const loadMoreBtn = document.querySelector('.load-more-btn:not([disabled])');
                if (loadMoreBtn && loadMoreBtn.getAttribute('data-post-type')) {
                    isLoading = true;
                    this.loadMoreContent(loadMoreBtn).finally(() => {
                        isLoading = false;
                    });
                }
            }
        });
    }

    getLoadingHTML() {
        return Array(6).fill().map(() => `
            <div class="video-card">
                <div class="card-image" style="background: #334155; animation: pulse 2s infinite;"></div>
                <div class="card-content">
                    <div style="height: 1.5rem; background: #334155; border-radius: 4px; margin-bottom: 0.75rem; animation: pulse 2s infinite;"></div>
                    <div style="height: 1rem; background: #334155; border-radius: 4px; margin-bottom: 0.5rem; animation: pulse 2s infinite;"></div>
                    <div style="height: 1rem; background: #334155; border-radius: 4px; width: 75%; margin-bottom: 1rem; animation: pulse 2s infinite;"></div>
                    <div style="display: flex; justify-content: space-between;">
                        <div style="height: 1rem; background: #334155; border-radius: 4px; width: 5rem; animation: pulse 2s infinite;"></div>
                        <div style="height: 1rem; background: #334155; border-radius: 4px; width: 4rem; animation: pulse 2s infinite;"></div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Utility functions
    static delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize theme when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new WPSimplifiedTheme();
});

// Handle page-specific functionality
document.addEventListener('DOMContentLoaded', () => {
    // Hero section animations
    const heroElements = document.querySelectorAll('.hero-section .fade-in');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe cards and sections
    const observeElements = document.querySelectorAll('.video-card, .podcast-card, .playlist-card, .content-section');
    observeElements.forEach(el => observer.observe(el));
});
/**
 * Enhanced WPSimplified Theme JavaScript
 * Advanced functionality with performance optimizations
 */

class WPSimplifiedEnhanced {
    constructor() {
        this.init();
        this.setupPerformanceOptimizations();
    }

    init() {
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupDynamicLoading();
        this.setupSearch();
        this.setupAnimations();
        this.setupLazyLoading();
        this.setupProgressBar();
        this.initializeLucideIcons();
    }

    setupPerformanceOptimizations() {
        // Debounce scroll events
        this.debounce = (func, wait) => {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        };

        // Throttle resize events
        this.throttle = (func, limit) => {
            let inThrottle;
            return function() {
                const args = arguments;
                const context = this;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        };
    }

    setupAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // Parallax effect for hero orbs
        window.addEventListener('scroll', this.debounce(() => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero-orb');
            
            parallaxElements.forEach((element, index) => {
                const speed = (index + 1) * 0.2;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        }, 10));
    }

    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
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

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    setupProgressBar() {
        // Reading progress bar for blog posts
        if (document.querySelector('.article-content')) {
            const progressBar = document.createElement('div');
            progressBar.className = 'reading-progress';
            progressBar.innerHTML = '<div class="reading-progress-fill"></div>';
            document.body.appendChild(progressBar);

            window.addEventListener('scroll', this.debounce(() => {
                const article = document.querySelector('.article-content');
                if (!article) return;

                const articleTop = article.offsetTop;
                const articleHeight = article.offsetHeight;
                const windowTop = window.pageYOffset;
                const windowHeight = window.innerHeight;

                const progress = Math.min(
                    Math.max((windowTop - articleTop + windowHeight) / articleHeight, 0),
                    1
                );

                document.querySelector('.reading-progress-fill').style.width = `${progress * 100}%`;
            }, 10));
        }
    }

    setupAdvancedSearch() {
        // Enhanced search with suggestions
        const searchInputs = document.querySelectorAll('.search-input');
        
        searchInputs.forEach(input => {
            let searchTimeout;
            
            input.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                const query = e.target.value.trim();
                
                if (query.length > 2) {
                    searchTimeout = setTimeout(() => {
                        this.fetchSearchSuggestions(query, input);
                    }, 300);
                } else {
                    this.hideSearchSuggestions(input);
                }
            });
        });
    }

    async fetchSearchSuggestions(query, input) {
        try {
            const response = await fetch(wpsimplified_ajax.ajax_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    action: 'search_suggestions',
                    query: query,
                    nonce: wpsimplified_ajax.nonce
                })
            });

            const result = await response.json();
            
            if (result.success) {
                this.showSearchSuggestions(result.data, input);
            }
        } catch (error) {
            console.error('Search suggestions error:', error);
        }
    }

    showSearchSuggestions(suggestions, input) {
        let dropdown = input.parentNode.querySelector('.search-suggestions');
        
        if (!dropdown) {
            dropdown = document.createElement('div');
            dropdown.className = 'search-suggestions';
            input.parentNode.appendChild(dropdown);
        }

        dropdown.innerHTML = suggestions.map(suggestion => `
            <div class="search-suggestion-item" data-url="${suggestion.url}">
                <i data-lucide="${suggestion.type === 'video' ? 'play' : suggestion.type === 'podcast' ? 'mic' : 'file-text'}"></i>
                <div>
                    <div class="suggestion-title">${suggestion.title}</div>
                    <div class="suggestion-type">${suggestion.type}</div>
                </div>
            </div>
        `).join('');

        dropdown.style.display = 'block';
        
        // Handle suggestion clicks
        dropdown.querySelectorAll('.search-suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                window.location.href = item.dataset.url;
            });
        });

        // Re-initialize icons
        this.initializeLucideIcons();
    }

    hideSearchSuggestions(input) {
        const dropdown = input.parentNode.querySelector('.search-suggestions');
        if (dropdown) {
            dropdown.style.display = 'none';
        }
    }

    // Enhanced mobile menu with gesture support
    setupEnhancedMobileMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        let startX = 0;
        let currentX = 0;
        let isDragging = false;

        // Touch events for swipe gestures
        mobileMenu.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        mobileMenu.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            
            currentX = e.touches[0].clientX;
            const deltaX = currentX - startX;
            
            if (deltaX > 0) {
                mobileMenu.style.transform = `translateX(${deltaX}px)`;
            }
        });

        mobileMenu.addEventListener('touchend', () => {
            if (!isDragging) return;
            
            const deltaX = currentX - startX;
            
            if (deltaX > 100) {
                this.closeMobileMenu();
            } else {
                mobileMenu.style.transform = 'translateX(0)';
            }
            
            isDragging = false;
        });
    }

    // Performance monitoring
    setupPerformanceMonitoring() {
        // Monitor Core Web Vitals
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry) => {
                    if (entry.entryType === 'largest-contentful-paint') {
                        console.log('LCP:', entry.startTime);
                    }
                    if (entry.entryType === 'first-input') {
                        console.log('FID:', entry.processingStart - entry.startTime);
                    }
                    if (entry.entryType === 'layout-shift') {
                        console.log('CLS:', entry.value);
                    }
                });
            });

            observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
        }
    }

    // Service Worker registration for PWA functionality
    setupServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then((registration) => {
                        console.log('SW registered: ', registration);
                    })
                    .catch((registrationError) => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
    }

    // Dark mode toggle (future feature)
    setupDarkModeToggle() {
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
                localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
            });

            // Check for saved dark mode preference
            if (localStorage.getItem('darkMode') === 'true') {
                document.body.classList.add('dark-mode');
            }
        }
    }

    // Initialize all functionality
    initializeLucideIcons() {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
}

// Initialize enhanced theme
document.addEventListener('DOMContentLoaded', () => {
    new WPSimplifiedEnhanced();
});

// CSS for enhanced features
const enhancedStyles = `
<style>
.reading-progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: rgba(30, 41, 59, 0.8);
    z-index: 9999;
}

.reading-progress-fill {
    height: 100%;
    background: var(--wp-teal);
    width: 0%;
    transition: width 0.3s ease;
}

.search-suggestions {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(30, 41, 59, 0.95);
    border: 1px solid #334155;
    border-radius: 0.5rem;
    max-height: 300px;
    overflow-y: auto;
    z-index: 1000;
    display: none;
}

.search-suggestion-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    cursor: pointer;
    transition: background 0.2s ease;
}

.search-suggestion-item:hover {
    background: rgba(4, 217, 139, 0.1);
}

.suggestion-title {
    color: #f8fafc;
    font-weight: 500;
}

.suggestion-type {
    color: #94a3b8;
    font-size: 0.75rem;
    text-transform: capitalize;
}

.animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
}

.animate-on-scroll.animate-in {
    opacity: 1;
    transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
    .animate-on-scroll {
        opacity: 1;
        transform: none;
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', enhancedStyles);
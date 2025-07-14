// Index page functionality
class IndexPage {
    constructor() {
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.loadLatestVideos();
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
        const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

        const openMenu = () => {
            mobileMenu.classList.remove('translate-x-full');
            mobileMenu.classList.add('translate-x-0');
            mobileMenuOverlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        };

        const closeMenu = () => {
            mobileMenu.classList.add('translate-x-full');
            mobileMenu.classList.remove('translate-x-0');
            mobileMenuOverlay.classList.add('hidden');
            document.body.style.overflow = '';
        };

        mobileMenuBtn?.addEventListener('click', openMenu);
        mobileMenuClose?.addEventListener('click', closeMenu);
        mobileMenuOverlay?.addEventListener('click', closeMenu);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !mobileMenu.classList.contains('translate-x-full')) {
                closeMenu();
            }
        });
    }

    setupSmoothScrolling() {
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

    async loadLatestVideos() {
        try {
            const videosContainer = document.getElementById('latestVideos');
            if (!videosContainer) return;

            videosContainer.innerHTML = this.getLoadingHTML();
            await this.delay(1500);
            const videos = await this.fetchLatestVideos();
            videosContainer.innerHTML = videos.map(video => this.renderVideoCard(video)).join('');
            
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        } catch (error) {
            console.error('Error loading videos:', error);
        }
    }

    async fetchLatestVideos() {
        return [
            {
                id: '1',
                title: 'Complete WordPress Gutenberg Tutorial 2024',
                description: 'Learn how to master WordPress Gutenberg editor with this comprehensive tutorial.',
                thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
                duration: '45:30',
                views: '25.4K',
                publishedAt: '2 days ago'
            },
            {
                id: '2',
                title: 'WordPress Performance Optimization Guide',
                description: 'Boost your WordPress site speed with proven optimization techniques.',
                thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
                duration: '32:15',
                views: '18.2K',
                publishedAt: '5 days ago'
            },
            {
                id: '3',
                title: 'Custom WordPress Theme Development',
                description: 'Build a custom WordPress theme from scratch using modern practices.',
                thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
                duration: '1:12:45',
                views: '31.7K',
                publishedAt: '1 week ago'
            }
        ];
    }

    renderVideoCard(video) {
        return `
            <div class="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105 group">
                <div class="relative">
                    <img 
                        src="${video.thumbnail}" 
                        alt="${this.escapeHtml(video.title)}"
                        class="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                        onerror="this.src='https://via.placeholder.com/640x360/1e293b/04d98b?text=Video+Thumbnail'"
                    >
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div class="w-16 h-16 bg-wp-teal rounded-full flex items-center justify-center shadow-2xl">
                            <i data-lucide="play" class="w-6 h-6 text-white ml-1"></i>
                        </div>
                    </div>
                    <div class="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                        ${video.duration}
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="font-baloo font-bold text-lg mb-3 line-clamp-2 group-hover:text-wp-teal transition-colors">
                        ${this.escapeHtml(video.title)}
                    </h3>
                    <p class="text-slate-400 text-sm mb-4 line-clamp-3">
                        ${this.escapeHtml(video.description)}
                    </p>
                    <div class="flex items-center justify-between text-sm text-slate-500">
                        <span>${video.views} views</span>
                        <span>${video.publishedAt}</span>
                    </div>
                </div>
            </div>
        `;
    }

    getLoadingHTML() {
        return Array(3).fill().map(() => `
            <div class="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 animate-pulse">
                <div class="aspect-video bg-slate-700"></div>
                <div class="p-6">
                    <div class="h-6 bg-slate-700 rounded mb-3"></div>
                    <div class="h-4 bg-slate-700 rounded mb-2"></div>
                    <div class="h-4 bg-slate-700 rounded w-3/4 mb-4"></div>
                    <div class="flex justify-between">
                        <div class="h-4 bg-slate-700 rounded w-20"></div>
                        <div class="h-4 bg-slate-700 rounded w-16"></div>
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

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new IndexPage();
});
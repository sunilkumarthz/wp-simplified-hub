// Main JavaScript functionality
class WPSimplified {
    constructor() {
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.loadFeaturedContent();
        this.loadLatestContent();
        this.initializeLucideIcons();
    }

    // Initialize Lucide icons
    initializeLucideIcons() {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // Mobile menu functionality
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

        // Close menu on nav item click
        const navItems = mobileMenu.querySelectorAll('.mobile-menu__nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', closeMenu);
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('mobile-menu--active')) {
                closeMenu();
            }
        });
    }

    // Smooth scrolling for anchor links
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

    // Load featured content (videos and podcasts)
    async loadFeaturedContent() {
        const featuredContent = document.getElementById('featuredContent');
        const featuredLoading = document.getElementById('featuredLoading');

        if (!featuredContent || !featuredLoading) return;

        try {
            // Simulate API call - replace with actual API endpoints
            const [videos, podcasts] = await Promise.all([
                this.fetchLatestVideos(2),
                this.fetchLatestPodcasts(1)
            ]);

            const content = this.renderFeaturedContent(videos, podcasts);
            featuredContent.innerHTML = content;
            
            featuredLoading.style.display = 'none';
            featuredContent.classList.add('featured-content__items--loaded');
            
            // Re-initialize icons after content load
            this.initializeLucideIcons();
        } catch (error) {
            console.error('Error loading featured content:', error);
            featuredLoading.innerHTML = '<p>Failed to load featured content</p>';
        }
    }

    // Load latest content for sections
    async loadLatestContent() {
        await Promise.all([
            this.loadLatestVideos(),
            this.loadLatestPodcasts(),
            this.loadFeaturedPlaylists()
        ]);
    }

    // Load latest videos
    async loadLatestVideos() {
        const container = document.getElementById('latestVideos');
        if (!container) return;

        try {
            const videos = await this.fetchLatestVideos(6);
            container.innerHTML = this.renderVideosGrid(videos);
            this.initializeLucideIcons();
        } catch (error) {
            console.error('Error loading videos:', error);
            container.innerHTML = '<p class="text-center">Failed to load videos</p>';
        }
    }

    // Load latest podcasts
    async loadLatestPodcasts() {
        const container = document.getElementById('latestPodcasts');
        if (!container) return;

        try {
            const podcasts = await this.fetchLatestPodcasts(3);
            container.innerHTML = this.renderPodcastsGrid(podcasts);
            this.initializeLucideIcons();
        } catch (error) {
            console.error('Error loading podcasts:', error);
            container.innerHTML = '<p class="text-center">Failed to load podcasts</p>';
        }
    }

    // Load featured playlists
    async loadFeaturedPlaylists() {
        const container = document.getElementById('featuredPlaylists');
        if (!container) return;

        try {
            const playlists = await this.fetchFeaturedPlaylists(6);
            container.innerHTML = this.renderPlaylistsGrid(playlists);
            this.initializeLucideIcons();
        } catch (error) {
            console.error('Error loading playlists:', error);
            container.innerHTML = '<p class="text-center">Failed to load playlists</p>';
        }
    }

    // Mock API functions - replace with actual API calls
    async fetchLatestVideos(limit = 10) {
        // Simulate API delay
        await this.delay(1000);
        
        // Mock data - replace with actual API call
        return Array.from({ length: limit }, (_, i) => ({
            id: i + 1,
            title: `WordPress Tutorial ${i + 1}: Advanced Techniques`,
            description: `Learn advanced WordPress techniques in this comprehensive tutorial covering themes, plugins, and optimization.`,
            thumbnail: `https://picsum.photos/400/225?random=${i + 1}`,
            videourl: `https://youtube.com/watch?v=example${i + 1}`,
            duration: `${Math.floor(Math.random() * 20 + 5)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
            views: `${Math.floor(Math.random() * 10000 + 1000).toLocaleString()} views`,
            published_date: this.getRandomDate()
        }));
    }

    async fetchLatestPodcasts(limit = 10) {
        await this.delay(1200);
        
        return Array.from({ length: limit }, (_, i) => ({
            id: i + 1,
            title: `WordPress Podcast Episode ${i + 1}: Expert Interview`,
            description: `In-depth conversation with WordPress experts about the latest trends and best practices.`,
            thumbnail: `https://picsum.photos/400/400?random=${i + 20}`,
            videourl: `https://youtube.com/watch?v=podcast${i + 1}`,
            duration: `${Math.floor(Math.random() * 30 + 20)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
            published_date: this.getRandomDate()
        }));
    }

    async fetchFeaturedPlaylists(limit = 10) {
        await this.delay(800);
        
        return Array.from({ length: limit }, (_, i) => ({
            id: i + 1,
            title: `WordPress ${['Basics', 'Advanced', 'Themes', 'Plugins', 'Security', 'Performance'][i] || 'Complete'} Course`,
            description: `Complete playlist covering all aspects of WordPress development and management.`,
            thumbnail: `https://picsum.photos/400/225?random=${i + 40}`,
            video_count: Math.floor(Math.random() * 25 + 5),
            total_duration: `${Math.floor(Math.random() * 10 + 2)} hours`
        }));
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

    decodeHtmlEntities(text) {
        const textArea = document.createElement('textarea');
        textArea.innerHTML = text;
        return textArea.value;
    }

    // Content rendering functions
    renderFeaturedContent(videos, podcasts) {
        let content = '<div class="featured-content__tabs">';
        
        if (videos.length > 0) {
            content += `
                <div class="featured-item">
                    <h3>Latest Video</h3>
                    <div class="card">
                        <div class="card__image">
                            <img src="${videos[0].thumbnail}" alt="${this.decodeHtmlEntities(videos[0].title)}">
                            <div class="card__overlay">
                                <a href="${videos[0].videourl}" target="_blank" class="card__play-btn">
                                    <i data-lucide="play"></i>
                                </a>
                            </div>
                            <div class="card__badge">
                                <i data-lucide="play"></i>
                                Video
                            </div>
                            <div class="card__duration">${videos[0].duration}</div>
                        </div>
                        <div class="card__content">
                            <h4 class="card__title">${this.decodeHtmlEntities(videos[0].title)}</h4>
                            <div class="card__meta">
                                <span>${videos[0].views}</span>
                            </div>
                            <a href="${videos[0].videourl}" target="_blank" class="btn btn--primary">
                                <i data-lucide="play"></i>
                                Watch Now
                            </a>
                        </div>
                    </div>
                </div>
            `;
        }

        if (podcasts.length > 0) {
            content += `
                <div class="featured-item">
                    <h3>Latest Podcast</h3>
                    <div class="card">
                        <div class="card__image">
                            <img src="${podcasts[0].thumbnail}" alt="${this.decodeHtmlEntities(podcasts[0].title)}">
                            <div class="card__overlay">
                                <a href="${podcasts[0].videourl}" target="_blank" class="card__play-btn">
                                    <i data-lucide="mic"></i>
                                </a>
                            </div>
                            <div class="card__badge">
                                <i data-lucide="mic"></i>
                                Podcast
                            </div>
                            <div class="card__duration">${podcasts[0].duration}</div>
                        </div>
                        <div class="card__content">
                            <h4 class="card__title">${this.decodeHtmlEntities(podcasts[0].title)}</h4>
                            <a href="${podcasts[0].videourl}" target="_blank" class="btn btn--primary">
                                <i data-lucide="mic"></i>
                                Listen Now
                            </a>
                        </div>
                    </div>
                </div>
            `;
        }

        content += '</div>';
        return content;
    }

    renderVideosGrid(videos) {
        return videos.map(video => `
            <div class="card">
                <div class="card__image">
                    <img src="${video.thumbnail}" alt="${this.decodeHtmlEntities(video.title)}">
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
                    <div class="card__meta">
                        <span>${video.views}</span>
                    </div>
                    <a href="${video.videourl}" target="_blank" class="btn btn--primary">
                        <i data-lucide="play"></i>
                        Watch Now
                    </a>
                </div>
            </div>
        `).join('');
    }

    renderPodcastsGrid(podcasts) {
        return podcasts.map(podcast => `
            <div class="card">
                <div class="card__image">
                    <img src="${podcast.thumbnail}" alt="${this.decodeHtmlEntities(podcast.title)}">
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
                    <a href="${podcast.videourl}" target="_blank" class="btn btn--primary">
                        <i data-lucide="mic"></i>
                        Listen Now
                    </a>
                </div>
            </div>
        `).join('');
    }

    renderPlaylistsGrid(playlists) {
        return playlists.map(playlist => `
            <div class="card">
                <div class="card__image">
                    <img src="${playlist.thumbnail}" alt="${this.decodeHtmlEntities(playlist.title)}">
                    <div class="card__overlay">
                        <a href="playlists.html" class="card__play-btn">
                            <i data-lucide="list"></i>
                        </a>
                    </div>
                    <div class="card__badge">
                        <i data-lucide="list"></i>
                        ${playlist.video_count} videos
                    </div>
                </div>
                <div class="card__content">
                    <h3 class="card__title">${this.decodeHtmlEntities(playlist.title)}</h3>
                    <div class="card__meta">
                        <span>${playlist.total_duration}</span>
                    </div>
                    <a href="playlists.html" class="btn btn--primary">
                        <i data-lucide="list"></i>
                        View Playlist
                    </a>
                </div>
            </div>
        `).join('');
    }
}

// Global utility functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WPSimplified();
});

// Export for other scripts if needed
window.WPSimplified = WPSimplified;
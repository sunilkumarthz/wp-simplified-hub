// 404 page functionality
class ErrorPage {
    constructor() {
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupErrorActions();
        this.setupSearchForm();
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

    setupErrorActions() {
        const goBackBtn = document.getElementById('goBackBtn');
        
        goBackBtn?.addEventListener('click', () => {
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = 'index.html';
            }
        });
    }

    setupSearchForm() {
        const searchForm = document.getElementById('errorSearchForm');
        
        searchForm?.addEventListener('submit', (e) => {
            e.preventDefault();
            const searchInput = document.getElementById('searchInput');
            const query = searchInput.value.trim();
            
            if (query) {
                // Redirect to videos page with search query
                window.location.href = `videos.html?search=${encodeURIComponent(query)}`;
            }
        });
    }
}

// Initialize the error page
document.addEventListener('DOMContentLoaded', () => {
    new ErrorPage();
});
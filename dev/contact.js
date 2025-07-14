// Contact page functionality
class ContactPage {
    constructor() {
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupContactForm();
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

    setupContactForm() {
        const contactForm = document.getElementById('contactForm');
        
        contactForm?.addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.handleFormSubmit(e.target);
        });
    }

    async handleFormSubmit(form) {
        const submitBtn = form.querySelector('.form__submit');
        const formMessage = document.getElementById('formMessage');
        const formData = new FormData(form);
        
        // Get form values
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Validate form
        if (!this.validateForm(data)) {
            this.showMessage('Please fill in all required fields.', 'error');
            return;
        }

        // Show loading state
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i data-lucide="loader-2"></i> Sending...';
        submitBtn.disabled = true;
        this.initializeLucideIcons();

        try {
            // Simulate form submission
            await this.submitForm(data);
            
            // Show success message
            this.showMessage('Thank you for your message! I\'ll get back to you within 24 hours.', 'success');
            
            // Reset form
            form.reset();
            
        } catch (error) {
            console.error('Form submission error:', error);
            this.showMessage('Sorry, there was an error sending your message. Please try again later.', 'error');
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            this.initializeLucideIcons();
        }
    }

    validateForm(data) {
        return data.name && 
               data.email && 
               data.subject && 
               data.message &&
               this.isValidEmail(data.email);
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    async submitForm(data) {
        // Simulate API call
        await this.delay(2000);
        
        // In a real application, you would send this data to your server
        console.log('Form submitted:', data);
        
        // For demo purposes, we'll just resolve successfully
        return Promise.resolve();
    }

    showMessage(message, type) {
        const formMessage = document.getElementById('formMessage');
        
        if (!formMessage) return;
        
        formMessage.textContent = message;
        formMessage.className = `form__message form__message--${type}`;
        formMessage.style.display = 'block';
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
        
        // Scroll to message
        formMessage.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize the contact page
document.addEventListener('DOMContentLoaded', () => {
    new ContactPage();
});
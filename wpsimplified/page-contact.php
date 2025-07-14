<?php
/**
 * Template Name: Contact Page
 */

get_header(); ?>

<main>
    <!-- Hero Section -->
    <section class="hero-section">
        <div class="hero-background">
            <div class="hero-grid"></div>
            <div class="hero-orb hero-orb-1"></div>
            <div class="hero-orb hero-orb-2"></div>
            <div class="hero-orb hero-orb-3"></div>
        </div>
        
        <div class="container">
            <div class="hero-content" style="max-width: 800px; margin: 0 auto; text-align: center;">
                <div class="hero-text">
                    <h1 class="hero-title">Get in <span class="text-gradient">Touch</span></h1>
                    <p class="hero-description">
                        Have questions about WordPress development? Want to collaborate or need help with a project? 
                        I'd love to hear from you!
                    </p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Contact Form Section -->
    <section class="content-section">
        <div class="container" style="max-width: 800px;">
            <div style="display: grid; gap: 3rem;">
                <!-- Contact Form -->
                <div class="hero-featured">
                    <h3>Send a Message</h3>
                    <form id="contact-form" style="display: flex; flex-direction: column; gap: 1.5rem;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div>
                                <label for="name" style="display: block; margin-bottom: 0.5rem; color: #f8fafc; font-weight: 500;">Name *</label>
                                <input type="text" id="name" name="name" required 
                                       style="width: 100%; padding: 0.75rem; background: rgba(30, 41, 59, 0.8); border: 1px solid #334155; border-radius: 0.5rem; color: #f8fafc; outline: none;"
                                       placeholder="Your name">
                            </div>
                            <div>
                                <label for="email" style="display: block; margin-bottom: 0.5rem; color: #f8fafc; font-weight: 500;">Email *</label>
                                <input type="email" id="email" name="email" required 
                                       style="width: 100%; padding: 0.75rem; background: rgba(30, 41, 59, 0.8); border: 1px solid #334155; border-radius: 0.5rem; color: #f8fafc; outline: none;"
                                       placeholder="your@email.com">
                            </div>
                        </div>
                        <div>
                            <label for="subject" style="display: block; margin-bottom: 0.5rem; color: #f8fafc; font-weight: 500;">Subject *</label>
                            <input type="text" id="subject" name="subject" required 
                                   style="width: 100%; padding: 0.75rem; background: rgba(30, 41, 59, 0.8); border: 1px solid #334155; border-radius: 0.5rem; color: #f8fafc; outline: none;"
                                   placeholder="What's this about?">
                        </div>
                        <div>
                            <label for="message" style="display: block; margin-bottom: 0.5rem; color: #f8fafc; font-weight: 500;">Message *</label>
                            <textarea id="message" name="message" required rows="6"
                                      style="width: 100%; padding: 0.75rem; background: rgba(30, 41, 59, 0.8); border: 1px solid #334155; border-radius: 0.5rem; color: #f8fafc; outline: none; resize: vertical;"
                                      placeholder="Tell me more about your project or question..."></textarea>
                        </div>
                        <button type="submit" class="btn-primary" style="width: 100%;">
                            <i data-lucide="send"></i>
                            Send Message
                        </button>
                        <div id="form-message" style="display: none; padding: 1rem; border-radius: 0.5rem; text-align: center;"></div>
                    </form>
                </div>

                <!-- Contact Info -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
                    <div class="featured-item">
                        <h4><i data-lucide="mail" style="display: inline; margin-right: 0.5rem;"></i>Email</h4>
                        <p><a href="mailto:hello@wpsimplified.in">hello@wpsimplified.in</a></p>
                    </div>
                    
                    <div class="featured-item">
                        <h4><i data-lucide="youtube" style="display: inline; margin-right: 0.5rem;"></i>YouTube</h4>
                        <p><a href="<?php echo get_theme_mod('youtube_url', 'https://www.youtube.com/@wpsimplifiedbysunil'); ?>" target="_blank">@wpsimplifiedbysunil</a></p>
                    </div>
                    
                    <div class="featured-item">
                        <h4><i data-lucide="twitter" style="display: inline; margin-right: 0.5rem;"></i>Social</h4>
                        <p>
                            <a href="<?php echo get_theme_mod('twitter_url', 'https://x.com/sunilkumarthz'); ?>" target="_blank">Twitter</a> | 
                            <a href="<?php echo get_theme_mod('linkedin_url', 'https://www.linkedin.com/in/sunilkumarthz/'); ?>" target="_blank">LinkedIn</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i data-lucide="loader" style="animation: spin 1s linear infinite;"></i> Sending...';
        submitBtn.disabled = true;
        
        // Get form data
        const formData = new FormData(contactForm);
        
        try {
            // Simulate form submission (replace with actual endpoint)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            formMessage.style.display = 'block';
            formMessage.style.background = 'rgba(4, 217, 139, 0.2)';
            formMessage.style.color = '#04d98b';
            formMessage.style.border = '1px solid rgba(4, 217, 139, 0.3)';
            formMessage.textContent = 'Message sent successfully! I\'ll get back to you soon.';
            
            // Reset form
            contactForm.reset();
            
        } catch (error) {
            // Show error message
            formMessage.style.display = 'block';
            formMessage.style.background = 'rgba(239, 68, 68, 0.2)';
            formMessage.style.color = '#ef4444';
            formMessage.style.border = '1px solid rgba(239, 68, 68, 0.3)';
            formMessage.textContent = 'Error sending message. Please try again or email me directly.';
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Re-initialize icons
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }
    });
});
</script>

<?php get_footer(); ?>
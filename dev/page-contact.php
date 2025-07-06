<?php
/**
 * Template for Contact page
 * 
 * @package WPSimplified
 */

get_header(); ?>

<main id="main" class="site-main">
    
    <!-- Contact Hero Section -->
    <section class="hero-section" style="min-height: 60vh; padding: 8rem 0 4rem;">
        <div class="hero-background"></div>
        <div class="container">
            <div class="hero-content">
                <div class="hero-badge">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <?php _e('Get in Touch', 'wpsimplified'); ?>
                </div>
                
                <h1 class="hero-title" style="font-size: clamp(2.5rem, 6vw, 4rem);">
                    <?php _e('Contact', 'wpsimplified'); ?>
                    <span class="hero-gradient-text"><?php _e('WPSimplified', 'wpsimplified'); ?></span>
                </h1>
                
                <p class="hero-subtitle">
                    <?php _e('Have questions about WordPress? Need help with your project? Want to collaborate? We\'d love to hear from you and help you succeed with WordPress.', 'wpsimplified'); ?>
                </p>
            </div>
        </div>
    </section>

    <!-- Contact Content -->
    <section class="section">
        <div class="container">
            <div class="grid grid-cols-2" style="gap: 4rem;">
                
                <!-- Contact Form -->
                <div class="card" style="padding: 2.5rem;">
                    <h2 style="margin-bottom: 1.5rem; font-size: 1.5rem;"><?php _e('Send us a Message', 'wpsimplified'); ?></h2>
                    
                    <form class="contact-form" style="display: flex; flex-direction: column; gap: 1.5rem;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div>
                                <label for="firstName" style="display: block; margin-bottom: 0.5rem; font-weight: 600;"><?php _e('First Name', 'wpsimplified'); ?> *</label>
                                <input type="text" id="firstName" name="firstName" required 
                                       style="width: 100%; padding: 0.75rem; border: 1px solid var(--wp-border); border-radius: 0.5rem; background: var(--wp-background); color: var(--wp-foreground);">
                            </div>
                            <div>
                                <label for="lastName" style="display: block; margin-bottom: 0.5rem; font-weight: 600;"><?php _e('Last Name', 'wpsimplified'); ?> *</label>
                                <input type="text" id="lastName" name="lastName" required
                                       style="width: 100%; padding: 0.75rem; border: 1px solid var(--wp-border); border-radius: 0.5rem; background: var(--wp-background); color: var(--wp-foreground);">
                            </div>
                        </div>
                        
                        <div>
                            <label for="email" style="display: block; margin-bottom: 0.5rem; font-weight: 600;"><?php _e('Email Address', 'wpsimplified'); ?> *</label>
                            <input type="email" id="email" name="email" required
                                   style="width: 100%; padding: 0.75rem; border: 1px solid var(--wp-border); border-radius: 0.5rem; background: var(--wp-background); color: var(--wp-foreground);">
                        </div>
                        
                        <div>
                            <label for="subject" style="display: block; margin-bottom: 0.5rem; font-weight: 600;"><?php _e('Subject', 'wpsimplified'); ?> *</label>
                            <select id="subject" name="subject" required
                                    style="width: 100%; padding: 0.75rem; border: 1px solid var(--wp-border); border-radius: 0.5rem; background: var(--wp-background); color: var(--wp-foreground);">
                                <option value=""><?php _e('Select a subject', 'wpsimplified'); ?></option>
                                <option value="general"><?php _e('General Inquiry', 'wpsimplified'); ?></option>
                                <option value="support"><?php _e('Technical Support', 'wpsimplified'); ?></option>
                                <option value="collaboration"><?php _e('Collaboration', 'wpsimplified'); ?></option>
                                <option value="sponsorship"><?php _e('Sponsorship', 'wpsimplified'); ?></option>
                                <option value="feedback"><?php _e('Feedback', 'wpsimplified'); ?></option>
                            </select>
                        </div>
                        
                        <div>
                            <label for="message" style="display: block; margin-bottom: 0.5rem; font-weight: 600;"><?php _e('Message', 'wpsimplified'); ?> *</label>
                            <textarea id="message" name="message" rows="6" required
                                      style="width: 100%; padding: 0.75rem; border: 1px solid var(--wp-border); border-radius: 0.5rem; background: var(--wp-background); color: var(--wp-foreground); resize: vertical;"
                                      placeholder="<?php _e('Tell us how we can help you...', 'wpsimplified'); ?>"></textarea>
                        </div>
                        
                        <button type="submit" class="btn btn-primary btn-lg">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="22" y1="2" x2="11" y2="13"/>
                                <polygon points="22,2 15,22 11,13 2,9 22,2"/>
                            </svg>
                            <?php _e('Send Message', 'wpsimplified'); ?>
                        </button>
                    </form>
                </div>
                
                <!-- Contact Information -->
                <div>
                    <!-- Contact Details -->
                    <div class="card" style="padding: 2rem; margin-bottom: 2rem;">
                        <h3 style="margin-bottom: 1.5rem; font-size: 1.25rem;"><?php _e('Get in Touch', 'wpsimplified'); ?></h3>
                        
                        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="width: 2.5rem; height: 2.5rem; background: rgba(4, 217, 139, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--wp-primary)" stroke-width="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                        <polyline points="22,6 12,13 2,6"/>
                                    </svg>
                                </div>
                                <div>
                                    <div style="font-weight: 600; margin-bottom: 0.25rem;"><?php _e('Email', 'wpsimplified'); ?></div>
                                    <a href="mailto:hello@wpsimplified.in" style="color: var(--wp-muted-foreground);">hello@wpsimplified.in</a>
                                </div>
                            </div>
                            
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="width: 2.5rem; height: 2.5rem; background: rgba(4, 217, 139, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--wp-primary)" stroke-width="2">
                                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"/>
                                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"/>
                                    </svg>
                                </div>
                                <div>
                                    <div style="font-weight: 600; margin-bottom: 0.25rem;"><?php _e('Location', 'wpsimplified'); ?></div>
                                    <div style="color: var(--wp-muted-foreground);"><?php _e('Remote, India', 'wpsimplified'); ?></div>
                                </div>
                            </div>
                            
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="width: 2.5rem; height: 2.5rem; background: rgba(4, 217, 139, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--wp-primary)" stroke-width="2">
                                        <circle cx="12" cy="12" r="10"/>
                                        <polyline points="12,6 12,12 16,14"/>
                                    </svg>
                                </div>
                                <div>
                                    <div style="font-weight: 600; margin-bottom: 0.25rem;"><?php _e('Response Time', 'wpsimplified'); ?></div>
                                    <div style="color: var(--wp-muted-foreground);"><?php _e('Within 24 hours', 'wpsimplified'); ?></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Social Links -->
                    <div class="card" style="padding: 2rem;">
                        <h3 style="margin-bottom: 1.5rem; font-size: 1.25rem;"><?php _e('Follow Us', 'wpsimplified'); ?></h3>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <a href="https://youtube.com/@wpsimplified" target="_blank" 
                               style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border: 1px solid var(--wp-border); border-radius: 0.5rem; text-decoration: none; transition: all 0.3s ease;"
                               class="social-link">
                                <div style="width: 2rem; height: 2rem; background: #FF0000; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                                        <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FF0000"/>
                                    </svg>
                                </div>
                                <span style="font-weight: 600;">YouTube</span>
                            </a>
                            
                            <a href="https://twitter.com/sunilkumarthz" target="_blank" 
                               style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border: 1px solid var(--wp-border); border-radius: 0.5rem; text-decoration: none; transition: all 0.3s ease;"
                               class="social-link">
                                <div style="width: 2rem; height: 2rem; background: #1DA1F2; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                </div>
                                <span style="font-weight: 600;">Twitter</span>
                            </a>
                            
                            <a href="https://instagram.com/wpsimplified" target="_blank" 
                               style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border: 1px solid var(--wp-border); border-radius: 0.5rem; text-decoration: none; transition: all 0.3s ease;"
                               class="social-link">
                                <div style="width: 2rem; height: 2rem; background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                                    </svg>
                                </div>
                                <span style="font-weight: 600;">Instagram</span>
                            </a>
                            
                            <a href="https://linkedin.com/in/sunilkumarthz" target="_blank" 
                               style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border: 1px solid var(--wp-border); border-radius: 0.5rem; text-decoration: none; transition: all 0.3s ease;"
                               class="social-link">
                                <div style="width: 2rem; height: 2rem; background: #0077B5; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </div>
                                <span style="font-weight: 600;">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>

<style>
.social-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(4, 217, 139, 0.15);
    border-color: var(--wp-primary);
}

@media (max-width: 768px) {
    .grid-cols-2 {
        grid-template-columns: 1fr;
    }
    
    .contact-form > div:first-child {
        grid-template-columns: 1fr !important;
    }
}
</style>

<?php get_footer(); ?>
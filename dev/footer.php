    </div><!-- #content -->

    <footer id="colophon" class="site-footer">
        <div class="container">
            <div class="footer-content">
                <!-- About Section -->
                <div class="footer-section">
                    <h3><?php _e('About WPSimplified', 'wpsimplified'); ?></h3>
                    <p style="color: var(--wp-muted-foreground);">
                        <?php _e('Simplifying WordPress, one step at a time. Join thousands of developers and business owners who trust WPSimplified for their WordPress education.', 'wpsimplified'); ?>
                    </p>
                    <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                        <!-- Social Links -->
                        <a href="https://youtube.com/@wpsimplified" target="_blank" rel="noopener" style="width: 2.5rem; height: 2.5rem; background: var(--wp-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>
                        <a href="https://twitter.com/sunilkumarthz" target="_blank" rel="noopener" style="width: 2.5rem; height: 2.5rem; background: var(--wp-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                        <a href="https://instagram.com/wpsimplified" target="_blank" rel="noopener" style="width: 2.5rem; height: 2.5rem; background: var(--wp-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="footer-section">
                    <h3><?php _e('Quick Links', 'wpsimplified'); ?></h3>
                    <ul>
                        <li><a href="<?php echo esc_url(home_url('/videos')); ?>"><?php _e('Latest Videos', 'wpsimplified'); ?></a></li>
                        <li><a href="<?php echo esc_url(home_url('/playlists')); ?>"><?php _e('WordPress Playlists', 'wpsimplified'); ?></a></li>
                        <li><a href="<?php echo esc_url(home_url('/shorts')); ?>"><?php _e('Quick Tutorials', 'wpsimplified'); ?></a></li>
                        <li><a href="<?php echo esc_url(home_url('/podcasts')); ?>"><?php _e('Podcasts', 'wpsimplified'); ?></a></li>
                    </ul>
                </div>

                <!-- Resources -->
                <div class="footer-section">
                    <h3><?php _e('Resources', 'wpsimplified'); ?></h3>
                    <ul>
                        <li><a href="<?php echo esc_url(home_url('/contact')); ?>"><?php _e('Contact Us', 'wpsimplified'); ?></a></li>
                        <li><a href="<?php echo esc_url(home_url('/sponsors')); ?>"><?php _e('Become a Sponsor', 'wpsimplified'); ?></a></li>
                        <li><a href="<?php echo esc_url(home_url('/privacy-policy')); ?>"><?php _e('Privacy Policy', 'wpsimplified'); ?></a></li>
                        <li><a href="<?php echo esc_url(home_url('/terms-of-service')); ?>"><?php _e('Terms of Service', 'wpsimplified'); ?></a></li>
                    </ul>
                </div>

                <!-- Newsletter -->
                <div class="footer-section">
                    <h3><?php _e('Stay Updated', 'wpsimplified'); ?></h3>
                    <p style="color: var(--wp-muted-foreground); margin-bottom: 1rem;">
                        <?php _e('Get the latest WordPress tips and tutorials delivered to your inbox.', 'wpsimplified'); ?>
                    </p>
                    <form class="newsletter-form" style="display: flex; gap: 0.5rem;">
                        <input type="email" placeholder="<?php _e('Enter your email', 'wpsimplified'); ?>" style="flex: 1; padding: 0.75rem; border: 1px solid var(--wp-border); border-radius: 0.5rem; background: var(--wp-background); color: var(--wp-foreground);">
                        <button type="submit" class="btn btn-primary">
                            <?php _e('Subscribe', 'wpsimplified'); ?>
                        </button>
                    </form>
                </div>
            </div>

            <div class="footer-bottom">
                <p>
                    &copy; <?php echo date('Y'); ?> 
                    <a href="<?php echo esc_url(home_url('/')); ?>">
                        <?php bloginfo('name'); ?>
                    </a>
                    <?php _e('by Sunil Kumar Sharma. All rights reserved.', 'wpsimplified'); ?>
                </p>
            </div>
        </div>
    </footer>
</div><!-- #page -->

<?php wp_footer(); ?>

<!-- Theme JavaScript -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navigation = document.getElementById('site-navigation');
    
    if (mobileToggle && navigation) {
        mobileToggle.addEventListener('click', function() {
            navigation.classList.toggle('mobile-menu-open');
        });
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('<?php _e("Thank you for subscribing! We'll keep you updated with the latest WordPress content.", "wpsimplified"); ?>');
                this.reset();
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
</script>

</body>
</html>
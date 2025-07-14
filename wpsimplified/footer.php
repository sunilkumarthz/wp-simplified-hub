<footer class="site-footer">
    <div class="footer-background"></div>
    <div class="footer-orb-1"></div>
    <div class="footer-orb-2"></div>
    
    <div class="container">
        <div class="footer-content">
            <!-- Left Column - Brand & Social -->
            <div class="footer-brand">
                <div class="footer-logo">
                    <a href="<?php echo home_url('/'); ?>">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/logo-white.png" alt="<?php bloginfo('name'); ?>">
                    </a>
                </div>
                
                <p class="footer-description">
                    Empowering WordPress developers with cutting-edge tutorials, comprehensive playlists, and industry insights. Join thousands mastering WordPress development.
                </p>

                <!-- Social Icons -->
                <div class="footer-social">
                    <a href="<?php echo get_theme_mod('github_url', 'https://github.com/sunilkumarthz'); ?>" target="_blank" class="social-link">
                        <i data-lucide="github"></i>
                    </a>
                    <a href="<?php echo get_theme_mod('twitter_url', 'https://x.com/sunilkumarthz'); ?>" target="_blank" class="social-link">
                        <i data-lucide="twitter"></i>
                    </a>
                    <a href="<?php echo get_theme_mod('linkedin_url', 'https://www.linkedin.com/in/sunilkumarthz/'); ?>" target="_blank" class="social-link">
                        <i data-lucide="linkedin"></i>
                    </a>
                    <a href="<?php echo get_theme_mod('website_url', 'https://sunilkumarthz.com'); ?>" target="_blank" class="social-link">
                        <i data-lucide="globe"></i>
                    </a>
                    <a href="mailto:hello@wpsimplified.in" class="social-link">
                        <i data-lucide="mail"></i>
                    </a>
                </div>

                <!-- Quick Links -->
                <div class="footer-links">
                    <h3>Quick Links</h3>
                    <nav class="footer-nav">
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'footer',
                            'container' => false,
                            'items_wrap' => '%3$s',
                            'fallback_cb' => function() {
                                echo '<a href="' . home_url('/') . '">Home</a>';
                                echo '<a href="#">Playlists</a>';
                                echo '<a href="#">Podcasts</a>';
                                echo '<a href="#">Shorts</a>';
                                echo '<a href="#">Contact</a>';
                            }
                        ));
                        ?>
                    </nav>
                </div>
            </div>

            <!-- Right Column - Join Community -->
            <div class="footer-newsletter">
                <h3>Join the Community</h3>
                <p>Subscribe to our YouTube channel for the latest WordPress tutorials, tips, and industry updates delivered weekly. Be part of a growing community of developers.</p>
                <a href="<?php echo get_theme_mod('youtube_url', 'https://www.youtube.com/@wpsimplifiedbysunil'); ?>" target="_blank" class="newsletter-btn">
                    🔔 Subscribe Now
                </a>
            </div>
        </div>

        <!-- Bottom Section -->
        <div class="footer-bottom">
            <p class="footer-copyright">
                © <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Crafted with passion for the WordPress community.
            </p>
            <div class="footer-legal">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
<?php
/**
 * The template for displaying 404 pages (not found)
 * 
 * @package WPSimplified
 */

get_header(); ?>

<main id="main" class="site-main">
    <section class="hero-section" style="min-height: 80vh; padding: 8rem 0 4rem;">
        <div class="hero-background"></div>
        <div class="container">
            <div class="hero-content">
                <!-- 404 Icon -->
                <div style="margin-bottom: 2rem;">
                    <div style="width: 8rem; height: 8rem; margin: 0 auto; background: rgba(4, 217, 139, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--wp-primary)" stroke-width="1.5">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
                            <line x1="9" y1="9" x2="9.01" y2="9"/>
                            <line x1="15" y1="9" x2="15.01" y2="9"/>
                        </svg>
                    </div>
                </div>
                
                <h1 class="hero-title" style="font-size: clamp(3rem, 8vw, 6rem); margin-bottom: 1rem;">
                    <?php _e('404', 'wpsimplified'); ?>
                </h1>
                
                <h2 style="font-size: clamp(1.5rem, 4vw, 2rem); margin-bottom: 1.5rem; color: var(--wp-muted-foreground);">
                    <?php _e('Page Not Found', 'wpsimplified'); ?>
                </h2>
                
                <p class="hero-subtitle" style="max-width: 40rem;">
                    <?php _e('Oops! The page you\'re looking for doesn\'t exist. It might have been moved, deleted, or you entered the wrong URL. Don\'t worry, let\'s get you back on track with some helpful WordPress content.', 'wpsimplified'); ?>
                </p>
                
                <!-- Action Buttons -->
                <div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; margin-top: 3rem;">
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-primary btn-lg">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                            <polyline points="9,22 9,12 15,12 15,22"/>
                        </svg>
                        <?php _e('Go Home', 'wpsimplified'); ?>
                    </a>
                    <button onclick="history.back()" class="btn btn-outline btn-lg">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 12H5"/>
                            <path d="M12 19l-7-7 7-7"/>
                        </svg>
                        <?php _e('Go Back', 'wpsimplified'); ?>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Helpful Links Section -->
    <section class="section" style="background: rgba(51, 65, 85, 0.3);">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title"><?php _e('Popular WordPress Resources', 'wpsimplified'); ?></h2>
                <p class="section-subtitle">
                    <?php _e('Since you\'re here, why not explore some of our most popular WordPress content?', 'wpsimplified'); ?>
                </p>
            </div>
            
            <div class="grid grid-cols-2">
                <div class="card" style="padding: 2rem; text-align: center;">
                    <div style="width: 4rem; height: 4rem; margin: 0 auto 1.5rem; background: rgba(4, 217, 139, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--wp-primary)" stroke-width="2">
                            <polygon points="5,3 19,12 5,21"/>
                        </svg>
                    </div>
                    <h3 style="margin-bottom: 1rem;"><?php _e('Latest WordPress Tutorials', 'wpsimplified'); ?></h3>
                    <p style="color: var(--wp-muted-foreground); margin-bottom: 1.5rem;">
                        <?php _e('Discover step-by-step WordPress tutorials for all skill levels.', 'wpsimplified'); ?>
                    </p>
                    <a href="<?php echo esc_url(home_url('/videos')); ?>" class="btn btn-outline">
                        <?php _e('Watch Videos', 'wpsimplified'); ?>
                    </a>
                </div>
                
                <div class="card" style="padding: 2rem; text-align: center;">
                    <div style="width: 4rem; height: 4rem; margin: 0 auto 1.5rem; background: rgba(4, 217, 139, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--wp-primary)" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="9" y1="9" x2="9" y2="15"/>
                            <line x1="15" y1="9" x2="15" y2="15"/>
                        </svg>
                    </div>
                    <h3 style="margin-bottom: 1rem;"><?php _e('Curated Learning Paths', 'wpsimplified'); ?></h3>
                    <p style="color: var(--wp-muted-foreground); margin-bottom: 1.5rem;">
                        <?php _e('Follow structured playlists designed for your learning journey.', 'wpsimplified'); ?>
                    </p>
                    <a href="<?php echo esc_url(home_url('/playlists')); ?>" class="btn btn-outline">
                        <?php _e('Browse Playlists', 'wpsimplified'); ?>
                    </a>
                </div>
                
                <div class="card" style="padding: 2rem; text-align: center;">
                    <div style="width: 4rem; height: 4rem; margin: 0 auto 1.5rem; background: rgba(4, 217, 139, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--wp-primary)" stroke-width="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                        </svg>
                    </div>
                    <h3 style="margin-bottom: 1rem;"><?php _e('Quick WordPress Tips', 'wpsimplified'); ?></h3>
                    <p style="color: var(--wp-muted-foreground); margin-bottom: 1.5rem;">
                        <?php _e('Bite-sized solutions for common WordPress challenges.', 'wpsimplified'); ?>
                    </p>
                    <a href="<?php echo esc_url(home_url('/shorts')); ?>" class="btn btn-outline">
                        <?php _e('Watch Shorts', 'wpsimplified'); ?>
                    </a>
                </div>
                
                <div class="card" style="padding: 2rem; text-align: center;">
                    <div style="width: 4rem; height: 4rem; margin: 0 auto 1.5rem; background: rgba(4, 217, 139, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--wp-primary)" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                        </svg>
                    </div>
                    <h3 style="margin-bottom: 1rem;"><?php _e('Get Help & Support', 'wpsimplified'); ?></h3>
                    <p style="color: var(--wp-muted-foreground); margin-bottom: 1.5rem;">
                        <?php _e('Need personalized help with your WordPress project?', 'wpsimplified'); ?>
                    </p>
                    <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn btn-outline">
                        <?php _e('Contact Us', 'wpsimplified'); ?>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Search Section -->
    <section class="section">
        <div class="container">
            <div style="max-width: 32rem; margin: 0 auto; text-align: center;">
                <h2 style="margin-bottom: 1rem; font-size: 1.5rem;"><?php _e('Still can\'t find what you\'re looking for?', 'wpsimplified'); ?></h2>
                <p style="color: var(--wp-muted-foreground); margin-bottom: 2rem;">
                    <?php _e('Try searching our site for the content you need.', 'wpsimplified'); ?>
                </p>
                
                <form role="search" method="get" action="<?php echo esc_url(home_url('/')); ?>" 
                      style="display: flex; gap: 0.5rem; max-width: 24rem; margin: 0 auto;">
                    <input type="search" 
                           name="s" 
                           value="<?php echo get_search_query(); ?>" 
                           placeholder="<?php _e('Search WordPress tutorials...', 'wpsimplified'); ?>"
                           style="flex: 1; padding: 0.75rem 1rem; border: 1px solid var(--wp-border); border-radius: 0.5rem; background: var(--wp-background); color: var(--wp-foreground);">
                    <button type="submit" class="btn btn-primary">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="8"/>
                            <path d="M21 21l-4.35-4.35"/>
                        </svg>
                        <?php _e('Search', 'wpsimplified'); ?>
                    </button>
                </form>
            </div>
        </div>
    </section>
</main>

<style>
@media (max-width: 768px) {
    .grid-cols-2 {
        grid-template-columns: 1fr;
    }
}
</style>

<?php get_footer(); ?>
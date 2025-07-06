<?php
/**
 * The main template file
 * 
 * @package WPSimplified
 */

get_header(); ?>

<main id="main" class="site-main">
    
    <!-- Hero Section -->
    <section class="hero-section">
        <div class="hero-background"></div>
        <div class="container">
            <div class="hero-content">
                <div class="hero-badge">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 12l2 2 4-4"/>
                        <circle cx="12" cy="12" r="9"/>
                    </svg>
                    <?php _e('Trusted by 100,000+ WordPress Users', 'wpsimplified'); ?>
                </div>
                
                <h1 class="hero-title">
                    <?php _e('Simplifying', 'wpsimplified'); ?>
                    <span class="hero-gradient-text"><?php _e('WordPress', 'wpsimplified'); ?></span><br>
                    <?php _e('One Step at a Time', 'wpsimplified'); ?>
                </h1>
                
                <p class="hero-subtitle">
                    <?php _e('Master WordPress with expert tutorials, comprehensive guides, and practical tips. Join thousands of developers and business owners who trust WPSimplified for their WordPress education journey.', 'wpsimplified'); ?>
                </p>
                
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <a href="<?php echo esc_url(home_url('/videos')); ?>" class="btn btn-primary btn-lg">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polygon points="5,3 19,12 5,21"/>
                        </svg>
                        <?php _e('Watch Tutorials', 'wpsimplified'); ?>
                    </a>
                    <a href="<?php echo esc_url(home_url('/playlists')); ?>" class="btn btn-outline btn-lg">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="9" y1="9" x2="9" y2="15"/>
                            <line x1="15" y1="9" x2="15" y2="15"/>
                        </svg>
                        <?php _e('Browse Playlists', 'wpsimplified'); ?>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Content Section -->
    <section class="section" style="background: rgba(51, 65, 85, 0.3);">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title"><?php _e('Featured WordPress Content', 'wpsimplified'); ?></h2>
                <p class="section-subtitle">
                    <?php _e('Discover our most popular tutorials, latest uploads, and curated playlists designed to accelerate your WordPress learning journey.', 'wpsimplified'); ?>
                </p>
            </div>
            
            <div class="grid grid-cols-3">
                <!-- Latest Videos -->
                <div class="card">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                        <div style="width: 3rem; height: 3rem; background: rgba(4, 217, 139, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="5,3 19,12 5,21"/>
                            </svg>
                        </div>
                        <h3><?php _e('Latest Videos', 'wpsimplified'); ?></h3>
                    </div>
                    <p style="color: var(--wp-muted-foreground); margin-bottom: 1rem;">
                        <?php _e('Fresh WordPress tutorials covering the latest features, plugins, and best practices.', 'wpsimplified'); ?>
                    </p>
                    <a href="<?php echo esc_url(home_url('/videos')); ?>" class="btn btn-outline">
                        <?php _e('View All Videos', 'wpsimplified'); ?>
                    </a>
                </div>

                <!-- Curated Playlists -->
                <div class="card">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                        <div style="width: 3rem; height: 3rem; background: rgba(4, 217, 139, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                <line x1="9" y1="9" x2="9" y2="15"/>
                                <line x1="15" y1="9" x2="15" y2="15"/>
                            </svg>
                        </div>
                        <h3><?php _e('Curated Playlists', 'wpsimplified'); ?></h3>
                    </div>
                    <p style="color: var(--wp-muted-foreground); margin-bottom: 1rem;">
                        <?php _e('Organized learning paths for beginners to advanced WordPress developers.', 'wpsimplified'); ?>
                    </p>
                    <a href="<?php echo esc_url(home_url('/playlists')); ?>" class="btn btn-outline">
                        <?php _e('Browse Playlists', 'wpsimplified'); ?>
                    </a>
                </div>

                <!-- Quick Shorts -->
                <div class="card">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                        <div style="width: 3rem; height: 3rem; background: rgba(4, 217, 139, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                            </svg>
                        </div>
                        <h3><?php _e('WordPress Shorts', 'wpsimplified'); ?></h3>
                    </div>
                    <p style="color: var(--wp-muted-foreground); margin-bottom: 1rem;">
                        <?php _e('Quick tips and solutions for common WordPress challenges in bite-sized videos.', 'wpsimplified'); ?>
                    </p>
                    <a href="<?php echo esc_url(home_url('/shorts')); ?>" class="btn btn-outline">
                        <?php _e('Watch Shorts', 'wpsimplified'); ?>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Blog Posts -->
    <?php if (have_posts()) : ?>
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title"><?php _e('Latest WordPress Insights', 'wpsimplified'); ?></h2>
                    <p class="section-subtitle">
                        <?php _e('Stay updated with the latest WordPress trends, tutorials, and industry insights.', 'wpsimplified'); ?>
                    </p>
                </div>
                
                <div class="grid grid-cols-2">
                    <?php while (have_posts()) : the_post(); ?>
                        <article class="card">
                            <?php if (has_post_thumbnail()) : ?>
                                <div style="margin-bottom: 1rem;">
                                    <?php the_post_thumbnail('medium', array('style' => 'width: 100%; height: 200px; object-fit: cover; border-radius: 0.5rem;')); ?>
                                </div>
                            <?php endif; ?>
                            
                            <h3 style="margin-bottom: 0.5rem;">
                                <a href="<?php the_permalink(); ?>" style="color: var(--wp-foreground);">
                                    <?php the_title(); ?>
                                </a>
                            </h3>
                            
                            <p style="color: var(--wp-muted-foreground); font-size: 0.875rem; margin-bottom: 1rem;">
                                <?php echo get_the_date(); ?> • <?php _e('By', 'wpsimplified'); ?> <?php the_author(); ?>
                            </p>
                            
                            <div style="color: var(--wp-muted-foreground); margin-bottom: 1rem;">
                                <?php the_excerpt(); ?>
                            </div>
                            
                            <a href="<?php the_permalink(); ?>" class="btn btn-outline">
                                <?php _e('Read More', 'wpsimplified'); ?>
                            </a>
                        </article>
                    <?php endwhile; ?>
                </div>
                
                <!-- Pagination -->
                <div style="text-align: center; margin-top: 3rem;">
                    <?php the_posts_pagination(array(
                        'prev_text' => __('Previous', 'wpsimplified'),
                        'next_text' => __('Next', 'wpsimplified'),
                    )); ?>
                </div>
            </div>
        </section>
    <?php endif; ?>

</main>

<?php get_footer(); ?>
<section class="hero-section">
    <div class="hero-background">
        <div class="hero-grid"></div>
        <div class="hero-orb hero-orb-1"></div>
        <div class="hero-orb hero-orb-2"></div>
        <div class="hero-orb hero-orb-3"></div>
    </div>

    <div class="container">
        <div class="hero-content">
            <!-- Left Column - Content -->
            <div class="hero-text">
                <h1 class="hero-title fade-in">
                    Master <span class="text-gradient">WordPress</span><br>
                    Development
                </h1>
                <p class="hero-description fade-in">
                    Comprehensive tutorials, curated playlists, and expert insights to help you become a WordPress pro. From beginner basics to advanced techniques.
                </p>
                <div class="hero-buttons fade-in">
                    <a href="#latest-videos" class="btn-primary">
                        Explore Tutorials
                    </a>
                    <a href="<?php echo get_post_type_archive_link('playlist'); ?>" class="btn-outline">
                        View Playlists
                    </a>
                </div>
            </div>

            <!-- Right Column - Featured Content -->
            <div class="hero-featured fade-in">
                <h3>Latest Content</h3>
                <div class="featured-content">
                    <?php
                    // Latest Video
                    $latest_video = new WP_Query(array(
                        'post_type' => 'video',
                        'posts_per_page' => 1,
                        'post_status' => 'publish'
                    ));
                    
                    if ($latest_video->have_posts()) :
                        while ($latest_video->have_posts()) : $latest_video->the_post(); ?>
                            <div class="featured-item">
                                <h4>Latest Video</h4>
                                <p><?php echo wp_trim_words(get_the_title(), 8, '...'); ?></p>
                            </div>
                        <?php endwhile;
                        wp_reset_postdata();
                    else : ?>
                        <div class="featured-item">
                            <h4>Latest Video</h4>
                            <p>Master WordPress Gutenberg Block Development</p>
                        </div>
                    <?php endif; ?>

                    <?php
                    // Latest Podcast
                    $latest_podcast = new WP_Query(array(
                        'post_type' => 'podcast',
                        'posts_per_page' => 1,
                        'post_status' => 'publish'
                    ));
                    
                    if ($latest_podcast->have_posts()) :
                        while ($latest_podcast->have_posts()) : $latest_podcast->the_post(); ?>
                            <div class="featured-item">
                                <h4>Latest Podcast</h4>
                                <p><?php echo wp_trim_words(get_the_title(), 8, '...'); ?></p>
                            </div>
                        <?php endwhile;
                        wp_reset_postdata();
                    else : ?>
                        <div class="featured-item">
                            <h4>Latest Podcast</h4>
                            <p>WordPress Performance Optimization Tips</p>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="scroll-indicator">
            <a href="#latest-videos">
                <i data-lucide="chevron-down"></i>
            </a>
        </div>
    </div>
</section>
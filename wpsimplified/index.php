<?php get_header(); ?>

<main>
    <?php get_template_part('template-parts/hero-section'); ?>
    
    <section id="latest-videos" class="content-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Latest <span class="text-gradient">Videos</span></h2>
                <p class="section-description">Stay updated with our newest WordPress tutorials and guides</p>
            </div>
            
            <div class="content-grid" id="latest-videos-grid">
                <?php
                $videos = new WP_Query(array(
                    'post_type' => 'video',
                    'posts_per_page' => 6,
                    'post_status' => 'publish'
                ));
                
                if ($videos->have_posts()) :
                    while ($videos->have_posts()) : $videos->the_post();
                        get_template_part('template-parts/video-card');
                    endwhile;
                    wp_reset_postdata();
                else : ?>
                    <div class="loading-state">
                        <div class="loading-spinner"></div>
                        <p>Loading videos...</p>
                    </div>
                <?php endif; ?>
            </div>
            
            <div class="load-more">
                <a href="<?php echo get_post_type_archive_link('video'); ?>" class="load-more-btn">
                    View All Videos
                </a>
            </div>
        </div>
    </section>

    <section class="content-section section-alt">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Latest <span class="text-gradient">Podcasts</span></h2>
                <p class="section-description">Listen to expert insights and industry discussions</p>
            </div>
            
            <div class="content-grid" id="latest-podcasts-grid">
                <?php
                $podcasts = new WP_Query(array(
                    'post_type' => 'podcast',
                    'posts_per_page' => 6,
                    'post_status' => 'publish'
                ));
                
                if ($podcasts->have_posts()) :
                    while ($podcasts->have_posts()) : $podcasts->the_post();
                        get_template_part('template-parts/podcast-card');
                    endwhile;
                    wp_reset_postdata();
                endif; ?>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
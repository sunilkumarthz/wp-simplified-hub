<?php
/**
 * Template for Videos page
 * 
 * @package WPSimplified
 */

get_header(); ?>

<main id="main" class="site-main">
    
    <!-- Videos Hero Section -->
    <section class="hero-section" style="min-height: 60vh; padding: 8rem 0 4rem;">
        <div class="hero-background"></div>
        <div class="container">
            <div class="hero-content">
                <div class="hero-badge">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="5,3 19,12 5,21"/>
                    </svg>
                    <?php _e('Comprehensive WordPress Tutorials', 'wpsimplified'); ?>
                </div>
                
                <h1 class="hero-title" style="font-size: clamp(2.5rem, 6vw, 4rem);">
                    <?php _e('WordPress', 'wpsimplified'); ?>
                    <span class="hero-gradient-text"><?php _e('Video Tutorials', 'wpsimplified'); ?></span>
                </h1>
                
                <p class="hero-subtitle">
                    <?php _e('Master WordPress with our comprehensive video tutorials. From beginner basics to advanced techniques, learn at your own pace with step-by-step guidance.', 'wpsimplified'); ?>
                </p>
            </div>
        </div>
    </section>

    <!-- Videos Content -->
    <section class="section">
        <div class="container">
            
            <!-- Filter/Search Bar -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3rem; flex-wrap: wrap; gap: 1rem;">
                <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
                    <span style="color: var(--wp-muted-foreground); font-size: 0.875rem;">
                        <?php 
                        $video_count = wp_count_posts('videos');
                        printf(__('%s WordPress Videos Available', 'wpsimplified'), $video_count->publish);
                        ?>
                    </span>
                </div>
                
                <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                    <button class="btn btn-primary btn-filter active" data-filter="all">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/>
                        </svg>
                        <?php _e('All Videos', 'wpsimplified'); ?>
                    </button>
                    <button class="btn btn-outline btn-filter" data-filter="recent">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 4v16l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2z"/>
                        </svg>
                        <?php _e('Most Recent', 'wpsimplified'); ?>
                    </button>
                    <button class="btn btn-outline btn-filter" data-filter="popular">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                            <circle cx="8.5" cy="7" r="4"/>
                            <line x1="20" y1="8" x2="20" y2="14"/>
                            <line x1="23" y1="11" x2="17" y2="11"/>
                        </svg>
                        <?php _e('Most Popular', 'wpsimplified'); ?>
                    </button>
                </div>
            </div>

            <!-- Videos Grid -->
            <div class="grid grid-cols-3" id="videos-grid">
                <?php
                $videos_query = new WP_Query(array(
                    'post_type' => 'videos',
                    'posts_per_page' => 12,
                    'post_status' => 'publish'
                ));

                if ($videos_query->have_posts()) :
                    while ($videos_query->have_posts()) : $videos_query->the_post();
                        $video_url = get_post_meta(get_the_ID(), '_video_url', true);
                        $video_duration = get_post_meta(get_the_ID(), '_video_duration', true);
                        $video_views = get_post_meta(get_the_ID(), '_video_views', true);
                ?>
                        <article class="card video-card">
                            <?php if (has_post_thumbnail()) : ?>
                                <div style="position: relative; margin-bottom: 1rem;">
                                    <?php the_post_thumbnail('wpsimplified-medium', array('style' => 'width: 100%; height: 200px; object-fit: cover; border-radius: 0.5rem;')); ?>
                                    
                                    <?php if ($video_duration) : ?>
                                        <span style="position: absolute; bottom: 0.5rem; right: 0.5rem; background: rgba(0,0,0,0.8); color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">
                                            <?php echo esc_html($video_duration); ?>
                                        </span>
                                    <?php endif; ?>
                                    
                                    <!-- Play Button Overlay -->
                                    <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.3); border-radius: 0.5rem; opacity: 0; transition: opacity 0.3s ease;" class="play-overlay">
                                        <div style="width: 4rem; height: 4rem; background: var(--wp-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                                <polygon points="5,3 19,12 5,21"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            <?php endif; ?>
                            
                            <h3 style="margin-bottom: 0.5rem; font-size: 1.125rem;">
                                <a href="<?php echo $video_url ? esc_url($video_url) : get_permalink(); ?>" 
                                   target="_blank" 
                                   style="color: var(--wp-foreground); text-decoration: none;">
                                    <?php the_title(); ?>
                                </a>
                            </h3>
                            
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; font-size: 0.875rem; color: var(--wp-muted-foreground);">
                                <span><?php echo get_the_date(); ?></span>
                                <?php if ($video_views) : ?>
                                    <span><?php echo esc_html($video_views); ?> <?php _e('views', 'wpsimplified'); ?></span>
                                <?php endif; ?>
                            </div>
                            
                            <div style="color: var(--wp-muted-foreground); margin-bottom: 1rem;">
                                <?php the_excerpt(); ?>
                            </div>
                            
                            <a href="<?php echo $video_url ? esc_url($video_url) : get_permalink(); ?>" 
                               target="_blank" 
                               class="btn btn-outline">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polygon points="5,3 19,12 5,21"/>
                                </svg>
                                <?php _e('Watch Video', 'wpsimplified'); ?>
                            </a>
                        </article>
                <?php
                    endwhile;
                    wp_reset_postdata();
                else :
                ?>
                    <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                        <h3><?php _e('No videos available yet', 'wpsimplified'); ?></h3>
                        <p style="color: var(--wp-muted-foreground);">
                            <?php _e('Check back soon for amazing WordPress video content!', 'wpsimplified'); ?>
                        </p>
                    </div>
                <?php endif; ?>
            </div>

            <!-- Load More Button -->
            <?php if ($videos_query->found_posts > 12) : ?>
                <div style="text-align: center; margin-top: 3rem;">
                    <button id="load-more-videos" class="btn btn-primary btn-lg">
                        <?php printf(__('Load More Videos (%d remaining)', 'wpsimplified'), $videos_query->found_posts - 12); ?>
                    </button>
                </div>
            <?php endif; ?>
        </div>
    </section>

</main>

<style>
.video-card:hover .play-overlay {
    opacity: 1;
}

.btn-filter.active {
    background: var(--wp-primary);
    color: white;
    border-color: var(--wp-primary);
}

@media (max-width: 768px) {
    .grid-cols-3 {
        grid-template-columns: 1fr;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .grid-cols-3 {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.btn-filter');
    const videosGrid = document.getElementById('videos-grid');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            filterButtons.forEach(btn => btn.classList.remove('btn-primary'));
            filterButtons.forEach(btn => btn.classList.add('btn-outline'));
            
            this.classList.add('active');
            this.classList.add('btn-primary');
            this.classList.remove('btn-outline');
            
            // Here you would typically make an AJAX call to filter videos
            // For now, we'll just show a message
            const filter = this.dataset.filter;
            console.log('Filter applied:', filter);
        });
    });
    
    // Load more functionality
    const loadMoreBtn = document.getElementById('load-more-videos');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Here you would make an AJAX call to load more videos
            this.textContent = '<?php _e("Loading...", "wpsimplified"); ?>';
            // Simulate loading
            setTimeout(() => {
                this.style.display = 'none';
            }, 1000);
        });
    }
});
</script>

<?php get_footer(); ?>
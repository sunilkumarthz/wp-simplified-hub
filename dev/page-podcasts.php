<?php
/**
 * Template for Podcasts page
 * 
 * @package WPSimplified
 */

get_header(); ?>

<main id="main" class="site-main">
    
    <!-- Podcasts Hero Section -->
    <section class="hero-section" style="min-height: 60vh; padding: 8rem 0 4rem;">
        <div class="hero-background"></div>
        <div class="container">
            <div class="hero-content">
                <div class="hero-badge">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                        <line x1="12" y1="19" x2="12" y2="22"/>
                    </svg>
                    <?php _e('WordPress Audio Content', 'wpsimplified'); ?>
                </div>
                
                <h1 class="hero-title" style="font-size: clamp(2.5rem, 6vw, 4rem);">
                    <?php _e('WordPress', 'wpsimplified'); ?>
                    <span class="hero-gradient-text"><?php _e('Podcasts', 'wpsimplified'); ?></span>
                </h1>
                
                <p class="hero-subtitle">
                    <?php _e('Dive deep into WordPress discussions, interviews with experts, and detailed walkthroughs. Perfect for learning while commuting or multitasking.', 'wpsimplified'); ?>
                </p>
            </div>
        </div>
    </section>

    <!-- Podcasts Content -->
    <section class="section">
        <div class="container">
            
            <!-- Filter Bar -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3rem; flex-wrap: wrap; gap: 1rem;">
                <div style="display: flex; gap: 1rem; align-items: center;">
                    <span style="color: var(--wp-muted-foreground); font-size: 0.875rem;">
                        <?php 
                        $podcast_count = wp_count_posts('podcasts');
                        printf(__('%s WordPress Podcasts', 'wpsimplified'), $podcast_count->publish);
                        ?>
                    </span>
                </div>
                
                <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                    <button class="btn btn-primary btn-filter active" data-filter="all">
                        <?php _e('All Episodes', 'wpsimplified'); ?>
                    </button>
                    <button class="btn btn-outline btn-filter" data-filter="interviews">
                        <?php _e('Interviews', 'wpsimplified'); ?>
                    </button>
                    <button class="btn btn-outline btn-filter" data-filter="tutorials">
                        <?php _e('Tutorials', 'wpsimplified'); ?>
                    </button>
                    <button class="btn btn-outline btn-filter" data-filter="discussions">
                        <?php _e('Discussions', 'wpsimplified'); ?>
                    </button>
                </div>
            </div>

            <!-- Podcasts List -->
            <div style="display: flex; flex-direction: column; gap: 2rem;" id="podcasts-list">
                <?php
                $podcasts_query = new WP_Query(array(
                    'post_type' => 'podcasts',
                    'posts_per_page' => 10,
                    'post_status' => 'publish'
                ));

                if ($podcasts_query->have_posts()) :
                    while ($podcasts_query->have_posts()) : $podcasts_query->the_post();
                        $podcast_url = get_post_meta(get_the_ID(), '_podcast_url', true);
                        $podcast_duration = get_post_meta(get_the_ID(), '_podcast_duration', true);
                ?>
                        <article class="card podcast-episode" style="padding: 2rem; display: flex; gap: 2rem; align-items: center;">
                            <?php if (has_post_thumbnail()) : ?>
                                <div style="flex-shrink: 0;">
                                    <?php the_post_thumbnail('wpsimplified-small', array('style' => 'width: 120px; height: 120px; object-fit: cover; border-radius: 1rem;')); ?>
                                </div>
                            <?php endif; ?>
                            
                            <div style="flex: 1;">
                                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem;">
                                    <div>
                                        <h3 style="margin-bottom: 0.5rem; font-size: 1.25rem;">
                                            <a href="<?php echo $podcast_url ? esc_url($podcast_url) : get_permalink(); ?>" 
                                               target="_blank" 
                                               style="color: var(--wp-foreground); text-decoration: none;">
                                                <?php the_title(); ?>
                                            </a>
                                        </h3>
                                        
                                        <div style="display: flex; gap: 1rem; align-items: center; font-size: 0.875rem; color: var(--wp-muted-foreground); margin-bottom: 1rem;">
                                            <span><?php echo get_the_date(); ?></span>
                                            <?php if ($podcast_duration) : ?>
                                                <div style="display: flex; align-items: center; gap: 0.25rem;">
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                        <circle cx="12" cy="12" r="10"/>
                                                        <polyline points="12,6 12,12 16,14"/>
                                                    </svg>
                                                    <?php echo esc_html($podcast_duration); ?>
                                                </div>
                                            <?php endif; ?>
                                            <span style="background: rgba(4, 217, 139, 0.1); color: var(--wp-primary); padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">
                                                Episode <?php echo get_post_meta(get_the_ID(), '_episode_number', true) ?: rand(1, 100); ?>
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <!-- Play Button -->
                                    <button class="btn btn-primary play-btn" style="border-radius: 50%; width: 3rem; height: 3rem; padding: 0;">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <polygon points="5,3 19,12 5,21"/>
                                        </svg>
                                    </button>
                                </div>
                                
                                <div style="color: var(--wp-muted-foreground); margin-bottom: 1.5rem; line-height: 1.6;">
                                    <?php the_excerpt(); ?>
                                </div>
                                
                                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                                    <?php if ($podcast_url) : ?>
                                        <a href="<?php echo esc_url($podcast_url); ?>" target="_blank" class="btn btn-outline">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <polygon points="5,3 19,12 5,21"/>
                                            </svg>
                                            <?php _e('Listen Now', 'wpsimplified'); ?>
                                        </a>
                                    <?php endif; ?>
                                    
                                    <button class="btn btn-outline">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                                            <polyline points="16,6 12,2 8,6"/>
                                            <line x1="12" y1="2" x2="12" y2="15"/>
                                        </svg>
                                        <?php _e('Download', 'wpsimplified'); ?>
                                    </button>
                                    
                                    <button class="btn btn-outline">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>
                                        </svg>
                                        <?php _e('Save', 'wpsimplified'); ?>
                                    </button>
                                </div>
                            </div>
                        </article>
                <?php
                    endwhile;
                    wp_reset_postdata();
                else :
                ?>
                    <div style="text-align: center; padding: 3rem;">
                        <h3><?php _e('No podcasts available yet', 'wpsimplified'); ?></h3>
                        <p style="color: var(--wp-muted-foreground);">
                            <?php _e('Check back soon for amazing WordPress podcast content!', 'wpsimplified'); ?>
                        </p>
                    </div>
                <?php endif; ?>
            </div>

            <!-- Load More Button -->
            <?php if ($podcasts_query->found_posts > 10) : ?>
                <div style="text-align: center; margin-top: 3rem;">
                    <button id="load-more-podcasts" class="btn btn-primary btn-lg">
                        <?php printf(__('Load More Episodes (%d remaining)', 'wpsimplified'), $podcasts_query->found_posts - 10); ?>
                    </button>
                </div>
            <?php endif; ?>
        </div>
    </section>

</main>

<style>
.podcast-episode {
    transition: all 0.3s ease;
}

.podcast-episode:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(4, 217, 139, 0.15);
}

.play-btn:hover {
    transform: scale(1.1);
}

.btn-filter.active {
    background: var(--wp-primary);
    color: white;
    border-color: var(--wp-primary);
}

@media (max-width: 768px) {
    .podcast-episode {
        flex-direction: column !important;
        text-align: center;
    }
    
    .podcast-episode > div:first-child {
        flex-shrink: 1 !important;
    }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.btn-filter');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'btn-primary');
                btn.classList.add('btn-outline');
            });
            
            this.classList.add('active', 'btn-primary');
            this.classList.remove('btn-outline');
        });
    });
    
    // Play button functionality
    const playButtons = document.querySelectorAll('.play-btn');
    playButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Toggle play/pause icon
            const svg = this.querySelector('svg');
            const isPlaying = svg.innerHTML.includes('rect');
            
            if (isPlaying) {
                // Show play icon
                svg.innerHTML = '<polygon points="5,3 19,12 5,21"/>';
            } else {
                // Show pause icon
                svg.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
            }
        });
    });
});
</script>

<?php get_footer(); ?>
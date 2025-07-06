<?php
/**
 * Template for Shorts page
 * 
 * @package WPSimplified
 */

get_header(); ?>

<main id="main" class="site-main">
    
    <!-- Shorts Hero Section -->
    <section class="hero-section" style="min-height: 60vh; padding: 8rem 0 4rem;">
        <div class="hero-background"></div>
        <div class="container">
            <div class="hero-content">
                <div class="hero-badge">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                    <?php _e('Quick WordPress Solutions', 'wpsimplified'); ?>
                </div>
                
                <h1 class="hero-title" style="font-size: clamp(2.5rem, 6vw, 4rem);">
                    <?php _e('WordPress', 'wpsimplified'); ?>
                    <span class="hero-gradient-text"><?php _e('Shorts', 'wpsimplified'); ?></span>
                </h1>
                
                <p class="hero-subtitle">
                    <?php _e('Quick, bite-sized WordPress tutorials and tips. Perfect for learning on the go and getting instant solutions to common WordPress challenges.', 'wpsimplified'); ?>
                </p>
            </div>
        </div>
    </section>

    <!-- Shorts Stats Bar -->
    <section class="section" style="padding: 3rem 0; background: rgba(51, 65, 85, 0.3);">
        <div class="container">
            <div class="card" style="padding: 2rem;">
                <div class="grid grid-cols-4">
                    <div style="text-align: center;">
                        <div style="width: 3rem; height: 3rem; margin: 0 auto 1rem; background: rgba(4, 217, 139, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--wp-primary)" stroke-width="2">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                            </svg>
                        </div>
                        <div style="font-size: 2rem; font-weight: bold; margin-bottom: 0.25rem;">150+</div>
                        <div style="font-size: 0.875rem; color: var(--wp-muted-foreground);"><?php _e('Total Shorts', 'wpsimplified'); ?></div>
                    </div>
                    
                    <div style="text-align: center;">
                        <div style="width: 3rem; height: 3rem; margin: 0 auto 1rem; background: rgba(4, 217, 139, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--wp-primary)" stroke-width="2">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                <circle cx="12" cy="12" r="3"/>
                            </svg>
                        </div>
                        <div style="font-size: 2rem; font-weight: bold; margin-bottom: 0.25rem;">2.5M+</div>
                        <div style="font-size: 0.875rem; color: var(--wp-muted-foreground);"><?php _e('Total Views', 'wpsimplified'); ?></div>
                    </div>
                    
                    <div style="text-align: center;">
                        <div style="width: 3rem; height: 3rem; margin: 0 auto 1rem; background: rgba(4, 217, 139, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--wp-primary)" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/>
                                <polyline points="12,6 12,12 16,14"/>
                            </svg>
                        </div>
                        <div style="font-size: 2rem; font-weight: bold; margin-bottom: 0.25rem;">25+</div>
                        <div style="font-size: 0.875rem; color: var(--wp-muted-foreground);"><?php _e('Hours Content', 'wpsimplified'); ?></div>
                    </div>
                    
                    <div style="text-align: center;">
                        <div style="width: 3rem; height: 3rem; margin: 0 auto 1rem; background: rgba(4, 217, 139, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--wp-primary)" stroke-width="2">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                <circle cx="8.5" cy="7" r="4"/>
                                <line x1="20" y1="8" x2="20" y2="14"/>
                                <line x1="23" y1="11" x2="17" y2="11"/>
                            </svg>
                        </div>
                        <div style="font-size: 2rem; font-weight: bold; margin-bottom: 0.25rem;">+15%</div>
                        <div style="font-size: 0.875rem; color: var(--wp-muted-foreground);"><?php _e('Growth Rate', 'wpsimplified'); ?></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Shorts Content -->
    <section class="section">
        <div class="container">
            
            <!-- Filter Bar -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3rem; flex-wrap: wrap; gap: 1rem;">
                <div style="display: flex; gap: 1rem; align-items: center;">
                    <span style="background: rgba(4, 217, 139, 0.1); color: var(--wp-primary); padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.875rem;">
                        <?php 
                        $shorts_count = wp_count_posts('shorts');
                        printf(__('%s WordPress Shorts Available', 'wpsimplified'), $shorts_count->publish);
                        ?>
                    </span>
                </div>
                
                <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                    <button class="btn btn-primary btn-filter active" data-filter="all">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/>
                        </svg>
                        <?php _e('All Shorts', 'wpsimplified'); ?>
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
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                        </svg>
                        <?php _e('Most Popular', 'wpsimplified'); ?>
                    </button>
                    <button class="btn btn-outline btn-filter" data-filter="quick">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12,6 12,12 16,14"/>
                        </svg>
                        <?php _e('Under 1 Min', 'wpsimplified'); ?>
                    </button>
                </div>
            </div>

            <!-- Shorts Grid -->
            <div class="grid grid-cols-3" id="shorts-grid" style="gap: 1.5rem;">
                <?php
                $shorts_query = new WP_Query(array(
                    'post_type' => 'shorts',
                    'posts_per_page' => 12,
                    'post_status' => 'publish'
                ));

                if ($shorts_query->have_posts()) :
                    while ($shorts_query->have_posts()) : $shorts_query->the_post();
                        $video_url = get_post_meta(get_the_ID(), '_video_url', true);
                        $video_duration = get_post_meta(get_the_ID(), '_video_duration', true);
                        $video_views = get_post_meta(get_the_ID(), '_video_views', true);
                ?>
                        <article class="card shorts-card" style="padding: 1rem;">
                            <?php if (has_post_thumbnail()) : ?>
                                <div style="position: relative; margin-bottom: 1rem;">
                                    <?php the_post_thumbnail('wpsimplified-medium', array('style' => 'width: 100%; height: 240px; object-fit: cover; border-radius: 0.75rem;')); ?>
                                    
                                    <?php if ($video_duration) : ?>
                                        <span style="position: absolute; bottom: 0.5rem; right: 0.5rem; background: rgba(0,0,0,0.8); color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem; font-weight: 600;">
                                            <?php echo esc_html($video_duration); ?>
                                        </span>
                                    <?php endif; ?>
                                    
                                    <!-- Shorts Play Button -->
                                    <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.4); border-radius: 0.75rem; opacity: 0; transition: opacity 0.3s ease;" class="shorts-overlay">
                                        <div style="width: 3.5rem; height: 3.5rem; background: var(--wp-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(4, 217, 139, 0.3);">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                                <polygon points="5,3 19,12 5,21"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            <?php endif; ?>
                            
                            <h3 style="margin-bottom: 0.75rem; font-size: 1rem; line-height: 1.4;">
                                <a href="<?php echo $video_url ? esc_url($video_url) : get_permalink(); ?>" 
                                   target="_blank" 
                                   style="color: var(--wp-foreground); text-decoration: none;">
                                    <?php the_title(); ?>
                                </a>
                            </h3>
                            
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; font-size: 0.75rem; color: var(--wp-muted-foreground);">
                                <span><?php echo get_the_date(); ?></span>
                                <?php if ($video_views) : ?>
                                    <div style="display: flex; align-items: center; gap: 0.25rem;">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                            <circle cx="12" cy="12" r="3"/>
                                        </svg>
                                        <?php echo esc_html($video_views); ?>
                                    </div>
                                <?php endif; ?>
                            </div>
                            
                            <a href="<?php echo $video_url ? esc_url($video_url) : get_permalink(); ?>" 
                               target="_blank" 
                               class="btn btn-outline" 
                               style="width: 100%; justify-content: center; font-size: 0.875rem;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polygon points="5,3 19,12 5,21"/>
                                </svg>
                                <?php _e('Watch Short', 'wpsimplified'); ?>
                            </a>
                        </article>
                <?php
                    endwhile;
                    wp_reset_postdata();
                else :
                ?>
                    <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                        <h3><?php _e('No shorts available yet', 'wpsimplified'); ?></h3>
                        <p style="color: var(--wp-muted-foreground);">
                            <?php _e('Check back soon for amazing WordPress short content!', 'wpsimplified'); ?>
                        </p>
                    </div>
                <?php endif; ?>
            </div>

            <!-- Load More Button -->
            <?php if ($shorts_query->found_posts > 12) : ?>
                <div style="text-align: center; margin-top: 3rem;">
                    <button id="load-more-shorts" class="btn btn-primary btn-lg">
                        <?php printf(__('Load More Shorts (%d remaining)', 'wpsimplified'), $shorts_query->found_posts - 12); ?>
                    </button>
                </div>
            <?php endif; ?>
        </div>
    </section>

</main>

<style>
.shorts-card:hover .shorts-overlay {
    opacity: 1;
}

.shorts-card {
    transition: transform 0.3s ease;
}

.shorts-card:hover {
    transform: translateY(-4px);
}

.btn-filter.active {
    background: var(--wp-primary);
    color: white;
    border-color: var(--wp-primary);
}

@media (max-width: 768px) {
    .grid-cols-3 {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .grid-cols-4 {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
}

@media (max-width: 480px) {
    .grid-cols-3 {
        grid-template-columns: 1fr;
    }
    
    .grid-cols-4 {
        grid-template-columns: 1fr;
        gap: 1.5rem;
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
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'btn-primary');
                btn.classList.add('btn-outline');
            });
            
            this.classList.add('active', 'btn-primary');
            this.classList.remove('btn-outline');
            
            const filter = this.dataset.filter;
            console.log('Shorts filter applied:', filter);
        });
    });
    
    // Load more functionality
    const loadMoreBtn = document.getElementById('load-more-shorts');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            this.textContent = '<?php _e("Loading...", "wpsimplified"); ?>';
            setTimeout(() => {
                this.style.display = 'none';
            }, 1000);
        });
    }
});
</script>

<?php get_footer(); ?>
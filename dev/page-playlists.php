<?php
/**
 * Template for Playlists page
 * 
 * @package WPSimplified
 */

get_header(); ?>

<main id="main" class="site-main">
    
    <!-- Playlists Hero Section -->
    <section class="hero-section" style="min-height: 60vh; padding: 8rem 0 4rem;">
        <div class="hero-background"></div>
        <div class="container">
            <div class="hero-content">
                <div class="hero-badge">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="9" y1="9" x2="9" y2="15"/>
                        <line x1="15" y1="9" x2="15" y2="15"/>
                    </svg>
                    <?php _e('Curated Learning Paths', 'wpsimplified'); ?>
                </div>
                
                <h1 class="hero-title" style="font-size: clamp(2.5rem, 6vw, 4rem);">
                    <?php _e('WordPress', 'wpsimplified'); ?>
                    <span class="hero-gradient-text"><?php _e('Playlists', 'wpsimplified'); ?></span>
                </h1>
                
                <p class="hero-subtitle">
                    <?php _e('Organized learning paths for every skill level. From beginner basics to advanced techniques, follow structured courses designed to accelerate your WordPress mastery.', 'wpsimplified'); ?>
                </p>
            </div>
        </div>
    </section>

    <!-- Playlists Content -->
    <section class="section">
        <div class="container">
            
            <!-- Categories Filter -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3rem; flex-wrap: wrap; gap: 1rem;">
                <div style="display: flex; gap: 1rem; align-items: center;">
                    <span style="color: var(--wp-muted-foreground); font-size: 0.875rem;">
                        <?php 
                        $playlist_count = wp_count_posts('playlists');
                        printf(__('%s Curated Playlists Available', 'wpsimplified'), $playlist_count->publish);
                        ?>
                    </span>
                </div>
                
                <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                    <button class="btn btn-primary btn-filter active" data-filter="all">
                        <?php _e('All Playlists', 'wpsimplified'); ?>
                    </button>
                    <button class="btn btn-outline btn-filter" data-filter="beginner">
                        <?php _e('Beginner', 'wpsimplified'); ?>
                    </button>
                    <button class="btn btn-outline btn-filter" data-filter="intermediate">
                        <?php _e('Intermediate', 'wpsimplified'); ?>
                    </button>
                    <button class="btn btn-outline btn-filter" data-filter="advanced">
                        <?php _e('Advanced', 'wpsimplified'); ?>
                    </button>
                </div>
            </div>

            <!-- Playlists Grid -->
            <div class="grid grid-cols-2" id="playlists-grid">
                <?php
                $playlists_query = new WP_Query(array(
                    'post_type' => 'playlists',
                    'posts_per_page' => 8,
                    'post_status' => 'publish'
                ));

                if ($playlists_query->have_posts()) :
                    while ($playlists_query->have_posts()) : $playlists_query->the_post();
                ?>
                        <article class="card playlist-card" style="padding: 1.5rem;">
                            <?php if (has_post_thumbnail()) : ?>
                                <div style="position: relative; margin-bottom: 1.5rem;">
                                    <?php the_post_thumbnail('wpsimplified-medium', array('style' => 'width: 100%; height: 200px; object-fit: cover; border-radius: 0.75rem;')); ?>
                                    
                                    <!-- Playlist Icon Overlay -->
                                    <div style="position: absolute; top: 1rem; right: 1rem; width: 2.5rem; height: 2.5rem; background: rgba(0,0,0,0.8); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                            <line x1="9" y1="9" x2="9" y2="15"/>
                                            <line x1="15" y1="9" x2="15" y2="15"/>
                                        </svg>
                                    </div>
                                    
                                    <!-- Video Count Badge -->
                                    <div style="position: absolute; bottom: 1rem; left: 1rem; background: rgba(4, 217, 139, 0.9); color: white; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600;">
                                        <?php echo rand(5, 25); ?> <?php _e('Videos', 'wpsimplified'); ?>
                                    </div>
                                </div>
                            <?php endif; ?>
                            
                            <div style="margin-bottom: 1rem;">
                                <div style="display: inline-block; background: rgba(4, 217, 139, 0.1); color: var(--wp-primary); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; margin-bottom: 1rem;">
                                    <?php 
                                    $levels = array('Beginner', 'Intermediate', 'Advanced');
                                    echo $levels[array_rand($levels)];
                                    ?>
                                </div>
                                
                                <h3 style="margin-bottom: 0.75rem; font-size: 1.25rem;">
                                    <a href="<?php the_permalink(); ?>" style="color: var(--wp-foreground); text-decoration: none;">
                                        <?php the_title(); ?>
                                    </a>
                                </h3>
                            </div>
                            
                            <div style="color: var(--wp-muted-foreground); margin-bottom: 1.5rem; line-height: 1.5;">
                                <?php the_excerpt(); ?>
                            </div>
                            
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; font-size: 0.875rem; color: var(--wp-muted-foreground);">
                                <span><?php echo get_the_date(); ?></span>
                                <div style="display: flex; align-items: center; gap: 0.25rem;">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="12" cy="12" r="10"/>
                                        <polyline points="12,6 12,12 16,14"/>
                                    </svg>
                                    <?php echo rand(30, 180); ?> <?php _e('min', 'wpsimplified'); ?>
                                </div>
                            </div>
                            
                            <a href="<?php the_permalink(); ?>" class="btn btn-outline" style="width: 100%; justify-content: center;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polygon points="5,3 19,12 5,21"/>
                                </svg>
                                <?php _e('Start Learning', 'wpsimplified'); ?>
                            </a>
                        </article>
                <?php
                    endwhile;
                    wp_reset_postdata();
                else :
                ?>
                    <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                        <h3><?php _e('No playlists available yet', 'wpsimplified'); ?></h3>
                        <p style="color: var(--wp-muted-foreground);">
                            <?php _e('Check back soon for amazing WordPress learning paths!', 'wpsimplified'); ?>
                        </p>
                    </div>
                <?php endif; ?>
            </div>

            <!-- Load More Button -->
            <?php if ($playlists_query->found_posts > 8) : ?>
                <div style="text-align: center; margin-top: 3rem;">
                    <button id="load-more-playlists" class="btn btn-primary btn-lg">
                        <?php printf(__('Load More Playlists (%d remaining)', 'wpsimplified'), $playlists_query->found_posts - 8); ?>
                    </button>
                </div>
            <?php endif; ?>
        </div>
    </section>

</main>

<style>
.playlist-card {
    transition: all 0.3s ease;
}

.playlist-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 15px 35px rgba(4, 217, 139, 0.15);
}

.btn-filter.active {
    background: var(--wp-primary);
    color: white;
    border-color: var(--wp-primary);
}

@media (max-width: 768px) {
    .grid-cols-2 {
        grid-template-columns: 1fr;
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
});
</script>

<?php get_footer(); ?>
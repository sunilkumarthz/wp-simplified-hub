<?php
/**
 * Template Name: Playlists Page
 */

get_header(); ?>

<main>
    <!-- Hero Section -->
    <section class="hero-section">
        <div class="hero-background">
            <div class="hero-grid"></div>
            <div class="hero-orb hero-orb-1"></div>
            <div class="hero-orb hero-orb-2"></div>
            <div class="hero-orb hero-orb-3"></div>
        </div>
        
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <h1 class="hero-title">WordPress <span class="text-gradient">Playlists</span></h1>
                    <p class="hero-description">
                        Comprehensive WordPress tutorials organized into structured learning paths. 
                        Master WordPress step by step with our curated playlists.
                    </p>
                    
                    <!-- Stats -->
                    <div style="display: flex; gap: 2rem; margin-top: 2rem; flex-wrap: wrap;">
                        <?php
                        $total_playlists = wp_count_posts('playlist');
                        $published_playlists = $total_playlists->publish ?? 0;
                        ?>
                        <div class="featured-item" style="background: rgba(4, 217, 139, 0.1); border-color: rgba(4, 217, 139, 0.3); flex: 1; min-width: 150px;">
                            <h4 style="color: #04d98b;"><?php echo $published_playlists; ?>+</h4>
                            <p>Learning Playlists</p>
                        </div>
                        <div class="featured-item" style="background: rgba(3, 127, 140, 0.1); border-color: rgba(3, 127, 140, 0.3); flex: 1; min-width: 150px;">
                            <h4 style="color: #037f8c;">200+</h4>
                            <p>Total Videos</p>
                        </div>
                    </div>
                </div>
                
                <div class="hero-featured">
                    <h3>Featured Playlist</h3>
                    <?php
                    $featured_playlist = new WP_Query(array(
                        'post_type' => 'playlist',
                        'posts_per_page' => 1,
                        'meta_query' => array(
                            array(
                                'key' => '_featured',
                                'value' => '1',
                                'compare' => '='
                            )
                        )
                    ));
                    
                    if ($featured_playlist->have_posts()) :
                        while ($featured_playlist->have_posts()) : $featured_playlist->the_post(); ?>
                            <div class="featured-content">
                                <div class="featured-item">
                                    <h4><?php the_title(); ?></h4>
                                    <p><?php echo wp_trim_words(get_the_excerpt(), 15, '...'); ?></p>
                                    <a href="<?php the_permalink(); ?>" class="btn-outline" style="margin-top: 1rem; display: inline-block;">
                                        Start Learning
                                    </a>
                                </div>
                            </div>
                        <?php endwhile;
                        wp_reset_postdata();
                    else : ?>
                        <div class="featured-content">
                            <div class="featured-item">
                                <h4>WordPress Fundamentals</h4>
                                <p>Complete beginner's guide to WordPress development</p>
                            </div>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Playlists Grid Section -->
    <section class="content-section">
        <div class="container">
            <!-- Filter Tabs -->
            <div style="display: flex; justify-content: center; margin-bottom: 3rem; flex-wrap: wrap; gap: 1rem;">
                <button class="filter-btn active" data-filter="all">All Playlists</button>
                <button class="filter-btn" data-filter="beginner">Beginner</button>
                <button class="filter-btn" data-filter="intermediate">Intermediate</button>
                <button class="filter-btn" data-filter="advanced">Advanced</button>
            </div>
            
            <!-- Playlists Grid -->
            <div class="content-grid" id="playlist-grid">
                <?php
                $playlists = new WP_Query(array(
                    'post_type' => 'playlist',
                    'posts_per_page' => 12,
                    'post_status' => 'publish'
                ));
                
                if ($playlists->have_posts()) :
                    while ($playlists->have_posts()) : $playlists->the_post();
                        get_template_part('template-parts/playlist-card');
                    endwhile;
                    wp_reset_postdata();
                else : ?>
                    <div class="empty-state">
                        <p>No playlists found. Check back soon for new learning content!</p>
                    </div>
                <?php endif; ?>
            </div>
            
            <!-- Load More Button -->
            <?php if ($playlists->found_posts > 12) : ?>
                <div class="load-more">
                    <button class="load-more-btn" data-post-type="playlist" data-page="1">
                        Load More Playlists
                    </button>
                </div>
            <?php endif; ?>
        </div>
    </section>
</main>

<style>
.filter-btn {
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid #334155;
    color: #94a3b8;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
}

.filter-btn:hover,
.filter-btn.active {
    background: var(--wp-teal);
    color: #ffffff;
    border-color: var(--wp-teal);
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const playlistCards = document.querySelectorAll('.playlist-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active filter
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter playlists (simplified - would normally use AJAX)
            playlistCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    // This would typically check post meta or taxonomies
                    card.style.display = 'block';
                }
            });
        });
    });
});
</script>

<?php get_footer(); ?>
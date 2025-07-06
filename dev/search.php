<?php
/**
 * The template for displaying search results pages
 * 
 * @package WPSimplified
 */

get_header(); ?>

<main id="main" class="site-main">
    
    <!-- Search Results Hero Section -->
    <section class="hero-section" style="min-height: 60vh; padding: 8rem 0 4rem;">
        <div class="hero-background"></div>
        <div class="container">
            <div class="hero-content">
                <div class="hero-badge">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="M21 21l-4.35-4.35"/>
                    </svg>
                    <?php _e('Search Results', 'wpsimplified'); ?>
                </div>
                
                <h1 class="hero-title" style="font-size: clamp(2.5rem, 6vw, 4rem);">
                    <?php _e('Search Results for', 'wpsimplified'); ?>
                    <span class="hero-gradient-text">"<?php echo get_search_query(); ?>"</span>
                </h1>
                
                <p class="hero-subtitle">
                    <?php
                    global $wp_query;
                    $total_results = $wp_query->found_posts;
                    if ($total_results == 1) {
                        _e('Found 1 result matching your search query.', 'wpsimplified');
                    } else {
                        printf(__('Found %d results matching your search query.', 'wpsimplified'), $total_results);
                    }
                    ?>
                </p>
                
                <!-- Search Form -->
                <div style="max-width: 32rem; margin: 2rem auto 0;">
                    <form role="search" method="get" action="<?php echo esc_url(home_url('/')); ?>" 
                          style="display: flex; gap: 0.5rem;">
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
        </div>
    </section>

    <!-- Search Results Content -->
    <section class="section">
        <div class="container">
            <?php if (have_posts()) : ?>
                <div style="display: flex; flex-direction: column; gap: 2rem;">
                    <?php while (have_posts()) : the_post(); ?>
                        <article class="card" style="padding: 2rem; display: flex; gap: 2rem; align-items: start;">
                            <?php if (has_post_thumbnail()) : ?>
                                <div style="flex-shrink: 0;">
                                    <?php the_post_thumbnail('wpsimplified-small', array('style' => 'width: 120px; height: 120px; object-fit: cover; border-radius: 0.75rem;')); ?>
                                </div>
                            <?php endif; ?>
                            
                            <div style="flex: 1;">
                                <div style="margin-bottom: 1rem;">
                                    <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem;">
                                        <?php
                                        $categories = get_the_category();
                                        if ($categories) {
                                            foreach (array_slice($categories, 0, 2) as $category) {
                                                echo '<span style="display: inline-block; background: rgba(4, 217, 139, 0.1); color: var(--wp-primary); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600;">' . esc_html($category->name) . '</span>';
                                            }
                                        }
                                        ?>
                                    </div>
                                    
                                    <h3 style="margin-bottom: 0.5rem; font-size: 1.5rem;">
                                        <a href="<?php the_permalink(); ?>" style="color: var(--wp-foreground); text-decoration: none;">
                                            <?php the_title(); ?>
                                        </a>
                                    </h3>
                                    
                                    <div style="color: var(--wp-muted-foreground); font-size: 0.875rem; margin-bottom: 1rem;">
                                        <?php echo get_the_date(); ?> • <?php _e('By', 'wpsimplified'); ?> <?php the_author(); ?>
                                    </div>
                                </div>
                                
                                <div style="color: var(--wp-muted-foreground); margin-bottom: 1.5rem; line-height: 1.6;">
                                    <?php the_excerpt(); ?>
                                </div>
                                
                                <a href="<?php the_permalink(); ?>" class="btn btn-outline">
                                    <?php _e('Read Full Article', 'wpsimplified'); ?>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <polyline points="9,18 15,12 9,6"/>
                                    </svg>
                                </a>
                            </div>
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
            <?php else : ?>
                <div style="text-align: center; padding: 3rem;">
                    <div style="margin-bottom: 2rem;">
                        <div style="width: 6rem; height: 6rem; margin: 0 auto; background: rgba(4, 217, 139, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--wp-primary)" stroke-width="1.5">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        </div>
                    </div>
                    
                    <h3 style="margin-bottom: 1rem;"><?php _e('No results found', 'wpsimplified'); ?></h3>
                    <p style="color: var(--wp-muted-foreground); margin-bottom: 2rem;">
                        <?php printf(__('Sorry, no results were found for "%s". Try different keywords or browse our popular content below.', 'wpsimplified'), get_search_query()); ?>
                    </p>
                    
                    <!-- Popular Content Suggestions -->
                    <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                        <a href="<?php echo esc_url(home_url('/videos')); ?>" class="btn btn-outline">
                            <?php _e('Browse Videos', 'wpsimplified'); ?>
                        </a>
                        <a href="<?php echo esc_url(home_url('/playlists')); ?>" class="btn btn-outline">
                            <?php _e('View Playlists', 'wpsimplified'); ?>
                        </a>
                        <a href="<?php echo esc_url(home_url('/shorts')); ?>" class="btn btn-outline">
                            <?php _e('Watch Shorts', 'wpsimplified'); ?>
                        </a>
                    </div>
                </div>
            <?php endif; ?>
        </div>
    </section>

</main>

<style>
@media (max-width: 768px) {
    .card {
        flex-direction: column !important;
        text-align: center;
    }
    
    .card > div:first-child {
        flex-shrink: 1 !important;
    }
}
</style>

<?php get_footer(); ?>
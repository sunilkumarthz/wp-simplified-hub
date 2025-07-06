<?php
/**
 * The template for displaying archive pages
 * 
 * @package WPSimplified
 */

get_header(); ?>

<main id="main" class="site-main">
    
    <!-- Archive Hero Section -->
    <section class="hero-section" style="min-height: 60vh; padding: 8rem 0 4rem;">
        <div class="hero-background"></div>
        <div class="container">
            <div class="hero-content">
                <div class="hero-badge">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14,2 14,8 20,8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10,9 9,9 8,9"/>
                    </svg>
                    <?php _e('WordPress Knowledge Hub', 'wpsimplified'); ?>
                </div>
                
                <h1 class="hero-title" style="font-size: clamp(2.5rem, 6vw, 4rem);">
                    <?php
                    if (is_category()) {
                        single_cat_title();
                    } elseif (is_tag()) {
                        single_tag_title();
                    } elseif (is_author()) {
                        printf(__('Posts by %s', 'wpsimplified'), '<span class="hero-gradient-text">' . get_the_author() . '</span>');
                    } elseif (is_date()) {
                        if (is_year()) {
                            printf(__('Posts from %s', 'wpsimplified'), '<span class="hero-gradient-text">' . get_the_date('Y') . '</span>');
                        } elseif (is_month()) {
                            printf(__('Posts from %s', 'wpsimplified'), '<span class="hero-gradient-text">' . get_the_date('F Y') . '</span>');
                        }
                    } else {
                        _e('WordPress', 'wpsimplified');
                        echo ' <span class="hero-gradient-text">' . __('Archives', 'wpsimplified') . '</span>';
                    }
                    ?>
                </h1>
                
                <?php if (is_category() && category_description()) : ?>
                    <p class="hero-subtitle">
                        <?php echo category_description(); ?>
                    </p>
                <?php elseif (is_tag() && tag_description()) : ?>
                    <p class="hero-subtitle">
                        <?php echo tag_description(); ?>
                    </p>
                <?php else : ?>
                    <p class="hero-subtitle">
                        <?php _e('Explore our comprehensive collection of WordPress tutorials, guides, and insights organized by topic.', 'wpsimplified'); ?>
                    </p>
                <?php endif; ?>
            </div>
        </div>
    </section>

    <!-- Archive Content -->
    <section class="section">
        <div class="container">
            <?php if (have_posts()) : ?>
                <div class="grid grid-cols-2">
                    <?php while (have_posts()) : the_post(); ?>
                        <article class="card" style="padding: 2rem;">
                            <?php if (has_post_thumbnail()) : ?>
                                <div style="margin-bottom: 1.5rem;">
                                    <?php the_post_thumbnail('medium', array('style' => 'width: 100%; height: 200px; object-fit: cover; border-radius: 0.75rem;')); ?>
                                </div>
                            <?php endif; ?>
                            
                            <div style="margin-bottom: 1rem;">
                                <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
                                    <?php
                                    $categories = get_categories();
                                    if ($categories) {
                                        foreach (array_slice($categories, 0, 2) as $category) {
                                            echo '<span style="display: inline-block; background: rgba(4, 217, 139, 0.1); color: var(--wp-primary); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600;">' . esc_html($category->name) . '</span>';
                                        }
                                    }
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
                                <span><?php _e('By', 'wpsimplified'); ?> <?php the_author(); ?></span>
                            </div>
                            
                            <a href="<?php the_permalink(); ?>" class="btn btn-outline" style="width: 100%; justify-content: center;">
                                <?php _e('Read Article', 'wpsimplified'); ?>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="9,18 15,12 9,6"/>
                                </svg>
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
            <?php else : ?>
                <div style="text-align: center; padding: 3rem;">
                    <h3><?php _e('No posts found', 'wpsimplified'); ?></h3>
                    <p style="color: var(--wp-muted-foreground);">
                        <?php _e('There are no posts in this archive yet.', 'wpsimplified'); ?>
                    </p>
                </div>
            <?php endif; ?>
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
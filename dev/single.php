<?php
/**
 * Single post template
 * 
 * @package WPSimplified
 */

get_header(); ?>

<main id="main" class="site-main">
    <?php while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <div class="container" style="max-width: 800px; padding: 8rem 0 4rem;">
                
                <header class="entry-header" style="text-align: center; margin-bottom: 3rem;">
                    <h1 class="entry-title" style="font-size: clamp(2rem, 5vw, 3rem); margin-bottom: 1rem;">
                        <?php the_title(); ?>
                    </h1>
                    
                    <div style="color: var(--wp-muted-foreground); margin-bottom: 2rem;">
                        <span><?php echo get_the_date(); ?></span> • 
                        <span><?php _e('By', 'wpsimplified'); ?> <?php the_author(); ?></span>
                    </div>
                    
                    <?php if (has_post_thumbnail()) : ?>
                        <div style="margin-bottom: 2rem;">
                            <?php the_post_thumbnail('large', array('style' => 'width: 100%; height: 400px; object-fit: cover; border-radius: 1rem;')); ?>
                        </div>
                    <?php endif; ?>
                </header>

                <div class="entry-content" style="color: var(--wp-foreground); line-height: 1.8; font-size: 1.125rem;">
                    <?php the_content(); ?>
                </div>

                <footer class="entry-footer" style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--wp-border);">
                    <?php if (has_tag()) : ?>
                        <div style="margin-bottom: 1rem;">
                            <strong><?php _e('Tags:', 'wpsimplified'); ?></strong>
                            <?php the_tags('', ', ', ''); ?>
                        </div>
                    <?php endif; ?>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                        <?php previous_post_link('%link', '&larr; %title'); ?>
                        <?php next_post_link('%link', '%title &rarr;'); ?>
                    </div>
                </footer>
            </div>
        </article>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>
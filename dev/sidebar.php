<?php
/**
 * The sidebar containing the main widget area
 * 
 * @package WPSimplified
 */

if (!is_active_sidebar('sidebar-1')) {
    return;
}
?>

<aside id="secondary" class="widget-area sidebar" style="background: rgba(30, 41, 59, 0.8); backdrop-filter: blur(10px); border: 1px solid rgba(4, 217, 139, 0.2); border-radius: 1rem; padding: 2rem; position: sticky; top: 2rem;">
    
    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid var(--wp-border);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--wp-primary)" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <rect x="7" y="7" width="3" height="3"/>
            <rect x="14" y="7" width="3" height="3"/>
            <rect x="7" y="14" width="10" height="3"/>
        </svg>
        <h2 style="margin: 0; font-size: 1.25rem;"><?php _e('WordPress Resources', 'wpsimplified'); ?></h2>
    </div>
    
    <?php dynamic_sidebar('sidebar-1'); ?>
    
    <!-- Newsletter Signup Widget -->
    <div class="widget newsletter-widget" style="background: rgba(4, 217, 139, 0.1); border: 1px solid rgba(4, 217, 139, 0.3); border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 2rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--wp-primary)" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
            </svg>
            <h3 style="margin: 0; font-size: 1.125rem;"><?php _e('Stay Updated', 'wpsimplified'); ?></h3>
        </div>
        <p style="color: var(--wp-muted-foreground); margin-bottom: 1rem; font-size: 0.875rem;">
            <?php _e('Get the latest WordPress tips and tutorials delivered to your inbox.', 'wpsimplified'); ?>
        </p>
        <form style="display: flex; flex-direction: column; gap: 0.75rem;">
            <input type="email" placeholder="<?php _e('Your email address', 'wpsimplified'); ?>" 
                   style="padding: 0.75rem; border: 1px solid var(--wp-border); border-radius: 0.5rem; background: var(--wp-background); color: var(--wp-foreground);">
            <button type="submit" class="btn btn-primary" style="justify-content: center;">
                <?php _e('Subscribe', 'wpsimplified'); ?>
            </button>
        </form>
    </div>
    
    <!-- Popular Posts Widget -->
    <div class="widget popular-posts-widget" style="margin-bottom: 2rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--wp-primary)" stroke-width="2">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
            </svg>
            <h3 style="margin: 0; font-size: 1.125rem;"><?php _e('Popular Posts', 'wpsimplified'); ?></h3>
        </div>
        
        <?php
        $popular_posts = new WP_Query(array(
            'posts_per_page' => 5,
            'meta_key' => 'post_views_count',
            'orderby' => 'meta_value_num',
            'order' => 'DESC'
        ));
        
        if ($popular_posts->have_posts()) :
            while ($popular_posts->have_posts()) : $popular_posts->the_post();
        ?>
            <article style="display: flex; gap: 1rem; margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--wp-border);">
                <?php if (has_post_thumbnail()) : ?>
                    <div style="flex-shrink: 0;">
                        <?php the_post_thumbnail('thumbnail', array('style' => 'width: 60px; height: 60px; object-fit: cover; border-radius: 0.5rem;')); ?>
                    </div>
                <?php endif; ?>
                <div style="flex: 1;">
                    <h4 style="margin: 0 0 0.5rem 0; font-size: 0.875rem; line-height: 1.4;">
                        <a href="<?php the_permalink(); ?>" style="color: var(--wp-foreground); text-decoration: none;">
                            <?php the_title(); ?>
                        </a>
                    </h4>
                    <p style="margin: 0; color: var(--wp-muted-foreground); font-size: 0.75rem;">
                        <?php echo get_the_date(); ?>
                    </p>
                </div>
            </article>
        <?php
            endwhile;
            wp_reset_postdata();
        else :
        ?>
            <p style="color: var(--wp-muted-foreground); font-size: 0.875rem;">
                <?php _e('No popular posts found.', 'wpsimplified'); ?>
            </p>
        <?php endif; ?>
    </div>
    
    <!-- Quick Links Widget -->
    <div class="widget quick-links-widget">
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--wp-primary)" stroke-width="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
            <h3 style="margin: 0; font-size: 1.125rem;"><?php _e('Quick Links', 'wpsimplified'); ?></h3>
        </div>
        
        <ul style="list-style: none; padding: 0; margin: 0;">
            <li style="margin-bottom: 0.75rem;">
                <a href="<?php echo esc_url(home_url('/videos')); ?>" 
                   style="display: flex; align-items: center; gap: 0.5rem; color: var(--wp-muted-foreground); text-decoration: none; padding: 0.5rem; border-radius: 0.5rem; transition: all 0.3s ease;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="5,3 19,12 5,21"/>
                    </svg>
                    <?php _e('Video Tutorials', 'wpsimplified'); ?>
                </a>
            </li>
            <li style="margin-bottom: 0.75rem;">
                <a href="<?php echo esc_url(home_url('/playlists')); ?>" 
                   style="display: flex; align-items: center; gap: 0.5rem; color: var(--wp-muted-foreground); text-decoration: none; padding: 0.5rem; border-radius: 0.5rem; transition: all 0.3s ease;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="9" y1="9" x2="9" y2="15"/>
                        <line x1="15" y1="9" x2="15" y2="15"/>
                    </svg>
                    <?php _e('Learning Playlists', 'wpsimplified'); ?>
                </a>
            </li>
            <li style="margin-bottom: 0.75rem;">
                <a href="<?php echo esc_url(home_url('/shorts')); ?>" 
                   style="display: flex; align-items: center; gap: 0.5rem; color: var(--wp-muted-foreground); text-decoration: none; padding: 0.5rem; border-radius: 0.5rem; transition: all 0.3s ease;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                    <?php _e('Quick Tips', 'wpsimplified'); ?>
                </a>
            </li>
            <li style="margin-bottom: 0.75rem;">
                <a href="<?php echo esc_url(home_url('/podcasts')); ?>" 
                   style="display: flex; align-items: center; gap: 0.5rem; color: var(--wp-muted-foreground); text-decoration: none; padding: 0.5rem; border-radius: 0.5rem; transition: all 0.3s ease;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                        <line x1="12" y1="19" x2="12" y2="22"/>
                    </svg>
                    <?php _e('Podcasts', 'wpsimplified'); ?>
                </a>
            </li>
            <li>
                <a href="<?php echo esc_url(home_url('/contact')); ?>" 
                   style="display: flex; align-items: center; gap: 0.5rem; color: var(--wp-muted-foreground); text-decoration: none; padding: 0.5rem; border-radius: 0.5rem; transition: all 0.3s ease;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <?php _e('Contact Us', 'wpsimplified'); ?>
                </a>
            </li>
        </ul>
    </div>
    
</aside>

<style>
.sidebar a:hover {
    background: rgba(4, 217, 139, 0.1);
    color: var(--wp-primary);
}

@media (max-width: 1024px) {
    .sidebar {
        position: static;
        margin-top: 2rem;
    }
}
</style>
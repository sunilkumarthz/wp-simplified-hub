<?php
/**
 * Template Name: Videos Page
 */

get_header(); ?>

<div class="min-h-screen bg-slate-900">
    <!-- Videos Hero Section -->
    <section class="hero-section">
        <div class="hero-background">
            <div class="hero-grid"></div>
            <div class="hero-orb hero-orb-1"></div>
            <div class="hero-orb hero-orb-2"></div>
        </div>
        
        <div class="container">
            <div class="hero-content">
                <div class="hero-text" style="text-align: center; max-width: 800px; margin: 0 auto;">
                    <h1 class="hero-title fade-in">
                        WordPress <span class="text-gradient">Video Tutorials</span>
                    </h1>
                    <p class="hero-description fade-in">
                        Master WordPress development with our comprehensive video library. From beginner basics to advanced techniques, find the perfect tutorial for your skill level.
                    </p>
                    
                    <!-- Search Form -->
                    <form class="search-form fade-in" method="get" data-post-type="video" style="margin-top: 2rem;">
                        <div class="search-wrapper" style="display: flex; max-width: 500px; margin: 0 auto; gap: 0.5rem;">
                            <input type="text" name="s" class="search-input" 
                                   placeholder="Search video tutorials..." 
                                   value="<?php echo get_search_query(); ?>"
                                   style="flex: 1; padding: 0.75rem 1rem; border: 1px solid #334155; border-radius: 0.5rem; background: rgba(30, 41, 59, 0.5); color: #f8fafc;">
                            <button type="submit" class="btn-primary">
                                <i data-lucide="search"></i>
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Videos Grid Section -->
    <section class="content-section">
        <div class="container">
            <div class="content-grid" id="videos-grid">
                <?php
                $videos = new WP_Query(array(
                    'post_type' => 'video',
                    'posts_per_page' => 12,
                    'post_status' => 'publish',
                    's' => get_search_query()
                ));
                
                if ($videos->have_posts()) :
                    while ($videos->have_posts()) : $videos->the_post();
                        get_template_part('template-parts/video-card');
                    endwhile;
                    wp_reset_postdata();
                else : ?>
                    <div class="empty-state">
                        <i data-lucide="video" style="width: 4rem; height: 4rem; color: #94a3b8; margin-bottom: 1rem;"></i>
                        <h3>No videos found</h3>
                        <p>No video tutorials found. Check back soon for new content!</p>
                    </div>
                <?php endif; ?>
            </div>
            
            <?php if ($videos->max_num_pages > 1) : ?>
                <div class="section-cta">
                    <button class="btn-primary" data-load-more data-post-type="video" data-page="1">
                        Load More Videos
                    </button>
                </div>
            <?php endif; ?>
        </div>
    </section>
</div>

<?php get_footer(); ?>
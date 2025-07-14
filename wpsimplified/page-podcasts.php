<?php
/**
 * Template Name: Podcasts Page
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
                    <h1 class="hero-title">WordPress <span class="text-gradient">Podcasts</span></h1>
                    <p class="hero-description">
                        Dive deep into WordPress development with expert interviews, industry insights, 
                        and comprehensive discussions on the latest trends and techniques.
                    </p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Podcasts Grid Section -->
    <section class="content-section">
        <div class="container">
            <!-- Podcasts Grid -->
            <div class="content-grid" id="podcast-grid">
                <?php
                $podcasts = new WP_Query(array(
                    'post_type' => 'podcast',
                    'posts_per_page' => 12,
                    'post_status' => 'publish'
                ));
                
                if ($podcasts->have_posts()) :
                    while ($podcasts->have_posts()) : $podcasts->the_post();
                        get_template_part('template-parts/podcast-card');
                    endwhile;
                    wp_reset_postdata();
                else : ?>
                    <div class="empty-state">
                        <p>No podcasts found. Check back soon for new episodes!</p>
                    </div>
                <?php endif; ?>
            </div>
            
            <!-- Load More Button -->
            <?php if ($podcasts->found_posts > 12) : ?>
                <div class="load-more">
                    <button class="load-more-btn" data-post-type="podcast" data-page="1">
                        Load More Podcasts
                    </button>
                </div>
            <?php endif; ?>
        </div>
    </section>
</main>

<?php get_footer(); ?>
<?php
/**
 * Template Name: Videos Page
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
                    <h1 class="hero-title">WordPress <span class="text-gradient">Video Tutorials</span></h1>
                    <p class="hero-description">
                        Comprehensive WordPress video tutorials covering everything from basics to advanced development. 
                        Learn WordPress with step-by-step video guides.
                    </p>
                    
                    <!-- Search Form -->
                    <form class="search-form" data-post-type="video">
                        <div class="search-wrapper">
                            <input type="text" class="search-input" placeholder="Search videos..." />
                            <button type="submit" class="search-button">
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
            <!-- Search Results Info -->
            <div id="search-info" style="display: none;">
                <p>Search results for "<span id="search-term"></span>"</p>
                <button class="clear-search">
                    <i data-lucide="x"></i>
                    Clear Search
                </button>
            </div>
            
            <!-- Videos Grid -->
            <div class="content-grid" id="video-grid">
                <?php
                $videos = new WP_Query(array(
                    'post_type' => 'video',
                    'posts_per_page' => 12,
                    'post_status' => 'publish'
                ));
                
                if ($videos->have_posts()) :
                    while ($videos->have_posts()) : $videos->the_post();
                        get_template_part('template-parts/video-card');
                    endwhile;
                    wp_reset_postdata();
                else : ?>
                    <div class="empty-state">
                        <p>No videos found. Check back soon for new content!</p>
                    </div>
                <?php endif; ?>
            </div>
            
            <!-- Load More Button -->
            <?php if ($videos->found_posts > 12) : ?>
                <div class="load-more">
                    <button class="load-more-btn" data-post-type="video" data-page="1">
                        Load More Videos
                    </button>
                </div>
            <?php endif; ?>
        </div>
    </section>
</main>

<?php get_footer(); ?>
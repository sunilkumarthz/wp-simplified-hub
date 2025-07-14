<?php get_header(); ?>

<main>
    <section class="hero-section">
        <div class="hero-background">
            <div class="hero-grid"></div>
            <div class="hero-orb hero-orb-1"></div>
            <div class="hero-orb hero-orb-2"></div>
        </div>
        
        <div class="container">
            <div class="hero-content" style="text-align: center; max-width: 600px; margin: 0 auto;">
                <div class="hero-text">
                    <h1 class="hero-title" style="font-size: 4rem; margin-bottom: 1rem;">
                        4<span class="text-gradient">0</span>4
                    </h1>
                    <h2 style="font-size: 1.5rem; margin-bottom: 1.5rem;">
                        Oops! Page not found
                    </h2>
                    <p class="hero-description" style="margin-bottom: 2rem;">
                        The page you're looking for doesn't exist or has been moved. 
                        Let's get you back on track with some WordPress learning!
                    </p>
                    
                    <!-- Search Form -->
                    <form class="search-form" data-post-type="video" style="margin-bottom: 2rem;">
                        <div class="search-wrapper">
                            <input type="text" class="search-input" placeholder="Search for tutorials..." />
                            <button type="submit" class="search-button">
                                <i data-lucide="search"></i>
                                Search
                            </button>
                        </div>
                    </form>
                    
                    <div class="hero-buttons">
                        <a href="<?php echo home_url('/'); ?>" class="btn-primary">
                            <i data-lucide="home"></i>
                            Go Home
                        </a>
                        <button onclick="history.back()" class="btn-outline">
                            <i data-lucide="arrow-left"></i>
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Suggested Content -->
    <section class="content-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Popular <span class="text-gradient">Tutorials</span></h2>
                <p class="section-description">Check out these popular WordPress tutorials while you're here</p>
            </div>
            
            <div class="content-grid">
                <?php
                $popular_videos = new WP_Query(array(
                    'post_type' => 'video',
                    'posts_per_page' => 6,
                    'post_status' => 'publish',
                    'meta_key' => '_views',
                    'orderby' => 'meta_value_num',
                    'order' => 'DESC'
                ));
                
                if ($popular_videos->have_posts()) :
                    while ($popular_videos->have_posts()) : $popular_videos->the_post();
                        get_template_part('template-parts/video-card');
                    endwhile;
                    wp_reset_postdata();
                endif; ?>
            </div>
        </div>
    </section>
</main>

<script>
// Enhanced 404 page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Auto-focus search input
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.focus();
    }
    
    // Log 404 error for analytics
    console.error('404 Error: User attempted to access non-existent route:', window.location.pathname);
    
    // Optional: Send 404 tracking to analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_not_found', {
            'page_location': window.location.href,
            'page_title': '404 - Page Not Found'
        });
    }
});
</script>

<?php get_footer(); ?>
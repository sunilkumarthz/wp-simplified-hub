<?php
/**
 * Front Page Template
 * This template is used for the static front page when set in WordPress settings
 */

get_header(); ?>

<div class="min-h-screen bg-slate-900">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <?php get_template_part('template-parts/hero-section'); ?>
    </section>

    <!-- Latest Videos Section -->
    <section id="latest-videos" class="py-12 sm:py-16 lg:py-20">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">
                    Latest <span class="text-gradient">Videos</span>
                </h2>
                <p class="section-description">
                    Stay updated with our newest WordPress tutorials and guides
                </p>
            </div>
            
            <div class="content-grid" id="latest-videos-grid">
                <?php
                $videos = new WP_Query(array(
                    'post_type' => 'video',
                    'posts_per_page' => 6,
                    'post_status' => 'publish'
                ));
                
                if ($videos->have_posts()) :
                    while ($videos->have_posts()) : $videos->the_post();
                        get_template_part('template-parts/video-card');
                    endwhile;
                    wp_reset_postdata();
                else : ?>
                    <div class="empty-state">
                        <div class="loading-spinner"></div>
                        <p>Loading videos...</p>
                    </div>
                <?php endif; ?>
            </div>
            
            <div class="section-cta">
                <a href="<?php echo home_url('/videos'); ?>" class="btn-primary">
                    View All Videos
                </a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="bg-slate-800/50 relative py-12 sm:py-16 lg:py-20">
        <div class="container">
            <div class="about-content">
                <h2 class="section-title">
                    About <span class="text-gradient">WPSimplified</span>
                </h2>
                <p class="about-description">
                    Welcome to WPSimplified, your ultimate destination for mastering WordPress development. 
                    Created by Sunil Kumar Sharma, this platform is dedicated to breaking down complex 
                    WordPress concepts into simple, actionable tutorials that developers of all levels can understand.
                </p>
                <div class="about-features">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i data-lucide="play"></i>
                        </div>
                        <h3>Video Tutorials</h3>
                        <p>Step-by-step video guides covering everything from basics to advanced topics</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i data-lucide="mic"></i>
                        </div>
                        <h3>Expert Podcasts</h3>
                        <p>In-depth discussions with industry experts and thought leaders</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i data-lucide="users"></i>
                        </div>
                        <h3>Community</h3>
                        <p>Join thousands of developers learning and growing together</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Latest Podcasts Section -->
    <section id="latest-podcasts" class="py-12 sm:py-16 lg:py-20">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">
                    Latest <span class="text-gradient">Podcasts</span>
                </h2>
                <p class="section-description">
                    Listen to expert insights and industry discussions
                </p>
            </div>
            
            <div class="content-grid" id="latest-podcasts-grid">
                <?php
                $podcasts = new WP_Query(array(
                    'post_type' => 'podcast',
                    'posts_per_page' => 6,
                    'post_status' => 'publish'
                ));
                
                if ($podcasts->have_posts()) :
                    while ($podcasts->have_posts()) : $podcasts->the_post();
                        get_template_part('template-parts/podcast-card');
                    endwhile;
                    wp_reset_postdata();
                endif; ?>
            </div>
            
            <div class="section-cta">
                <a href="<?php echo home_url('/podcasts'); ?>" class="btn-primary">
                    View All Podcasts
                </a>
            </div>
        </div>
    </section>

    <!-- Featured Playlists Section -->
    <section id="playlists" class="bg-slate-800/50 relative py-12 sm:py-16 lg:py-20">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">
                    Featured <span class="text-gradient">Playlists</span>
                </h2>
                <p class="section-description">
                    Curated learning paths for structured WordPress mastery
                </p>
            </div>
            
            <div class="content-grid" id="playlists-grid">
                <?php
                $playlists = new WP_Query(array(
                    'post_type' => 'playlist',
                    'posts_per_page' => 6,
                    'post_status' => 'publish'
                ));
                
                if ($playlists->have_posts()) :
                    while ($playlists->have_posts()) : $playlists->the_post();
                        get_template_part('template-parts/playlist-card');
                    endwhile;
                    wp_reset_postdata();
                endif; ?>
            </div>
            
            <div class="section-cta">
                <a href="<?php echo home_url('/playlists'); ?>" class="btn-primary">
                    View All Playlists
                </a>
            </div>
        </div>
    </section>

    <!-- Podcast Section -->
    <section id="podcasts" class="py-12 sm:py-16 lg:py-20">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">
                    WordPress <span class="text-gradient">Podcast Series</span>
                </h2>
                <p class="section-description">
                    Deep dive into WordPress with expert conversations and insights
                </p>
            </div>
            
            <div class="content-grid">
                <?php
                $podcast_series = new WP_Query(array(
                    'post_type' => 'podcast',
                    'posts_per_page' => 3,
                    'post_status' => 'publish',
                    'meta_query' => array(
                        array(
                            'key' => '_featured',
                            'value' => '1',
                            'compare' => '='
                        )
                    )
                ));
                
                if ($podcast_series->have_posts()) :
                    while ($podcast_series->have_posts()) : $podcast_series->the_post();
                        get_template_part('template-parts/podcast-card');
                    endwhile;
                    wp_reset_postdata();
                endif; ?>
            </div>
        </div>
    </section>

    <!-- Sponsors Section -->
    <section class="bg-slate-800/50 py-12 sm:py-16 lg:py-20">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">
                    Our <span class="text-gradient">Sponsors</span>
                </h2>
                <p class="section-description">
                    Supporting the WordPress community through partnership
                </p>
            </div>
            
            <div class="sponsors-grid">
                <div class="sponsor-card">
                    <div class="sponsor-logo">
                        <i data-lucide="wordpress" style="width: 2rem; height: 2rem; color: #04d98b;"></i>
                    </div>
                    <h3>WordPress.org</h3>
                    <p>The foundation of our community</p>
                </div>
                <div class="sponsor-card">
                    <div class="sponsor-logo">
                        <i data-lucide="shopping-cart" style="width: 2rem; height: 2rem; color: #04d98b;"></i>
                    </div>
                    <h3>WooCommerce</h3>
                    <p>Powering online stores</p>
                </div>
                <div class="sponsor-card">
                    <div class="sponsor-logo">
                        <i data-lucide="server" style="width: 2rem; height: 2rem; color: #04d98b;"></i>
                    </div>
                    <h3>WP Engine</h3>
                    <p>Premium hosting solutions</p>
                </div>
            </div>
            
            <div class="section-cta">
                <a href="<?php echo home_url('/sponsors'); ?>" class="btn-outline">
                    Become a Sponsor
                </a>
            </div>
        </div>
    </section>

    <!-- Community Involvement Section -->
    <section id="community-involvement" class="py-12 sm:py-16 lg:py-20">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">
                    Community <span class="text-gradient">Involvement</span>
                </h2>
                <p class="section-description">
                    Join our vibrant WordPress community and connect with fellow developers
                </p>
            </div>
            
            <div class="community-content">
                <div class="community-stats">
                    <div class="stat-item">
                        <h3>15K+</h3>
                        <p>Community Members</p>
                    </div>
                    <div class="stat-item">
                        <h3>500+</h3>
                        <p>Tutorials</p>
                    </div>
                    <div class="stat-item">
                        <h3>24/7</h3>
                        <p>Support</p>
                    </div>
                </div>
                
                <div class="community-actions">
                    <a href="#" class="btn-primary">Join Discord</a>
                    <a href="#" class="btn-outline">Subscribe to Newsletter</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Badges Section -->
    <section id="badges" class="bg-slate-800/50 relative py-12 sm:py-16 lg:py-20">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">
                    Achievements & <span class="text-gradient">Recognition</span>
                </h2>
                <p class="section-description">
                    Celebrating milestones in the WordPress community
                </p>
            </div>
            
            <div class="badges-grid">
                <div class="badge-item">
                    <div class="badge-icon">
                        <i data-lucide="award"></i>
                    </div>
                    <h3>WordPress Expert</h3>
                    <p>Certified WordPress developer</p>
                </div>
                <div class="badge-item">
                    <div class="badge-icon">
                        <i data-lucide="users"></i>
                    </div>
                    <h3>Community Leader</h3>
                    <p>Active in WordPress community</p>
                </div>
                <div class="badge-item">
                    <div class="badge-icon">
                        <i data-lucide="star"></i>
                    </div>
                    <h3>Top Contributor</h3>
                    <p>Contributing to WordPress core</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Social Section -->
    <section id="social" class="py-12 sm:py-16 lg:py-20">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">
                    Follow on <span class="text-gradient">Social Media</span>
                </h2>
                <p class="section-description">
                    Stay connected and get the latest updates
                </p>
            </div>
            
            <div class="social-links">
                <a href="#" class="social-link youtube">
                    <i data-lucide="youtube"></i>
                    <span>YouTube</span>
                </a>
                <a href="#" class="social-link twitter">
                    <i data-lucide="twitter"></i>
                    <span>Twitter</span>
                </a>
                <a href="#" class="social-link instagram">
                    <i data-lucide="instagram"></i>
                    <span>Instagram</span>
                </a>
                <a href="#" class="social-link linkedin">
                    <i data-lucide="linkedin"></i>
                    <span>LinkedIn</span>
                </a>
            </div>
        </div>
    </section>

    <!-- Latest Shorts Section -->
    <section id="latest-shorts" class="bg-slate-800/50 relative py-12 sm:py-16 lg:py-20">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">
                    Latest <span class="text-gradient">Shorts</span>
                </h2>
                <p class="section-description">
                    Quick tips and tricks for WordPress development
                </p>
            </div>
            
            <div class="shorts-grid" id="latest-shorts-grid">
                <?php
                $shorts = new WP_Query(array(
                    'post_type' => 'short',
                    'posts_per_page' => 12,
                    'post_status' => 'publish'
                ));
                
                if ($shorts->have_posts()) :
                    while ($shorts->have_posts()) : $shorts->the_post();
                        get_template_part('template-parts/short-card');
                    endwhile;
                    wp_reset_postdata();
                endif; ?>
            </div>
            
            <div class="section-cta">
                <a href="<?php echo home_url('/shorts'); ?>" class="btn-primary">
                    View All Shorts
                </a>
            </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>
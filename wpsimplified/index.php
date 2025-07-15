<?php get_header(); ?>

<div class="min-h-screen bg-slate-900">
    <!-- Hero Section -->
    <section class="hero-section">
        <?php get_template_part('template-parts/hero-section'); ?>
    </section>

    <!-- Latest Videos Section -->
    <section id="latest-videos" class="content-section">
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
    <section id="about" class="content-section alt-bg">
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
    <section id="latest-podcasts" class="content-section">
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
    <section id="playlists" class="content-section alt-bg">
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

    <!-- Latest Shorts Section -->
    <section id="latest-shorts" class="content-section">
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
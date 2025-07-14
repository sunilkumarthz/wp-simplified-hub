<?php get_header(); ?>

<div class="min-h-screen bg-slate-900">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <?php get_template_part('template-parts/hero-section'); ?>
    </section>

    <!-- Latest Videos Section -->
    <section id="latest-videos" class="py-12 sm:py-16 lg:py-20">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-baloo font-bold text-white mb-4">
                    Latest <span class="text-gradient">Videos</span>
                </h2>
                <p class="text-lg text-slate-300 font-roboto">
                    Stay updated with our newest WordPress tutorials and guides
                </p>
            </div>
            
            <div class="responsive-grid" id="latest-videos-grid">
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
                    <div class="col-span-full text-center py-12">
                        <div class="loading-spinner mx-auto mb-4"></div>
                        <p class="text-slate-400">Loading videos...</p>
                    </div>
                <?php endif; ?>
            </div>
            
            <div class="text-center mt-12">
                <a href="<?php echo home_url('/videos'); ?>" class="btn-solid-lg">
                    View All Videos
                </a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="bg-slate-800/50 relative py-12 sm:py-16 lg:py-20">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-baloo font-bold text-white mb-6">
                    About <span class="text-gradient">WPSimplified</span>
                </h2>
                <p class="text-lg text-slate-300 font-roboto leading-relaxed mb-8">
                    Welcome to WPSimplified, your ultimate destination for mastering WordPress development. 
                    Created by Sunil Kumar Sharma, this platform is dedicated to breaking down complex 
                    WordPress concepts into simple, actionable tutorials that developers of all levels can understand.
                </p>
                <div class="grid md:grid-cols-3 gap-8 mt-12">
                    <div class="creative-card p-6 text-center">
                        <div class="icon-btn mx-auto mb-4">
                            <i data-lucide="play" class="w-6 h-6"></i>
                        </div>
                        <h3 class="font-baloo font-bold text-white text-xl mb-2">Video Tutorials</h3>
                        <p class="text-slate-400 font-roboto">Step-by-step video guides covering everything from basics to advanced topics</p>
                    </div>
                    <div class="creative-card p-6 text-center">
                        <div class="icon-btn mx-auto mb-4">
                            <i data-lucide="mic" class="w-6 h-6"></i>
                        </div>
                        <h3 class="font-baloo font-bold text-white text-xl mb-2">Expert Podcasts</h3>
                        <p class="text-slate-400 font-roboto">In-depth discussions with industry experts and thought leaders</p>
                    </div>
                    <div class="creative-card p-6 text-center">
                        <div class="icon-btn mx-auto mb-4">
                            <i data-lucide="users" class="w-6 h-6"></i>
                        </div>
                        <h3 class="font-baloo font-bold text-white text-xl mb-2">Community</h3>
                        <p class="text-slate-400 font-roboto">Join thousands of developers learning and growing together</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Latest Podcasts Section -->
    <section id="latest-podcasts" class="py-12 sm:py-16 lg:py-20">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-baloo font-bold text-white mb-4">
                    Latest <span class="text-gradient">Podcasts</span>
                </h2>
                <p class="text-lg text-slate-300 font-roboto">
                    Listen to expert insights and industry discussions
                </p>
            </div>
            
            <div class="responsive-grid" id="latest-podcasts-grid">
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
            
            <div class="text-center mt-12">
                <a href="<?php echo home_url('/podcasts'); ?>" class="btn-solid-lg">
                    View All Podcasts
                </a>
            </div>
        </div>
    </section>

    <!-- Featured Playlists Section -->
    <section id="playlists" class="bg-slate-800/50 relative py-12 sm:py-16 lg:py-20">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-baloo font-bold text-white mb-4">
                    Featured <span class="text-gradient">Playlists</span>
                </h2>
                <p class="text-lg text-slate-300 font-roboto">
                    Curated learning paths for structured WordPress mastery
                </p>
            </div>
            
            <div class="responsive-grid">
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
            
            <div class="text-center mt-12">
                <a href="<?php echo home_url('/playlists'); ?>" class="btn-solid-lg">
                    View All Playlists
                </a>
            </div>
        </div>
    </section>

    <!-- Latest Shorts Section -->
    <section id="latest-shorts" class="py-12 sm:py-16 lg:py-20">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-baloo font-bold text-white mb-4">
                    Latest <span class="text-gradient">Shorts</span>
                </h2>
                <p class="text-lg text-slate-300 font-roboto">
                    Quick tips and tricks for WordPress development
                </p>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
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
            
            <div class="text-center mt-12">
                <a href="<?php echo home_url('/shorts'); ?>" class="btn-solid-lg">
                    View All Shorts
                </a>
            </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>
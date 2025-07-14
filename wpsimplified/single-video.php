<?php
/**
 * Single Video Template
 */

get_header(); ?>

<main>
    <?php while (have_posts()) : the_post(); 
        $youtube_url = get_post_meta(get_the_ID(), '_youtube_url', true);
        $duration = get_post_meta(get_the_ID(), '_duration', true);
        $views = get_post_meta(get_the_ID(), '_views', true);
        $video_thumbnail = get_the_post_thumbnail_url(get_the_ID(), 'large');
        
        // Extract YouTube video ID for embed
        $video_id = '';
        if ($youtube_url && preg_match('/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/', $youtube_url, $matches)) {
            $video_id = $matches[1];
        }
    ?>
    
    <article class="content-section">
        <div class="container" style="max-width: 1000px;">
            <!-- Video Player -->
            <div class="hero-featured" style="margin-bottom: 2rem;">
                <?php if ($video_id) : ?>
                    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 0.75rem;">
                        <iframe 
                            src="https://www.youtube.com/embed/<?php echo esc_attr($video_id); ?>?rel=0&modestbranding=1" 
                            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
                            allowfullscreen>
                        </iframe>
                    </div>
                <?php elseif ($video_thumbnail) : ?>
                    <img src="<?php echo esc_url($video_thumbnail); ?>" alt="<?php echo esc_attr(get_the_title()); ?>" style="width: 100%; border-radius: 0.75rem;">
                <?php endif; ?>
            </div>
            
            <!-- Video Info -->
            <div style="display: grid; gap: 2rem;">
                <div>
                    <h1 class="hero-title" style="font-size: 2rem; margin-bottom: 1rem;"><?php the_title(); ?></h1>
                    
                    <div class="card-meta" style="margin-bottom: 2rem; font-size: 1rem;">
                        <?php if ($views) : ?>
                            <span style="color: #04d98b;"><?php echo esc_html($views); ?> views</span>
                        <?php endif; ?>
                        <?php if ($duration) : ?>
                            <span><?php echo esc_html($duration); ?> duration</span>
                        <?php endif; ?>
                        <span><?php echo get_the_date('F j, Y'); ?></span>
                    </div>
                    
                    <!-- Subscribe CTA -->
                    <div style="background: rgba(30, 41, 59, 0.5); padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #334155; margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
                            <div>
                                <h3 style="color: #04d98b; margin-bottom: 0.5rem;">Enjoying this tutorial?</h3>
                                <p style="color: #94a3b8; margin: 0;">Subscribe for more WordPress development content!</p>
                            </div>
                            <a href="<?php echo get_theme_mod('youtube_url', 'https://www.youtube.com/@wpsimplifiedbysunil'); ?>" target="_blank" class="btn-primary">
                                🔔 Subscribe Now
                            </a>
                        </div>
                    </div>
                </div>
                
                <!-- Video Description -->
                <div class="hero-featured">
                    <h3>About this Video</h3>
                    <div style="color: #cbd5e1; line-height: 1.6;">
                        <?php the_content(); ?>
                    </div>
                    
                    <?php if ($youtube_url) : ?>
                        <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid #334155;">
                            <a href="<?php echo esc_url($youtube_url); ?>" target="_blank" class="btn-outline">
                                <i data-lucide="external-link"></i>
                                Watch on YouTube
                            </a>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </article>
    
    <!-- Related Videos -->
    <section class="content-section section-alt">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Related <span class="text-gradient">Videos</span></h2>
            </div>
            
            <div class="content-grid">
                <?php
                $related_videos = new WP_Query(array(
                    'post_type' => 'video',
                    'posts_per_page' => 6,
                    'post_status' => 'publish',
                    'post__not_in' => array(get_the_ID()),
                    'orderby' => 'rand'
                ));
                
                if ($related_videos->have_posts()) :
                    while ($related_videos->have_posts()) : $related_videos->the_post();
                        get_template_part('template-parts/video-card');
                    endwhile;
                    wp_reset_postdata();
                endif; ?>
            </div>
        </div>
    </section>
    
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>
<?php
/**
 * Video Card Template Part
 */

$youtube_url = get_post_meta(get_the_ID(), '_youtube_url', true);
$duration = get_post_meta(get_the_ID(), '_duration', true);
$views = get_post_meta(get_the_ID(), '_views', true);
$video_thumbnail = get_the_post_thumbnail_url(get_the_ID(), 'large');

// Get YouTube thumbnail if no featured image
if (!$video_thumbnail && $youtube_url) {
    $video_thumbnail = wpsimplified_get_youtube_thumbnail($youtube_url);
}

if (!$video_thumbnail) {
    $video_thumbnail = 'https://via.placeholder.com/640x360/1e293b/04d98b?text=Video+Thumbnail';
}
?>

<div class="video-card">
    <div class="card-image">
        <img 
            src="<?php echo esc_url($video_thumbnail); ?>" 
            alt="<?php echo esc_attr(get_the_title()); ?>"
            loading="lazy"
        >
        <div class="play-overlay">
            <div class="play-button">
                <i data-lucide="play"></i>
            </div>
        </div>
        <?php if ($duration) : ?>
            <div class="card-duration"><?php echo esc_html($duration); ?></div>
        <?php endif; ?>
        <div class="card-category">Tutorial</div>
    </div>
    
    <div class="card-content">
        <h3 class="card-title">
            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        </h3>
        <p class="card-description">
            <?php echo wp_trim_words(get_the_excerpt() ?: get_the_content(), 20, '...'); ?>
        </p>
        <div class="card-meta">
            <?php if ($views) : ?>
                <span><?php echo esc_html($views); ?> views</span>
            <?php endif; ?>
            <span><?php echo get_the_date('j M Y'); ?></span>
        </div>
    </div>
</div>
<?php
/**
 * Short Card Template Part
 */

$youtube_url = get_post_meta(get_the_ID(), '_youtube_url', true);
$duration = get_post_meta(get_the_ID(), '_duration', true) ?: '60s';
$views = get_post_meta(get_the_ID(), '_views', true);
$short_thumbnail = get_the_post_thumbnail_url(get_the_ID(), 'medium');

// Get YouTube thumbnail if no featured image
if (!$short_thumbnail && $youtube_url) {
    $short_thumbnail = wpsimplified_get_youtube_thumbnail($youtube_url);
}

if (!$short_thumbnail) {
    $short_thumbnail = 'https://via.placeholder.com/300x533/1e293b/04d98b?text=Short+Video';
}
?>

<div class="short-card fade-in">
    <div class="card-image">
        <img 
            src="<?php echo esc_url($short_thumbnail); ?>" 
            alt="<?php echo esc_attr(get_the_title()); ?>"
            loading="lazy"
        >
        <div class="play-overlay">
            <div class="play-button">
                <i data-lucide="play"></i>
            </div>
        </div>
        <?php if ($views) : ?>
            <div class="card-views"><?php echo esc_html($views); ?></div>
        <?php endif; ?>
    </div>
    
    <div class="card-content">
        <h3 class="card-title">
            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        </h3>
        <p class="card-description">
            <?php echo wp_trim_words(get_the_excerpt() ?: get_the_content(), 10, '...'); ?>
        </p>
    </div>
</div>
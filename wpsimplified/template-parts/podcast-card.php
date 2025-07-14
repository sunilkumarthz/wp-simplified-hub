<?php
/**
 * Podcast Card Template Part
 */

$audio_url = get_post_meta(get_the_ID(), '_audio_url', true);
$duration = get_post_meta(get_the_ID(), '_duration', true);
$guest = get_post_meta(get_the_ID(), '_guest', true);
$podcast_thumbnail = get_the_post_thumbnail_url(get_the_ID(), 'large');

if (!$podcast_thumbnail) {
    $podcast_thumbnail = 'https://via.placeholder.com/640x360/1e293b/04d98b?text=Podcast+Thumbnail';
}
?>

<div class="podcast-card">
    <div class="card-image">
        <img 
            src="<?php echo esc_url($podcast_thumbnail); ?>" 
            alt="<?php echo esc_attr(get_the_title()); ?>"
            loading="lazy"
        >
        <div class="play-overlay">
            <div class="play-button">
                <i data-lucide="mic"></i>
            </div>
        </div>
        <?php if ($duration) : ?>
            <div class="card-duration"><?php echo esc_html($duration); ?></div>
        <?php endif; ?>
        <div class="card-category">Podcast</div>
    </div>
    
    <div class="card-content">
        <h3 class="card-title">
            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        </h3>
        <p class="card-description">
            <?php echo wp_trim_words(get_the_excerpt() ?: get_the_content(), 20, '...'); ?>
        </p>
        <div class="card-meta">
            <?php if ($guest) : ?>
                <span>Guest: <?php echo esc_html($guest); ?></span>
            <?php endif; ?>
            <span><?php echo get_the_date('j M Y'); ?></span>
        </div>
    </div>
</div>
<?php
/**
 * Playlist Card Template Part
 */

$playlist_thumbnail = get_the_post_thumbnail_url(get_the_ID(), 'large');
$video_count = get_post_meta(get_the_ID(), '_video_count', true) ?: '12';

if (!$playlist_thumbnail) {
    $playlist_thumbnail = 'https://via.placeholder.com/640x360/1e293b/04d98b?text=Playlist+Thumbnail';
}
?>

<div class="playlist-card">
    <div class="card-image">
        <img 
            src="<?php echo esc_url($playlist_thumbnail); ?>" 
            alt="<?php echo esc_attr(get_the_title()); ?>"
            loading="lazy"
        >
        <div class="play-overlay">
            <div class="play-button">
                <i data-lucide="list"></i>
            </div>
        </div>
        <div class="card-duration"><?php echo esc_html($video_count); ?> videos</div>
        <div class="card-category">Playlist</div>
    </div>
    
    <div class="card-content">
        <h3 class="card-title">
            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        </h3>
        <p class="card-description">
            <?php echo wp_trim_words(get_the_excerpt() ?: get_the_content(), 20, '...'); ?>
        </p>
        <div class="card-meta">
            <span><?php echo esc_html($video_count); ?> videos</span>
            <span><?php echo get_the_date('j M Y'); ?></span>
        </div>
    </div>
</div>
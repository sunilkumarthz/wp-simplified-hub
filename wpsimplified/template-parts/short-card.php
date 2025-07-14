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

<div class="short-card">
    <div class="short-image">
        <img 
            src="<?php echo esc_url($short_thumbnail); ?>" 
            alt="<?php echo esc_attr(get_the_title()); ?>"
            loading="lazy"
        >
        <div class="short-overlay">
            <div class="short-play-button">
                <i data-lucide="play"></i>
            </div>
        </div>
        <div class="short-duration"><?php echo esc_html($duration); ?></div>
        <div class="short-category">Short</div>
    </div>
    
    <div class="short-content">
        <h3 class="short-title">
            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        </h3>
        <?php if ($views) : ?>
            <div class="short-meta">
                <span><?php echo esc_html($views); ?> views</span>
                <span><?php echo get_the_date('M j'); ?></span>
            </div>
        <?php endif; ?>
    </div>
</div>

<style>
.short-card {
    background: rgba(30, 41, 59, 0.5);
    border-radius: 1rem;
    overflow: hidden;
    border: 1px solid #334155;
    transition: all 0.3s ease;
    cursor: pointer;
}

.short-card:hover {
    border-color: #475569;
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(4, 217, 139, 0.1);
}

.short-image {
    position: relative;
    aspect-ratio: 9 / 16; /* Vertical aspect ratio for shorts */
    overflow: hidden;
}

.short-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.short-card:hover .short-image img {
    transform: scale(1.05);
}

.short-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.short-card:hover .short-overlay {
    opacity: 1;
}

.short-play-button {
    width: 3rem;
    height: 3rem;
    background: var(--wp-teal);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    transform: scale(0.8);
    transition: transform 0.3s ease;
}

.short-card:hover .short-play-button {
    transform: scale(1);
}

.short-play-button i {
    width: 1rem;
    height: 1rem;
    color: #ffffff;
    margin-left: 0.125rem;
}

.short-duration {
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    background: rgba(0, 0, 0, 0.8);
    color: #ffffff;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    font-weight: 600;
}

.short-category {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    background: var(--wp-teal);
    color: #ffffff;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    font-weight: 600;
}

.short-content {
    padding: 1rem;
}

.short-title {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    transition: color 0.3s ease;
}

.short-title a {
    color: inherit;
    text-decoration: none;
}

.short-card:hover .short-title {
    color: var(--wp-teal);
}

.short-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.75rem;
    color: #64748b;
    margin-top: 0.5rem;
}
</style>
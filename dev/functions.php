<?php
/**
 * WPSimplified Theme functions and definitions
 * 
 * @package WPSimplified
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function wpsimplified_setup() {
    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title.
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support('post-thumbnails');
    
    // Set default thumbnail sizes
    set_post_thumbnail_size(800, 600, true);
    add_image_size('wpsimplified-large', 1200, 800, true);
    add_image_size('wpsimplified-medium', 600, 400, true);
    add_image_size('wpsimplified-small', 300, 200, true);

    // This theme uses wp_nav_menu() in multiple locations.
    register_nav_menus(array(
        'primary' => esc_html__('Primary Menu', 'wpsimplified'),
        'footer'  => esc_html__('Footer Menu', 'wpsimplified'),
    ));

    // Switch default core markup to output valid HTML5.
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));

    // Add support for custom logo
    add_theme_support('custom-logo', array(
        'height'      => 60,
        'width'       => 200,
        'flex-width'  => true,
        'flex-height' => true,
    ));

    // Add theme support for selective refresh for widgets.
    add_theme_support('customize-selective-refresh-widgets');

    // Add support for core custom background feature.
    add_theme_support('custom-background', array(
        'default-color' => '1e293b',
        'default-image' => '',
    ));

    // Add support for wide alignment
    add_theme_support('align-wide');

    // Add support for responsive embedded content
    add_theme_support('responsive-embeds');

    // Add support for editor styles
    add_theme_support('editor-styles');
    add_editor_style('editor-style.css');
}
add_action('after_setup_theme', 'wpsimplified_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 */
function wpsimplified_content_width() {
    $GLOBALS['content_width'] = apply_filters('wpsimplified_content_width', 1200);
}
add_action('after_setup_theme', 'wpsimplified_content_width', 0);

/**
 * Register widget area.
 */
function wpsimplified_widgets_init() {
    register_sidebar(array(
        'name'          => esc_html__('Sidebar', 'wpsimplified'),
        'id'            => 'sidebar-1',
        'description'   => esc_html__('Add widgets here.', 'wpsimplified'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));

    register_sidebar(array(
        'name'          => esc_html__('Footer Widget Area', 'wpsimplified'),
        'id'            => 'footer-widgets',
        'description'   => esc_html__('Add widgets here to appear in the footer.', 'wpsimplified'),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="footer-widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'wpsimplified_widgets_init');

/**
 * Enqueue scripts and styles.
 */
function wpsimplified_scripts() {
    // Main stylesheet
    wp_enqueue_style('wpsimplified-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));

    // Google Fonts
    wp_enqueue_style('wpsimplified-fonts', 'https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap', array(), null);

    // Theme JavaScript
    wp_enqueue_script('wpsimplified-navigation', get_template_directory_uri() . '/js/navigation.js', array(), wp_get_theme()->get('Version'), true);

    // Comment reply script
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }

    // Localize script for AJAX
    wp_localize_script('wpsimplified-navigation', 'wpsimplified_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce'    => wp_create_nonce('wpsimplified_nonce'),
    ));
}
add_action('wp_enqueue_scripts', 'wpsimplified_scripts');

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Custom post types and fields
 */
function wpsimplified_custom_post_types() {
    // Videos Post Type
    register_post_type('videos', array(
        'labels' => array(
            'name' => 'Videos',
            'singular_name' => 'Video',
            'add_new' => 'Add New Video',
            'add_new_item' => 'Add New Video',
            'edit_item' => 'Edit Video',
            'new_item' => 'New Video',
            'view_item' => 'View Video',
            'search_items' => 'Search Videos',
            'not_found' => 'No videos found',
            'not_found_in_trash' => 'No videos found in trash'
        ),
        'public' => true,
        'has_archive' => true,
        'rewrite' => array('slug' => 'videos'),
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-video-alt3',
        'show_in_rest' => true,
    ));

    // Shorts Post Type
    register_post_type('shorts', array(
        'labels' => array(
            'name' => 'Shorts',
            'singular_name' => 'Short',
            'add_new' => 'Add New Short',
            'add_new_item' => 'Add New Short',
            'edit_item' => 'Edit Short',
            'new_item' => 'New Short',
            'view_item' => 'View Short',
            'search_items' => 'Search Shorts',
            'not_found' => 'No shorts found',
            'not_found_in_trash' => 'No shorts found in trash'
        ),
        'public' => true,
        'has_archive' => true,
        'rewrite' => array('slug' => 'shorts'),
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-format-video',
        'show_in_rest' => true,
    ));

    // Podcasts Post Type
    register_post_type('podcasts', array(
        'labels' => array(
            'name' => 'Podcasts',
            'singular_name' => 'Podcast',
            'add_new' => 'Add New Podcast',
            'add_new_item' => 'Add New Podcast',
            'edit_item' => 'Edit Podcast',
            'new_item' => 'New Podcast',
            'view_item' => 'View Podcast',
            'search_items' => 'Search Podcasts',
            'not_found' => 'No podcasts found',
            'not_found_in_trash' => 'No podcasts found in trash'
        ),
        'public' => true,
        'has_archive' => true,
        'rewrite' => array('slug' => 'podcasts'),
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-microphone',
        'show_in_rest' => true,
    ));

    // Playlists Post Type
    register_post_type('playlists', array(
        'labels' => array(
            'name' => 'Playlists',
            'singular_name' => 'Playlist',
            'add_new' => 'Add New Playlist',
            'add_new_item' => 'Add New Playlist',
            'edit_item' => 'Edit Playlist',
            'new_item' => 'New Playlist',
            'view_item' => 'View Playlist',
            'search_items' => 'Search Playlists',
            'not_found' => 'No playlists found',
            'not_found_in_trash' => 'No playlists found in trash'
        ),
        'public' => true,
        'has_archive' => true,
        'rewrite' => array('slug' => 'playlists'),
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-playlist-video',
        'show_in_rest' => true,
    ));
}
add_action('init', 'wpsimplified_custom_post_types');

/**
 * Add custom fields for video content
 */
function wpsimplified_add_meta_boxes() {
    add_meta_box(
        'video_details',
        'Video Details',
        'wpsimplified_video_meta_box',
        array('videos', 'shorts'),
        'normal',
        'high'
    );

    add_meta_box(
        'podcast_details',
        'Podcast Details',
        'wpsimplified_podcast_meta_box',
        'podcasts',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'wpsimplified_add_meta_boxes');

/**
 * Video meta box callback
 */
function wpsimplified_video_meta_box($post) {
    wp_nonce_field('wpsimplified_video_meta', 'wpsimplified_video_nonce');
    
    $video_url = get_post_meta($post->ID, '_video_url', true);
    $video_duration = get_post_meta($post->ID, '_video_duration', true);
    $video_views = get_post_meta($post->ID, '_video_views', true);
    
    echo '<table class="form-table">';
    echo '<tr><th><label for="video_url">Video URL</label></th>';
    echo '<td><input type="url" id="video_url" name="video_url" value="' . esc_attr($video_url) . '" style="width: 100%;" /></td></tr>';
    echo '<tr><th><label for="video_duration">Duration</label></th>';
    echo '<td><input type="text" id="video_duration" name="video_duration" value="' . esc_attr($video_duration) . '" placeholder="e.g., 10:25" /></td></tr>';
    echo '<tr><th><label for="video_views">Views</label></th>';
    echo '<td><input type="text" id="video_views" name="video_views" value="' . esc_attr($video_views) . '" placeholder="e.g., 1.2K" /></td></tr>';
    echo '</table>';
}

/**
 * Podcast meta box callback
 */
function wpsimplified_podcast_meta_box($post) {
    wp_nonce_field('wpsimplified_podcast_meta', 'wpsimplified_podcast_nonce');
    
    $podcast_url = get_post_meta($post->ID, '_podcast_url', true);
    $podcast_duration = get_post_meta($post->ID, '_podcast_duration', true);
    
    echo '<table class="form-table">';
    echo '<tr><th><label for="podcast_url">Podcast URL</label></th>';
    echo '<td><input type="url" id="podcast_url" name="podcast_url" value="' . esc_attr($podcast_url) . '" style="width: 100%;" /></td></tr>';
    echo '<tr><th><label for="podcast_duration">Duration</label></th>';
    echo '<td><input type="text" id="podcast_duration" name="podcast_duration" value="' . esc_attr($podcast_duration) . '" placeholder="e.g., 45:30" /></td></tr>';
    echo '</table>';
}

/**
 * Save meta box data
 */
function wpsimplified_save_meta_boxes($post_id) {
    // Video meta
    if (isset($_POST['wpsimplified_video_nonce']) && wp_verify_nonce($_POST['wpsimplified_video_nonce'], 'wpsimplified_video_meta')) {
        if (isset($_POST['video_url'])) {
            update_post_meta($post_id, '_video_url', sanitize_url($_POST['video_url']));
        }
        if (isset($_POST['video_duration'])) {
            update_post_meta($post_id, '_video_duration', sanitize_text_field($_POST['video_duration']));
        }
        if (isset($_POST['video_views'])) {
            update_post_meta($post_id, '_video_views', sanitize_text_field($_POST['video_views']));
        }
    }

    // Podcast meta
    if (isset($_POST['wpsimplified_podcast_nonce']) && wp_verify_nonce($_POST['wpsimplified_podcast_nonce'], 'wpsimplified_podcast_meta')) {
        if (isset($_POST['podcast_url'])) {
            update_post_meta($post_id, '_podcast_url', sanitize_url($_POST['podcast_url']));
        }
        if (isset($_POST['podcast_duration'])) {
            update_post_meta($post_id, '_podcast_duration', sanitize_text_field($_POST['podcast_duration']));
        }
    }
}
add_action('save_post', 'wpsimplified_save_meta_boxes');

/**
 * Excerpt length
 */
function wpsimplified_excerpt_length($length) {
    return 25;
}
add_filter('excerpt_length', 'wpsimplified_excerpt_length');

/**
 * Excerpt more
 */
function wpsimplified_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'wpsimplified_excerpt_more');

/**
 * Custom pagination
 */
function wpsimplified_pagination() {
    global $wp_query;
    
    if ($wp_query->max_num_pages <= 1) return;
    
    $paged = get_query_var('paged') ? absint(get_query_var('paged')) : 1;
    $max = intval($wp_query->max_num_pages);

    echo '<nav class="pagination-nav" role="navigation">';
    echo '<div class="pagination-wrapper">';
    
    if ($paged > 1) {
        echo '<a href="' . get_pagenum_link($paged - 1) . '" class="btn btn-outline">&larr; ' . __('Previous', 'wpsimplified') . '</a>';
    }
    
    for ($i = 1; $i <= $max; $i++) {
        if ($i == $paged) {
            echo '<span class="btn btn-primary current">' . $i . '</span>';
        } else {
            echo '<a href="' . get_pagenum_link($i) . '" class="btn btn-outline">' . $i . '</a>';
        }
    }
    
    if ($paged < $max) {
        echo '<a href="' . get_pagenum_link($paged + 1) . '" class="btn btn-outline">' . __('Next', 'wpsimplified') . ' &rarr;</a>';
    }
    
    echo '</div>';
    echo '</nav>';
}

/**
 * Load theme textdomain
 */
function wpsimplified_load_textdomain() {
    load_theme_textdomain('wpsimplified', get_template_directory() . '/languages');
}
add_action('after_setup_theme', 'wpsimplified_load_textdomain');
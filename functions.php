<?php
/**
 * WPSimplified Theme Functions
 * 
 * Theme setup, enqueue scripts/styles, and custom functionality
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function wpsimplified_setup() {
    // Theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    add_theme_support('custom-logo');
    add_theme_support('customize-selective-refresh-widgets');

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'wpsimplified'),
        'mobile' => __('Mobile Menu', 'wpsimplified'),
        'footer' => __('Footer Menu', 'wpsimplified'),
    ));

    // Set content width
    $GLOBALS['content_width'] = 1200;
}
add_action('after_setup_theme', 'wpsimplified_setup');

/**
 * Enqueue Scripts and Styles
 */
function wpsimplified_scripts() {
    // Main stylesheet
    wp_enqueue_style('wpsimplified-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Lucide Icons
    wp_enqueue_script('lucide-icons', 'https://unpkg.com/lucide@latest/dist/umd/lucide.js', array(), null, true);
    
    // Main theme script
    wp_enqueue_script('wpsimplified-script', get_template_directory_uri() . '/assets/js/theme.js', array('lucide-icons'), '1.0.0', true);
    
    // Localize script for AJAX
    wp_localize_script('wpsimplified-script', 'wpsimplified_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('wpsimplified_nonce'),
        'home_url' => home_url('/'),
    ));
}
add_action('wp_enqueue_scripts', 'wpsimplified_scripts');

/**
 * Custom Post Types
 */
function wpsimplified_post_types() {
    // Videos Post Type
    register_post_type('video', array(
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
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-video-alt3',
        'rewrite' => array('slug' => 'videos'),
    ));

    // Podcasts Post Type
    register_post_type('podcast', array(
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
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-microphone',
        'rewrite' => array('slug' => 'podcasts'),
    ));

    // Playlists Post Type
    register_post_type('playlist', array(
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
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-playlist-video',
        'rewrite' => array('slug' => 'playlists'),
    ));

    // Shorts Post Type
    register_post_type('short', array(
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
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-format-video',
        'rewrite' => array('slug' => 'shorts'),
    ));
}
add_action('init', 'wpsimplified_post_types');

/**
 * Custom Taxonomies
 */
function wpsimplified_taxonomies() {
    // Video Categories
    register_taxonomy('video_category', 'video', array(
        'hierarchical' => true,
        'labels' => array(
            'name' => 'Video Categories',
            'singular_name' => 'Video Category',
        ),
        'show_ui' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'video-category'),
    ));

    // Podcast Categories
    register_taxonomy('podcast_category', 'podcast', array(
        'hierarchical' => true,
        'labels' => array(
            'name' => 'Podcast Categories',
            'singular_name' => 'Podcast Category',
        ),
        'show_ui' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'podcast-category'),
    ));
}
add_action('init', 'wpsimplified_taxonomies');

/**
 * Custom Meta Fields
 */
function wpsimplified_meta_boxes() {
    add_meta_box(
        'video_details',
        'Video Details',
        'wpsimplified_video_meta_callback',
        'video',
        'normal',
        'high'
    );

    add_meta_box(
        'podcast_details',
        'Podcast Details',
        'wpsimplified_podcast_meta_callback',
        'podcast',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'wpsimplified_meta_boxes');

function wpsimplified_video_meta_callback($post) {
    wp_nonce_field('save_video_meta', 'video_meta_nonce');
    $youtube_url = get_post_meta($post->ID, '_youtube_url', true);
    $duration = get_post_meta($post->ID, '_duration', true);
    $views = get_post_meta($post->ID, '_views', true);
    ?>
    <table class="form-table">
        <tr>
            <th><label for="youtube_url">YouTube URL</label></th>
            <td><input type="url" id="youtube_url" name="youtube_url" value="<?php echo esc_attr($youtube_url); ?>" style="width: 100%;" /></td>
        </tr>
        <tr>
            <th><label for="duration">Duration</label></th>
            <td><input type="text" id="duration" name="duration" value="<?php echo esc_attr($duration); ?>" placeholder="e.g., 12:34" /></td>
        </tr>
        <tr>
            <th><label for="views">Views</label></th>
            <td><input type="text" id="views" name="views" value="<?php echo esc_attr($views); ?>" placeholder="e.g., 1.2K" /></td>
        </tr>
    </table>
    <?php
}

function wpsimplified_podcast_meta_callback($post) {
    wp_nonce_field('save_podcast_meta', 'podcast_meta_nonce');
    $audio_url = get_post_meta($post->ID, '_audio_url', true);
    $duration = get_post_meta($post->ID, '_duration', true);
    $guest = get_post_meta($post->ID, '_guest', true);
    ?>
    <table class="form-table">
        <tr>
            <th><label for="audio_url">Audio URL</label></th>
            <td><input type="url" id="audio_url" name="audio_url" value="<?php echo esc_attr($audio_url); ?>" style="width: 100%;" /></td>
        </tr>
        <tr>
            <th><label for="duration">Duration</label></th>
            <td><input type="text" id="duration" name="duration" value="<?php echo esc_attr($duration); ?>" placeholder="e.g., 45:30" /></td>
        </tr>
        <tr>
            <th><label for="guest">Guest</label></th>
            <td><input type="text" id="guest" name="guest" value="<?php echo esc_attr($guest); ?>" placeholder="Guest name" /></td>
        </tr>
    </table>
    <?php
}

/**
 * Save Meta Fields
 */
function wpsimplified_save_meta($post_id) {
    // Save video meta
    if (isset($_POST['video_meta_nonce']) && wp_verify_nonce($_POST['video_meta_nonce'], 'save_video_meta')) {
        if (isset($_POST['youtube_url'])) {
            update_post_meta($post_id, '_youtube_url', sanitize_url($_POST['youtube_url']));
        }
        if (isset($_POST['duration'])) {
            update_post_meta($post_id, '_duration', sanitize_text_field($_POST['duration']));
        }
        if (isset($_POST['views'])) {
            update_post_meta($post_id, '_views', sanitize_text_field($_POST['views']));
        }
    }

    // Save podcast meta
    if (isset($_POST['podcast_meta_nonce']) && wp_verify_nonce($_POST['podcast_meta_nonce'], 'save_podcast_meta')) {
        if (isset($_POST['audio_url'])) {
            update_post_meta($post_id, '_audio_url', sanitize_url($_POST['audio_url']));
        }
        if (isset($_POST['duration'])) {
            update_post_meta($post_id, '_duration', sanitize_text_field($_POST['duration']));
        }
        if (isset($_POST['guest'])) {
            update_post_meta($post_id, '_guest', sanitize_text_field($_POST['guest']));
        }
    }
}
add_action('save_post', 'wpsimplified_save_meta');

/**
 * AJAX Functions for Dynamic Content Loading
 */
function wpsimplified_load_videos() {
    check_ajax_referer('wpsimplified_nonce', 'nonce');
    
    $page = intval($_POST['page'] ?? 1);
    $posts_per_page = intval($_POST['posts_per_page'] ?? 9);
    $search = sanitize_text_field($_POST['search'] ?? '');
    
    $args = array(
        'post_type' => 'video',
        'posts_per_page' => $posts_per_page,
        'paged' => $page,
        'post_status' => 'publish',
    );
    
    if (!empty($search)) {
        $args['s'] = $search;
    }
    
    $videos = new WP_Query($args);
    $response = array();
    
    if ($videos->have_posts()) {
        while ($videos->have_posts()) {
            $videos->the_post();
            $response[] = array(
                'id' => get_the_ID(),
                'title' => get_the_title(),
                'excerpt' => get_the_excerpt(),
                'thumbnail' => get_the_post_thumbnail_url(get_the_ID(), 'large'),
                'permalink' => get_permalink(),
                'duration' => get_post_meta(get_the_ID(), '_duration', true),
                'views' => get_post_meta(get_the_ID(), '_views', true),
                'date' => get_the_date('j M Y'),
            );
        }
        wp_reset_postdata();
    }
    
    wp_send_json_success($response);
}
add_action('wp_ajax_load_videos', 'wpsimplified_load_videos');
add_action('wp_ajax_nopriv_load_videos', 'wpsimplified_load_videos');

function wpsimplified_load_podcasts() {
    check_ajax_referer('wpsimplified_nonce', 'nonce');
    
    $page = intval($_POST['page'] ?? 1);
    $posts_per_page = intval($_POST['posts_per_page'] ?? 9);
    
    $args = array(
        'post_type' => 'podcast',
        'posts_per_page' => $posts_per_page,
        'paged' => $page,
        'post_status' => 'publish',
    );
    
    $podcasts = new WP_Query($args);
    $response = array();
    
    if ($podcasts->have_posts()) {
        while ($podcasts->have_posts()) {
            $podcasts->the_post();
            $response[] = array(
                'id' => get_the_ID(),
                'title' => get_the_title(),
                'excerpt' => get_the_excerpt(),
                'thumbnail' => get_the_post_thumbnail_url(get_the_ID(), 'large'),
                'permalink' => get_permalink(),
                'duration' => get_post_meta(get_the_ID(), '_duration', true),
                'guest' => get_post_meta(get_the_ID(), '_guest', true),
                'date' => get_the_date('j M Y'),
            );
        }
        wp_reset_postdata();
    }
    
    wp_send_json_success($response);
}
add_action('wp_ajax_load_podcasts', 'wpsimplified_load_podcasts');
add_action('wp_ajax_nopriv_load_podcasts', 'wpsimplified_load_podcasts');

/**
 * Get YouTube Thumbnail from URL
 */
function wpsimplified_get_youtube_thumbnail($youtube_url) {
    if (preg_match('/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/', $youtube_url, $matches)) {
        $video_id = $matches[1];
        return "https://img.youtube.com/vi/{$video_id}/maxresdefault.jpg";
    }
    return '';
}

/**
 * Custom Walker for Navigation Menu
 */
class WPSimplified_Walker_Nav_Menu extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $indent = ($depth) ? str_repeat("\t", $depth) : '';
        
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $classes[] = 'nav-item';
        
        $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
        $class_names = $class_names ? ' class="' . esc_attr($class_names) . '"' : '';
        
        $id = apply_filters('nav_menu_item_id', 'menu-item-'. $item->ID, $item, $args);
        $id = $id ? ' id="' . esc_attr($id) . '"' : '';
        
        $attributes = ! empty($item->attr_title) ? ' title="'  . esc_attr($item->attr_title) .'"' : '';
        $attributes .= ! empty($item->target) ? ' target="' . esc_attr($item->target) .'"' : '';
        $attributes .= ! empty($item->xfn) ? ' rel="'    . esc_attr($item->xfn) .'"' : '';
        $attributes .= ! empty($item->url) ? ' href="'   . esc_attr($item->url) .'"' : '';
        
        $item_output = isset($args->before) ? $args->before : '';
        $item_output .= '<a'. $attributes .'>';
        $item_output .= (isset($args->link_before) ? $args->link_before : '') . apply_filters('the_title', $item->title, $item->ID) . (isset($args->link_after) ? $args->link_after : '');
        $item_output .= '</a>';
        $item_output .= isset($args->after) ? $args->after : '';
        
        $output .= $indent . '<li' . $id . $class_names .'>' . $item_output;
    }
}

/**
 * Customizer Settings
 */
function wpsimplified_customize_register($wp_customize) {
    // Social Media Section
    $wp_customize->add_section('wpsimplified_social', array(
        'title' => __('Social Media Links', 'wpsimplified'),
        'priority' => 30,
    ));

    // YouTube URL
    $wp_customize->add_setting('youtube_url', array(
        'default' => 'https://www.youtube.com/@wpsimplifiedbysunil',
        'sanitize_callback' => 'esc_url',
    ));
    
    $wp_customize->add_control('youtube_url', array(
        'label' => __('YouTube URL', 'wpsimplified'),
        'section' => 'wpsimplified_social',
        'type' => 'url',
    ));

    // Twitter URL
    $wp_customize->add_setting('twitter_url', array(
        'default' => 'https://x.com/sunilkumarthz',
        'sanitize_callback' => 'esc_url',
    ));
    
    $wp_customize->add_control('twitter_url', array(
        'label' => __('Twitter URL', 'wpsimplified'),
        'section' => 'wpsimplified_social',
        'type' => 'url',
    ));

    // LinkedIn URL
    $wp_customize->add_setting('linkedin_url', array(
        'default' => 'https://www.linkedin.com/in/sunilkumarthz/',
        'sanitize_callback' => 'esc_url',
    ));
    
    $wp_customize->add_control('linkedin_url', array(
        'label' => __('LinkedIn URL', 'wpsimplified'),
        'section' => 'wpsimplified_social',
        'type' => 'url',
    ));

    // GitHub URL
    $wp_customize->add_setting('github_url', array(
        'default' => 'https://github.com/sunilkumarthz',
        'sanitize_callback' => 'esc_url',
    ));
    
    $wp_customize->add_control('github_url', array(
        'label' => __('GitHub URL', 'wpsimplified'),
        'section' => 'wpsimplified_social',
        'type' => 'url',
    ));

    // Website URL
    $wp_customize->add_setting('website_url', array(
        'default' => 'https://sunilkumarthz.com',
        'sanitize_callback' => 'esc_url',
    ));
    
    $wp_customize->add_control('website_url', array(
        'label' => __('Website URL', 'wpsimplified'),
        'section' => 'wpsimplified_social',
        'type' => 'url',
    ));
}
add_action('customize_register', 'wpsimplified_customize_register');

/**
 * Body Classes
 */
function wpsimplified_body_classes($classes) {
    if (!is_singular()) {
        $classes[] = 'hfeed';
    }
    
    if (is_page()) {
        global $post;
        $classes[] = 'page-' . $post->post_name;
    }
    
    return $classes;
}
add_filter('body_class', 'wpsimplified_body_classes');
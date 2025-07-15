<?php
/**
 * WPSimplified Theme Functions
 * Enhanced version with complete React-like functionality
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
    // Compiled SCSS - Main stylesheet
    wp_enqueue_style('wpsimplified-style', get_template_directory_uri() . '/dist/css/main.css', array(), '1.0.1');
    
    // Google Fonts
    wp_enqueue_style('wpsimplified-fonts', 'https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap', array(), null);
    
    // Lucide Icons
    wp_enqueue_script('lucide-icons', 'https://unpkg.com/lucide@latest/dist/umd/lucide.js', array(), null, true);
    
    // Enhanced theme script
    wp_enqueue_script('wpsimplified-script', get_template_directory_uri() . '/assets/js/enhanced-theme.js', array('lucide-icons'), '1.0.1', true);
    
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
        'show_in_rest' => true,
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
        'show_in_rest' => true,
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
        'show_in_rest' => true,
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
        'show_in_rest' => true,
    ));
}
add_action('init', 'wpsimplified_post_types');

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

    add_meta_box(
        'short_details',
        'Short Details',
        'wpsimplified_short_meta_callback',
        'short',
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

function wpsimplified_short_meta_callback($post) {
    wp_nonce_field('save_short_meta', 'short_meta_nonce');
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
            <th><label for="duration">Duration (seconds)</label></th>
            <td><input type="text" id="duration" name="duration" value="<?php echo esc_attr($duration); ?>" placeholder="e.g., 60" /></td>
        </tr>
        <tr>
            <th><label for="views">Views</label></th>
            <td><input type="text" id="views" name="views" value="<?php echo esc_attr($views); ?>" placeholder="e.g., 5.2K" /></td>
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

    // Save short meta
    if (isset($_POST['short_meta_nonce']) && wp_verify_nonce($_POST['short_meta_nonce'], 'save_short_meta')) {
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
}
add_action('save_post', 'wpsimplified_save_meta');

/**
 * AJAX Functions for Dynamic Content Loading
 */
function wpsimplified_load_content() {
    check_ajax_referer('wpsimplified_nonce', 'nonce');
    
    $post_type = sanitize_text_field($_POST['post_type'] ?? '');
    $page = intval($_POST['page'] ?? 1);
    $posts_per_page = intval($_POST['posts_per_page'] ?? 12);
    $search = sanitize_text_field($_POST['search'] ?? '');
    
    $args = array(
        'post_type' => $post_type,
        'posts_per_page' => $posts_per_page,
        'paged' => $page,
        'post_status' => 'publish',
    );
    
    if (!empty($search)) {
        $args['s'] = $search;
    }
    
    $query = new WP_Query($args);
    $response = array(
        'posts' => array(),
        'total_pages' => $query->max_num_pages,
        'current_page' => $page,
        'total_posts' => $query->found_posts
    );
    
    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $post_data = array(
                'id' => get_the_ID(),
                'title' => get_the_title(),
                'excerpt' => get_the_excerpt(),
                'content' => get_the_content(),
                'thumbnail' => get_the_post_thumbnail_url(get_the_ID(), 'large'),
                'permalink' => get_permalink(),
                'date' => get_the_date('j M Y'),
                'author' => get_the_author(),
            );
            
            // Add post type specific meta
            switch ($post_type) {
                case 'video':
                case 'short':
                    $post_data['youtube_url'] = get_post_meta(get_the_ID(), '_youtube_url', true);
                    $post_data['duration'] = get_post_meta(get_the_ID(), '_duration', true);
                    $post_data['views'] = get_post_meta(get_the_ID(), '_views', true);
                    break;
                case 'podcast':
                    $post_data['audio_url'] = get_post_meta(get_the_ID(), '_audio_url', true);
                    $post_data['duration'] = get_post_meta(get_the_ID(), '_duration', true);
                    $post_data['guest'] = get_post_meta(get_the_ID(), '_guest', true);
                    break;
            }
            
            $response['posts'][] = $post_data;
        }
        wp_reset_postdata();
    }
    
    wp_send_json_success($response);
}
add_action('wp_ajax_load_content', 'wpsimplified_load_content');
add_action('wp_ajax_nopriv_load_content', 'wpsimplified_load_content');

/**
 * Customizer Settings
 */
function wpsimplified_customize_register($wp_customize) {
    // Social Media Section
    $wp_customize->add_section('wpsimplified_social', array(
        'title' => __('Social Media Links', 'wpsimplified'),
        'priority' => 30,
    ));

    $social_links = array(
        'youtube_url' => array('label' => 'YouTube URL', 'default' => 'https://www.youtube.com/@wpsimplifiedbysunil'),
        'twitter_url' => array('label' => 'Twitter URL', 'default' => 'https://x.com/sunilkumarthz'),
        'linkedin_url' => array('label' => 'LinkedIn URL', 'default' => 'https://www.linkedin.com/in/sunilkumarthz/'),
        'github_url' => array('label' => 'GitHub URL', 'default' => 'https://github.com/sunilkumarthz'),
        'website_url' => array('label' => 'Website URL', 'default' => 'https://sunilkumarthz.com'),
    );

    foreach ($social_links as $key => $link) {
        $wp_customize->add_setting($key, array(
            'default' => $link['default'],
            'sanitize_callback' => 'esc_url',
        ));
        
        $wp_customize->add_control($key, array(
            'label' => __($link['label'], 'wpsimplified'),
            'section' => 'wpsimplified_social',
            'type' => 'url',
        ));
    }
}
add_action('customize_register', 'wpsimplified_customize_register');

/**
 * Get YouTube Video ID from URL
 */
function wpsimplified_get_youtube_id($url) {
    preg_match('/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/', $url, $matches);
    return isset($matches[1]) ? $matches[1] : '';
}

/**
 * Get YouTube Thumbnail from URL
 */
function wpsimplified_get_youtube_thumbnail($youtube_url) {
    $video_id = wpsimplified_get_youtube_id($youtube_url);
    return $video_id ? "https://img.youtube.com/vi/{$video_id}/maxresdefault.jpg" : '';
}

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
add_action('body_class', 'wpsimplified_body_classes');
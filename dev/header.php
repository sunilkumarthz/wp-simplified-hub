<?php
/**
 * The header for our theme
 * 
 * @package WPSimplified
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <!-- Preconnect to Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <header id="masthead" class="site-header">
        <div class="container">
            <div class="header-container">
                <!-- Site Logo -->
                <div class="site-branding">
                    <?php if (has_custom_logo()) : ?>
                        <div class="site-logo">
                            <?php the_custom_logo(); ?>
                        </div>
                    <?php else : ?>
                        <h1 class="site-title">
                            <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                                <?php bloginfo('name'); ?>
                            </a>
                        </h1>
                        <?php
                        $description = get_bloginfo('description', 'display');
                        if ($description || is_customize_preview()) :
                        ?>
                            <p class="site-description"><?php echo $description; ?></p>
                        <?php endif; ?>
                    <?php endif; ?>
                </div>

                <!-- Primary Navigation -->
                <nav id="site-navigation" class="main-navigation">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu_id'        => 'primary-menu',
                        'container'      => false,
                        'fallback_cb'    => 'wp_page_menu',
                    ));
                    ?>
                    
                    <!-- Default Menu if no menu is set -->
                    <?php if (!has_nav_menu('primary')) : ?>
                        <ul id="primary-menu" class="menu">
                            <li class="menu-item">
                                <a href="<?php echo esc_url(home_url('/')); ?>" class="<?php echo is_home() ? 'current' : ''; ?>">
                                    <?php _e('Home', 'wpsimplified'); ?>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="<?php echo esc_url(home_url('/videos')); ?>">
                                    <?php _e('Videos', 'wpsimplified'); ?>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="<?php echo esc_url(home_url('/playlists')); ?>">
                                    <?php _e('Playlists', 'wpsimplified'); ?>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="<?php echo esc_url(home_url('/shorts')); ?>">
                                    <?php _e('Shorts', 'wpsimplified'); ?>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="<?php echo esc_url(home_url('/podcasts')); ?>">
                                    <?php _e('Podcasts', 'wpsimplified'); ?>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="<?php echo esc_url(home_url('/sponsors')); ?>">
                                    <?php _e('Sponsors', 'wpsimplified'); ?>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="<?php echo esc_url(home_url('/contact')); ?>">
                                    <?php _e('Contact', 'wpsimplified'); ?>
                                </a>
                            </li>
                        </ul>
                    <?php endif; ?>
                </nav>

                <!-- Mobile Menu Toggle -->
                <button class="mobile-menu-toggle" id="mobile-menu-toggle" style="display: none;">
                    <span class="screen-reader-text"><?php _e('Toggle navigation', 'wpsimplified'); ?></span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="3" y1="6" x2="21" y2="6"/>
                        <line x1="3" y1="12" x2="21" y2="12"/>
                        <line x1="3" y1="18" x2="21" y2="18"/>
                    </svg>
                </button>
            </div>
        </div>
    </header>

    <div id="content" class="site-content">
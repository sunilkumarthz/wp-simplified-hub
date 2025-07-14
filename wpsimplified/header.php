<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class('bg-slate-900 min-h-screen'); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <div class="container">
        <div class="header-content">
            <!-- Logo -->
            <a href="<?php echo home_url('/'); ?>" class="site-logo">
                <?php if (function_exists('the_custom_logo') && has_custom_logo()) :
                    the_custom_logo();
                else : ?>
                    <img src="<?php echo get_template_directory_uri(); ?>/images/logo-white.png" alt="<?php bloginfo('name'); ?>">
                <?php endif; ?>
            </a>

            <!-- Desktop Navigation -->
            <nav class="main-nav">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container' => false,
                    'items_wrap' => '%3$s',
                    'walker' => new WPSimplified_Walker_Nav_Menu(),
                    'fallback_cb' => function() {
                        echo '<a href="' . home_url('/') . '" class="nav-item current-menu-item"><i data-lucide="home"></i><span>Home</span></a>';
                        echo '<a href="#" class="nav-item"><i data-lucide="list"></i><span>Playlists</span></a>';
                        echo '<a href="#" class="nav-item"><i data-lucide="play"></i><span>Videos</span></a>';
                        echo '<a href="#" class="nav-item"><i data-lucide="mic"></i><span>Podcasts</span></a>';
                        echo '<a href="#" class="nav-item"><i data-lucide="play"></i><span>Shorts</span></a>';
                        echo '<a href="#" class="nav-item"><i data-lucide="award"></i><span>Sponsors</span></a>';
                        echo '<a href="#" class="nav-item"><i data-lucide="message-circle"></i><span>Contact</span></a>';
                    }
                ));
                ?>
            </nav>

            <!-- Subscribe Button -->
            <div class="subscribe-btn">
                <a href="<?php echo get_theme_mod('youtube_url', 'https://www.youtube.com/@wpsimplifiedbysunil'); ?>" target="_blank">
                    🔔 Subscribe
                </a>
            </div>

            <!-- Mobile Menu Button -->
            <button class="mobile-menu-btn" id="mobile-menu-btn">
                <i data-lucide="menu"></i>
            </button>
        </div>
    </div>
</header>

<!-- Mobile Menu -->
<div class="mobile-menu-overlay" id="mobile-menu-overlay"></div>
<div class="mobile-menu" id="mobile-menu">
    <div class="mobile-menu-header">
        <img src="<?php echo get_template_directory_uri(); ?>/images/logo-white.png" alt="<?php bloginfo('name'); ?>">
        <button class="mobile-menu-close" id="mobile-menu-close">
            <i data-lucide="x"></i>
        </button>
    </div>
    
    <nav class="mobile-menu-nav">
        <?php
        wp_nav_menu(array(
            'theme_location' => 'mobile',
            'container' => false,
            'items_wrap' => '%3$s',
            'fallback_cb' => function() {
                echo '<a href="' . home_url('/') . '" class="mobile-nav-item current-menu-item"><i data-lucide="home"></i><span>Home</span></a>';
                echo '<a href="#" class="mobile-nav-item"><i data-lucide="list"></i><span>Playlists</span></a>';
                echo '<a href="#" class="mobile-nav-item"><i data-lucide="play"></i><span>Videos</span></a>';
                echo '<a href="#" class="mobile-nav-item"><i data-lucide="mic"></i><span>Podcasts</span></a>';
                echo '<a href="#" class="mobile-nav-item"><i data-lucide="play"></i><span>Shorts</span></a>';
                echo '<a href="#" class="mobile-nav-item"><i data-lucide="award"></i><span>Sponsors</span></a>';
                echo '<a href="#" class="mobile-nav-item"><i data-lucide="message-circle"></i><span>Contact</span></a>';
            }
        ));
        ?>
    </nav>
    
    <div class="mobile-menu-subscribe">
        <a href="<?php echo get_theme_mod('youtube_url', 'https://www.youtube.com/@wpsimplifiedbysunil'); ?>" target="_blank" class="mobile-subscribe-btn">
            🔔 Subscribe to Channel
        </a>
    </div>
</div>
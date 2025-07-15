<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); bloginfo('name'); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class('min-h-screen bg-slate-900'); ?>>
<?php wp_body_open(); ?>

    <header class="wp-header">
        <div class="container">
            <div class="wp-header-content">
                <!-- Logo -->
                <a href="<?php echo home_url(); ?>" 
                   class="wp-logo"
                   aria-label="WPSimplified Home">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/logo-white.png" 
                         alt="WPSimplified Logo">
                </a>

                <!-- Desktop Navigation -->
                <nav class="wp-nav" role="navigation" aria-label="Main navigation">
                    <?php
                    $nav_items = [
                        ['label' => 'Home', 'path' => home_url(), 'icon' => 'home'],
                        ['label' => 'Playlists', 'path' => home_url('/playlists'), 'icon' => 'list'],
                        ['label' => 'Videos', 'path' => home_url('/videos'), 'icon' => 'play'],
                        ['label' => 'Podcasts', 'path' => home_url('/podcasts'), 'icon' => 'mic'],
                        ['label' => 'Shorts', 'path' => home_url('/shorts'), 'icon' => 'play'],
                        ['label' => 'Sponsors', 'path' => home_url('/sponsors'), 'icon' => 'award'],
                        ['label' => 'Contact', 'path' => home_url('/contact'), 'icon' => 'message-circle']
                    ];
                    
                    $current_url = home_url(add_query_arg(array(), $GLOBALS['wp']->request));
                    
                    foreach ($nav_items as $item):
                        $is_active = ($current_url === $item['path']) || 
                                   (is_home() && $item['path'] === home_url());
                        $active_class = $is_active ? 'active' : '';
                    ?>
                        <a href="<?php echo $item['path']; ?>" 
                           class="wp-nav-link <?php echo $active_class; ?>"
                           <?php echo $is_active ? 'aria-current="page"' : ''; ?>>
                            <i data-lucide="<?php echo $item['icon']; ?>"></i>
                            <span><?php echo $item['label']; ?></span>
                        </a>
                    <?php endforeach; ?>
                </nav>

                <!-- Header Actions -->
                <div class="wp-header-actions">
                    <!-- Subscribe Button - Desktop -->
                    <a href="<?php echo get_theme_mod('youtube_url', 'https://www.youtube.com/@wpsimplifiedbysunil'); ?>" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="wp-subscribe-btn"
                       aria-label="Subscribe to WPSimplified YouTube channel">
                        🔔 Subscribe
                    </a>

                    <!-- Mobile Menu Button -->
                    <button class="wp-mobile-toggle"
                            id="mobile-menu-toggle"
                            aria-expanded="false"
                            aria-controls="mobile-menu"
                            aria-label="Toggle navigation menu">
                        <i data-lucide="menu" id="menu-icon"></i>
                        <i data-lucide="x" id="close-icon" style="display: none;"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <div class="wp-mobile-menu-overlay" id="mobile-menu-overlay"></div>

    <!-- Mobile Navigation Sidebar -->
    <div class="wp-mobile-menu" id="mobile-menu">
        <div class="wp-mobile-menu-content">
            <!-- Mobile Menu Header -->
            <div class="wp-mobile-menu-header">
                <div class="wp-mobile-logo">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/logo-white.png" 
                         alt="WPSimplified Logo">
                </div>
                <button class="wp-mobile-menu-close"
                        id="mobile-menu-close"
                        aria-label="Close menu">
                    <i data-lucide="x"></i>
                </button>
            </div>

            <!-- Mobile Navigation Links -->
            <nav class="wp-mobile-nav" role="navigation" aria-label="Mobile navigation">
                <div class="wp-mobile-nav-grid">
                    <?php foreach ($nav_items as $item):
                        $is_active = ($current_url === $item['path']) || 
                                   (is_home() && $item['path'] === home_url());
                        $active_class = $is_active ? 'active' : '';
                    ?>
                        <a href="<?php echo $item['path']; ?>" 
                           class="wp-mobile-nav-link <?php echo $active_class; ?>"
                           <?php echo $is_active ? 'aria-current="page"' : ''; ?>>
                            <i data-lucide="<?php echo $item['icon']; ?>"></i>
                            <span><?php echo $item['label']; ?></span>
                        </a>
                    <?php endforeach; ?>
                </div>
            </nav>

            <!-- Mobile Subscribe Button -->
            <div class="wp-mobile-subscribe">
                <a href="<?php echo get_theme_mod('youtube_url', 'https://www.youtube.com/@wpsimplifiedbysunil'); ?>" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="wp-mobile-subscribe-btn"
                   aria-label="Subscribe to WPSimplified YouTube channel">
                    🔔 Subscribe to Channel
                </a>
            </div>
        </div>
    </div>
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

    <header class="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between h-16">
                <!-- Logo -->
                <a href="<?php echo home_url(); ?>" 
                   class="relative h-10 w-28 rounded-lg overflow-hidden border border-slate-600 hover:border-wp-teal/70 transition-all duration-300 group flex-shrink-0"
                   aria-label="WPSimplified Home">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/logo-white.png" 
                         alt="WPSimplified Logo"
                         class="object-contain w-full h-full p-1.5 transition-transform duration-300 group-hover:scale-105">
                </a>

                <!-- Desktop Navigation -->
                <nav class="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
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
                    
                    $current_url = home_url($_SERVER['REQUEST_URI']);
                    
                    foreach ($nav_items as $item):
                        $is_active = ($current_url === $item['path']) || 
                                   (is_home() && $item['path'] === home_url());
                        $active_class = $is_active ? 'border-wp-teal text-white' : 'border-transparent hover:border-wp-teal hover:text-wp-teal';
                    ?>
                        <a href="<?php echo $item['path']; ?>" 
                           class="flex items-center space-x-2 px-3 py-2 rounded-lg border transition-all duration-200 font-roboto font-medium text-sm <?php echo $active_class; ?>"
                           <?php echo $is_active ? 'aria-current="page"' : ''; ?>>
                            <i data-lucide="<?php echo $item['icon']; ?>" class="w-4 h-4" aria-hidden="true"></i>
                            <span><?php echo $item['label']; ?></span>
                        </a>
                    <?php endforeach; ?>
                </nav>

                <!-- Subscribe Button - Desktop -->
                <div class="hidden lg:flex items-center">
                    <a href="<?php echo get_theme_mod('youtube_url', 'https://www.youtube.com/@wpsimplifiedbysunil'); ?>" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="btn-outline-sm"
                       aria-label="Subscribe to WPSimplified YouTube channel">
                        🔔 Subscribe
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <button class="lg:hidden relative w-10 h-10 text-white hover:text-wp-teal p-2 focus:outline-none transition-all duration-300 rounded-lg hover:bg-slate-800 flex-shrink-0"
                        id="mobile-menu-toggle"
                        aria-expanded="false"
                        aria-controls="mobile-menu"
                        aria-label="Toggle navigation menu">
                    <i data-lucide="menu" class="w-6 h-6" id="menu-icon"></i>
                    <i data-lucide="x" class="w-6 h-6 hidden" id="close-icon"></i>
                </button>
            </div>
        </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <div class="fixed inset-0 bg-black/50 z-40 lg:hidden hidden" id="mobile-menu-overlay"></div>

    <!-- Mobile Navigation Sidebar -->
    <div class="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900 border-l border-slate-700 z-50 lg:hidden transform translate-x-full transition-transform duration-300 ease-in-out"
         id="mobile-menu">
        <div class="flex flex-col h-full">
            <!-- Mobile Menu Header -->
            <div class="flex items-center justify-between p-4 border-b border-slate-700">
                <div class="h-8 w-20 rounded overflow-hidden">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/logo-white.png" 
                         alt="WPSimplified Logo"
                         class="object-contain w-full h-full">
                </div>
                <button class="w-8 h-8 text-white hover:text-wp-teal p-1 transition-colors duration-200 rounded"
                        id="mobile-menu-close"
                        aria-label="Close menu">
                    <i data-lucide="x" class="w-6 h-6"></i>
                </button>
            </div>

            <!-- Mobile Navigation Links - Tab Style -->
            <nav class="flex-1 px-3 py-6" role="navigation" aria-label="Mobile navigation">
                <div class="grid grid-cols-2 gap-3">
                    <?php foreach ($nav_items as $item):
                        $is_active = ($current_url === $item['path']) || 
                                   (is_home() && $item['path'] === home_url());
                        $active_class = $is_active ? 
                            'bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg scale-105' : 
                            'bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:text-white hover:scale-102 border border-slate-700';
                    ?>
                        <a href="<?php echo $item['path']; ?>" 
                           class="flex flex-col items-center justify-center px-4 py-6 rounded-2xl transition-all duration-300 font-roboto font-medium text-center min-h-[100px] <?php echo $active_class; ?>"
                           <?php echo $is_active ? 'aria-current="page"' : ''; ?>>
                            <i data-lucide="<?php echo $item['icon']; ?>" class="w-7 h-7 mb-2 flex-shrink-0" aria-hidden="true"></i>
                            <span class="text-sm font-semibold"><?php echo $item['label']; ?></span>
                        </a>
                    <?php endforeach; ?>
                </div>
            </nav>

            <!-- Mobile Subscribe Button -->
            <div class="p-4 border-t border-slate-700">
                <a href="<?php echo get_theme_mod('youtube_url', 'https://www.youtube.com/@wpsimplifiedbysunil'); ?>" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="btn-solid-lg w-full block text-center"
                   aria-label="Subscribe to WPSimplified YouTube channel">
                    🔔 Subscribe to Channel
                </a>
            </div>
        </div>
    </div>
<footer class="bg-slate-900 border-t border-slate-800 relative px-4 pt-16 pb-8">
    <!-- Background Effects -->
    <div class="absolute inset-0 wp-gradient-dark opacity-20"></div>
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-wp-teal/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-wp-blue/5 rounded-full blur-3xl"></div>

    <div class="relative z-10">
        <div class="container mx-auto">
            <!-- 2-Column Layout -->
            <div class="grid md:grid-cols-2 gap-12 mb-12">
                <!-- Left Column - Brand & Social -->
                <div class="space-y-6">
                    <div class="flex items-center">
                        <div class="relative h-12 w-32 rounded-xl overflow-hidden border-2 border-slate-600 hover:border-wp-teal/70 transition-all duration-300 group hover:shadow-lg hover:shadow-wp-teal/20">
                            <img src="<?php echo get_template_directory_uri(); ?>/images/logo-white.png"
                                 alt="WPSimplified Logo"
                                 class="object-contain w-full h-full p-2 transition-transform duration-300 group-hover:scale-105">
                        </div>
                    </div>
                    <p class="text-slate-400 font-roboto text-sm leading-relaxed max-w-md">
                        Empowering WordPress developers with cutting-edge tutorials,
                        comprehensive playlists, and industry insights. Join thousands
                        mastering WordPress development.
                    </p>

                    <!-- Social Icons -->
                    <div class="flex gap-3">
                        <?php
                        $social_links = [
                            ['icon' => 'github', 'url' => get_theme_mod('github_url', 'https://github.com/sunilkumarthz'), 'label' => 'GitHub'],
                            ['icon' => 'twitter', 'url' => get_theme_mod('twitter_url', 'https://x.com/sunilkumarthz'), 'label' => 'X'],
                            ['icon' => 'linkedin', 'url' => get_theme_mod('linkedin_url', 'https://www.linkedin.com/in/sunilkumarthz/'), 'label' => 'LinkedIn'],
                            ['icon' => 'globe', 'url' => get_theme_mod('website_url', 'https://sunilkumarthz.com'), 'label' => 'Website'],
                            ['icon' => 'mail', 'url' => 'mailto:hello@wpsimplified.in', 'label' => 'Email'],
                        ];
                        
                        foreach ($social_links as $social): ?>
                            <a href="<?php echo $social['url']; ?>"
                               target="_blank"
                               rel="noopener noreferrer"
                               class="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-all duration-200 border border-slate-700"
                               aria-label="<?php echo $social['label']; ?>">
                                <i data-lucide="<?php echo $social['icon']; ?>" class="w-5 h-5 text-slate-400 hover:text-wp-teal"></i>
                            </a>
                        <?php endforeach; ?>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h3 class="font-baloo font-bold text-white text-lg mb-4">
                            Quick Links
                        </h3>
                        <ul class="flex flex-wrap gap-6">
                            <?php
                            $quick_links = [
                                ['label' => 'Home', 'path' => home_url()],
                                ['label' => 'Playlists', 'path' => home_url('/playlists')],
                                ['label' => 'Podcasts', 'path' => home_url('/podcasts')],
                                ['label' => 'Shorts', 'path' => home_url('/shorts')],
                                ['label' => 'Contact', 'path' => home_url('/contact')],
                            ];
                            
                            foreach ($quick_links as $link): ?>
                                <li>
                                    <a href="<?php echo $link['path']; ?>"
                                       class="text-slate-400 hover:text-wp-teal transition-colors font-roboto text-sm">
                                        <?php echo $link['label']; ?>
                                    </a>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                </div>

                <!-- Right Column - Join Community -->
                <div class="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 h-fit">
                    <h3 class="font-baloo font-bold text-white text-2xl mb-6">
                        Join the Community
                    </h3>
                    <p class="text-slate-400 font-roboto text-base mb-8 leading-relaxed">
                        Subscribe to our YouTube channel for the latest WordPress
                        tutorials, tips, and industry updates delivered weekly. Be part
                        of a growing community of developers.
                    </p>
                    <a href="<?php echo get_theme_mod('youtube_url', 'https://www.youtube.com/@wpsimplifiedbysunil'); ?>"
                       target="_blank"
                       rel="noopener noreferrer"
                       class="btn-outline-lg w-full block text-center">
                        🔔 Subscribe Now
                    </a>
                </div>
            </div>

            <!-- Bottom Section -->
            <div class="border-t border-slate-800 pt-8">
                <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p class="text-slate-400 font-roboto text-sm text-center md:text-left">
                        © <?php echo date('Y'); ?> WPSimplified by Sunil. Crafted with passion for
                        the WordPress community.
                    </p>
                    <div class="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
                        <a href="#" class="text-slate-400 hover:text-wp-teal transition-colors font-roboto">
                            Privacy Policy
                        </a>
                        <a href="#" class="text-slate-400 hover:text-wp-teal transition-colors font-roboto">
                            Terms of Service
                        </a>
                        <a href="#" class="text-slate-400 hover:text-wp-teal transition-colors font-roboto">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
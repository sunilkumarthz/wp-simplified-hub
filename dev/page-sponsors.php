<?php
/**
 * Template for Sponsors page
 * 
 * @package WPSimplified
 */

get_header(); ?>

<main id="main" class="site-main">
    
    <!-- Sponsors Hero Section -->
    <section class="hero-section" style="background: linear-gradient(135deg, var(--wp-background) 0%, var(--wp-muted) 20%, var(--wp-background) 100%); overflow: hidden;">
        <!-- Animated Background Elements -->
        <div style="position: absolute; top: 5rem; left: 25%; width: 16rem; height: 16rem; background: rgba(4, 217, 139, 0.1); border-radius: 50%; filter: blur(3rem); animation: pulse 6s ease-in-out infinite;"></div>
        <div style="position: absolute; bottom: 5rem; right: 25%; width: 20rem; height: 20rem; background: rgba(51, 65, 85, 0.1); border-radius: 50%; filter: blur(3rem); animation: pulse 6s ease-in-out infinite; animation-delay: 2s;"></div>
        
        <div class="container" style="position: relative; z-index: 10;">
            <div class="hero-content">
                <div class="hero-badge">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                        <line x1="3" y1="6" x2="21" y2="6"/>
                        <path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                    <?php _e('Partnership Opportunities Available', 'wpsimplified'); ?>
                </div>
                
                <h1 class="hero-title">
                    <?php _e('Partner with', 'wpsimplified'); ?>
                    <span class="hero-gradient-text" style="display: block;"><?php _e('WPSimplified', 'wpsimplified'); ?></span>
                </h1>
                
                <p class="hero-subtitle">
                    <?php _e('Join industry leaders in sponsoring the most trusted WordPress education platform. Reach', 'wpsimplified'); ?>
                    <span style="color: var(--wp-primary); font-weight: 600;"><?php _e('100,000+', 'wpsimplified'); ?></span>
                    <?php _e('passionate developers and business owners worldwide.', 'wpsimplified'); ?>
                </p>
                
                <!-- Stats Row -->
                <div class="grid grid-cols-4" style="margin-bottom: 3rem; gap: 2rem;">
                    <?php
                    $stats = array(
                        array('icon' => 'users', 'label' => 'Monthly Reach', 'value' => '100K+'),
                        array('icon' => 'trending-up', 'label' => 'Engagement Rate', 'value' => '15%'),
                        array('icon' => 'target', 'label' => 'Countries', 'value' => '50+'),
                        array('icon' => 'handshake', 'label' => 'Success Rate', 'value' => '98%')
                    );
                    
                    foreach ($stats as $index => $stat) :
                    ?>
                        <div style="text-align: center; animation: fadeIn 0.6s ease-out; animation-delay: <?php echo $index * 0.1; ?>s; animation-fill-mode: both;">
                            <div style="width: 4rem; height: 4rem; margin: 0 auto 0.75rem; background: rgba(4, 217, 139, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                <?php if ($stat['icon'] === 'users') : ?>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--wp-primary)" stroke-width="2">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                        <circle cx="8.5" cy="7" r="4"/>
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                    </svg>
                                <?php elseif ($stat['icon'] === 'trending-up') : ?>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--wp-primary)" stroke-width="2">
                                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/>
                                        <polyline points="16,7 22,7 22,13"/>
                                    </svg>
                                <?php elseif ($stat['icon'] === 'target') : ?>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--wp-primary)" stroke-width="2">
                                        <circle cx="12" cy="12" r="10"/>
                                        <circle cx="12" cy="12" r="6"/>
                                        <circle cx="12" cy="12" r="2"/>
                                    </svg>
                                <?php else : ?>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--wp-primary)" stroke-width="2">
                                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                                        <line x1="3" y1="6" x2="21" y2="6"/>
                                        <path d="M16 10a4 4 0 0 1-8 0"/>
                                    </svg>
                                <?php endif; ?>
                            </div>
                            <div style="font-size: 2rem; font-weight: bold; color: var(--wp-foreground);"><?php echo $stat['value']; ?></div>
                            <div style="font-size: 0.875rem; color: var(--wp-muted-foreground);"><?php echo $stat['label']; ?></div>
                        </div>
                    <?php endforeach; ?>
                </div>
                
                <!-- CTA Buttons -->
                <div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap;">
                    <a href="mailto:sponsor@wpsimplified.in?subject=Partnership%20Inquiry%20-%20Start%20Partnership" 
                       class="btn btn-primary btn-lg">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                        </svg>
                        <?php _e('Start Partnership', 'wpsimplified'); ?>
                    </a>
                    <a href="/media-kit.pdf" target="_blank" class="btn btn-outline btn-lg">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <circle cx="12" cy="12" r="6"/>
                            <circle cx="12" cy="12" r="2"/>
                        </svg>
                        <?php _e('View Media Kit', 'wpsimplified'); ?>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Current Sponsors Section -->
    <section class="section" style="background: rgba(51, 65, 85, 0.3);">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title"><?php _e('Trusted by Industry Leaders', 'wpsimplified'); ?></h2>
                <p class="section-subtitle">
                    <?php _e('Join these amazing companies who trust WPSimplified to reach their target audience.', 'wpsimplified'); ?>
                </p>
            </div>
            
            <!-- Sponsor Logos Grid -->
            <div class="grid grid-cols-3" style="gap: 2rem;">
                <?php
                // Sample sponsor data - in real implementation, this would come from custom post type or database
                $sponsors = array(
                    array('name' => 'WP Engine', 'logo' => '/images/sponsors/wpengine.png', 'tier' => 'Premium'),
                    array('name' => 'Elementor', 'logo' => '/images/sponsors/elementor.png', 'tier' => 'Premium'),
                    array('name' => 'Yoast', 'logo' => '/images/sponsors/yoast.png', 'tier' => 'Gold'),
                    array('name' => 'WPMU DEV', 'logo' => '/images/sponsors/wpmudev.png', 'tier' => 'Gold'),
                    array('name' => 'Gravity Forms', 'logo' => '/images/sponsors/gravityforms.png', 'tier' => 'Silver'),
                    array('name' => 'WP Rocket', 'logo' => '/images/sponsors/wprocket.png', 'tier' => 'Silver'),
                );
                
                foreach ($sponsors as $sponsor) :
                ?>
                    <div class="card sponsor-card" style="padding: 2rem; text-align: center; transition: all 0.3s ease;">
                        <div style="height: 4rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                            <!-- Placeholder logo - replace with actual logos -->
                            <div style="width: 120px; height: 60px; background: rgba(4, 217, 139, 0.1); border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; color: var(--wp-primary); font-weight: 600;">
                                <?php echo esc_html($sponsor['name']); ?>
                            </div>
                        </div>
                        <h3 style="margin-bottom: 0.5rem; font-size: 1.125rem;"><?php echo esc_html($sponsor['name']); ?></h3>
                        <span style="display: inline-block; background: rgba(4, 217, 139, 0.2); color: var(--wp-primary); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600;">
                            <?php echo esc_html($sponsor['tier']); ?> <?php _e('Partner', 'wpsimplified'); ?>
                        </span>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section class="section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title"><?php _e('Sponsorship Packages', 'wpsimplified'); ?></h2>
                <p class="section-subtitle">
                    <?php _e('Choose the perfect sponsorship package that aligns with your marketing goals and budget.', 'wpsimplified'); ?>
                </p>
            </div>
            
            <div class="grid grid-cols-3">
                <?php
                $packages = array(
                    array(
                        'name' => 'Silver',
                        'price' => '$299',
                        'period' => 'per month',
                        'description' => 'Perfect for startups and small businesses',
                        'features' => array(
                            'Logo in video descriptions',
                            'Monthly social media mention',
                            'Newsletter inclusion',
                            'Basic analytics report'
                        ),
                        'popular' => false
                    ),
                    array(
                        'name' => 'Gold',
                        'price' => '$599',
                        'period' => 'per month',
                        'description' => 'Ideal for growing WordPress businesses',
                        'features' => array(
                            'Logo in video intro/outro',
                            'Weekly social media mentions',
                            'Dedicated newsletter section',
                            'Product review video',
                            'Detailed analytics report'
                        ),
                        'popular' => true
                    ),
                    array(
                        'name' => 'Premium',
                        'price' => '$999',
                        'period' => 'per month',
                        'description' => 'Maximum exposure for enterprise brands',
                        'features' => array(
                            'Custom video integration',
                            'Daily social media presence',
                            'Dedicated email campaign',
                            'Live stream sponsorship',
                            'Co-branded content creation',
                            'Real-time analytics dashboard'
                        ),
                        'popular' => false
                    )
                );
                
                foreach ($packages as $package) :
                ?>
                    <div class="card pricing-card" style="padding: 2rem; position: relative; <?php echo $package['popular'] ? 'border: 2px solid var(--wp-primary); transform: scale(1.05);' : ''; ?>">
                        <?php if ($package['popular']) : ?>
                            <div style="position: absolute; top: -0.75rem; left: 50%; transform: translateX(-50%); background: var(--wp-primary); color: white; padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 600;">
                                <?php _e('Most Popular', 'wpsimplified'); ?>
                            </div>
                        <?php endif; ?>
                        
                        <div style="text-align: center; margin-bottom: 2rem;">
                            <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;"><?php echo esc_html($package['name']); ?></h3>
                            <div style="margin-bottom: 0.5rem;">
                                <span style="font-size: 3rem; font-weight: bold; color: var(--wp-primary);"><?php echo esc_html($package['price']); ?></span>
                                <span style="color: var(--wp-muted-foreground);">/ <?php echo esc_html($package['period']); ?></span>
                            </div>
                            <p style="color: var(--wp-muted-foreground);"><?php echo esc_html($package['description']); ?></p>
                        </div>
                        
                        <ul style="list-style: none; margin-bottom: 2rem; space-y: 0.75rem;">
                            <?php foreach ($package['features'] as $feature) : ?>
                                <li style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                                    <div style="width: 1.25rem; height: 1.25rem; background: var(--wp-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                                            <polyline points="20,6 9,17 4,12"/>
                                        </svg>
                                    </div>
                                    <span><?php echo esc_html($feature); ?></span>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                        
                        <a href="mailto:sponsor@wpsimplified.in?subject=<?php echo urlencode($package['name'] . ' Package Inquiry'); ?>" 
                           class="btn <?php echo $package['popular'] ? 'btn-primary' : 'btn-outline'; ?>" 
                           style="width: 100%; justify-content: center;">
                            <?php _e('Get Started', 'wpsimplified'); ?>
                        </a>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="section" style="background: rgba(51, 65, 85, 0.3);">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title"><?php _e('What Our Partners Say', 'wpsimplified'); ?></h2>
            </div>
            
            <div class="grid grid-cols-2">
                <?php
                $testimonials = array(
                    array(
                        'quote' => 'Partnering with WPSimplified has significantly increased our brand visibility in the WordPress community. The quality of content and engagement is exceptional.',
                        'author' => 'Sarah Johnson',
                        'position' => 'Marketing Director',
                        'company' => 'WP Solutions Inc.'
                    ),
                    array(
                        'quote' => 'The ROI from our sponsorship with WPSimplified exceeded our expectations. Highly recommended for any WordPress-focused business.',
                        'author' => 'Mike Chen',
                        'position' => 'CEO',
                        'company' => 'Plugin Pro'
                    )
                );
                
                foreach ($testimonials as $testimonial) :
                ?>
                    <div class="card" style="padding: 2rem;">
                        <div style="margin-bottom: 1.5rem;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--wp-primary)" stroke-width="2">
                                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4.5-1.25 4.5-.5 0-1 0-1 .5s1 1.5 1.25 2c.25.5 0 1-.25 1z"/>
                            </svg>
                        </div>
                        <p style="font-style: italic; margin-bottom: 1.5rem; font-size: 1.125rem; line-height: 1.6;">
                            "<?php echo esc_html($testimonial['quote']); ?>"
                        </p>
                        <div>
                            <div style="font-weight: 600; margin-bottom: 0.25rem;"><?php echo esc_html($testimonial['author']); ?></div>
                            <div style="color: var(--wp-muted-foreground); font-size: 0.875rem;">
                                <?php echo esc_html($testimonial['position']); ?> • <?php echo esc_html($testimonial['company']); ?>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

</main>

<style>
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
        opacity: 0.5;
    }
    50% {
        transform: scale(1.1);
        opacity: 0.8;
    }
}

.sponsor-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(4, 217, 139, 0.2);
}

.pricing-card {
    transition: all 0.3s ease;
}

.pricing-card:hover {
    transform: translateY(-8px);
}

@media (max-width: 768px) {
    .grid-cols-2,
    .grid-cols-3,
    .grid-cols-4 {
        grid-template-columns: 1fr;
    }
    
    .pricing-card[style*="scale(1.05)"] {
        transform: scale(1) !important;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .grid-cols-3 {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .grid-cols-4 {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>

<?php get_footer(); ?>
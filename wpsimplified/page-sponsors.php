<?php
/**
 * Template Name: Sponsors Page
 */

get_header(); ?>

<main>
    <!-- Hero Section -->
    <section class="hero-section">
        <div class="hero-background">
            <div class="hero-grid"></div>
            <div class="hero-orb hero-orb-1"></div>
            <div class="hero-orb hero-orb-2"></div>
            <div class="hero-orb hero-orb-3"></div>
        </div>
        
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <h1 class="hero-title">Partner with <span class="text-gradient">WPSimplified</span></h1>
                    <p class="hero-description">
                        Reach thousands of WordPress developers and enthusiasts through our platform. 
                        Join leading brands who trust WPSimplified for their marketing needs.
                    </p>
                    
                    <!-- Stats -->
                    <div class="sponsor-stats" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
                        <div class="stat-card">
                            <div class="stat-number">25K+</div>
                            <div class="stat-label">Monthly Views</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">15K+</div>
                            <div class="stat-label">Subscribers</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">5K+</div>
                            <div class="stat-label">Newsletter</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">85%</div>
                            <div class="stat-label">Developers</div>
                        </div>
                    </div>
                </div>
                
                <div class="hero-featured">
                    <h3>Why Partner With Us?</h3>
                    <div class="featured-content">
                        <div class="featured-item">
                            <h4><i data-lucide="target" style="display: inline; margin-right: 0.5rem; color: var(--wp-teal);"></i>Targeted Audience</h4>
                            <p>Reach WordPress developers, freelancers, and agency owners actively seeking solutions.</p>
                        </div>
                        <div class="featured-item">
                            <h4><i data-lucide="trending-up" style="display: inline; margin-right: 0.5rem; color: var(--wp-teal);"></i>Growing Community</h4>
                            <p>Join a fast-growing community of WordPress professionals and enthusiasts.</p>
                        </div>
                        <div class="featured-item">
                            <h4><i data-lucide="heart" style="display: inline; margin-right: 0.5rem; color: var(--wp-teal);"></i>Trusted Platform</h4>
                            <p>Partner with a respected voice in the WordPress community since 2020.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Current Sponsors -->
    <section class="content-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Trusted by <span class="text-gradient">Industry Leaders</span></h2>
                <p class="section-description">Join these amazing companies who have partnered with WPSimplified</p>
            </div>
            
            <div class="sponsors-grid">
                <?php
                $sponsors = array(
                    array('name' => 'WP Engine', 'logo' => 'wpengine-logo.png', 'category' => 'Hosting'),
                    array('name' => 'Elementor', 'logo' => 'elementor-logo.png', 'category' => 'Page Builder'),
                    array('name' => 'Yoast', 'logo' => 'yoast-logo.png', 'category' => 'SEO'),
                    array('name' => 'WooCommerce', 'logo' => 'woocommerce-logo.png', 'category' => 'E-commerce'),
                    array('name' => 'Kinsta', 'logo' => 'kinsta-logo.png', 'category' => 'Hosting'),
                    array('name' => 'Cloudflare', 'logo' => 'cloudflare-logo.png', 'category' => 'Security'),
                );
                
                foreach ($sponsors as $sponsor) : ?>
                    <div class="sponsor-card">
                        <div class="sponsor-logo">
                            <img src="https://via.placeholder.com/200x100/334155/04d98b?text=<?php echo urlencode($sponsor['name']); ?>" 
                                 alt="<?php echo esc_attr($sponsor['name']); ?>" loading="lazy">
                        </div>
                        <div class="sponsor-info">
                            <h4><?php echo esc_html($sponsor['name']); ?></h4>
                            <p><?php echo esc_html($sponsor['category']); ?></p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    
    <!-- Sponsorship Packages -->
    <section class="content-section section-alt">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Sponsorship <span class="text-gradient">Packages</span></h2>
                <p class="section-description">Choose the perfect sponsorship package for your brand</p>
            </div>
            
            <div class="pricing-grid">
                <!-- Bronze Package -->
                <div class="pricing-card">
                    <div class="pricing-header">
                        <h3>Bronze</h3>
                        <div class="pricing-price">
                            <span class="currency">$</span>
                            <span class="amount">299</span>
                            <span class="period">/month</span>
                        </div>
                    </div>
                    <div class="pricing-features">
                        <ul>
                            <li><i data-lucide="check"></i>Logo in video descriptions</li>
                            <li><i data-lucide="check"></i>Newsletter mention (1x/month)</li>
                            <li><i data-lucide="check"></i>Social media shoutout</li>
                            <li><i data-lucide="check"></i>Basic analytics report</li>
                        </ul>
                    </div>
                    <button class="pricing-button">Get Started</button>
                </div>
                
                <!-- Silver Package -->
                <div class="pricing-card featured">
                    <div class="pricing-badge">Most Popular</div>
                    <div class="pricing-header">
                        <h3>Silver</h3>
                        <div class="pricing-price">
                            <span class="currency">$</span>
                            <span class="amount">599</span>
                            <span class="period">/month</span>
                        </div>
                    </div>
                    <div class="pricing-features">
                        <ul>
                            <li><i data-lucide="check"></i>Everything in Bronze</li>
                            <li><i data-lucide="check"></i>Pre-roll video mention (5 sec)</li>
                            <li><i data-lucide="check"></i>Dedicated blog post</li>
                            <li><i data-lucide="check"></i>Product review opportunity</li>
                            <li><i data-lucide="check"></i>Detailed analytics</li>
                        </ul>
                    </div>
                    <button class="pricing-button">Get Started</button>
                </div>
                
                <!-- Gold Package -->
                <div class="pricing-card">
                    <div class="pricing-header">
                        <h3>Gold</h3>
                        <div class="pricing-price">
                            <span class="currency">$</span>
                            <span class="amount">999</span>
                            <span class="period">/month</span>
                        </div>
                    </div>
                    <div class="pricing-features">
                        <ul>
                            <li><i data-lucide="check"></i>Everything in Silver</li>
                            <li><i data-lucide="check"></i>Dedicated video tutorial</li>
                            <li><i data-lucide="check"></i>Webinar collaboration</li>
                            <li><i data-lucide="check"></i>Custom content creation</li>
                            <li><i data-lucide="check"></i>Priority support</li>
                        </ul>
                    </div>
                    <button class="pricing-button">Get Started</button>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Testimonials -->
    <section class="content-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">What Partners <span class="text-gradient">Say</span></h2>
            </div>
            
            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <div class="testimonial-content">
                        <p>"Partnering with WPSimplified has been incredible. The audience engagement and quality leads we receive are outstanding."</p>
                    </div>
                    <div class="testimonial-author">
                        <img src="https://via.placeholder.com/60x60/334155/04d98b?text=JD" alt="John Doe">
                        <div>
                            <h4>John Doe</h4>
                            <p>Marketing Director, TechCorp</p>
                        </div>
                    </div>
                </div>
                
                <div class="testimonial-card">
                    <div class="testimonial-content">
                        <p>"The ROI from our WPSimplified sponsorship exceeded expectations. Highly recommend for WordPress-focused marketing."</p>
                    </div>
                    <div class="testimonial-author">
                        <img src="https://via.placeholder.com/60x60/334155/04d98b?text=JS" alt="Jane Smith">
                        <div>
                            <h4>Jane Smith</h4>
                            <p>CEO, DevTools Inc</p>
                        </div>
                    </div>
                </div>
                
                <div class="testimonial-card">
                    <div class="testimonial-content">
                        <p>"Professional, reliable, and results-driven. WPSimplified delivers exactly what they promise."</p>
                    </div>
                    <div class="testimonial-author">
                        <img src="https://via.placeholder.com/60x60/334155/04d98b?text=MB" alt="Mike Brown">
                        <div>
                            <h4>Mike Brown</h4>
                            <p>Founder, WP Solutions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- CTA Section -->
    <section class="content-section section-alt">
        <div class="container">
            <div class="cta-content" style="text-align: center; max-width: 600px; margin: 0 auto;">
                <h2 class="section-title">Ready to <span class="text-gradient">Partner</span>?</h2>
                <p class="section-description">Let's discuss how we can help grow your brand in the WordPress community.</p>
                
                <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem; flex-wrap: wrap;">
                    <a href="mailto:partnerships@wpsimplified.in" class="btn-primary">
                        <i data-lucide="mail"></i>
                        Contact Us
                    </a>
                    <a href="#" class="btn-outline" onclick="scheduleCall()">
                        <i data-lucide="calendar"></i>
                        Schedule Call
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>

<style>
.sponsor-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.stat-card {
    background: rgba(30, 41, 59, 0.3);
    border: 1px solid #334155;
    border-radius: 0.75rem;
    padding: 1.5rem 1rem;
    text-align: center;
    transition: all 0.3s ease;
}

.stat-card:hover {
    border-color: var(--wp-teal);
    transform: translateY(-2px);
}

.stat-number {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--wp-teal);
    font-family: 'Baloo 2', cursive;
    display: block;
}

.stat-label {
    font-size: 0.875rem;
    color: #94a3b8;
    margin-top: 0.25rem;
}

.sponsors-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.sponsor-card {
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid #334155;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
}

.sponsor-card:hover {
    border-color: var(--wp-teal);
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(4, 217, 139, 0.1);
}

.sponsor-logo {
    margin-bottom: 1rem;
}

.sponsor-logo img {
    width: 100%;
    max-width: 150px;
    height: auto;
    opacity: 0.7;
    transition: opacity 0.3s ease;
}

.sponsor-card:hover .sponsor-logo img {
    opacity: 1;
}

.sponsor-info h4 {
    color: #f8fafc;
    margin-bottom: 0.5rem;
}

.sponsor-info p {
    color: #94a3b8;
    font-size: 0.875rem;
}

.pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.pricing-card {
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid #334155;
    border-radius: 1rem;
    padding: 2rem;
    position: relative;
    transition: all 0.3s ease;
}

.pricing-card.featured {
    border-color: var(--wp-teal);
    box-shadow: 0 10px 30px rgba(4, 217, 139, 0.2);
    transform: scale(1.05);
}

.pricing-badge {
    position: absolute;
    top: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    background: var(--wp-teal);
    color: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    font-size: 0.875rem;
    font-weight: 600;
}

.pricing-header {
    text-align: center;
    margin-bottom: 2rem;
}

.pricing-header h3 {
    font-size: 1.5rem;
    color: #f8fafc;
    margin-bottom: 1rem;
}

.pricing-price {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 0.25rem;
}

.currency {
    font-size: 1.25rem;
    color: var(--wp-teal);
}

.amount {
    font-size: 3rem;
    font-weight: 700;
    color: var(--wp-teal);
    font-family: 'Baloo 2', cursive;
}

.period {
    color: #94a3b8;
}

.pricing-features ul {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem 0;
}

.pricing-features li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 0;
    color: #cbd5e1;
}

.pricing-features i {
    width: 1rem;
    height: 1rem;
    color: var(--wp-teal);
}

.pricing-button {
    width: 100%;
    background: var(--wp-teal);
    color: #ffffff;
    border: none;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.pricing-button:hover {
    background: var(--wp-blue);
    transform: translateY(-2px);
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.testimonial-card {
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid #334155;
    border-radius: 1rem;
    padding: 2rem;
    transition: all 0.3s ease;
}

.testimonial-card:hover {
    border-color: var(--wp-teal);
    transform: translateY(-4px);
}

.testimonial-content {
    margin-bottom: 1.5rem;
}

.testimonial-content p {
    color: #cbd5e1;
    font-style: italic;
    line-height: 1.6;
}

.testimonial-author {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.testimonial-author img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    object-fit: cover;
}

.testimonial-author h4 {
    color: #f8fafc;
    margin-bottom: 0.25rem;
}

.testimonial-author p {
    color: #94a3b8;
    font-size: 0.875rem;
}
</style>

<script>
function scheduleCall() {
    // This would typically integrate with a scheduling tool like Calendly
    alert('Scheduling integration would go here. For now, please email us at partnerships@wpsimplified.in');
}

document.querySelectorAll('.pricing-button').forEach(button => {
    button.addEventListener('click', function() {
        // This would typically redirect to a payment or contact form
        window.location.href = 'mailto:partnerships@wpsimplified.in?subject=Sponsorship Inquiry&body=Hi, I\'m interested in the ' + 
            this.closest('.pricing-card').querySelector('h3').textContent + ' package.';
    });
});
</script>

<?php get_footer(); ?>
<?php
/**
 * Template Name: Sponsors Page
 */

get_header(); ?>

<div class="min-h-screen bg-slate-900">
    <!-- Sponsors Hero Section -->
    <section class="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div class="hero-background">
            <div class="hero-grid"></div>
            <div class="hero-orb hero-orb-1"></div>
            <div class="hero-orb hero-orb-2"></div>
        </div>
        
        <div class="container">
            <div class="hero-content" style="padding: 6rem 0; text-align: center;">
                <h1 class="hero-title fade-in">
                    Partnership & <span class="text-gradient">Sponsorship</span>
                </h1>
                <p class="hero-description fade-in" style="max-width: 800px; margin: 0 auto;">
                    Join us in empowering the WordPress community. Partner with WPSimplified to reach 
                    thousands of developers and WordPress enthusiasts worldwide.
                </p>
            </div>
        </div>
    </section>
    
    <!-- Pricing Section -->
    <section class="py-12 sm:py-16 lg:py-20">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">
                    Sponsorship <span class="text-gradient">Packages</span>
                </h2>
                <p class="section-description">
                    Choose the perfect sponsorship package for your brand
                </p>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 3rem;">
                
                <!-- Bronze Package -->
                <div style="background: rgba(30, 41, 59, 0.5); padding: 2rem; border-radius: 1rem; border: 1px solid #334155;">
                    <div style="text-align: center; margin-bottom: 2rem;">
                        <h3 style="color: #f8fafc; font-size: 1.5rem; margin-bottom: 0.5rem;">Bronze</h3>
                        <div style="color: #04d98b; font-size: 2rem; font-weight: 700;">$299<span style="font-size: 1rem; color: #94a3b8;">/month</span></div>
                    </div>
                    
                    <ul style="list-style: none; padding: 0; margin-bottom: 2rem;">
                        <li style="display: flex; align-items: center; margin-bottom: 1rem; color: #94a3b8;">
                            <i data-lucide="check" style="width: 1rem; height: 1rem; color: #04d98b; margin-right: 0.5rem;"></i>
                            Logo in video descriptions
                        </li>
                        <li style="display: flex; align-items: center; margin-bottom: 1rem; color: #94a3b8;">
                            <i data-lucide="check" style="width: 1rem; height: 1rem; color: #04d98b; margin-right: 0.5rem;"></i>
                            Website footer placement
                        </li>
                    </ul>
                    
                    <a href="#contact" class="btn-outline" style="width: 100%; text-align: center; display: block;">Choose Bronze</a>
                </div>
                
                <!-- Silver Package -->
                <div style="background: rgba(30, 41, 59, 0.7); padding: 2rem; border-radius: 1rem; border: 2px solid #04d98b; position: relative;">
                    <div style="position: absolute; top: -0.5rem; left: 50%; transform: translateX(-50%); background: #04d98b; color: #1e293b; padding: 0.25rem 1rem; border-radius: 1rem; font-size: 0.875rem; font-weight: 600;">
                        Most Popular
                    </div>
                    
                    <div style="text-align: center; margin-bottom: 2rem;">
                        <h3 style="color: #f8fafc; font-size: 1.5rem; margin-bottom: 0.5rem;">Silver</h3>
                        <div style="color: #04d98b; font-size: 2rem; font-weight: 700;">$599<span style="font-size: 1rem; color: #94a3b8;">/month</span></div>
                    </div>
                    
                    <a href="#contact" class="btn-primary" style="width: 100%; text-align: center; display: block;">Choose Silver</a>
                </div>
                
            </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>
<?php
/**
 * Template Name: Contact Page
 */

get_header(); ?>

<div class="min-h-screen bg-slate-900">
    <!-- Contact Hero Section -->
    <section class="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div class="hero-background">
            <div class="hero-grid"></div>
            <div class="hero-orb hero-orb-1"></div>
            <div class="hero-orb hero-orb-2"></div>
        </div>
        
        <div class="container">
            <div class="hero-content" style="padding: 6rem 0; text-align: center;">
                <h1 class="hero-title fade-in">
                    Get in <span class="text-gradient">Touch</span>
                </h1>
                <p class="hero-description fade-in" style="max-width: 600px; margin: 0 auto;">
                    Have questions about WordPress development? Want to collaborate? 
                    I'd love to hear from you. Let's build something amazing together.
                </p>
            </div>
        </div>
    </section>
    
    <!-- Contact Content Section -->
    <section class="py-12 sm:py-16 lg:py-20">
        <div class="container">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start;">
                
                <!-- Contact Info -->
                <div class="contact-info">
                    <h2 class="section-title" style="margin-bottom: 2rem;">Let's Connect</h2>
                    
                    <div style="margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
                            <div style="width: 3rem; height: 3rem; background: rgba(4, 217, 139, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                <i data-lucide="mail" style="width: 1.25rem; height: 1.25rem; color: #04d98b;"></i>
                            </div>
                            <div>
                                <h3 style="color: #f8fafc; font-weight: 600; margin-bottom: 0.25rem;">Email</h3>
                                <p style="color: #94a3b8;">hello@wpsimplified.in</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Contact Form -->
                <div class="contact-form-wrapper">
                    <form class="contact-form" style="background: rgba(30, 41, 59, 0.5); padding: 2rem; border-radius: 1rem; border: 1px solid #334155;">
                        <div style="margin-bottom: 1.5rem;">
                            <label for="name" style="display: block; color: #f8fafc; font-weight: 500; margin-bottom: 0.5rem;">Name</label>
                            <input type="text" id="name" name="name" required style="width: 100%; padding: 0.75rem; background: rgba(15, 23, 42, 0.5); border: 1px solid #334155; border-radius: 0.5rem; color: #f8fafc;">
                        </div>
                        
                        <div style="margin-bottom: 1.5rem;">
                            <label for="email" style="display: block; color: #f8fafc; font-weight: 500; margin-bottom: 0.5rem;">Email</label>
                            <input type="email" id="email" name="email" required style="width: 100%; padding: 0.75rem; background: rgba(15, 23, 42, 0.5); border: 1px solid #334155; border-radius: 0.5rem; color: #f8fafc;">
                        </div>
                        
                        <div style="margin-bottom: 2rem;">
                            <label for="message" style="display: block; color: #f8fafc; font-weight: 500; margin-bottom: 0.5rem;">Message</label>
                            <textarea id="message" name="message" rows="5" required style="width: 100%; padding: 0.75rem; background: rgba(15, 23, 42, 0.5); border: 1px solid #334155; border-radius: 0.5rem; color: #f8fafc; resize: vertical;"></textarea>
                        </div>
                        
                        <button type="submit" class="btn-primary" style="width: 100%;">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>
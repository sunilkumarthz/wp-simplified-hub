<?php
/**
 * Template Name: Shorts Page
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
                    <h1 class="hero-title">WordPress <span class="text-gradient">Shorts</span></h1>
                    <p class="hero-description">
                        Quick WordPress tips and tricks in bite-sized videos. Perfect for learning on the go 
                        and discovering new techniques in just a few minutes.
                    </p>
                    
                    <!-- Stats Bar -->
                    <div class="shorts-stats" style="display: flex; gap: 2rem; margin-top: 2rem; flex-wrap: wrap;">
                        <?php
                        $total_shorts = wp_count_posts('short');
                        $published_shorts = $total_shorts->publish ?? 0;
                        ?>
                        <div class="stat-item">
                            <span class="stat-number"><?php echo $published_shorts; ?>+</span>
                            <span class="stat-label">Quick Tips</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">60s</span>
                            <span class="stat-label">Average Length</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">Daily</span>
                            <span class="stat-label">New Content</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Filters Section -->
    <section class="content-section" style="padding-top: 2rem;">
        <div class="container">
            <div class="shorts-filters" style="display: flex; justify-content: center; gap: 1rem; margin-bottom: 3rem; flex-wrap: wrap;">
                <button class="filter-btn active" data-filter="all">
                    <i data-lucide="grid"></i>
                    All Shorts
                </button>
                <button class="filter-btn" data-filter="tips">
                    <i data-lucide="lightbulb"></i>
                    Quick Tips
                </button>
                <button class="filter-btn" data-filter="fixes">
                    <i data-lucide="wrench"></i>
                    Quick Fixes
                </button>
                <button class="filter-btn" data-filter="tricks">
                    <i data-lucide="zap"></i>
                    Pro Tricks
                </button>
                <button class="filter-btn" data-filter="updates">
                    <i data-lucide="refresh-cw"></i>
                    Updates
                </button>
            </div>
        </div>
    </section>
    
    <!-- Shorts Grid Section -->
    <section class="content-section" style="padding-top: 0;">
        <div class="container">
            <!-- Shorts Grid - Mobile First, Vertical Layout -->
            <div class="shorts-grid" id="shorts-grid">
                <?php
                $shorts = new WP_Query(array(
                    'post_type' => 'short',
                    'posts_per_page' => 15,
                    'post_status' => 'publish'
                ));
                
                if ($shorts->have_posts()) :
                    while ($shorts->have_posts()) : $shorts->the_post();
                        get_template_part('template-parts/short-card');
                    endwhile;
                    wp_reset_postdata();
                else : ?>
                    <div class="empty-state">
                        <p>No shorts found. Check back soon for quick WordPress tips!</p>
                    </div>
                <?php endif; ?>
            </div>
            
            <!-- Load More Button -->
            <?php if ($shorts->found_posts > 15) : ?>
                <div class="load-more">
                    <button class="load-more-btn" data-post-type="short" data-page="1">
                        Load More Shorts
                    </button>
                </div>
            <?php endif; ?>
        </div>
    </section>
</main>

<style>
.shorts-stats {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
    flex-wrap: wrap;
}

.stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-width: 100px;
}

.stat-number {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--wp-teal);
    font-family: 'Baloo 2', cursive;
}

.stat-label {
    font-size: 0.875rem;
    color: #94a3b8;
    margin-top: 0.25rem;
}

.shorts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    max-width: 1400px;
    margin: 0 auto;
}

@media (max-width: 640px) {
    .shorts-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1rem;
    }
}

.filter-btn {
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid #334155;
    color: #94a3b8;
    padding: 0.75rem 1.25rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.filter-btn:hover,
.filter-btn.active {
    background: var(--wp-teal);
    color: #ffffff;
    border-color: var(--wp-teal);
    transform: translateY(-2px);
}

.filter-btn i {
    width: 1rem;
    height: 1rem;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const shortsCards = document.querySelectorAll('.short-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active filter
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter shorts with animation
            shortsCards.forEach((card, index) => {
                setTimeout(() => {
                    if (filter === 'all') {
                        card.style.display = 'block';
                        card.style.opacity = '0';
                        setTimeout(() => {
                            card.style.opacity = '1';
                        }, 50);
                    } else {
                        // This would typically check post meta or taxonomies
                        card.style.display = 'block';
                        card.style.opacity = '0';
                        setTimeout(() => {
                            card.style.opacity = '1';
                        }, 50);
                    }
                }, index * 50);
            });
        });
    });
    
    // Infinite scroll for shorts
    let isLoading = false;
    window.addEventListener('scroll', () => {
        if (isLoading) return;
        
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        
        if (scrollTop + clientHeight >= scrollHeight - 1000) {
            const loadMoreBtn = document.querySelector('.load-more-btn[data-post-type="short"]');
            if (loadMoreBtn && !loadMoreBtn.disabled) {
                isLoading = true;
                // Trigger load more
                loadMoreBtn.click();
                setTimeout(() => {
                    isLoading = false;
                }, 2000);
            }
        }
    });
});
</script>

<?php get_footer(); ?>
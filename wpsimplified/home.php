<?php
/**
 * Blog Home Template (home.php)
 * Displays blog posts when "Posts page" is set in Settings > Reading
 */

get_header(); ?>

<main>
    <!-- Blog Hero Section -->
    <section class="hero-section">
        <div class="hero-background">
            <div class="hero-grid"></div>
            <div class="hero-orb hero-orb-1"></div>
            <div class="hero-orb hero-orb-2"></div>
            <div class="hero-orb hero-orb-3"></div>
        </div>
        
        <div class="container">
            <div class="hero-content" style="text-align: center; max-width: 800px; margin: 0 auto;">
                <div class="hero-text">
                    <h1 class="hero-title">WordPress <span class="text-gradient">Blog</span></h1>
                    <p class="hero-description">
                        In-depth articles, tutorials, and insights about WordPress development, 
                        best practices, and the latest trends in the WordPress ecosystem.
                    </p>
                    
                    <!-- Search Form -->
                    <form class="search-form" method="get" style="margin-top: 2rem;">
                        <div class="search-wrapper">
                            <input type="text" name="s" class="search-input" 
                                   placeholder="Search articles..." 
                                   value="<?php echo get_search_query(); ?>">
                            <button type="submit" class="search-button">
                                <i data-lucide="search"></i>
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Blog Categories -->
    <section class="content-section" style="padding-top: 2rem;">
        <div class="container">
            <div class="blog-categories" style="display: flex; justify-content: center; gap: 1rem; margin-bottom: 3rem; flex-wrap: wrap;">
                <a href="<?php echo home_url('/blog/'); ?>" class="filter-btn <?php echo !is_category() ? 'active' : ''; ?>">
                    All Articles
                </a>
                <?php
                $categories = get_categories(array(
                    'orderby' => 'count',
                    'order' => 'DESC',
                    'number' => 6,
                    'hide_empty' => true
                ));
                
                foreach ($categories as $category) : ?>
                    <a href="<?php echo get_category_link($category->term_id); ?>" 
                       class="filter-btn <?php echo is_category($category->term_id) ? 'active' : ''; ?>">
                        <?php echo esc_html($category->name); ?>
                        <span style="background: rgba(255,255,255,0.2); padding: 0.125rem 0.375rem; border-radius: 0.25rem; font-size: 0.75rem; margin-left: 0.5rem;">
                            <?php echo $category->count; ?>
                        </span>
                    </a>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    
    <!-- Blog Posts Grid -->
    <section class="content-section" style="padding-top: 0;">
        <div class="container">
            <?php if (have_posts()) : ?>
                <!-- Featured Post -->
                <?php if (is_home() && !is_paged() && !get_search_query()) : ?>
                    <?php 
                    $featured_post = new WP_Query(array(
                        'posts_per_page' => 1,
                        'meta_key' => '_featured_post',
                        'meta_value' => '1'
                    ));
                    
                    if ($featured_post->have_posts()) : 
                        $featured_post->the_post(); ?>
                        <div class="featured-post" style="margin-bottom: 4rem;">
                            <div class="hero-featured" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center;">
                                <div>
                                    <?php if (has_post_thumbnail()) : ?>
                                        <img src="<?php the_post_thumbnail_url('large'); ?>" 
                                             alt="<?php echo esc_attr(get_the_title()); ?>"
                                             style="width: 100%; border-radius: 0.75rem;">
                                    <?php endif; ?>
                                </div>
                                <div>
                                    <div style="color: var(--wp-teal); font-weight: 600; margin-bottom: 0.5rem;">
                                        <i data-lucide="star" style="width: 1rem; height: 1rem; display: inline; margin-right: 0.5rem;"></i>
                                        Featured Article
                                    </div>
                                    <h2 style="font-size: 1.75rem; margin-bottom: 1rem;">
                                        <a href="<?php the_permalink(); ?>" style="color: inherit;">
                                            <?php the_title(); ?>
                                        </a>
                                    </h2>
                                    <p style="color: #cbd5e1; margin-bottom: 1.5rem; line-height: 1.6;">
                                        <?php echo wp_trim_words(get_the_excerpt(), 25, '...'); ?>
                                    </p>
                                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; color: #94a3b8; font-size: 0.875rem;">
                                        <span><?php echo get_the_date('M j, Y'); ?></span>
                                        <span>•</span>
                                        <span><?php echo wp_count_words(get_the_content()); ?> words</span>
                                        <span>•</span>
                                        <span><?php echo ceil(wp_count_words(get_the_content()) / 200); ?> min read</span>
                                    </div>
                                    <a href="<?php the_permalink(); ?>" class="btn-primary">
                                        Read Article
                                    </a>
                                </div>
                            </div>
                        </div>
                        <?php wp_reset_postdata();
                    endif; ?>
                <?php endif; ?>
                
                <!-- Blog Posts Grid -->
                <div class="content-grid" id="blog-posts-grid">
                    <?php while (have_posts()) : the_post(); ?>
                        <article class="blog-card">
                            <?php if (has_post_thumbnail()) : ?>
                                <div class="blog-image">
                                    <a href="<?php the_permalink(); ?>">
                                        <img src="<?php the_post_thumbnail_url('medium_large'); ?>" 
                                             alt="<?php echo esc_attr(get_the_title()); ?>"
                                             loading="lazy">
                                    </a>
                                    <div class="blog-category">
                                        <?php 
                                        $categories = get_the_category();
                                        if (!empty($categories)) {
                                            echo esc_html($categories[0]->name);
                                        }
                                        ?>
                                    </div>
                                </div>
                            <?php endif; ?>
                            
                            <div class="blog-content">
                                <h2 class="blog-title">
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </h2>
                                <p class="blog-excerpt">
                                    <?php echo wp_trim_words(get_the_excerpt(), 20, '...'); ?>
                                </p>
                                <div class="blog-meta">
                                    <div class="blog-author">
                                        <?php echo get_avatar(get_the_author_meta('ID'), 32); ?>
                                        <div>
                                            <span class="author-name"><?php the_author(); ?></span>
                                            <span class="post-date"><?php echo get_the_date('M j, Y'); ?></span>
                                        </div>
                                    </div>
                                    <div class="blog-stats">
                                        <span><?php echo ceil(wp_count_words(get_the_content()) / 200); ?> min</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    <?php endwhile; ?>
                </div>
                
                <!-- Pagination -->
                <div class="blog-pagination" style="margin-top: 4rem; display: flex; justify-content: center;">
                    <?php
                    the_posts_pagination(array(
                        'mid_size' => 2,
                        'prev_text' => '<i data-lucide="chevron-left"></i> Previous',
                        'next_text' => 'Next <i data-lucide="chevron-right"></i>',
                        'class' => 'pagination-custom'
                    ));
                    ?>
                </div>
                
            <?php else : ?>
                <div class="empty-state">
                    <i data-lucide="file-text" style="width: 4rem; height: 4rem; color: #94a3b8; margin-bottom: 1rem;"></i>
                    <h3>No articles found</h3>
                    <p>Sorry, but nothing matched your search terms. Please try again with different keywords.</p>
                    <a href="<?php echo home_url('/blog/'); ?>" class="btn-primary" style="margin-top: 1rem;">
                        View All Articles
                    </a>
                </div>
            <?php endif; ?>
        </div>
    </section>
</main>

<style>
.blog-card {
    background: rgba(30, 41, 59, 0.5);
    border-radius: 1rem;
    overflow: hidden;
    border: 1px solid #334155;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
}

.blog-card:hover {
    border-color: #475569;
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(4, 217, 139, 0.1);
}

.blog-image {
    position: relative;
    aspect-ratio: 16 / 10;
    overflow: hidden;
}

.blog-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.blog-card:hover .blog-image img {
    transform: scale(1.05);
}

.blog-category {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: var(--wp-teal);
    color: #ffffff;
    padding: 0.375rem 0.75rem;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    font-weight: 600;
}

.blog-content {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.blog-title {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    line-height: 1.4;
    flex: 1;
}

.blog-title a {
    color: #f8fafc;
    text-decoration: none;
    transition: color 0.3s ease;
}

.blog-card:hover .blog-title a {
    color: var(--wp-teal);
}

.blog-excerpt {
    color: #94a3b8;
    font-size: 0.875rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.blog-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
}

.blog-author {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.blog-author img {
    border-radius: 50%;
}

.author-name {
    color: #f8fafc;
    font-weight: 500;
    font-size: 0.875rem;
    display: block;
}

.post-date {
    color: #64748b;
    font-size: 0.75rem;
}

.blog-stats {
    color: #64748b;
    font-size: 0.75rem;
}

.featured-post {
    margin-bottom: 4rem;
}

@media (max-width: 768px) {
    .featured-post .hero-featured {
        grid-template-columns: 1fr;
        text-align: center;
    }
}

.pagination-custom {
    display: flex;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
    margin: 0;
}

.pagination-custom a,
.pagination-custom span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid #334155;
    border-radius: 0.5rem;
    color: #cbd5e1;
    text-decoration: none;
    transition: all 0.3s ease;
}

.pagination-custom a:hover {
    background: var(--wp-teal);
    border-color: var(--wp-teal);
    color: #ffffff;
}

.pagination-custom .current {
    background: var(--wp-teal);
    border-color: var(--wp-teal);
    color: #ffffff;
}
</style>

<?php get_footer(); ?>
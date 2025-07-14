<?php
/**
 * Single Post Template (Blog Detail Page)
 */

get_header(); ?>

<main>
    <?php while (have_posts()) : the_post(); ?>
    
    <!-- Article Hero -->
    <article class="content-section" style="padding-top: 2rem;">
        <div class="container" style="max-width: 800px;">
            <!-- Article Header -->
            <header class="article-header" style="margin-bottom: 3rem;">
                <!-- Categories -->
                <div class="article-categories" style="margin-bottom: 1rem;">
                    <?php
                    $categories = get_the_category();
                    if (!empty($categories)) :
                        foreach ($categories as $category) : ?>
                            <a href="<?php echo get_category_link($category->term_id); ?>" 
                               class="category-tag">
                                <?php echo esc_html($category->name); ?>
                            </a>
                        <?php endforeach;
                    endif; ?>
                </div>
                
                <!-- Title -->
                <h1 class="article-title"><?php the_title(); ?></h1>
                
                <!-- Article Meta -->
                <div class="article-meta">
                    <div class="author-info">
                        <?php echo get_avatar(get_the_author_meta('ID'), 48); ?>
                        <div>
                            <span class="author-name">By <?php the_author(); ?></span>
                            <div class="article-stats">
                                <span><?php echo get_the_date('F j, Y'); ?></span>
                                <span>•</span>
                                <span><?php echo wp_count_words(get_the_content()); ?> words</span>
                                <span>•</span>
                                <span><?php echo ceil(wp_count_words(get_the_content()) / 200); ?> min read</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Share Buttons -->
                    <div class="share-buttons">
                        <button onclick="shareArticle('twitter')" class="share-btn">
                            <i data-lucide="twitter"></i>
                        </button>
                        <button onclick="shareArticle('linkedin')" class="share-btn">
                            <i data-lucide="linkedin"></i>
                        </button>
                        <button onclick="shareArticle('copy')" class="share-btn" id="copy-btn">
                            <i data-lucide="link"></i>
                        </button>
                    </div>
                </div>
                
                <!-- Featured Image -->
                <?php if (has_post_thumbnail()) : ?>
                    <div class="article-image" style="margin-top: 2rem;">
                        <img src="<?php the_post_thumbnail_url('large'); ?>" 
                             alt="<?php echo esc_attr(get_the_title()); ?>"
                             style="width: 100%; border-radius: 1rem;">
                    </div>
                <?php endif; ?>
            </header>
            
            <!-- Article Content -->
            <div class="article-content">
                <?php the_content(); ?>
            </div>
            
            <!-- Article Tags -->
            <?php
            $tags = get_the_tags();
            if ($tags) : ?>
                <div class="article-tags" style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #334155;">
                    <h4 style="color: #f8fafc; margin-bottom: 1rem;">Tags:</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                        <?php foreach ($tags as $tag) : ?>
                            <a href="<?php echo get_tag_link($tag->term_id); ?>" class="tag-link">
                                #<?php echo esc_html($tag->name); ?>
                            </a>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endif; ?>
            
            <!-- Author Bio -->
            <div class="author-bio" style="margin-top: 3rem; padding: 2rem; background: rgba(30, 41, 59, 0.5); border-radius: 1rem; border: 1px solid #334155;">
                <div style="display: flex; gap: 1.5rem; align-items: center;">
                    <?php echo get_avatar(get_the_author_meta('ID'), 80); ?>
                    <div>
                        <h4 style="color: #f8fafc; margin-bottom: 0.5rem;">
                            About <?php the_author(); ?>
                        </h4>
                        <p style="color: #94a3b8; line-height: 1.6; margin-bottom: 1rem;">
                            <?php 
                            $author_bio = get_the_author_meta('description');
                            echo $author_bio ?: 'WordPress developer and educator passionate about simplifying complex concepts.';
                            ?>
                        </p>
                        <div style="display: flex; gap: 0.5rem;">
                            <?php if (get_the_author_meta('twitter')) : ?>
                                <a href="<?php echo esc_url(get_the_author_meta('twitter')); ?>" 
                                   target="_blank" class="social-link">
                                    <i data-lucide="twitter"></i>
                                </a>
                            <?php endif; ?>
                            <?php if (get_the_author_meta('linkedin')) : ?>
                                <a href="<?php echo esc_url(get_the_author_meta('linkedin')); ?>" 
                                   target="_blank" class="social-link">
                                    <i data-lucide="linkedin"></i>
                                </a>
                            <?php endif; ?>
                            <a href="<?php echo get_author_posts_url(get_the_author_meta('ID')); ?>" 
                               class="social-link">
                                <i data-lucide="user"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
    
    <!-- Related Posts -->
    <section class="content-section section-alt">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Related <span class="text-gradient">Articles</span></h2>
            </div>
            
            <div class="content-grid">
                <?php
                $related_posts = new WP_Query(array(
                    'posts_per_page' => 3,
                    'post__not_in' => array(get_the_ID()),
                    'category__in' => wp_get_post_categories(get_the_ID()),
                    'orderby' => 'rand'
                ));
                
                if ($related_posts->have_posts()) :
                    while ($related_posts->have_posts()) : $related_posts->the_post(); ?>
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
                                <h3 class="blog-title">
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </h3>
                                <p class="blog-excerpt">
                                    <?php echo wp_trim_words(get_the_excerpt(), 15, '...'); ?>
                                </p>
                                <div class="blog-meta">
                                    <span style="color: #64748b; font-size: 0.875rem;">
                                        <?php echo get_the_date('M j, Y'); ?>
                                    </span>
                                    <span style="color: #64748b; font-size: 0.875rem;">
                                        <?php echo ceil(wp_count_words(get_the_content()) / 200); ?> min
                                    </span>
                                </div>
                            </div>
                        </article>
                    <?php endwhile;
                    wp_reset_postdata();
                endif; ?>
            </div>
        </div>
    </section>
    
    <!-- Newsletter Signup -->
    <section class="content-section">
        <div class="container" style="max-width: 600px; text-align: center;">
            <div class="hero-featured">
                <h3>Stay Updated</h3>
                <p style="margin-bottom: 2rem;">Get the latest WordPress tutorials and tips delivered to your inbox.</p>
                
                <form class="newsletter-form" style="display: flex; gap: 1rem; max-width: 400px; margin: 0 auto;">
                    <input type="email" placeholder="Your email address" 
                           style="flex: 1; padding: 0.75rem; background: rgba(30, 41, 59, 0.8); border: 1px solid #334155; border-radius: 0.5rem; color: #f8fafc;">
                    <button type="submit" class="btn-primary">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    </section>
    
    <?php endwhile; ?>
</main>

<style>
.article-header {
    margin-bottom: 3rem;
}

.article-categories {
    margin-bottom: 1rem;
}

.category-tag {
    display: inline-block;
    background: var(--wp-teal);
    color: #ffffff;
    padding: 0.375rem 0.75rem;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 600;
    text-decoration: none;
    margin-right: 0.5rem;
}

.article-title {
    font-size: 2.5rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    color: #f8fafc;
    line-height: 1.2;
    margin-bottom: 1.5rem;
}

.article-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
}

.author-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.author-info img {
    border-radius: 50%;
}

.author-name {
    color: #f8fafc;
    font-weight: 600;
    display: block;
    margin-bottom: 0.25rem;
}

.article-stats {
    color: #94a3b8;
    font-size: 0.875rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.share-buttons {
    display: flex;
    gap: 0.5rem;
}

.share-btn {
    width: 2.5rem;
    height: 2.5rem;
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid #334155;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #94a3b8;
    cursor: pointer;
    transition: all 0.3s ease;
}

.share-btn:hover {
    background: var(--wp-teal);
    border-color: var(--wp-teal);
    color: #ffffff;
}

.share-btn i {
    width: 1rem;
    height: 1rem;
}

.article-content {
    color: #cbd5e1;
    line-height: 1.8;
    font-size: 1.125rem;
}

.article-content h1,
.article-content h2,
.article-content h3,
.article-content h4,
.article-content h5,
.article-content h6 {
    color: #f8fafc;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-family: 'Baloo 2', cursive;
}

.article-content h2 {
    font-size: 1.875rem;
}

.article-content h3 {
    font-size: 1.5rem;
}

.article-content p {
    margin-bottom: 1.5rem;
}

.article-content a {
    color: var(--wp-teal);
    text-decoration: underline;
}

.article-content a:hover {
    color: #f8fafc;
}

.article-content ul,
.article-content ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
}

.article-content li {
    margin-bottom: 0.5rem;
}

.article-content blockquote {
    border-left: 4px solid var(--wp-teal);
    padding-left: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: #94a3b8;
}

.article-content code {
    background: rgba(30, 41, 59, 0.5);
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-family: 'Courier New', monospace;
    font-size: 0.875rem;
}

.article-content pre {
    background: rgba(30, 41, 59, 0.8);
    padding: 1.5rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 1.5rem 0;
}

.tag-link {
    display: inline-block;
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid #334155;
    color: #94a3b8;
    padding: 0.375rem 0.75rem;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    text-decoration: none;
    transition: all 0.3s ease;
}

.tag-link:hover {
    background: var(--wp-teal);
    border-color: var(--wp-teal);
    color: #ffffff;
}

@media (max-width: 768px) {
    .article-title {
        font-size: 1.875rem;
    }
    
    .article-meta {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .article-content {
        font-size: 1rem;
    }
}
</style>

<script>
function shareArticle(platform) {
    const url = window.location.href;
    const title = document.querySelector('.article-title').textContent;
    
    switch(platform) {
        case 'twitter':
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
            break;
        case 'linkedin':
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
            break;
        case 'copy':
            navigator.clipboard.writeText(url).then(() => {
                const btn = document.getElementById('copy-btn');
                const icon = btn.querySelector('i');
                icon.setAttribute('data-lucide', 'check');
                lucide.createIcons();
                setTimeout(() => {
                    icon.setAttribute('data-lucide', 'link');
                    lucide.createIcons();
                }, 2000);
            });
            break;
    }
}

// Newsletter form
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    // Add newsletter subscription logic here
    alert('Newsletter subscription functionality would be implemented here.');
});
</script>

<?php get_footer(); ?>
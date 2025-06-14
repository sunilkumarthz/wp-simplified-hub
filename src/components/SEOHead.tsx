
import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'video.other';
  videoUrl?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  jsonLd?: object;
}

const SEOHead = ({
  title = "WPSimplified by Sunil - WordPress Tutorials & Expert Community",
  description = "Learn WordPress with comprehensive tutorials, playlists, podcasts, and expert insights by Sunil Kumar Sharma. From beginner to advanced WordPress development.",
  keywords = "WordPress tutorials, WordPress development, Gutenberg guide, WooCommerce setup",
  image = "https://wpsimplified.in/social-preview.png",
  url = "https://wpsimplified.in/",
  type = "website",
  videoUrl,
  publishedTime,
  modifiedTime,
  author = "Sunil Kumar Sharma",
  jsonLd
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Remove existing meta tags
    const existingMetas = document.querySelectorAll('meta[data-seo]');
    existingMetas.forEach(meta => meta.remove());

    // Remove existing JSON-LD
    const existingJsonLd = document.querySelectorAll('script[data-seo-json]');
    existingJsonLd.forEach(script => script.remove());

    // Create and append new meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:url', content: url },
    ];

    // Add video-specific tags
    if (type === 'video.other' && videoUrl) {
      metaTags.push(
        { property: 'og:video:url', content: videoUrl },
        { property: 'og:video:secure_url', content: videoUrl },
        { property: 'og:video:type', content: 'text/html' }
      );
    }

    // Add article-specific tags
    if (type === 'article') {
      if (publishedTime) metaTags.push({ property: 'article:published_time', content: publishedTime });
      if (modifiedTime) metaTags.push({ property: 'article:modified_time', content: modifiedTime });
      if (author) metaTags.push({ property: 'article:author', content: author });
    }

    // Append meta tags to head
    metaTags.forEach(({ name, property, content }) => {
      const meta = document.createElement('meta');
      if (name) meta.setAttribute('name', name);
      if (property) meta.setAttribute('property', property);
      meta.setAttribute('content', content);
      meta.setAttribute('data-seo', 'true');
      document.head.appendChild(meta);
    });

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Add JSON-LD structured data
    if (jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-json', 'true');
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, image, url, type, videoUrl, publishedTime, modifiedTime, author, jsonLd]);

  return null;
};

export default SEOHead;

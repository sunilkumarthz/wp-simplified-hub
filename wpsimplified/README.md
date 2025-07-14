# WPSimplified WordPress Theme

A modern WordPress theme converted from React, designed for WordPress learning platforms and tutorial websites.

## Features

- **Fully Responsive Design** - Mobile-first approach with perfect display on all devices
- **Custom Post Types** - Videos, Podcasts, Playlists, and Shorts with custom meta fields
- **Dynamic Content Loading** - AJAX-powered content loading with search functionality
- **Modern UI/UX** - Clean, professional design with smooth animations
- **SEO Optimized** - Proper heading structure, meta tags, and schema markup ready
- **Performance Focused** - Optimized assets and efficient code structure

## Installation

1. Upload the `wpsimplified` folder to your `wp-content/themes/` directory
2. Activate the theme through the WordPress admin panel
3. Configure the theme through **Appearance > Customize**

## Required Setup

### 1. Create Pages
Create the following pages and assign the corresponding page templates:

- **Videos Page** - Template: `Videos Page`
- **Podcasts Page** - Template: `Podcasts Page`  
- **Contact Page** - Template: `Contact Page`

### 2. Setup Navigation Menus
Go to **Appearance > Menus** and create menus for:
- Primary Menu (header navigation)
- Mobile Menu (mobile navigation)
- Footer Menu (footer links)

### 3. Add Logo
Upload your logo through **Appearance > Customize > Site Identity**

### 4. Configure Social Links
Set up social media URLs in **Appearance > Customize > Social Media Links**:
- YouTube URL
- Twitter URL  
- LinkedIn URL
- GitHub URL
- Website URL

## Content Management

### Adding Videos
1. Go to **Videos > Add New**
2. Add title, description, and featured image
3. Fill in video details:
   - **YouTube URL** - Full YouTube video URL
   - **Duration** - Video length (e.g., "12:34")
   - **Views** - View count (e.g., "1.2K")

### Adding Podcasts
1. Go to **Podcasts > Add New**
2. Add title, description, and featured image
3. Fill in podcast details:
   - **Audio URL** - Direct link to audio file
   - **Duration** - Episode length (e.g., "45:30")
   - **Guest** - Guest name (optional)

### Adding Playlists
1. Go to **Playlists > Add New**
2. Add title, description, and featured image
3. Add custom field `_video_count` for number of videos

## File Structure

```
wpsimplified/
├── style.css                 # Main theme stylesheet
├── functions.php            # Theme functionality
├── index.php               # Homepage template
├── header.php              # Header template
├── footer.php              # Footer template
├── 404.php                 # 404 error page
├── single-video.php        # Single video template
├── page-videos.php         # Videos archive page
├── page-podcasts.php       # Podcasts archive page
├── page-contact.php        # Contact page template
├── assets/
│   └── js/
│       └── theme.js        # Main JavaScript file
└── template-parts/
    ├── hero-section.php    # Homepage hero section
    ├── video-card.php      # Video card component
    ├── podcast-card.php    # Podcast card component
    └── playlist-card.php   # Playlist card component
```

## Customization

### Colors
The theme uses CSS custom properties for easy color customization. Edit the `:root` section in `style.css`:

```css
:root {
  --primary: #04d98b;      /* Main accent color */
  --accent: #037f8c;       /* Secondary accent */
  --background: #1e293b;   /* Main background */
  --foreground: #f8fafc;   /* Text color */
}
```

### Typography
The theme uses two Google Fonts:
- **Baloo 2** - For headings
- **Roboto** - For body text

### JavaScript Functionality
All interactive features are handled in `assets/js/theme.js`:
- Mobile menu toggle
- Smooth scrolling
- Dynamic content loading
- Search functionality
- Infinite scroll (optional)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## Performance

- Optimized images with lazy loading
- Minified CSS and JavaScript
- Efficient database queries
- Caching-friendly structure

## SEO Features

- Clean URL structure
- Proper heading hierarchy
- Meta tag support
- Schema.org markup ready
- Sitemap compatible
- Social media sharing ready

## Support

For theme support and customization:
- Email: hello@wpsimplified.in
- Website: https://wpsimplified.in

## License

This theme is licensed under GPL v2 or later.

## Changelog

### Version 1.0.0
- Initial release
- Complete React to WordPress conversion
- All original functionality preserved
- Mobile-responsive design
- Custom post types and fields
- AJAX-powered dynamic loading
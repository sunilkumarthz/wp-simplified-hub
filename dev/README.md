# WPSimplified WordPress Theme

A modern, responsive WordPress theme converted from the original React application for WPSimplified - WordPress education platform.

## Features

- **Modern Design**: Clean, professional design with WordPress standards
- **Fully Responsive**: Mobile-first approach with beautiful layouts on all devices
- **Custom Post Types**: Videos, Shorts, Podcasts, and Playlists
- **SEO Optimized**: Structured data and semantic HTML
- **Performance Focused**: Optimized CSS and JavaScript
- **Accessibility Ready**: WCAG compliant with proper ARIA labels

## Installation

1. Upload the theme folder to `/wp-content/themes/`
2. Activate the theme in WordPress admin
3. Configure the theme through Appearance > Customize
4. Set up menus in Appearance > Menus
5. Create pages for Videos, Shorts, Podcasts, etc.

## File Structure

```
dev/
├── style.css           # Main stylesheet with theme info
├── index.php           # Homepage template
├── header.php          # Header template
├── footer.php          # Footer template
├── functions.php       # Theme functions and setup
├── single.php          # Single post template
├── page-videos.php     # Videos page template
├── page-shorts.php     # Shorts page template
├── page-sponsors.php   # Sponsors page template
├── js/
│   └── navigation.js   # Theme JavaScript
└── README.md           # This file
```

## Custom Post Types

The theme includes custom post types for:
- **Videos**: WordPress tutorial videos
- **Shorts**: Quick tip videos
- **Podcasts**: Audio content
- **Playlists**: Curated content collections

## Customization

### Colors
Edit CSS variables in `style.css`:
```css
:root {
  --wp-primary: #04d98b;
  --wp-secondary: #334155;
  --wp-accent: #037f8c;
  /* ... */
}
```

### Content
- Update hero content in `index.php`
- Modify page templates as needed
- Add custom fields through `functions.php`

## Requirements

- WordPress 5.0+
- PHP 7.4+
- Modern browsers with CSS Grid support

## Support

For support and documentation, visit [WPSimplified.in](https://wpsimplified.in)

## Author

Created by Sunil Kumar Sharma for WPSimplified platform.
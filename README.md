# YoDev Community Discourse Theme

A modern, Reddit-inspired Discourse theme designed for developer communities.

## Quick Install

1. Go to your Discourse admin panel
2. Navigate to **Customize > Themes**
3. Click **"Install"** → **"From a git repository"**
4. Enter this repository URL: `https://github.com/YOUR_USERNAME/yodev-discourse-theme`
5. Click **"Install"** and then **"Activate"**

## Features

- **Full-width layout** for better content display
- **Custom header search** with enhanced styling
- **Community statistics** widget in sidebar
- **Reddit-style voting** appearance (requires voting plugin)
- **Multilingual support** (Spanish, Portuguese, English)
- **Dark mode toggle** with user preference storage
- **Mobile-responsive** design
- **Modern card-based** topic layout

## Installation

### Method 1: Git Repository (Recommended)

```
https://github.com/YOUR_USERNAME/yodev-discourse-theme
```

### Method 2: Manual Upload

1. Download this repository as ZIP
2. Go to Discourse admin → Customize → Themes
3. Click "Install" → "Upload"
4. Upload the ZIP file

## Configuration

After installation, configure these settings in **Customize > Themes > YoDev Community Theme > Settings**:

- ✅ **Enable full-width layout**
- ✅ **Custom header search**
- ✅ **Show community stats**
- ✅ **Enable dark mode toggle**
- **Custom logo text**: "YoDev" (or your community name)
- **Primary accent color**: `#f97316` (orange)

## Theme Structure

```
├── about.json              # Theme metadata and color schemes
├── settings.yml            # Theme settings configuration
├── common/
│   ├── common.scss        # Shared styles for all devices
│   ├── header.html        # Header customizations and widgets
│   └── footer.html        # Footer enhancements
├── desktop/
│   └── desktop.scss       # Desktop-specific styles
├── mobile/
│   └── mobile.scss        # Mobile-specific styles
├── javascripts/
│   └── theme.js          # Theme JavaScript functionality
├── locales/
│   ├── en.yml            # English translations
│   ├── es.yml            # Spanish translations
│   └── pt.yml            # Portuguese translations
└── assets/
    └── logo.svg          # Theme logo
```

## Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - see LICENSE file for details

## Support

For support and questions:
- Create an issue in this repository
- Join the YoDev community discussions

---

**Note**: Some features like Reddit-style voting require additional Discourse plugins to be fully functional.
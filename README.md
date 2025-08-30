# YoDev Community Discourse Theme

A modern, Reddit-inspired Discourse theme designed for developer communities.

## Quick Install

1. Go to your Discourse admin panel
2. Navigate to **Customize > Themes**
3. Click **"Install"** → **"From a git repository"**
4. Enter this repository URL
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

1. Go to your Discourse admin panel
2. Navigate to Customize > Themes
3. Click "Install" and choose "From a git repository"
4. Enter the repository URL or upload the theme files
5. Activate the theme

## Configuration

The theme includes several customizable settings:

### Layout Settings
- **Enable full-width layout**: Removes container width restrictions
- **Hide topic footer controls**: Hides reply/bookmark/share buttons at bottom of topics
- **Custom header search**: Enables enhanced search bar styling

### Community Features
- **Show community stats**: Displays member count and activity stats
- **Enable Reddit-style voting**: Changes voting button appearance
- **Custom logo text**: Add custom text next to your logo

### Appearance
- **Primary accent color**: Customize the main theme color (default: #f97316)
- **Enable dark mode toggle**: Adds dark/light mode switcher

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
└── locales/
    ├── en.yml            # English translations
    ├── es.yml            # Spanish translations
    └── pt.yml            # Portuguese translations
```

## Customization

### Colors
The theme uses CSS custom properties for easy color customization:
- `--yodev-accent`: Primary accent color
- `--yodev-border`: Border color
- `--yodev-hover`: Hover state background

### Typography
The theme is optimized for the Inter and JetBrains Mono font families but will work with any fonts.

### Layout
- Desktop: Grid-based layout with sidebar
- Mobile: Stacked layout with responsive navigation

## Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on a Discourse instance
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support and questions:
- Create an issue in the repository
- Join the YoDev community discussions
- Contact the theme maintainers

---

**Note**: Some features like Reddit-style voting require additional Discourse plugins to be fully functional. The theme provides the visual styling and basic JavaScript interactions.
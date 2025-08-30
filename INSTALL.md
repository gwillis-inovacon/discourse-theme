# YoDev Community Discourse Theme - Installation Guide

## Installation Methods

### Method 1: Git Repository (Recommended)

1. Go to your Discourse admin panel
2. Navigate to **Customize > Themes**
3. Click **"Install"** button
4. Select **"From a git repository"**
5. Enter the repository URL: `https://github.com/yodev/discourse-theme`
6. Click **"Install"**
7. Once installed, click **"Activate"** to apply the theme

### Method 2: Upload Theme Files

1. Download or clone this repository
2. Create a ZIP file containing all theme files
3. Go to your Discourse admin panel
4. Navigate to **Customize > Themes**
5. Click **"Install"** button
6. Select **"Upload"**
7. Upload the ZIP file
8. Click **"Install"**
9. Once installed, click **"Activate"** to apply the theme

### Method 3: Manual File Upload

1. Go to your Discourse admin panel
2. Navigate to **Customize > Themes**
3. Click **"Create New"**
4. Give your theme a name (e.g., "YoDev Community")
5. Copy and paste the contents of each file into the corresponding sections:
   - `about.json` → About section
   - `settings.yml` → Settings section
   - `common/common.scss` → Common CSS
   - `desktop/desktop.scss` → Desktop CSS
   - `mobile/mobile.scss` → Mobile CSS
   - `common/header.html` → Common Header
   - `common/footer.html` → Common Footer
   - `javascripts/theme.js` → Common JavaScript
   - Locale files → Locales section

## Post-Installation Configuration

### 1. Theme Settings

After installation, configure the theme settings:

1. Go to **Customize > Themes**
2. Click on the **YoDev Community Theme**
3. Click **"Settings"** tab
4. Configure the following options:

#### Layout Settings
- ✅ **Enable full-width layout**: For better content display
- ✅ **Custom header search**: Enhanced search bar styling
- ✅ **Hide topic footer controls**: Cleaner topic appearance

#### Community Features
- ✅ **Show community stats**: Display member statistics
- ⚠️ **Enable Reddit-style voting**: Requires voting plugin
- ✅ **Custom logo text**: Set to "YoDev" or your community name

#### Appearance
- **Primary accent color**: Default `#f97316` (orange)
- ✅ **Enable dark mode toggle**: User preference switching

### 2. Color Scheme

The theme includes a pre-configured "YoDev Orange" color scheme:

1. Go to **Customize > Colors**
2. Select **"YoDev Orange"** scheme
3. Click **"Set as base scheme"**

### 3. Site Settings

For optimal experience, configure these Discourse settings:

#### Basic Setup
- **Site Settings > Basic Setup**
  - Set your site title and description
  - Upload your logo and favicon

#### User Preferences
- **Site Settings > Users**
  - Enable user avatars
  - Configure username requirements

#### Posting
- **Site Settings > Posting**
  - Configure post length limits
  - Enable/disable features as needed

## Required Plugins (Optional)

For full functionality, consider installing these plugins:

### Voting Plugin
For Reddit-style voting functionality:
```
https://github.com/discourse/discourse-voting
```

### Custom Header Links
For additional header navigation:
```
https://github.com/discourse/discourse-custom-header-links
```

## Customization

### Changing Colors

To customize the accent color:

1. Go to theme settings
2. Change **"Primary accent color"** value
3. Save changes

### Custom Logo Text

1. Go to theme settings
2. Update **"Custom logo text"** field
3. Save changes

### Adding Custom CSS

1. Go to **Customize > Themes**
2. Select your theme
3. Click **"Edit CSS/HTML"**
4. Add custom styles to the appropriate sections

## Troubleshooting

### Theme Not Applying
- Ensure the theme is activated
- Check for JavaScript errors in browser console
- Verify all required files are uploaded

### Styling Issues
- Clear browser cache
- Check for conflicting plugins
- Verify CSS syntax in custom sections

### Mobile Display Problems
- Test on actual mobile devices
- Check mobile-specific CSS rules
- Ensure responsive breakpoints are working

## Support

For support and questions:
- Create an issue in the GitHub repository
- Join the YoDev community discussions
- Contact the theme maintainers

## Development

### Local Development

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Run linting: `pnpm run lint`
4. Format code: `pnpm run format`

### Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on a Discourse instance
5. Run `pnpm run validate`
6. Submit a pull request

---

**Note**: This theme is designed for Discourse 3.0+ and may not be compatible with older versions.
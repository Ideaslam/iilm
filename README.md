# IILM Tech Lab Website

A responsive website for IILM (Islam + Science) Tech Lab featuring a gold brand identity and modern design.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Gold Brand Identity**: Elegant golden color scheme representing excellence
- **Arabic & English Support**: Bilingual content with proper RTL support
- **Modern Animations**: Smooth scrolling and entrance animations
- **Firebase Hosting Ready**: Configured for easy deployment

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Fonts**: Cairo (Arabic), Inter (English)
- **Icons**: Font Awesome 6
- **Hosting**: Firebase Hosting

## Project Structure

```
iilm/
├── index.html          # Main HTML file
├── styles.css          # CSS styles with gold theme
├── script.js           # JavaScript functionality
├── firebase.json       # Firebase hosting configuration
├── .firebaserc         # Firebase project configuration
└── README.md           # Project documentation
```

## Color Palette

- **Primary Gold**: #D4AF37
- **Secondary Gold**: #FFD700
- **Dark Gold**: #B8860B
- **Light Gold**: #F5E6A8
- **Dark Green**: #1B4332
- **Cream**: #FAF3E0

## Sections

1. **Hero Section**: Eye-catching introduction with animated geometric patterns
2. **About Section**: Vision, mission, and statistics
3. **Services Section**: Six key services offered
4. **Projects Section**: Showcase of completed projects
5. **Contact Section**: Contact form and information
6. **Footer**: Links and social media

## Firebase Deployment

### Prerequisites

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

### Deployment Steps

1. Initialize Firebase in your project:
   ```bash
   firebase init hosting
   ```

2. Select or create a Firebase project

3. Configure hosting:
   - Public directory: `.` (current directory)
   - Single-page app: `No`
   - Overwrite existing files: `No`

4. Deploy to Firebase:
   ```bash
   firebase deploy
   ```

### Custom Domain (Optional)

After deployment, you can add a custom domain in the Firebase Console:
1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow the verification steps

## Features

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile devices
- Flexible grid layouts
- Optimized images and fonts

### Performance
- Optimized CSS with custom properties
- Debounced scroll events
- Efficient animations
- Minimal external dependencies

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support

### Arabic Language Support
- Right-to-left (RTL) layout
- Arabic fonts (Cairo)
- Proper text direction
- Cultural design elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across devices
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

**IILM Tech Lab**
- Website: [Your Firebase URL]
- Email: info@iilm-techlab.com
- Phone: +966 50 123 4567

---

*Where Faith Meets Innovation, Technology Embraces Islamic Values*

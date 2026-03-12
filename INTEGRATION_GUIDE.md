# Animation Integration Guide for Portfolio

This repository contains a particle animation that displays "Darshan D G" on page load, then fades out to reveal your portfolio content.

## Quick Start

### Option 1: Use the Complete Example

1. Open `index.html` in your browser to see the animation in action
2. The animation will:
   - Show particles forming "Darshan D G"
   - Display for 3 seconds
   - Fade out and reveal the portfolio content

### Option 2: Integrate into Your Existing Portfolio

#### Step 1: Add Dependencies to Your HTML

Add these script tags to your `<head>` section:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"></script>
```

#### Step 2: Add the Intro Overlay

Add this HTML at the very beginning of your `<body>` tag, BEFORE any other content:

```html
<!-- Intro Animation Overlay -->
<div id="intro-overlay">
    <div id="intro-container"></div>
</div>

<!-- Wrap your existing portfolio content -->
<div id="portfolio-content" style="display: none;">
    <!-- Your existing portfolio HTML goes here -->
</div>
```

#### Step 3: Add the CSS

Include `intro-animation.css` in your project or add these styles to your existing stylesheet:

```html
<link rel="stylesheet" href="intro-animation.css">
```

#### Step 4: Add the JavaScript

Include `intro-animation.js` at the end of your `<body>` tag:

```html
<script src="intro-animation.js"></script>
```

## Important Notes

### About Cursor Effects

This integration **preserves your existing cursor effects** from your portfolio. The animation overlay only displays during the intro (first 3 seconds), then your portfolio's normal cursor behavior takes over.

If you want to keep your portfolio's custom cursor effect (like the one in `cursoreffect.js`), simply keep that script loaded in your portfolio HTML. It will automatically work once the intro completes.

## Customization

### Change the Display Name

Edit the text in `intro-animation.js` (around line 94):

```javascript
morphToText('Darshan D G');  // Change this to your name
```

### Adjust Animation Duration

Edit the timeout in `intro-animation.js` (around line 132):

```javascript
setTimeout(() => {
    fadeOutIntro();
}, 3000);  // Change 3000 to desired milliseconds
```

### Particle Colors

Edit the color settings in `createParticles()` function (around line 47):

```javascript
color.setHSL(0.5 + depth * 0.2, 0.7, 0.4 + depth * 0.3);
// Adjust HSL values for different colors
```

## Features

✅ Particle animation that forms text
✅ Smooth morph transition
✅ 3-second display duration
✅ Fade out animation
✅ Responsive design
✅ Works on every page load/refresh
✅ Preserves your existing cursor effects

## Browser Compatibility

- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Mobile browsers: ✅

## Performance

The animation uses:
- Three.js for WebGL rendering
- GSAP for smooth animations
- 12,000 particles (optimized for performance)

## Troubleshooting

**Animation doesn't show:**
- Check browser console for errors
- Ensure Three.js and GSAP CDN links are loading
- Verify your HTML structure matches the guide

**Performance issues:**
- Reduce particle count in `intro-animation.js` (line 3)
- Close other resource-intensive browser tabs

**Text not forming correctly:**
- Ensure Inter font is loaded
- Check text in `morphToText()` function
- Verify canvas rendering

## Files in This Repository

- `index.html` - Complete example demonstrating the integration
- `intro-animation.css` - Styles for the intro overlay
- `intro-animation.js` - Main animation logic
- `name.html` - Original animation demo (optional reference)
- `Style.css` - Original demo styles (optional reference)
- `script.js` - Original demo script (optional reference)

## Support

For issues or questions, please open an issue in this repository.

## License

Free to use for personal portfolios.

# Step-by-Step Integration for DG_Portfolio

This guide shows exactly how to integrate the particle animation into your existing portfolio at https://github.com/Darshan-raja/DG_Portfolio.git

## What Will Happen

1. ✅ Page loads → Black screen with particles
2. ✅ Particles form "Darshan D G" (takes ~2 seconds)
3. ✅ Name stays visible for ~1 second
4. ✅ Everything fades out (takes ~0.8 seconds)
5. ✅ Your portfolio content appears with fade-in
6. ✅ Your existing cursor effect continues to work

**Total animation time: ~3-4 seconds**

## Integration Steps

### Step 1: Backup Your Current Portfolio

Before making changes, save a backup of your current `protfile/index.html`.

### Step 2: Update `protfile/index.html`

#### 2.1: Add Dependencies in `<head>` Section

Find your `<head>` section and add these script tags AFTER the existing font links:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DG_portfolio</title>
    
    <!-- Your existing font links stay here -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- ADD THESE THREE NEW LINES -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"></script>
    <link rel="stylesheet" href="intro-animation.css">
    
    <!-- Your existing style.css stays here -->
    <link rel="stylesheet" href="style.css">
</head>
```

**Note:** For production sites, consider downloading Three.js and GSAP locally or adding CDN integrity hashes for security.

#### 2.2: Add Intro Overlay Structure

Add this code RIGHT AFTER the opening `<body>` tag and BEFORE your `<header>`:

```html
<body>
    <!-- ========== ADD THIS SECTION ========== -->
    <div id="intro-overlay">
        <div id="intro-container"></div>
    </div>
    <!-- ========================================= -->

    <header>
        <!-- Your existing header stays unchanged -->
        <nav class="navbar">
```

#### 2.3: Wrap Portfolio Content

Find the `<main>` tag and add the wrapper:

BEFORE:
```html
<body>
    <header>...</header>
    <main>
        <section id="home" class="section home">
```

AFTER:
```html
<body>
    <!-- Intro overlay here -->
    <div id="intro-overlay">...</div>
    
    <!-- ADD THIS DIV with style -->
    <div id="portfolio-content" style="display: none;">
        <header>...</header>
        <main>
            <section id="home" class="section home">
```

#### 2.4: Close the Wrapper

At the very END of your HTML, before the closing `</body>` tag:

```html
        </section>
    </main>

    <!-- Your existing scripts -->
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <script src="./Services/script.js"></script>
    <script src="./Services/cursoreffect.js"></script>
    
    </div> <!-- CLOSE the portfolio-content wrapper -->
    
    <!-- ADD THIS NEW SCRIPT -->
    <script src="intro-animation.js"></script>
</body>
```

### Step 3: Copy Files to Your Portfolio

Copy these 2 files from this repository to your `protfile/` directory:

1. `intro-animation.css` → `protfile/intro-animation.css`
2. `intro-animation.js` → `protfile/intro-animation.js`

### Step 4: Test

Open your `protfile/index.html` in a browser. You should see:

1. Black screen with particles
2. "Darshan D G" forms from particles
3. Fades out after 3 seconds
4. Your portfolio appears with all features working

## Troubleshooting

### Animation doesn't show
- Check browser console (F12) for errors
- Verify Three.js and GSAP CDN links loaded successfully
- Make sure `intro-animation.css` and `intro-animation.js` are in the correct folder

### Portfolio content never appears
- Check that you added the closing `</div>` for `portfolio-content`
- Verify the `intro-animation.js` file loaded correctly
- Check browser console for JavaScript errors

### Cursor effect not working
- Make sure `cursoreffect.js` is still loaded INSIDE the `portfolio-content` div wrapper
- It should be near the end: `<script src="./Services/cursoreffect.js"></script>`

### Name doesn't display correctly
- Check that the Inter font is loading (it's already in your portfolio)
- Verify the text in `intro-animation.js` line 94 says "Darshan D G"

## File Structure After Integration

```
protfile/
├── index.html (modified)
├── style.css (unchanged)
├── intro-animation.css (NEW)
├── intro-animation.js (NEW)
├── Services/
│   ├── script.js (unchanged)
│   └── cursoreffect.js (unchanged)
└── images/ (unchanged)
```

## Customization Options

### Change Animation Duration

In `intro-animation.js`, find line 132:

```javascript
setTimeout(() => {
    fadeOutIntro();
}, 3000);  // Change 3000 = 3 seconds to any value (in milliseconds)
```

Examples:
- `2000` = 2 seconds
- `4000` = 4 seconds
- `5000` = 5 seconds

### Change Display Name

In `intro-animation.js`, find line 94:

```javascript
morphToText('Darshan D G');  // Change to any text you want
```

### Change Particle Colors

In `intro-animation.js`, find line 47:

```javascript
color.setHSL(0.5 + depth * 0.2, 0.7, 0.4 + depth * 0.3);
```

Try different values:
- Blue: `color.setHSL(0.55, 0.8, 0.5)`
- Purple: `color.setHSL(0.75, 0.7, 0.5)`
- Green: `color.setHSL(0.35, 0.7, 0.5)`

## Complete Example

See `index.html` in this repository for a complete working example.

## Need Help?

If you encounter issues:
1. Check the browser console (F12) for error messages
2. Verify all files are in the correct locations
3. Make sure CDN links are accessible
4. Try the standalone `index.html` first to verify the animation works

## Preview

The animation creates a stunning introduction where 12,000 particles come together to form your name, then smoothly transitions to your portfolio content. Perfect for making a memorable first impression!

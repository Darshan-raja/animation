# Particle Animation for Portfolio

A beautiful particle animation that displays "Darshan D G" on page load, perfect for portfolio introductions!

## 🎥 What It Does

```
Page Load → Particles Form Name → Display (3 sec) → Fade Out → Portfolio Appears
```

1. **Page loads**: Black screen with animated particles
2. **Particles morph**: ~12,000 particles come together to form "Darshan D G"  
3. **Display**: Name stays visible for 3 seconds
4. **Fade out**: Smooth fade transition (~0.8 seconds)
5. **Portfolio appears**: Your full portfolio content fades in

**Total intro time: ~4 seconds**

## 📁 Files

- **`index.html`** - Complete standalone demo
- **`portfolio-example.html`** - Example showing integration into portfolio
- **`intro-animation.js`** - Main animation logic (what you need)
- **`intro-animation.css`** - Styling for overlay (what you need)
- **`PORTFOLIO_INTEGRATION.md`** - Step-by-step guide for your portfolio
- **`INTEGRATION_GUIDE.md`** - General integration guide

## 🚀 Quick Start

### Try the Demo

1. Clone this repo
2. Open `index.html` in your browser
3. Watch the animation!

### Integrate into Your Portfolio

**See [PORTFOLIO_INTEGRATION.md](PORTFOLIO_INTEGRATION.md) for detailed step-by-step instructions.**

Quick summary:
1. Add Three.js and GSAP CDN links
2. Copy `intro-animation.js` and `intro-animation.css` to your portfolio
3. Add `<div id="intro-overlay">` at top of `<body>`
4. Wrap your portfolio content in `<div id="portfolio-content" style="display: none;">`
5. Include `intro-animation.js` at end of body

## ✨ Features

- ✅ 12,000 particle animation
- ✅ Smooth morphing effect
- ✅ 3-second display duration
- ✅ Auto-fade to portfolio
- ✅ Runs on every page load/refresh
- ✅ Fully responsive
- ✅ Preserves your existing cursor effects
- ✅ Easy to customize

## 🎨 Customization

### Change the Name

In `intro-animation.js` line 94:
```javascript
morphToText('Your Name Here');
```

### Change Duration

In `intro-animation.js` line 132:
```javascript
setTimeout(() => {
    fadeOutIntro();
}, 3000);  // milliseconds (3000 = 3 seconds)
```

### Change Colors

In `intro-animation.js` line 47:
```javascript
color.setHSL(0.5, 0.7, 0.5);  // Hue, Saturation, Lightness
```

## 📖 Documentation

- **For your DG_Portfolio**: Read [PORTFOLIO_INTEGRATION.md](PORTFOLIO_INTEGRATION.md)
- **For other projects**: Read [INTEGRATION_GUIDE.md](INTEGRATION_GUIDE.md)

## 🌟 Perfect For

- Portfolio websites
- Personal landing pages
- Creative showcases
- Developer profiles

## 🔧 Requirements

- Three.js (CDN or local)
- GSAP (CDN or local)
- Modern browser with WebGL support

## 📱 Browser Support

✅ Chrome/Edge | ✅ Firefox | ✅ Safari | ✅ Mobile Browsers

## 💡 Tips

- The animation uses WebGL for smooth performance
- 12,000 particles are optimized for modern devices
- Your existing cursor effects will continue to work
- Works on every page load/refresh automatically

## 🎯 Use Cases

This animation is perfect when you want to:
- Make a strong first impression
- Add visual interest to page load
- Showcase your name in a creative way
- Add a modern, tech-savvy feel to your portfolio

## 📄 License

Free to use for personal portfolios.
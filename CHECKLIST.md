# Quick Start Checklist for DG_Portfolio Integration

Use this checklist to integrate the particle animation into your portfolio at https://github.com/Darshan-raja/DG_Portfolio.git

## ✅ Pre-Integration Checklist

- [ ] Clone or download this animation repository
- [ ] Backup your current `protfile/index.html` file
- [ ] Have your portfolio open in a code editor

## ✅ File Preparation

- [ ] Copy `intro-animation.js` to `protfile/intro-animation.js`
- [ ] Copy `intro-animation.css` to `protfile/intro-animation.css`

## ✅ HTML Modifications

### In `<head>` section:

- [ ] Add Three.js CDN: `<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>`
- [ ] Add GSAP CDN: `<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"></script>`
- [ ] Add CSS link: `<link rel="stylesheet" href="intro-animation.css">`

### In `<body>` section:

- [ ] Add intro overlay div RIGHT AFTER opening `<body>` tag:
  ```html
  <div id="intro-overlay">
      <div id="intro-container"></div>
  </div>
  ```

- [ ] Add wrapper div BEFORE `<header>`:
  ```html
  <div id="portfolio-content" style="display: none;">
  ```

- [ ] Close wrapper div AFTER all content, BEFORE animation script:
  ```html
  </div> <!-- Close portfolio-content -->
  ```

- [ ] Add animation script at very end BEFORE closing `</body>`:
  ```html
  <script src="intro-animation.js"></script>
  ```

## ✅ Testing

- [ ] Save all changes
- [ ] Open `protfile/index.html` in a browser
- [ ] Verify particles appear and form "Darshan D G"
- [ ] Wait ~3 seconds and verify fade out occurs
- [ ] Verify portfolio content appears with fade in
- [ ] Check that all portfolio features still work (navigation, buttons, etc.)
- [ ] Test cursor effect is working
- [ ] Refresh page and verify animation plays again

## ✅ Customization (Optional)

- [ ] Change name in `intro-animation.js` line 94 if desired
- [ ] Adjust timing in `intro-animation.js` line 132 if desired
- [ ] Customize particle colors in `intro-animation.js` line 47 if desired

## 🔍 Troubleshooting

If something doesn't work:

- [ ] Check browser console (F12) for errors
- [ ] Verify all files are in correct locations
- [ ] Confirm CDN links are accessible
- [ ] Check that wrapper div is properly closed
- [ ] Try the standalone `index.html` first to verify animation works

## 📁 Final File Structure

```
protfile/
├── index.html (modified - includes animation)
├── style.css (unchanged)
├── intro-animation.css (NEW)
├── intro-animation.js (NEW)
└── Services/
    ├── script.js (unchanged)
    └── cursoreffect.js (unchanged)
```

## 📖 Need More Help?

- Read [PORTFOLIO_INTEGRATION.md](PORTFOLIO_INTEGRATION.md) for detailed step-by-step instructions
- Check [INTEGRATION_GUIDE.md](INTEGRATION_GUIDE.md) for customization options
- Look at `portfolio-example.html` for a complete example

## ✨ Success Criteria

When everything is working correctly:

✅ Animation shows on page load
✅ "Darshan D G" forms from particles
✅ Displays for ~3 seconds
✅ Smoothly fades out
✅ Portfolio content appears
✅ All portfolio features work (navigation, buttons, cursor)
✅ Animation repeats on page refresh

---

**Estimated time to integrate: 15-20 minutes**

Good luck! 🚀

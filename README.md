# Salary Manager

A small client-side expense and income tracker that stores data in localStorage.

Red theme
- I updated the app to use a red accent/theme. The primary accent color is #b91c1c.

PWA / iPhone install notes
1. Host the site over HTTPS (GitHub Pages is the easiest option):
   - Go to your repository Settings → Pages and enable Pages from the main branch ("/ (root)").
   - Wait a few minutes for the site to be published at https://<your-username>.github.io/Salary-manager/

2. Open the published site in Safari on your iPhone (iOS 16):
   - Visit the GitHub Pages URL for the repo.
   - Tap the Share button (the square with an arrow).
   - Choose "Add to Home Screen".
   - Optionally edit the name and tap Add. The app will appear as an icon on your home screen and can be launched like a native app.

Notes on icons and compatibility
- iOS (Safari) does not fully honor the Web App manifest; it prefers a PNG apple-touch-icon. I added SVG icons (icons/icon-192.svg and icons/icon-512.svg) and linked an apple-touch-icon. If the icon doesn't show correctly on iOS, create a PNG apple-touch-icon (e.g., 180x180) and add it to the repo, then update the link in index.html:
  <link rel="apple-touch-icon" href="/icons/apple-touch-icon-180.png">

Service worker
- The repository includes a minimal service worker (sw.js) that caches the app shell. iOS has limited service worker support; offline behavior may vary.

Run locally
- Serve the directory via a static server and open the site in Safari on your iPhone using your machine's local IP (must be HTTPS for full PWA features). For quick testing, GitHub Pages is recommended.

License
- This repository has no license file. Add one to make the project open-source.

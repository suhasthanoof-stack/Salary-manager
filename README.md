# Salary Manager

A small client-side expense and income tracker that stores data in localStorage.

Files added
- index.html — app entry point
- app.js — application logic (already added)
- style.css — basic styling
- sw.js — simple service worker that caches the app shell

Run locally
- Open index.html in a browser, or serve the directory using a static file server (recommended):
  - Python 3: `python -m http.server`
  - Node: `npx http-server`
- The app stores data in your browser's localStorage.

Notes
- The service worker caches the basic files for offline use. If you change files during development, you may need to clear the site data or unregister the service worker in DevTools.

License
- This repository has no license file. Add one if you want to make the project open-source.

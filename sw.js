// Minimal service worker: caches app shell for offline use
const CACHE_NAME = 'salary-manager-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/app.js',
  '/style.css'
];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request)));
});

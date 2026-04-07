// SIU Framework - Service Worker
// Caches all site files for offline use in the field

const CACHE_NAME = 'siu-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/calculator.html',
  '/species.html',
  '/methodology.html',
  '/style.css',
  '/species-data.js',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

// Install: cache all core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate: clean up old caches when a new version deploys
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Fetch: try network first (so you always get updates when online),
// fall back to cache when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Got a fresh response - update the cache
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() => {
        // Offline - serve from cache
        return caches.match(event.request).then(cached => {
          return cached || new Response('Offline - page not cached', {
            status: 503,
            headers: { 'Content-Type': 'text/plain' }
          });
        });
      })
  );
});

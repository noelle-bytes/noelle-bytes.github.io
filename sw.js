const CACHE = 'siu-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/calculator.html',
  '/species.html',
  '/methodology.html',
  '/calculator-legacy.html',
  '/methodology-legacy.html',
  '/siu-v2.js',
  '/style.css',
  '/species-data.js',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});

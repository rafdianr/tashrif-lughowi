const CACHE_NAME = 'tashrif-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/data.js',
  '/manifest.json',
  '/icon.svg'
];

// Install dan simpan ke memori HP
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Ambil dari memori HP jika offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
/* =============================================================
   Service Worker — U.S. Civics Quiz PWA
   Caches all core assets for full offline support
   ============================================================= */

const CACHE_NAME = 'civics-quiz-v4';
const FILES_TO_CACHE = [
  './index.html',
  './manifest.json',
  './sw.js',
  './icon-192.svg',
  './icon-512.svg'
];

/* Install: pre-cache all files */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Pre-caching app shell');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

/* Activate: clean up old caches */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Removing old cache', key);
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

/* Fetch: serve from cache, fall back to network */
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response;
      return fetch(event.request).then(networkResponse => {
        // Cache new requests dynamically
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      });
    }).catch(() => {
      // Offline fallback — return cached index.html
      return caches.match('./index.html');
    })
  );
});

/* =============================================================
   Service Worker - U.S. Citizenship Study Guide PWA
   Caches all core assets for full offline support
   ============================================================= */

const CACHE_NAME = 'civics-quiz-v10';
const FILES_TO_CACHE = [
  './index.html',
  './questions-2025.js',
  './contractors-data.js',
  './manifest.json',
  './sw.js',
  './RGCI_App_Icon.png',
  './apple-touch-icon.png',
  './icon-192.svg',
  './icon-512.svg',
  './american-flag.png',
  './RGCI Logo.svg'
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

/* Allow the page to activate fresh files right away after an update */
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/* Fetch: prefer fresh files, fall back to cache when offline */
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request, { cache: 'reload' }).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put('./index.html', responseClone);
          });
        }
        return networkResponse;
      }).catch(() => caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    fetch(event.request, { cache: 'reload' }).then(networkResponse => {
      if (networkResponse && networkResponse.status === 200) {
        const responseClone = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });
      }
      return networkResponse;
    }).catch(() => {
      return caches.match(event.request).then(response => {
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
      });
    }).catch(() => {
      // Offline fallback — return cached index.html
      return caches.match('./index.html');
    })
  );
});

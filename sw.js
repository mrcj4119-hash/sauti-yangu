const CACHE_NAME = 'sauti-yangu-v7';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.webmanifest',
  './assets/sauti-yangu-voice-campaign.png',
  './assets/sauti-yangu-icon.png',
  './assets/material-icons.svg',
  './assets/ambient-waves.svg',
  './assets/communication-garden.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);
  if (
    event.request.method !== 'GET' ||
    requestUrl.origin !== self.location.origin ||
    requestUrl.pathname.startsWith('/api/')
  ) return;

  if (event.request.mode === 'navigate' || /\.(?:html|css|js)$/.test(requestUrl.pathname)) {
    event.respondWith(
      fetch(event.request).then((response) => {
        if (response.ok) {
          const cachedResponse = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => cache.put(event.request, cachedResponse))
            .catch((error) => console.error('Unable to update the offline cache:', error));
        }
        return response;
      }).catch(async () => {
        const cached = await caches.match(event.request);
        return cached || Response.error();
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});

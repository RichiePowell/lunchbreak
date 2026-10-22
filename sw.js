// Service worker: precaches the built app so the arcade works offline.
// The file list and version below are injected at build time (see vite.config.ts).
const PRECACHE = ["./","./index.html","./assets/index-crNMSq9o.js","./assets/figtree-latin-ext-wght-normal-DCwSJGxG.woff2","./assets/figtree-latin-wght-normal-D_ZTVpCC.woff2","./assets/index-JrBA7Egv.css","./assets/unbounded-cyrillic-wght-normal-C627f1f8.woff2","./assets/unbounded-latin-ext-wght-normal-D6H-S6MW.woff2","./assets/unbounded-latin-wght-normal-D5afBTBx.woff2","./assets/unbounded-vietnamese-wght-normal-rat7GD3o.woff2","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./icons/icon-maskable-512.png","./icons/icon.svg","./manifest.webmanifest","./robots.txt","./words/LICENSE.txt","./words/quill-words.v1.bin"];
const CACHE = "lunchbreak-2a50ccbf26";

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('lunchbreak-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  // Pages: network first so updates arrive, cached shell when offline.
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).catch(() => caches.match('./index.html', { ignoreSearch: true, ignoreVary: true })));
    return;
  }

  // Hashed assets: cache first.
  event.respondWith(
    caches.match(request, { ignoreVary: true }).then(
      (hit) =>
        hit ||
        fetch(request).then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copy));
          }
          return res;
        }),
    ),
  );
});

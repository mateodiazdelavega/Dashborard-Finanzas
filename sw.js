/* Service worker de Finanzas Personales.
   Estrategia: cache-first para el "app shell" (que la app abra sin internet),
   con actualización en segundo plano. Los datos financieros NO se guardan acá:
   viven en localStorage, dentro del propio navegador. */

const CACHE = "finanzas-v1";

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./vendor/chart.umd.js",
  "./icons/icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          // Cachea en runtime lo que sea del mismo origen (por si agregamos archivos).
          if (res && res.ok && new URL(req.url).origin === self.location.origin) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy).catch(() => {}));
          }
          return res;
        })
        .catch(() => {
          // Sin conexión: si es una navegación, servimos la app cacheada.
          if (req.mode === "navigate") return caches.match("./index.html");
        });
    })
  );
});

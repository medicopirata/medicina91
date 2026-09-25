// Service worker mínimo.
//
// No guarda nada: cada petición va a la red tal cual. Está aquí porque Chrome
// solo ofrece "Instalar aplicación" si la página registra un service worker
// con un manejador de fetch; sin él no aparece el botón en el móvil.
//
// Si algún día se quiere modo sin conexión, este es el sitio: habría que
// cachear la plataforma visitada y sus imágenes. Son archivos grandes
// (Histología ~7 MB), así que conviene hacerlo por plataforma y no de golpe.

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)));

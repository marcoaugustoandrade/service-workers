const CACHE_NAME = 'cache-myapp-v02';

const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/style.css',
  '/assets/images/service-workers.jpg',
  '/assets/images/favicon/icon-512x512.png'
];

// Instalando o cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  )
})

// Interceptando as requisições
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response
        }
        return fetch(event.request)
    })
  )
})

self.addEventListener('activate', (event) => {

  event.waitUntil(
  
  )
})

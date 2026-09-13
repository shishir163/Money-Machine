/* Money Machine service worker — offline-first cache */
const CACHE = 'moneymachine-v1';
const ASSETS = [
  './', './index.html', './manifest.json', './icon-192.png', './icon-512.png',
  'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Inter:wght@400;600;800&family=Poppins:wght@500;700;800&family=Roboto:wght@400;700;900&display=swap'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(()=>{})).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy).catch(()=>{}));
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});

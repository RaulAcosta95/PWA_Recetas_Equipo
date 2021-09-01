//install service worker
self.addEventListener('install', evt => {
    console.log('service worker has been installed');
});

//activate event
self.addEventListener('activate', evt =>{
    console.log('service worker has been activated');
});
const staticCacheName='site-static-v';
const assets=[
    '/',
    '/index.html',
    '/js/app.js',
    '/css/styles.css',
    'img/dish.png',
];

self.addEventListener('install', evt => {
    //console.log('service worker installed');
    evt.waitUntil(
      caches.open(staticCacheName).then(cache=> {
        console.log('caching shell assets');
        cache.addAll(assets);
      })
    );
  });
  
  // activate event
  self.addEventListener('activate', evt => {
   evt.waitUntil(
     caches.keys().then(keys=>{
       return Promise.all(keys
        .filter(key=> key !== staticCacheName)
        .map(key => caches.delete(key))
        )
     })
   );

  });
  
  // fetch event
  self.addEventListener('fetch', evt => {
   // console.log('fetch event', evt);
   evt.respondWith(
     caches.match(evt.request).then(cacheRes =>{
       return cacheRes || fetch(evt.request);
     })
     );
    });

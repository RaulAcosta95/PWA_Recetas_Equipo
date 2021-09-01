//install service worker
const staticCacheName='site-static-v';
const dynamicCacheName = 'site-dynamic-v4';
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
  


self.addEventListener('fetch', evt => {

    if(evt.request.url.indexOf('firestore.googleapis.com') === -1){
      evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
          return cacheRes || fetch(evt.request).then(fetchRes => {
            return caches.open(dynamicCacheName).then(cache => {
              cache.put(evt.request.url, fetchRes.clone());
              // check cached items size
              limitCacheSize(dynamicCacheName, 15);
              return fetchRes;
            })
          });
        }).catch(() => {
          if(evt.request.url.indexOf('.html') > -1){
            return caches.match('/pages/fallback.html');
          } 
        })
      );
    }
  });

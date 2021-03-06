//install service worker
const staticCacheName='site-static-v2';
const dynamicCacheName = 'site-dynamic-v2';
const assets=[
    '/',
    '/index.html',
    '/manifest.json',
    '/sw.js',
    '/images/icons/plus.png',
    '/images/icons/icon-144x144.png',
    '/images/404-Error-bro.svg',
    '/images/dish.png',
    '/images/menu.png',
    '/images/delete.png',
    '/images/instagram.png',
    '/images/facebook1.png',
    '/images/correo.png',
    '/images/icon-128x128.ico',
    '/images/icons/icon-128x128.png',
    '/css/styles.css',
    '/pages/fallback.html',
    '/js/app.js',
    '/js/contact.js',
    '/js/About.js',
    '/js/index.js',
    '/js/components/indexComponents.js',
    '/js/db.js',
    '/js/components/menuDesplegableComponent.js',
    '/js/components/app-menu.js',
    '/js/components/formulario-receta.js',
    '/js/components/button-component.js',
    '/js/components/listaRecetasComponent.js',
    '/js/components/recetaComponent.js',
    '/js/components/main-app.js',
    '/js/components/menu-component.js',
    '/node_modules/lit-element/lit-element.js',
    '/node_modules/lit-html/lib/shady-render.js',
    '/node_modules/lit-element/lib/updating-element.js',
    '/node_modules/lit-element/lib/decorators.js',
    '/node_modules/lit-html/lit-html.js',
    '/node_modules/lit-element/lib/css-tag.js',
    '/node_modules/lit-html/lib/dom.js',
    '/node_modules/lit-html/lib/modify-template.js',
    '/node_modules/lit-html/lib/render.js',
    '/node_modules/lit-html/lib/template-factory.js',
    '/node_modules/lit-html/lib/template-instance.js',
    '/node_modules/lit-html/lib/template.js',
    '/node_modules/lit-html/lib/default-template-processor.js',
    '/node_modules/lit-html/lib/template-result.js',
    '/node_modules/lit-html/lib/directive.js',
    '/node_modules/lit-html/lib/parts.js',
    'https://fonts.gstatic.com/s/raleway/v22/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4WjNDrMfIA.woff2 ',
    'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,100&display=swap',
    'https://www.gstatic.com/firebasejs/5.11.0/firebase-app.js',
    'https://www.gstatic.com/firebasejs/5.11.0/firebase-firestore.js',
  ];
  
  // cache size limit function
  const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if(keys.length > size){
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};


self.addEventListener('install', evt => {
   //console.log('service worker installed');
    evt.waitUntil(
      caches.open(staticCacheName).then(cache=> {
        console.log('caching shell assets');
+        cache.addAll(assets);
      })
    );
  });
  
  // activate event
 self.addEventListener('activate', evt => {
   evt.waitUntil(
     caches.keys().then(keys=>{
       return Promise.all(keys
        .filter(key=> key !== staticCacheName && key !==dynamicCacheName)
        .map(key => caches.delete(key))
        )
     })
   );

  });
  


self.addEventListener('fetch', evt => {
// BUG CACH?? MUESTRA SOLO LO QUE EST?? EN DINAMIC CACH??
// ES DECIR, OFFLINE MODE CAUSA CONFLICTO
    if(evt.request.url.indexOf('firestore.googleapis.com') === -1){
      evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
          return cacheRes || fetch(evt.request).then(fetchRes => {
            return caches.open(dynamicCacheName).then(cache => {
              cache.put(evt.request.url, fetchRes.clone());
              // check cached items size
              limitCacheSize(dynamicCacheName, 60);
              return fetchRes;
            })
          });
        }).catch(() => {
          if(evt.request.url.indexOf('.html') > -1){
            return caches.match('./pages/fallback.html');
          } 
        })
      );
    }
  })
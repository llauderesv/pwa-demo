workbox.skipWaiting();
workbox.clientsClaim();

self.addEventListener('push', event => {
  const title = 'Get Started With Workbox';
  const options = {
    body: event.data.text(),
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

// cache js files
workbox.routing.registerRoute(
  /main.js/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'script-files',
  })
);

// cache fonts in other cdn...
workbox.routing.registerRoute(
  new RegExp('https://fonts.googleapis.com/css*'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'fonts.googleapis.com',
  })
);

// cache fonts in other cdn...
workbox.routing.registerRoute(
  new RegExp('https://fonts.gstatic.com/s/nunitosans/v3/*'),
  new workbox.strategies.CacheFirst({
    cacheName: 'fonts.gstatic.com',
  })
);

// cache static files that not everytime is changed
workbox.precaching.precacheAndRoute([
  // { url: '/index.html', revision: '4as2sqwe231' },
  { url: '/vendor.js', revision: '1232' },
  { url: './serviceWorker.js', revisions: 'as23d2' },
]);

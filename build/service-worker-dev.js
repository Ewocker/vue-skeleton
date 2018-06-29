// This service worker file is effectively a 'no-op' that will reset any
// previous service worker registered for the same host:port combination.
// In the production build, this file is replaced with an actual service worker
// file that will precache your site's local assets.
// See https://github.com/facebookincubator/create-react-app/issues/2272#issuecomment-302832432

console.log('Inject service-worker-dev.js')

self.addEventListener('install', () => {
  console.log('installing')
  self.skipWaiting()
})

self.addEventListener('activate', () => {
  console.log('activating')
  self.clients.matchAll({ type: 'window' }).then(windowClients => {
    for (let windowClient of windowClients) {
      // Force open pages to refresh, so that they have a chance to load the
      // fresh navigation response from the local dev server.
      windowClient.navigate(windowClient.url)
    }
  })
})

//
// navigator.serviceWorker.ready.then(serviceWorkerRegistration => {
//   // 检查订阅
//   serviceWorkerRegistration.pushManager.getSubscription()
//     .then(subscription => {
//       // 检查是否已经被订阅
//       if (!subscription) {
//         // 没有
//         axios.get('/getVapidPublicKey')
//             .then(res => {
//               console.log('VapidPublicKey', res.data)
//               const convertedVapidKey = urlBase64ToUint8Array(res.data.vapidPublicKey)
//
//               registration.pushManager.subscribe({
//                 userVisibleOnly: true,
//                 applicationServerKey: convertedVapidKey
//               })
//               return
//             }).catch(err => {
//               throw new Error(err)
//             })
//       } else {
//         console.log('There is subscription')
//         return
//       }
//     })
//     .catch(err => {
//       window.Demo.debug.log('Error during getSubscription()', err)
//     })
// })
//
// function urlBase64ToUint8Array(base64String) {
//   const padding = '='.repeat((4 - base64String.length % 4) % 4)
//   const base64 = (base64String + padding)
//     .replace(/\-/g, '+')
//     .replace(/_/g, '/')
//
//   const rawData = window.atob(base64)
//   const outputArray = new Uint8Array(rawData.length)
//
//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i)
//   }
//   return outputArray
// }
//
//
// self.addEventListener('push', event => {
//   const title = 'Yay a message.'
//   const body = 'We have received a push message.'
//   const icon = '/images/icon-192x192.png'
//   const tag = 'simple-push-demo-notification-tag'
//   const data = {
//     doge: {
//         wow: 'such amaze notification data'
//     }
//   }
//   event.waitUntil(
//     self.registration.showNotification(title, {
//       body: body,
//       icon: icon,
//       tag: tag,
//       data: data
//     })
//   )
// })
//
// self.addEventListener('notificationclick', event => {
//   event.notification.close()
//   if (event.action === 'archive') alert('archive your email')
//   else clients.openWindow('/settings')
// }, false)

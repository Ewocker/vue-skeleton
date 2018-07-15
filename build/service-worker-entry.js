/* eslint no-undef: 0 */

self.addEventListener('push', function(event) {
  try {
    var data = event.data.json()
    event.waitUntil(
      self.registration.showNotification(data.title, {
        body: data.body,
        icon: data.icon,
        tag: data.tag,
        renotify: data.renotify,
        silent: data.silent,
        requireInteraction: data.requireInteraction
      })
    )
  } catch (err) {
    console.log('Notication does not follow standard.')
  }
})

self.addEventListener('notificationclick', function(event) {
  event.notification.close()
  if (event.action === 'archive') alert('archive your email')
  else clients.openWindow('/settings')
}, false)

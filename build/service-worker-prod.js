(function() {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors.
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    )


  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4)
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/')

    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  }

  window.addEventListener('load', function() {
      if ('serviceWorker' in navigator &&
          (window.location.protocol === 'https:' || isLocalhost)) {
        navigator.serviceWorker.register('service-worker.js')
        .then(function(registration) {
          // updatefound is fired if service-worker.js changes.
          registration.onupdatefound = function() {
            // updatefound is also fired the very first time the SW is installed,
            // and there's no need to prompt for a reload at that point.
            // So check here to see if the page is already controlled,
            // i.e. whether there's an existing service worker.
            if (navigator.serviceWorker.controller) {
              // The updatefound event implies that registration.installing is set
              var installingWorker = registration.installing;

              installingWorker.onstatechange = function() {
                switch (installingWorker.state) {
                  case 'installed':
                    // At this point, the old content will have been purged and the
                    // fresh content will have been added to the cache.
                    // It's the perfect time to display a "New content is
                    // available; please refresh." message in the page's interface.
                    break;

                  case 'redundant':
                    throw new Error('The installing ' +
                                    'service worker became redundant.');

                  default:
                    // Ignore
                }
              };
            }
          };
        }).catch(function(e) {
          console.error('Error during service worker registration:', e);
        });

        // ==== Added for push notification ====
        navigator.serviceWorker.ready.then(serviceWorkerRegistration => {
          // check if it is already suscribed (user based)
          serviceWorkerRegistration.pushManager.getSubscription()
            .then(subscription => {
              if (!subscription) {
                // not suscribed, request server for public key and suscribe then tell server to store
                const getVapidPublicKeyRequest = new Request('/getVapidPublicKey', { method: 'GET' });
                fetch(getVapidPublicKeyRequest)
                    .then(res => {
                      if (res.status === 200) return res.json()
                      else throw new Error('Fail getVapidPublicKeyRequest')
                    })
                    .then(data => {
                      // console.log('VapidPublicKey', data)
                      const convertedVapidKey = urlBase64ToUint8Array(data.vapidPublicKey)

                      serviceWorkerRegistration.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: convertedVapidKey
                      }).then(s => {
                        // console.log('subscription', subscription)
                        fetch('/registerSubscription', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                          body: 'subscription=' + JSON.stringify(s)
                        }).then(res => {
                          if (res.status === 200) console.log('registerSubscriptionRequest success')
                          else throw new Error('Fail registerSubscriptionRequest')
                        }).catch(err => console.log('err', err))
                      })

                    }).catch(err => console.log('err', err))

              } else {
                console.log('There is subscription')
              }
            })
            .catch(err => {
              console.log('err', err)
              // window.Demo.debug.log('Error during getSubscription()', err)
            })
        })
      }
  })
})()

const express = require('express')
const path = require('path')
const webpush = require('web-push')

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

const bodyParser = require('body-parser')
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// ==== Web Push ====
let subscription = [] // this should be store per user in DB

// VAPID keys should only be generated only once.
const vapidKeys = webpush.generateVAPIDKeys()

webpush.setGCMAPIKey('AIzaSyAgwFswT_2H6jtGVYconUUdja823YiFsjo');
webpush.setVapidDetails(
  'mailto:chockerlin@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

app.get('/sendMeNotification?', (req, res) => {
  for (let s of subscription) {
    webpush.sendNotification(s, JSON.stringify({
      title: 'Your notification title',
      body: req.query.data, // Your notification message
      icon: 'img/logo.png', // Your notification icon,
      tag: new Date().getTime(), // Same tag will not be shown more than one time, for us it needs to always be unique
      renotify: false, // Default is also false, but in case you need it in the future
      silent: false, // Default is also false, but in case you need it in the future
      requireInteraction: false, // Default is also false, but in case you need it in the future
    }))
      .then(data => res.json(data))
      .catch(err => res.json(err))
  }
  res.send('OK')
})

app.get('/getVapidPublicKey', (req, res) => {
  res.json({ vapidPublicKey: vapidKeys.publicKey })
})

app.post('/registerSubscription', (req, res) => {
  console.log('registerSubscription')
  subscription.push(JSON.parse(req.body.subscription))
  res.status(200).json({ msg: 'subscription success' })
})

// ==================

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/service-worker.js'))
})

app.use('/static', express.static(path.join(__dirname, '/dist/static')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})

// Listen the server
app.listen(port)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console

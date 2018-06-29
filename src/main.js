// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import createVue from '@/createVue'
import Cookies from 'js-cookie'

// Check if token exist here
const token = Cookies.get('api_token')
if (!token) {
  if (process.env.NODE_ENV !== 'production') {
    Cookies.set('api_token', prompt(), {expires: 1 / (24)})
    window.location.href = ''
  } else {
    Cookies.set('api_token', prompt(), {expires: 1 / (24)})
    window.location.href = ''
    // Replace else section with this if it is not deploy through heroku
    // window.location.href = '/login'
  }
} else {
  createVue()
}

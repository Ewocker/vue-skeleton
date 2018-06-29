import Vue from 'vue'
import Toasted from 'vue-toasted' // https://github.com/shakee93/vue-toasted
import '@/styles/toast.css'

const toast = () => {
  // The basic ones with this.$toasted.show('Message')
  Vue.use(Toasted, {
    position: 'top-right',
    duration: 4000
  })

  // register the toast with the custom message
  Vue.toasted.register('error', (payload) => {
    if (!payload.message) return 'Oops.. Something Went Wrong..'
    return payload.message
  }, {
    icon: 'error_outline',
    type: 'error', // This will follow the color defined in vuetify
    className: ['toastContainer'],
    containerClass: [],
    action: { text: 'Close', onClick: (e, toast) => toast.goAway(0) }
  })

  // register the toast with the custom message
  Vue.toasted.register('primary', (payload) => {
    if (!payload.message) return 'Oops.. Something Went Wrong..'
    return payload.message
  }, {
    icon: 'star',
    type: 'primary', // This will follow the color defined in vuetify
    className: ['toastContainer'],
    containerClass: [],
    singleton: true,
    action: { text: 'Close', onClick: (e, toast) => toast.goAway(0) }
  })
}

export default toast

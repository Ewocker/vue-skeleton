// import '@/style/material_icon.css'
// import 'font-awesome/css/font-awesome.min.css'

import Vue from 'vue'
import App from '@/App.vue'
import registerPlugins from '@/plugins/'
import router from '@/router'
import store from '@/store'

const createVue = () => {
  registerPlugins()

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
    created () {
      if (process.env.NODE_ENV === 'development') {
        console.log('Created')
      } else {
        Vue.config.productionTip = false
      }
      // this.$store.dispatch('user/setAsyncUserData')
      // this.$store.dispatch('user/notification/setAsyncNotifications')
    }
  })
}

export default createVue

// import '@/style/material_icon.css'
// import 'font-awesome/css/font-awesome.min.css'

import Vue from 'vue'
import App from '@/App.vue'
import registerPlugins from '@/plugins/'
import router from '@/router'
import store from '@/store'
import VueWait from 'vue-wait'
import { appConfig } from '@/config'

const createVue = () => {
  registerPlugins()

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    store,
    // https://www.npmjs.com/package/vuex-loading
    wait: new VueWait({
      useVuex: true,
      registerComponents: false,
      registerDirective: false,
      vuexModuleName: appConfig.vueWaitModuleName
    }),
    router,
    render: h => h(App),
    created () {
      if (process.env.NODE_ENV === 'development') {
        console.log('Created')
      } else {
        Vue.config.productionTip = false
      }
      this.$store.dispatch('user/actGetUser')
    }
  })
}

export default createVue

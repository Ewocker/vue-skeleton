import { sync } from 'vuex-router-sync'
import router from '@/router'
import store from '@/store'

const vueRouterSync = () => {
  sync(store, router)
}

export default vueRouterSync

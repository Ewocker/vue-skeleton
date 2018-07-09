import { sync } from 'vuex-router-sync'
import router from '@/router'
import store from '@/store'

const register = () => {
  sync(store, router)
}

export default register

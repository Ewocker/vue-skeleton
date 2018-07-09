import Vue from 'vue'
import Vuex from 'vuex'

// Shared Getters Mutations Actions
// import * as getters from '@/store/getters'
// import * as mutations from '@/store/mutations'
// import * as actions from '@/store/actions'
//
// import app from './modules/app'
// import user from './modules/user'
// import { Theme } from '@/style'
// import general from '@/store/modules/app'

Vue.use(Vuex)

const modulesPath = ['./modules/user', './modules/app']
const modules = {
  app: require('./modules/app').default,
  user: require('./modules/user').default
}

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: modules
})

// Vuex hotUpdate does not update state since that is not the purpose for HMR.
// https://github.com/vuejs/vuex/issues/967
if (module.hot) {
  console.log('Vuex Hot Reload')
  // accept actions and mutations as hot modules
  module.hot.accept(modulesPath, () => {
    // swap in the new actions and mutations
    store.hotUpdate({
      modules: modules
    })
  })
}

export default store

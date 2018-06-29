import Vue from 'vue'
import Vuex from 'vuex'

// Shared Getters Mutations Actions
// import * as getters from '@/store/getters'
// import * as mutations from '@/store/mutations'
// import * as actions from '@/store/actions'
//
import app from '@/store/modules/app'
import user from '@/store/modules/user'
// import { Theme } from '@/style'
// import general from '@/store/modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { app, user }
})

export default store

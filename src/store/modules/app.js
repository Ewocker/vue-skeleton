import { isOnLine } from '@/utils/networkUtils'

const state = {
  Mini: false,
  NavDrawer: true,
  BottomNav: true,
  OnLine: isOnLine
}

const getters = {}

const mutations = {
  // Only add custom mut here, basic mut is done.
}

for (let s of Object.keys(state)) {
  mutations[`mut${s}`] = (state, payload) => { state[s] = payload }
  mutations[`mutToggle${s}`] = (state) => { state[s] = !state[s] }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

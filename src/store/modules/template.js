// ===========================
// 9/17/2017 Template by Ewing
// ===========================

const state = {
  template: null
}

const getters = {
  getTemplate (state) {
    return state.template
  }
}

const mutations = {
  // Only add custom mut here, basic mut is done.
}

for (let s of Object.keys(state)) {
  mutations[`mut${s}`] = (state, payload) => { state[s] = payload }
  mutations[`mutToggle${s}`] = (state) => { state[s] = !state[s] }
}

const actions = {
  setTemplate ({commit}, payload) {}
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

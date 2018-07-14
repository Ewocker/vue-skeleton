// ===========================
// 9/17/2017 Template by Ewing
// ===========================

export const state = {
  template: null
}

export const getters = {
  getTemplate (state) {
    return state.template
  }
}

export const mutations = {
  // Only add custom mut here, basic mut is done.
}

for (let s of Object.keys(state)) {
  mutations[`mut${s}`] = (state, payload) => { state[s] = payload }
  if (typeof state[s] === 'boolean') mutations[`mutToggle${s}`] = (state) => { state[s] = !state[s] }
}

export const actions = {
  setTemplate ({commit}, payload) {}
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

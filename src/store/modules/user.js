import { Backend } from '@/services'
import { wait } from '@/utils/storeUtils'

const state = {
  User: null
}

const getters = {}

const mutations = {
  // Only add custom mut here, basic mut is done.
}

for (let s of Object.keys(state)) {
  mutations[`mut${s}`] = (state, payload) => { state[s] = payload }
  if (typeof state[s] === 'boolean') mutations[`mutToggle${s}`] = state => { state[s] = !state[s] }
}

const actions = {
  async actGetUser ({commit, dispatch}) {
    commit('mutUser',
      await wait(dispatch, 'actGetUser', () => Backend.getUser()))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {}
}

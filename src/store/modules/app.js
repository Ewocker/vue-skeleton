import { isOnLine } from '@/utils/networkUtils'
import LayoutType from '@/layouts/LayoutType'
import { routeData } from '@/router'

export const state = {
  Mini: true,
  NavDrawer: true,
  BottomNav: true,
  BarHeight: 60,
  CurrentLayoutType: LayoutType.DASHBOARD,
  OnLine: isOnLine,
  RouteData: routeData
}

export const getters = {}

export const mutations = {
  // Only add custom mut here, basic mut is done.
}

for (let s of Object.keys(state)) {
  mutations[`mut${s}`] = (state, payload) => { state[s] = payload }
  if (typeof state[s] === 'boolean') mutations[`mutToggle${s}`] = (state) => { state[s] = !state[s] }
}

export const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

// This is a mixins provision all store utilities of app module
// Including route
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// This mixin does not work as intended, please do not use yet
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'
import {
  state,
  getters,
  mutations,
  actions
} from '@/store/modules/app'

export function factory() {
  const modulePath = 'app'
  // const states = Reflect.ownKeys(state).map(o => { if (o !== '__ob__') return o })
  // console.log(Object.keys(state))
  // console.log(Object.keys(getters))
  // console.log(Object.keys(mutations))
  // console.log(Object.keys(actions))

  return {
    name: `${modulePath}Module`,
    computed: {
      ...mapState(['route']),
      ...mapState(modulePath, Object.keys(state)),
      ...mapGetters(modulePath, Object.keys(getters))
    },
    methods: {
      ...mapMutations(modulePath, Object.keys(mutations)),
      ...mapActions(modulePath, Object.keys(actions))
    }
  }
}

export default factory()

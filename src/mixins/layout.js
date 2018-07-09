// This is a custom layout mixin

import { mapState } from 'vuex'

export function factory(selectedLayoutType) {
  const computed = {
    ...mapState('app', ['CurrentLayoutType']),
    isCorrectType() {
      switch (this.CurrentLayoutType) {
        case (this.show ? this.CurrentLayoutType : ''):
          return true
        case selectedLayoutType: // current type
          return true
        default:
          return false
      }
    }
  }

  const props = {
    show: {
      type: Boolean,
      default: false
    }
  }

  return {
    name: 'network',
    props,
    computed
  }
}

export default factory()

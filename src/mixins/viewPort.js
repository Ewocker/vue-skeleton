// import { mapGetters } from 'vuex'
import { getViewport, watchViewPortResize } from '@/utils/browserUtils'

export function factory (selected = []) {
  const data = () => {
    return {
      viewPortValue: { x: 1280, y: 800 } // By default arbitrary
    }
  }

  const mounted = function () { // Need the context
    this.viewPortValue = getViewport()
    watchViewPortResize(this.updateViewPort)
  }

  const methods = {
    updateViewPort() { this.viewPortValue = getViewport() }
  }

  const computed = {
    viewPort() { return this.viewPortValue }
  }

  return {
    name: 'viewPort',
    data,
    mounted,
    methods,
    computed
  }
}

export default factory()

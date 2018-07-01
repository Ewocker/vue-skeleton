// import { mapGetters } from 'vuex'
import { watchOnLineUpdate } from '@/utils/networkUtils'

export function factory (selected = []) {
  const computed = {
    onLine() { return watchOnLineUpdate() }
  }

  return {
    name: 'network',
    computed
  }
}

export default factory()

// Requirement for this mixins:
// One have to register the base level DOM with :ref="id"
// id is provided as a required prop
//
// Get value : position
import { getOffsetPosition } from '@/utils/browserUtils'

export function factory () {
  const data = () => {
    return {}
  }

  const mounted = function () {}

  const computed = {
    position() {
      return this.getOffsetPosition(this.$refs[this.id])
    }
  }

  const methods = {
    getOffsetPosition
  }

  return {
    name: 'position',
    data,
    mounted,
    computed,
    methods
  }
}

export default factory()

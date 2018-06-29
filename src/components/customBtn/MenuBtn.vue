<template>
<v-btn icon
       @click="mutNavDrawer(!NavDrawer)"
       class="border">
  <AnimatedIcon :state="state"
                :color="color"
                :background="background"
                :size="10"
                :strokeWidth="stroke" />
</v-btn>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { AnimatedIcon } from '@/components/customIcon'

export default {
  name: 'MenuBtn',
  components: { AnimatedIcon },
  props: {},
  data() {
    return { background: '' }
  },
  mounted() {},
  computed: {
    ...mapState('app', ['NavDrawer']),
    state() { return this.NavDrawer ? 'arrow-left' : 'hamburger' },
    stroke() { return this.NavDrawer ? 4 : 2 },
    color() { return 'white' }
  },
  methods: {
    ...mapMutations('app', ['mutNavDrawer'])
  }
}
</script>

<style lang="sass" scoped>
// .border
//   border: 1px dashed grey
</style>

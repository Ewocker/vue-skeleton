<template>
<v-btn icon
       @click="mutToggleNavDrawer"
       class="border">
  <AnimatedIcon :state="state"
                :color="color"
                :background="background"
                :size="10"
                :strokeWidth="stroke" />
</v-btn>
</template>

<script>
import { mapMutations } from 'vuex'
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
    state() { return this.NavDrawer ? 'arrow-left' : 'hamburger' },
    stroke() { return this.NavDrawer ? 4 : 2 },
    color() { return 'white' }
  },
  methods: {
    ...mapMutations('app', ['mutToggleNavDrawer'])
  }
}
</script>

<style lang="sass" scoped>
// .border
//   border: 1px dashed grey
</style>

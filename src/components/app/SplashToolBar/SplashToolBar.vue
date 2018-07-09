<template>
<section>
  <MobileSplashToolBar v-if="$vuetify.breakpoint.xsOnly" />
  <LaptopSplashToolBar v-else />
</section>
</template>

<script>
import MobileSplashToolBar from './MobileSplashToolBar'
import LaptopSplashToolBar from './LaptopSplashToolBar'

export default {
  name: 'ToolBar',
  components: { MobileSplashToolBar, LaptopSplashToolBar },
  props: {},
  data() { return {} },
  mounted() {},
  computed: {},
  methods: {}
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="sass" scoped>
// .border
//     border: 1px dashed grey
</style>

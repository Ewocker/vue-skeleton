<template>
<v-toolbar app
           fixed
           flat
           :height="BarHeight"
           :scroll-off-screen="scrollOffScreen"
           :scroll-threshold="scrollThreshold"
           dense
           color="main"
           class="white--text border pa-0 ma-0">
  <!-- <MenuBtn /> -->
  <v-toolbar-title>
    Splash  {{ route.name | capitalizeAll }}
  </v-toolbar-title>
  </v-flex>
</v-toolbar>
</template>

<script>
import { mapState } from 'vuex'
import { MenuBtn } from '@/components/customBtn'

export default {
  name: 'LaptopSplashToolBar',
  components: { MenuBtn },
  props: {},
  data() {
    return {
      scrollOffScreen: false,
      scrollThreshold: 100
    }
  },
  mounted() {},
  computed: {
    ...mapState(['route']),
    ...mapState('app', ['BarHeight'])
  },
  methods: {}
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="sass" scoped>
// .border
//     border: 1px dashed grey
</style>

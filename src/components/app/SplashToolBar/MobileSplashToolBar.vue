<template>
<v-toolbar app
           fixed
           flat
           :height="barHeight"
           :scroll-off-screen="scrollOffScreen"
           :scroll-threshold="scrollThreshold"
           dense
           color="primary"
           class="white--text border pa-0 ma-0">
  <v-layout class="border">
    <!-- <v-flex xs3
            class="border">
      <MenuBtn />
    </v-flex> -->
    <v-flex xs9
            class="border text-xs-center pt-2">
      <v-toolbar-title>
        Splash {{ route.name | capitalizeAll }}
      </v-toolbar-title>
    </v-flex>
    <v-flex xs3
            class="border">
    </v-flex>
  </v-layout>
</v-toolbar>
</template>

<script>
import { mapState } from 'vuex'
import { MenuBtn } from '@/components/customBtn'

export default {
  name: 'MobileSplashToolBar',
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
    ...mapState(['barHeight', 'route'])
  },
  methods: {}
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="sass" scoped>
// .border
//     border: 1px dashed grey
</style>

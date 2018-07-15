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
  <!-- <v-toolbar-title> -->
    <v-layout row wrap>
      <v-flex xs2 class="border">
        <!-- <img src="@/assets/logo-music.png"
             alt="Ewing's Logo"
             width="10"
             class="logo"
             @click="$router.push('/')"> -->
      </v-flex>
      <v-flex xs10 class="border text-xs-right font-30"
                   :style="`padding-right: ${BarHeight + 15}px`">
        {{ route.name | capitalizeAll }}
      </v-flex>
    </v-layout>
  <!-- </v-toolbar-title> -->
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
.logo
  transform: scale(15) translate(3.5px, 3px)
  transition: all 0.5s
  cursor: pointer
  opacity: 0.9
  &:hover
    transform: scale(16) translate(3.5px, 3px)
    opacity: 0.7

</style>

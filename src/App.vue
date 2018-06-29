<template>
<v-app toolbar>
  <NavDrawer />
  <span v-if="$vuetify.breakpoint.smAndUp">
    <ToolBar />
  </span>
  <span v-else>
    <MobileToolBar />
  </span>
  <v-content>
    <v-container fluid>
      <router-view/>
    </v-container>
  </v-content>
  <BottomNav />
  <!-- <Footer /> -->
</v-app>
</template>

<script>
import { mapMutations } from 'vuex'
import {
  NavDrawer,
  ToolBar,
  MobileToolBar,
  Footer,
  BottomNav
} from '@/components/app'
import { watchOnLineUpdate } from '@/utils/networkUtils'

export default {
  name: 'App',
  components: {
    NavDrawer,
    ToolBar,
    MobileToolBar,
    Footer,
    BottomNav
  },
  data() { return {} },
  created() {
    watchOnLineUpdate(() => { this.mutOnLine(true) }, () => { this.mutOnLine(false) })
  },
  mounted() {},
  methods: {
    ...mapMutations('app', ['mutOnLine'])
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Quicksand')

// .border
//   border: 1px dashed grey

#app
  font-family: Quicksand, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
</style>

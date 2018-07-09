<template>
<v-app>
  <DashboardLayout />
  <SplashLayout />
</v-app>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import {
  DashboardLayout,
  SplashLayout
} from '@/layouts'
import { watchOnLineUpdate } from '@/utils/networkUtils'

export default {
  name: 'App',
  components: {
    DashboardLayout,
    SplashLayout
  },
  data() { return {} },
  created() {
    watchOnLineUpdate(() => { this.mutOnLine(true) }, () => { this.mutOnLine(false) })
  },
  mounted() {},
  methods: {
    ...mapMutations('app', ['mutOnLine'])
  },
  computed: {
    ...mapState('app', [])
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Quicksand')

// .border
//   border: 1px dashed grey

// Default font
#app
  font-family: Quicksand, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
</style>

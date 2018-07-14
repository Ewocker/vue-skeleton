<template>
<section v-if="isCorrectType">
  <SplashNavDrawer />
  <SplashToolBar />
  <v-content>
    <v-container fluid>
      <router-view/>
    </v-container>
  </v-content>
  <BottomNav />
</section>
</template>

<script>
import {
  SplashNavDrawer,
  SplashToolBar,
  Footer,
  BottomNav
} from '@/components/app'
import { layout } from '@/mixins'
import LayoutType from './LayoutType'
import { mapMutations } from 'vuex'
import { updateTheme, colors } from '@/utils/themeUtils'

const LAYOUT = LayoutType.SPLASH

export default {
  name: 'SplashLayout',
  mixins: [layout(LAYOUT)],
  components: {
    SplashNavDrawer,
    SplashToolBar,
    Footer,
    BottomNav
  },
  data() { return {} },
  mounted() { this.layoutSetupIfSelect() },
  methods: {
    ...mapMutations('app', ['mutBarHeight', 'mutNavDrawer']),
    layoutSetupIfSelect() {
      if (this.CurrentLayoutType === LAYOUT) {
        this.mutBarHeight(70)
        this.mutNavDrawer(true)
        updateTheme(this, {
          primary: colors.blue.darken4
        })
      }
    }
  },
  watch: {
    CurrentLayoutType(val) { this.layoutSetupIfSelect() }
  }
}
</script>

<style lang="sass">
</style>

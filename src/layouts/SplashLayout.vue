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

export default {
  name: 'SplashLayout',
  mixins: [layout(LayoutType.SPLASH)],
  components: {
    SplashNavDrawer,
    SplashToolBar,
    Footer,
    BottomNav
  },
  data() {
    return {}
  }
}
</script>

<style lang="sass">
</style>

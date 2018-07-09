<template>
<section v-if="isCorrectType">
  <NavDrawer />
  <ToolBar />
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
  NavDrawer,
  ToolBar,
  Footer,
  BottomNav
} from '@/components/app'
import { layout } from '@/mixins'
import LayoutType from './LayoutType'

export default {
  name: 'DashboardLayout',
  mixins: [layout(LayoutType.DASHBOARD)],
  components: {
    NavDrawer,
    ToolBar,
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

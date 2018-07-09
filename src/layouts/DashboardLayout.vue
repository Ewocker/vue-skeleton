<template>
<section v-if="isCorrectType">
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
</section>
</template>

<script>
import {
  NavDrawer,
  ToolBar,
  MobileToolBar,
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
    MobileToolBar,
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

<template>
<section v-if="isCorrectType">
  <NavDrawer />
  <ToolBar />
  <v-content>
    <v-container fluid>
      <router-view />
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
import { mapMutations } from 'vuex'
import { useDefaultTheme } from '@/utils/themeUtils'

const LAYOUT = LayoutType.DASHBOARD

export default {
  name: 'DashboardLayout',
  mixins: [layout(LAYOUT)],
  components: {
    NavDrawer,
    ToolBar,
    Footer,
    BottomNav
  },
  data() {
    return {}
  },
  mounted() { this.layoutSetupIfSelect() },
  methods: {
    ...mapMutations('app', ['mutBarHeight']),
    layoutSetupIfSelect() {
      if (this.CurrentLayoutType === LAYOUT) {
        this.mutBarHeight(45)
        useDefaultTheme(this)
      }
    }
  },
  watch: {
    CurrentLayoutType(val) { this.layoutSetupIfSelect() }
  }
}
</script>

<style lang="sass">
// .border
//   border: 1px dashed black
</style>

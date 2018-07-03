<template>
<v-toolbar app
           fixed
           flat
           :height="barHeight"
           :scroll-off-screen="scrollOffScreen"
           dense
           color="primary"
           class="white--text border pa-0 ma-0">
  <MenuBtn />
  <v-toolbar-title>
    {{ route.name | capitalizeAll }}
  </v-toolbar-title>
</v-toolbar>
</template>

<script>
import { mapState } from 'vuex'
import { MenuBtn } from '@/components/customBtn'

export default {
  name: 'ToolBar',
  components: { MenuBtn },
  props: {},
  data() {
    return {
      scrollOffScreen: false
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

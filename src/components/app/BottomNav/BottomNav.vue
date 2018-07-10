<template>
<!-- Adding app attribute will remove clip off -->
<v-bottom-nav shift
              fixed
              v-if="$vuetify.breakpoint.xsOnly"
              :value="BottomNav"
              :active.sync="activeRouteName"
              color="primary">
  <v-btn dark
         v-for="(r, i) in routeData"
         v-if="r.meta.showOnBottomNav"
         :key="i"
         :value="r.name">
    <span>{{r.name | capitalizeAll}}</span>
    <ImageFallbackIcon :size="20"
                       :route="r"
                       :active="false"
                       :imgTranslateY="r.name === route.name ? 0 : 10" />
  </v-btn>
</v-bottom-nav>
</template>

<script>
import { mapState } from 'vuex'
import { routeData } from '@/router'
import { ImageFallbackIcon } from '@/components/customIcon'

export default {
  name: 'BottomNav',
  components: { ImageFallbackIcon },
  props: {},
  data() {
    return {
      routeData,
      activeRouteName: null
    }
  },
  created() {
    this.activeRouteName = this.route.name
  },
  mounted() {},
  beforeDestory() {},
  watch: {
    activeRouteName(val) { this.$router.push({ name: val }) },
    route(route) { this.activeRouteName = route.name }
  },
  computed: {
    ...mapState(['route']),
    ...mapState('app', ['BottomNav'])
  },
  methods: {}
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="sass" scoped>
// .border
//     border: 1px dashed grey
</style>

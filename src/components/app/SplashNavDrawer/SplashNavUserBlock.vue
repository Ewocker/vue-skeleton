<template>
<v-toolbar flat
           :height="BarHeight"
           class="primary"
           dark>
  <v-list dense>
    <v-list-tile>
      <v-list-tile-avatar style="cursor: pointer">
        <v-icon large
                @click="() => { $vuetify.breakpoint.smAndUp ? mutToggleMini() : '' }"
                class="white--text iconLargeHover">{{ route.meta.icon }}</v-icon>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title class="font-20 text-xs-center">
          {{ route.name | capitalize }}
        </v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon
               @click.stop="mutToggleMini">
          <v-icon>chevron_right</v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</v-toolbar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'SplashNavUserBlock',
  props: {},
  data() {
    return {
      mini: false
    }
  },
  created() {},
  mounted() {},
  beforeDestory() {},
  watch: {},
  computed: {
    ...mapState(['route']),
    ...mapState('app', ['Mini', 'BarHeight'])
  },
  methods: {
    ...mapMutations('app', ['mutToggleMini'])
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="sass" scoped>
// .border
//     border: 1px dashed grey
.iconLargeHover
  transform: scale(1.2)
  &:hover
    transform: scale(1.6)
</style>

<template>
<v-navigation-drawer app
                     persistent
                     left
                     dark
                     fixed
                     v-model="drawer"
                     :clipped="$vuetify.breakpoint.smAndUp"
                     :mini-variant="Mini"
                     :width="$vuetify.breakpoint.xsOnly ? 250 : 300"
                     mobile-break-point="1000">
  <!-- <NavUserBlock /> -->
  <v-divider></v-divider>
  <v-list dense>
    <template v-for="(r, i) in routeData">
      <v-list-group v-if="r.children"
                    :key="i"
                    no-action>
        <v-list-tile slot="activator"
                     :to="r">
          <v-list-tile-action>
            <ImageFallbackIcon :size="20"
                               :route="r"
                               :active="r.name === route.name" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{r.name | capitalize}}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-for="(rc, j) in r.children"
                     :to="rc"
                     :key="j">
          <v-list-tile-action>
            <ImageFallbackIcon :size="20"
                               :route="rc"
                               :active="rc.name === route.name" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{rc.name | capitalize}}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
      <v-list-tile v-else
                   :to="r"
                   :key="i"
                   exact>
        <v-list-tile-action>
          <ImageFallbackIcon :size="20"
                             :route="r"
                             :active="r.name === route.name" />
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            {{r.name | capitalize}}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { routeData } from '@/router'
import { ImageFallbackIcon } from '@/components/customIcon'
import SplashNavUserBlock from './SplashNavUserBlock'

export default {
  name: 'SplashNavDrawer',
  components: { ImageFallbackIcon, SplashNavUserBlock },
  props: {},
  data() {
    return {
      drawer: true,
      mini: false,
      routeData
    }
  },
  created() {},
  mounted() {},
  beforeDestory() {},
  watch: {
    NavDrawer(val) { this.drawer = val },
    drawer(val) { this.mutNavDrawer(val) }
  },
  computed: {
    ...mapState(['route']),
    ...mapState('app', ['NavDrawer', 'Mini'])
  },
  methods: {
    ...mapMutations('app', ['mutNavDrawer', 'mutToggleMini'])
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="sass" scoped>
// .border
//     border: 1px dashed grey
</style>

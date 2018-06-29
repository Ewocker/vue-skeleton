<template>
<v-toolbar flat
           height="60">
  <v-list dense>
    <v-list-tile>
      <v-list-tile-avatar style="cursor: pointer">
        <v-icon large
                @click="() => { $vuetify.breakpoint.smAndUp ? mutToggleMini() : '' }"
                class="white--text">account_circle</v-icon>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>
          <span v-if="$wait.is(['actGetUser'])">
            <v-progress-circular indeterminate
                                 :width="1"
                                 :size="16"
                                 color="primary"></v-progress-circular>
          </span>
          <span v-else-if="!User">
            No User is Logged In
          </span>
          <span v-else>
            {{`${User.firstname} ${User.lastname}` | capitalizeAll }}
          </span>
        </v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon
               @click.stop="mutToggleMini">
          <v-icon>chevron_left</v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</v-toolbar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'NavUserBlock',
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
    ...mapState('app', ['Mini']),
    ...mapState('user', ['User'])
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
</style>

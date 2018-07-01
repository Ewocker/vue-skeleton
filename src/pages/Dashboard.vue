<template>
<v-layout row
          wrap>
  <transition name="slide-r2r-10">
    <v-flex xs12 text-xs-right v-if="showBrowserSpec" >
      <div title>
        <span v-if="OnLine"
              class="green--text">OnLine</span>
        <span v-else
              class="red--text">OffLine</span>
      </div>
      <div title class="blue--text">
        {{mobileCheck? 'Mobile' : 'Laptop'}}
      </div>
      <div title>{{viewPort.width}} x {{viewPort.height}}</div>
    </v-flex>
  </transition>
  <v-flex xs12
          text-xs-center
          display-3
          pt-5 class="font-weight-thin">
    Dashboard
    <br>
    <v-btn color="primary"
           @click="mutMobileBottomNav">Toggle BottomNav</v-btn>
           <v-btn color="primary"
                  @click="showBrowserSpec = !showBrowserSpec">Toggle Browser Spec</v-btn>
  </v-flex>
</v-layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { mobileCheck } from '@/utils/browserUtils'
import { viewPort, network } from '@/mixins'

export default {
  mixins: [viewPort, network],
  data() {
    return {
      showBrowserSpec: false
    }
  },
  methods: {
    ...mapMutations('app', ['mutBottomNav']),
    mutMobileBottomNav() {
      if (!this.$vuetify.breakpoint.xsOnly) {
        this.$toasted.global.error({message: 'This is only for mobile view'})
        this.mutBottomNav(!this.BottomNav)
      }
    }
  },
  computed: {
    ...mapState('app', ['BottomNav', 'OnLine']),
    mobileCheck
  }
}
</script>

<style lang="sass">
</style>

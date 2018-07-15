<template>
<v-layout row
          wrap>
  <v-flex xs12
          text-xs-center
          display-3
          class="font-weight-thin border">
          <Carousel />
  </v-flex>
</v-layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { mobileCheck } from '@/utils/browserUtils'
import { viewPort, network } from '@/mixins'
import LayoutType from '@/layouts/LayoutType'
import Carousel from './Carousel'

export default {
  mixins: [viewPort, network],
  components: { Carousel },
  data() {
    return {
      showBrowserSpec: false,
      LayoutType: LayoutType,
      /* eslint-disable no-undef */
      dateString: webpack.dateString
    }
  },
  methods: {
    ...mapMutations('app', ['mutBottomNav', 'mutCurrentLayoutType']),
    mutMobileBottomNav() {
      if (!this.$vuetify.breakpoint.xsOnly) this.$toasted.global.error({message: 'This is only for mobile view'})
      else this.mutBottomNav(!this.BottomNav)
    }
  },
  computed: {
    ...mapState('app', ['BottomNav', 'OnLine', 'CurrentLayoutType']),
    mobileCheck
  }
}
</script>

<style lang="sass" scoped>
// .border
//     border: 1px dashed grey
</style>

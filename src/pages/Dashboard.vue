<template>
<v-layout row
          wrap>
  <v-flex xs12
          text-xs-center
          display-3
          pt-5>
    Dashboard
    <br>
    <v-btn color="primary"
           @click="mutBottomNav(!BottomNav)">Toggle BottomNav</v-btn>
    <span class="title">
      <br>
      <span v-if="OnLine"
            class="green--text">OnLine</span>
      <span v-else
            class="red--text">OffLine</span>
    </span>
  </v-flex>
</v-layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {}
  },
  methods: {
    ...mapMutations('app', ['mutBottomNav'])
  },
  computed: {
    ...mapState('app', ['BottomNav', 'OnLine'])
  }
}
</script>

<style lang="sass">
</style>

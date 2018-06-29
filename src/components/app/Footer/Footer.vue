<template>
<v-footer fixed
          app
          color="primary"
          class="white--text pa-3">
  <v-spacer></v-spacer>
  &copy; {{ new Date().getFullYear() }}
</v-footer>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'Footer',
  data() {
    return {}
  },
  computed: {
    ...mapState([]),
    ...mapGetters([])
  },
  methods: {
    ...mapActions([])
  }
}
</script>

<style lang="sass" scoped>
// .border
//     border: 1px dashed grey
</style>

<template>
<transition name="scale-transition">
  <v-btn fixed
         dark
         fab
         bottom
         right
         color="primary"
         v-if="show"
         @click="click">
    <v-icon large>keyboard_arrow_up</v-icon>
  </v-btn>
</transition>
</template>

<script>
export default {
  components: {},
  props: {
    show: { type: Boolean, default: true }
  },
  data() { return {} },
  computed: {},
  methods: {
    click() {
      this.$vuetify.goTo(0)
    }
  }
}
</script>

<style lang="sass">
</style>

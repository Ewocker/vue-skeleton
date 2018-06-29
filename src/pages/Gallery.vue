<template>
<v-layout row
          wrap>
  <v-flex xs12
          text-xs-center
          display-3
          pt-1>
    Gallery
    <v-card class="white elevation-10 pa-2 mt-4">
      <router-view/>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="sass">
</style>

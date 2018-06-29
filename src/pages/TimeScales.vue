<template>
<v-layout row
          wrap>
  <v-flex xs12
          text-xs-center
          display-3
          pt-1>
    Time Scales
  </v-flex>
  <v-flex xs12
          text-xs-center>
    <v-card class="orange lighten-5 elevation-10 ma-3 hide-overflow">
      <v-card-title class="title">
        Time Scales (domain/range)
      </v-card-title>
      <div class="subheading">
        domain({{domain}}) & range({{range}})
      </div>
      <div v-for="i in 18"
           :key="i">
        Input new Date({{2000 + i}}, 0, 1) => Output {{scaleTime(new Date(2000 + i, 0, 1))}}
      </div>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
import * as d3 from 'd3'

export default {
  data() {
    return {
      scaleTime: null,
      domain: [new Date(2000, 0, 1), new Date(2018, 0, 1)],
      range: [0, 18000]
    }
  },
  created() {
    this.scaleTime = d3.scaleTime()
      .domain([new Date(2000, 0, 1), new Date(2018, 0, 1)])
      .range([0, 18000])
  }
}
</script>

<style lang="sass">
</style>

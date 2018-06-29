<template>
<v-layout row
          wrap>
  <v-flex xs12
          text-xs-center
          display-3
          pt-1>
    Ordinal Scales
  </v-flex>
  <v-flex xs6
          text-xs-center>
    <v-card class="orange lighten-5 elevation-10 ma-3 hide-overflow">
      <v-card-title class="title">
        ScaleOrdinal (domain/range)
      </v-card-title>
      <div class="subheading">
        domain({{domain}}) & range({{range}})
      </div>
      <v-btn @click="number = number + 1"
             class="purple white--text">Add domain</v-btn>
      <div v-for="i in number"
           :key="i">
        Input {{String.fromCharCode(i+64)}} => Output
        <span :style="`background-color: ${scaleOrdinal(String.fromCharCode(i+64))};`">
          {{scaleOrdinal(String.fromCharCode(i+64))}}
        </span>
      </div>
    </v-card>
  </v-flex>
  <v-flex xs6
          text-xs-center>
    <v-card class="orange lighten-5 elevation-10 ma-3 hide-overflow">
      <v-card-title class="title">
        ScaleOrdinal using d3-scale-chromatic
      </v-card-title>
      <a href="https://github.com/d3/d3-scale-chromatic">check here</a>
      <v-btn @click="number2 = number2 + 1"
             class="purple white--text">Add domain</v-btn>
      <div v-for="i in number2"
           :key="i">
        Input {{i}} => Output
        <span :style="`background-color: ${scaleOrdinalChromatic(i)};`">{{scaleOrdinalChromatic(i)}}</span>
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
      scaleOrdinal: null,
      scaleOrdinalChromatic: null,
      domain: ['A', 'B', 'C', 'D', 'E'],
      range: ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE'],
      number: 5,
      number2: 5
    }
  },
  created() {
    this.scaleOrdinal = d3.scaleOrdinal()
      .domain(this.domain)
      .range(this.range)
    this.scaleOrdinalChromatic = d3.scaleOrdinal(d3.schemeSet3)
  }
}
</script>

<style lang="sass">
</style>

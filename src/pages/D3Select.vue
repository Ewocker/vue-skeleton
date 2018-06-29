<template>
<v-layout row
          wrap>
  <v-flex xs12
          text-xs-center
          display-3
          pt-1>
    D3 Select
  </v-flex>
  <v-flex xs12
          text-xs-center>
    <v-card class="orange lighten-5 elevation-10 ma-3 hide-overflow">
      <v-card-title class="title">
        Example 1 (Select/Attr):
      </v-card-title>
      Click on Rect to change color
      <svg width="300"
           height="100"
           id="ex-1-container"
           class="blue-grey lighten-4">
        <rect v-for="i in 3" :id="`ex-1-${i}`"
              :x="40 * i"
              y="30"
              width="20"
              height="20"
              @click="select(1, i)" />
      </svg>
      <v-btn @click="appendCircle">
        Add Circle
      </v-btn>
    </v-card>
  </v-flex>
  <v-flex xs12
          text-xs-center>
    <v-card class="orange lighten-5 elevation-10 ma-3 hide-overflow">
      <v-card-title class="title">
        Example 2 (SelectAll/attr function):
      </v-card-title>
      <div id="ex-2-area"></div>
      <span v-if="ex2step == 0">
        <v-btn @click="AddSVG(); ex2step = ex2step + 1">
          Add Svg tag
        </v-btn>
      </span>
      <span v-if="ex2step == 1">
        See console for logs
        <v-btn @click="AddCircle(); ex2step = ex2step + 1">
          Add multiple circle
        </v-btn>
      </span>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
import * as d3 from 'd3'
import colors from 'vuetify/es5/util/colors'

export default {
  data() {
    return {
      ex_1_selected: [],
      color: colors.indigo.base,
      ex2step: 0,
      ex2data: [25, 20, 10, 12, 15]
    }
  },
  methods: {
    select(ex, i) {
      d3.select(`#ex-${ex}-${i}`)
        .attr('fill', this.color)
    },
    appendCircle() {
      d3.select('#ex-1-container')
        .append('circle')
        .attr('cx', 170)
        .attr('cy', 40)
        .attr('r', 10)
        .attr('fill', this.color)
    },
    AddSVG() {
      d3.select('#ex-2-area')
        .append('svg')
        .attr('width', '90%')
        .attr('height', 100)
        .attr('class', 'blue-grey lighten-4')
        .attr('id', 'ex-2-container')
    },
    AddCircle() {
      d3.select('#ex-2-container')
        .selectAll('circle')
        .data(this.ex2data)
        .enter()
        .append('circle')
        .attr('cx', (data, index) => {
          console.log(`Data: ${data}, Index: ${index}`)
          return index * 85 + 100
        })
        .attr('cy', 40)
        .attr('r', d => d)
        .attr('id', (d, i) => `ex-2-${i}`)
        .attr('fill', 'black')
        .on('click', (d, i) => this.select(2, i))
    }
  },
  mounted() {}
}
</script>

<style lang="sass">
</style>

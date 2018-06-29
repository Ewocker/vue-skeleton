<template>
<v-layout row
          wrap>
  <v-flex xs12
          text-xs-center
          title>
    OMG Particles <br>
    <a href="https://bl.ocks.org/mbostock/1062544">Reference</a>
    <div id="area-1"></div>
  </v-flex>
</v-layout>
</template>

<script>
import * as d3 from 'd3'
import colors from 'vuetify/es5/util/colors'
// import _ from 'lodash'

export default {
  data() {
    return {
      color: colors.indigo.base,
      svg1: null,
      scaleOrdinalChromatic: d3.scaleOrdinal(d3.schemeSet3),
      colorCount: 0
    }
  },
  mounted() {
    this.initSvg1()
  },
  methods: {
    initSvg1() {
      const particle = this.particle

      this.svg1 = d3.select('#area-1')
        .append('svg')
        .attr('width', '100%')
        .attr('height', '400')
        .attr('id', 'svg-1')
        .attr('class', 'indigo lighten-5')
        .on('mousemove', function () { particle(d3.mouse(this)) })
      // .on('mousemove', _.throttle(function () {
      //   try { particle(d3.mouse(this)) } catch (err) {}
      // }, 100))
    },
    particle(m) {
      this.svg1
        .insert('circle')
        .attr('fill', 'none')
        .attr('cx', m[0])
        .attr('cy', m[1])
        .attr('r', 1e-6) // 0.000001
        .style('stroke', this.scaleOrdinalChromatic(this.colorCount++))
        .style('stroke-width', 2.5)
        .style('stroke-opacity', 1)
        .transition()
        .duration(2000)
        .ease(Math.sqrt)
        .attr('r', 100)
        .style('stroke-opacity', 1e-6)
        .remove()
      d3.event.preventDefault()
    }
  }
}
</script>

<style lang="sass">
</style>

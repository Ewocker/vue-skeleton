<template>
<v-layout row
          wrap>
  <v-flex xs12
          text-xs-center
          display-3
          pt-1>
    MarginAndAxes
    <v-layout row
              wrap>
      <v-flex xs12>
        <v-card class="title pa-5">
          <v-card-title>
            Using scaleBand
          </v-card-title>
          <div id="ex-bar1-area"></div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-flex>
</v-layout>
</template>

<script>
import * as d3 from 'd3'
import colors from 'vuetify/es5/util/colors'
import data from '@/data/buildings.json'

export default {
  data() {
    return {
      data: data,
      margin: {
        top: 30,
        bottom: 120,
        left: 60,
        right: 30
      }
    }
  },
  mounted() {
    this.exBar1()
  },
  methods: {
    exBar1() {
      // Add SVG
      const svg = d3.select('#ex-bar1-area').append('svg')
      const height = parseInt(d3.max(this.data.map((d) => d.height)))
      svg.attr('width', '100%')
        .attr('height', height + this.margin.top + this.margin.bottom)
        .attr('class', 'pink lighten-5')
        .attr('id', 'ex-bar1-container')
      const box = svg.node().getBoundingClientRect()
      const width = box.width - this.margin.left - this.margin.right

      // Apply margin
      const g = svg.append('g')
        .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)

      // Scale
      const x = d3.scaleBand()
        .domain(this.data.map(d => d.name))
        .range([0, width])
        .paddingInner(0.4)
        .paddingOuter(0.2)
      const y = d3.scaleLinear()
        .domain([0, height])
        .range([0, height])

      // x Axis
      const xAxisCall = d3.axisBottom(x)
      g.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0, ${height})`)
        .call(xAxisCall)
        .selectAll('text')
        .attr('x', 0)
        .attr('y', 10)
        .attr('transform', 'rotate(-20)')
        .attr('text-anchor', 'end')
      // Add chart description
      g.append('text')
        .attr('class', 'x-axis-label')
        .attr('x', width / 2)
        .attr('y', height + 100)
        .attr('font-size', '30px')
        .attr('text-anchor', 'middle')
        .text('World Tallest Building')

      // y Axis
      const yAxisCall = d3.axisLeft(y)
        .ticks(9)
        .tickFormat(d => d + 'm')
      g.append('g')
        .attr('class', 'y-axis')
        .call(yAxisCall)

      // Add Bar
      g.selectAll('rect')
        .data(this.data)
        .enter()
        .append('rect')
        .attr('x', (d, i) => x(d.name))
        .attr('y', d => height - y(d.height))
        .attr('width', x.bandwidth)
        .attr('height', d => y(d.height))
        .attr('id', (d, i) => `ex-bar1-${i}`)
        .attr('fill', colors.indigo.base)
    }
  }
}
</script>

<style lang="sass">
</style>

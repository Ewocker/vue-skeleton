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
import data from '@/data/human.json'

export default {
  data() {
    return {
      data: data,
      margin: {
        top: 30,
        bottom: 120,
        left: 100,
        right: 30
      },
      x: null,
      xAxis: null,
      xLabel: null,
      y: null,
      yAxis: null,
      yLabel: null,
      height: 0,
      width: 0,
      svg: null,
      chartGroup: null,
      interval: null,
      dataType: 'weight',
      tran: d3.transition().duration(1500).ease(Math.sqrt)
    }
  },
  mounted() {
    this.initBarChart()
  },
  beforeDestroy() {
    this.interval.stop()
  },
  methods: {
    initBarChart() {
      /* ================ Main ================ */
      // Add SVG
      this.svg = d3.select('#ex-bar1-area').append('svg')
      this.height = 400 - this.margin.top - this.margin.bottom
      this.svg.attr('width', '100%')
        .attr('height', this.height + this.margin.top + this.margin.bottom)
        .attr('class', 'pink lighten-5')
        .attr('id', 'ex-bar1-container')
      const box = this.svg.node().getBoundingClientRect()
      this.width = box.width - this.margin.left - this.margin.right

      // Apply margin
      this.chartGroup = this.svg.append('g')
        .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
      // ======================================

      /* ================ Scale ================ */
      // Scale
      this.x = d3.scaleBand()
        .range([0, this.width])
        .paddingInner(0.7)
        .paddingOuter(0.2)
      this.y = d3.scaleLinear()
        .range([0, this.height])
      // ======================================

      /* ================ Axis ================ */
      // Create X Axis
      this.xAxis = this.chartGroup
        .append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0, ${this.height})`)
      // Add chart description
      this.xLabel = this.chartGroup
        .append('text')
        .attr('class', 'x-axis-label')
        .attr('x', this.width / 2)
        .attr('y', this.height + 100)
        .attr('font-size', '30px')
        .attr('text-anchor', 'middle')
        .text('About Your Body')

      // Create Y Axis
      this.yAxis = this.chartGroup
        .append('g')
        .attr('class', 'y-axis')
      // Add chart description
      this.yLabel = this.chartGroup
        .append('text')
        .attr('class', 'y-axis-label')
        .attr('x', -(this.height / 2))
        .attr('y', -60)
        .attr('font-size', '30px')
        .attr('text-anchor', 'middle')
        .attr('transform', 'rotate(-90)')
        .text(this.capitalize(this.dataType))
      // ======================================

      // Update
      this.interval = d3.interval(() => {
        this.updateChart()
      }, 2000)
      this.updateChart()
    },
    updateChart() {
      // console.log('updateChart')
      this.dataType = (this.dataType === 'height') ? 'weight' : 'height'
      const data = (this.dataType === 'height') ? this.data : this.data.slice(1)
      this.maxYValue = parseInt(d3.max(this.data.map((d) => d[this.dataType])))

      // Update Domain
      this.x.domain(data.map(d => d.name))
      this.y.domain([this.maxYValue, 0])

      // Update x Axis
      const xAxisCall = d3.axisBottom(this.x)
      this.xAxis
        .transition(this.tran)
        .call(xAxisCall)
        .selectAll('text')
        .attr('x', 0)
        .attr('y', 10)
        .attr('transform', 'rotate(-20)')
        .attr('text-anchor', 'end')

      // Update y Axis
      const yAxisCall = d3.axisLeft(this.y)
        .ticks(6)
        .tickFormat(d => (this.dataType === 'height') ? d + 'm' : d + 'kg')
      this.yAxis
        .transition(this.tran)
        .call(yAxisCall)
      this.yLabel
        .text(this.capitalize(this.dataType))

      /* JOIN - join new data with old element */
      const rects = this.chartGroup
        .selectAll('circle')
        .data(data, d => d.name)

      /* UPDATE old element present in new data */
      rects.transition(this.tran)
        .attr('cx', (d, i) => this.x(d.name))
        .attr('cy', d => this.y(d[this.dataType]))
        .attr('r', 15)
        .attr('id', (d, i) => `bar1-${i}`)
        .attr('fill', this.dataType === 'height' ? colors.red.base : colors.indigo.base)

      /* ENTER new element present in new data */
      rects.enter()
        .append('circle')
        .attr('cx', (d, i) => this.x(d.name) + this.x.bandwidth())
        .attr('cy', d => this.y(d[this.dataType]))
        .attr('r', 0)
        .attr('id', (d, i) => `bar1-${i}`)
        .attr('fill', this.dataType === 'height' ? colors.indigo.base : colors.red.base)
        .transition(this.tran)
        .attr('fill', this.dataType === 'height' ? colors.red.base : colors.indigo.base)
        // .attr('cy', d => this.y(d[this.dataType]))
        .attr('r', 15)

      /* EXIT old element not present in dew data */
      rects.exit()
        .attr('fill', colors.pink.base)
        .transition(this.tran)
        .attr('r', 0)
        .remove()
    },
    capitalize(s) {
      return s.charAt(0).toUpperCase() + s.slice(1)
    }
  }
}
</script>

<style lang="sass">
</style>

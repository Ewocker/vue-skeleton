<template>
<v-layout row
          wrap>
  <v-flex xs12
          text-xs-center
          display-3
          pt-1>
    Dynamic Scatter Plot with Legend
    <v-layout row
              wrap>
      <v-flex xs12>
        <v-card class="title pa-5 border">
          <div id="area"></div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-flex>
</v-layout>
</template>

<script>
import * as d3 from 'd3'
// import colors from 'vuetify/es5/util/colors'
import data from '@/data/country.json'

export default {
  data() {
    return {
      data: data,
      formattedData: null,
      margin: {
        top: 30,
        bottom: 60,
        left: 100,
        right: 30
      },
      x: null,
      y: null,
      area: null,
      xAxis: null,
      xLabel: null,
      timeLabel: null,
      yAxis: null,
      yLabel: null,
      legendGroup: null,
      height: 0,
      width: 0,
      svg: null,
      chartGroup: null,
      interval: null,
      dataType: 'weight',
      tran: d3.transition().duration(70),
      yearCount: 0,
      continentColor: d3.scaleOrdinal(d3.schemePastel1),
      d3interval: null
    }
  },
  mounted() {
    this.formattedData = this.data.map(function (year) {
      return year['countries'].filter(function (country) {
        var dataExists = (country.income && country.life_exp)
        return dataExists
      }).map(function (country) {
        country.income = +country.income
        country.life_exp = +country.life_exp
        return country
      })
    })
    this.height = 400 - this.margin.top - this.margin.bottom
    this.initChart()
  },
  beforeDestroy() {
    this.d3interval.stop()
  },
  methods: {
    initChart() {
      /* ================ Main ================ */
      // Add SVG
      this.svg = d3
        .select('#area')
        .append('svg')
        .attr('width', '100%')
        .attr('height', this.height + this.margin.top + this.margin.bottom)
        .attr('id', 'area-svg')
      const box = this.svg.node().getBoundingClientRect()
      this.width = box.width - this.margin.left - this.margin.right

      // Apply margin
      this.chartGroup = this.svg.append('g')
        .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
      // ======================================

      /* ================ Scale ================ */
      // Scale
      this.x = d3.scaleLog()
        .base(10)
        .range([0, this.width])
        .domain([142, 150000])
      this.y = d3.scaleLinear()
        .range([this.height, 0])
        .domain([0, 90])
      this.area = d3.scaleLinear()
        .range([25 * Math.PI, 1500 * Math.PI])
        .domain([2000, 1400000000])

      // ======================================

      /* ================ Axis ================ */
      // Create X Axis
      const xAxisCall = d3
        .axisBottom(this.x)
        .tickValues([400, 4000, 40000])
        .tickFormat(d => `$${d}`)
      this.xAxis = this.chartGroup
        .append('g')
        .attr('id', 'x-axis')
        .attr('transform', `translate(0, ${this.height})`)
        .call(xAxisCall)
      // Add chart description
      this.xLabel = this.chartGroup
        .append('text')
        .attr('id', 'x-axis-label')
        .attr('x', this.width / 2)
        .attr('y', this.height + 50)
        .attr('font-size', '20px')
        .attr('text-anchor', 'middle')
        .text('GDP Per Capita ($)')

      // Create Y Axis
      const yAxisCall = d3
        .axisLeft(this.y)
        .tickFormat(d => +d)
      this.yAxis = this.chartGroup
        .append('g')
        .attr('class', 'y-axis')
        .call(yAxisCall)
      // Add chart description
      this.yLabel = this.chartGroup
        .append('text')
        .attr('class', 'y-axis-label')
        .attr('x', -(this.height / 2))
        .attr('y', -60)
        .attr('font-size', '20px')
        .attr('text-anchor', 'middle')
        .attr('transform', 'rotate(-90)')
        .text('Life Expectancy (Years)')

      this.timeLabel = this.chartGroup
        .append('text')
        .attr('y', this.height - 10)
        .attr('x', this.width - 40)
        .attr('font-size', '40px')
        .attr('opacity', '0.4')
        .attr('text-anchor', 'middle')
        .text('1800')
      // ======================================

      /* ================ Legend ================ */
      const continents = ['asia', 'europe', 'america', 'africa']
      this.legendGroup = this.chartGroup
        .append('g')
        .attr('transform', `translate(${this.width - 70}, ${this.height - 120})`)
        // .append('text')
        // .text('123')
      for (let i = 0; i < continents.length; i++) {
        const g = this.legendGroup
          .append('g')
          .attr('transform', `translate(0, ${i * 20})`)

        g.append('rect')
          .attr('height', 10)
          .attr('width', 10)
          .attr('fill', this.continentColor(continents[i]))

        g.append('text')
          .attr('x', 12)
          .attr('y', 10)
          .text(continents[i])
      }
      // ========================================

      this.d3interval = d3.interval(() => {
        this.yearCount = this.yearCount === this.data.length - 1 ? 0 : this.yearCount + 1
        this.update(this.formattedData[this.yearCount])
      }, 50)
      this.update(this.formattedData[0])
    },
    update(data) {
      this.timeLabel.text(this.data[this.yearCount].year)

      // JOIN new data with old elements.
      const circles = this.chartGroup.selectAll('circle').data(data, d => d.country)

      // EXIT old elements not present in new data.
      circles.exit()
        .attr('class', 'exit')
        .remove()

      // ENTER new elements present in new data.
      // try {
      circles.enter()
        .append('circle')
        .attr('class', 'enter')
        .attr('fill', d => this.continentColor(d.continent))
        .merge(circles)
        // .transition(this.tran)
        .attr('cy', d => this.y(d.life_exp))
        .attr('cx', d => this.x(d.income))
        .attr('r', d => Math.sqrt(this.area(d.population) / Math.PI))
      // } catch (err) { }
    }
  }
}
</script>

<style lang="sass">
.border
  // border: dashed 1px grey
</style>

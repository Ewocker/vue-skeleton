<template>
<v-layout row
          wrap>
  <v-flex xs12
          text-xs-center
          display-3
          pt-1>
    Linear & Log Scales
  </v-flex>
  <v-flex xs6
          text-xs-center>
    <v-card class="orange lighten-5 elevation-10 ma-3 hide-overflow">
      <v-card-title class="title">
        ScaleLinear (domain/range)
      </v-card-title>
      <div class="subheading">
        domain({{ex1domain}}) & range({{ex1range}})
      </div>
      <div v-for="i in 5"
           :key="i">
        Input {{i*200}} => Output {{scaleLinear(i*200)}}
      </div>
    </v-card>
  </v-flex>
  <v-flex xs6
          text-xs-center>
    <v-card class="orange lighten-5 elevation-10 ma-3 hide-overflow">
      <v-card-title class="title">
        ScaleLinear.Invert (domain/range)
      </v-card-title>
      <div class="subheading">
        domain({{ex1domain}}) & range({{ex1range}})
      </div>
      <div v-for="i in 5"
           :key="i">
        Input {{scaleLinear(i*200)}} => Output {{scaleLinear.invert(scaleLinear(i*200))}}
      </div>
    </v-card>
  </v-flex>
  <v-flex xs12
          text-xs-center>
    <v-card class="orange lighten-5 elevation-10 ma-3 hide-overflow pa-3">
      <v-card-title class="title">
        Simple Bar Chart
      </v-card-title>
      <v-layout row
                wrap>
        <v-flex xs9>
          <v-slider :max="400"
                    v-model="exBarHeight"
                    type="number"
                    label="Height"></v-slider>
        </v-flex>
        <v-flex xs3>
          <v-text-field v-model="exBarHeight"
                        type="number"></v-text-field>
        </v-flex>
        <v-flex xs9>
          <v-slider :max="320"
                    v-model="exBarWidth"
                    type="number"
                    label="Width"></v-slider>
        </v-flex>
        <v-flex xs3>
          <v-text-field v-model="exBarWidth"
                        type="number"></v-text-field>
        </v-flex>
        <v-flex xs12
                sm6>
          Without ScaleLinear <br>
          <div id="ex-bar1-area"></div>
        </v-flex>
        <v-flex xs12
                sm6>
          With ScaleLinear <br>
          <div id="ex-bar2-area"></div>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
  <v-flex xs6
          text-xs-center>
    <v-card class="orange lighten-5 elevation-10 ma-3 hide-overflow">
      <v-card-title class="title">
        ScaleLog (domain/range)
      </v-card-title>
      <div class="subheading">
        domain({{ex2domain}}) & range({{ex2range}})
      </div>
      <div v-for="i in 5"
           :key="i">
        Input {{i*10000}} => Output {{scaleLog(i*10000)}}
      </div>
    </v-card>
  </v-flex>
  <v-flex xs6
          text-xs-center>
    <v-card class="orange lighten-5 elevation-10 ma-3 hide-overflow">
      <v-card-title class="title">
        ScaleLog.Invert (domain/range)
      </v-card-title>
      <div class="subheading">
        domain({{ex2domain}}) & range({{ex2range}})
      </div>
      <div v-for="i in 5"
           :key="i">
        Input {{scaleLog(i*10000)}} => Output {{scaleLog.invert(scaleLog(i*10000))}}
      </div>
    </v-card>
  </v-flex>
  <v-flex xs12
          text-xs-center>
    <v-card class="orange lighten-5 elevation-10 ma-3 hide-overflow pa-3">
      <v-card-title class="title">
        Log Scale
      </v-card-title>
      <v-layout row
                wrap>
        <v-flex xs9>
          <v-slider :max="400"
                    v-model="exLogHeight"
                    type="number"
                    label="Height"></v-slider>
        </v-flex>
        <v-flex xs3>
          <v-text-field v-model="exLogHeight"
                        type="number"></v-text-field>
        </v-flex>
        <v-flex xs9>
          <v-slider :max="320"
                    v-model="exLogWidth"
                    type="number"
                    label="Width"></v-slider>
        </v-flex>
        <v-flex xs3>
          <v-text-field v-model="exLogWidth"
                        type="number"></v-text-field>
        </v-flex>
        <v-flex xs12
                sm6>
          Without ScaleLog <br>
          <div id="ex-log1-area"></div>
        </v-flex>
        <v-flex xs12
                sm6>
          With ScaleLog <br>
          <div id="ex-log2-area"></div>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
import colors from 'vuetify/es5/util/colors'
import data from '@/data/buildings.json'
import dataLog from '@/data/buildingsLog.json'
import * as d3 from 'd3'

export default {
  data() {
    return {
      color: colors.indigo.base,
      data: data,
      dataLog: dataLog,
      scaleLinear: null,
      scaleLog: null,
      ex1domain: [0, 1000],
      ex2domain: [500, 100000],
      ex1range: [0, 500],
      ex2range: [0, 500],
      exBarHeight: 200,
      exBarWidth: 200,
      exLogHeight: 200,
      exLogWidth: 200
    }
  },
  created() {
    this.scaleLinear = d3.scaleLinear()
      .domain(this.ex1domain)
      .range(this.ex1range)
    this.scaleLog = d3.scaleLog()
      .domain(this.ex2domain)
      .range(this.ex2range)
      .base(10)
  },
  mounted() {
    this.exBar1()
    this.exBar2()
    this.exLog1()
    this.exLog2()
  },
  watch: {
    exBarWidth() {
      const svg1 = d3.select('#ex-bar1-container')
      svg1.attr('width', this.exBarWidth)
      const svg = d3.select('#ex-bar2-container')
      const box = svg.node().getBoundingClientRect()
      const x = d3.scaleLinear()
        .domain([0, 320])
        .range([0, box.width])
      svg.attr('width', this.exBarWidth)
      svg.selectAll('rect')
        .attr('width', x(40))
        .attr('x', (d, i) => x(i * 60 + 20))
    },
    exBarHeight() {
      const svg1 = d3.select('#ex-bar1-container')
      svg1.attr('height', this.exBarHeight)
      const svg = d3.select('#ex-bar2-container')
      const box = svg.node().getBoundingClientRect()
      const y = d3.scaleLinear()
        .domain([0, 450])
        .range([0, box.height])
      svg.attr('height', this.exBarHeight)
      svg.selectAll('rect')
        .attr('height', (d, i) => y(d.height))
    },
    exLogWidth() {
      const svg1 = d3.select('#ex-log1-container')
      svg1.attr('width', this.exLogWidth)
      const svg = d3.select('#ex-log2-container')
      const box = svg.node().getBoundingClientRect()
      const x = d3.scaleLinear()
        .domain([0, 320])
        .range([0, box.width])
      svg.attr('width', this.exLogWidth)
      svg.selectAll('rect')
        .attr('width', x(40))
        .attr('x', (d, i) => x(i * 60 + 20))
    },
    exLogHeight() {
      const svg1 = d3.select('#ex-log1-container')
      svg1.attr('height', this.exLogHeight)
      const svg = d3.select('#ex-log2-container')
      const box = svg.node().getBoundingClientRect()
      const y = d3.scaleLog()
        .domain([500, 100000])
        .range([0, box.height])
        .base(10)
      svg.attr('height', this.exLogHeight)
      svg.selectAll('rect')
        .attr('height', (d, i) => y(d.height))
    }
  },
  methods: {
    exBar1() {
      const svg = d3.select('#ex-bar1-area')
        .append('svg')
        .attr('width', this.exBarWidth)
        .attr('height', this.exBarHeight)
        .attr('class', 'blue-grey lighten-4')
        .attr('id', 'ex-bar1-container')
      svg.selectAll('rect')
        .data(this.data)
        .enter()
        .append('rect')
        .attr('x', (d, i) => i * 60 + 20)
        .attr('y', 20)
        .attr('width', 40)
        .attr('height', d => d.height)
        .attr('id', (d, i) => `ex-bar1-${i}`)
        .attr('fill', 'black')
    },
    exBar2() {
      const svg = d3.select('#ex-bar2-area')
        .append('svg')
        .attr('width', this.exBarWidth)
        .attr('height', this.exBarHeight)
        .attr('class', 'blue-grey lighten-4')
        .attr('id', 'ex-bar2-container')
      const box = svg.node().getBoundingClientRect()
      const y = d3.scaleLinear()
        .domain([0, 450])
        .range([0, box.height])
      const x = d3.scaleLinear()
        .domain([0, 320])
        .range([0, box.width])
      svg.selectAll('rect')
        .data(this.data)
        .enter()
        .append('rect')
        .attr('x', (d, i) => x(i * 60 + 20))
        .attr('y', 20)
        .attr('width', x(40))
        .attr('height', d => y(d.height))
        .attr('id', (d, i) => `ex-bar2-${i}`)
        .attr('fill', 'black')
    },
    exLog1() {
      const svg = d3.select('#ex-log1-area')
        .append('svg')
        .attr('width', this.exLogWidth)
        .attr('height', this.exLogHeight)
        .attr('class', 'blue-grey lighten-4')
        .attr('id', 'ex-log1-container')
      svg.selectAll('rect')
        .data(this.dataLog)
        .enter()
        .append('rect')
        .attr('x', (d, i) => i * 60 + 20)
        .attr('y', 20)
        .attr('width', 40)
        .attr('height', d => d.height)
        .attr('id', (d, i) => `ex-log1-${i}`)
        .attr('fill', 'black')
    },
    exLog2() {
      const svg = d3.select('#ex-log2-area')
        .append('svg')
        .attr('width', this.exLogWidth)
        .attr('height', this.exLogHeight)
        .attr('class', 'blue-grey lighten-4')
        .attr('id', 'ex-log2-container')
      const box = svg.node().getBoundingClientRect()
      const y = d3.scaleLog()
        .domain([500, 100000])
        .range([0, box.height])
        .base(10)
      const x = d3.scaleLinear()
        .domain([0, 320])
        .range([0, box.width])
      svg.selectAll('rect')
        .data(this.dataLog)
        .enter()
        .append('rect')
        .attr('x', (d, i) => x(i * 60 + 20))
        .attr('y', 20)
        .attr('width', x(40))
        .attr('height', d => y(d.height))
        .attr('id', (d, i) => `ex-log2-${i}`)
        .attr('fill', 'black')
    }
  }
}
</script>

<style lang="sass">
</style>

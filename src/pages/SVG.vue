<template>
<v-layout row
          wrap>
  <v-flex xs12
          text-xs-center
          display-3
          pt-1>
    Understanging SVG
  </v-flex>
  <v-flex xs6
          text-xs-center>
    <v-card class="orange lighten-5 elevation-10 ma-3 hide-overflow">
      <v-card-title class="title">
        Rect
      </v-card-title>
      <svg width="300"
           height="150"
           class="blue-grey lighten-4">
        <rect x="10"
              y="10"
              width="50"
              height="50"
              :fill="color"
              stroke="black"
              stroke-width="5px" />
      </svg>
    </v-card>
  </v-flex>
  <v-flex xs6
          text-xs-center>
    <v-card class="orange lighten-5 elevation-10 ma-3 hide-overflow">
      <v-card-title class="title">
        Circle
      </v-card-title>
      <svg width="300"
           height="150"
           class="blue-grey lighten-4">
        <circle cx="30"
              cy="30"
              r="20"
              :fill="color"
              stroke="black"
              stroke-width="5px" />
      </svg>
    </v-card>
  </v-flex>
  <v-flex xs6
          text-xs-center>
    <v-card class="orange lighten-5 elevation-10 ma-3 hide-overflow">
      <v-card-title class="title">
        Ellipse
      </v-card-title>
      <svg width="300"
           height="150"
           class="blue-grey lighten-4">
        <ellipse cx="80"
              cy="30"
              rx="50"
              ry="20"
              :fill="color"
              stroke="black"
              stroke-width="5px" />
      </svg>
    </v-card>
  </v-flex>
  <v-flex xs6
          text-xs-center>
    <v-card class="orange lighten-5 elevation-10 ma-3 hide-overflow">
      <v-card-title class="title">
        Line
      </v-card-title>
      <svg width="300"
           height="150"
           class="blue-grey lighten-4">
        <line x1="10"
              y1="10"
              x2="70"
              y2="30"
              :stroke="color"
              stroke-width="5px" />
      </svg>
    </v-card>
  </v-flex>
  <v-flex xs6
          text-xs-center>
    <v-card class="orange lighten-5 elevation-10 ma-3 hide-overflow">
      <v-card-title class="title">
        Text
      </v-card-title>
      <svg width="300"
           height="150"
           class="blue-grey lighten-4">
        <text x="60"
              y="60"
              font-size="20px"
              :fill="color"
              text-anchor="middle">
              Text Here
        </text>
      </svg>
    </v-card>
  </v-flex>
  <v-flex xs6
          text-xs-center>
    <v-card class="orange lighten-5 elevation-10 ma-3 hide-overflow">
      <v-card-title class="title">
        Path
      </v-card-title>
      <svg width="300"
           height="150"
           class="blue-grey lighten-4">
        <path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
              :stroke="color"
              stroke-width="5px"
              fill="grey" />
      </svg>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
import colors from 'vuetify/es5/util/colors'

export default {
  data() {
    return {
      color: colors.indigo.base
    }
  }
}
</script>

<style lang="sass">
.hide-overflow
  overflow: hidden
</style>

<template>
<section>
  <v-layout row wrap text-xs-left>
    <v-flex xs12 class="border">
      <v-layout row wrap>
        <v-flex lg3 md6 xs12
                class="border text-xs-center">
          <img src="@/assets/logo-music.png"
               alt="Ewing's Logo"
               width="240"
               class="border"
               @click="$router.push('/')">
        </v-flex>
        <v-flex lg3 md6 xs12
                class="border">
          Section 1
        </v-flex>
        <v-flex lg6 xs12
                class="border">
          Section 2
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 md6 order-xs2 order-sm1
            class="border">
      <v-card class="elevation-10"
              height="400"
              :width="$vuetify.breakpoint.smAndDown ? '100%' : '100%'">
        <swiper :options="swiperOption"
                class="carousel blue lighten-5">
          <swiper-slide
            v-for="i in 5"
            :style="{
              backgroundImage: `url(${require('@/assets/me-' + i + '.jpg')})`,
              'background-position': 'center',
              'background-size': 'auto 100%'
            }">
          </swiper-slide>
          <!-- <swiper-slide
            :style="{
              backgroundImage: `url(${require('@/assets/me-2.jpg')})`,
              'background-position': 'top',
              'background-size': 'auto 100%'
            }">
          </swiper-slide> -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div> -->
        </swiper>
      </v-card>
    </v-flex>
    <v-flex xs12 md6 order-xs1 order-sm2
            class="border">
      Section 3
    </v-flex>
  </v-layout>
</section>
</template>

<script>
import { mapState } from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Carousel',
  components: { swiper, swiperSlide },
  props: {},
  data() {
    return {
      swiperOption: {
        effect: 'fade',
        fadeEffect: { crossFade: true },
        speed: 500,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination'
        },
        simulateTouch: false
      }
    }
  },
  mounted() {},
  computed: {
    ...mapState(['barHeight'])
  },
  watch: {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
// images = '~/static/carousel-1.jpg' '~/static/carousel-2.jpg' '~/static/carousel-3.jpg'
// for $i in 1..3
//   .slide-{$i}
//     height: 100vh
//     width: 100vw
//     background-position: center
//     background-repeat: no-repeat
//     background-size: cover
//
// .my-swiper
//   z-index: -2
//
// .spacing-wide
//   letter-spacing: 4px !important

.carousel
  width: 100%
  height: 100%
.border
  border: dashed 1px black
</style>

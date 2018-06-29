<!-- This component has to be used with routerData -->
<!-- Example. -->
<!-- route object should contain meta attritbute that have icon, image, and imageActive  -->

<template>
<section v-if="route.meta.icon.length > 0">
  <v-icon v-html="route.meta.icon"></v-icon>
</section>
<section v-else>
  <img :src="require(`@/assets/${active ? route.meta.imageActive : route.meta.image}`)"
       :width="`${size}px`"
       :alt="`${route.name} Icon`"
       :style="`transform: translate(${imgTranslateX}px, ${imgTranslateY}px)`"
       class="transitionSmooth">
</section>
</template>

<script>
export default {
  components: {},
  props: {
    size: { type: Number, default: 20 },
    route: { type: Object, require: true },
    active: { type: Boolean, default: false },
    imgTranslateX: { type: Number, default: 0 },
    imgTranslateY: { type: Number, default: 0 }
  },
  data() { return {} },
  computed: {},
  methods: {}
}
</script>

<style lang="sass">
.transitionSmooth
  transition: 0.2s ease
</style>

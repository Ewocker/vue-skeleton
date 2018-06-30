<!-- =========================== -->
<!-- 9/17/2017 Template by Ewing -->
<!-- =========================== -->

<template>
<section>
  Template
</section>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'Template',
  components: {},
  props: {
    templateProp: {
      type: String,
      default: 'Template'
    }
  },
  data() { return {} },
  created() {},
  mounted() {},
  beforeDestory() {},
  watch: {},
  computed: {
    ...mapState([]),
    ...mapGetters([])
  },
  methods: {
    ...mapActions([])
  }
}
</script>

<style lang="sass" scoped>
// .border
//     border: 1px dashed grey
</style>

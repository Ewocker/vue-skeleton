import Vue from 'vue'
import Vue2Filters from 'vue2-filters'

const filters = () => {
  Vue.use(Vue2Filters)
  Vue.filter('capitalizeAll', s => (s ? s.replace(/\b\w/g, l => l.toUpperCase()) : ''))
}

export default filters

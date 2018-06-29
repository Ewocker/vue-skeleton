import vuetify from '@/plugins/vuetify'
import filters from '@/plugins/filters'
import toast from '@/plugins/toast'
import vueRouterSync from '@/plugins/vueRouterSync'
import '@/plugins/mdi' // Only Css

const registerPlugins = () => {
  vuetify()
  filters()
  toast()
  vueRouterSync()
}

export default registerPlugins

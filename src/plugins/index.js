import vuetify from '@/plugins/vuetify'
import filters from '@/plugins/filters'
import toast from '@/plugins/toast'
import vueRouterSync from '@/plugins/vueRouterSync'
import vueWait from '@/plugins/vueWait'
import '@/plugins/mdi' // Only Css

const registerPlugins = () => {
  vuetify()
  filters()
  toast()
  vueRouterSync()
  vueWait()
}

export default registerPlugins

import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store'
import {
  Dashboard,
  SVG,
  D3Select,
  LinearAndLogScales,
  TimeScales,
  TemplatePage,
  OrdinalScales,
  MarginAndAxes,
  DynamicUpdate,
  Gallery,
  ScatterPlot,
  DynamicScatterPlot
} from '@/pages'

import {
  OMGParticles,
  GalleryTemplatePage
} from '@/components/gallerys'

Vue.use(Router)

export const routeData = [{
  meta: {
    icon: 'apps', // If icon is not empty, use icon instead of image
    image: '',
    imageActive: '',
    showOnBottomNav: true, // Shold show as a option on bottom navigation
    showBottomNav: true // When showing this page, should show bottom navigation
  },
  // If icon is empty, use image
  // image should have two version, one for active
  // ===== For router =====
  name: 'dashboard',
  path: '/',
  component: Dashboard
}, {
  meta: {
    icon: 'settings',
    image: '',
    imageActive: '',
    showOnBottomNav: false,
    showBottomNav: true
  },
  name: 'SVG',
  path: '/svg',
  component: SVG
}, {
  meta: {
    icon: 'settings',
    image: '',
    imageActive: '',
    showOnBottomNav: false,
    showBottomNav: true
  },
  name: 'D3 Select',
  path: '/d3_select',
  component: D3Select
}, {
  meta: {
    icon: 'settings',
    image: '',
    imageActive: '',
    showOnBottomNav: false,
    showBottomNav: true
  },
  name: 'Linear And Log Scales',
  path: '/linear_and_log_scales',
  component: LinearAndLogScales
}, {
  meta: {
    icon: 'settings',
    image: '',
    imageActive: '',
    showOnBottomNav: false,
    showBottomNav: true
  },
  name: 'Time Scales',
  path: '/time_scales',
  component: TimeScales
}, {
  meta: {
    icon: 'settings',
    image: '',
    imageActive: '',
    showOnBottomNav: false,
    showBottomNav: true
  },
  name: 'Ordinal Scales',
  path: '/ordinal_scales',
  component: OrdinalScales
}, {
  meta: {
    icon: 'settings',
    image: '',
    imageActive: '',
    showOnBottomNav: false,
    showBottomNav: true
  },
  name: 'Margin && Axes',
  path: '/margin_axes',
  component: MarginAndAxes
}, {
  meta: {
    icon: 'settings',
    image: '',
    imageActive: '',
    showOnBottomNav: false,
    showBottomNav: true
  },
  name: 'Dynamic Update',
  path: '/dynamic_update',
  component: DynamicUpdate
}, {
  meta: {
    icon: 'settings',
    image: '',
    imageActive: '',
    showOnBottomNav: false,
    showBottomNav: true
  },
  name: 'Scatter Plot',
  path: '/scatter_plot',
  component: ScatterPlot
}, {
  meta: {
    icon: 'settings',
    image: '',
    imageActive: '',
    showOnBottomNav: false,
    showBottomNav: true
  },
  name: 'Dynamic Scatter Plot',
  path: '/dynamic_scatter_plot',
  component: DynamicScatterPlot
}, {
  meta: {
    icon: 'settings',
    image: '',
    imageActive: '',
    showOnBottomNav: false,
    showBottomNav: true
  },
  name: 'gallery',
  path: '/gallery',
  component: Gallery,
  children: [{
    meta: {
      icon: 'settings',
      image: '',
      imageActive: '',
      showOnBottomNav: false,
      showBottomNav: true
    },
    name: 'OMG Particles',
    path: 'gallery1',
    component: OMGParticles
  }, {
    meta: {
      icon: 'settings',
      image: '',
      imageActive: '',
      showOnBottomNav: false,
      showBottomNav: true
    },
    name: 'gallery2',
    path: 'gallery2',
    component: GalleryTemplatePage
  }]
}, {
  meta: {
    icon: 'settings',
    image: '',
    imageActive: '',
    showOnBottomNav: false,
    showBottomNav: true
  },
  name: 'template_page',
  path: '/template_page',
  component: TemplatePage
}]

const router = new Router({
  routes: routeData
})

router.beforeEach((to, from, next) => {
  // If the target route should show bottom navigation
  Store.commit('app/mutBottomNav', to.meta.showBottomNav)
  next()
})

export default router

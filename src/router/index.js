import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store'
import {
  Dashboard,
  TemplatePage
} from '@/pages'

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
  name: 'List Route',
  path: '/list_route',
  component: TemplatePage,
  children: [ {
    meta: {
      icon: 'settings',
      image: '',
      imageActive: '',
      showOnBottomNav: false,
      showBottomNav: true
    },
    name: 'Sub Route 1',
    path: 'sub_route_1',
    component: TemplatePage
  }, {
    meta: {
      icon: 'settings',
      image: '',
      imageActive: '',
      showOnBottomNav: false,
      showBottomNav: true
    },
    name: 'Sub Route 2',
    path: 'sub_route_2',
    component: TemplatePage
  }]
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

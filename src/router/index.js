import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store'
import {
  Home,
  TemplatePage
} from '@/pages'

Vue.use(Router)

export const routeData = [{
  meta: {
    icon: 'face', // If icon is not empty, use icon instead of image
    image: '',
    imageActive: '',
    showOnBottomNav: true, // Shold show as a option on bottom navigation
    showBottomNav: true // When showing this page, should show bottom navigation
  },
  // If icon is empty, use image
  // image should have two version, one for active
  // ===== For router =====
  name: 'home',
  path: '/',
  component: Home
}, {
  meta: {
    icon: 'dashboard',
    image: '',
    imageActive: '',
    showOnBottomNav: false,
    showBottomNav: true
  },
  name: 'works',
  path: '/works',
  component: TemplatePage,
  children: [ {
    meta: {
      icon: 'looks_one',
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
      icon: 'looks_two',
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

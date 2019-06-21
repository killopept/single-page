import Vue from 'vue'
import Router from 'vue-router'

import Home from './home/index.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/vue/suppage',
      component: () => import(/* webpackChunkName: "vue/suppage" */ './vue/suppage.vue')
    },
    {
      path: '/vue/subpage',
      component: () => import(/* webpackChunkName: "vue/subpage" */ './vue/subpage.vue')
    }
  ]
})

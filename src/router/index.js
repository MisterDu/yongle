import Vue from 'vue'
import VueRouter from 'vue-router'

import centerRouter from '@/router/routes/center.js'



Vue.use(VueRouter)
import categoryRouter from './routes/category'

const routes = [

  ...centerRouter

    categoryRouter

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

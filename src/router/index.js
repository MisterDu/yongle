import Vue from 'vue'
import VueRouter from 'vue-router'

import centerRouter from '@/router/routes/center.js'



Vue.use(VueRouter)
import categoryRouter from './routes/category'
import detailRouter from './routes/detail'
import NOtFount from '@/views/Not/Notfount'
import Home from './routes/home'

const routes = [

    {
        path: '/',
        redirect: '/home/recommend'
    },
    Home,

    categoryRouter,
    detailRouter,

    
    {
        path: '*',
        component: NOtFount
    },


  ...centerRouter

    


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

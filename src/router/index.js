import Vue from 'vue'
import VueRouter from 'vue-router'
import NOtFount from '@/views/Not/Notfount'
import Home from './routes/home'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home/recommend'
    },
    Home,
    {
        path: '*',
        component: NOtFount
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

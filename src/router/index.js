import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import('../views/home/home')
const Grid = ()=> import('../views/grid/grid')
const Cart = ()=> import('../views/cart/cart')
const MyInfo = ()=> import('../views/myinfo/myinfo')

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/home'
    },{
        path: '/home',
        component: Home
    },{
        path: '/grid',
        component: Grid
    },{
        path: '/cart',
        component: Cart
    },{
        path: '/myinfo',
        component: MyInfo
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
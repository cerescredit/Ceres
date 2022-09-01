import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/Oracle',
  name: 'Oracle',
  component: () => import('../views/components/Oracle.vue')
},
{
  path: '/details',
  name: 'details',
  component: () => import('../views/components/details.vue')
},
{
  path: '/did',
  name: 'did',
  component: () => import('../views/components/did.vue')
},
{
  path: '/sdk',
  name: 'sdk',
  component: () => import('../views/components/Ysdk.vue')
},
]

const router = new VueRouter({
  routes
})

export default router
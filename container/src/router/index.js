import Vue from 'vue'
import VueRouter from 'vue-router'
import Container from '@/pages/container.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Container',
    component: Container,
    children:[
     
    ]
  },
  {
    path: '*',
    name: 'Container',
    component: Container,
    children:[
     
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/components/layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Permission',
    component: layout,
    children:[
      {
        path: '/test1',
        name: 'test1',
        component: ()=>import('@/components/test1.vue'),
      },
      {
        path: '/test2',
        name: 'test2',
        component: ()=>import('@/components/test2.vue'),
      },
    ]
  },
]


export default routes
import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    children:[
      {
        path: '/test1',
        name: 'test1',
        component: ()=>import('@/components/test1.vue'),
      },
    ]
  },
]


export default routes
import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/Pos'
import Login from '@/components/page/login'
import Statistics from '@/components/page/statistics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/statistics',
      name:'statistics',
      component:Statistics
    }
  ]
})

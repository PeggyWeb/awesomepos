import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/Pos'
import Login from '@/components/page/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos,
      showLeft:'true'
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      showLeft:'false'
    }
  ]
})

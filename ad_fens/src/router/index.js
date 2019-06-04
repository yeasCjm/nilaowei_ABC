import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import cus_main from '@/components/customer/cus_main'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path:"/",
      redirect:"/login"
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login,

    },
    {
      path: '/cus_main',
      name: 'cus_main',
      component: cus_main
    },
  ]
})

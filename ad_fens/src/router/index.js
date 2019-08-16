import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import taskList from '@/components/task/basicTask/taskList'
import phone from '@/components/task/basicTask/phone'
import account from '@/components/task/basicTask/account'

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

    }, {
      path: '/taskList',
      name: 'taskList',
      component: taskList,

    },
     {
      path: '/phone',
      name: 'phone',
      component: phone,

    },
     {
      path: '/account',
      name: 'account',
      component: account,

    },
   
  ]
})

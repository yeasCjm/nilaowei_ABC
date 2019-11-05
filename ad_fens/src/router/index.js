import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import taskList from '@/components/task/basicTask/taskList'
import phone from '@/components/task/basicTask/phone'
import account from '@/components/task/basicTask/account'
import dispatchTask from '@/components/task/dispatchTask/dispatchTask'
import Maintenance from '@/components/task/dispatchTask/Maintenance'
import douyinApp from '@/components/task/douyin/douyinApp'
import douyin from '@/components/task/douyin/douyin'
import douyinGetmsg from '@/components/task/douyin/douyinGetmsg'


Vue.use(Router);


export default new Router({
  mode:"history",
  routes: [
    {
      path:"",
      redirect:"/login"
    },
    {
      path: '/home',
      name: 'home',
      meta: { 'titname': "首页",requireAuth:true },
      component: home
    },
    {
      path: '/login',
      name: 'login',
      meta: { 'titname': "登录" },
      component: login,

    }, {
      path: '/taskList',
      name: 'taskList',
      meta: { 'titname': "任务列表" },
      component: taskList,

    },
     {
      path: '/phone',
      name: 'phone',
      meta: { 'titname': "电话" },
      component: phone,

    },
     {
      path: '/account',
      name: 'account',
      meta: { 'titname': "账号" },
      component: account,

    },
    {
      path: '/disPatch',
      name: 'disPatch',
      meta: { 'titname': "选择任务" },
      component: dispatchTask,

    },
    {
      path: '/Maintenance',
      name: 'Maintenance',
      meta: { 'titname': "Maintenance" },
      component: Maintenance,

    },
    {
      path :'/douyinApp',
      redirect:"/douyinApp/douyinModule",
      name:"douyinApp" ,
      component:douyin ,
      children: [
        {
          path: 'douyinModule',
          name: 'douyinModule',
          component: douyinApp,
          meta: { 'titname': "抖音模块", },
        },
        {
          path: 'douyinGetmsg',
          name: 'douyinGetmsg',
          meta: { 'titname': "抖音模块-采集任务", },
          component: douyinGetmsg
        },
      ]
    }, 
   
   
  ]
})

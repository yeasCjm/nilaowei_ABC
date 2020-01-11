import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import staticTotal from '@/components/views/static/staticTotal'
import staticDetail from '@/components/views/static/staticDetail'
import phoneTotal from '@/components/views/phone/phoneTotal'

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
      meta: { requireAuth:true },
      component: home,
      children:[
        {
          path: '/staticTotal',
          component: staticTotal,
          meta: { requireAuth: true },
        },
        {
          path: '/staticDetail',
          component: staticDetail,
          meta: { requireAuth: true },
        },
        {
          path: '/phoneTotal',
          component: phoneTotal,
          meta: { requireAuth: true, headName: "手机列表", headExplain:"（请务必为每台手机设置唯一的标签，最好是将标签贴在手机前端）" },
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      meta: { 'titname': "登录" },
      component: login,

    }, 
  /*   {
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
      ]
    },  */
   
   
  ]
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './public/vuex/stroe'


Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from './public/config/axios.js';
Vue.prototype.$http = axios ;

import func from './public/commonFunc/commonFunc.js'
Vue.prototype.$func = func ;


router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    
    if(store.state.userInfo){

      next()
    }else{
      store.commit("getUserInfo");
      if(!store.state.userInfo){
        next({ path: '/login' });
      }else{
        store.commit('SET_USERINFO', JSON.parse(store.state.userInfo));
        next();
      }
     
    }
    
  } else {
    next()
  }
});


/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

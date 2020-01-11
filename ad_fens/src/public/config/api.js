
import Vue from 'vue';
import { post, fetch} from './axios'
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;

function commonData(data){
    let c_data = JSON.parse(window.sessionStorage.getItem('userInfo'));
    data['session_id'] = c_data['id'];
    data['token'] = c_data['token'];
    return data;
}

//获取表格数据
export const getTBdata = function (api_url,data) {
    data = data ? data : {}; 
    data = commonData(data) ;
    return Vue.prototype.$post(api_url, data)
};
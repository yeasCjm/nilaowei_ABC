/**
 * ajax请求配置
 */
import axios from 'axios' ;
import qs from 'qs' ;
// axios默认配置
axios.defaults.timeout = 10000;   // 超时时间
axios.defaults.baseURL = '';  // 默认地址

//整理数据
/* axios.defaults.transformRequest = function (data) {
    //data = Qs.stringify(data);
   // data = JSON.stringify(data);
    return data;
}; */

// 路由请求拦截
// http request 拦截器
axios.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
        //判断是否存在ticket，如果存在的话，则每个http header都加上ticket
        /*if (cookie.get("token")) {
            //用户每次操作，都将cookie设置成2小时
             cookie.set("token", cookie.get("token"), 1 / 12)
            cookie.set("name", cookie.get("name"), 1 / 12)
            config.headers.token = cookie.get("token");
            config.headers.name = cookie.get("name"); 
        }*/
    
        config.url = config.baseURL + config.url.split('=')[0] ;

        if (config.method === "post") {
  
            config.data = qs.stringify(config.data);
        } 
       
        return config;
    },
    error => {
        return Promise.reject(error.response);
    });

// 路由响应拦截
// http response 拦截器
axios.interceptors.response.use(
    response => {
        if (response.data.resultCode == "404") {
            console.log("response.data.resultCode是404")
            // 返回 错误代码-1 清除ticket信息并跳转到登录页面
            //      cookie.del("ticket")
            //      window.location.href='http://login.com'
            return
        } else {
            return response;
        }
    },
    error => {
        return Promise.reject(error.response)   // 返回接口返回的错误信息
    });


/**
 * 封装get方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function fetch(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                if (response.data.code === 0) {
                    //返回成功处理  这里传的啥 后续调用的时候 res就是啥
                    resolve(response.data.data);//我们后台所有数据都是放在返回的data里所以这里统一处理了
                } else {
                    //错误处理
                    this.$message.error(response.data.msg)
                }
            })
            .catch(err => {
                reject(err);
                let message = '请求失败！请检查网络';
                //错误返回
                if (err.response) message = err.response.data.message;
                this.$message.error(message)
            })
    })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                if (response.data.ret ==200) {
                    if (response.data.data.code == 0){
                        resolve(response.data.data);
                    }else{
                       let errmsg =  this.$func.checkCode(response)
                        console.log(errmsg)
                    } 
                } else {
                   this.$message.error(response.data.msg)
                }
            }, err => {
                reject(err);
                let message = '请求失败！请检查网络';
                if (err.response) message = err.response.data.message;
                    this.$message.error(message)
            })
    })
}



//请求带上cookie
/* axios.defaults.withCredentials = true; */
export default axios;
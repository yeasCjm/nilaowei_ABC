let Router = require('express').Router();
let mysql = require('../../cof/mysql');
var rt_data = require('../../cof/config').rtData;


async function to_login(req,res){
    let str ='unchange...' ;
    let return_data = rt_data;
    let login_name = req.body.login_name;
   /*  let veri = req.body.veri ; */
    if(login_name == ''){
        return_data['code'] = 1001;
        return_data['msg'] = '请输入登录名';
        res.send(JSON.stringify(return_data));
        return ;
    }
  
 /*    let verify = req.cookies.captcha;
    if (verify != veri) {
        return_data['code'] = 1002;
        return_data['msg'] = '验证码输入错误';
        res.send(JSON.stringify(return_data));
        return;
    } */
    let sql_text = 'SELECT * FROM user WHERE LOGIN_NAME="' + login_name +'" AND PASSWORD="'+ req.body.pwd +'"';

    await mysql.check_sel(sql_text).then(function (value) {
        str = value ;
        return value;
        // success
    }, function (value) {
        // failure
    });

    if(str.length == 0){
        return_data['code'] = 1000;
        return_data['msg'] = '用户不存在' ;
    }else{
        return_data['code'] = 0;
        return_data['msg'] = '登录成功';
        return_data['info'] = str[0];
    }
    
    res.send(JSON.stringify(return_data));
}



Router.get('*', to_login);
Router.post('*', to_login);

module.exports = Router;

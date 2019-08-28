

let Router = require('express').Router();

//登陆
Router.use('/login', require('./user/login'));
//验证码
Router.use('/veri', require('./user/veri'));

module.exports = Router;

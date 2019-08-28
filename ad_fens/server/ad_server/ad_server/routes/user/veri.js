let Router = require('express').Router();
var svgCaptcha = require('svg-captcha');
let cookie = require('cookie-parser');

function veri(req, res, next){
    var captcha = svgCaptcha.create({
        // 翻转颜色 
        inverse: false,
        // 字体大小 
        fontSize: 36,
        // 噪声线条数 
        noise: 2,
        // 宽度 
        width: 80,
        // 高度 
        height: 30,
    });
    // 保存到session,忽略大小写 
    req.session = {veri:captcha.text.toLowerCase()};
    console.log('req.session......'+JSON.stringify(req.session)); //0xtg 生成的验证码
    //保存到cookie 方便前端调用验证
    res.cookie('captcha', captcha.text.toLowerCase(), { maxAge: 100000 });

    res.setHeader('Content-Type', 'image/svg+xml');
    res.write(String(captcha.data));
    res.end();
}


Router.get('*', veri);
Router.post('*', veri);

module.exports = Router;
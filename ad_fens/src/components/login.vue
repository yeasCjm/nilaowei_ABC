<template>
  <div class="login_bg">
      <div class="login_from">
            <p></p>
            <h1>用户登录</h1>
            <p></p>
            <p>
                <el-input  v-model="user_name" placeholder="用户名"    style="width: 250px"  clearable></el-input>
               
            </p> 
             <p>
                  <el-input  v-model="pwd" placeholder="密码"    style="width: 250px"  clearable></el-input>
               
            </p> 
            <p>
                
                 <el-input  v-model="veri" placeholder="验证码"    style="width: 120px"  clearable></el-input>
                <img :src="veriUrl" alt="点击生成二维码" @click="changeVeri()" style="width:120px;display: inline-block;">
            </p>
            <p>

            </p>
            <p>
                <el-button type="success"  @click="login()"  style="width:250px"  round>登&nbsp;&nbsp;录</el-button>
            </p>  
      </div>
  </div>
</template>

<script>
export default {
    name: 'login',
    data(){
            return {
              user_name:"",
              pwd :"",
              veri:"",
              veriUrl:"http://127.0.0.1:9100/verify",
            }
        },
    methods:{
        changeVeri(){
            var num=Math.ceil(Math.random()*10);
            this.veriUrl = "http://127.0.0.1:9100/verify?" + num; 
        },
        login(){
            this.$router.push({name: 'home'})
        }

    },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
    .login_bg{  
        height:100%;
        background:url('/static/img/bg.jpg') center center repeat ;
        display: flex;
        align-items: center; /*定义body的元素垂直居中*/
        justify-content: center;

    }
    .login_from{
        height: 450px;
        background: #fff;
        padding: 0 34px;
        border-radius: 10px;
        border: 1px solid #fff;
        box-shadow: 5px 4px 10px #1e1e21;

    }
    .login_from p{
        height:50px
    }
</style>

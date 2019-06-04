<template>
  <div class="login_bg">
      <div class="login_from">
            <p></p>
            <h1>用户登录</h1>
            <p></p>
            <p>
                <Input v-model="user_name" placeholder="用户名" clearable style="width: 250px"  />
            </p> 
             <p>
                <Input v-model="pwd" type="password" placeholder="密码" clearable style="width: 250px"  />
            </p> 
            <p>
                <Input v-model="veri" placeholder="验证码" clearable style="width: 120px;"  />
                <img :src="veriUrl" alt="点击生成二维码" @click="changeVeri()" style="width:120px;display: inline-block;">
            </p>
            <p>

            </p>
            <p>
                <Button @click="login()" type="success" long style="width:250px">登&nbsp;&nbsp;录</Button>
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
    }
    .login_from{
        height: 450px;
        background: #fff;
        width: 300px;
        position: absolute;
        top: 62px;
        right: 46px;
        border-radius: 10px;
        border:1px solid #fff;
        box-shadow: 5px 4px 10px #1E1E21;
    }
    .login_from p{
        height:50px
    }
</style>

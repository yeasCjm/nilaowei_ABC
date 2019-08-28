<template>
    <div class="login_bg">
        <div class="login_from">
            <p >登&emsp;&emsp;录</p>
            <el-input  v-model="user_name" placeholder="用户名" style="width:200px"     clearable></el-input>
            <el-input  v-model="veri" placeholder="验证码" style="width:300px"     clearable> 
                    <template slot="append"> <img :src="veriUrl" alt="点击生成二维码" @click="changeVeri()" style="width:100px;height:35px"> </template>
            </el-input>
            <el-button type="success"  @click="login()"  style="width:150px"  round>登&nbsp;&nbsp;录</el-button>
                
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
                veriUrl:"http://127.0.0.1:22110/users/veri",
            }
        },
    methods:{
        changeVeri(){
            var num=Math.ceil(Math.random()*10);
            this.veriUrl =  this.veriUrl + '?t='+num; 
        },
        login(){
            this.$http.post('http://127.0.0.1:22110/users/login',{'login_name':this.user_name}).then((res)=>{
            if(!res.code){

            }else{
                this.$router.push({name: 'home'})
            }
           

        }).catch((response)=>{
            console.log(response);
        })
           // this.$router.push({name: 'home'})
        }

    },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
    .login_bg{  
        height:100%;
        background-image: linear-gradient(to top , #7AFFAF,#7A88FF);
        background-color:transparent;
        display: flex;
        align-items: center; /*定义body的元素垂直居中*/
        justify-content: center;

    }
    .login_from{
        width:auto;
        background: #fff;
        padding: 12px 34px 50px 34px;
        border-radius: 10px;
        border: 1px solid #fff;
        box-shadow: 5px 4px 10px #aeaeae;

    }
   
</style>

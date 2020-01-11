<template>
    <div class="login_bg">
        <h1>你老味_ABC</h1>
        <div class="login_from">
            <p >登&emsp;&emsp;录</p>
            <el-input  v-model="mid" placeholder="商户号"     clearable></el-input>
            <el-input style="margin:10px 0 ;"  v-model="user_name" placeholder="用户名"     clearable></el-input>
            <el-input  v-model="pwd" placeholder="密码"     clearable></el-input>
            <el-input  v-model="veri" placeholder="验证码"   style="margin:10px 0;display:none"   clearable> 
                    <template slot="append"> <img :src="veriUrl" alt="点击生成二维码" @click="changeVeri()" style="width:100px;height:35px"> </template>
            </el-input>
            <el-checkbox v-model="checked">是否记住用户名</el-checkbox>
            <div>
                 <el-button type="primary"  @click="login()"  style="width:250px;margin-top:10px"  round>登&nbsp;&nbsp;录</el-button>
            </div>
           
                
        </div>
  </div>
</template>

<script>

export default {
    name: 'login',
    data(){
            return {
                user_name: window.localStorage.getItem('user_name') ? window.localStorage.getItem('user_name') :"",
                pwd :"",
                mid:window.localStorage.getItem('mid') ? window.localStorage.getItem('mid') :"",
                veri:"",
                veriUrl:"http://192.168.2.159:22110/users/veri",
                "checked" :true,
            }
        },
    methods:{
        changeVeri(){
            var num=Math.ceil(Math.random()*10);
            this.veriUrl =  this.veriUrl + '?t='+num; 
        },
        login(){
            let $this = this ;
          
            this.$http.post('App.Account.Login',{uid:this.user_name,pwd:this.pwd,m_id:this.mid}).then((res)=>{
               
                    let r = $this.$func.checkCode(res) ;
                    if(r.status || r.status == undefined){
                        this.$message.error(r.msg ? r.msg : '未知错误，联系管理员');
                    }else{
                        if(this.checked){
                            window.localStorage.setItem('user_name',this.user_name);
                            window.localStorage.setItem('mid',this.mid)
                        }
                        this.userinfo = r.data ;
                        window.sessionStorage.setItem('userInfo',JSON.stringify(r.data))
                        $this.$store.commit('SET_USERINFO', r.data ) ;
                        this.$router.push({name: 'home'})
                    }
                   
            }).catch((response)=>{
                console.log(response);
            })  
        }
    },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">
    .login_bg{  
        height:100%;
       /*  background-image: linear-gradient(to top , #7AFFAF,#7A88FF); */
        background-color:transparent;
        display: flex;
        align-items: center; /*定义body的元素垂直居中*/
        justify-content: center;
        flex-direction: column;
        background:url('../assets/login/bg.jpg') no-repeat ;
        background-size: cover ;
    }
    .el-input{margin:15px 0 ;}
    .el-checkbox{display: flex;margin:15px 0 ;}
    .login_from{
        width:300px;
        height:400px;
        background: #fff;
        padding: 12px 34px 50px 34px;
        margin: 12px 34px 50px 34px;
        border-radius: 10px;
        border: 1px solid #fff;
        box-shadow: 5px 4px 10px #aeaeae;

    }
   
</style>


<template >  
  
        <el-menu ref="footNav"  :default-active="active" menu-trigger="click" class="el-menu-demo" mode="horizontal" style="width:100%">
            <el-submenu index="1">
                <template slot="title">基本功能</template>
                <el-menu-item index="1-1" @click.native='loadLocal("taskList")' >任务列表</el-menu-item>
                <el-menu-item index="1-2" @click.native='loadLocal("phone")'>手机管理</el-menu-item>
                <el-menu-item index="1-3" @click.native='loadLocal("account")'>账号管理</el-menu-item>
                
            </el-submenu>
             <el-submenu index="2">
                <template slot="title">任务模块</template>
                  <el-menu-item index="2-1" @click.native='loadLocal("douyinApp")'>抖音</el-menu-item>
                  <el-menu-item index="2-1" @click.native='loadLocal("disPatch")'>基本</el-menu-item>
            </el-submenu>
        </el-menu>

</template>

<script>
    
    export default{
        data () {
            return {
              active:""
            }
        },
        methods:{
            loadLocal(url){
          
                var data = {
                    name: url,
                    params:{
                        
                    }
                }
                this.$router.push(data)
            },
            
          
        },
        mounted(){

        },
        watch:{
           
        }
    }

</script>

<style>
    .el-submenu{width:50%;}
    .ivu-menu-horizontal{width:100%;}
    .el-menu-item {text-align:center}
    .el-menu--horizontal>.el-submenu.is-active .el-submenu__title{border-bottom: 0}
    .el-menu--horizontal{width:50%}
</style>
<template>
    <div style="background:#fff;margin-top:20px;box-shadow:0 0 10px #e1e1e1;">
   <!--     <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
             <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group> -->,
            <div style="margin:20px 0 ;">
                变现宝
            </div>
            <el-menu  background-color="#fff" :unique-opened='isuniqueOpened' router  :default-active="defaultActive"     text-color="#999" active-text-color="#000"  active-background-color="#e8e8e8" class="el-menu-vertical-demo"  :collapse="isCollapse">
            <div  v-for="(item,i) in list"> 
                 <el-menu-item :index="item.href" v-if="item.children.length == 0">
                    <i class="el-icon-menu"></i>
                    <span  :goId=item.href slot="title">{{item.text}}</span>
                </el-menu-item>
                <el-submenu  :index="item.meanId" v-else>
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">{{item.text}}</span>
                    </template>
                    <el-menu-item-group >
                        <el-menu-item  :goId=it.href v-for="(it,idx) in item.children" :index="it.href"> <i class="el-icon-menu"></i>{{it.text}}</el-menu-item>
                    </el-menu-item-group>  
                </el-submenu >
            </div>
           
            </el-menu>

    </div>
</template>

<script>

export default {
    name: 'navList',
   
     computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    data() {
        return {
        isCollapse: false,
        isuniqueOpened:true,
        href:"",
        list:[
            {
                text:"数据总览",
                meanId:"static",
                grant:[0,1],
                children:[
                    {
                        text : "数据概览",
                        meanId:"staticTotal",
                        href:"staticTotal",
                        grant:[0,1],
                    },
                    {
                        text : "详细数据",
                        meanId:"staticDetail",
                        href:"staticDetail",
                        grant:[0,1],
                    }
                ]
            },
            {
                text:"手机管理",
                meanId:"phone",
                grant:[0,1],
                children:[
                    {
                        text : "手机列表",
                        meanId:"phoneTotal",
                        href:"phoneTotal",
                        grant:[0,1],
                    },
                    {
                        text : "应用账号",
                        meanId:"accountTotal",
                        href:"accountTotal",
                        grant:[0,1],
                    },
                    {
                        text : "手机操作",
                        meanId:"phone_control",
                        href:"phone_control",
                        grant:[0,1],
                    }
                ]
            },
            {
                text:"养号",
                meanId:"addTask",
                grant:[0,1],
                href:"addTask",
                children:[]
            },
             {
                text:"任务管理",
                meanId:"taskList",
                grant:[0,1],
                children:[
                    {
                        text : "任务列表",
                        meanId:"taskListTotal",
                        href:"taskListTotal",
                        grant:[0,1],
                    },
                ]
            },
        ]
      };
    },
     methods: {
    
     }
}
</script>

<style  lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu{border:0}
</style>

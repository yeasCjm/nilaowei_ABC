
<template lang="html">
    <div>
        <v-head></v-head>
        <div>
            <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark" @click='loadLocal("douyinGetmsg")' >采集</div></el-col>
            </el-row>
            <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark" @click='loadLocal("taskList")'>关注</div></el-col>
            </el-row>
            <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark" @click='loadLocal("taskList")'>私信</div></el-col>
            </el-row>
            <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark" @click='loadLocal("taskList")'>养号</div></el-col>
            </el-row>
        </div>   
    </div>
</template>

<script>
    import hea from '@/components/common/header/head.vue';
    import func from '@/public/commonFunc/commonFunc.js' ;
    export default{
        data(){
            return {}
        },
        components:{
            'v-head' : hea ,
        },
       
        methods :{
              loadLocal : func.loadLocal
        },
         mounted(){
           
        },
    }

</script>

<style>
    
    .el-row {
        margin: 40px;
       
        
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background:#fff;
        height: 70px;
        line-height: 70px;
        color: rgba(31, 31, 79, 1);
        font-size:18px ;
        border:1px solid rgba(31, 31, 79, 1) ;
        border-radius: 50px;
    }
  
</style>
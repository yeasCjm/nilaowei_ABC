
<template lang="html">
    <div>
        <v-head></v-head>
        <div>
           <div class="account">
               <el-button type="primary"><i class="el-icon-s-custom el-icon--left"></i>选择账号</el-button>
                
           </div>
        </div>
    </div>
</template>

<script>
    import hea from '@/components/common/header/head.vue';
    export default{
        data(){
            return {}
        },
        components:{
            'v-head' : hea ,
        },
        mounted(){
            
        }
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
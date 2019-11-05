
<template lang="html">
     <div>
        <v-head></v-head>
        <div>
            <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark">采集</div></el-col>
            </el-row>
            <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark">关注</div></el-col>
            </el-row>
            <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark">私信</div></el-col>
            </el-row>
            <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark">养号</div></el-col>
            </el-row>
        </div>   
    </div>
</template>

<script>
    import hea from '../../common/header/head.vue';
    export default{
        data(){
            return {}
        },
        components:{
            'v-head' : hea ,
        },
        mounted(){
            console.log('account')
        }
    }

</script>

<style>
    
</style>
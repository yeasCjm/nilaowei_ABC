<template>
    <div class="head_bar">
        <el-button type="primary" class="type-btn-primary" icon="el-icon-arrow-left" @click="goback()">
        </el-button>
       
        <span class="head_bar_tit">{{header_title}}</span>
         
    </div>
</template>

<script>

export default {
    name: 'hea',
    data() {
        return {
            header_title:""
        }
    },
    mounted(){

        this.header_title = this.$route.meta.titname ; 
        
       
    },
    methods:{
      goback(){
        this.$router.go(-1)
      }
    },
}
</script>

<style  lang="less">

    .head_bar{
        text-align:left;
        background:rgba(23, 23, 59, 1);
        height: 58px;
        line-height: 58px;
    }
    .head_bar_tit{
        display:inline-block;
        width:calc(100% - 93px);
        text-align: center;
        font-size: 17px;
        font-weight: 600;
        line-height:2.5;
        color:#fff;
    }
    .type-btn-primary{
        background-color : rgba(23, 23, 59, 1);
        border :1px solid  rgba(23, 23, 59, 1);
    }
</style>

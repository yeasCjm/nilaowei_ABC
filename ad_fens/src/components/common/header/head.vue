<template>
    <div class="head_bar">
        <el-button type="primary" icon="el-icon-arrow-left" @click="goback()">
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
         console.log(this.$router.params)
        this.header_title = this.$route.params.tit
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
        background:#2d8cf0;
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
</style>

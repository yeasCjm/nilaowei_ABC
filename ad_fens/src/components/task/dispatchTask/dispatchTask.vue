<template>
    <div>
        <v-head></v-head>
        <div class="sec">
             <el-button type="info"  @click='goHtm("Maintenance")'>Maintenance number</el-button>
          
            
        </div>   
       
    </div>
</template>

<script>
import hea from '@/components/common/header/head.vue';
export default {
    name: '',
    components: {
           'v-head' : hea ,
    },
    methods : {
            goHtm(type){
               
                this.$func.loadLocal(type,this)
            }
    },
    data() {
        return {
            
        }
    }
}
</script>

<style  lang="less">
    .sec{
        height:auto;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        padding:5%;
        
    }
</style>

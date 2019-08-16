<template>
    <div class="head_bar">
        
        <Button type="primary">
            <Icon type="ios-arrow-back"></Icon>
        </Button>
        <span>{{header_title}}</span>
         
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
        
    },
    methods:{
      
    },
}
</script>

<style  lang="less">

.head_bar{
    text-align:left
}
</style>

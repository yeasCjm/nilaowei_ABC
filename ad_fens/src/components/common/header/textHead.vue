<template>
    <div>
        <div style="text-align:left">
            <span style="border-left:3px solid #00a2ff;font-size:20px;padding-left:20px;">{{headName}}</span>
            <span style="color:#aeaeae;font-size:14px;">{{headExplain}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'textHead',
    components: {},
    data() {
        return {
            headName:"",
            headExplain:'',
        }
    },
    created : function(){ 
        this.headName = this.$route.meta.headName
        this.headExplain = this.$route.meta.headExplain
    },
}
</script>

<style  lang="less">

</style>

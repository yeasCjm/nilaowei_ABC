<template>
    <div style="text-align:left">
         <el-pagination
                    @size-change="handleSizeChange"
                    :page-sizes="[30,100, 200, 300, 400]"
                    :page-size="nowCount"
                    layout="total,sizes "
                    :total="total">
            </el-pagination>
            
    </div>
</template>

<script>
export default {
    name: 'textFooter',
    components: {},
    data() {
        return {
            nowCount:30,
            total:0
        }
    },
    methods: {
        handleSizeChange(val) {
            this.nowCount = val;
            this.$parent.searchdata()
           
        },
    
    }
}
</script>

<style  lang="less">

</style>

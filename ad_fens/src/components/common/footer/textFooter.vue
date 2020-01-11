<template>
    <div style="margin-top:30px;">
         <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[30,100, 200, 300, 400]"
            :page-size="nowCount"
            layout="total, sizes, prev, pager, next, jumper"
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
            nowPage:1,
            total:0,
            currentPage: 1,
            nowCount:30
        }
    },
    methods: {
         handleSizeChange(val) {
            this.nowCount = val;
            this.$parent.searchdata()
           
      },
      handleCurrentChange(val) {
          this.nowPage = val
          this.$parent.searchdata()
      
      }  
    },
    mounted() {
    
    },
}
</script>

<style  lang="less">

</style>



<template>
 <div class="layout"  >
    <h2>测试的数据表格</h2>
    <div style="padding:10px">
       <el-table
        :data="tableData"
        max-height="400"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          >
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
  </el-table>   
    </div>
    
  </div>
  
</template>

<script>


export default {
  name: 'homeContent',
  computed: {
 
     
  },
  data () {
    return {
      msg:"",
       tableData: [{
          date: '2016-05-03',
          name: 'start',
          address: '广州市白云区同德街xxxxxxxxxxxxxxxxxxxxxxxxxx'
        }, {
          date: '2016-05-02',
          name: 'cjm',
          address: '广州市白云区同德街xxxxxxxxxxxxxxxxxxxxxxxxxx'
        }, {
          date: '2016-05-04',
          name: 'cjm',
          address: '广州市白云区同德街xxxxxxxxxxxxxxxxxxxxxxxxxx'
        }, {
          date: '2016-05-01',
          name: 'cjm',
          address: '广州市白云区同德街xxxxxxxxxxxxxxxxxxxxxxxxxx'
        }, {
          date: '2016-05-08',
          name: 'cjm',
          address: '广州市白云区同德街xxxxxxxxxxxxxxxxxxxxxxxxxx'
        }, {
          date: '2016-05-06',
          name: 'cjm',
          address: '广州市白云区同德街xxxxxxxxxxxxxxxxxxxxxxxxxx'
        }, {
          date: '2016-05-07',
          name: 'cjm',
          address: '广州市白云区同德街xxxxxxxxxxxxxxxxxxxxxxxxxx'
        }, {
          date: '2016-05-07',
          name: 'cjm',
          address: '广州市白云区同德街xxxxxxxxxxxxxxxxxxxxxxxxxx'
        }, {
          date: '2016-05-07',
          name: 'cjm',
          address: '广州市白云区同德街xxxxxxxxxxxxxxxxxxxxxxxxxx'
        }, {
          date: '2016-05-07',
          name: 'cjm',
          address: '广州市白云区同德街xxxxxxxxxxxxxxxxxxxxxxxxxx'
        }, {
          date: '2016-05-07',
          name: 'end',
          address: '广州市白云区同德街xxxxxxxxxxxxxxxxxxxxxxxxxx'
        }]
    }
  },
  components: {

      
  },
  methods:{
   
  },
  mounted : function(){
   
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

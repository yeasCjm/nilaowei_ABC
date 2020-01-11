

<template>
 <div class="layout" style="height: 100%">
    <div class="headTop" >

    </div>
    <div style="display:flex;width:100%;height:calc(100% - 50px)">
      <v-nav></v-nav>
      <div style="margin:20px 15px;background:#fff;box-shadow:0 0 10px #e1e1e1;height:100%;width:calc(100% - 230px)">
        <keep-alive>
				    <router-view></router-view>
			  </keep-alive>
      </div>
      
    </div>   
  </div>
  
</template>

<script>

import nav from './common/nav/navList.vue' ;
export default {
  name: 'home',
  
  data () {
    return {
      msg:"",

    }
  },
  components: {
     
      'v-nav':nav,
      
  },
  methods:{
   
   
  },
  created : function(){
    this.$router.push('staticTotal')
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.headTop{
  width:100%;height:50px;background:#236ECA
}
</style>

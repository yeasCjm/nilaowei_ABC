

<template>
 <div class="layout" style="height: 100%">
  <div style="overflow-y:auto; height: calc(100% - 60px);">
    <v-content></v-content>
  </div>
      <v-footer class='footer'></v-footer>
    </div>
  
</template>

<script>
import foot from './common/footer/footer.vue' ;
import homeContent from './homeContent.vue' ;
export default {
  name: 'home',
  computed: {
     
  },
  data () {
    return {
      msg:"",

    }
  },
  components: {
      'v-footer': foot,
      'v-content':homeContent,
      
  },
  methods:{
    show_btn : function(){
      console.log('mounted')
    },
   
  },
  mounted : function(){
   
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  position:fixed;
  bottom:0px;
}
</style>

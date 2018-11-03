

<template>
  <div id="contain">
    <header>
      <div >
        
      </div>
    </header>
    <section>
     <div id="aside_nav">
       {{msg}}
     </div>
     <div id="section">
       <router-view/>
     </div>
    </section>
   
    
  </div>
</template>

<script>
import menu from '../public/menu.js' //注意路径

export default {
  name: 'home',
  data () {
    return {
      msg:menu
    }
  },
  methods:{
    show_btn : function(){
        
        console.log(menu.SystemMenu)
    },

  },
  mounted : function(){
    this.show_btn()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

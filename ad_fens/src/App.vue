<template>
  <div id="app">
    <transition name="fade" mode="out-in">
     <keep-alive>
        <router-view/>
     </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;


}
.fade-enter-active,.off-enter-active{
  transition: 0.5s linear;
}
.fade-leave-active,.off-leave-active{
  transition: 0.5s linear;
}
.fade-leave-to,.off-leave-to{
   transform:translateX(-60px);
}
.off-enter,.fade-enter{
   transform:translateX(60px);
}
html,body,#app{
  width:100%;
  height: 100%;
  overflow:hidden;
  margin:0;
  padding:0;
}
</style>

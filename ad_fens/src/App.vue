<template>
  <div id="app">
    <transition>
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
html,body,#app{
  width:100%;
  height: 100%;

}
</style>

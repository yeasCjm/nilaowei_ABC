
<template lang="html">
    <div>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

    export default{
        data(){
            return {}
        },
        components:{
        
        },
       
        methods :{
            
        },
        mounted(){
        
        },
    }

</script>

<style>
    
   .fade-enter-active, .fade-leave-avtive {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to {
    opacity: 0
}
</style>
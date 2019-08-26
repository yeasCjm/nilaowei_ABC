
<template lang="html">
    <div>
        <v-head></v-head>
        phone
    </div>
</template>

<script>
    import hea from '../../common/header/head.vue';
    export default{
        data(){
            return {}
        },
        components:{
            'v-head' : hea ,
        },
        mounted(){
            console.log('phone')
        }
    }

</script>

<style>
    
</style>
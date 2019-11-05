<template>
    <div>
        <v-head></v-head>
        <div class="taskCont">
            <div class="taskCont1">
                <v-selAcc></v-selAcc>
            </div>
        </div>
    </div>
</template>

<script>
import hea from '@/components/common/header/head.vue';
import selAcc from '@/components/common/selAcc.vue' ;
export default {
    name: '',
    components: {
            'v-head' : hea ,
            "v-selAcc" : selAcc ,
    },
    data() {
        return {

        }
    }
}
</script>

<style  lang="less">

</style>

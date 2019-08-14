<template>
    <div>
        <Menu mode="horizontal" :theme="theme1" ref="topMenu"  active-name="1">
               <!--  <MenuItem name="1">
                    <Icon type="ios-paper" />
                    内容管理
                </MenuItem> -->
                <span  v-for="(value,key,index) in menuList">
                     <MenuItem  :grant="value.grant" @click.native="getFatherNav(key)"  :name="value.grant">
                        {{value.title}}
                    </MenuItem> 
                </span>
                
        </Menu>
    </div>
</template>

<script>
import menu from '../../../public/menu.js' ;//注意路径
export default {
    name: 'hea',
    data() {
        return {
            menuList:menu,
            theme1:'light',
        }
    },
    mounted(){

    },
    methods:{
        getFatherNav:function(pp){
        
        }
    },
}
</script>

<style  lang="less">

</style>

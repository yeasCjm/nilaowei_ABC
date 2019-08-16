
<template lang="html">
        <Menu mode="horizontal" :theme="theme1" active-name="1">
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-barcode" />
                    基本功能
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="1-1" @click.native='loadLocal("/taskList")' >任务列表</MenuItem>
                    <MenuItem name="1-2" @click.native='loadLocal("/phone")'>手机管理</MenuItem>
                    <MenuItem name="1-3" @click.native='loadLocal("/account")'>账号管理</MenuItem>
                </MenuGroup>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-apps" />
                    app软件
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="2-1" @click.native='loadLocal("/taskList")'>抖音</MenuItem>
                    <MenuItem name="2-2" @click.native='loadLocal("/taskList")'>快手</MenuItem>
                    <MenuItem name="2-3" @click.native='loadLocal("/taskList")'>腾讯新闻</MenuItem>
                    <MenuItem name="2-4" @click.native='loadLocal("/taskList")'>头条新闻</MenuItem>
                </MenuGroup>
            </Submenu>
        </Menu>
</template>

<script>
    
    export default{
        data () {
            return {
                theme1: 'light'
            }
        },
        methods:{
            loadLocal(url,data){
                console.log(url)
                window.location.href = url  ;
            }
        }
    }

</script>

<style>
    .ivu-menu-submenu{width:50%;}
    .ivu-menu-horizontal{width:100%;}
</style>
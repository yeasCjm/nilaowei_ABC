
<template lang="html">
        <Menu mode="horizontal" :theme="theme1" active-name="1">
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-barcode" />
                    基本功能
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="1-1">任务列表</MenuItem>
                    <MenuItem name="1-2">手机管理</MenuItem>
                    <MenuItem name="1-3">账号管理</MenuItem>
                </MenuGroup>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-apps" />
                    app软件
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="2-1">抖音</MenuItem>
                    <MenuItem name="2-2">快手</MenuItem>
                    <MenuItem name="2-3">腾讯新闻</MenuItem>
                    <MenuItem name="2-4">头条新闻</MenuItem>
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
        }
    }

</script>

<style>
    .ivu-menu-submenu{width:50%;}
    .ivu-menu-horizontal{width:100%;}
</style>
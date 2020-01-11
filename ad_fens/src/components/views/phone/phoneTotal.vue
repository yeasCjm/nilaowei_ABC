<template>
    <div>
        <div style="border-bottom:1px solid #aeaeae">
            <div class="sesstion_headTop">
                <v-text></v-text>
                <div style="margin-top:20px;">
                    <el-select v-model="timeSel"   style="width:150px;" placeholder="请选择">
                        <el-option
                        v-for="item in timeSeloptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-date-picker
                        v-model="dateData"
                        type="daterange"
                        align="right"
                        unlink-panels
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :picker-options="pickerOptions">
                    </el-date-picker>
                    <el-select   style="width:150px;" v-model="timeSel" placeholder="请选择设备状态">
                        <el-option
                        v-for="item in timeSeloptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-input
                        placeholder="请输入手机标签"
                        v-model="mobile_label"
                        style="width:150px;"
                        clearable>
                        </el-input>
                    <el-input
                        placeholder="请输入分组"
                        v-model="group_name"
                        style="width:150px;"
                        clearable>
                    </el-input>
                    <el-button @click="searchdata()" type="primary" :loading="loading" icon="el-icon-search">搜索</el-button>
                </div>
            </div>
        </div>
        <div class="sectionTable">    
            <el-table
                ref="multipleTable"
                :data="tableData"
                :height="height"
                stripe
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
               
                <el-table-column v-for="(item,i) in tableFiled"
                :label="item.label"
                :prop="item.prop"
                :width="item.width">
                <template slot-scope="scope">
                    <span v-if="item.edit">
                         <el-input class="editTableInput"  size="small" v-model="scope.row[item.prop]" :placeholder="'请输入'+item.label" @change="handleEdit(scope.$index, scope.row,item.prop)"></el-input>  
                    </span>
                    <span v-else v-html="scope.row[item.prop]"></span>
                </template>
                </el-table-column>
                <el-table-column
                    label="操作"
                     fixed="right"
                    width="250">
                    <template slot-scope="scope">
                        <el-button type="primary" icon="el-icon-search" @click.native.prevent="deleteRow(scope.$index, tableData)"></el-button>
                        <el-button type="success" icon="el-icon-edit" @click.native.prevent="deleteRow(scope.$index, tableData)"></el-button>  
                        <el-button type="danger" icon="el-icon-delete" @click.native.prevent="deleteRow(scope.$index, tableData)"></el-button>
                    </template>
                </el-table-column>
                
            </el-table>
            <tb-foot ref="phoneFooter"></tb-foot>
        </div>
       
    </div>
</template>

<script>
import textHead from '@/components/common/header/textHead'
import textFooter from '@/components/common/footer/textFooter'

import {getTBdata} from '@/public/config/api.js'
export default {
    name: '',
    components: {
        'v-text' : textHead,
        'tb-foot':textFooter,

    },
    data() {
        return {
            loading:false,
            mobile_label:"",
            group_name:"",
            height:600,
            timeSeloptions: [{value: '1',label: '最新上报时间'}, {value: '2',label: '首次上报时间'},],
            timeSel: '1',
            pickerOptions: {
            shortcuts: [{
                text: '最近一周',
                onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', [start, end]);
                }
            }, {
                text: '最近一个月',
                onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
                }
            }, {
                text: '最近三个月',
                onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
                }
            }]
            },
            dateData: '',
            tableData: [],
            multipleSelection: [],
            currentPage:0,
            tableFiled:[
                {prop:"mobile_label",label:"手机标签",width:"150",edit:1,},{prop:"newestDate",label:"最新上报时间",width:"150"},{prop:"emp_name",label:"管理员",width:"100"},{prop:"group_name",label:"手机分组",width:"150",edit:1,},{prop:"status_name",label:"设备状态",width:"90"},{prop:"emp_name",label:"链接状态",width:"150"},{prop:"emp_name",label:"电量",width:"150"},{prop:"emp_name",label:"网络",width:"150"},{prop:"emp_name",label:"任务类型",width:"150"},{prop:"emp_name",label:"品牌",width:"150"},{prop:"emp_name",label:"型号",width:"150"},{prop:"emp_name",label:"apk版本",width:"150"},{prop:"emp_name",label:"无障碍",width:"150"},{prop:"emp_name",label:"手机串号",width:"150"},{prop:"emp_name",label:"首次上报时间",width:"150"},
            ]
        }
    },
    methods: {
        searchdata(){
            var data = {page_count:this.$refs.phoneFooter.nowCount,page:this.$refs.phoneFooter.nowPage};
            let status_name = ['<span style="color:red">无效</span>','<span style="color:blue">有效</span>']
            getTBdata('Mobile.Mobile_list',data).then(res=>{
                        let dats = res.info.list;
                        for(var i=0;i<dats.length;i++){
                            dats[i].newestDate = dats[i].last_upload_date == 0 ? "" : this.$func.UnixToDateTime(dats[i].last_upload_date);
                            dats[i].status_name =status_name[dats[i].status];
                        }
                        this.tableData = dats;
                        this.$refs.phoneFooter.total = res.info.page.total 
            })
        },
        toggleSelection(rows) {
            if (rows) {
            rows.forEach(row => {
                this.$refs.multipleTable.toggleRowSelection(row);
            });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
      deleteRow(a,b){
          console.log(a)
          console.log(b)
      },
      handleEdit(idx,row){
          console.log(idx)
          console.log(row['id'])

      }
    },
    created () {
        var bg =  this.$func.getLocalTime() + ' 00:00:00';
        var ed =  this.$func.getLocalTime() + ' 23:59:59';
        this.dateData = [new Date(bg),new Date(ed)];
     
    },
    mounted () {
        this.searchdata();
        
       
    }
}
</script>

<style   lang="less">
    @import  "../../../css/common" ;
   
    .sectionTable{padding:20px;}
    
.tb-edit .el-input {
    display: none
}
.tb-edit .current-row .el-input {
    display: block
}
.tb-edit .current-row .el-input+span {
    display: none
}
</style>

var SystemMenu = [{

    	title: '云控管理',
    	icon: 'douyin',
    	isCurrent: true,
    	grant: 1,
    	menu: [{
                grant: 123211233132,
                title: '数据统计',
                note: 'statistics',
                name: 'static',
                type :1 ,/*管理员菜单*/
                icon: 'static',
                href : "apps/main.html",
                children :[],
            },{
                grant: 123,
                title: '手机管理',
                note: 'equipment',
                type : 0 ,/*是否为管理员菜单*/
                icon: 'phone',
                children: [

                    {
                        grant:123,
                        name:"equipment",
                        title: "手机列表",
                        icon:"phone",
                        type : 0 ,
                        href : "apps/equipment/all_equipment.html",
                    },

                    {
                        grant:1323,
                        name:"account_list",
                        title: "应用账号",
                        type : 0 ,
                        icon:"douyinhao",
                        href : "apps/equipment/account_list.html",
                    },
                ]

            },{
                grant: 123211233132,
                title: '养号管理',
                note: 'addtask',
                name: 'setTask',
                type :0 ,/*管理员菜单*/
                icon: 'douyin',
                href : "apps/tasklist/addtask.html",
                children :[],
            },{
                grant: 1233132,
                title: '任务列表',
                note: '_tasklist',
                type : 0 ,/*管理员菜单*/
                icon: 'renwu',
                children: [
                    {
                        grant:123,
                        title: "任务列表",
                        name:"tasklist",
                        type : 0 ,
                        icon:"renwuliebiao",
                        href : "apps/tasklist/tasklist.html",
                    },
                    {
                        grant:123,
                        title: "内存清理",
                        name:"clean_storage",
                        type : 0 ,
                        icon:"qinglihuancun",
                        href : "apps/tasklist/clean_storage.html",
                    }
                ]
            },
            {
                grant: 1233152321312532,
                title: '截流管理',
                note: '_tasklist2',
                type : 0 ,/*管理员菜单*/
                icon: 'jieliu',
                children: [
                    {
                        grant:123,
                        title: "精准评论",
                        name:"exact_discuss",
                        type : 0 ,
                        icon:"jingzhun",
                        href : "apps/tasklist/exact_discuss.html",
                    },
                     /*{
                        grant:123,
                        title: "造热评",
                        name:"make_discuss",
                        type : 0 ,
                        icon:"shujuguanli",
                        href : "apps/tasklist/make_discuss.html",
                    },*/
                     {
                        grant:123,
                        title: "同城评论",
                        name:"city_discuss",
                        type : 0 ,
                        icon:"same_city",
                        href : "apps/tasklist/city_discuss.html",
                    },
                    {
                        grant:123,
                        title: "评论区私信",
                        name:"msg_discuss",
                        type : 0 ,
                        note:'msg_discuss',
                        icon:"super_discuss",
                        href : "apps/tasklist/msg_discuss.html",
          
                    },
                    {
                        grant:123,
                        title: "超级私信(开发中)",
                        name:"supper_discuss",
                        type : 0 ,
                        icon:"super_msg",
                        note:"supper_discuss",
                        children:[
                             {
                                    grant:123,
                                    title: "采集信息(开发中)",
                                    name:"collect_msg",
                                    type : 0 ,
                                    icon:"super_msg",
                                    href : "apps/tasklist/super_collectMsg.html",
                                }, {
                                    grant:123,
                                    title: "关注(开发中)",
                                    name:"concern_msg",
                                    type : 0 ,
                                    icon:"super_msg",
                                    href : "apps/tasklist/super_concern.html",
                                }, {
                                    grant:123,
                                    title: "私信(开发中)",
                                    name:"selfMsg",
                                    type : 0 ,
                                    icon:"super_msg",
                                    href : "apps/tasklist/super_selfMsg.html",
                                },
                        ]
                    }
                ]
            },{
                grant: 12331511532,
                title: '点赞私信管理',
                note: '_tasklist3',
                type : 0 ,/*管理员菜单*/
                icon: 'pinglun',
                children: [
                    {
                        grant:123,
                        title: "同城",
                        name:"same_city",
                        type : 0 ,
                        icon:"same_city",
                        href : "apps/tasklist/same_city.html",
                    },
                     {
                        grant:123,
                        title: "精准",
                        name:"accurate",
                        type : 0 ,
                        icon:"jingzhun",
                        href : "apps/tasklist/accurate.html",
                    },
                    /* {
                        grant:123,
                        title: "搜索",
                        name:"search_res",
                        type : 0 ,
                        icon:"sousuo",
                        href : "apps/tasklist/search_res.html",
                    },
                    {
                        grant:123,
                        title: "通讯录",
                        name:"communication",
                        type : 0 ,
                        icon:"tongxunlu",
                        href : "apps/tasklist/communication.html",
                    },{
                        grant:123,
                        title: "同行",
                        name:"peer",
                        type : 0 ,
                        icon:"shujuguanli",
                        href : "apps/tasklist/peer.html",
                    },*/{
                        grant:123,
                        title: "推荐",
                        name:"recommed",
                        type : 0 ,
                        icon:"tuijian",
                        href : "apps/tasklist/recommed.html",
                    },
                ]
            },
            {
                grant: 5534544266,
                title: '蹭热门',
                note: 'component',
                type : 0 ,
                icon: 'gongwenbao',
                children: [{
                        grant: 658958,
                        title: '大号管理',
                        note: 'major_num1',
                        name: 'major_num',
                        type :0 ,/*管理员菜单*/
                        icon: 'douyin',
                        href : "apps/plugin/major_num.html",
                        
                    },
                    {
                        grant: 6589258,
                        title: '小号顶大号',
                        note: 'support_major1',
                        name: 'support_major',
                        type :0 ,/*管理员菜单*/
                        icon: 'xiaohaodingdahao',
                        href : "apps/plugin/support_major.html",
                       
                }, ]
            },
        	{
                grant: 5566,
                title: '视频管理(开发中)',
                note: 'video',
                type : 0 ,
                icon: 'video',
                children: [{
                        grant: 658958,
                        title: '历史视频',
                        note: 'video_his1',
                        name: 'video_his',
                        type :0 ,/*管理员菜单*/
                        icon: 'list',
                        href : "apps/video/video_his.html",
                        
                    },
                    {
                        grant: 6589258,
                        title: '发视频(开发中)',
                        note: 'send_video1',
                        name: 'send_video',
                        type :0 ,/*管理员菜单*/
                        icon: 'video',
                        href : "apps/video/send_video.html",
                       
                }, ]
            },
        	{
                grant: 123211233132,
                title: '素材库',
                note: 'drama',
                name: 'drama',
                type :1 ,
                icon: 'static',
                href : "apps/drama/drama.html",
                children :[],
            },{
                grant: 123132,
                title: '公司管理',
                note: 'users',
                type : 1 ,
                icon: 'gongsi',
                children: [
                    {
                        grant:123,
                        title: "公司账户",
                        name:"company",
                        type : 0 ,
                        icon:"wenjianjia",
                        href : "apps/userInfo/company.html",
                    },
                    {
                        grant:123,
                        title: "员工管理",
                        name:"userInfo",
                        type : 0 ,
                        icon:"yuangong",
                        href : "apps/userInfo/userInfo.html",
                    },
                     {
                        grant:123,
                        title: "登录管理",
                        name:"userInfo",
                        type : 0 ,
                        icon:"yuangong",
                        href : "apps/userInfo/loginUser.html",
                    },
                  
                ]
            },
        ],
    },
 {

        title: '后台管理',
        icon: 'douyin',
        isCurrent: false,
        grant: 21,
        menu: [{
                grant: 123211233132,
                title: '数据统计',
                note: 'statistics1',
                name: 'static1',
                type :1 ,/*管理员菜单*/
                icon: 'static',
                href : "apps/main.html",
                children :[],
            },{
                grant: 1233132,
                title: '客户管理',
                note: 'customerManage',
                type : 0 ,/*管理员菜单*/
                icon: 'renmen',
                 name:"customerManage",
                href : "apps/customerManage/customerManage.html",
                children: [
                 
                      
                ]
            },{
                grant: 123,
                title: '总手机',
                note: 'equipment',
                 name:"equipment1",
                type : 0 ,/*是否为管理员菜单*/
                icon: 'phone',
                 href : "apps/equipment/all_equipment.html",
                children: [

                ]

            },
    
          
        ],
    },

];

export default SystemMenu; 
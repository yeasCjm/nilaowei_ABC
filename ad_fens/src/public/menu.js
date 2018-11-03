var SystemMenu = [{
	title: '聊天管理',
	icon: '&#58879;',
	isCurrent: false,
	grant: 2550,
	menu: [{
		grant: 2351,
		title: '微信号',
		note: '我的',
		icon: '&#58889;',
		/*isCurrent: true,*/
		href: '/apps/message/am_my_weixin.html',
		children: []
	},{
		grant: 2426,
		title: '微信号',
		note: '部门',
		icon: '&#58889;',
		href: '/apps/message/am_group_weixin.html',
		children: []
	},{
		grant: 2335,
		title: '微信号',
		note: '所有',
		icon: '&#58889;',
		href: '/apps/message/am_all_weixin.html',
		children: []
	},{
		grant: 2364,
		title: '我的客户',
		note: '我的',
		icon: '&#59624;',
		href: '/apps/message/am_my_customer.html',
		children: []
	},{
		grant: 2363,
		title: '部门客户',
		note: '部门',
		icon: '&#59006;',
		href: '/apps/message/am_group_customer.html',
		children: []
	},{
		grant: 2360,
		title: '所有客户',
		note: '所有',
		icon: '&#58877;',
		href: '/apps/message/am_all_customer.html',
		/*isCurrent: true,*/
		children: []
	},{
		grant: 2627,
		title: '聊天记录列表',
		note: '我的',
		icon: '&#59893;',
		href: '/apps/message/am_my_customer_chat.html',
		children: []
	},{
		grant: 2626,
		title: '聊天记录列表',
		note: '本部门',
		icon: '&#59893;',
		href: '/apps/message/am_group_customer_chat.html',
		children: []
	},{
		grant: 2625,
		title: '聊天记录列表',
		note: '所有',
		icon: '&#59893;',
		href: '/apps/message/am_all_customer_chat.html',
		children: []
	},{
		grant: 2362,
		title: '聊天记录查询',
		note: '我的',
		icon: '&#59893;',
		href: '/apps/message/am_my_chat_history.html',
		children: []
	},{
		grant: 2361,
		title: '聊天记录查询',
		note: '本部门',
		icon: '&#59893;',
		href: '/apps/message/am_group_chat.html',
		children: []
	},{
		grant: 2336,
		title: '聊天记录查询',
		note: '所有',
		icon: '&#59893;',
		href: '/apps/message/am_all_chat.html',
		children: []
	},{
		grant: 2615,
		title: '重粉记录',
		icon: '&#59624;',
		href: '/apps/message/am_friend_repeat.html',
		children: []
	},{
		grant: 2636,
		title: '群成员重复查询',
		icon: '&#59624;',
		href: '/apps/message/am_group_repeat.html',
		children: []
	},{
		grant: 2669,
		title: '微信名片记录',
		icon: '&#58889;',
		href: '/apps/message/am_weixin_tick.html',
		children: []
	},{
		grant: 2534,
		title: '微信收款记录',
		note: '我的',
		icon: '&#59801;',
		href: '/apps/message/am_my_income_record.html',
		children: []
	},{
		grant: 2535,
		title: '微信收款记录',
		note: '部门',
		icon: '&#59801;',
		href: '/apps/message/am_group_income_record.html',
		children: []
	},{
		grant: 2408,
		title: '微信收款记录',
		note: '所有',
		icon: '&#59801;',
		href: '/apps/message/am_income_record.html',
		children: []
	},{
		grant: 1241,
		title: '我分配的客户',
		note: '我的',
		icon: '&#59515;',
		href: '/apps/message/am_my_alloc_customer.html',
		children: []
	},{
		grant: 2630,
		title: '所有分配的客户',
		note: '所有',
		icon: '&#59515;',
		href: '/apps/message/am_all_alloc_customer.html',
		children: []
	},/*{
		grant: 1345,
		title: '提醒的客户',
		icon: '&#58692;',
		href: '/apps/message/am_customer_remind.html',
		children: []
	},*//*{
		grant: 1201,
		title: '我创建的客户',
		icon: '&#59013;',
		href: '/apps/message/am_my_add_customer.html',
		children: []
	},{
		grant: 2537,
		title: '所有创建的客户',
		icon: '&#59013;',
		href: '/apps/message/am_all_addcustomer.html',
		children: []
	},{
		grant: 1241,
		title: '我分配的客户',
		icon: '&#59515;',
		href: '/apps/message/am_my_alloc_customer.html',
		children: []
	},{
		grant: 2630,
		title: '所有分配的客户',
		icon: '&#59515;',
		href: '/apps/message/am_all_alloc_customer.html',
		children: []
	},*/{
		grant: 512,
		title: '我共享的客户',
		icon: '&#59516;',
		href: '/apps/message/am_my_share_customer.html',
		children: []
	},{
		grant: 513,
		title: '共享给我的客户',
		icon: '&#58907;',
		href: '/apps/message/am_shareforme_customer.html',
		children: []
	},{
		grant: 2471,
		title: '删粉记录',
		icon: '&#59801;',
		href: '/apps/message/am_remove_friend.html',
		children: []
	},{
		grant: 2472,
		title: '微信登陆日志',
		icon: '&#59801;',
		href: '/apps/message/wx_login_logs.html',
		children: []
	},{
		grant: 2639,
		title: '微信风控日志',
		icon: '&#xe6a7;',
		href: '/apps/other/ao_2639.html',
		children: []
	},{
		grant: 2802,
		title: '微信会话统计',
		icon: '&#xe6a7;',
		href: '/apps/message/am_speakStat.html',
		children: []
	},{
		grant: 2803,
		title: '朋友圈数量统计',
		icon: '&#xe6a7;',
		href: '/apps/message/am_SNStat.html',
		children: []
	}
 ]
},{
	title: '订单管理',
	icon: '&#58678;',
	grant: 154,
	isCurrent: false,
	menu: [{
		grant: 156,
		title: '我的订单',
		note: '我的',
		icon: '&#58947;',
		href: '/apps/order/ao_my_order.html',
		children: []
	},{
		grant: 157,
		title: '部门订单',
		note: '部门',
		icon: '&#59516;',
		href: '/apps/order/ao_group_order.html',
		children: []
	},{
		grant: 155,
		title: '所有订单',
		note: '所有',
		icon: '&#58941;',
		href: '/apps/order/ao_all_order.html',
		children: []
	},{
		grant: 797,
		title: '业绩明细',
		note: '我的',
		icon: '&#58945;',
		href:'/apps/order/ao_my_score.html',
		children: []
	},{
		grant: 796,
		title: '业绩明细',
		note: '部门',
		icon: '&#58907;',
		href: '/apps/order/ao_group_score.html',
		children: []
	},{
		grant: 795,
		title: '业绩明细',
		note: '所有',
		icon: '&#58900;',
		href: '/apps/order/ao_all_score.html',
		children: []
	},{
		grant: 1235,
		title: '业绩统计',
		note: '部门',
		icon: '&#58907;',
		href: '/apps/order/ao_group_score_stat.html',
		children: []
	},{
		grant: 1247,
		title: '业绩统计',
		note: '所有',
		icon: '&#58912;',
		href: '/apps/order/ao_all_score_stat.html',
		children: []
	},{
		grant: 2786,
		title: '订单分类统计',
		note: '所有',
		icon: '&#58912;',
		href: '/apps/order/ao_all_order_stat.html',
		children: []
	},{
		grant: 1258,
		title: '签收订单',
		icon: '&#58912;',
		href: '/apps/order/ao_received_order.html',
		children: []
	},{
		grant: 2122,
		title: '签收排行榜',
		icon: '&#58910;',
		href: '/apps/order/ao_received_score.html',
		children: []
	},{
		grant: 1270,
		title: '待审核订单',
		icon: '&#58603;',
		href: '/apps/order/ao_not_verify_order.html',
		children: []
	},{
		grant: 2658,

		title: '待复审订单',
		icon: '&#58603;',
		href: '/apps/order/ao_mon_verify_order.html',
		children: []
	},{
		grant: 2657,
		title: '待财审订单',
		icon: '&#58603;',
		href: '/apps/order/ao_dul_verify_order.html',
		children: []
	}
	,{
		grant: 1620,
		title: '已审核订单',
		icon: '&#58901;',
		href: '/apps/order/ao_verified_order.html',
		children: []
	},{
		grant: 1277,
		title: '已发货订单',
		icon: '&#58903;',
		href: '/apps/order/ao_traded_order.html',
		children: []
	},{
		grant: 1505,
		title: '已收款订单',
		icon: '&#58608;',
		href: '/apps/order/ao_payment_order.html',
		children: []
	},{
		grant: 1357,
		title: '退货订单',
		icon: '&#58911;',
		href: '/apps/order/ao_return_order.html',
		children: []
	},{
		grant: 1466,
		title: '跟单记录',
		icon: '&#58899;',
		href: '/apps/order/ao_trace_record.html',
		children: []
	},{
		grant: 2653,
		title: '快递费记录',
		icon: '&#59801;',
		href: '/apps/order/ao_express_money.html',
		children: []
	},{
		grant: 2616,
		title: '已取消订单',
		icon: '&#58902;',
		href: '/apps/order/ao_cancel_order.html',
		children: []
	},{
		grant: 2655,
		title: '已确认订单',
		icon: '&#58941;',
		href: '/apps/order/ao_confirm_order.html',
		children: []
	}
   ]
},{
	title: '统&emsp;计',
	icon: '&#58874;',
	grant: 974,
	isCurrent: false,
	menu: [
/*	{
		grant: 974,
		title: '业绩墙',
		icon: '&#59702;',
		href: '/apps/statis/as_achievementWall.html',
		children: []
	},*/{
		grant: 2555,
		title: '进粉请求统计',
		note: '我的',
		icon: '&#59666;',
		href: '/apps/message/am_wxfans_my_stat.html',
		children: []
	},{
		grant: 2559,
		title: '进粉请求统计',
		note: '部门',
		icon: '&#59666;',
		href: '/apps/message/am_wxfans_group_stat.html',
		children: []
	},{
		grant: 2563,
		title: '进粉请求统计',
		note: '所有',
		icon: '&#59666;',
		href: '/apps/message/am_wxfans_all_stat.html',
		children: []
	},{
		grant: 2556,
		title: '进粉请求明细',
		note: '我的',
		icon: '&#59619;',
		href: '/apps/message/am_my_wx_fans.html',
		children: []
	},{
		grant: 2560,
		title: '进粉请求明细',
		note: '部门',
		icon: '&#59619;',
		href: '/apps/message/am_group_wx_fans.html',
		children: []
	},{
		grant: 2564,
		title: '进粉请求明细',
		note: '所有',
		icon: '&#59619;',
		href: '/apps/message/am_all_wx_fans.html',
		children: []
	},{
		grant: 2804,
		title: '广告进粉统计',
		note: '所有',
		icon: '&#59666;',
		href: '/apps/statis/am_fans_in.html',
		children: []
	},{
		grant: 2831,
		title: '广告统计',
		note: '所有',
		icon: '&#59666;',
		href: '/apps/statis/as_ad_stat.html',
		children: []
	},{
		grant: 2832,
		title: '广告关键词排行榜',
		note: '所有',
		icon: '&#59666;',
		href: '/apps/statis/as_keyword_stat.html',
		children: []
	},{
		grant: 2714,
		title: '数据反馈',
		icon: '&#59702;',
		href: '/apps/statis/as_msg_feedback.html',
		children: []
	},{
		grant: 366,
		title: '粉丝区域分析',
		icon: '&#59702;',
		href: '/apps/statis/as_AreaStat.html',
		children: []
	},{
		grant: 2614,
		title: '粉丝性别分析',
		icon: '&#59702;',
		href: '/apps/statis/as_fans_sex.html',
		children: []
	},{
		grant: 2135,
		title: '粉丝量分类统计',
		icon: '&#59702;',
		href: '/apps/statis/as_fans_type_static.html',
		children: []
	},{
		grant: 2280,
		title: '粉丝量分类转化统计',
		icon: '&#59702;',
		href: '/apps/statis/as_fans_classify_static.html',
		children: []
	},{
		grant: 2569,
		title: '粉丝活跃度',
		icon: '&#58940;',
		href: '/apps/statis/as_fans_vitality.html',
		children: []
	},{
	  grant: 2549,
		title: '员工产值统计',
		icon: '&#59802;',
		href: '/apps/statis/as_UserActive.html',
		children: []
	},{
		grant: 369,
		title: '审核订单分布图',
		icon: '&#59627;',
		href: '/apps/statis/as_order_checkChart.html',
		children: []
	},{
		grant: 370,
		title: '订单走势图',
		icon: '&#59632;',
		href: '/apps/statis/as_order_trendChart.html',
		children: []
	},{
		grant: 371,
		title: '单品畅销度分析',
		icon: '&#59800;',
		href: '/apps/statis/as_productSellStat.html',
		children: []
	},{
		grant: 373,
		title: '单品销售明细',
		icon: '&#58938;',
		href: '/apps/statis/as_productSellDetail.html',
		children: []
	},{
		grant: 1304,
		title: '物流报表',
		icon: '&#xe63d;',
		href: '/apps/statis/as_transportStat.html',
		children: []
	},{
		grant: 1410,
		title: '发货报表',
		icon: '&#xe63d;',
		href: '/apps/statis/as_sellGraph.html',
		children: []
	},{
	  grant: 1426,
		title: '签收报表',
		icon: '&#59639;',
		href: '/apps/statis/as_confirmReciveGraph.html',
		children: []
	},{
		grant: 1427,
		title: '退货报表',
		icon: '&#58912;',
		href: '/apps/statis/as_returnGraph.html',
		children: []
	},{
		grant: 1416,
		title: '单品销售统计',
		icon: '&#58900;',
		href: '/apps/statis/as_sellStat.html',
		children: []
	},/*{
		grant: 1675,
		title: '广告产出比',
		icon: '&#59780;',
		href: '/apps/statis/as_ad_outPut.html',
		children: []
	},{
		grant: 2643,
		title: '广告费统计',
		icon: '&#59701;',
		href: '/apps/statis/as_ad_staic.html',
		children: []
	},*/{
	  grant: 2647,
		title: '通话质量分析',
		icon: '&#59660;',
		href: '/apps/statis/as_tel_quality.html',
		children: []
	},{
		grant: 2747,
		title: '年底营业额报表',
		icon: '&#59639;',
		href: '/apps/statis/as_turnover.html',
		children: []
	},{
		grant: 2748,
		title: '首购复购年度报表',
		icon: '&#59639;',
		href: '/apps/statis/as_repurchase_tb.html',
		children: []
	},{
	  grant: 2664,
		title: '订单统计',
		note: '用户',
		icon: '&#59660;',
		href: '/apps/statis/as_9527.html',
		children: []
	},{
	  grant: 2665,
		title: '订单统计',
		note: '部门',
		icon: '&#59660;',
		href: '/apps/statis/as_9528.html',
		children: []
	},{
	  grant: 2666,
		title: '复购统计',
		note: '用户',
		icon: '&#59660;',
		href: '/apps/statis/as_9529.html',
		children: []
	},{
	  grant: 2667,
		title: '复购统计',
		note: '部门',
		icon: '&#59660;',
		href: '/apps/statis/as_9530.html',
		children: []
	},
  ]
},{
	title: '库存管理',
	icon: '&#58678;',
	grant: 183,
	isCurrent: false,
	menu: [{
		grant: 175,
		title: '采购单',
		icon: '&#xe69e;',
		href: '/apps/inventory/ai_purchase_orders.html',
		children: []
	},{
		grant: 178,
		title: '入库单',
		icon: '&#xe69f;',
		href: '/apps/inventory/ai_StockIn.html',
		children: []
	},{
		grant: 1096,
		title: '入库商品明细',
		icon: '&#xe6ae;',
		href: '/apps/inventory/ai_StockInDetail.html',
		children: []
	},{
		grant: 2825,
		title: '出库商品明细',
		icon: '&#xe6ae;',
		href: '/apps/inventory/ai_outProductList.html',
		children: []
	},{
		grant: 179,
		title: '出库单',
		icon: '&#xe62b;',
		href: '/apps/inventory/ai_StockOut.html',
		children: []
	},{
		grant: 180,
		title: '库存盘点单',
		icon: '&#xe80a;',
		href: '/apps/inventory/ai_StockCheck.html',
		children: []
	},{
		grant: 181,
		title: '库存调拨单',
		icon: '&#58943;',
		href: '/apps/inventory/ai_StockAdjust.html',
		children: []
	},{
		grant: 182,
		title: '商品现有库存',
		icon: '&#58944;',
		href: '/apps/inventory/ai_ProductStock.html',
		children: []
	},{
		grant: 184,
		title: '退货单',
		icon: '&#59051;',
		href: '/apps/inventory/ai_StockReturn.html',
		children: []
	},{
		grant: 185,
		title: '商品报废单',
		icon: '&#xe6a7;',
		href: '/apps/inventory/ai_ProductTrash.html',
		children: []
	},{
		grant: 174,
		title: '供应商管理',
		icon: '&#xe69f;',
		href: '/apps/inventory/ai_PurchaseCompany.html',
		children: []
	},/*{
		grant: 176,
		title: '供应商联系人',
		icon: '&#xe6af;',
		href: '/apps/inventory/ai_PurchaseContact.html',
		children: []
	},*/{
		grant: 177,
		title: '库存列表',
		icon: '&#xe8f7;',
		href: '/apps/inventory/ai_Storage.html',
		children: []
	}
  ]
},{
	title: '系统设置',
	icon: '&#58875;',
	grant: 1,
	isCurrent: false,
	menu: [{
		grant: 8,
		title: '岗位-职务',
		icon: '&#xe69e;',
		href: '/apps/system/as_station.html',
		children: []
	},{
		grant: 13,
		title: '工号设置',
		icon: '&#xe69f;',
		href: '/apps/system/as_working_set.html',
		children: []
	},{
		grant: 38,
		title: '功能权限',
		icon: '&#xe62b;',
		href: '/apps/system/as_privilege.html',
		children: []
	},{
		grant: 33,
		title: '系统参数',
		icon: '&#xe6ae;',
		href: '/apps/system/as_system_setting.html',
		children: []
	},
	{
		grant:  2731,
		title: '客户标识',
		icon: '&#xe6a7;',
		href: '/apps/system/as_customer_logo.html',
		children: []
	},{
		grant: 43,
		title: '分类定义',
		icon: '&#xe6a7;',
		href: '/apps/system/as_customer_property.html',
		children: []
	},{
	  grant: 2795,
		title: '广告来源',
		icon: '&#59048;',
		href: '/apps/system/as_customer_source.html',
		children: []
	},{
	  grant: 2830,
		title: '广告模板',
		icon: '&#59048;',
		href: '/apps/system/as_ad_module.html',
		children: []
	},{
	  grant: 2790,
		title: '部门排班',
		icon: '&#59048;',
		href: '/apps/system/as_ad_work.html',
		children: []
	},{
		grant: 1136,
		title: '违禁词设置',
		icon: '&#xe80a;',
		href: '/apps/system/as_stop_word.html',
		children: []
	}/*,{
		grant: 1136,
		title: '违禁词次数统计',
		icon: '&#xe80a;',
		href: '/apps/system/as_stop_word_count.html',
		children: []
	}*/,{
		grant: 2493,
		title: '员工微信状态定义',
		icon: '&#58943;',
		href: '/apps/system/as_userweixin_status.html',
		children: []
	},{
		grant: 583,
		title: '电话端口设置',
		icon: '&#59052;',
		href: '/apps/system/as_usercannelIP.html',
		children: []
	},{
		grant: 74,
		title: '数据库备份',
		icon: '&#59300;',
		href: '/apps/system/as_db_backups.html',
		children: []
	},{
		grant: 2545,
		title: '活跃度定义',
		icon: '&#58944;',
		href: '/apps/system/as_customer_activedefine.html',
		children: []
	},{
		grant: 1,
		title: '订单信息定义',
		icon: '&#59045;',
		href: '/apps/system/as_productKind.html',
		children: [{
				grant: 142,
				title: '产品分类定义',
				icon: '&#59045;',
				href: '/apps/system/as_productKind.html',
				children: []
			},{
				grant: 144,
				title: '产品基本信息',
				icon: '&#59051;',
				href: '/apps/system/as_product.html',
				children: []
			},{
				grant: 289,
				title: '支付方式定义',
				icon: '&#xe8f7;',
				href: '/apps/system/as_paymentMethod.html',
				children: []
			},{
				grant: 517,
				title: '订单类别定义',
				icon: '&#xe6a7;',
				href: '/apps/system/as_order_kind.html',
				children: []
				},{
				grant: 28,
				title: '订单状态定义',
				icon: '&#xe6a7;',
				href: '/apps/system/as_order_status.html',
				children: []
				},{
				grant: 48,
				title: '快递公司定义',
				icon: '&#xe69f;',
				href: '/apps/system/as_orderTransport.html',
				children: []
		},{
				grant: 23,
				title: '单据模板定义',
				icon: '&#xe6a7;',
				href: '/apps/system/as_template.html',
				children: []
				},
		]
	},/*{
		grant: 766,
		title: '快递单设计',
		icon: '&#xe6af;',
		href: '/apps/system/as_766.html',
		run:'express_set()',
		children: []
	},*/{
		grant: 2634,
		title: '二维码白名单',
		icon: '&#xe69e;',
		href: '/apps/system/as_white_qrcode.html',
		children: []
	},{
		grant: 1253,
		title: '其他功能',
		icon: '&#xe6a7;',
		/*href: '/apps/system/other.html',*/
		children: [
			{
				grant: 1717,
				title: '合并客户',
				icon: '&#xe6a7;',
				href: '/apps/system/as_merge_customer.html',
				run:'merge_customer.show()',
				children: []
			},
			{
				grant: 1253,
				title: '显示栏设置',
				icon: '&#xe6a7;',
				href: '/apps/system/as_clac_ordermoney.html',
				run:'Datagrid_Columns_Set.show()',
				children: []
			},{
				grant: 999999,
				title: '自定义检查设置',
				icon: '&#xe6a7;',
				href: '/apps/system/as_clac_ordermoney.html',
				run:'userDefined.show()',
				children: []
			},
			{
				grant: 2743,
				title: '导出权限',
				icon: '&#xe6a7;',
				href: '/apps/system/as_apply_pri.html',

				children: []
			},

			{
				grant: 999999,
				title: '订单金额除以10',
				icon: '&#xe6a7;',
				href: '/apps/system/as_clac_ordermoney.html',
				run:'as_clac_ordermoney()',
				children: []
			},
			/*{
				grant: 1253,
				title: '导入模板下载',
				icon: '&#xe6a7;',
				href: '/apps/system/as_clac_ordermoney.html',
				run:'as_download_template.show()',
				children: []
			},*/
			{
				grant: 1254,
				title: '纠正业绩',
				icon: '&#xe6a7;',
				href: '/apps/system/as_correct_performance.html',
				run:'as_correct_performance()',
				children: []
			},
			/*{
				grant: 1837,
				title: '一线资料导入',
				icon: '&#xe6a7;',
				href: '/apps/system/as_data_import.html',
				run:'as_data_import(this)',
				children: []
			},*/
			{
				grant: 999999,
				title: '权限及参数安全检查',
				icon: '&#xe6a7;',
				href: '/apps/system/as_check_safe.html',
				run:'as_check_safe()',
				children: []
			},
			{
				grant: 1484,
				title: '换部门后同步业绩',
				icon: '&#xe6a7;',
				href: '/apps/system/as_change_synchronous.html',
				run:'as_change_synchronous()',
				children: []
			},


			{
				grant: 691,
				title: '分布式服务器设置',
				icon: '&#xe6a7;',
				href: '/apps/system/as_server_setting.html',
				children: []
			},
			{
				grant: 2156,
				title: '员工等级定义',
				icon: '&#xe6a7;',
				href: '/apps/system/as_staff_level.html',
				children: []
			},{
				grant: 64,
				title: '省份管理',
				icon: '&#xe6a7;',
				href: '/apps/system/as_provinces.html',
				children: []
			},
			{
				grant: 69,
				title: '城市管理',
				icon: '&#xe6a7;',
				href: '/apps/system/as_city.html',
				children: []
			},
			{
				grant: 1673,
				title: '广告位定义-子来源',
				icon: '&#xe6a7;',
				href: '/apps/system/as_ad_bit_definition.html',
				children: []
			},
			/*{
				grant: 1499,
				title: '权限复制',
				icon: '&#xe6a7;',
				href: '/apps/system/as_permission_copy.html',
				run:'permission_copy.show()',
				children: []
			},{
				grant: 1499,
				title: '可配置面板参数',
				icon: '&#xe6a7;',
				href: '/apps/system/as_permission_copy.html',
				run:'configurable.show()',
				children: []
			},*/
			{
				grant: 2742,
				title: '语音转文字的配置',
				icon: '&#xe6a7;',
				href: '/apps/system/as_talk_to_word.html',
				children: []
			},
/*			{
				grant: 1637,
				title: '二维白名单',
				icon: '&#xe6a7;',
				href: '/apps/system/as_qr_whitelist.html',
				children: []
			},
*/

		],
	}
	]
},{
	title: '其&emsp;他',
	icon: '&#58876;',
	grant: 2566,
	isCurrent: false,
	menu: [{
		grant: 118,
		title: '站内短信发件箱',
		icon: '&#xe69e;',
		href: '/apps/other/ao_118.html',
		children: []
	},{
		grant: 119,
		title: '站内短信收件箱',
		icon: '&#xe69e;',
		href: '/apps/other/ao_119.html',
		children: []
	},{
		grant: 126,
		title: '通知公告',
		icon: '&#xe69f;',
		href: '/apps/other/ao_126.html',
		children: []
	},{
		grant:  2781,
		title: '客户文档',
		icon: '&#xe6a7;',
		href: '/apps/system/as_custom_document.html',
		children: []
	},{
		grant: 359,
		title: '内部文件',
		icon: '&#xe62b;',
		href: '/apps/other/ao_359.html',
		children: []
	},{
		grant: 2334,
		title: '手机登记',
		icon: '&#xe6ae;',
		href: '/apps/other/ao_2334.html',
		children: []
	},{
		grant: 2424,
		title: '手机卡登记',
		icon: '&#xe6a7;',
		href: '/apps/other/ao_2424.html',
		children: []
	},{
	  grant: 239,
		title: '个人记事',
		icon: '&#59048;',
		href: '/apps/other/ao_239.html',
		children: []
	},{
		grant: 240,
		title: '提醒设置',
		icon: '&#xe80a;',
		href: '/apps/other/ao_240.html',
		children: []
	},{
		grant: 53,
		title: '工号操作日志',
		icon: '&#58943;',
		href: '/apps/other/ao_53.html',
		children: []
	},{
		grant: 105,
		title: '所有回访记录',
		icon: '&#59052;',
		href: '/apps/other/ao_105.html',
		children: []
	},/*{
		grant: 2396,
		title: '常用语',
		icon: '&#58944;',
		href: '/apps/other/ao_2396.html',
		children: []
	},*/{
		grant: 1634,
		title: '客户查询',
		icon: '&#59045;',
		href: '/apps/other/ao_customer_search.html',
		children: []
	},{
		grant: 237,
		title: '我的通话录音',
		note: '我的',
		icon: '&#59051;',
		href: '/apps/other/ao_237.html',
		children: []
	},{
		grant: 501,
		title: '部门通话录音',
		note: '部门',
		icon: '&#xe69f;',
		href: '/apps/other/ao_501.html',
		children: []
	},{
		grant: 60,
		title: '所有通话录音',
		note: '所有',
		icon: '&#xe8f7;',
		href: '/apps/other/ao_60.html',
		children: []
	},{
		grant: 1249,
		title: '部门录音统计',
		note: '部门',
		icon: '&#xe6af;',
		href: '/apps/other/ao_1249.html',
		children: []
	},{
		grant: 1248,
		title: '所有录音统计',
		note: '所有',
		icon: '&#xe6a7;',
		href: '/apps/other/ao_1248.html',
		children: []
	},{
		grant: 272,
		title: '手机短信发件箱',
		note: '我的',
		icon: '&#xe6a7;',
		href: '/apps/other/ao_272.html',
		children: []
	},{
		grant: 1185,
		title: '手机短信发件箱',
		note: '部门',
		icon: '&#xe6a7;',
		href: '/apps/other/ao_1185.html',
		children: []
	},{
		grant: 301,
		title: '手机短信发件箱',
		note: '所有',
		icon: '&#xe6a7;',
		href: '/apps/other/ao_301.html',
		children: []
	},{
		grant: 271,
		title: '手机短信收件箱',
		note: '我的',
		icon: '&#xe6a7;',
		href: '/apps/other/ao_271.html',
		children: []
	},{
		grant: 1184,
		title: '手机短信收件箱',
		note: '部门',
		icon: '&#xe6a7;',
		href: '/apps/other/ao_1184.html',
		children: []
	},{
		grant: 302,
		title: '手机短信收件箱',
		note: '所有',
		icon: '&#xe6a7;',
		href: '/apps/other/ao_302.html',
		children: []
	}/*{
		grant: 2619,
		title: '我的手机短信',
		icon: '&#xe6a7;',
		href: '/apps/other/ao_2619.html',
		children: [{
			grant: 272,
			title: '手机短信发件箱',
			icon: '&#xe6a7;',
			href: '/apps/other/ao_272.html',
			children: []
		},{
			grant: 271,
			title: '手机短信收件箱',
			icon: '&#xe6a7;',
			href: '/apps/other/ao_271.html',
			children: []
		}]
	},{
		grant: 2620,
		title: '部门手机短信',
		icon: '&#xe6a7;',
		href: '/apps/other/ao_2620.html',
		children: [{
			grant: 1185,
			title: '部门已发的手机短信',
			icon: '&#xe6a7;',
			href: '/apps/other/ao_1185.html',
			children: []
		},{
			grant: 1184,
			title: '部门已收的手机短信',
			icon: '&#xe6a7;',
			href: '/apps/other/ao_1184.html',
			children: []
		}]
	},{
		grant: 2621,
		title: '所有手机短信',
		icon: '&#xe6a7;',
		//href: '/apps/other/sms_msg.html',
		children: [{
			grant: 301,
			title: '所有已发的手机短信',
			icon: '&#xe6a7;',
			href: '/apps/other/ao_301.html',
			children: []
		},{
			grant: 302,
			title: '所有已收的手机短信',
			icon: '&#xe6a7;',
			href: '/apps/other/ao_302.html',
			children: []
		}]
	}*/
	]
}
];

module.exports = {SystemMenu : SystemMenu};

var mainPlatform = {

	init: function(){
		this.bindEvent();
		this._createTopMenu();
	},

	bindEvent: function(){
		var self = this;
		// 顶部大菜单单击事件
		$(document).on('click', '.pf-nav-item', function() {
			  //隐藏首页
				$("#index_page").hide();

				$('.pf-nav-item').removeClass('current');
        $(this).addClass('current');

        // 渲染对应侧边菜单
        var m = $(this).data('sort');
        self._createSiderMenu(SystemMenu[m], m);
    });


    $(document).on('click', '.sider-nav .pf-menu-title', function() {

			     //隐藏首页
			     $("#index_page").hide();
				 $("#pf-page").children('div[arrindex="'+$(".pf-nav .current").data("sort")+'"]').show();


        	  $(this).closest('.pf-sider').find('.sider-nav li').removeClass('current');
              $(this).closest('li').addClass('current');


            // if is no-child
            if($(this).closest('.no-child').size() > 0) {
			if($(this).attr("onclick")) return false;

            	var index = $(this).closest('.pf-sider').attr('arrindex');
	        	  if($('.easyui-tabs1[arrindex='+ index +']').tabs('exists', $(this).find('.sider-nav-title').text())){
	        		      $('.easyui-tabs1[arrindex='+ index +']').tabs('select', $(this).find('.sider-nav-title').text())
	        		      return false;
	        	  }

	        	  $('.easyui-tabs1[arrindex='+ index +']').tabs('add',{
										title: $(this).find('.sider-nav-title').text(),
										content: '<iframe class="page-iframe" src="'+ $(this).closest('.no-child').data('href') +'" frameborder="no" border="no" height="100%" width="100%" scrolling="auto"></iframe>',
										closable: true
				      });
            }
            //$('iframe').attr('src', $(this).data('src'));
    });

        $(document).on('click', '.sider-nav-s > li', function(e){
        	//取消tab渲染
        	if($(this).find('a').attr("onclick")) return false;

        	var index = $(this).closest('.pf-sider').attr('arrindex');
        	var titleName = $(this).find('a').eq(0).text();
        	var url = $(this).data('href');
        	var $this = $(this);
        	var $target = $(e.target);

        	if($target.closest('ul').hasClass('sider-nav-t')) {
        		return;
        	}

        	$(this).closest('.pf-sider').find('.active').removeClass('active');
    		$(this).addClass('active');

        	if(!url) {
        		$this.toggleClass('no-child');
        		return;
        	}

        	if($('.easyui-tabs1[arrindex='+ index +']').tabs('exists', titleName)){
        		$('.easyui-tabs1[arrindex='+ index +']').tabs('select', titleName)
        		return;
        	}
        	$('.easyui-tabs1[arrindex='+ index +']').tabs('add',{
				title: titleName,
				content: '<iframe class="page-iframe" src="'+ $(this).data('href') +'" frameborder="no" border="no" height="100%" width="100%" scrolling="auto"></iframe>',
				closable: true
			});
        });

        $(document).on('click', '.sider-nav-t > li', function(e){

        	var index = $(this).closest('.pf-sider').attr('arrindex');
        	var titleName = $(this).find('a').eq(0).text();
        	var url = $(this).data('href');
        	var $this = $(this);

        	$(this).closest('.pf-sider').find('.active').removeClass('active');
    		$(this).addClass('active');

        	if(!url) {

        		return;

        	}

        	if($('.easyui-tabs1[arrindex='+ index +']').tabs('exists', titleName)){
        		$('.easyui-tabs1[arrindex='+ index +']').tabs('select', titleName)
        		$(this).parent().closest('li').addClass('active');
        		return;
        	}
        	$('.easyui-tabs1[arrindex='+ index +']').tabs('add',{
				title: titleName,
				content: '<iframe class="page-iframe" src="'+ $(this).data('href') +'" frameborder="no" border="no" height="100%" width="100%" scrolling="auto"></iframe>',
				closable: true
			});

        	$(this).parent().closest('li').addClass('active');

			e.stopPropagation();
        });

        //左侧菜单收起
        $(document).on('click', '.toggle-icon', function() {
            $(this).closest("#pf-bd").toggleClass("toggle");
            $(window).resize();
        });

        $('.pf-logout a').on('click', function() {
        	$.messager.confirm({
        		title: '退出登录',
        		ok: '确定',
        		cancel: '取消',
        		msg: '你确定要退出系统吗？',
        		fn: function(r) {
        			if(r) { User_Logout(); }
        		}
        	});
        	$('.messager-window').find('.l-btn-small').eq(0).addClass('l-btn-selected');
        })

         //关闭当前
	     $('#mm-tabclose').click(function(){
	         var currtab_title = $('#mm').data("currtab");
	         $(".easyui-tabs1:visible").tabs('close',currtab_title);
	     })
	     //全部关闭
	     $('#mm-tabcloseall').click(function(){
	         $(".easyui-tabs1:visible").find('.tabs li').each(function(i,n){
	             $(".easyui-tabs1:visible").tabs('close', $(n).text());
	         });
	     });
	     //关闭除当前之外的TAB
	     $('#mm-tabcloseother').click(function(){
	         var currtab_title = $('#mm').data("currtab");
	         $('.tabs-inner span').each(function(i,n){
	             if($(n).text() !== currtab_title)
	                 $(".easyui-tabs1:visible").tabs('close',$(n).text());
	         });
	     });

	},


	//创建顶部菜单
	_createTopMenu: function(){
		var menuStr = '';
	  var currentIndex = 0;
		var privilege = DmConf.myinfo.privilege;
		var manager = DmConf.myinfo.type_id;
		for(var i = 0, len = SystemMenu.length; i < len; i++) {
			      if(!SystemMenu[i]) continue;



						//权限控制
				if(100 != manager && DmConf.sys("disable_stock_manager") && 183 == SystemMenu[i].grant ) continue;
			    if(100 != manager && !privilege[SystemMenu[i].grant.toString()]) continue; //检查当前用户权限

 				 if(SystemMenu.every(function(a,b){return a.isCurrent == false})){//渲染当前的有权限模块
			       		SystemMenu[i].isCurrent = true;
			       }
			      menuStr += '<li class="pf-nav-item project" data-sort="'+ i +'" data-menu="system_menu_'+i+'">'+
                      '<a style="cursor:pointer">'+
                          '<span class="iconfont">'+ SystemMenu[i].icon +'</span>'+
                          '<span class="pf-nav-title">'+ SystemMenu[i].title +'</span>'+
                      '</a></li>';
            // 渲染当前
            if (SystemMenu[i].isCurrent){

            	currentIndex = i;
            	this._createSiderMenu(SystemMenu[i], i);
            }
		}

		$('.pf-nav').html(menuStr);

		$.each($('.pf-nav-item'),function(idx,it){
			if($(it).data('sort') == currentIndex){
				$(it).addClass('current');
			}
		})

	},


	_createSiderMenu: function(menu, index){
		var privilege = DmConf.myinfo.privilege;
		var manager = DmConf.myinfo.type_id;
		if(100 != manager && !privilege[menu.grant.toString()]) return;


		$('.pf-sider').hide();
		this._createPageContainer(index);
		if($('.pf-sider[arrindex='+ index +']').size() > 0) {
			$('.pf-sider[arrindex='+ index +']').show();
			return false;
		};
		var menuStr = '<h2 class="pf-model-name">'+
                    '<span class="iconfont">'+ menu.icon+'</span>'+
                    '<span class="pf-name">&nbsp;'+ menu.title +'</span>'+
                    '<span class="toggle-icon"></span>'+
                '</h2><ul class="sider-nav">';

        for(var i = 0, len = menu.menu.length; i < len; i++){
					if(100 != manager && !privilege[menu.menu[i].grant.toString()]) continue;
					if(100 == manager && menu.menu[i].note){
						 if( -1 < menu.menu[i].note.indexOf('我的') ||  -1 < menu.menu[i].note.indexOf('部门') ) continue;
					}

        	var m = menu.menu[i];
					var m_href = m.href + '?m=' + m.grant + "&t=" + new Date().valueOf();
					var mstr = '';
        	var str = '';

					var func = m.run ? ' onclick="'+m.run+'" ' : "";

        	if(m.isCurrent){
        		if(m.children && m.children.length > 0) {
        			str = '<li class="current">';
        		}else{
        			str = '<li class="current no-child" data-href="'+ m_href +'">';
        		}
        	}else{
        		if(m.children && m.children.length > 0) {

        			str = '<li>';
        		}else{
        			str = '<li class="no-child" data-href="'+ m_href +'">';
        		}
        	}

           str += '<a style="cursor:pointer" class="pf-menu-title" ' + func + '>'+
                '<span class="iconfont sider-nav-icon">'+ m.icon +'</span>'+
                '<span class="sider-nav-title">'+ m.title +'</span>'+
                '<i class="iconfont">&#xe642;</i>'+
            '</a>'+
            '<ul class="sider-nav-s">';
            var childStr = '';
            for(var j = 0, jlen = m.children.length; j < jlen; j++){
            	var child = m.children[j];
				var func_child = child.run ? ' onclick="'+child.run+'" ' : "";
				var m_href = child.href + "?m=" + child.grant + "&t=" + new Date().valueOf();

            	var dataHref = (child.children && child.children.length > 0) ? '' : ('data-href="' + m_href + '"');
            	if(child.isCurrent){
            		childStr += '<li class="active ' + (!dataHref ? 'no-child' : '') + '" text="'+ child.title +'" ' + dataHref + '><a href="#" '+func_child+'>'+ child.title +'</a>' + this._renderThreeLevelMenu(child.children) + '</li>';
            		$('.easyui-tabs1[arrindex='+ index +']').tabs('add',{
									title: child.title,
									content: '<iframe class="page-iframe" src="'+ child.href +'" frameborder="no" border="no" height="100%" width="100%" scrolling="auto"></iframe>',
									closable: true
								});
            	}else {
            		childStr += '<li class="' + (!dataHref ? 'no-child' : '') + '" text="'+ child.title +'" ' + dataHref + '><a href="#" '+func_child+'>'+ child.title +'</a>' + this._renderThreeLevelMenu(child.children) + '</li>';
            	}
            }
            mstr = str + childStr + '</ul></li>';
            menuStr += mstr;

        }
        $('.pf-sider-wrap').append($('<div class="pf-sider" arrindex="'+ index +'"></div>').html(menuStr + '</ul>'));

	},

	_renderThreeLevelMenu: function(list) {

		var html = '<ul class="sider-nav-t">';
		var i = 0;
	  var len;
	  var one;

		if(!list || len === 0) return '';

		len = list.length;
		for(;i<len;i++) {
			one = list[i];
			html += '<li text="' + one.title +'" data-href="' + one.href+ "?m=" + one.grant + "&t=" + new Date().valueOf() + '"><a href="#">' + one.title + '</a></li>';
		}
		html += '</ul>';

		return html;
	},

	_createPageContainer: function(index){
		$('.easyui-tabs1').hide();

		if($('.easyui-tabs1[arrindex='+ index +']').size() > 0){
			$('.easyui-tabs1[arrindex='+ index +']').show();
			return false;
		}
		var $tabs = $('<div class="easyui-tabs1" arrindex="'+ index +'" style="width:100%;height:100%;">');

		$('#pf-page').append($tabs);
		$tabs.tabs({
	      tabHeight: 23,
	      onSelect:function(title, index){
	        var currentTab = $tabs.tabs("getSelected");
	        var $active, $parent;
	        if(currentTab.find("iframe") && currentTab.find("iframe").size() && !currentTab.find("iframe").attr("src")){
	            currentTab.find("iframe").attr("src",currentTab.find("iframe").attr("src"));
	        }
	        currentTab.find("iframe").resize();
	        $('.pf-sider:visible').find('.sider-nav-s li').removeClass('active');
	        var $active = $('.pf-sider:visible').find('.sider-nav-s li[text='+ title +']').addClass('active');
	        var $parent = $active.parent();
	        if($parent.hasClass('sider-nav-t')) {
	        	$parent.closest('li').addClass('active');
	        }
	      }
	    });

	    $tabs.find('.tabs-header').on('contextmenu', function(e){
	    	e.preventDefault();
	    	if($(e.target).closest('li').size() > 0 || $(e.target).is('li')){
	    		$('#mm').menu('show', {
		             left: e.pageX,
		             top: e.pageY,
		         });
	    		var subtitle = $(e.target).closest('li').size() ? $(e.target).closest('li') : $(e.target);
        		$('#mm').data("currtab",subtitle.text());
	    	}
	    })
	}

};

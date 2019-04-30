/**
 * 一个模块的主控界面的容器，用来安放各个模块控件以及协调他们之间的关系
 */


Ext.define('SafetyPlatform.view.module.Module', {
	extend : 'Ext.panel.Panel',
 
	alias : 'widget.modulepanel',
 
	requires : ['SafetyPlatform.view.module.ModuleController','SafetyPlatform.view.module.ModuleModel'],
 
	uses : ['SafetyPlatform.view.module.region.RegionMenuTree','SafetyPlatform.view.module.enterinfo.EnterInfoTree','SafetyPlatform.view.main.region.Center'],
 
	controller : 'module',
	// MVVM架构的控制器的名称，main控制器会自动加载，这个控制器不会自动加载，需要在requires中指定，不知道是为什么
	viewModel : {
		type : 'module'
	},
	
	layout : 'border', // 模块采用border布局
 
	initComponent : function() {
        var mytype = '';
        var myid = ''
		//this.glyph = this.getViewModel().get('tf_glyph'); // 由于上面的glyph的bind无效，因此需要在这里加入glyph的设置
		if(this.mytype == 1){
			mytype = 'enterinfotree'

		}else{
			mytype = 'regionmenutree'
		}

        console.log("mytype",this.mytype);

		this.items = [{

                // xtype : 'regionmenutree', // 导航区域
                // region : 'west',
                // width : 250,
                // mytype : this.mytype,
                //collapsible : true,
                //split : true

					//collapsible : true,
					//split : true
					// 	xtype:'viewport',
					// 	autoShow:true,
					// 	header:false,
					// 	width:'100%',
					// 	height:'100%',
					// 	header:false,
					// 	layout:'hbox',
					// 	y:0,
					// 	//closable:true,
					// 	items: [
					// 		{
					// 			items :
					// 				[

                                            xtype : mytype, // 导航区域
                                            region : 'west',
											 width : 250,
											// split : true,
                                            //contentEl : 'contentLeft',
                                            mytype : this.mytype
						// 				}
						// 			],
						// 		flex:1,
						// 		y:0,
						// 		contentEl : 'contentLeft',
						// 		id : 'leftContent',
						// 		width: "100%",
						// 		autoScroll: true,
                        //
						// 	},
						// 	{
						// 		flex:4,
						// 		y:0,
						// 		contentEl : 'contentIframe',
						// 		id : 'mainContent',
						// 		height : "100%"
                        //
						// 	}
						// ]
					},

					{
						region : 'center', // 中间面版
						xtype : 'tabpanel',
						id:'centerpanel',
                        layout:'fit'
					}];

		this.callParent();
	}
 
});
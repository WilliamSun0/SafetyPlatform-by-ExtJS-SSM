/**
 * 一个模块的主控界面的容器，用来安放各个模块控件以及协调他们之间的关系
 */
Ext.define('SafetyPlatform.view.module.Module', {
	extend : 'Ext.panel.Panel',
 
	alias : 'widget.modulepanel',
 
	requires : ['SafetyPlatform.view.module.ModuleController','SafetyPlatform.view.module.ModuleModel'],
 
	uses : ['SafetyPlatform.view.module.region.RegionMenuTree','SafetyPlatform.view.main.region.Center'],
 
	controller : 'module',
	// MVVM架构的控制器的名称，main控制器会自动加载，这个控制器不会自动加载，需要在requires中指定，不知道是为什么
	viewModel : {
		type : 'module'
	},
	
	layout : 'border', // 模块采用border布局
 
	initComponent : function() {
		//this.glyph = this.getViewModel().get('tf_glyph'); // 由于上面的glyph的bind无效，因此需要在这里加入glyph的设置
		this.items = [{
					xtype : 'regionmenutree', // 导航区域
					region : 'west',
					width : 250,
					//collapsible : true,
					split : true
					},
					{
						region : 'center', // 中间面版
						xtype : 'maincenter',
						id:'x'
					}];

 
		this.callParent();
	}
 
})
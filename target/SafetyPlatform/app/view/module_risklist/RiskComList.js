/**
 * 一个模块的主控界面的容器，用来安放各个模块控件以及协调他们之间的关系
 */
Ext.define('SafetyPlatform.view.module_risklist.RiskComList', {
	extend : 'Ext.panel.Panel',
 
	alias : 'widget.risklistpanel',
 
	requires : ['SafetyPlatform.view.module_risklist.RiskComListController','SafetyPlatform.view.module_risklist.RiskComListModel'],
 
	uses : ['SafetyPlatform.view.module_test.TestGrid'],
 
	controller : 'RiskComList',
	// MVVM架构的控制器的名称，main控制器会自动加载，这个控制器不会自动加载，需要在requires中指定，不知道是为什么
	viewModel : {
		type : 'RiskComList'
	},

	layout : 'border', // 模块采用border布局
 
	initComponent : function() {
		//this.glyph = this.getViewModel().get('tf_glyph'); // 由于上面的glyph的bind无效，因此需要在这里加入glyph的设置
		this.items = [{
					xtype : 'risklistgrid', // 导航区域
					region : 'center',
					
				}
		]
 
		this.callParent();
	}
 
})
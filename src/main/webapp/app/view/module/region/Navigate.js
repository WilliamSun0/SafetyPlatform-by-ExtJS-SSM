/**
 * 导航区域的主控界面,这是这个系统的核心控件之一
 */
 
Ext.define('SafetyPlatform.view.module.region.Navigate', {
			extend : 'Ext.panel.Panel',
			alias : 'widget.navigate',

			requires:['SafetyPlatform.view.module.region.RegionMenuTree'],

			uses: ['SafetyPlatform.view.module.region.RegionMenuTree'],
 
			// glyph : 0xf0d0,
			title : '导航',

			items:{
				xtype:'regionmenutree',
				width : 250,
			},
 
			initComponent : function() {
 
				this.callParent();
			},

		})
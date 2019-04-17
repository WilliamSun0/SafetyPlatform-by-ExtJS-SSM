/**
 * 系统主页的顶部区域，主要放置系统名称，菜单，和一些快捷按钮
 */
Ext.define('SafetyPlatform.view.main.region.Top', {
 
			extend : 'Ext.toolbar.Toolbar',
 
			alias : 'widget.maintop', // 定义了这个组件的xtype类型为maintop
			
			uses : ['SafetyPlatform.ux.ButtonTransparent'],
			 
			defaults : {
				xtype : 'buttontransparent'//设置所有控件的默认按钮是透明
			},
	//登录时根据具体的权限加载相应的模块并传入参数

    // initComponent : function() {
				//var thirdparty_type = 1;
			items : [{
						xtype : 'image',
						bind : { // 数据绑定到MainModel中data的ystem.iconUrl
							hidden : '{!system.iconUrl}', // 如果system.iconUrl未设置，则此image不显示
							src : '{system.iconUrl}' // 根据system.iconUrl的设置来加载图片
						}
					}, {
						xtype : 'label',
						bind : {
							text : '{system.name}' // text值绑定到system.name
						},
						style : 'font-size : 20px; color : blue;'
					}, ' ', {
						text : '辖区企业数据',
						handler:'onRegionChartClick',
						glyph: 0xf080
					}, {
						text : '风险评级企业',
						handler:'onRiskListMenuClick',
						glyph: 0xf0e4
					}, {
						text : '行政执法',
						glyph: 0xf0a1
					},'->', '->', {//->空出距离
						text : '角色管理',
						glyph: 0xf007
					},{
						text: '修改密码',
						glyph: 0xf023
					},{
						text: '注销',
						glyph:  0xf011
					},{
						xtype : 'label',
						bind : {
							text : '当前用户:{user.name}' // text值绑定到system.name
						},
						style : 'font-size : 15px;'
					},
					{
						glyph : 0xf102,
						handler : 'hiddenTopBottom',
						tooltip : '隐藏顶部和底部区域'
					}
					
					]
 
		// }

})
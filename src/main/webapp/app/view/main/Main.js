/**
 * This class is the main view for the application. It is specified in app.js as
 * the "autoCreateViewport" property. That setting automatically applies the
 * "viewport" plugin to promote that instance of this class to the body element.
 * 
 * TODO - Replace this content of this view to suite the needs of your
 * application.
 */
Ext.define('SafetyPlatform.view.main.Main', {
	extend : 'Ext.container.Container',
 
	xtype : 'app-main',

	requires : ['SafetyPlatform.view.main.MainController', 'SafetyPlatform.view.main.MainModel'],
 
	uses : ['SafetyPlatform.view.main.region.Top','SafetyPlatform.view.main.region.Center'],
 
	controller : 'main',
	// MVVM架构的控制器的名称，会在当前路径中根据‘Main’ + Controller 来确定文件名
	// 这个我没找到其他任何可以自动加载MainController.js的依据，只能作上面的判断了
	viewModel : {
		type : 'main'
		// MVVM架构的viewModel的类型，会在当前路径中根据‘Main’ + Model 来确定文件名
	},
 
	layout : {
		type : 'border' // 系统的主页面的布局
	},
 
	items : [{
				xtype : 'maintop',
				region : 'north' // 把他放在最顶上
			},
			{
				region : 'center', // 中间面版
				xtype : 'maincenter',
				
			}],
	initComponent : function() {
			Ext.setGlyphFontFamily('FontAwesome'); // 设置图标字体文件，只有设置了以后才能用glyph属性
			this.callParent();
	},
});
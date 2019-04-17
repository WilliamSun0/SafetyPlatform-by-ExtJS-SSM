/**
 * 一个模块的grid上面显示的toolbar,里面放置了各种操作按钮 暂时还没有考虑到权限
 */
Ext.define('SafetyPlatform.view.module.region.hccgToolBar', {
	extend : 'Ext.toolbar.Toolbar',
	alias : 'widget.hccgtb',
	//uses : ['app.ux.GridSearchField'],
	initComponent : function() {
		this.items = [{
            xtype : "pagingtoolbar",
            pageSize : 12,
            store:'hckgs_id',
            displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
            emptyMsg: "没有数据",
            beforePageText: "当前页",
            afterPageText: "共{0}页",
            displayInfo: true

		}];
		this.callParent();
	}
})
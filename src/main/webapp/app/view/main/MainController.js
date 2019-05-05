/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('SafetyPlatform.view.main.MainController', {
    extend: 'Ext.app.ViewController',

	alias: 'controller.main',
	
	//使用Grid
	requires:['SafetyPlatform.view.module.Module','SafetyPlatform.view.module_risklist.GridRiskComList'],//alias:risklisgrdi

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    
	// 隐藏顶部和底部的按钮事件
	hiddenTopBottom : function() {
		// 如果要操纵控件，最好的办法是根据相对路径来找到该控件，用down或up最好，尽量少用getCmp()函数。
		this.getView().down('maintop').hide();
		
		if (!this.showButton) { // 显示顶部和底部的一个控件，在顶部和底部隐藏了以后，显示在页面的最右上角
			this.showButton = Ext.widget('component', {
						glyph : 0xf013,
						view : this.getView(),
						floating : true,
						x : document.body.clientWidth - 32,
						y : 0,
						height : 4,
						width : 26,
						style : 'background-color:#cde6c7',
						listeners : {
							el : {
								click : function(el) {
									var c = Ext.getCmp(el.target.id); // 取得component的id值
									c.view.down('maintop').show();
									c.hide();
								}
							}
						}
					})
		};
		this.showButton.show();
	},

	// 如果窗口的大小改变了，并且顶部和底部都隐藏了，就要调整显示顶和底的那个控件的位置
	onMainResize : function() {
		if (this.showButton && !this.showButton.hidden) {
			this.showButton.setX(document.body.clientWidth - 32);
		}
	},
	
	// 选择了主菜单上的菜单后执行
    onRegionChartClick : function() {

        //this.getView().down('regionmenutree').reload();
        //Ext.ComponentQuery.query('regionmenutree').load();

	},

    onRiskListMenuClick : function() {
        var maincenter = this.getView().down('panel');

        maincenter.removeAll();

        console.log('onRiskListMenuClick');

        maincenter.add({
            xtype : 'risklistgrid',
            closable : false,
            reorderable : true
        });

    },
    onEnterInfoManageClick:function() {
        var maincenter = this.getView().down('panel');

        maincenter.removeAll();

        console.log('onEnterInfoManageClick');

        maincenter.add({
            xtype : 'modulepanel',
            closable : false,
            reorderable : true,
			mytype:1
        });

    },
    onHiddenRiskCheckCorrectClick:function() {
        var maincenter = this.getView().down('panel');

        maincenter.removeAll();

        console.log('onHiddenRiskCheckCorrectClick');

        maincenter.add({
            xtype : 'modulepanel',
            closable : false,
            reorderable : true
        });
    },

    onLowEnforceClick:function() {
        var maincenter = this.getView().down('panel');

        maincenter.removeAll();

        console.log('行政执法');

        maincenter.add({
            xtype : 'modulepanel',
            closable : false,
            reorderable : true,
            mytype:2
        });
    },
});

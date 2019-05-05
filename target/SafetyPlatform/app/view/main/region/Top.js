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
    id:'nmb',
	//登录时根据具体的权限加载相应的模块并传入参数

    // initComponent : function() {
				//var thirdparty_type = 1;

		// }
    initComponent : function() {
			    var me = this;

        var userName = Ext.util.Cookies.get("userName");


        var myitems = [ {
            text : '辖区企业数据',
            handler:'onRegionChartClick',
            glyph: 0xf080
        }, {
            text : '风险评级企业',
            handler:'onRiskListMenuClick',
            glyph: 0xf0e4
        }, {
            text : '行政执法',
            glyph: 0xf0a1,
            handler:'onLowEnforceClick',
        },{
            text : '企业信息管理',
            handler:'onEnterInfoManageClick',
            glyph: 0xf080
        }, {
            text : '隐患排查与整改',
            handler:'onHiddenRiskCheckCorrectClick',
            glyph: 0xf0e4
        }

        ];

        var platMenus = ['->', '->', {//->空出距离
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
                    text : '当前用户:'+userName.toString() // text值绑定到system.name
                },
                style : 'font-size : 15px;'
            },
            {
                glyph : 0xf102,
                handler : 'hiddenTopBottom',
                tooltip : '隐藏顶部和底部区域'
            }];



        var nb = [{
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
        }, ' '];

        var menus = this.up("container").menus;


        for (var i = 0;i<menus.length;i++){
            nb.push(myitems[menus[i]]);
        }
        //me.getViewModel().setData("user.name",1);
        for (var j = 0;j<platMenus.length;j++){
            nb.push(platMenus[j]);
        }

        this.items = nb;
        console.log('menus',menus) ;
        //cookie undefined，另外一个问题是如果用户不允许保存cookie
        //console.log('user',userName.getvalue) ;
        this.callParent();
    }

})
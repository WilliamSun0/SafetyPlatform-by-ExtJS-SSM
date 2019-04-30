Ext.define('SafetyPlatform.view.module_login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    id:'loginwindow',

    requires: [
        'Ext.form.Panel',
        'SafetyPlatform.controller.login.LoginController'
    ],

    controller:'login',

    bodyPadding: 10,
    title:'用户登录',

    closable:false,//窗口是否可关闭
    autoShow:true,//windows默认是隐藏，要设置为显示

    items: {
        xtype:'form',
        reference: 'form',

        items: [{
            xtype:'textfield',
            name: 'userName',
            fieldLabel: '用户名',
            allowBlank: false
        },{
            xtype:'textfield',
            name: 'password',
            fieldLabel: '密码',
            allowBlank: false
        }],
        buttons: [{
            text:'登录',
            formBind: true,//按钮是否可用取决于form
            listeners:{
                click: 'onLoginClick'
            }
        }]
    }
});
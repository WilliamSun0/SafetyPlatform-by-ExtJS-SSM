Ext.define('SafetyPlatform.controller.login.LoginController',{
    extend:'Ext.app.ViewController',
    alias:'controller.login',

    onLoginClick: function() {

        var win =  Ext.getCmp('loginwindow');
        var logform = this.getView().down('form').getForm();
        if (logform.isValid()) {
            // form.url = 'SafetyPlatform/login';
            // method: 'POST',
            logform.submit({
                url :'/SafetyPlatform/login',
                method: 'POST',
                success: function(form, action) {
                    //Ext.Msg.alert('提示信息', action.result.restMsg);
                    var now = new Date();
                    var expiry = new Date(now.getTime() +  24 * 60 * 60 * 1000);//保存一天
                    //保存登陆信息
                    Ext.util.Cookies.set('menus',action.result.exclusiveMenus,expiry);
                    //这里加密存储密码
                    Ext.util.Cookies.set('userName',1,expiry);
                    Ext.util.Cookies.set('password',1,expiry);
                    console.log("log",Ext.util.Cookies.get("userName")+Ext.util.Cookies.get("password")+Ext.util.Cookies.get("menus"));
                    win.destroy();

                    // Add the main view to the viewport
                    Ext.create({
                        xtype: 'app-main'
                    });

                },
                failure: function(form, action) {
                    Ext.Msg.alert('提示信息', action.result.restMsg);
                }
            });

        }
    }
})
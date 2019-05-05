/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
var ctxpath = "/SafetyPlatform";
Ext.define('SafetyPlatform.Application', {
    extend: 'Ext.app.Application',

    name: 'SafetyPlatform',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    // stores: [
    //     // TODO: add global / shared stores here
    // ],
    //
    // launch: function () {
    //     // TODO - Launch the application
    // },
    //
    // onAppUpdate: function () {
    //     Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
    //         function (choice) {
    //             if (choice === 'yes') {
    //                 window.location.reload();
    //             }
    //         }
    //     );
    // }

    views: [
        'SafetyPlatform.view.module_login.Login',
        'SafetyPlatform.controller.login.LoginController'
    ],

    launch: function () {
        // TODO - Launch the application

        var loggedIn;

        // Check to see the current value of the localStorage key

        //  如果cookie中存在登录信息则无需再次输入
        if(Ext.util.Cookies.get("userName")&&Ext.util.Cookies.get("password")){
            var cookieUserName = Ext.util.Cookies.get("userName");
            var cookiePassword = Ext.util.Cookies.get("password");

            Ext.Ajax.request({
                url: '/SafetyPlatform/login',
                params: { password: cookiePassword, username: cookieUserName},
                method: 'POST',
                success: function (response, options) {
                    var json = Ext.JSON.decode(response.responseText);

                    if(json.restMsg == 1){
                        //window.location = 'initView.jsp';
                        // cookiePassword = json.pw;
                        // cookieUserName = json.userName;
                        Ext.util.Cookies.set('menus',json.exclusiveMenus);
                        //Ext.MessageBox.alert(options+response+","+response.responseText);
                        console.log("what",json.restMsg);
                    }
                    Ext.create({
                        xtype: 'app-main',
                        menus:json.exclusiveMenus,
                        userName:1,
                        password:1
                    });
                },
                failure: function (response, options) {
                    Ext.MessageBox.alert('失败', '请求超时或网络故障，错误编号：' + response.status);
                }
            });
        }else{
            Ext.create({
                xtype: 'login'
            });
        }

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view


    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

Ext.define('SafetyPlatform.view.module_test.TestViewController',{
    extend : 'Ext.app.ViewController',
    alias: 'controller.test',

    onTalk:function(){
        var user = Ext.create('SafetyPlatform.view.module_test.TestModel',{

            text_id : 1,
            emp_id : 1,
            name : '英格拉姆'

        });

        user.load({
            success:function(){
                Ext.Msg.alert("tip","success");
            },
            failure: function() {
                Ext.Msg.alert("tip","fail");
            }

        });

    }

});
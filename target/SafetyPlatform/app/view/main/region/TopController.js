/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('SafetyPlatform.view.main.TopController', {
    extend: 'Ext.app.ViewController',

	alias: 'controller.mainTop',


    OnChange : function(field, newValue, oldValue, eOpts) {

        // get fields container
        fc = Ext.getCmp('dynamicFC');
        fc.removeAll();//把panel中原有的移除，不然会累加-------1
        Ext.Ajax.request({
            url : '',//从数据库中请求数据，动态获取items中的数据
            params : {
                Id : newValue
            },
            method : 'Get',
            success : function(response, opts) {

                var success = Ext.decode(response.responseText).success;
                // 获取后台数据成功时
                if (success) {
                    var displayFieldsArray = Ext.decode(response.responseText).obj;
                    for (i = 0; i < displayFieldsArray.length; i++) {
                        displayFields = displayFieldsArray[i];
                        displayFieldLabel = displayFields.displayFieldLabel;
                        fieldName = displayFields.fieldName;
                        displayFieldType = displayFields.displayFieldType;
                        displayFieldValue = displayFields.displayFieldValue;
                        // 动态添加items
                        var items = {
                            xtype : displayFieldType,
                            name : fieldName,
                            fieldLabel : displayFieldLabel
                        }
                        fc.add(items);//把获取的items添加到panel中，注意和----1中的顺序，先移除再添加，才不会导致累加
                        fc.doLayout();
                    }
                } else {
                }
            },
            failure : function(form, action) {
                Ext.Msg.alert('信息提示', action.result.message);
            }
        });
    },
});

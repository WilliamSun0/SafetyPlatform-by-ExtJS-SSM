/**
 * 模块的控制器
 */

Ext.define('SafetyPlatform.view.module.ModuleController', {
    extend: 'Ext.app.ViewController',

    requires: ['Ext.window.MessageBox',
        'Ext.window.Toast',
    ],

    alias: 'controller.module',

    init: function () {
        console.log('modulecontroller.init')
    },

    // add: function () {
    //     var p = new Ext.data.Record({
    //         'WHYSJC': 1, 'JYDAYW': 1, 'DSFJC': 1,
    //         'DSFPG': 1, 'AQFA': 1, 'AQFYSY': 1, 'YJWZ': 1, 'YJYL': 1, 'PXJH': 1, 'PXQK': 1, 'RYQZ': 1,
    //         'SGGL': 1, 'ZZZS': 1
    //     });
    //     //grid.stopEditing();
    //     //store.insert(0, p);
    //     eid = newGuid();
    //     curEid = eid;
    //     var params = {eid: eid};
    //     frmBasic.getForm().load({
    //         url: '/SafetyPlatform/Enterprise/getEnterpriseByEid',
    //         params: params
    //     });
    //
    //     frmBasic.getForm().findField('eid').setValue(null);
    // },
    submitForm: function () {
        var grid = this.getView().down('form');
        if (!grid.getForm().isValid()) return;
        grid.getForm().submit({
            waitMsg: '正在提交数据',
            waitTitle: '提示',
            url: '/SafetyPlatform/enterInfo/saveEnterInfo',
            method: 'POST',
            // params: {
            //     'enterId':
            // },
            success: function (grid, action) {

                grid.findField('enterId').setValue(action.result.eid);
                Ext.Msg.alert('提示', '保存成功');
            },
            failure: function (form, action) {
                Ext.Msg.alert('提示', '原因如下：');
            }
        });
        //别急，别生气，老技术弄弄个就行了，别较真，以后用不到，实现不了也没所谓
        //想重新加载树，找不到例子
      //this.getView().down('enterinfotree').root.reload();
    },

    loadBasic: function () {

        store.load({
            callback: function (records, operation, success) {
                //ProgramForm.load();
                frmBasic.getForm().loadRecord(records[0]);
                qypmt = records[0].get('qypmt');
                qyxft = records[0].get('qyxft');
                //console.log(records);
            }

        });
    }

})
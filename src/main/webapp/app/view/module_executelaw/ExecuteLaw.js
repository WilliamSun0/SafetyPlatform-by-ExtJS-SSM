/**
 * 模块数据的主显示区域，继承自Grid
 */

Ext.define('SafetyPlatform.view.module_executelaw.ExecuteLaw', {
    extend : 'Ext.grid.Panel',
    alias : 'widget.elgrid',

    //为View关联上Store
    //改为通过controller init store文件

    columnLines: true,
    renderTo: Ext.getBody(),
    selModel: {
        injectCheckbox: 0,
        mode: "SIMPLE",     //"SINGLE"/"SIMPLE"/"MULTI"
        checkOnly: true     //只能通过checkbox选择
    },
    selType: "checkboxmodel",

    initComponent:function(){

        var me = this;
        //me.store = Ext.getStore('Ingram14');
        me.columns = [
            {
                //header:'<div style="text-align:center">序号</div>',
                xtype: 'rownumberer',
                width: '5%',
                text:'序号'
            },
            {
                dataIndex:"exeId",
                xtype : 'hidden',

            },
            {
                dataIndex:"enterId",
                xtype : 'hidden'

            },
            {
                text:'类型',
                width:"10%",
                align:'center',
                dataIndex:"exeType",
                // editor: new Ext.form.ComboBox({
                //     editable: false,
                //     displayField: "text",
                //     valueField: "val",
                //     mode: "local",
                //     triggerAction: "all",
                //     store: typeStore
                // }),
                // renderer: function(value,metadata,record){
                //     var index = typeStore.find('val',value);
                //     if(index!=-1){
                //         return typeStore.getAt(index).data.text;
                //     }
                //     return value;
                // }
            },
            // {
            //     text:'asfasd',
            //     width:"10%",
            //     align:'center',
            //     dataIndex:"exeTime"
            // },
            {
                text:'备注',
                width:"50%",
                dataIndex:"exeRemark",
                // editor:new Ext.form.TextField({
                //     allowBlank:false
                // })
            },
        ];


        me.listeners = {
            itemclick: function (me, record, item, index, e, eOpts) {
                //双击事件的操作
                alert("data : ---" + record.name);
                console.log('Click');
            }
        };

        var store1 =new Ext.data.Store({

            fields: [{ name: 'exeRemark'},
                { name: 'exeType'},
                //{ name: 'exeResult', type: 'int' },
                { name: 'enterId'},
                //{ name: 'exeTime', type: '' },
                { name: 'exeId'}],

            //data:[['sdfsadf',1,true,1,2019/4/10,1], ['swybaba',1,true,1,2019/4/10,1]],
            proxy: {
                type: 'ajax',
                url:'/SafetyPlatform/executeLaw/getEnterExecuteLawList',
                extraParams:{eid:me.enterId},
                reader :{
                    //totalProperty : "totalProperty",
                    type: 'json',
                    rootProperty: 'rows'
                },
            },

            autoLoad: true,//{start: 0, limit: 20},

            remoteSort:true

        });

        me.store = store1;

        me.callParent(arguments);

    }
});
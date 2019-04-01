/**
 * 模块数据的主显示区域，继承自Grid
 */

Ext.define('SafetyPlatform.view.module.region.HiddenCheckCorrectGrid', {
    extend : 'Ext.grid.Panel',
    alias : 'widget.hccg',
    uses : ['SafetyPlatform.view.module.region.hccgToolBar'],

    initComponent:function(){
        Ext.apply(this, {

            dockedItems: [{
                xtype: 'hccgtb', // 按钮toolbar
                dock: 'top'
            }],

            // 自定义字段的还没有做，先放几个固定的
            columns: [{
                dataIndex: 'tf_name',
                text: '工程项目名称',
                width: 250
            }, {
                dataIndex: 'tf_budget',
                text: '投资总额'
            }],
            store: new Ext.data.Store({
                fields: ['tf_name', {
                    name: 'tf_budget',
                    type: 'float'
                }],
                data: [{
                    tf_name: '安居房建设工程',
                    tf_budget: 1230000
                }, {
                    tf_name: '道路建设工程',
                    tf_budget: 453092
                }]
            }),
            // initComponent : function() {
            //    console.log(this.admId);
            // }
        })}
})
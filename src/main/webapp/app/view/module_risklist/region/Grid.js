/**
 * 模块数据的主显示区域，继承自Grid
 */
 
Ext.define('SafetyPlatform.view.module_risklist.region.Grid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.risklistgrid',

    requires:[
        'SafetyPlatform.store.riskcomlist.RiskComListStore',
        'SafetyPlatform.model.riskcomlist.RiskComListModel'
    ],

    //为View关联上Store
    store: {
        type:'rcl'
    },

    initComponent:function(){

        var me = this;
        me.columns = [
            {text:'胸卡号', dataIndex:'testId',flex:1},
            {text:'姓名', dataIndex:'empId',flex:1},
            {text:'状态', dataIndex:'name',flex:1}
        ];

        me.tbar = {
            xtype : "pagingtoolbar",
            pageSize : 20,
            displayInfo: true
        };

        me.callParent(arguments);

    }
})
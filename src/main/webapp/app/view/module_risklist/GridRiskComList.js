/**
 * 模块数据的主显示区域，继承自Grid
 */

Ext.define('SafetyPlatform.view.module_risklist.GridRiskComList', {
    extend : 'Ext.grid.Panel',
    alias : 'widget.risklistgrid',

    requires:[
        'SafetyPlatform.store.riskcomlist.RiskComListStore',
        'SafetyPlatform.model.riskcomlist.RiskComListModel',
        'SafetyPlatform.controller.riskcomlist.RiskComListController'
    ],

    //为View关联上Store
    //改为通过controller init store文件
    store: {
        type:'rcl'
    },
    //controller:'rclc',


    columnLines: true,
    renderTo: Ext.getBody(),
    // selModel: {
    //     injectCheckbox: 0,
    //     mode: "SIMPLE",     //"SINGLE"/"SIMPLE"/"MULTI"
    //     checkOnly: true     //只能通过checkbox选择
    // },
    // selType: "checkboxmodel",

    initComponent:function(){

        var me = this;
        me.columns = [
            {xtype: 'rownumberer', text: '序号', width:40},
            {text:'企业名称', dataIndex:'enterName',flex:1},
            {text:'所属行业', dataIndex:'enterIndustry',flex:1},
            {text:'社区', dataIndex:'enterCommunity',flex:1},
            {text:'风险级别', dataIndex:'riskLevel',flex:1},
            {text:'重大隐患数目', dataIndex:'potentialRiskNum',flex:1},
            {text:'重大危险源', dataIndex:'fatalDangerSource',flex:1},
            {text:'涉危企业', dataIndex:'highRiskEnterprise',flex:1},
            {text:'危险化学工艺', dataIndex:'dangerChemicalTech',flex:1},
            {text:'是否已执法', dataIndex:'isExecute',flex:1},
            {text:'企业名称', dataIndex:'restrictedSpace',flex:1},
            {text:'受限空间', dataIndex:'enterCommunity',flex:1},
            {text:'粉尘爆炸', dataIndex:'dustExplosion',flex:1},
            {text:'评定次数', dataIndex:'evaluationName',flex:1},
            {text:'最后评定时间', dataIndex:'lastEvaluationTime',flex:1}
        ];

        me.tbar = {
            xtype : "pagingtoolbar",
            pageSize : 20,
            displayInfo: true
        };



        // me.plugins = [
        //     Ext.create('Ext.grid.plugin.CellEditing', {
        //         clicksToEdit: 1
        //     })
        // ];
        me.listeners = {
            itemclick: function (me, record, item, index, e, eOpts) {
                //双击事件的操作
                alert("data : ---" + record.name);
                console.log('Click');
            }
        };

        me.callParent(arguments);

    }
})
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

    stripeRows: true,
    columnLines: true,
    renderTo: Ext.getBody(),
    selModel: {
        injectCheckbox: 0,
        mode: "SIMPLE",     //"SINGLE"/"SIMPLE"/"MULTI"
        checkOnly: true     //只能通过checkbox选择
    },
    selType: "checkboxmodel",

    initComponent:function(){

        var zdyhStore=new Ext.data.SimpleStore({
            fields: ["val","name"],
            data: [[true,'有'], [false,'无']]
        });
        var zdwxyStore=new Ext.data.SimpleStore({
            fields: ["val","name"],
            data: [[true,'有'], [false,'无']]
        });
        var swqyStore=new Ext.data.SimpleStore({
            fields: ["val","name"],
            data: [[true,'是'], [false,'否']]
        });
        var wxhggyStore=new Ext.data.SimpleStore({
            fields: ["val","name"],
            data: [[true,'有'], [false,'无']]
        });
        var sxkjStore=new Ext.data.SimpleStore({
            fields: ["val","name"],
            data: [["1",'有'], ["2",'无']]
        });
        var fcsbStore=new Ext.data.SimpleStore({
            fields: ["val","name"],
            data: [["1",'有'], ["2",'无']]
        });
        var fxjbStore=new Ext.data.SimpleStore({
            fields: ["val","name"],
            data: [[-1,'风险级别'],[1,'重大风险'], [2,'较大风险'],[3,'一般风险'],[4,'低风险']]
        });

        var me = this;
        //me.store = Ext.getStore('Ingram14');
        me.columns = [
            {xtype: 'rownumberer', text: '序号', width:40},
            {text:'企业名称', dataIndex:'enterId',xtype:'hidden'},
            {text:'企业名称', dataIndex:'enterName',flex:1},
            {text:'所属行业', dataIndex:'enterIndustry',flex:1},
            {text:'社区', dataIndex:'enterCommunity',flex:1},
            {text:'风险级别', dataIndex:'riskLevel',flex:1,
                renderer:function(v) {
                    if(v==5)
                        return  '<div style="font-weight:bold;color:red">'+ "重大风险级" + '</div>';
                    else if(v==4)
                        return  '<div style="font-weight:bold;color:orange">'+ "较大风险级" + '</div>';
                    else if(v==3)
                        return  '<div style="font-weight:bold;color:yellow">'+ "一般风险级" + '</div>';
                    else if (v== 2)
                        return  '<div style="font-weight:bold;color:blue">'+ "较小风险级" + '</div>';
                    else
                        return  '<div style="font-weight:bold;color:blue">'+ "暂无数据" + '</div>';
                }
            },
            {text:'隐患数目', dataIndex:'riskNum',flex:1},
            {text:'重大隐患数目', dataIndex:'potentialRiskNum',flex:1},
            {text:'重大危险源', dataIndex:'fatalDangerSource',flex:1},
            //{text:'涉危企业', dataIndex:'highRiskEnterprise',flex:1},
            {text:'危险化学工艺', dataIndex:'dangerChemicalTech',flex:1},
            {text:'是否已执法', dataIndex:'isExecute',flex:1},

            {text:'受限空间', dataIndex:'restrictedSpace',flex:1},
            {text:'粉尘爆炸', dataIndex:'dustExplosion',flex:1},
            // {text:'评定次数', dataIndex:'evaluationName',flex:1},
            {text:'最后评定时间', dataIndex:'lastEvaluationTime',flex:1}
        ];

        me.listeners = { //给列加点击事件
            itemclick:function(me, record, item, index, e, eOpts)
            {
                if(record!=null)
                {

                    var eid=record.get('eid');
                    var win=EnterpriseForSuper(eid,znid,ctxpath);
                    win.show();
                }

            }
        };

        me.tbar = {
            xtype : "pagingtoolbar",
            pageSize : 30,
            store:me.store,
            displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
            emptyMsg: "没有数据",
            beforePageText: "当前页",
            afterPageText: "共{0}页",
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
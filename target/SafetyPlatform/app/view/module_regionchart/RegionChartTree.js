

Ext.define('SafetyPlatform.view.module_regionchart.RegionChartTree', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.rctree',

    //controller : '',

    title: '行政区划',
    glyph: 0xf0c9,
    lines: true,
    rootVisible: false,
    useArrows: true,
    hideHeaders: true,
    width: 250,
    minWidth: 100,
    split: true,
    collapsible: true,

    requires:['SafetyPlatform.view.module_regionchart.eChartPanel'],


    initComponent: function () {
        var data1;
        var piePartRisk = {
            xtype: 'echartspanel',
            height: '50%',//初始化高度
            option: {//charts的配置，来自百度echarts官网例子，具体参考百度官方的说明，

                title : {
                    text: '同名数量统计',
                    subtext: '纯属虚构',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    type: 'scroll',
                    orient: 'vertical',
                    right: 10,
                    top: 20,
                    bottom: 20,
                    data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],


                },
                series : [
                    {
                        name: '姓名',
                        type: 'pie',
                        radius : '55%',
                        center: ['40%', '50%'],
                        data:[
            {value:335, name:'直接访问'},
            {value:310, name:'邮件营销'},
            {value:234, name:'联盟广告'},
            {value:135, name:'视频广告'},
            {value:1548, name:'搜索引擎'}
        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }

        };
        var me = this;
        var treestore = Ext.create('Ext.data.TreeStore',{
            root: {
                expanded: true,
            },

            sorters: [{ property: 'OrderNumber', direction: 'ASC' }],
            proxy: { type: 'ajax',
                url: '/SafetyPlatform/tree/RegionChartTree',

                reader: { type:'json'}
            },

            autoLoad:true
        });
        me.store = treestore;
        var townId;
        var grid1;
        var grid2;
        var grid3;
        var enterId;
        this.listeners = {

            itemdblclick: function (view, record, item) {

            },

            //如果项被点击的话
            itemclick: function (view, record, item) {
                // $.ajax({
                //     url : '/SafetyPlatform/riskChart/getRiskPartPropChart',
                //     data:{},
                //     dataType : 'json',
                //     contentType:"application/json",
                //     type:'POST',
                //     success:function(data){
                //         data1 =  $.parseJSON(data);
                //     },
                //     error:function(data){
                //         alert('error');
                //     }
                // });
                var nodeData = record.data;

                    if (!nodeData) {
                        showFailMesg({
                            title: '创建模块失败.',
                            msg: '模块加载错误，模块id为空，创建模块失败'
                        });
                    }
                    //是企业信息管理模块单独的

                    var hcctab = Ext.getCmp('centerpanel');
                    hcctab.removeAll();
                    //townId = record.parentNode.parentNode.data.regionUrl;
                    enterId = nodeData.regionUrl;

                    //pie1 = initPieChart();
                    //hcctab.setActiveTab(hcctab.add(grid1));

                    hcctab.add(Ext.create('Ext.container.Container',{
                        layout:'border',
                        items:[{
                            region: 'west', // 中间面版

                            // xtype:'elgrid',
                            // enterId:enterId
                            height:'100%',
                            layout:"fit",
                            width:'50%',
                            items:[piePartRisk]
                        },
                            {
                                region: 'center', // 中间面版

                                layout:'fit',
                                height:'100%',
                                width:'50%',
                                items:[piePartRisk]
                            },
                    ]
                    }));
            }


        };


        this.callParent(arguments);
    }

});
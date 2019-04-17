Ext.define('SafetyPlatform.view.module.enterinfo.EnterProperty', {
    extend : 'Ext.TabPanel',

    alias : 'widget.ep',

    layout:'fit',
    initComponent(){

        //给第三方使用 用于维护企业信息
        var frmBasic;

        var eid = this.regionId;

            var store = Ext.create('Ext.data.JsonStore', {
                fields : [ 'ZNID','EID','ENM','LNG','LAT','PHONE','XYDM','ADDR','CLSJ','QYGM','PSTCD','ZGRS','ZDMJ','ZCZE','ZCZJ','NXSSR','NLR','JJLX','IID','FRXM','FRZW','TEL','FPHONE','LNKMN','LPHONE','SSJT','SFDPT','QYDESP','QYPMT','ZYGY','ZYWL','ZYWHYS','WHYSJC','JYDAYW','SBSS','DSFJC','DSFPG','AQFA','AQFYSY','YJWZ','YJYL','PXJH','PXQK','RYQZ','SGGL','ZZZS','AQBZHJB','GYMX','QYXFT' ],
                proxy : {
                    type : 'ajax',
                    url : '/Enterprise/getEnterpriseByEid',
                    reader : {
                        type : 'json'
                    }
                },
                listeners: {
                    'beforeload': function (store, op, options) {
                        var params = {eid:eid};
                        Ext.apply(store.proxy.extraParams, params);
                    }
                },

            });
            var zoneStore = Ext.create('Ext.data.Store', {
                singleton : true,
                fields: ['znid','name'],
                proxy: {
                    type: 'ajax',
                    url:ctxpath+'/sysmgr/getZoneListByTownId'
                },
                listeners: {
                    'beforeload': function (store, op, options) {
                        var params = {tid:tid};
                        Ext.apply(store.proxy.extraParams, params);
                    }
                },
                autoLoad: true,//默认为自动加载
                remoteSort:true
            });
            //查询行业
            var indsStore = Ext.create('Ext.data.Store', {
                singleton : true,
                fields: ['iid','idsnm'],
                proxy: {
                    type: 'ajax',
                    url:ctxpath+'/sysmgr/getIndustryList.do'
                },
                autoLoad: true,//默认为自动加载
                remoteSort:true
            });
            //查询有限空间
            var yxkjStore = Ext.create('Ext.data.Store', {
                fields: ['text'],
                storeId: 'yxkjStore',
                data: [
                    {text:'密闭设备：船舱'},
                    {text:'密闭设备-贮罐'},
                    {text:'密闭设备-车载槽罐'},
                    {text:'密闭设备-反应塔（釜）'},
                    {text:'密闭设备-冷藏箱'},
                    {text:'密闭设备-压力容器'},
                    {text:'密闭设备-管道'},
                    {text:'密闭设备-烟道'},
                    {text:'密闭设备-锅炉等'},
                    {text:'地下有限空间：地下管道'},
                    {text:'地下有限空间-地下室'},
                    {text:'地下有限空间-地下仓库'},
                    {text:'地下有限空间-地下工程'},
                    {text:'地下有限空间-暗沟'},
                    {text:'地下有限空间-隧道'},
                    {text:'地下有限空间-涵洞'},
                    {text:'地下有限空间-地坑'},
                    {text:'地下有限空间-废井'},
                    {text:'地下有限空间-地窖'},
                    {text:'地下有限空间-污水池（井）'},
                    {text:'地下有限空间-沼气池'},
                    {text:'地下有限空间-化粪池'},
                    {text:'地下有限空间-下水道等'},
                    {text:'冶金企业非标设备：高炉'},
                    {text:'冶金企业非标设备-转炉'},
                    {text:'冶金企业非标设备-电炉'},
                    {text:'冶金企业非标设备-矿热炉'},
                    {text:'冶金企业非标设备-电渣炉'},
                    {text:'冶金企业非标设备-中频炉'},
                    {text:'冶金企业非标设备-混铁炉'},
                    {text:'冶金企业非标设备-煤气柜'},
                    {text:'冶金企业非标设备-重力除尘器'},
                    {text:'冶金企业非标设备-电除尘器'},
                    {text:'冶金企业非标设备-排水器'},
                    {text:'冶金企业非标设备-煤气水封等'}
                ]
            });
            var height=document.body.clientHeight*0.7;//	screen.height*0.9;
            var grid=Ext.create('Ext.form.Panel',{
                height : height*0.85,
                width : '100%',
                frame : true,
                id: 'frmBasic',
                store:store,
                bodyStyle : 'overflow-x:hidden; overflow-y:scroll',
                layout : 'form',
                style : 'margin:0px;padding:0px;',
                fieldDefaults : {
                    labelAlign : 'right',
                    msgTarget : 'side',
                    labelWidth : 140,
                    width:"50%",
                    allowBlank : false
                },
                //renderTo : Ext.getBody(),
                items :
                    [
                        {
                            layout : 'column',
                            frame : true,
                            items :
                                [
                                    {
                                        //id:"eid",
                                        dataIndex:"eid",
                                        xtype : 'hidden',
                                        name : 'eid'
                                    },
                                    {
                                        xtype : 'combo',
                                        name : 'znid',
                                        id:'znid',
                                        fieldLabel : '社区（乡镇）',
                                        maxLength : 20,
                                        displayField: "name",
                                        valueField: "znid",
                                        queryMode: 'local',
                                        //selectOnFocus:true,
                                        forceSelection: true,
                                        editable: false,
                                        triggerAction:'all',
                                        emptyText:'请选择社区（乡镇）',
                                        blankText : '请选择社区（乡镇）',
                                        store:zoneStore
                                    },
                                    {
                                        xtype : 'textfield',
                                        fieldLabel : '企业名称',
                                        name : 'enm',
                                        width:'50%'
                                    }
                                ]
                        },
                        {
                            layout : 'column',
                            frame : true,
                            items :
                                [

                                    {
                                        xtype : 'textfield',
                                        fieldLabel : '信用代码',
                                        name : 'xydm',
                                        width:'50%'
                                    },
                                    {
                                        xtype : 'textfield',
                                        fieldLabel : '通信地址',
                                        name:'addr',
                                        width:'50%'
                                    }
                                ]
                        },
                        {
                            layout : 'column',
                            frame : true,
                            items :
                                [
                                    {
                                        xtype : 'textfield',
                                        fieldLabel : '邮政编码',
                                        name:'pstcd',
                                        width:'50%'
                                    },
                                    {
                                        xtype : 'numberfield',
                                        decimalPrecision: 6,//这里设置保留6为小数
                                        fieldLabel : '经度',
                                        name:'lng',
                                        width:'50%'
                                    }
                                ]
                        },
                        {
                            layout : 'column',
                            frame : true,
                            items :
                                [
                                    {
                                        xtype : 'numberfield',
                                        decimalPrecision: 6,//这里设置保留6为小数
                                        fieldLabel : '纬度',
                                        name:'lat',
                                        width:'50%'
                                    },
                                    {
                                        xtype : 'datefield',
                                        fieldLabel : '成立时间',
                                        name:'clsj',
                                        format: "Y年m月d日",
                                        width:'50%'
                                    }
                                ]
                        },
                        {
                            layout : 'column',
                            frame : true,
                            items :
                                [
                                    {
                                        xtype : 'textfield',
                                        fieldLabel : '企业规模',
                                        name:'qygm',
                                        width:'50%',
                                        valueField:'value',
                                        displayFiled:'text',
                                        editable: false,
                                        xtype : "combo",
                                        store : new Ext.data.ArrayStore({
                                            fields : [ 'value', 'text' ],
                                            data :
                                                [
                                                    [0, '小型' ],
                                                    [1, '中型' ],
                                                    [2, '大型' ]
                                                ]
                                        })
                                    },
                                    {
                                        //xtype : 'numberfield',
                                        fieldLabel : '占地面积',
                                        name:'zdmj',
                                        width:'50%',
                                        xtype : 'combo',
                                        editable: false,
                                        valueField:'value',
                                        displayFiled:'text',
                                        store : new Ext.data.ArrayStore({
                                            fields : [ 'value', 'text' ],
                                            data :
                                                [
                                                    [5, '<200' ],
                                                    [10, '200-1000' ],
                                                    [15, '1000-5000' ],
                                                    [20, '5000-15000' ],
                                                    [30, '>15000' ]
                                                ]
                                        })
                                    }
                                ]
                        },
                        {
                            layout : 'column',
                            frame : true,
                            items :
                                [
                                    {
                                        //xtype : 'numberfield',
                                        fieldLabel : '职工人数',
                                        name:'zgrs',
                                        width:'50%',
                                        xtype : 'combo',
                                        editable: false,
                                        valueField:'value',
                                        displayFiled:'text',
                                        store : new Ext.data.ArrayStore({
                                            fields : [ 'value', 'text' ],
                                            data :
                                                [
                                                    [5, '<20' ],
                                                    [10, '200-100' ],
                                                    [20, '100-300' ],
                                                    [30, '300-1000' ],
                                                    [50, '>1000' ]
                                                ]
                                        })
                                    },
                                    {
                                        xtype : 'numberfield',
                                        fieldLabel : '  资产总额',
                                        name:'zcze',
                                        width:'50%'
                                    }
                                ]
                        },
                        {
                            layout : 'column',
                            frame : true,
                            items :
                                [
                                    {
                                        xtype : 'numberfield',
                                        fieldLabel : '  注册资金',
                                        name:'zczj',
                                        width:'50%'
                                    },
                                    {
                                        //xtype : 'numberfield',
                                        //fieldLabel : '  年销售收入',
                                        name:'nxssr',
                                        width:'50%',
                                        xtype : 'combo',
                                        fieldLabel : '年销售收入',
                                        editable: false,
                                        valueField:'value',
                                        displayFiled:'text',
                                        store : new Ext.data.ArrayStore({
                                            fields : [ 'value', 'text' ],
                                            data :
                                                [
                                                    [3, '<100' ],
                                                    [5, '100-300' ],
                                                    [10, '300-2000' ],
                                                    [15, '2000-40000' ],
                                                    [22, '>40000' ]
                                                ]
                                        })

                                    }
                                ]
                        },
                        {
                            layout : 'column',
                            frame : true,
                            items :
                                [
                                    {
                                        xtype : 'numberfield',
                                        fieldLabel : '  年利润',
                                        name:'nlr',
                                        width:'50%'
                                    },
                                    {
                                        xtype : 'combo',
                                        fieldLabel : '经济类型',
                                        name:'jjlx',
                                        width:'50%',
                                        editable: false,
                                        valueField:'value',
                                        displayFiled:'text',
                                        store : new Ext.data.ArrayStore({
                                            fields : [ 'value', 'text' ],
                                            data :
                                                [
                                                    [0, '国有' ],
                                                    [1, '集体' ],
                                                    [2, '股份合作' ]
                                                ]
                                        })
                                    }
                                ]
                        },
                        {
                            layout : 'column',
                            frame : true,
                            items :
                                [
                                    {
                                        xtype : 'combo',
                                        name : 'iid',
                                        //id:'iid',
                                        width : '50%',
                                        fieldLabel : '所属行业',
                                        maxLength : 20,
                                        displayField: "idsnm",
                                        valueField: "iid",
                                        queryMode: 'local',
                                        //selectOnFocus:true,
                                        forceSelection: true,
                                        editable: false,
                                        triggerAction:'all',
                                        emptyText:'请选择行业',
                                        blankText : '请选择行业',
                                        store:indsStore
                                    },
                                    {
                                        xtype : 'textfield',
                                        fieldLabel : '法人姓名',
                                        name:'frxm',
                                        width:'50%'
                                    }
                                ]
                        },
                        {
                            layout : 'column',
                            frame : true,
                            items :
                                [
                                    {
                                        xtype : 'textfield',
                                        fieldLabel : '职务',
                                        name:'frzw',
                                        width:'50%'
                                    },
                                    {
                                        xtype : 'textfield',
                                        fieldLabel : '办公室电话（法人）',
                                        name:'tel',
                                        width:'50%'
                                    }
                                ]
                        },
                        {
                            layout : 'column',
                            frame : true,
                            items :
                                [
                                    {
                                        xtype : 'textfield',
                                        fieldLabel : '手机（法人）',
                                        name:'fphone',
                                        width:'50%'
                                    },
                                    {
                                        xtype : 'textfield',
                                        fieldLabel : '联系人姓名',
                                        name:'lnkmn',
                                        width:'50%'
                                    }
                                ]
                        },
                        {
                            layout : 'column',
                            frame : true,
                            items :
                                [
                                    {
                                        xtype : 'textfield',
                                        fieldLabel : '联系人手机号',
                                        name:'lphone',
                                        width:'50%'
                                    },
                                    {
                                        xtype : 'textfield',
                                        fieldLabel : '所属集团公司名称',
                                        name:'ssjt',
                                        width:'50%'
                                    }
                                ]
                        },
                        {
                            layout : 'column',
                            frame : true,
                            items :
                                [
                                    {
                                        xtype : 'textfield',
                                        fieldLabel : '安全管理职能部门',
                                        name:'sfdpt',
                                        width:'50%'
                                    },
                                    {
                                        xtype : 'textfield',
                                        fieldLabel : '主要工艺',
                                        name:'gymx',
                                        width:'50%'
                                    }
                                ]
                        },
                        {
                            layout : 'column',
                            frame : true,
                            items :
                                [
                                    {
                                        xtype : 'combo',
                                        fieldLabel : '工艺等级',
                                        name:'zygy',
                                        //width:'20%',
                                        valueField:'value',
                                        displayFiled:'text',
                                        editable: false,
                                        store : new Ext.data.ArrayStore({
                                            fields : [ 'value', 'text' ],
                                            data :
                                                [
                                                    [0,   '零级工艺'],
                                                    [10, '一级工艺' ],
                                                    [20, '二级工艺' ],
                                                    [30, '三级工艺' ],
                                                    [40, '四级工艺' ],
                                                    [50, '五级工艺' ],
                                                    [60, '六级工艺' ],
                                                    [70, '七级工艺' ],
                                                    [80, '八级工艺' ],
                                                    [90, '九级工艺' ],
                                                    [100, '十级工艺']

                                                ]
                                        })
                                    },
                                    {
                                        xtype : 'textfield',
                                        fieldLabel : '涉及主要物料',
                                        name:'zywl',
                                        width:'50%'
                                    }
                                ]
                        },
                        {
                            layout : 'column',
                            frame : true,
                            items :
                                [
                                    {
                                        xtype : 'combo',
                                        fieldLabel : '职业危害因素检测',
                                        name:'whysjc',
                                        valueField:'value',
                                        displayFiled:'text',
                                        editable: false,
                                        width:'50%',
                                        store : new Ext.data.ArrayStore({
                                            fields : [ 'value', 'text' ],
                                            data :
                                                [
                                                    [1, '有' ],
                                                    [0, '无' ]
                                                ]
                                        })
                                    },
                                    {
                                        xtype : 'textfield',
                                        fieldLabel : '职业危害因素',
                                        name:'zywhys',
                                        width:'50%',
                                    }
                                ]
                        },
                        {
                            layout : 'column',
                            frame : true,
                            items :
                                [
                                    {
                                        xtype : 'combo',
                                        fieldLabel : '人体健康体检档案',
                                        name:'jydayw',
                                        valueField:'value',
                                        displayFiled:'text',
                                        editable: false,
                                        width:'50%',
                                        store : new Ext.data.ArrayStore({
                                            fields : [ 'value', 'text' ],
                                            data :
                                                [
                                                    [1, '有' ],
                                                    [0, '无' ]
                                                ]
                                        })
                                    },
                                    {
                                        xtype : 'textfield',
                                        fieldLabel : '设备设施',
                                        name:'sbss',
                                        width:'50%',
                                    }
                                ]
                        },
                        {
                            layout : 'column',
                            frame : true,
                            items :
                                [
                                    {
                                        xtype : 'combo',
                                        fieldLabel : '第三方检验、检测',
                                        name:'dsfjc',
                                        valueField:'value',
                                        displayFiled:'text',
                                        width:'50%',
                                        editable: false,
                                        store : new Ext.data.ArrayStore({
                                            fields : [ 'value', 'text' ],
                                            data :
                                                [
                                                    [1, '有' ],
                                                    [0, '无' ]
                                                ]
                                        })
                                    },
                                    {
                                        xtype : 'combo',
                                        fieldLabel : '第三方评估',
                                        name:'dsfpg',
                                        valueField:'value',
                                        displayFiled:'text',
                                        width:'50%',
                                        editable: false,
                                        store : new Ext.data.ArrayStore({
                                            fields : [ 'value', 'text' ],
                                            data :
                                                [
                                                    [1, '有' ],
                                                    [0, '无' ]
                                                ]
                                        })
                                    }
                                ]
                        },
                        {
                            layout : 'column',
                            frame : true,
                            items :
                                [
                                    {
                                        xtype : 'combo',
                                        fieldLabel : '物料的火灾危害性',
                                        name:'wlhzwhx',
                                        valueField:'value',
                                        displayFiled:'text',
                                        width:'50%',
                                        editable: false,
                                        store : new Ext.data.Store({
                                            fields : [  'value', 'text' ],
                                            data :
                                                [
                                                    [ 100,'甲类' ],
                                                    [ 80,'乙类' ],
                                                    [ 50,'丙类' ],
                                                    [ 30,'丁类' ],
                                                    [ 10,'戊类' ],
                                                    [ 0,'没有' ]
                                                ]
                                        })
                                    },
                                    {
                                        xtype : 'combo',
                                        fieldLabel : '安全投入计划或方案',
                                        name:'aqfa',
                                        valueField:'value',
                                        displayFiled:'text',
                                        width:'25%',
                                        editable: false,
                                        store : new Ext.data.ArrayStore({
                                            fields : [ 'value', 'text' ],
                                            data :
                                                [
                                                    [1, '有' ],
                                                    [0, '无' ]
                                                ]
                                        })
                                    }
                                ]
                        },
                        {
                            layout : 'column',
                            frame : true,
                            items :
                                [
                                    {
                                        xtype : 'combo',
                                        fieldLabel : '安全费用使用记录',
                                        name:'aqfysy',
                                        valueField:'value',
                                        displayFiled:'text',
                                        width:'50%',
                                        editable: false,
                                        store : new Ext.data.ArrayStore({
                                            fields : [ 'value', 'text' ],
                                            data :
                                                [
                                                    [1, '有' ],
                                                    [0, '无' ]
                                                ]
                                        })
                                    },
                                    {
                                        xtype : 'combo',
                                        fieldLabel : '应急物资',
                                        name:'yjwz',
                                        valueField:'value',
                                        displayFiled:'text',
                                        width:'50%',
                                        editable: false,
                                        store : new Ext.data.ArrayStore({
                                            fields : [ 'value', 'text' ],
                                            data :
                                                [
                                                    [1, '有' ],
                                                    [0, '无' ]
                                                ]
                                        })
                                    }
                                ]
                        },
                        {
                            layout : 'column',
                            frame : true,
                            items :
                                [
                                    {
                                        xtype : 'combo',
                                        fieldLabel : '应急演练',
                                        name:'yjyl',
                                        valueField:'value',
                                        displayFiled:'text',
                                        width:'50%',
                                        editable: false,
                                        store : new Ext.data.ArrayStore({
                                            fields : [ 'value', 'text' ],
                                            data :
                                                [
                                                    [1, '有' ],
                                                    [0, '无' ]
                                                ]
                                        })
                                    },
                                    {
                                        xtype : 'combo',
                                        fieldLabel : '培训计划或方案',
                                        name:'pxjh',
                                        valueField:'value',
                                        displayFiled:'text',
                                        width:'50%',
                                        editable: false,
                                        store : new Ext.data.ArrayStore({
                                            fields : [ 'value', 'text' ],
                                            data :
                                                [
                                                    [1, '有' ],
                                                    [0, '无' ]
                                                ]
                                        })
                                    }
                                ]
                        },
                        {
                            layout : 'column',
                            frame : true,
                            items :
                                [
                                    {
                                        xtype : 'combo',
                                        fieldLabel : '培训情况',
                                        name:'pxqk',
                                        valueField:'value',
                                        displayFiled:'text',
                                        width:'50%',
                                        editable: false,
                                        store : new Ext.data.ArrayStore({
                                            fields : [ 'value', 'text' ],
                                            data :
                                                [
                                                    [1, '已培训' ],
                                                    [0, '未培训' ]
                                                ]
                                        })
                                    },
                                    {
                                        xtype : 'combo',
                                        fieldLabel : '人员取证情况',
                                        name:'ryqz',
                                        valueField:'value',
                                        displayFiled:'text',
                                        width:'50%',
                                        editable: false,
                                        store : new Ext.data.ArrayStore({
                                            fields : [ 'value', 'text' ],
                                            data :
                                                [
                                                    [1, '已取证' ],
                                                    [0, '未取证' ]
                                                ]
                                        })
                                    }
                                ]
                        },
                        {
                            layout : 'column',
                            frame : true,
                            items :
                                [
                                    {
                                        xtype : 'combo',
                                        fieldLabel : '事故管理',
                                        name:'sggl',
                                        valueField:'value',
                                        displayFiled:'text',
                                        width:'50%',
                                        editable: false,
                                        store : new Ext.data.ArrayStore({
                                            fields : [ 'value', 'text' ],
                                            data :
                                                [
                                                    [1, '有' ],
                                                    [0, '无' ]
                                                ]
                                        })
                                    },
                                    {
                                        xtype : 'combo',
                                        fieldLabel : '资质证书',
                                        name:'zzzs',
                                        valueField:'value',
                                        displayFiled:'text',
                                        width:'50%',
                                        editable: false,
                                        store : new Ext.data.ArrayStore({
                                            fields : [ 'value', 'text' ],
                                            data :
                                                [
                                                    [1, '有' ],
                                                    [0, '无' ]
                                                ]
                                        })
                                    }
                                ]
                        },
                        {
                            layout : 'column',
                            frame : true,
                            items :
                                [
                                    {
                                        xtype : 'textfield',
                                        fieldLabel : '安全标准化级别',
                                        name:'aqbzhjb',
                                        width:'50%'
                                    },
                                    {
                                        xtype : 'textfield',
                                        fieldLabel : '粉尘爆炸',
                                        name:'sbfc',
                                        width:'50%',
                                    }
                                ]
                        },
                        {
                            layout : 'column',
                            frame : true,
                            items :
                                [
                                    {
                                        xtype : 'combo',
                                        fieldLabel : '有限空间类型',
                                        name:'yxkj',
                                        width:'50%',
                                        editable: false,
                                        store : yxkjStore
                                    }
                                ]
                        }
                    ],
                tbar: [
                    {
                        //text: '增加',
                        icon: '../pagesExt/images/add.png',  // Use a URL in the icon config
                        tooltip: '增加',
                        handler: function()
                        {
                            //eid=newGuid();
                            curEid='';
                            frmBasic.getForm().reset();
                            //var params = {eid:eid};
                            //store.load();
                            //frm.getForm().findField('eid').setValue('');
                            var p = new Ext.data.Record({
                                'WHYSJC':1,'JYDAYW':1,'DSFJC':1,
                                'DSFPG':1,'AQFA':1,'AQFYSY':1,'YJWZ':1,'YJYL':1,'PXJH':1,'PXQK':1,'RYQZ':1,
                                'SGGL':1,'ZZZS':1
                            });
                            //grid.stopEditing();
                            frmBasic.getForm().findField('whysjc').setValue(1);
                            frmBasic.getForm().findField('jydayw').setValue(1);
                            frmBasic.getForm().findField('dsfjc').setValue(1);
                            frmBasic.getForm().findField('dsfpg').setValue(1);
                            frmBasic.getForm().findField('aqfa').setValue(1);
                            frmBasic.getForm().findField('aqfysy').setValue(1);
                            frmBasic.getForm().findField('yjwz').setValue(1);
                            frmBasic.getForm().findField('yjyl').setValue(1);
                            frmBasic.getForm().findField('pxjh').setValue(1);
                            frmBasic.getForm().findField('pxqk').setValue(1);
                            frmBasic.getForm().findField('ryqz').setValue(1);
                            frmBasic.getForm().findField('sggl').setValue(1);
                            frmBasic.getForm().findField('zzzs').setValue(1);
                            frmBasic.getForm().findField('eid').setValue('');

                        }
                    },
                    {
                        //text: '保存',
                        icon: '../pagesExt/images/save.png',  // Use a URL in the icon config
                        tooltip: '保存',
                        handler: submit
                    }

                ]

            });
            if(eid!=null && eid.length==32)
                loadBasic();
            frmBasic = Ext.getCmp('frmBasic');
            return grid;
        }
        function add()
        {
            var p = new Ext.data.Record({
                'WHYSJC':1,'JYDAYW':1,'DSFJC':1,
                'DSFPG':1,'AQFA':1,'AQFYSY':1,'YJWZ':1,'YJYL':1,'PXJH':1,'PXQK':1,'RYQZ':1,
                'SGGL':1,'ZZZS':1
            });
            //grid.stopEditing();
            //store.insert(0, p);
            eid=newGuid();
            curEid=eid;
            var params = {eid:eid};
            frmBasic.getForm().load({
                url : ctxpath+'/Enterprise/getEnterpriseByEid',
                params:params
            });

            frmBasic.getForm().findField('eid').setValue(null);
        }
        function submit() {
            if (!frmBasic.getForm().isValid()) return;
            frmBasic.getForm().submit({
                waitMsg: '正在提交数据',
                waitTitle: '提示',
                url: ctxpath+'/Enterprise/svEnterprise',
                method: 'GET',
                success: function(form, action) {
                    curEid=action.result.eid;
                    frmBasic.getForm().findField('eid').setValue(action.result.eid);
                    //Ext.Msg.alert('提示', '保存成功');
                },
                failure: function(form, action) {
                    //Ext.Msg.alert('提示', '原因如下：' + action.result.errors.info);
                }
            });
        }
        function loadBasic(){

            store.load({
                callback : function(records, operation, success) {
                    //ProgramForm.load();
                    frmBasic.getForm().loadRecord(records[0]);
                    qypmt=records[0].get('qypmt');
                    qyxft=records[0].get('qyxft');
                    //console.log(records);

                }

            });
        }
        function downLoad(){

        }


    }

})
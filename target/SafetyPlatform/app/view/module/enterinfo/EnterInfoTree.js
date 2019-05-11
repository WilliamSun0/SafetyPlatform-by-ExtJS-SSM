/**
 * 树状菜单，显示在主界面的左边
 *
 *
 */



Ext.define('SafetyPlatform.view.module.enterinfo.EnterInfoTree', {
	extend : 'Ext.tree.Panel',
	alias : 'widget.enterinfotree',

    //controller : '',

	title : '行政区划',
	glyph : 0xf0c9,
    lines : true,
    rootVisible: false,
    useArrows: true,
    hideHeaders: true,
    width: 250,
    minWidth: 100,

    viewModel:'module',


    requires:[
        'SafetyPlatform.store.hiddencheckcorrect.HiddenCheckCorrectTreeStore',
        'SafetyPlatform.view.module.region.HiddenCheckCorrectGrid',
        'SafetyPlatform.store.hiddencheckcorrect.HiddenCheckCorrectGridStore',
        'SafetyPlatform.view.module.enterinfo.EnterProperty',
        'SafetyPlatform.view.module.region.HiddenCheckGrid',
    ],


    //改为通过controllerinitstore文件
    store:Ext.create('SafetyPlatform.store.hiddencheckcorrect.HiddenCheckCorrectTreeStore', {
        storeId: "hckts"
    }),

    initComponent:function () {
	    var me = this;
	    var townId;
	    var grid;
	    var enterId;
	    this.listeners={

            itemdblclick:function(view,record,item) {

            },

                //如果项被点击的话
                itemclick:function(view,record,item) {

                    var nodeData = record.data;


                    //this.nowRegion = nodeData.regionUrl;

                    //console.log(this.nowRegion);
                    // var store1 = Ext.StoreManager.lookup('hckgs_id');
                    // store1.proxy.extraParams.regionId = nodeData.regionUrl;


                    if (nodeData.type==4) {


                        if (!nodeData) {
                            showFailMesg({
                                title: '创建模块失败.',
                                msg: '模块加载错误，模块id为空，创建模块失败'
                            });
                        }
                        //是企业信息管理模块单独的

                            var hcctab = Ext.getCmp('centerpanel');
                            //grid =initpanel(townId,nodeData.regionUrl,false);
                            //hcctab.removeAll();
                            // hcctab.add({
                            //     xtype : 'ep',
                            //     closable : false,
                            //     reorderable : true,
                            //     bind:{
                            //         title:'{eftab_title}'
                            //     },
                            //     townId:townId,
                            //     enterId:nodeData.regionUrl//这里即在hccggrid里加入代表位置的url
                            //
                            // });

                            hcctab.removeAll();
                        townId = record.parentNode.data.regionUrl;
                        enterId = nodeData.regionUrl;


                        grid =initpanel(townId,enterId,false);
                            hcctab.setActiveTab(hcctab.add(grid));
                    }


//点击企业
                    if (nodeData.type==5) {



                        if (!nodeData) {
                            showFailMesg({
                                title: '创建模块失败.',
                                msg: '模块加载错误，模块id为空，创建模块失败'
                            });
                        }
                        //是企业信息管理模块单独的

                            var hcctab = Ext.getCmp('centerpanel');
                            //grid =initpanel(townId,nodeData.regionUrl,true);
                            //hcctab.removeAll();
                            // hcctab.add({
                            //     xtype : 'ep',
                            //     closable : false,
                            //     reorderable : true,
                            //     bind:{
                            //         title:'{eftab_title}'
                            //     },
                            //     townId:townId,
                            //     enterId:nodeData.regionUrl//这里即在hccggrid里加入代表位置的url
                            //
                            // });
                            //     console.log("get".enterId);

                            hcctab.removeAll();
                        townId = record.parentNode.parentNode.data.regionUrl;
                        enterId = nodeData.regionUrl;


                        grid =initpanel(townId,enterId,false);
                            grid.getForm().load({
                                url: '/SafetyPlatform/enterInfo/getEnterpriseByEid',
                                params: {'eid': enterId},
                                method: 'GET'
                            });
                            hcctab.setActiveTab(hcctab.add(grid));

                        hcctab.add(showGraph(enterId,1));
                        hcctab.add(initEnterInfofds(enterId));
                        hcctab.add(initdc(enterId));
                        hcctab.add(initScrthrt(enterId));
                    }

                }


        };
        this.callParent(arguments);
    }

});
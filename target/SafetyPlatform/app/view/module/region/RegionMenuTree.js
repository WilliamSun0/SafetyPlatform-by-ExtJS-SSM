/**
 * 树状菜单，显示在主界面的左边
 *
 *
 */



Ext.define('SafetyPlatform.view.module.region.RegionMenuTree', {
	extend : 'Ext.tree.Panel',
	alias : 'widget.regionmenutree',

    //controller : '',

	title : '行政区划',
	glyph : 0xf0c9,
    lines : true,
    rootVisible: false,
    useArrows: true,
    hideHeaders: true,
    width: 250,
    minWidth: 100,
    split: true,
    collapsible: true,

    viewModel:'module',


    requires:[
        'SafetyPlatform.store.hiddencheckcorrect.HiddenCheckCorrectTreeStore',
        'SafetyPlatform.view.module.region.HiddenCheckCorrectGrid',
        'SafetyPlatform.store.hiddencheckcorrect.HiddenCheckCorrectGridStore',
        'SafetyPlatform.view.module.enterinfo.EnterProperty',
        'SafetyPlatform.view.module.region.HiddenCheckGrid',
    ],

    //viewModel:'module',

    //为View关联上Store
    //改为通过controllerinitstore文件
    store:Ext.create('SafetyPlatform.store.hiddencheckcorrect.HiddenCheckCorrectTreeStore', {
        storeId: "hckts"
    }),


    // listeners:{
    //     //如果项被点击的话
    //     itemclick:function(view,record,item) {
    //         //var maincenter = this.getView().up('maincenter');
    //
    //         var maincenter = Ext.getCmp('x');
    //         maincenter.add({
    //
    //             xtype : 'hccg',
    //             closable : false,
    //             reorderable : true,
    //
    //             //admId:record.data.admId
    //
    //         });
    //
    //         console.log('onhccgClick');
    //
    //     }
    //
    // },
    initComponent:function () {
	    var me = this;
	    var townId;
	    var grid;
	    var enterId;
	    this.listeners={

                //如果项被点击的话
                itemclick:function(view,record,item) {

                    var nodeData = record.data;

                    townId = record.parentNode.parentNode.data.regionUrl;
                    enterId = nodeData.regionUrl;


                    grid =initpanel(townId,enterId,false);
                    //this.nowRegion = nodeData.regionUrl;

                    //console.log(this.nowRegion);
                    // var store1 = Ext.StoreManager.lookup('hckgs_id');
                    // store1.proxy.extraParams.regionId = nodeData.regionUrl;

                    if (nodeData.type==3) {


                        if (!nodeData) {
                            showFailMesg({
                                title: '创建模块失败.',
                                msg: '模块加载错误，模块id为空，创建模块失败'
                            });
                        }
                        //是企业信息管理模块单独的

                    }

                    if (nodeData.type==4) {


                        if (!nodeData) {
                            showFailMesg({
                                title: '创建模块失败.',
                                msg: '模块加载错误，模块id为空，创建模块失败'
                            });
                        }
                        //是企业信息管理模块单独的

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
                            hcctab.removeAll();
                            //向右侧空面板加入隐患风险检查整改tab面板
                            hcctab.setActiveTab(hcctab.add({

                                xtype : 'hccg',
                                closable : false,
                                reorderable : true,
                                bind:{
                                    title:'{hcctab_title}'
                                },
                                enterId:nodeData.regionUrl//这里即在hccggrid里加入代表位置的url
                            }));


                            //向右侧空面板加入企业信息tab面板

                            grid.getForm().load({
                                url: '/SafetyPlatform/enterInfo/getEnterpriseByEid',
                                params: {'eid': enterId},
                                method: 'GET'
                            });
                            hcctab.add({
                                xtype : 'tabpanel',
                                closable : false,
                                reorderable : true,
                                bind:{
                                    title:'{eftab_title}'
                                },
                                items:[grid],
                                townId:townId,
                                enterId:nodeData.regionUrl//这里即在hccggrid里加入代表位置的url
                            });


                    }

                    if (nodeData.type==7) {

                        if (!nodeData) {
                            showFailMesg({
                                title: '创建模块失败.',
                                msg: '模块加载错误，模块id为空，创建模块失败'
                            });
                        }
                        var enterId = record.parentNode.parentNode.data.regionUrl;
                        //console.log('parentnode',grandNode.data.regionUrl);

                        var hcctab = Ext.getCmp('centerpanel');
                        hcctab.removeAll();
                        hcctab.add({

                            xtype : 'hcg',
                            closable : false,
                            reorderable : true,
                            bind:{
                                title:'{hcctab_title}'
                            },
                            enterId:enterId,
                            object_type:nodeData.regionUrl//这里即在hccggrid里加入代表位置的url
                        });
                    }
                    console.log('onhccgClick');


                }


        };
        this.callParent(arguments);
    }

    // initComponent : function() {
    //
    //     var treeLoader = new Ext.tree.Treeloader(
    //         {
    //             //获取数据库的远程地址
    //             dataUrl:"/SafetyPlatform/test/testtree"
    //         });
    //             //当点击节点时传递节点id到服务器端上
    //     treeLoader.on("beforeload",function(treeLoader,node){
    //         this.baseParams.nodeId = node.id;
    //     });
    //
    //     this.loader = treeLoader;
    // },

    // initComponent : function() {
    //     this.store = Ext.create('Ext.data.TreeStore', {
    //         root : {
    //             text : '系统菜单',
    //             leaf : false,
    //             expanded : true
    //         }
    //     });
    //     var menus = this.getViewModel().get('regionMenu');
    //     var root = this.store.getRootNode();
    //     for (var i in menus) {
    //         var menugroup = menus[i];
    //         var menuitem = root.appendChild({
    //             text : menugroup.text,
    //             expanded : menugroup.expanded,
    //             icon : menugroup.icon,
    //             glyph : menugroup.glhpy
    //         });
    //         for (var j in menugroup.items) {
    //             var menumodule = menugroup.items[j];
    //             var childnode = menuitem.appendChild({
    //                 moduleId : menumodule.text,
    //                 moduleName : menumodule.module,
    //                 text : menumodule.text,
    //                 admId: menumodule.admId
    //             });
    //             for (var k in menumodule.items) {
    //                 var menumodule2 = menugroup.items[k];
    //                 var childnode2 = {
    //                     moduleId : menumodule2.text,
    //                     moduleName : menumodule2.module,
    //                     text : menumodule2.text,
    //                     leaf : true,
    //                     admId: menumodule.admId
    //                 };
    //                 childnode.appendChild(childnode2);
    //             }
    //
    //         }
    //     }
    //     this.callParent(arguments);
    //}

})
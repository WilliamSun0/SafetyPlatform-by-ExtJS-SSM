/**
 * 树状菜单，显示在主界面的左边
 */
Ext.define('SafetyPlatform.view.module.region.RegionMenuTree', {
	extend : 'Ext.tree.Panel',
	alias : 'widget.regionmenutree',

	title : '行政区划',
	glyph : 0xf0c9,

    autoScroll:true,
    containerScroll: true,
    lines : true,
    rootVisible:false,//不显示根节点


	//viewModel : 'main',

    requires:[
        'SafetyPlatform.store.hiddencheckcorrect.HiddenCheckCorrectTreeStore',
        'SafetyPlatform.view.module.region.HiddenCheckCorrectGrid',
    ],

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
	    this.listeners={

                //如果项被点击的话
                itemclick:function(view,record,item) {
                    //var maincenter = this.getView().up('maincenter');



                    var maincenter = Ext.getCmp('x');

                    maincenter.removeAll();
                    maincenter.add({

                        xtype : 'hccg',
                        closable : false,
                        reorderable : true,

                        //admId:record.data.admId

                    });

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
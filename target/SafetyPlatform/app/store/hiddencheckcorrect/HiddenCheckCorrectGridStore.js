Ext.define('SafetyPlatform.store.hiddencheckcorrect.HiddenCheckCorrectGridStore', {
    extend: 'Ext.data.Store',

    alias:'store.hckgs',

    storeId:'hckgs_id',

    //viewModel:{type : 'module'},

    //sorters: [{ property: 'OrderNumber', direction: 'ASC' }],

    fields: [
        { name: 'checkMan'},
        { name: 'correctMan' },
        { name: 'partObject'},
        { name: 'mainType'},
        { name: 'riskDescription'},
        { name: 'checkVoucher'},
        { name: 'correctVoucher'},
        { name: 'dangerLevel' },


    ],

    //     private String checkMan;//节点id
// private String correctMan;//节点名称
// private String partObject;//隐患名
// private String mainType;//节点点击的请求路径
// private String riskDescription;//节点的图标，folder还是file
// private String checkVoucher;//父级菜单
// private String correctVoucher;//区划等级
// private String dangerLevel;//父级菜单
// private String dangerLevelNum;//区划等级

    //data:[{nowRegion:null}],

    // initComponent:function () {
    //     //var menus = this.getViewModel().get('nowRegion');
    //
    //     this.proxy = {
    //         type: 'ajax',
    //         url: '/SafetyPlatform/test/test',
    //
    //         reader: { type:'json',rootProperty: 'data'},
    //
    //
    //     }
    // },

    proxy : {
        type: 'ajax',
        url: '/SafetyPlatform/HiddenRiskCheckCorrect',

        reader: { type:'json',rootProperty: 'data',
            totalProperty : 'totalProperty'
        },

        // bind:{
        //     regionId:'{nowRegion}'
        // },

        //extraParams:{regionId:this.getView().regionId},

    },

    // listeners: {
    //     'beforeload': function (store, op, options) {
    //         var params = {
    //             regionId : this.getView().regionId
    //         };
    //         Ext.apply(store.proxy.extraParams, params);
    //     }
    // },



    // bind:{
    //     proxy : {
    //         type: 'ajax',
    //         url: '/SafetyPlatform/test/test',
    //
    //         reader: { type:'json',rootProperty: 'data'},
    //
    //         //extraParams:'regionId:{nowRegion}',
    //
    //     },
    // },

    // listeners: {
    //     'beforeload': function (store, op, options) {
    //         var params = { };
    //         var page=Ext.getCmp('currentPage').value;
    //         if(page==null)
    //             page=1;
    //         op.start=(page-1)*pageSize;
    //         Ext.apply(store.proxy.extraParams, params);
    //     },
    //
    // },



    autoLoad:true,

});


Ext.define('SafetyPlatform.controller.riskcomlist.RiskComListController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.rclc',



    init: function(){

        var store = Ext.create('Ext.data.Store', {
            //storeId: 'Ingram14',
            autoLoad: true,
            model: "SafetyPlatform.model.riskcomlist.RiskComListModel",
            proxy: {
                type: 'ajax',
                url: '/SafetyPlatform/getRiskEnterList',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        });




        this.getView().store = store;

        store.load();

        //this.getView().store = store;
        // store.load({
        //
        //     //分页查询的参数
        //     // page: 1,
        //     // limit: 10,
        //     // params: {
        //     //     name:'QF'
        //     // },
        //
        //     /**这里的callback很重要，你异步的请求结束后不能直接展示数据，肯能后台还没有返回数据，要等callback后*/
        //     callback: function(records, operation, success) {
        //
        //         //alert(success);//显示success:   true or false
        //         console.log(records);
        //         //alert("类型是："+typeof(store.getData()));  //object,  这个方法没什么内涵
        //         //alert("记录数 ："+store.getCount());        //内涵也不深刻
        //         //alert("autoLoad : "+store.getAutoLoad());   //是否自动load,如果是就直接读数据
        //
        //
        //         //下面内容是Store中的数据，可以变成字符串显示
        //         //正确的说，是store.load()方法返回值的分析
        //         // var vJon = Ext.encode(records[3]['data']);
        //         // alert("data : ---" + vJon);
        //
        //         //var vJon2 = Ext.encode(records[3]['id']);
        //         //alert("id : ---" + vJon2);
        //
        //         //循环读数据Store
        //         /*
        //         for(i in records[3]['data']){
        //            alert(i);
        //            var vJon = Ext.encode(records[3]['data']);
        //            alert(vJon);
        //         }
        //         */
        //
        //     },
        //     scope: this
        // });


    }

});
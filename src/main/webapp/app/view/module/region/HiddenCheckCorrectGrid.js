/**
 * 模块数据的主显示区域，继承自Grid
 */

Ext.define('SafetyPlatform.view.module.region.HiddenCheckCorrectGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.hccg',

    requires: [
        'SafetyPlatform.store.hiddencheckcorrect.HiddenCheckCorrectGridStore'
    ],

    uses: ['SafetyPlatform.view.module.region.hccgToolBar'],
    //uses代表可能使用某类，requires代表如果是类的固有方法必须使用

    // initComponent:function(){
    //     Ext.apply(this, {
    //
    dockedItems: [{
        xtype: 'hccgtb', // 按钮toolbar

        dock: 'top'
    }],

    // 自定义字段的还没有做，先放几个固定的
    columns: [
        {xtype: 'rownumberer', text: '序号', width:40},

        {
        dataIndex: 'checkMan',
        text: '排查员'
    }, {
        dataIndex: 'correctMan',
        text: '整改员'
    },
        {
            dataIndex: 'partObject',
            text: '隐患'
        }, {
            dataIndex: 'riskType',
            text: '类别'
        },
        {
            dataIndex: 'riskDescription',
            text: '隐患描述'
        }, {
            dataIndex: 'dangerLevel',
            text: '隐患级别'
        },
        {
            dataIndex: 'checkVoucher',
            text: '整改标准'
        }, {
            dataIndex: 'correctVoucher',
            text: '排查日期'
        },

    ],


    initComponent:function(){

        var store1 =Ext.create('SafetyPlatform.store.hiddencheckcorrect.HiddenCheckCorrectGridStore', {
            storeId: "hckgs_id"});
        store1.proxy.extraParams.enterId = this.enterId;

        this.store = store1;

        this.store.load();

        this.callParent(arguments);

        //this.getViewModel().setData({nowRegion:this.region});
    }

})
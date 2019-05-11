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
            xtype:'hidden',
            dataIndex: 'uid',
        },
        {
            xtype:'hidden',
            dataIndex: 'riskId',
        },

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
            dataIndex: 'checkTime',
            text: '排查日期'
        },
        {
            dataIndex: 'correctTime',
            text: '整改日期'
        },
        {
            dataIndex: 'status',
            text: '状态'
        }

    ],



    initComponent:function(){
        var correctMan =Ext.util.Cookies.get("userName");
        var userName = Ext.util.Cookies.get("userName");
        var me = this;
        function saveHRCK(uid,enterId,correctMan)
        {
            var type='';
            $.ajax({
                url : ctxpath+'/hrcc/svHRCC',
                data:{uid:uid,correctMan:correctMan},
                dataType : 'json',
                async:false,
                type:'POST',
                success:function(data){
                    me.store.load({params:{enterId:enterId}});

                },
                error:function(data){

                }
            });
        }

        var sm=Ext.create('Ext.selection.CheckboxModel',
            {
                injectCheckbox:0,//checkbox位于哪一列，默认值为0
                //mode:'single',//multi,simple,single；默认为多选multi
                checkOnly:true,//如果值为true，则只用点击checkbox列才能选中此条记录
                allowDeselect:true,//如果值true，并且mode值为单选（single）时，可以通过点击checkbox取消对其的选择
                enableKeyNav:false,
                onHeaderClick: function (headerCt,header,e)
                {
                    return ;//禁用全选
                },
                listeners:
                    {

                        deselect: function(model,record,index)
                        {//record被选中时产生的事件
                            var uid = record.get('uid');
                            //选中的节目名称
                            checked=1;
                            alert("你确定该隐患已经整改完成？" + record.partObject);

                            saveHRCK(uid,me.enterId,correctMan);
                        }
                    }
            });

        var store1 =Ext.create('SafetyPlatform.store.hiddencheckcorrect.HiddenCheckCorrectGridStore', {
            storeId: "hckgs_id"});
        store1.proxy.extraParams.enterId = this.enterId;

        this.store = store1;
        this.store.load();
        this.store.addListener('load', function(st, rds, opts) {
            var selMod = me.getSelectionModel();
            if(rds==null)
                return;
            //勾选参加了检查的单位
            for (var i = 0; i <rds.length; i++){
                if(rds[i].data.uid!= 0)
                    selMod.select(i,true,false);
            }
        });
        this.selModel=sm;



        this.store.load();

        // this.listeners = {
        //  //给列加点击事件
        //     itemclick:function(me, record, item, index, e, eOpts)
        //     {
        //         if(record!=null)
        //         {
        //
        //             if(checked==-1)//取消选中
        //             {
        //                 checked=0;
        //                 uid=record.get('uid');
        //
        //                 saveHRCK(uid,me.enterId);
        //             }
        //             //Ext.Msg.alert("哈哈哈哈","哈哈哈哈哈哈"+record.data.id);
        //         }
        //     }
        //
        // };

        this.callParent(arguments);

        //this.getViewModel().setData({nowRegion:this.region});
    }

})
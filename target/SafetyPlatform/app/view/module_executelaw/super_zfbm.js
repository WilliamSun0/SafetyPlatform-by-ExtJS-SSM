
function initZfbm(eid,type,sid,renderToDiv)//行政执法文件
{
	//eid=getArgs("eid")
	var checked=0;
	var store = Ext.create('Ext.data.Store', {
		singleton : true,
		fields:[ 'govDepartId','govDepartName'],
		pageSize:20,
		proxy: {
			type: 'ajax',
			url:'/SafetyPlatform/executeLaw/getExeGovList'
		},
		listeners: {
	        'beforeload': function (store, op, options) {
	        	if(sid==null)
	        		return;
	            var params = {exeId:eid};
	            Ext.apply(store.proxy.extraParams, params);
	        },

	    },
		autoLoad: false,//{start: 0, limit: 20},
		reader :{
			totalProperty : "totalProperty",
			rootProperty : "root",
			type:"json"
		},

		remoteSort:true
	});
	store.load({params:{exeId:eid}});
	store.addListener('load', function(st, rds, opts) {
		var selMod = grid.getSelectionModel();
        if(rds==null)
			return;
        for (var i = 0; i <rds.length; i++){
        	if(rds[i].data.id!=null && rds[i].data.id.length==32)
            	selMod.select(i,true,false);
        }
	});
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
			var me = this;
			var records = me.getSelection();
			if(records.length===0){
				header.addCls('x-grid-hd-checker-on');
				me.selectAll();
			}else
			{
				header.removeCls('x-grid-hd-checker-on');
				me.deselectAll();
			}
		},
		listeners:
		{
			deselect: function(model,record,index)
			{//取消选中时产生的事件
		    	checked=-1;
    		},
    		select: function(model,record,index)
    		{//record被选中时产生的事件
		    			//record.get('sid');//选中的节目名称
    			checked=1;
		    }
		}
	});
  	Ext.QuickTips.init();
	var grid = new Ext.grid.GridPanel({

		id:'zfbm',
	    width: "100%",
	    height: "100%",
	    frame: true,
        // stripeRows:true, //斑马线效果
        // selType: 'cellmodel',
	    store: store,
	    //selModel: sm,
	    columns:
		[
	    	{
	    		header:'<div style="text-align:center">序号</div>',
            	xtype: 'rownumberer',
               	width: '12%'
	    	},
	    	{
	    		dataIndex:"govDepartId",
	            xtype : 'hidden',

	    	},
	        {
	            header:'<div style="text-align:center">执法部门</div>',
	            //align:'center',
	            width:"80%",
	            dataIndex:"govDepartName"
	        }
	    ],
	    // listeners:
	    // { //给列加点击事件
	    // 	itemclick:function(me, record, item, index, e, eOpts)
	    // 	{
	    // 		if(record!=null)
	    // 		{
	    // 			fldval=record.data.id;
	    // 			if(checked==1)////选中
	    // 			{
	    // 				checked=0;
	    // 				lid=record.get('lid');
	    // 				sid=record.get('sid');
	    // 				saveZfbm(store,'',sid,lid);
	    // 			}
	    // 			else if(checked==-1)//取消选中
	    // 			{
	    // 				checked=0;
	    // 				lid=record.get('id');
	    // 				saveZfbm(store,id,'','');
	    // 			}
	    // 			//Ext.Msg.alert("哈哈哈哈","哈哈哈哈哈哈"+record.data.id);
	    // 		}
	    // 	}
	    // }
	});
	return grid;
}
//在某次执法过程中增加或删除执法部门
function saveZfbm(store,id,sid,lid)
{
	var type='';
	$.ajax({
		url : ctxpath+'/Enterprise/svAddZfbm',
		data:{type:'SPSTART',type:type,id:id,sid:sid,lid:lid},
		dataType : 'json',
		async:false,
		type:'POST',
		success:function(data){
			//store.load({params:{eid:eid}});

		},
		error:function(data){

        }
	});
}

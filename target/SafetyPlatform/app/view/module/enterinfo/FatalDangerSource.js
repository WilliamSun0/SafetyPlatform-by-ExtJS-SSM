function initEnterInfofds(eid)
{
	var trblStore = new Ext.data.JsonStore( {
		singleton : true, 
		fields : ['srcId', 'enterId', 'srcName', 'stockNum','criticalNum'],

		proxy: {
			type: 'ajax',
			url:ctxpath+'/Enterprise/getEnterFDSByEid'
		},		
		listeners: {  
	        'beforeload': function (store, op, options) {  
	            var params = { eid:eid  };
	            Ext.apply(store.proxy.extraParams, params);   
	        }  
	    },
		autoLoad: true,//默认为自动加载
		remoteSort:true
	});
	Ext.QuickTips.init();

	var trblGrid = new Ext.grid.GridPanel({
		title:'重大危险源',
	    width: "100%",  
	    height: '100%',  	    
	    frame: true,  
	    //renderTo:renderToDest,
	    stripeRows:true, //斑马线效果  
	    fieldDefaults : {
	    	titleAlign:"center",
			msgTarget : 'side',
			allowBlank : false,
			width:"100%"
			
		},
		defaultType: 'textfield',
        selType: 'cellmodel', 
        plugins:[  

                 Ext.create('Ext.grid.plugin.CellEditing',{ 
                     clicksToEdit:1 //设置单击单元格编辑  
                 })  

        ],  
	    store: trblStore,
	    columns: 
	    [	  
	    	{
            	xtype: 'rownumberer',
               	width: '8%'
	    	}, 
	        {  
	        	xtype : 'hidden',
				name : 'srcId',
				dataIndex:"srcId"
	        }, 
	        {  
	        	xtype : 'hidden',
				name : 'enterId',
				dataIndex:"enterId"
	        },
            {
                header:'<div style="text-align:center">危险品名</div>',
                width:"50%",
                dataIndex:"srcName",
                editor:new Ext.form.TextField({
                    allowBlank:false
                })
            },
            {

                header:"实际存在量",
                xtype:'numbercolumn',
                align:'center',
                width:"32%",
                dataIndex:"stockNum",
                editor:new Ext.form.NumberField({
                    allowBlank:false
                })
            },
            {
                //id:"ljz",
                header:"临界值",
                xtype:'numbercolumn',
                align:'center',
                width:"26%",
                dataIndex:"criticalNum",
                editor:new Ext.form.NumberField({
                    allowBlank:false
                })
            },
			{
	            xtype:'actioncolumn',
	            text: "删除",
	            align:'center',
	            width:"12%",	                   
	            items: [
	            {
                    glyph:0xf056,  // Use a URL in the icon config
	                tooltip: '删除',
	                handler: function(grid, rowIndex, colIndex) 
	                {
	                	if(confirm('你确定要删除该记录吗？')==0)
	                		return;
	                	var rec = grid.getStore().getAt(rowIndex);
		                var tid=rec.get('srcId');
		                $.ajax({
	                    	type : "post",
	                		async:false,
	                	 	url : ctxpath+'/Enterprise/deleteEnterFDSBySrcId',
	                	 	data:{srcId:tid},
	                	 	dataType : 'json',
		            		success:function(data){ 
		            			trblStore.load();
                                Ext.Msg.show('提示信息', '删除成功');
		            		},
		            		error:function(data){
                                Ext.Msg.show('提示信息', '删除失败');
		                    }
		            	});
		                trblStore.load();	                	
	                }
	            }]
			}
	    ],  
	    stripeRows: true,  
	    //sm: selModel,
	    tbar: [ 
	    	 
	        {
                glyph: 0xf0fe,  // Use a URL in the icon config
                tooltip: '增加',
	            handler: function(){
	            	var p = new Ext.data.Record({
		            srcId:0,
		            enterId:eid,
		            srcName:null,
						stockNum:null,
						criticakNum:null
		            }); 
	            	trblStore.insert(trblStore.getCount(), p);	
	                  
	            }  
	        },  
	        {
                glyph: 0xf0a0,  // Use a URL in the icon config
                tooltip: '保存',
	            handler: function(){ 
	            	var arr = [];//声明空数组
	            	var records = trblStore.getModifiedRecords();
	            	Ext.each(records,function(record){//遍历行数据数组
	            		arr.push(record.data);
	            	});
	            	$.ajax({
	            		url : '/SafetyPlatform/Enterprise/svEnterFDSList',
	            		data:JSON.stringify(arr),
	            		dataType : 'json',
	            		contentType:"application/json", 
	            		type:'POST',                                  
	            		success:function(data){ 
	            			trblStore.load();
	            		},
	            		error:function(data){
	            			//MsgBox('出错了！！！');
	                    }
	            	});
	            }  
	        }
	    ]
	});		
    return trblGrid;	
}




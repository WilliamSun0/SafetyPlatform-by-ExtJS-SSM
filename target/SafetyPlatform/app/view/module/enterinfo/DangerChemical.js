function initdc(eid)
{
	var trblStore = new Ext.data.JsonStore( {
		singleton : true, 
		fields : ['involvedMaterial','techId','enterId','mainDanger','techName'],
		proxy: {
			type: 'ajax',
			url:ctxpath+'/Enterprise/getDCTByEid'
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
	title:'关键装置和危险化学工艺',
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
				name : 'enterId',
				dataIndex:"enterId"
	        }, 
	        {  
	        	xtype : 'hidden',
				name : 'techId',
				dataIndex:"techId"
	        }, 
	        {  
	            header:'<div style="text-align:center">装置、重点部位和危险化学工艺名称</div>',
	            width:"50%",  
	            dataIndex:"techName",
                editor:new Ext.form.TextField({
                    allowBlank:false
                })
	        },
	        {  
	            header:'<div style="text-align:center">涉及的危化品</div>',
	            width:"30%",  

	            dataIndex:"involvedMaterial",
                editor:new Ext.form.TextField({
                    allowBlank:false
                })
            },
            {
                header:'<div style="text-align:center">主要危险性</div>',
                width:"30%",

                dataIndex:"mainDanger",
                editor:new Ext.form.TextField({
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
		                var tid=rec.get('techId');
		                $.ajax({
	                    	type : "post",
	                		async:false,
	                	 	url : ctxpath+'/Enterprise/deleteEnterDCTByTechId',
	                	 	data:{techId:tid},
	                	 	dataType : 'json',
		            		success:function(data){ 
		            			trblStore.load();	  
		            			//alert('保存信息成功！');
		            		},
		            		error:function(data){
		                    	//MsgBox('删除失败！');
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
						involvedMaterial:null,
						techId:0,
						enterId:eid,
						mainDanger:null,
						techName :null
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
	            		url : '/SafetyPlatform/Enterprise/svEnterDCTList',
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




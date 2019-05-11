function initScrthrt(eid)
{
	var trblStore = new Ext.data.JsonStore( {
		singleton : true, 
		fields : ['accId','accType','accTime','enterId'],
		proxy: {
			type: 'ajax',
			url:ctxpath+'/Enterprise/getEnterAccByEid'
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
	var tpStore=new Ext.data.SimpleStore({  
		fields : [ 'value', 'text' ],
		data : 
			[ 
				[0, '无任何事故' ],
				[2, '人员伤害-轻微受伤或影响健康' ],
				[5, '人员伤害-较小受伤或影响健康' ] ,
				[10, '人员伤害-较大受伤或影响健康' ] ,
				[15, '人员伤害-不可恢复性伤残或10人以下重伤或1人以上死亡' ] ,
				[2, '财产损失-轻微损失：1000元以下' ], 
				[5, '财产损失-较小损失：1000-10000元' ], 
				[10, '财产损失-轻微损失：中等损失：10000-100000元' ], 
				[15, '财产损失-较大以上损失：10000-100001元' ] 
			] 
    }); 
	var trblGrid = new Ext.grid.GridPanel({

	title:'企业事故',
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
				name : 'accId',
				dataIndex:"accId"
	        }, 
	        {  
	        	xtype : 'hidden',
				name : 'enterId',
				dataIndex:"enterId"
	        }, 
	        {  
	            header:'<div style="text-align:center">事故类型</div>',
	            width:"50%",  
	            dataIndex:"accType",
	            editor: new Ext.form.ComboBox({  
	                editable: false,  
	                displayField: "text",
	                valueField:'value',
	                mode: "local",  
	                triggerAction: "all",  
	                store: tpStore
	            }),
	            renderer: function(value,metadata,record){  
                    var index = tpStore.find('value',value);  
                    if(index!=-1){  
                        return tpStore.getAt(index).data.text;  
                    }  
                    return value;  
                }	            
	        },
	        {  
	            header:'<div style="text-align:center">时间</div>',
	            width:"30%",  
	            //xtype : 'datefield',
	            //format: "Y年m月d日",
	            dataIndex:"accTime",
                editor:{ xtype: 'datefield', format : 'Y-m-d'}
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
		                var tid=rec.get('accId');
		                $.ajax({
	                    	type : "post",
	                		async:false,
	                	 	url : ctxpath+'/Enterprise/deleteEnterAccByAccId',
	                	 	data:{accId:tid},
	                	 	dataType : 'json',
		            		success:function(data){ 
		            			trblStore.load();	  
		            			alert('保存信息成功！');
		            		},
		            		error:function(data){
		                    	MsgBox('删除失败！');
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
                glyph: 0xf0fe,
                tooltip: '增加',
	            handler: function(){
	            	var p = new Ext.data.Record({                 
		            accId:0,
		            enterId:eid,
		            accType:0,
						accTime:null//默认为空即可
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
	            		url : ctxpath+'/Enterprise/svEnterAccList',
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




function initZfwj(eid,type,zfid,renderToDiv)//行政执法文件
{
	//eid=getArgs("eid")	
	var store = Ext.create('Ext.data.Store', {
		singleton : true, 
		fields:[ 'fileId','exeId','fileName','fileLocation'],
		pageSize:20,
		proxy: {
			type: 'ajax',
			url:'/SafetyPlatform/executeLaw/getExeFiles'
		},

		listeners: {  
	        'beforeload': function (store, op, options) {  
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
  	Ext.QuickTips.init();
	var grid = new Ext.grid.GridPanel({  
	    //title: "企业隐患排查",  
	    //renderTo: renderToDiv,
		//id:'yfcl',
	    width: "100%",
	    height: "100%", 	    
	    frame: true,  
	    id:'zfwj',
	    stripeRows:true, //斑马线效果		
        selType: 'cellmodel',
	    store: store,
	    columns: 
		[
	    	{
	    		header:'<div style="text-align:center">序号</div>',
            	xtype: 'rownumberer',
               	width: '12%'
	    	},    	
	    	{	  
	    		dataIndex:"fileId",
	            xtype : 'hidden',
	    		
	    	},  
	       	{
	    		dataIndex:"exeId",
	            xtype : 'hidden'
    		
	    	},
	        {  
	            //header:"执法文件",
	            header:'<div style="text-align:center">执法文件</div>',
	            //align:'center',
	            width:"50%",     
	            dataIndex:"fileName"
	        },
	        {
	            xtype:'actioncolumn',	
	            text: "删除",
	            align:'center',
	            titleAlign:"center",
	            width:'15%',	            
	            items: [
	            {
                    glyph:0xf056,  // Use a URL in the icon config
	                tooltip: '删除',	                
	                handler: function(grid, rowIndex, colIndex) 
	                {
	                	if(!window.confirm('你确定要删除该记录吗？'))
	                		return;
	                	var rec = grid.getStore().getAt(rowIndex);	
	                	
	                    var id=rec.get('id');
	                    var zfid=rec.get('zfid');
	                    var fladdr=rec.get('fladdr');
	                    $.ajax({
	                    	type : "post",
	                		async:false,
	                	 	url : ctxpath+'/Enterprise/deleteZfwjById',
	                	 	data:{id:id,fladdr:fladdr}, 
	                	 	dataType : 'json',
		            		success:function(data){ 
		            			store.load({params:{exeId:'',type:type,zfid:zfid}});
		            			//alert('保存信息成功！');
		            		},
		            		error:function(data){
		                    	alert('error');
		                    }
		            	});
	                    
	                }
	            }]
			},
			{
	            xtype:'actioncolumn',	
	            text: "查看文件",
	            align:'center',
	            titleAlign:"center",
	            width:'20%',	            
	            items: [
	            {
                    glyph:0xf2cc,  // Use a URL in the icon config
	                tooltip: '查看',	                
	                handler: function(grid, rowIndex, colIndex) 
	                {
	                	var rec = grid.getStore().getAt(rowIndex);	                    
	                    var fl=rec.get('fileLocation');
	                   	showFile(fl);
	                   	//win.show();
	                }
	            }]
			}
	    ]
	});
	return grid;
}

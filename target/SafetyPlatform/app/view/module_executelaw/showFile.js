function showFile(file)
{
	if(file.substring(0,1)=='/')
		file=file.substring(1);
	panel = Ext.create('Ext.form.Panel', {
        width: "100%",
        height: "100%",
        title: '',
        //renderTo: 'div1',
        id:'ImgDiv',
        layout : 'form',
        items:[        	
        	{          
        		xtype: 'box', //或者xtype: 'component',          
        		width: "100%", //图片宽度          
        		height: '100%', //图片高度   
        		html:'<embed v-show="pdfShow" width="800" height="600" src="'+ctxpath+"/"+file+'"> </embed>'	
        		    		
			}
        ]
	});			
	var window = new Ext.Window({
        title:'', 
        width:800, 
        height:600, 
        layout: 'fit',
        plain:true, 
        modal:true, 
        //closeAction:'hide', 
        bodyStyle:'padding:5px;', 
        buttonAlign:'center', 
        items:panel,
        closable : false,  
        tools: [new Ext.Button({
        	icon: ctxpath+'/pagesExt/images/close.png',
        	handler:function()
        	{
        		window.close();		
        	}
        })],
    }); 
	window.show();
	
	
}
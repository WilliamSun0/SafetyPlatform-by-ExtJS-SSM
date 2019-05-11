function mult_upload(eid,type,zfid,grid,afterUpload)
{
	var formPanel=Ext.create('Ext.form.Panel', {
		    title: '上传文件',
		    bodyPadding: 5,
		    width: "100%",
			id:'formPanel',
		    items: [
		    {
		        xtype: 'filefield',
		        id: 'upload_1',
		        fieldLabel: "文件名称",
		        emptyText : '选择文件存放路径',
		        buttonText:'浏览...',
		        width: '100%',
		        name: 'file_1',
		        listeners : 
		        {
		            'render' : function() 
		            {
		                Ext.getCmp('upload_1').on('change',function(field, newValue, oldValue) 
		                {
		                    var file = field.fileInputEl.dom.files.item(0);
		                    var fileReader = new FileReader('file://'+newValue);
		                    fileReader.readAsDataURL(file);
		                    fileReader.onload=function(e)
		                    {
		                        addItem("upload_2","file_2");
		                    }
		                });
		            }
		        }
		    }]
		});
		// 定义按钮 
	    var upLoadFile = new Ext.button.Button({ 
	        text:'上传' 
	    });
		function addItem(upload_id,name)
		{
			if(Ext.getCmp(upload_id)!=null)
				return;
			fc = Ext.getCmp('formPanel');
			var items={
				xtype: 'filefield',
			    id: upload_id,
			    fieldLabel: "上传文件",
			    emptyText : '选择文件存放路径',
			    buttonText:'浏览...',
			    width: '100%',
			    name: name,
			    listeners : 
			    {
			     	'render' : function() 
			         {
			         	Ext.getCmp(upload_id).on('change',function(field, newValue, oldValue) 
			            {
			            	var file = field.fileInputEl.dom.files.item(0);
			            	var fileReader = new FileReader('file://'+newValue);
			            	fileReader.readAsDataURL(file);
			            	fileReader.onload=function(e)
			            	{
			            		var id=parseInt(upload_id.substring(7))+1;
			            		var nm="file_"+id.toString();
			            		var id="upload_"+id.toString();
			            		addItem(id,nm);
			                }
			            });
			        }
			    }					
			}
			fc.add(items);
		}
	    // 上传数据功能 
	    var up = function(bt) 
	    {
	    	var i;
	    	//for(i=1;i<100;i++)
	    	{
	        	var filepath = Ext.getCmp('upload_1').getRawValue();// 上传文件名称的路径
	        	var suffix = filepath.substring(filepath.lastIndexOf('.') + 1, filepath.length);
	        	if (filepath == ""){
	            	Ext.Msg.show({title:'提示',msg:'请选择文件!',buttons:Ext.Msg.OK,icon:Ext.MessageBox.INFOR});
	            	return;
	        	}  
	        	else {
		            var array = new Array();
		            array = filepath.split("\\");
		            var length = array.length;
		            var fileName = "";
		            var index = 0;
		            for (index = 0; index < length; index++) 
		            {
		                if (fileName == "") { 
		                    fileName = array[index]; 
		                } else { 
		                    fileName = fileName + "/" + array[index]; 
		                } 
		            } 
	            	var fm=formPanel.getForm();
		            fm.submit({
		                url:ctxpath+"/File/extMltUpload.do", 
		                params:{eid:eid,type:type,zfid:zfid},
		                waitMsg:'数据上传中, 请稍等...', 
		                success:function(form, action) {
		                    if(action.result.success == true){
		                    	clearItems();
		                    	afterUpload(grid,eid,zfid);
		                    }
		                }, 
		                failure : function(form, action) {
		                	clearItems();  
		                    Ext.MessageBox.alert("提示信息","文件上传失败");
		                    return;
		                }
	            	}); 
	        	}
	    	}
	    }
	    function clearItems()
	    {
	    	//var items=Ext.getCmp('formPanel').items;
	    	Ext.getCmp('formPanel').removeAll();
	    	addItem("upload_1","file_1");
	    }
	    // 添加按钮的响应事件 
	    upLoadFile.addListener('click', up, false); 
		var window = new Ext.Window({
	        title:'上传文件', 
	        width:500, 
	        height:400, 
	        x: 50,  
	        y: 50, 
	        minWidth:500, 
	        minHeight:400, 
	        layout: 'fit',
	        plain:true, 
	        modal:true, 
	        //closeAction:'hide', 
	        bodyStyle:'padding:5px;', 
	        buttonAlign:'center', 
	        items:formPanel, 
	        buttons:[upLoadFile]
	    }); 
		//window.show();
		return window;
	
}
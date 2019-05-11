/**
 * 树状菜单，显示在主界面的左边
 *
 *
 */
function mult_upload(exeId,type,zfid,grid,afterUpload)
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
                var fm=formPanel.getForm();
                fm.submit({
                    url:ctxpath+"/File/extMltUpload",
                    params:{exeId:exeId,enterId:enterId},
                    waitMsg:'数据上传中, 请稍等...',
                    success:function(form, action) {
                        if(action.result.success == true){
                            clearItems();
                            afterUpload(grid,exeId);
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

function initUpload(grid, rowIndex, useType,enterId,uid,riskId, record) {

    var formPanel = Ext.create('Ext.form.Panel', {
        title: '上传图片预览',
        bodyPadding: 5,
        width: "100%",

        items: [{
            xtype: 'fileuploadfield',
            id: 'upload',
            fieldLabel: "产品图片",
            emptyText: '选择文件存放路径',
            buttonText: '浏览...',
            width: '100%',
            name: 'file',
            listeners: {
                'render': function () {
                    //据听说要尽量少使用id选择component
                    Ext.getCmp('upload').on('change', function (field, newValue, oldValue) {
                        var file = field.fileInputEl.dom.files.item(0);
                        var fileReader = new FileReader('file://' + newValue);
                        fileReader.readAsDataURL(file);
                        //将照片预览到imageId
                        fileReader.onload = function (e) {
                            Ext.getCmp('imageId').setSrc(e.target.result);
                        }
                    });
                }
            }
        }, {
            xtype: 'image',
            id: 'imageId',
            src: 'http://www.sencha.com/img/20110215-feat-perf.png',
            width: "100%",
            height: 300
        }]
    });
    // 定义按钮
    var upLoadFile = new Ext.button.Button({
        text: '上传'
    });
    // 上传数据功能
    var up = function (bt) {
        var filepath = Ext.getCmp('upload').getRawValue();// 上传文件名称的路径
        //var suffix = filepath.substring(filepath.lastIndexOf('.') + 1, filepath.length);
        if (filepath == "") {
            Ext.Msg.show({title: '提示', msg: '请选择文件!', buttons: Ext.Msg.OK, icon: Ext.MessageBox.INFOR});
            return;
        } else {
            var array = new Array();
            array = filepath.split("\\");
            var length = array.length;
            var fileName = "";
            var index = 0;
            for (index = 0; index < length; index++) {
                if (fileName == "") {
                    fileName = array[index];
                } else {
                    fileName = fileName + "/" + array[index];
                }
            }
            var fm = formPanel.getForm();
            fm.submit({
                url: "/SafetyPlatform/upload",
                params: {'useType': useType,
                    'uid':uid,
                    'riskId':riskId,
                    'enterId':enterId
                },
                waitMsg: '数据上传中, 请稍等...',
                success: function (form, action) {
                    if (action.result.success == true) {

                        var imgfl = action.result.fileName;

                        //上传隐患排查
                        //上传成功后端返回图片位置保存回checkimg列
                        if (useType == "check") {
                            grid.getSelectionModel().select(rowIndex, true, false);
                            record.set("checkImg", imgfl);
                            // else if(strs[0]=="RECTIFY")//上传隐患整改
                            //     record.set("rctimgfl",imgfl);
                            record.commit();
                        }
                        if(useType=="plane"){
                            pmfile = imgfl;
                        }
                        if(useType=="fire"){
                            xffile = imgfl;
                        }

                        console.log("filenale",imgfl)

                        // //var s = request.getSession();
                        // //s.setAttribute("SCRTCHK_MODIFY",1);
                        // if(strs[0]=="CRTCHK")//保存隐患排查
                        //     saveOneScrtchk(grid,rowIndex,imgfl,strs[1]);
                        // else if(strs[0]=="RECTIFY")//保存隐患整改
                        //     saveOneRectify(grid,rowIndex,imgfl,strs[1]);
                        Ext.MessageBox.alert("提示信息", "文件上传成功！！！");
                        addPmtXftItem(enterId);

                    }
                },
                failure: function (form, action) {
                    Ext.MessageBox.alert("提示信息", "请求失败,文件上传失败(请核对你是否有该权限！)");
                }
            });
        }
    };

    //无知不是生存的障碍，傲慢才是
    // 添加按钮的响应事件
    upLoadFile.addListener('click', up, false);
    var window = new Ext.Window({
        title: '上传文件',
        width: 500,
        height: 400,
        x: 50,
        y: 50,
        minWidth: 500,
        minHeight: 400,
        layout: 'fit',
        plain: true,
        modal: true,
        //closeAction:'hide',
        bodyStyle: 'padding:5px;',
        buttonAlign: 'center',
        items: formPanel,
        closable: false,
        buttons: [upLoadFile],
        tools: [new Ext.Button({
            glyph: 0xf2d3,
            handler: function () {
                window.close();
            }
        })],
    });
    return window;
}

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


function initZfbm(eid,type,sid,renderToDiv)//行政执法文件
{
    //eid=getArgs("eid")
    var checked=0;
    var store = Ext.create('Ext.data.Store', {
        singleton : true,
        fields:[ {name:'rid'},{name:'exeId'},{name:'govDepartId'},{name:'govDepartName'}],
        pageSize:20,
        proxy: {
            type: 'ajax',
            url:'/SafetyPlatform/executeLaw/getExeGovList',
            reader :{
                totalProperty : "totalProperty",
                rootProperty : "root",
                type:"json"
            },
        },
        listeners: {
            'beforeload': function (store, op, options) {
                // if(sid==null)
                //     return;
                var params = {exeId:eid};
                Ext.apply(store.proxy.extraParams, params);
            },

        },
        autoLoad: false,//{start: 0, limit: 20},


        remoteSort:true
    });
    store.load({params:{exeId:eid}});
    //store更新时监听，重新勾选
    store.addListener('load', function(st, rds, opts) {
        var selMod = grid.getSelectionModel();
        if(rds==null)
            return;
        //勾选参加了检查的单位
        for (var i = 0; i <rds.length; i++){
            if(rds[i].data.rid!= 0)
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
        stripeRows:true, //斑马线效果
        selType: 'cellmodel',
        store: store,
        selModel: sm,
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
        listeners:
        { //给列加点击事件
        	itemclick:function(me, record, item, index, e, eOpts)
        	{
        		if(record!=null)
        		{
        			fldval=record.data.id;
        			//选中即代表增加这个单位，并立即insert
        			if(checked==1)////选中
        			{
        				checked=0;
        				exeId=record.get('exeId');
        				govDepartId=record.get('govDepartId');
        				saveZfbm(store,0,exeId,govDepartId);
        			}
                    //取消选中即代表单位没参加检查，并立即delete
                    else if(checked==-1)//取消选中
                    {
        				checked=0;
        				rid=record.get('rid');
        				saveZfbm(store,rid,0,0);
                    }
        			//Ext.Msg.alert("哈哈哈哈","哈哈哈哈哈哈"+record.data.id);
        		}
        	}
        }
    });
    return grid;
}
//在某次执法过程中增加或删除执法部门
function saveZfbm(store,rid,exeId,govId)
{
    var type='';
    $.ajax({
        url : ctxpath+'/executeLaw/svAddZfbm',
        data:{rid:rid,exeId:exeId,govId:govId},
        dataType : 'json',
        async:false,
        type:'POST',
        success:function(data){
            store.load({params:{exeId:exeId}});

        },
        error:function(data){

        }
    });
}


function initZfwj(eid,type,zfid,renderToDiv)//行政执法文件
{
    //eid=getArgs("eid")
    var store = Ext.create('Ext.data.Store', {
        singleton : true,
        fields:[ 'fileId','exeId','fileName','fileLocation'],
        pageSize:20,
        proxy: {
            type: 'ajax',
            url:'/SafetyPlatform/executeLaw/getExeFiles',
            reader :{
                totalProperty : "totalProperty",
                rootProperty : "root",
                type:"json"
            },
        },

        listeners: {
            'beforeload': function (store, op, options) {
                var params = {exeId:eid};
                Ext.apply(store.proxy.extraParams, params);
            },

        },

        autoLoad: false,//{start: 0, limit: 20},


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

function initSpstart(eid,renderToDiv)//行政执法--启动
{
    //eid=getArgs("eid")
    var zid='';
    // var tp=eid.substring(0,1);
    // if(tp=='Z')
    // {
    //     zid=eid.substring(1);
    //     eid='';
    // }
    // else
    //     eid=eid.substring(1);
    var store = Ext.create('Ext.data.Store', {

        fields: [{ name: 'exeRemark'},
            { name: 'exeType'},
            { name: 'exeResult', type: 'boolean' },
            { name: 'enterId'},
            { name: 'exeTime', type:'date' },
            { name: 'exeId'}],

        proxy: {
            type: 'ajax',
            url:'/SafetyPlatform/executeLaw/getEnterExecuteLawList',
            reader :{
                //totalProperty : "totalProperty",
                type: 'json',
                rootProperty: 'rows'
            },
        },
        listeners: {
            'beforeload': function (store, op, options) {
                var params = { eid:eid};

                Ext.apply(store.proxy.extraParams, params);
            },

        },
        autoLoad: false,//{start: 0, limit: 20},


        remoteSort:true
    });


    store.addListener('load', function(st, rds, opts) {

        var zfbmgrid=Ext.getCmp('zfbm');
        var zfwjgrid=Ext.getCmp('zfwj');
        if(zfbmgrid!=null)
            zfbmgrid.store.removeAll();
        if(zfwjgrid!=null)
            zfwjgrid.store.removeAll();
        var row=rds.length;
        var grid=Ext.getCmp('spstart');
        if(grid!=null && row>0)
        {
            scrollToRow(grid,row-1);
            var rec=st.getAt(row-1);
            reflashSpstart(rec);//刷新执法部门和执法文件
        }
        else if(eid.length>=32 && row<1)
        {
            alert("该企业暂时无执法记录！");
        }

    });
    store.load({params:{eid:eid}});


    var sm=Ext.create('Ext.selection.CheckboxModel',
        {
            injectCheckbox:0,//checkbox位于哪一列，默认值为0
            //mode:'single',//multi,simple,single；默认为多选multi
            checkOnly:true,//如果值为true，则只用点击checkbox列才能选中此条记录
            allowDeselect:true,//如果值true，并且mode值为单选（single）时，可以通过点击checkbox取消对其的选择
            enableKeyNav:false
        });
    var statStore=new Ext.data.SimpleStore({
        fields: ["val","text"],
        data: [[false,'不合格'], [true,'合格']]
    });

    var typeStore=new Ext.data.SimpleStore({
        fields: ["val","text"],
        data: [[1,'启动'], [3,'检查'],[5,'复查']]
    });

    Ext.QuickTips.init();
    var grid = Ext.create('Ext.grid.Panel',{

        renderTo: Ext.getBody(),
        id:'spstart',
        width: "100%",
        height: "100%",
        frame: true,

        selType: 'cellmodel',
        plugins:
            [
                Ext.create('Ext.grid.plugin.CellEditing',{
                    clicksToEdit:1 //设置单击单元格编辑
                })
            ],
        store: store,
        columns:
            [
                {
                    //header:'<div style="text-align:center">序号</div>',
                    xtype: 'rownumberer',
                    width: '5%',
                    text:'asfasd'
                },
                {
                    dataIndex:"exeId",
                    xtype : 'hidden',

                },
                {
                    dataIndex:"enterId",
                    xtype : 'hidden'

                },
                {
                    text:'类型',
                    width:"10%",
                    align:'center',
                    dataIndex:"exeType",
                    editor: new Ext.form.ComboBox({
                        editable: false,
                        displayField: "text",
                        valueField: "val",
                        mode: "local",
                        triggerAction: "all",
                        store: typeStore
                    }),
                    renderer: function(value,metadata,record){
                        var index = typeStore.find('val',value);
                        if(index!=-1){
                            return typeStore.getAt(index).data.text;
                        }
                        return value;
                    }
                },
                {
                    text:'检查时间',
                    width:"10%",
                    align:'center',
                    dataIndex:"exeTime",
                    editor:{ xtype: 'datefield', format : 'Y-m-d'}
                },
                {
                    text:'备注',
                    width:"50%",
                    dataIndex:"exeRemark",
                    editor:new Ext.form.TextField({
                        allowBlank:false
                    })
                },
                {
                    text:'检查结果',
                    width:"8%",
                    align:'center',
                    dataIndex:"exeResult",
                    editor: new Ext.form.ComboBox({
                        editable: false,
                        displayField: "text",
                        valueField: "val",
                        mode: "local",
                        triggerAction: "all",
                        store: statStore
                    }),
                    renderer: function(value,metadata,record){
                        var index = statStore.find('val',value);
                        if(index!=-1){
                            return statStore.getAt(index).data.text;
                        }
                        return value;
                    }
                },
                {
                    xtype:'actioncolumn',
                    text: "上传文件",
                    align:'center',
                    titleAlign:"center",
                    width:'10%',
                    items: [
                        {
                            glyph: 0xf01b,  // Use a URL in the icon config
                            tooltip: '上传',
                            handler: function(grid, rowIndex, colIndex)
                            {
                                var rec = grid.getStore().getAt(rowIndex);

                                var exeId=rec.get('exeId');

                                if(exeId==null)
                                {
                                    alert('请先保存执法记录再上传文件！');
                                    return;
                                }
                                //saveZfjl(store);//先保存执法记录
                                var zfwjgrid=Ext.getCmp('zfwj');
                                var win=mult_upload(exeId,'SPSTART',null,zfwjgrid,afterUpload);//执法启动文件
                                win.show();

                                //zfwjgrid.store.load({params:{eid:eid,type:'SPSTART',sid:sid}});
                            }
                        }]
                },
                {
                    xtype:'actioncolumn',
                    text: "删除",
                    align:'center',
                    titleAlign:"center",
                    width:'5%',
                    items: [
                        {
                            glyph:0xf056,  // Use a URL in the icon config
                            tooltip: '删除',
                            handler: function(grid, rowIndex, colIndex)
                            {
                                if(!window.confirm('你确定要删除该记录吗？'))
                                    return;
                                var rec = grid.getStore().getAt(rowIndex);
                                var sid=rec.get('sid');
                                var eid=rec.get('eid');
                                $.ajax({
                                    type : "post",
                                    async:false,
                                    url : ctxpath+'/Enterprise/deleteSpstart',
                                    data:{eid:eid,type:'SPSTART',sid:sid},
                                    dataType : 'json',
                                    success:function(data){
                                        store.load({params:{eid:eid}});

                                        //alert('保存信息成功！');
                                    },
                                    error:function(data){
                                        alert('error');
                                    }
                                });

                            }
                        }]
                }
            ],

        tbar:
            [
                {
                    glyph: 0xf0fe,  // Use a URL in the icon config
                    tooltip: '增加',
                    handler: function(){
                        if(eid==null)
                        {
                            alert('请选中企业后再增加！');
                            return;
                        }
                        var rows=store.getCount();
                        type=1;
                        if(rows>0)
                        {
                            rec=store.getAt(rows-1);
                            sid=rec.get('exeId');
                            if(sid==0)
                            {
                                alert('请先保存前一个执法记录！');
                                return;
                            }
                            type=rec.get('exeType');
                            stat=rec.get('exeResult');
                            if((type==5 && stat==0)||type==3)//最近一次是复查且不合格，则需要继续复查，最近一次是检查，则做复查
                                type=5;
                            else if(type==1)//最近一次启动，则需要做 检查
                                type=3;
                            else
                                type=5;
                        }
                        var p = new Ext.data.Record({
                            exeId:0,
                            enterId:eid,
                            exeTime:null,
                            exeRemark:null,
                            exeType:type,
                            exeResult:true
                        });

                        store.insert(store.getCount(), p);
                        scrollToRow(grid,rows);
                        //todo 这里清空所有的文件和部门，新增一个检查时应该查询显示所有的部门
                        //chan尝试重新load
                        Ext.getCmp('zfbm').store.removeAll();
                        Ext.getCmp('zfwj').store.removeAll();

                    }
                },
                {
                    glyph: 0xf0a0,  // Use a URL in the icon config
                    tooltip: '保存',
                    handler: function()
                    {
                        saveZfjl(store);
                    }
                },


            ],
        listeners:
            { //给列加点击事件
                itemclick:function(me, record, item, index, e, eOpts)
                {
                    if(record!=null)
                    {
                        reflashSpstart(record);
                    }
                },
                //点击执法记录，更新相应的执行单位，执法文件
                rowclick: function (a,b,c,d) { //b--Ext.data.Model  a--this  d--rowIndex
                    reflashSpstart(b);
                    console.log(d);
                }
            }
    });

    return grid;
}
function reflashSpstart(record)
{
    var exeId=record.get('exeId');

    var zfbmgrid=Ext.getCmp('zfbm');
    var zfwjgrid=Ext.getCmp('zfwj');
    if(exeId==null)
    {
        //zfbmgrid.store.removeAll();
        //zfwjgrid.store.removeAll();
        return;
    }
    zfbmgrid.store.load({params:{exeId:exeId}});
    zfwjgrid.store.load({params:{exeId:exeId}});
}

function saveZfjl(store)
{
    var arr = [];//声明空数组
    var records = store.getModifiedRecords();
    if(records.length<1)

        return;
    Ext.each(records,function(record){//遍历行数据数组
        arr.push(record.data);
    });
    $.ajax({
        url : '/SafetyPlatform/executeLaw/saveExecuteLawReport',
        data:JSON.stringify(arr),
        dataType : 'json',
        contentType:"application/json",
        type:'POST',
        success:function(data){
            store.load();
            //alert('保存信息成功！');
        },
        error:function(data){
            alert('error');
        }
    });
}
function afterUpload(grid,exeId)
{
    grid.store.load({params:{exeId:exeId}});
}
//滚动Grid到指定的Record
function scrollToRecord(grid,record)
{
    var index = store.indexOf(record);
    grid.scrollToRow(index);
}

//滚动Grid到指定的列
function scrollToRow(grid,rowIndex)
{
    grid.getView().focusRow(rowIndex);
}



Ext.define('SafetyPlatform.view.module_executelaw.ExecuteLawTree', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.executelawtree',

    //controller : '',

    title: '行政区划',
    glyph: 0xf0c9,
    lines: true,
    rootVisible: false,
    useArrows: true,
    hideHeaders: true,
    width: 250,
    minWidth: 100,
    split: true,
    collapsible: true,


    requires: [
        'SafetyPlatform.view.module_executelaw.ExecuteLaw'
    ],

    //viewModel:'module',

    //为View关联上Store
    //改为通过controllerinitstore文件
    store: Ext.create('SafetyPlatform.store.hiddencheckcorrect.HiddenCheckCorrectTreeStore', {
        storeId: "hckts"
    }),

    initComponent: function () {
        var me = this;
        var townId;
        var grid1;
        var grid2;
        var grid3;
        var enterId;
        this.listeners = {

            itemdblclick: function (view, record, item) {

            },

            //如果项被点击的话
            itemclick: function (view, record, item) {
                var nodeData = record.data;
                if (nodeData.type == 5) {


                    if (!nodeData) {
                        showFailMesg({
                            title: '创建模块失败.',
                            msg: '模块加载错误，模块id为空，创建模块失败'
                        });
                    }
                    //是企业信息管理模块单独的

                    var hcctab = Ext.getCmp('centerpanel');
                    hcctab.removeAll();
                    townId = record.parentNode.parentNode.data.regionUrl;
                    enterId = nodeData.regionUrl;

                    grid1 = initSpstart(1,null);
                    grid2 = initZfbm(enterId,null,null,null);
                    grid3 = initZfwj(enterId,null,null,null);
                    //hcctab.setActiveTab(hcctab.add(grid1));

                    hcctab.add(Ext.create('Ext.container.Container',{
                        layout:'border',
                        items:[{
                            region: 'north', // 中间面版
                            height:'60%',
                            // xtype:'elgrid',
                            // enterId:enterId
                            layout:'fit',
                            items:grid1
                        },
                            {
                                region: 'center', // 中间面版

                                layout:'hbox',
                                height:'40%',
                                items:[{
                                    // 中间面版
                                    xtype: 'panel',

                                    width:'50%',
                                    layout: 'fit',
                                    items:grid2
                                },
                                    {
                                        // 中间面版
                                        width:'50%',
                                        layout: 'fit',
                                        items:grid3
                                    }
                                ]
                            },
                            {
                                region: 'north', // 中间面版
                                xtype: 'panel'
                            }
                        ]
                    }));
                }

            }


        };
        this.callParent(arguments);
    }

});
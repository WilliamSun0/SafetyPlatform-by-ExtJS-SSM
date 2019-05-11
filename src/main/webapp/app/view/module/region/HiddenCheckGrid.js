/**
 * 模块数据的主显示区域，继承自Grid
 */
var pmfile,xffile;

function showFile(file)
{

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
                html:'<embed v-show="pdfShow" width="800" height="600" src="'+"/SafetyPlatform"+file+'"> </embed>'

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
                        //pobj.flattr=action.result.FileName;
                        //var rec = grid.getStore().getAt(rowIndex);
                        // var strs = new Array(); //定义一数组
                        //  strs=flattr.split("|"); //字符分割
                        // if(strs[0]=='PM_GRAPH'||strs[0]=='XF_GRAPH'||strs[0]=='MM_GRAPH')//上传企业平面图(消防平面图\门面图)
                        // {
                        //     if(strs[0]=='PM_GRAPH')
                        //         qypmt=action.result.FileName;
                        //     else if(strs[0]=='XF_GRAPH')
                        //         qyxft=action.result.FileName;
                        //     else if(strs[0]=='MM_GRAPH')
                        //         qymmt=action.result.FileName;
                        //     record(action.result.FileName);
                        //     return;
                        // }

                        var imgfl = action.result.fileName;

                        //上传成功后端返回图片位置保存回checkimg列
                        //上传隐患排查
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

Ext.define('SafetyPlatform.view.module.region.HiddenCheckGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.hcg',


    dockedItems: [{
        xtype : "pagingtoolbar",
        pageSize : 12,
        store:this.store,
        displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
        emptyMsg: "没有数据",
        beforePageText: "当前页",
        afterPageText: "共{0}页",
        displayInfo: true,
        dock: 'top'
    }],

    initComponent:function(){
        var flag = true;
        var checkMan =Ext.util.Cookies.get("userName");
        var me = this;
        function saveHRCK(riskId,checkMan)
        {
            var type='';
            $.ajax({
                url : ctxpath+'/hrcc/svHRCC2',
                data:{enterId:me.enterId,riskId:riskId,checkMan:checkMan},
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

                        select: function(model,record,index)
                        {//record被选中时产生的事件

                            var riskId = record.get('riskId');
                           //选中的节目名称
                            checked=1;
                            alert("你确定存在该隐患？" + record.partObject);

                            saveHRCK(riskId,checkMan);
                        }
                    }
            });

        this.selModel=sm;
        var store1 =new Ext.data.Store({

            fields: [
                { name: 'checkMan'},
                { name: 'correctMan' },
                { name: 'partObject'},
                { name: 'mainType'},
                { name: 'riskDescription'},
                { name: 'checkVoucher'},
                { name: 'correctVoucher'},
                { name: 'dangerLevel' },
                { name: 'uid' },
                {name:'checkImg'}
            ],

            proxy : {
                type: 'ajax',
                url: '/SafetyPlatform/HiddenRiskCheckCorrect',

                reader: { type:'json',rootProperty: 'data',
                    totalProperty : 'totalProperty'
                },

                extraParams:{enterId:this.enterId,
                    businessType:this.object_type
                }
            },
            //autoLoad:true

        });

        this.store = store1;
        this.store.load();
        if (!flag) {
            me.store.addListener('load', function (st, rds, opts) {
                var selMod = me.getSelectionModel();
                if (rds == null)
                    return;
                //勾选参加了检查的单位
                for (var i = 0; i < rds.length; i++) {
                    if (rds[i].data.uid != 0)
                        selMod.select(i, true, false);
                }
            });
            flag = false;
        }
        this.columns = [
            {xtype: 'rownumberer', text: '序号', width:40},

            {
                dataIndex: 'checkMan',
                text: '排查员'
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

            {
                id:"uid",
                dataIndex:"uid",
                xtype : 'hidden',
                name : 'uid'
            },

            {
                id:"riskId",
                dataIndex:"riskId",
                xtype : 'hidden',
                name : 'riskId'
            },
            {
                xtype:'actioncolumn',
                text: "上传照片",
                align:'center',
                titleAlign:"center",
                width:80,
                enterId:this.enterId,
                items: [
                    {
                        glyph: 0xf01b,  // Use a URL in the icon config

                        tooltip: '上传照片',
                        handler: function(grid, rowIndex, colIndex)
                        {
                            loaded=false;
                            var rec = grid.getStore().getAt(rowIndex);
                            var uid=rec.get('uid');
                            if (uid == null){
                                alert("请先勾选此隐患项已确认存在该隐患");
                            }
                            var riskId = rec.get('riskId');
                            var enterId = me.enterId;
                            if (Ext.isEmpty(uid)) {
                                uid = 0;
                            }


                            Ext.QuickTips.init();
                            var window=initUpload(grid,rowIndex,"check",enterId,uid,riskId,rec);
                            window.show();
                        }
                    }]
            },
            {
                xtype:'actioncolumn',
                text: "照片查看",
                align:'center',
                items: [
                    {
                        glyph: 0xf01a,  // Use a URL in the icon config
                        handler: function(grid, rowIndex, colIndex)
                        {
                            var rec = grid.getStore().getAt(rowIndex);
                            var fl=rec.get('checkImg');
                            console.log("fielname",fl)
                            showFile(fl);
                            //win.show();
                        }
                    }]
            },
            {

                dataIndex:"checkImg",
                xtype : 'hidden',
            }
        ];




        this.callParent(arguments);

        //this.getViewModel().setData({nowRegion:this.region});

    }

})
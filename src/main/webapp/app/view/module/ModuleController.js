/**
 * 模块的控制器
 */

Ext.define('SafetyPlatform.view.module.ModuleController', {
    extend: 'Ext.app.ViewController',

    requires: ['Ext.window.MessageBox',
        'Ext.window.Toast',
    ],

    alias: 'controller.module',

    init: function () {
        console.log('modulecontroller.init')


    },
    initUpload: function (grid, rowIndex, flattr, record) {

        var formPanel = Ext.create('Ext.form.Panel', {
            title: '上传图片预览',
            bodyPadding: 5,
            width: "100%",

            items: [{
                xtype: 'filefield',
                id: 'upload',
                fieldLabel: "产品图片",
                emptyText: '选择文件存放路径',
                buttonText: '浏览...',
                width: '100%',
                name: 'photo',
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
            var suffix = filepath.substring(filepath.lastIndexOf('.') + 1, filepath.length);
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
                    url: "/File/extupload",
                    params: {'flattr': flattr},
                    waitMsg: '数据上传中, 请稍等...',
                    success: function (form, action) {
                        if (action.result.success == true) {
                            //pobj.flattr=action.result.FileName;
                            //var rec = grid.getStore().getAt(rowIndex);
                            var strs = new Array(); //定义一数组
                            // strs=flattr.split("|"); //字符分割
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
                            // grid.getSelectionModel().select(rowIndex,true,false);
                            // var imgfl=action.result.FileName;
                            //
                            // if(strs[0]=="CRTCHK")//上传隐患排查
                            //     record.set("imgfl",imgfl);
                            // else if(strs[0]=="RECTIFY")//上传隐患整改
                            //     record.set("rctimgfl",imgfl);
                            //
                            // record.commit();
                            // //var s = request.getSession();
                            // //s.setAttribute("SCRTCHK_MODIFY",1);
                            // if(strs[0]=="CRTCHK")//保存隐患排查
                            //     saveOneScrtchk(grid,rowIndex,imgfl);
                            // else if(strs[0]=="RECTIFY")//保存隐患整改
                            //     saveOneRectify(grid,rowIndex,imgfl);
                            Ext.MessageBox.alert("提示信息", "文件上传成功！！！");

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
                glyph: 0xf07b,
                handler: function () {
                    window.close();
                }
            })],
        });
        return window;
    }

})
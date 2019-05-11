var graphPanel,ptmPanel,xftPanel;
function showGraph(enterId,flag)
{
    hidden=false;
    var height=document.body.clientHeight;//	screen.height*0.9;
    var width=document.body.clientWidth;//	screen.height*0.9;
    var bl="75%"
    // if(flag==null || flag==0)
    // {
    //     hidden=true;
    //     bl="64%";
    // }
    pm_file="resources/doc/notebook-empty.jpg";
    xf_file='resources/doc/notebook-empty.jpg';
    // if(qypmt!=null && qypmt.length>32)
    // 	pm_file=qypmt;
    // if(qyxft!=null && qyxft.length>32)
    // 	xf_file=qyxft;
    pmtPanel=Ext.create('Ext.form.Panel', {
        width: width*0.5,
        height: height,
        layout:'form',
        items:[
            { //平面图像
                xtype: 'box', //或者xtype: 'component',
                //id:'pmGraph',
                width: 0.5*width, //图片宽度
                height: '100%', //图片高度
                html:'<embed v-show="pdfShow" width="100%" height="'+bl+'" src="'+'/SafetyPlatform/'+pm_file+'"> </embed>'
            }
        ],
        tbar:
            [
                {
                    glyph: 0xf01b,  // Use a URL in the icon config
                    text: '上传',
                    tooltip: '上传平面图像',
                    hidden : hidden,
                    handler: function(){

                        Ext.QuickTips.init();
                        var window=initUpload(null,0,"plane",enterId,0,0,afterUploadPmtXft);
                        window.show();

                    }
                },
                {
                    text: '下载平面图像',
                    glyph:0xf019,
                    handler: function()
                    {
                        window.open("/SafetyPlatform/img/download?enterId="+enterId+"&imgType=0");
                    }
                }
            ],
        stripeRows: true,
        buttons:
            [

                //{html:"<a href='"+ctxpath+"/File/downLoadFile?fl="+pm_file+"'>下载平面图像;img src='../pagesExt/images/down.png'></a>"},
            ]
    });
    xftPanel=Ext.create('Ext.form.Panel', {
        width: width*0.5,
        height: height,
        layout:'form',
        items:
            [
                { //平面图像
                    xtype: 'box', //或者xtype: 'component',
                    //id:'pmGraph',
                    width: 0.5*width, //图片宽度
                    height: '100%', //图片高度
                    html:'<embed v-show="pdfShow" width="100%" height="'+bl+'" src="'+'/SafetyPlatform/'+xf_file+'"> </embed>'
                }
            ],
        tbar:
            [
                {
                    glyph: 0xf01b,  // Use a URL in the icon config
                    text: '上传',
                    tooltip: '上传消防图像',
                    hidden : hidden,
                    handler: function(){

                        // if(enterId=="not enterprise"){
                        //     // var hcctab = Ext.getCmp('centerpanel');
                        //     // hcctab.setActiveTab(hcctab.down("enterproperty"));
                        //     Ext.MessageBox.alert("提示信息", "请先新建一个企业基本信息");
                        // }
                        Ext.QuickTips.init();
                        var window=initUpload(null,0,"plane",enterId,0,0,afterUploadPmtXft);
                        window.show();

                    }
                },
                {
                    text: '下载消防图像',
                    glyph:0xf019,
                    handler: function()
                    {
                        window.open("/SafetyPlatform/img/download?filename="+enterId+"&imgType=1");
                    }
                }
            ],
        stripeRows: true
    });
    graphPanel = Ext.create('Ext.form.Panel', {
        width: "100%",
        height: "100%",
        title: '平面和消防图像',
        //id:'graph',
        layout : 'hbox',
        items:[
            { //平面图像
                //xtype: 'box', //或者xtype: 'component',
                flex:1,
                //id:'pmGraph',
                width: width*0.5,//图片宽度
                height: height, //图片高度
                items:[pmtPanel]
                //html:'<embed v-show="pdfShow" width="100%" height="100%" src="'+ctxpath+pm_file+'"> </embed>'

            },
            { //消防图像
                //xtype: 'box', //或者xtype: 'component',
                flex:1,
                //id:'xfGraph',
                width: width*0.5, //图片宽度
                height: height, //图片高度
                items:[xftPanel]
                //html:'<embed v-show="pdfShow" width="100%" height="100%" src="'+ctxpath+xf_file+'"> </embed>'

            }
        ],
        stripeRows: true
    });
    return graphPanel;
}
function afterUploadPmtXft(file)
{
    //var panel=Ext.getCmp('graph');
    //graphPanel.removeAll();
    pmtPanel.removeAll();
    xftPanel.removeAll();
    addPmtXftItem(file);
}
function addPmtXftItem(enterId)
{
    pm_file="resources/doc/notebook-empty.jpg";
    xf_file='resources/doc/notebook-empty.jpg';
    // if(qypmt!=null && qypmt.length>32)
    //     pm_file=qypmt;
    // if(qyxft!=null && qyxft.length>32)
    //     xf_file=qyxft;
    var height=document.body.clientHeight;//	screen.height*0.9;
    var width=document.body.clientWidth;//	screen.height*0.9;
    //fc = Ext.getCmp('graph');
    var items=[
        { //平面图像
            xtype: 'box', //或者xtype: 'component',
            //id:'pmGraph',
            width: 0.5*width, //图片宽度
            height: height, //图片高度
            html:'<embed v-show="pdfShow" width="100%" height="100%" src="/SafetyPlatform/images/'+enterId+'/平面图像.jpg/"> </embed>'
        }
    ];
    pmtPanel.add(items);

    items=[
        { //平面图像
            xtype: 'box', //或者xtype: 'component',
            //id:'pmGraph',
            width: 0.5*width, //图片宽度
            height: height, //图片高度
            html:'<embed v-show="pdfShow" width="100%" height="100%" src="/SafetyPlatform/images/'+enterId+'/消防图像.jpg/"> </embed>'
        }
    ];
    xftPanel.add(items);

}
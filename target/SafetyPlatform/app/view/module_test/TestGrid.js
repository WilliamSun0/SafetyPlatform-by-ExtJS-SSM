/**
 * 模块数据的主显示区域，继承自Grid
 */
 
Ext.define('SafetyPlatform.view.module_test.TestGrid', {
	extend : 'Ext.panel.Panel',

	alias:'widget.testgrid',
	requires:[
		'SafetyPlatform.view.module_test.TestViewController',
		'SafetyPlatform.view.module_test.TestModel'],
    title: '用户列表 ',


	controller:'test',

    items:[
        {
            fieldLabel:'姓名',
            xtype:'textfield'
        },{
            fieldLabel:'胸卡号',
            xtype:'textfield'
        },{
            text:'测试按钮',
            xtype:'button',
            listeners:{
                click : 'onTalk'
            }
        }
    ]
})
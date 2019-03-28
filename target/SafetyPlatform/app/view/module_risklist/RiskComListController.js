/**
 * 模块的控制器
 */
 
Ext.define('SafetyPlatform.view.module_risklist.RiskComListController', {
			extend : 'Ext.app.ViewController',
 
			requires : ['Ext.window.MessageBox', 'Ext.window.Toast'],
 
			alias : 'controller.RiskComList',
 
			init : function() {
				console.log('风险评级企业.init')
			}
 
		})
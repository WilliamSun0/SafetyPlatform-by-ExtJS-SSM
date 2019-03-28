/**
 * 模块的控制器
 */
 
Ext.define('SafetyPlatform.view.module.ModuleController', {
			extend : 'Ext.app.ViewController',
 
			requires : ['Ext.window.MessageBox', 'Ext.window.Toast'],
 
			alias : 'controller.module',
 
			init : function() {
				console.log('modulecontroller.init')
			}
 
		})
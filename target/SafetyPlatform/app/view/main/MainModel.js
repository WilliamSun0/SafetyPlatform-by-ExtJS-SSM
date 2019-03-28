/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('SafetyPlatform.view.main.MainModel', {
	extend : 'Ext.app.ViewModel',
 
	alias : 'viewmodel.main',
 
	data : {
		name : 'app',
 
		// 系统信息
		system : {
			name : '安监管理平台',
			version : '5.2018.06.60',
			iconUrl : ''
		},
 
		// 用户单位信息和用户信息
		user : {
			company : '南昌市安监总局',
			department : '工程部',
			name : '孙唯耀'
		},
 
	}
		// TODO - add data, formulas and/or methods to support your view
	});

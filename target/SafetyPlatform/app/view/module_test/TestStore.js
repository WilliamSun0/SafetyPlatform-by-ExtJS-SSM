Ext.define('SafetyPlatform.view.module_test.TestStore', {
  autoLoad : true, //自动加载store
	model : 'SafetyPlatform.view.module_test.TestModel', 
	remoteSort : true, //服务端排序
	proxy : {
		type : 'ajax',//请求类型
		url : '/test/test',
		reader : {
			type : 'json',//数据类型
			root : 'data' //json数据中的data，例如 {"success":1,"message":"","data":[{"id":"1001","name":"张三"}]}
		},
		simpleSortMode : true //单个字符进行排序
	}
})
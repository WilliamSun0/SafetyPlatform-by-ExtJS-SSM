Ext.define('SafetyPlatform.view.module_test.TestModel', {
  
  extend: 'Ext.data.Model',
    fields: [
        { name: "test_id" },
        { name: "emp_id" },
        { name: "name"}
    ],
    proxy : {
        type:'ajax',
        url:'/SafetyPlatform/test/test'
    }
})
Ext.define('SafetyPlatform.store.hiddencheckcorrect.HiddenCheckCorrectTreeStore', {
    extend: 'Ext.data.TreeStore',

    alias:'store.hckts',

    //model:'SafetyPlatform.model.riskcomlist.test',

    root: {
        expanded: true,

    },


    sorters: [{ property: 'OrderNumber', direction: 'ASC' }],
    proxy: { type: 'ajax',
        url: '/SafetyPlatform/test/testtree',

        reader: { type:'json'}
    },

    autoLoad:true,


});


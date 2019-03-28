Ext.define('SafetyPlatform.store.riskcomlist.RiskComListStore', {
    extend: 'Ext.data.Store',

    alias:'store.rcl',

    model: 'SafetyPlatform.model.riskcomlist.RiskComListModel',


    proxy: {
        type: 'ajax',
        url: '/SafetyPlatform/test/test',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    autoLoad: true
});

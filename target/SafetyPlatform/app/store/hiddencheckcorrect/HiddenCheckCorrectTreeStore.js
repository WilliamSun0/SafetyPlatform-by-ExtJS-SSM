Ext.define('SafetyPlatform.store.hiddencheckcorrect.HiddenCheckCorrectTreeStore', {
    extend: 'Ext.data.TreeStore',

    alias:'store.hckts',

    root:{//树状图有且只有一个树根
        expanded:true,//这树状图是可以打开叶子的
        children:[
            {
                text:'大项目1',
                expanded:true,
                children:[
                    {
                        id:1,//为下面的监听事件所使用，且ID为1
                        text:'项目1',

                        children:[
                            {
                                id:11,//为下面的监听事件所使用，且ID为1
                                text:'项目1',
                                leaf:true//表明这里是叶子，不再向下延伸，同时为下面的监听器所操作
                            },
                            {
                                id:12,
                                text:'项目2',
                                leaf:true
                            },
                            {
                                id:13,
                                text:'项目3',
                                leaf:true
                            }
                        ]
                    },
                    {
                        id:'x',
                        text:'项目2',
                        leaf:true
                    },
                    {
                        id:3,
                        text:'项目3',
                        leaf:true
                    }
                ]
            },
            {
                text:'大项目2',
                expanded:true,
                children:[
                    {
                        id:4,
                        text:'项目4',
                        leaf:true
                    },
                    {
                        id:5,
                        text:'项目5',
                        leaf:true
                    }
                ]
            }
        ]
    }

});


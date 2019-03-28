<%--
  Created by IntelliJ IDEA.
  User: swy
  Date: 2019/3/19
  Time: 11:50
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>

    <title>mainframe</title>
    <%@include file="../common/head.jsp" %>
    <style type="text/css">
        .loginicon {

        }
    </style>
    <script type="text/javascript">

        Ext.onReady(function () {
            Ext.define('Learning.view.treelearn.trees', {
                extend: 'Ext.panel.Panel',
                xtype:'trees-main',
                referenceHolder: true,
                layout: 'border',
                defaults:{
                    collapsible: true,
                    split: true
                },
                items: [
                    {
                        region :'north',
                        bind: {
                            html: '上'
                        }
                    },
                    {
                        region :'south',
                        bind: {
                            html: '下'
                        }
                    },
                    {
                        reference:'treesLeft',
                        //xtype:'treesLeft',
                        region :'west',
                        width:200,
                        bind: {
                            html: '左'
                        }
                    },
                    {
                        region :'east',
                        width:200,
                        bind: {
                            html: '右'
                        }
                    },
                    {
                        reference:'treesCenter',
                        region :'center',
                        bind: {
                            html: '中'
                        }
                    },
                ]
            });
            var trees = new
        });

    </script>
</head>
<body>

</body>
</html>
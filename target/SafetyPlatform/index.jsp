<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page pageEncoding="UTF-8" %>
<!DOCTYPE HTML>
<html manifest="">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=10, user-scalable=yes">

    <title>SafetyPlatform</title>


    <script src="./jquery-3.2.1.js"></script>
    <script src="app/view/module/enterinfo/scrthrt.js"></script>
    <script src="app/view/module/enterinfo/enterprise_graph.js"></script>
    
    <!-- 引入Font Awesome的css文件 -->
<link type="text/css" rel="stylesheet" href="css/font-awesome.css">
 
    <!--
    <script type="text/javascript">
        var Ext = Ext || {}; // Ext namespace won't be defined yet...

        // This function is called by the Microloader after it has performed basic
        // device detection. The results are provided in the "tags" object. You can
        // use these tags here or even add custom tags. These can be used by platform
        // filters in your manifest or by platformConfig expressions in your app.
        //
        Ext.beforeLoad = function (tags) {
            var s = location.search,  // the query string (ex "?foo=1&bar")
                profile;

            // For testing look for "?classic" or "?modern" in the URL to override
            // device detection default.
            //
            if (s.match(/\bclassic\b/)) {
                profile = 'classic';
            }
            else if (s.match(/\bmodern\b/)) {
                profile = 'modern';
            }
            else {
                profile = tags.desktop ? 'classic' : 'modern';
                //profile = tags.phone ? 'modern' : 'classic';
            }

            Ext.manifest = profile; // this name must match a build profile name

            // This function is called once the manifest is available but before
            // any data is pulled from it.
            //
            //return function (manifest) {
                // peek at / modify the manifest object
            //};
        };
    </script>
    -->

    <%--<c:set var="ctxpath" value="${pageContext.request.contextPath}"/>--%>
    <!-- The line below must be kept intact for Sencha Cmd to build your application -->
    <script id="microloader" data-app="c6d53545-e0f0-44af-a440-467a4b1d5556" type="text/javascript" src="bootstrap.js"></script>

</head>
<body>

<input id="ctxpath" type="hidden" value="${pageContext.request.contextPath}" />
</body>
</html>

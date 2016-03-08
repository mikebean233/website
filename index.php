<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/jquery.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="css/buttons.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="css/colReorder.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="css/keyTable.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="css/responsive.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="css/rowReorder.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.css"/>
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.structure.css"/>
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.theme.css"/>

    <script type="text/javascript" src="js/jquery-2.2.0.js"></script>
    <script type="text/javascript" src="js/jquery.dataTables.js"></script>
    <script type="text/javascript" src="js/dataTables.buttons.js"></script>
    <script type="text/javascript" src="js/dataTables.colReorder.js"></script>
    <script type="text/javascript" src="js/dataTables.keyTable.js"></script>
    <script type="text/javascript" src="js/dataTables.responsive.js"></script>
    <script type="text/javascript" src="js/jquery-ui.js"></script>

</head>
<body>
<script language="javascript">
$( document ).ready(function() {
    var table;
    var accessTableColumns = [
        {title: "time"},
        {title: "host"},
        {title: "user : port"},
        {title: "remote logname"},
        {title: "remote user"},
        {title: "first line of request"},
        {title: "status"},
        {title: "referer"},
        {title: "user agent"},
        {title: "bytes received"},
        {title: "bytes sent"}
    ];

$.ajax({
        url: "/access.log",
        type: "POST",
        dataType: "text",
        contentType: "application/octet-stream",
        success: function(json){
            var splitByNewline = json.split("\n");
            var rowData = [];
            for(var i = 0; i < splitByNewline.length; ++i){
                var thisLineTokens = splitByNewline[i].split("<delimiter>");
                if(thisLineTokens && thisLineTokens.length >= accessTableColumns.length)
                    rowData[i] = thisLineTokens;
            }
            table = $("#accessTable").DataTable({
            data: rowData,
                columns: accessTableColumns,
                scrollY: "10em",
                scrollX: true
            });
        }
    });


	
   // $("#accessTable").DataTable({});
});
</script>

<link rel="shortcut icon" href="http://www.mikeswebserver.com/favicon.ico" />
<a href="http://www.github.com/mikebean233">github</a><br>
<a href="prob.html">Probability</a>

<p><h2>Access Log</h2></p>
<p><table id="accessTable" class="stripe row-border cell-border older-column nowrap" style="font-size: .7em">
    <thead>
        <tbody>

        </tbody>
    </thead>
</table></p>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<title>
    Michael Peterson
</title>
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
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="css/bootstrap-theme.css"/>


    <script type="text/javascript" src="js/jquery-2.2.0.js"></script>
    <script type="text/javascript" src="js/jquery.dataTables.js"></script>
    <script type="text/javascript" src="js/dataTables.buttons.js"></script>
    <script type="text/javascript" src="js/dataTables.colReorder.js"></script>
    <script type="text/javascript" src="js/dataTables.keyTable.js"></script>
    <script type="text/javascript" src="js/dataTables.responsive.js"></script>
    <script type="text/javascript" src="js/jquery-ui.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>
</head>

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
});
</script>
<body>
    <div class="row">
        <div class="col-lg-12">
            <h1 class="text-center">mikeswebserver<small>.com</small></h1>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-2">
            <link rel="shortcut icon" href="http://www.mikeswebserver.com/favicon.ico" />
            <ul style="list-style-type: none">
                <li><a href="http://www.github.com/mikebean233">github</a></li>
                <li><a href="prob.html">Probability</a></li>
            </ul>
        </div>
        <div class="col-sm-10">
            <div class="row">
                <h2>Access Log</h2>
                <p>
                    <div id="accessTableWrapper" class="panel panel-default" style="background-color: mintcream">
                        <table id="accessTable" class="panel-body stripe row-border cell-border order-column nowrap" style="font-size: .7em">
                            <thead>
                                <tbody>
                                </tbody>
                            </thead>
                        </table>
                    </div>
                </p>
            </div>
        </div>
    </div>
</body>
</html>
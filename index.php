<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/jquery.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="css/buttons.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="css/colReorder.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="css/keyTable.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="css/responsive.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="css/rowReorder.dataTables.css"/>

    <script type="text/javascript" src="js/jquery-2.2.0.js"></script>
    <script type="text/javascript" src="js/jquery.dataTables.js"></script>
    <script type="text/javascript" src="js/dataTables.buttons.js"></script>
    <script type="text/javascript" src="js/dataTables.colReorder.js"></script>
    <script type="text/javascript" src="js/dataTables.keyTable.js"></script>
    <script type="text/javascript" src="js/dataTables.responsive.js"></script>
    <script type="text/javascript" src="js/dataTables.rowReorder.js"></script>
</head>
<body>
<script language="javascript">
$( document ).ready(function() {

$.ajax({
        url: "http://www.mikeswebserver.com/access.log",
        type: "POST",
        dataType: "text",
        contentType: "application/octet-stream",
        success: function(json){
            var splitByNewline = json.split("\n");
            var rowData = [];
            for(var i = 0; i < splitByNewline.length; ++i){
                var thisLineTokens = splitByNewline[i].split("<delimiter>");
                rowData[i] = thisLineTokens;
                /*rowData[i] = {
                    time: thisLineTokens[0],
                    host: thisLineTokens[1],
                    userPort: thisLineTokens[2],
                    remoteLogname: thisLineTokens[3],
                    remoteUser: thisLineTokens[4],
                    firstLineOfRequest: thisLineTokens[5],
                    status: thisLineTokens[5],
                    referer: thisLineTokens[6],
                    userAgent: thisLineTokens[7],
                    bytesReceived: thisLineTokens[8],
                    bytesSent: thisLineTokens[9]
                };*/
            }
            $("#accessTable").DataTable({
            data: rowData,
            columns: [
                {title: "time"},
                {title: "host"},
                {title: "remote logname"},
                {title: "remote user"},
                {title: "first line of request"},
                {title: "referer"},
                {title: "user agent"},
                {title: "bytes received"},
                {title: "bytes sent"}
                ]
            });
            }
            //console.log("\"" + splitByNewLine + "\"");
          //console.log(splitByNewLine);
        }
    });


	
   // $("#accessTable").DataTable({});
});
</script>

<link rel="shortcut icon" href="http://www.mikeswebserver.com/favicon.ico" />
<a href="http://www.github.com/mikebean233">github</a><br>
<a href="prob.html">Probability</a>
<p><label>Access Log</label></p>
<p><table id="accessTable">
    <thead>
        <tbody>

        </tbody>
    </thead>
</table></p>
</body>
</html>
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
        dataType: "jsonp",
        contentType: "application/octet-stream",
        success: function(json){

            //var splitByNewline = json.split("\n");
            //console.log("\"" + splitByNewLine + "\"");
          console.log("hi");
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
        <tbody></tbody>
    </thead>
</table></p>
</body>
</html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="style/DataTables-1.10.11/css/jquery.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="style/Buttons-1.1.2/css/buttons.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="style/ColReorder-1.3.1/css/colReorder.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="style/KeyTable-2.1.1/css/keyTable.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="style/Responsive-2.0.2/css/responsive.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="style/RowReorder-1.1.1/css/rowReorder.dataTables.css"/>

    <script type="text/javascript" src="js/jQuery-2.2.0/jquery-2.2.0.js"></script>
    <script type="text/javascript" src="js/DataTables-1.10.11/js/jquery.dataTables.js"></script>
    <script type="text/javascript" src="js/Buttons-1.1.2/js/dataTables.buttons.js"></script>
    <script type="text/javascript" src="js/ColReorder-1.3.1/js/dataTables.colReorder.js"></script>
    <script type="text/javascript" src="js/KeyTable-2.1.1/js/dataTables.keyTable.js"></script>
    <script type="text/javascript" src="js/Responsive-2.0.2/js/dataTables.responsive.js"></script>
    <script type="text/javascript" src="js/RowReorder-1.1.1/js/dataTables.rowReorder.js"></script>
</head>
<body>
<script language="javascript">
$( document ).ready(function() {
    $("#accessTable").DataTable("/access.log");
});
</script>

<link rel="shortcut icon" href="http://www.mikeswebserver.com/favicon.ico" />
<a href="http://www.github.com/mikebean233">github</a><br>
<a href="prob.html">Probability</a>
<label>Access Log</label>
<div id="accessTable"></div>
</body>d
</html>
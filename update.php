<html>
<head>
<script src="jquery.js"></script>
</head>
<body>
		<title>Updating mikeswebserver.com ... </title>
<?php
	$output = array();
	$arguments = array();
	exec("pwd", $output, $arguments);
	foreach($output as &$element){
		echo $element;
	}

	?>
</body>
</html>

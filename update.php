<html>
<head>
<script src="jquery.js"></script>
</head>
<body>
		<title>Updating mikeswebserver.com ... </title>
<?php
	$output = array();
	$arguments = array();
	exec("whoami", $output, $arguments);
	foreach($output as &$element){
		echo $element;
	}

	?>
</body>
</html>

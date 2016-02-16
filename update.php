<html>
<head>
</head>
<body>
updating...<br>
<?php
	$output = array();
	$arguments = array();
	exec("sudo git pull", $output, $arguments);
	foreach($output as &$element){
		echo "$element<br>";
	}

	?>
</body>
</html>

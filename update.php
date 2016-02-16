<html>
<head>
</head>
<body>
updating...<br>
<div>
<?php
	$output = array();
	$arguments = array();
	exec("sudo git pull", $output, $arguments);
	foreach($output as &$element){
		echo "$element<br>\r\n";
	}

	?>
</div>
</body>
</html>

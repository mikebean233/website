<html>
<head>
<script src="jquery.js"></script>
</head>
<body>
		<title>Updating mikeswebserver.com ... </title>
<?php
	$output = exec("sudo git pull");
	echo "$output"; 

	?>
</body>
</html>

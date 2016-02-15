<html>
<head>
<script src="jquery.js"></script>
</head>
<body>
<?php
	$output = exec("sudo git pull");
	echo "$output"; 

	?>
</body>
</html>

<html>
<head>
<script src="jquery.js"></script>
</head>
<body>
<?php echo "hello world"; ?>
<div id="testId">
</div>
<script>

$(document).ready(function(){
$("#testId").html("<table><tbody> \
<tr> \
    <td><label style=\"color: red;\">RED</label></td> \
    <td><label style=\"color: green;\">GREEN</label></td> \
</tr> \
</tbody></table>");
document.location.href = "http:\\mikesweberver.com\index.html";

});
</script>
</body>
</html>

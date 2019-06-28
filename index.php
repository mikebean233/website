<?php
    include 'lib/DirectoryIndexer.php';
     use DirectoryIndexer;
     $mainContentMap = new \DirectoryIndexer("main_content", ["admin" => "admin/access.html"], "home");
     $section = $mainContentMap->getSameOrDefaultKey($_GET["section"]);
     if(is_null($section))
        $section = "home";
?>
<!DOCTYPE html>
<html lang="en">
<title>
    Michael Peterson
</title>
<head>
    <link rel="stylesheet" type="text/css" href="css/jquery.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="css/buttons.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="css/colReorder.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="css/keyTable.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="css/responsive.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="css/rowReorder.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.css"/>
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.structure.css"/>
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.theme.css"/>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="css/bootstrap-theme.css"/>
    <link rel="stylesheet" type="text/css" href="css/style.css"/>

    <script type="text/javascript" src="js/jquery-2.2.0.js"></script>
    <script type="text/javascript" src="js/jquery.dataTables.js"></script>
    <script type="text/javascript" src="js/dataTables.buttons.js"></script>
    <script type="text/javascript" src="js/dataTables.colReorder.js"></script>
    <script type="text/javascript" src="js/dataTables.keyTable.js"></script>
    <script type="text/javascript" src="js/dataTables.responsive.js"></script>
    <script type="text/javascript" src="js/jquery-ui.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>

    <!-- Time Card -->
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <script src="projects/timeCard/runtime-es2015.js" type="module"></script>
    <script src="projects/timeCard/polyfills-es2015.js" type="module"></script>
    <script src="projects/timeCard/runtime-es5.js" nomodule></script>
    <script src="projects/timeCard/polyfills-es5.js" nomodule></script>
    <script src="projects/timeCard/styles-es2015.js" type="module"></script>
    <script src="projects/timeCard/styles-es5.js" nomodule></script>
    <script src="projects/timeCard/vendor-es2015.js" type="module"></script>
    <script src="projects/timeCard/main-es2015.js" type="module"></script>
    <script src="projects/timeCard/vendor-es5.js" nomodule></script>
    <script src="projects/timeCard/main-es5.js" nomodule></script>
</head>
<style>
    .nav a {
        font-size: 20px
    }
    .dropdown
    .dropdown-menu li:hover .sub-menu {
        visibility: visible;
    }

    .dropdown:hover .dropdown-menu {
        display: block;
    }

</style>
<body class="container-fluid" style="background-color: aliceblue">
        <div class="row">
            <div class="col-sm-12">
                <div style="clear: both">
                    <h4 class="mainMenuItem" style="float: left">
                        <a href="/" style="text-decoration: none; color: inherit">
                            mikeswebserver<small>.com</small>
                        </a>
                    </h4>
                    <h4 style="float: right">
                    <small>last updated 
                    	<?php 
							$output = array();
							exec('git show -s --format=%cd', $output); 
                    		$tokens = explode(" ", $output[0]);
                    		
							echo "$tokens[0] $tokens[1] $tokens[2] $tokens[3] $tokens[4]";
                    	?>
                    </small> </h4>
                </div>
            </div>
            <h1 class="text-center"><small>the personal website of </small>Michael Peterson</h1>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <ul class="nav nav-pills navbar-default navbar-collapse">
                    <?php
                        $sectionNames = $mainContentMap->getMenuKeys();
                        foreach($sectionNames as &$thisSectionName){
                            $isActiveSection = $thisSectionName == $section ? 'class="active"' : '';
                            echo '<li ' . $isActiveSection . '><a href="?section=' . $thisSectionName . '" class="mainMenuItem">' . ucwords($thisSectionName) . '</a></li>';
                        }
                    ?>
                    <li class="dropdown navbar-right">
                        <a href="?section=admin" class="dropdown-toggle mainMenuItem"  style="font-size: 1em" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            Admin<span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="?section=admin" class="mainMenuItem" id="access"  style="font-size: 1em">Server Activity</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    <div class="row">
        <div class="col-sm-12">
            <div id="mainContainer">
                <?php
                    include $mainContentMap->get($section);
                ?>
            </div>
        </div>
    </div>
</body>
<script language="javascript">
    $(document).ready(function(){
        //initPartial();
    });
</script>
</html>
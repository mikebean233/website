<?php
    $projectsMap = new \DirectoryIndexer("projects", [], "blackjack");
    $selectedProject = $projectsMap->getSameOrDefaultKey($_GET["project"]);
?>
<script language="javascript">
    var initPartial = function(){

    };
</script>
<div  class="text-center">
    <p>
        <h1>Projects</h1>
    </p>
</div>
<ul class="nav nav-tabs">
    <?php
    $projectNames = $projectsMap->getMenuKeys();
    foreach($projectNames as &$thisProjectName){
        echo '<li role="presentation" ' . (($thisProjectName == $selectedProject) ? 'class="active"' : '') . '><a href="?section=projects&project=' . $thisProjectName . '">' . ucwords($thisProjectName) . '</a></li>';
    }
    ?>
</ul>
<div id="projectContainer">
    <?php
        include $projectsMap->get($selectedProject);
    ?>
</div>

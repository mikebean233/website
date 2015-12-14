$(document).ready(
  function(){
	$(".navCell").mouseenter(
	  function(e){
	    e.currentTarget.style.backgroundColor = "red" ;
	  }).mouseleave(
	  function(e){
	    e.currentTarget.style.backgroundColor = "white";}
	  );
 
 	
 
  }
);
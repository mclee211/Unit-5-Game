$(document).ready(function(){
  $("#start-button").click(function(){

  	var number = 50;
  	alert("The let's get ready to rumble!");
    $("#start-button").on("click", start);   
    $("#submit").on("click", finish);  

    function start(){
    	counter = setInterval(timer, 1000);
    	showMe(".question");
    	showMe(".answers");
    	showMe("#submit");
	    hideMe("#start-button");
	    hideMe(".rules");
	    hideMe("#reset");
	    hideMe("#results");
    }
    function timer(){
      number-- 
      $("#show-number").html("<h2>" + number + "</h2>" );
      if (number === 0){
        alert("Times Up!")
        stop(); 
      }
    }
    function stop(){
    	clearInterval(counter); 
    	$("#results").show();
    	$("#reset").show();
		$(".question").hide();
		$(".answers").hide();
		$("#submit").hide();
    }
    function finish(){
    	number = 1; 
    	clearInterval(counter); 
    	timer();
    }

    function restart(){
    	number = 50;
    	start();
    }

    function hideMe(e) {
    	$(e).hide();
    }
    function showMe(e) {
    	$(e).show();
    }

  	start(); 
  });
});


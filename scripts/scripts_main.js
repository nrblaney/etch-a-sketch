//makes a grid of divs with the specified dimensions (sqDiv) in square cells. 
var windowHeight = 400;
var windowWidth = 400;

//var numBoxes = sqDivs * sqDivs;


function boxMaker(sqDivs) {
	var boxHeight = windowHeight / (sqDivs);
	var boxWidth = windowWidth / (sqDivs);

	for(i = 0; i <= sqDivs - 1; i++) {
		$('table').append('<tr><td><div class="box" style="width:'+ boxWidth +'px;height:'+ boxHeight +'px;" </div></td></tr>');
	}
	for(i = 0; i <= sqDivs - 2; i++) {
		$('tr').append('<td><div class="box" style="width:'+ boxWidth +'px;height:'+ boxHeight +'px;"</div</td>');
	}
}
function boxLighter() {
	//changes box color on hover
	$('.box').hover(function(){
	$(this).addClass("lit");
	}, function(){
	// uncomment the below to reset the div class when the mouse leaves.
	// $(this).removeClass("lit");
	});
}

function boxReset() {
	// Button to reset table
	$('button').click(function(){ 
		alert("You've clicked the button!");
		$('table').empty();
		boxMaker(prompt("How many square units would you like the next window to be?"));
		boxLighter();

	});

}

$(document).ready(function(){

	boxMaker(4);
	boxLighter();
	boxReset();

});






//makes a grid of divs with the specified dimensions (sqDiv) in square cells. 
var windowHeight = 100;
var windowWidth = 100;

var sqDivs = 2;
//var numBoxes = sqDivs * sqDivs;
var boxHeight = windowHeight / (sqDivs);
var windowHeight = windowWidth / (sqDivs);

$(document).ready(function(){
	for(i = 0; i <= sqDivs - 1; i++) {
		$('table').append('<tr><td><div class="box" style= "height:' + windowHeight + '; width:' + windowWidth + '</div></td></tr>');
	}
	for(i = 0; i <= sqDivs - 2; i++) {
		$('tr').append('<td><div class="box" style= "height:' + windowHeight + '; width:' + windowWidth + '>' + i + '</div</td>');
	}
//changes div color on hover
$('.box').hover(function(){
	$(this).addClass("lit");
	}, function(){
	// uncomment the below to reset the div class when the mouse leaves.
	// $(this).removeClass("lit");
	});

});
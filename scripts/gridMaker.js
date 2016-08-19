//makes a grid of divs with the specified dimensions (sqDiv) in square cells. 
var sqDivs = 36;

$(document).ready(function(){
	for(i = 0; i <= sqDivs; i++) {
		$('table').append('<tr><td><div class="box">' + '</div></td></tr>');
	}
	for(i = 0; i <= sqDivs - 1; i++) {
		$('tr').append('<td><div class="box"></div</td>'  + " ");
	}
//changes div color on hover
$('.box').hover(function(){
	$(this).addClass("lit");
	}, function(){
	// uncomment the below to reset the div class when the mouse leaves.
	// $(this).removeClass("lit");
	});

});
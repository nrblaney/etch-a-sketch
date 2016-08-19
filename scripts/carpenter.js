//carpenter makes a table with the specified dimensions in square cells. 
var sqCells = 16;

$(document).ready(function(){
	for(i = 0; i <= sqCells; i++) {
	$('table').append('<tr><td>cell-1</td></tr>');
	}
});
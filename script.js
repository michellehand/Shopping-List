$(document).ready(function() {
	//add items
	$('#addButton').click(function(event) {
		event.preventDefault();
		var item = $("#itemEntry").val();
		$("#items").append('<li>' + item + '<img src="images/trash.png"></li>');
		//clears input field
		$("input").val('');
	});
	//remove items
	$(document).on('click', 'img', function() {
		$(this).parent().remove();
	});
	//strikethrough item
	$(document).on('click', 'li', function() {
		$(this).toggleClass('strike');
	});
	//clear list
	$('#reset').click(function(event) {
		event.preventDefault();
		$('ul').empty(); 
	});
	//hover help
	$('#valueArea').hover(function() {
		$(this).find('#help').fadeIn(250);
		},
		function() {
		$(this).find('#help').fadeOut(250);
		});
});
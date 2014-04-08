$(document).ready(function() {
	//add items
	$('#addButton').click(function(event) {
		event.preventDefault();
		var item = $("#itemEntry").val();
		$("#items").append('<li>' + item + '<img src="images/trash.png"></li>');
		$("input").val('');
	});

	//remove items
	$(document).on('click', 'img', function() {
		$(this).parent().remove();
	});
	$('li').dblclick(function() {
		$(this).parent().css("text-decoration", "line-through");
	}

});

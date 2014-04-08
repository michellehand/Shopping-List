$(document).ready(function() {
	$('#button').click(function() {
		var item = ($("#itemEntry").val());
		$(".additem").append('<li>+item+</li>');
		});
	});
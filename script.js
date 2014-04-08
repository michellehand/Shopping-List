$(document).ready(function() {
	$('#button').click(function() {
		var item = ($("#box").val());
		$("#items").append('<li>+item+</li>');
		});
	});
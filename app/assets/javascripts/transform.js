$(document).ready(function() {
	$('#scale input').change(function() {
		// idk why it's returning an object
		var parent = $(this).parent();

		alert(parent)
	});

	$('#scale #global input').change(function() {
		var ratio = $(this).val();

		$('.active').css('transform', 'scale(' + ratio + ')');
	});

	$('#scale #x input').change(function() {
		var ratio = $(this).val();

		$('.active').css('transform', 'scaleX(' + ratio + ')');
	});

	$('#scale #y input').change(function() {
		var ratio = $(this).val();

		$('.active').css('transform', 'scaleY(' + ratio + ')');
	});

	var ratio = [];

	$('#transform #skew input').change(function() {
		var eq = $(this).index();

		ratio[eq] = $(this).val();

		$('.active').css('transform', 'skew(' + ratio[0] + 'deg,' + ratio[1] + 'deg)');
	});

	$('#transform #rotate input').change(function() {
		var deg = $(this).val();

		$('.active').css('transform', 'rotate(' + deg + 'deg)');
	});
});

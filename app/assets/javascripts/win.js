$(document).ready(function() {
	$('#grid input[type="checkbox"]').is(':checked') ? $('#canv').attr('class', 'grid') : $('#canv').attr('class', 'obj');

	$('#grid input[type="checkbox"]').change(function() {
		$('#grid input[type="checkbox"]').is(':checked') ? $('#canv').attr('class', 'grid') : $('#canv').attr('class', 'obj');
	});

	$('#grid input[type="text"]').change(function() {
		var inc = $(this).val();

		$('#canv.grid').css('background-size', inc + 'px ' + inc + 'px');
	});
});

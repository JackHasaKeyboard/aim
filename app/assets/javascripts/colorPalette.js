$(document).ready(function() {
	$('#color-palette div svg rect').click(function() {
		var color = $(this).attr('fill');

		$('.active').attr('fill', color);
	});
});

$(document).ready(function() {
	$('#stroke #weight').change(function() {
		var wd = $(this).val();

		$('.active').attr('stroke-width', wd);
	});

	$('#stroke #color').change(function() {
		var color = $(this).val();

		$('.active').attr('stroke', color);
	});

	$('#fill input').change(function() {
		var color = $('#fill input').val();

		$('.active').attr('fill', color);
	});

	$('#cap #linejoin').change(function() {
		var linejoin = $(this).val();

		$('.active').attr('stroke-linejoin', linejoin);
	});

	$('#layer input').change(function() {
		$('.active').attr('z-index', $(this).val());
	});

	$('#z-pos input').change(function() {
		// z-index doesn't work on SVG; visibility is determined by position in DOM
		var zPos = $(this).val();

		var el = $('.active').clone();

		$('.active').remove();

		zPos > 0 ? $('.obj:eq(' + (zPos - 1) + ')').after(el) : $('#canv').prepend(el)
	});
});

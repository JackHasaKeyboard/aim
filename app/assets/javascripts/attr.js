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

	$('#prim a').click(function() {
		var d = $(this).find('path').attr('d');

		$('#canv').append('<svg class="active" style="margin-left: ' + pos[0] + '; margin-top: ' + pos[1] + '"><path d="' + d + '"></path></svg>');
	});

	$('#layer input').change(function() {
		$('.active').attr('z-index', $(this).val());
	});
});

$(document).ready(function() {
	$('#prim a').click(function() {
		var d = $(this).find('path').attr('d');

		$('#canv').append('<svg class="active" style="margin-left: ' + pos[0] + '; margin-top: ' + pos[1] + '"><path d="' + d + '"></path></svg>');
	});
});

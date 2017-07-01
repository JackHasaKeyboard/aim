$(document).ready(function() {
	$.getJSON('cfg/boilerplate.json', function(data) {
		$('#canv').css({
			width: data.canv.size[0] + 'px',
			height: data.canv.size[1] + 'px'
		});
	});
});

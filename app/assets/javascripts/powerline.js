window.updatePowerline = function() {
	$('#powerline #mode').text('Mode: ' + mode);

	$('.active').length ? $('#powerline #obj').text('Object: ' + $('.active').attr('id') + '.' + p) : $('#powerline #obj').text('Object: nil')
}

$(document).ready(function() {
	updatePowerline();
});

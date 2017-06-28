window.updatePowerline = function() {
	$('#powerline #mode').text('Mode: ' + mode);

	$('.active').length ? $('#powerline #obj').text('Object: ' + $('.active').attr('id') + '.' + activePoint) : $('#powerline #obj').text('Object: nil')
}

$(document).ready(function() {
	updatePowerline();
});

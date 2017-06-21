$(document).ready(function() {
	$('#bar div h4').click(function() {
		$(this).parent().find('div *').toggle();
	});
});

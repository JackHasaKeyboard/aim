$(document).ready(function() {
	$('#bar div h4').click(function() {
		$(this).parent().find('div *').toggle();

		$(this).find('i').toggleClass('fa-angle-double-down fa-angle-double-up');
	});

	$('input.numeric').numeric();
});

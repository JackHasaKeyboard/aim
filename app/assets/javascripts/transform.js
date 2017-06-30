$(document).ready(function() {
	// scale
	$('#scale input').change(function() {
		parent = $(this).parent().attr('id');

		ratio = $(this).val();

		switch(parent) {
			case 'global':
				$('.active').css('transform', 'scale(' + ratio + ')');

				break;

			case 'x':
				$('.active').css('transform', 'scaleX(' + ratio + ')');

				break;

			case 'y':
				$('.active').css('transform', 'scaleY(' + ratio + ')');

				break;
		}
	});

	// skew
	$('#skew input').after('<label>deg<label>');

	$('#skew input').change(function() {
		parent = $(this).parent().attr('id');

		ratio = $(this).val();

		switch(parent) {
			case 'global':
				$('.active').css('transform', 'skew(' + ratio + 'deg, ' + ratio + 'deg)');

				break;

			case 'x':
				$('.active').css('transform', 'skewX(' + ratio + 'deg)');

				break;

			case 'y':
				$('.active').css('transform', 'skewY(' + ratio + 'deg)');

				break;
		}
	});

	// rotate
	$('#rotate input').after('<label>deg<label>');

	$('#rotate input').change(function() {
		var deg = $(this).val();

		$('.active').css('transform', 'rotate(' + deg + 'deg)');
	});
});

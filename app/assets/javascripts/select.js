$(document).ready(function() {
	// overlay is messing up, figure out something else. turn off selecting or whatever if you can

	$('.obj').click(function() {
		$('.obj').attr('class', 'obj active');
	});
});

$(document).on('mousedown mouseup', function(e) {
	$('#select').remove();

	var offset = $('#overlay').offset();

	var select = [
		[],
		[]
	];

	// make left or right button
	if (e.type == 'mousedown') {
		var click = [
			Math.round(event.pageX - offset.left),
			Math.round(event.pageY - offset.top)
		]

		click[0] > 0 ? select[0][0] = click[0] : select[0][0] = 0
		click[1] > 0 ? select[0][1] = click[1] : select[0][1] = 0

		if (dir == 1) {
			$('#overlay').append('<svg id="select"><rect x="' + select[0][0] + '" y="' + select[0][1] + '" style="stroke-width: 1; stroke: blue" fill="rgba(0, 0, 255, 0.6)"></svg>');
		}

		if (dir == -1) {
			$('#overlay').append('<svg id="select"><rect x="' + select[0][0] + '" y="' + select[0][1] + '" style="stroke-width: 1; stroke: red" fill="rgba(255, 0, 0, 0.6)"></svg>');
		}

		$(document).on('mousemove', function(e) {
			pos = [
				Math.round(event.pageX - offset.left),
				Math.round(event.pageY - offset.top)
			]

			Math.round(pos[0]) < 400 ? select[1][0] = pos[0] : select[1][0] = 400
			Math.round(pos[1]) < 400 ? select[1][1] = pos[1] : select[1][1] = 400

			var size = [
				select[1][0] - select[0][0],
				select[1][1] - select[0][1]
			]

			size[0] > 0 ? $('#select rect').attr('width', size[0]) : size[0] = 0
			size[1] > 0 ? $('#select rect').attr('height', size[1]) : size[1] = 0
		});
	}

	if (e.type == 'mouseup') {
		$('#select').remove();
	}

	$('#overlay .obj').each(function() {
		$(this).addClass('active');
	});
});

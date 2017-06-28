// SVG isn't loaded when events are fired, requires load event
$(document).on('click', '.obj path', function() {
	if (dir == 1) {
		$('.obj').attr('class', 'obj');

		$(this).parent().attr('class', 'obj active');
	}

	if (dir == -1) {
		$('.obj').attr('class', 'obj');
	}

	updateNode();
});

$(document).on('mousedown mouseup', function(e) {
	$('#select').remove();

	var offset = $('#overlay').offset();

	var select = [
		[],
		[]
	];

	if (e.which == 1) { // left mouse button
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

			$(document).on('mousemove', function() {
				var mousePos = [
					Math.round(event.pageX - offset.left),
					Math.round(event.pageY - offset.top)
				]

				mousePos[0] < 400 ? select[1][0] = mousePos[0] : select[1][0] = 400
				mousePos[1] < 400 ? select[1][1] = mousePos[1] : select[1][1] = 400

				var size = [
					select[1][0] - select[0][0],
					select[1][1] - select[0][1]
				]

				select[1][0] > select[0][0] ? caw = 'asdf' : ($('#select').attr('x', mousePos[1][0]), size[0] = select[0][0] - select[1][0])
				select[1][1] > select[0][1] ? caw = 'asdf' : ($('#select').attr('y', mousePos[1][1]), size[1] = select[0][1] - select[1][1])

				$('#select rect').attr('width', size[0]);
				$('#select rect').attr('height', size[1]);

				// select point
				var d = getData();

				$.each(d, function(i, point) {
					if (point['point'][1] > select[0][0] && point['point'][2] < select[1][0] && point['point'][2] > select[0][1] && point['point'][2] < select[1][1]) {
						if ($.inArray(i, activePoint) == -1) {
							activePoint.push(i);
						}

						updateNode();
					}
				});
			});
		}
	}
});

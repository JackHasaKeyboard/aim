var state = 0;

window.addPoint = function(type) {
	if (!$('.active').length) {
		d = '\nM ' + pos[0] + ',' + pos[1] + '\n';

		$('#canv').append('<svg id="obj--' + obj + '" class="obj active" fill="#000"><path d="' + d + '"></path></svg>');

		$('#overlay').append('<svg id="new" shape-rendering="crispEdges"><path stroke="blue"></path></svg>');

		$('#overlay').append($('.active').clone(true, true).attr({
			'fill': 'none',
			'stroke': 'blue'
		}));

		obj++;
	} else {
		switch(type) {
			default:
				d += type + ' ' + pos[0] + ',' + pos[1] + '\n';

				break;

			case 'H':
				d += type + ' ' + pos[0] + '\n';

				break;

			case 'V':
				d += type + ' ' + pos[1] + '\n';

				break;

			case 'C':
				if (state == 0) {
					d += type + ' '
				}

				d += pos[0] + ',' + pos[1] + '\n';

				state++ % 3

				break;

			case 'A':
				d += type + ' ' + pos[0] + ',' + pos[1] + '\n' // rX, rY
				d += 1 + ' ' // x-axis-rotation
				d += 1 + ' ' // large-arc-flag
				d += 1 + ' ' // sweep-flag
				d += pos[0] + ',' + pos[1] + '\n' // eX, eY

				break;
		}

		p++;

		$('.active path').attr('d', d);
	}

	prevPoint = pos.slice();

	updateData();
	updatePowerline();
	updateNode();
	updateMarker();
	updateHistory();
}

window.selectPoint = function(dir) {
	mode = 'point';

	var d = getData();

	$('.node').attr('stroke', 'blue');
	$('.node:eq(' + p + ')').attr('stroke', 'red');

	p = (p + dir) % d.length
	alert(p)

	prevPoint = d[p];

	updateNode();
}

window.setData = function(d) {
	var s = '\n'

	$.each(d, function(i, point) {
		s += point['point'][0] + ' ' + point['point'][1] + ',' + point['point'][2] + '\n'
	});

	s += 'Z\n'

	$('.active path').attr('d', s);
}

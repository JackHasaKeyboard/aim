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

				state = (state + dir) % 3

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

	p = (p + dir) % d.length

	prevPoint = d[p];

	updateNode();
	updatePowerline();
}

window.getData = function() {
	var data = [],
	s = $('.active path').attr('d'),
	seg = /([^\d]) (\d+),(\d+)/g,
	item;

	while (item = seg.exec(s)) {
		data.push(
			{
				'point': [
					item[1],
					parseInt(item[2]),
					parseInt(item[3])
				]
			}
		);
	}

	return data;
}

window.setData = function(d) {
	var s = '\n'

	$.each(d, function(i, point) {
		s += point['point'][0] + ' ' + point['point'][1] + ',' + point['point'][2] + '\n'
	});

	s += 'Z\n'

	$('.active path').attr('d', s);
}

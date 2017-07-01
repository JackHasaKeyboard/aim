$(document).on('keydown keyup', function(e) {
	if (e.type == 'keydown') {
		switch(e.which) {
			case 16: // shift
				inc = 100;

				break;

			case 17: // ctrl
				inc = 1;

				keymode = 'chain';

				break;

			case 18: // alt
				dir = -1;

				break;

			case 16:
			case 17:
			case 18:
				e.preventDefault();
		}
	}

	if (e.type == 'keyup') {
		switch(e.which) {
			case (16): // shift
				inc = 10;

				break;

			case (17): // ctrl
				inc = 10;

				keymode = '';

				break;

			case 18: // alt
				dir = 1;

				break;
		}
	}
});

obj = $('.obj').length;
closed = false;

deg = 0;

$(document).on('keydown keyup', function(e) {
	updatePowerline();

	switch(e.which) {
	// svg
	case 76: // m
	case 77: // l
	case 72: // h
	case 86: // v
	case 67: // c
	case 83: // s
	case 81: // q
	case 84: // t
	case 65: // a
		var char = String.fromCharCode(e.which);

		if (e.type == 'keydown') {
			$('#new path').attr('d', '\nM ' + prevPoint[0] + ',' + prevPoint[1] + '\n' + char + ' ' + pos[0] + ',' + pos[1] + '\n');
		}

		if (e.type == 'keyup') {
			addPoint(char);
		}

		break;
	}
});

step = 0;

$(document).keydown(function(e) {
	if ($('input').is(':focus')) {
		switch(e.which) {
			case 27: // esc
				$('input').blur();

				break;
		}
	} else {
		e.preventDefault();

		step += 1;

		$('#history #step').text('Step: ', step);

		if (keymode == 'chain') {
			switch(e.which) {
				case 67: // c
					clipboard = $('.active').clone();

					clipboard.attr('id', $('.active').attr('id') + '-cpy');
					clipboard.attr('class', 'obj active');

					break;

				case 86: // v
					obj++;

					$('.active').attr('class', 'obj');
					$('#canv').append(clipboard);

					var d = getData();

					d[0]['point'] = [
						'M',
						pos[0],
						pos[1]
					]

					setData(d);

					updateData();
					updateObjList();

					break;
			}
		}

		switch(e.which) {
			case 27: // esc
				mode = 'obj';

				$('.active').attr('class', 'obj');
				$('#new').remove();

				$('.node').remove();

				break;

			case 190: // period
				selectPoint(dir);

				break;

			case 189: // dash
				selectLine();

				break;
		}

		if (mode == 'move') {
			updateCurs(pos);

			$('#new').remove();

			switch(e.which) {
				case 40: // down arrow
					moveObj('down');

					break;

				case 38: // up arrow
					moveObj('up');

					break;

				case 37: // left arrow
					moveObj('left');

					break;

				case 39: // right arrow
					moveObj('right');

					break;
			}
		}

		if (mode == 'obj') {
			switch(e.which) {
				case 40: // down arrow
					pos[1] += inc;

					updateCurs(pos)

					break;

				case 38: // up arrow
					pos[1] -= inc;

					updateCurs(pos)

					break;

				case 37: // left arrow
					pos[0] -= inc;

					updateCurs(pos)

					break;

				case 39: // right arrow
					pos[0] += inc;

					updateCurs(pos);

					break;

				case 82: // r right now, make questionmark
					$('#help').click();

					break;

				case 74: // j
					switch(e.which) {
						// case x:
							// pos[0] = arg
							// break;

						// case y:
							// pos[1] = arg
							// break;
					}

					updateCurs();

					break;

				case 71: // g
					mode = 'move'

					break;

				case 68: // d
					$('.active').remove();

					updateNode();

					break;

				case 90: // z
					$('.active').attr('class', 'obj');

					updateNode();

					mode = 'obj';

					break;

				case 79: // o
					if (dir == 1) {
						obj < ($('.obj').length - 1) ? obj += dir : obj = 0
					}
					if (dir == -1) {
						obj > 0 ? obj += dir : obj = ($('.obj').length - 1)
					}

					$('.obj').attr('class', 'obj');
					$('.obj:eq(' + obj + ')').attr('class', 'obj active');
					updateNode();

					break;
			}
		}

		if (mode == 'point') {
			var d = getData();

			switch(e.which) {
				case 40: // down arrow
					d[p]['point'][2] += inc;

					break;

				case 38: // up arrow
					d[p]['point'][2] -= inc;

					break;

				case 37: // left arrow
					d[p]['point'][1] -= inc;

					break;

				case 39: // right arrow
					d[p]['point'][1] += inc;

					break;

				case 68: // d
					d.splice(p + 1, 1);

					break;
			}

			updateNode();

			setData(d);
		}
	}
});

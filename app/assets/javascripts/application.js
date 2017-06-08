// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {
	var d = '';

	/* ctrl */
	$('#grid input[type="checkbox"]').is(':checked') ? $('#canv').attr('class', 'grid') : $('#canv').attr('class', 'obj');

	// win
	$('#win #grid input[type="checkbox"]').change(function() {
		$('#grid input[type="checkbox"]').is(':checked') ? $('#canv').attr('class', 'grid') : $('#canv').attr('class', 'obj');
	});

	$('#win #grid input[type="text"]').change(function() {
		var inc = $(this).val();

		$('#canv.grid').css('background-size', inc + 'px ' + inc + 'px');
	});

	$('#help').click(function() {
		$('#cheatsheet').toggle();
	});

	pos = [0, 0];
	prevPoint = [];

	function updateCurs(pos) {
		$('#curs').css({
			'margin-left': pos[0] - 10,
			'margin-top': pos[1] - 10
		});

		$('#curs text').text(pos[0] + ', ' + pos[1]);
	}

	updateCurs(pos);

	// node
	function updateNode() {
		$('.node').remove();

		var d = $('.active path').attr('d').match(/(\d+),(\d+)/g);

		$.each(d, function(i) {
			var node = d[i].split(',');

			$('#canv').append('<svg class="node" shape-rendering="crispEdges" stroke="red" style="margin-left: ' + (node[0] - 2) + '; margin-top: ' + (node[1] - 2) + '"><path d="M 0 0 L 3 0 L 3 3 L 0 3 Z"></path></svg>');
		});
	}

	function updateObj() {
		$('#obj #list h4').remove();

		$('#canv svg.obj').each(function() {
			var id = $(this).attr('id');

			$('#obj #list').append('<h4>' + id + '</h4>');
		});

		var id = $('.active').attr('id');

		$('#attr #current').val(id);

		var fill = $('.active').attr('fill');

		$('#fill input').val(fill);

		$('#obj #list input').change(function() {
			var id = $(this).val();

			$('.active').attr('id', id);
		});
	}

	var inc = 10;
	var dir = 1;

	// hotkey
	$(document).keydown(function(e) {
		e.preventDefault();

		switch(e.which) {
			case 16: // shift
				inc = 100;

				break;

			case 17: // ctrl
				inc = 1;

				break;

			case 18: // alt
				dir = -1;

				break;
		}
	});

	$(document).keyup(function(e) {
		switch(e.which) {
			case (16): // shift
				inc = 10;

				break;

			case (17): // ctrl
				inc = 10;

				break;

			case 18: // alt
				dir = 1;

				break;
		}
	});

	var obj = 0;
	var i = 0;
	var closed = false;

	var proj = $('#canv').html();
	$('#data').text(proj);

	function addPoint(type) {
		if (!$('.active').length) {
			$('#canv').append('<svg id="new" shape-rendering="crispEdges"><path stroke="blue"></path></svg>');

			obj++;

			updateObj();

			d = '\nM ' + pos[0] + ',' + pos[1] + '\n';

			$('#canv').append('<svg id="obj' + obj + '" class="obj active" fill="#000"><path d="' + d + '"></path></svg>');
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
					closed == false ? (closed = true, d += type + ' ' + pos[0] + ',' + pos[1] + ' ') : (closed = false, d += pos[0] + ',' + pos[1] + ' ' + pos[0] + ',' + pos[1] + '\n');

					break;

				case 'A':	
					d += type + ' ' + pos[0] + ',' + pos[1] + ' ' // rX, rY
					d += 1 + ' ' // x-axis-rotation
					d += 1 + ' ' // large-arc-flag
					d += 1 + ' ' // sweep-flag
					d += pos[0] + ',' + pos[1] + '\n' // eX, eY

					break;
			}

			$('.active path').attr('d', d + 'Z\n');
		}

		prevPoint = pos.slice();

		$('#data').text($('#canv').html());
		updateNode();
	}

	var mode = 'obj';
	var p = 0;

	function selectPoint() {
		mode = 'point';

		var data = getData();

		$('.node').attr('stroke', 'red');
		$('.node:eq(' + p + ')').attr('stroke', 'blue');

		p < data.length ? p += dir : p = 0
	}

	function selectLine() {
		mode = 'line';

		var data = getData();

		$('.node').attr('stroke', 'red');
		$('.node:eq(' + p + '), .node:eq(' + (p + 1) + ')').attr('stroke', 'blue');

		p < data.length ? p += dir : p = 0
	}

	// problem
	function getData() {
		var d = $('.active path').attr('d').match(/(\d+),(\d+)/g);

		var data = [];

		$.each(d, function(i, point) {
			var newPoint = [];

			$.each(point.split(','), function(i, axis) {
				newPoint.push(parseInt(axis));
			});

			data.push(newPoint);
		});

		return data;
	}

	function moveObj(dir) {
		var data = getData();

		var d = '';

		$.each(data, function(i, point) {
			d == '' ? char = 'M' : char = 'L'

			switch(dir) {
				case 'down':
					point[1] += 10

					break;

				case 'up':
					point[1] -= 10

					break;

				case 'left':
					point[0] -= 10

					break;

				case 'right':
					point[0] += 10

					break;
			}

			d += '\n' + char + point[0] + ',' + point[1] + '\n';
		});

		$('.active path').attr('d', d + '\nZ\n');

		updateNode();
	}

	var deg = 0;

	$(document).on('keydown keyup', function(e) {
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

	$(document).keydown(function(e) {
		if ($('input').is(':focus')) {
			switch(e.which) {
				case 27: // esc
					$('input').blur();

					break;
			}
		} else {
			switch(e.which) {
				case 27: // esc
					mode = 'obj';

					$('.active').attr('class', 'obj');
					$('#new').remove();

					updateNode();

					break;

				case 190: // period
					selectPoint();

					break;

				case 189: // dash
					selectLine();

					break;
			}

			if (mode == 'move') {
				updateCurs(pos)

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

			if (mode == 'line')	{
				selectLine();
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

					case 71: // g
						mode = 'move'

						break;

					case 82: // r
						deg += 90

						$('.active').attr('transform', 'rotate(' + deg + ')');

						break;

					case 83: // s
						var d = $('.active path').attr('d');

						break;

					case 68: // d
						$('.active').remove();

						updateNode();

						break;

					case 90: // z
						$('.active').attr('class', 'obj');
						$('#new').remove();

						d = '';
						mode = 'obj';

						updateNode();

						break;

					case 79: // o
						e.preventDefault();

						if (dir == 1) {
							obj < ($('.obj').length - 1) ? obj += dir : obj = 0
						} else if (dir == -1) {
							obj > 0 ? obj += dir : obj = ($('.obj').length - 1)
						}

						$('.obj').attr('class', 'obj');
						$('.obj:eq(' + obj + ')').attr('class', 'obj active');
						updateNode();

						break;
				}
			}

			if (mode == 'point') {
				var data = getData();

				switch(e.which) {
					case 40: // down arrow
						data[p][1] += 10;

						updateNode();

						break;

					case 38: // up arrow
						data[p][1] -= 10;

						updateNode();

						break;

					case 37: // left arrow
						data[p][0] -= 10;

						updateNode();

						break;

					case 39: // right arrow
						data[p][0] += 10;

						updateNode();

						break;

					case 68: // d
						var data = getData();

						data.splice(p + 1, 1);

						$('.active path').attr('d', data + 'Z\n');

						break;
				}

				var d = '';

				$.each(data, function(i, point) {
					d == '' ? char = 'M' : char = 'L'

					d += char + point[0] + ',' + point[1] + '\n';
				});

				$('.active path').attr('d', d + 'Z\n');
			}
		}
	});

	/* bar */
	$('#bar div h4').click(function() {
		$(this).parent().find('div').toggle();
	});

	// btn
	$('#btn a:first-child').attr('class', 'current');
	$('#btn a').click(function() {

		$(this).attr('class', 'current');
	});

	// obj
	$('#stroke #weight').change(function() {
		var wd = $(this).val();

		$('.active').attr('stroke-width', wd);
	});

	$('#stroke #color').change(function() {
		var color = $(this).val();

		$('.active').attr('stroke', color);
	});

	$('#fill input').change(function() {
		var color = $('#fill input').val();

		$('.active').attr('fill', color);
	});

	$('#cap #linejoin').change(function() {
		var linejoin = $(this).val();

		$('.active').attr('stroke-linejoin', linejoin);
	});

	$('#prim a').click(function() {
		var d = $(this).find('path').attr('d');

		$('#canv').append('<svg class="active" style="margin-left: ' + pos[0] + '; margin-top: ' + pos[1] + '"><path d="' + d + '"></path></svg>');
	});

	/* canvas */
	// select box
	$(document).on('mousedown mouseup', function(e) {
		var select = [];
		var offset = $('#canv').offset();

		if (e.type == 'mousedown') {
			select[0] = [
				Math.round(event.pageX - offset.left),
				Math.round(event.pageY - offset.top)
			]

			$('#canv').append('<svg id="select"><rect x="' + select[0][0] + '" y="' + select[0][1] + '" style="stroke-width: 1; stroke: blue" fill="rgba(0, 0, 255, 0.6)"></svg>');

			$(document).on('mousemove', function(e) {
				select[1] = [
					Math.round(event.pageX - offset.left),
					Math.round(event.pageY - offset.top)
				]

				var size = [
					select[1][0] - select[0][0],
					select[1][1] - select[0][1]
				]

				$('#select rect').attr('width', size[0]);
				$('#select rect').attr('height', size[1]);
			});
		}

		if (e.type == 'mouseup') {
			$('#select').remove();
		}
	});
});

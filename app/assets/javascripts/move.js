window.moveObj = function(dir) {
	var s = ''

	var d = getData();

	$.each(d, function(i, dat) {
		var char = dat['point'][0]
		var point = [
			dat['point'][1],
			dat['point'][2]
		]

		switch(dir) {
			case 'down':
				point[1] += inc

				break;

			case 'up':
				point[1] -= inc

				break;

			case 'left':
				point[0] -= inc

				break;

			case 'right':
				point[0] += inc

				break;
		}

		s += char + ' ' + point[0] + ',' + point[1] + '\n';
	});

	s += 'Z\n'

	$('.active path').attr('d', s);

	updateNode();
}

window.updateMarker = function() {
	// $('.mark').remove();
	
	// // todo, get bbox. doesn't work cuz of SVG relativity
	// $('.obj').each(function() {
	// 	var d = getData();

	// 	var half = [0, 0];

	// 	$.each(d, function(i, point) {
	// 		point['point'][1] > half[0] ? half[0] = (d[0]['point'][1] + point['point'][1]) / 2 : half[0] = half[0]
	// 		point['point'][2] > half[1] ? half[1] = (d[0]['point'][2] + point['point'][2]) / 2 : half[1] = half[1]
	// 	});
				
	// 	$('#overlay').append('<svg class="mark"><text fill="green">' + half[0] + '</text><path d="M ' + half[0] + ',0 L ' + half[0] + ',400 Z" stroke="green"></path></svg><svg class="mark"><text fill="green">' + half[1] + '</text><path d="M 0,' + half[1] + ' L 400,' + half[1] + ' Z" stroke="green"></path></svg>');
	// });
}

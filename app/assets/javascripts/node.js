window.updateNode = function() {
	$('.node').remove();

	var d = getData();

	$.each(d, function(i, node) {
		$('#overlay').append('<svg class="node" stroke="blue"><rect width="3px" height="3px" x="' + (node['point'][1] - 1) + '" y="' + (node['point'][2] - 1) + '" fill="#fff" stroke-width="1"></svg>');
	});

	updatePowerline();

	$('.node').attr('stroke', 'red');
	$('.node:eq(' + p + ')').attr('stroke', 'blue');

	$.each(activePoint, function(i, point) {
		$('.node').eq(i).attr('stroke', 'red');
	});
}

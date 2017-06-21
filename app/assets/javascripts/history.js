var hist = []
var step = 0

window.updateHistory = function() {
	var snapShot = $('#canv').html();

	hist.push(snapShot);

	// $('#history *').remove();

	// $.each(hist, function(i, el) {
	// 	$('#history').append('<div class="snapShot">' + el + '</div>');
	// });
}

$('#history #step input').val(step);

$('#history #step input').change(function() {
	var step = $(this).val();

	$('#canv').html(hist[step]);
});

pos = [0, 0];
prevPoint = [];

$(document).ready(function() {
	window.updateCurs = function(pos) {
		$('#curs').css({
			'margin-left': pos[0] - 10,
			'margin-top': pos[1] - 10
		});

		$('#curs text').text(pos[0] + ', ' + pos[1]);
	}

	updateCurs(pos);

	window.updateObjList = function() {
		$('#obj #list li').remove();

		$('#canv .obj').each(function() {
			var id = $(this).attr('id');

			$('#obj #list').append('<li>' + id + '</li>');
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
});

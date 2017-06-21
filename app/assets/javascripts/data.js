function updateData() {
	var data = $('#canv').html().replace(/^\s+/, '').replace(/\>/g, '>\n');

	$('#data').text(data);
}

$(document).ready(function() {
	$('#fName').change(function() {
		var fName = $(this).val() + '.svg';
		$('#write').attr('download', fName);

		var fContent = $('#canv').html();
		var blob = new Blob([fContent], {type:'image/svg+xml'});

		// chrome specific
		if (window.URL) {
			$('#write').attr('href', window.URL.createObjectURL(blob));
		}
	});
});

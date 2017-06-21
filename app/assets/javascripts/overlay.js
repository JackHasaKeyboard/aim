window.updateHighlight = function() {
	var d = getData();

	if (!$('.highlight').length) {
		$('#overlay').append('<svg class="highlight" fill="none"><path d="' + d + '"></path></svg>');
	} else {
		setData('.highlight');
	}
}

$('body').on('click', '.selector', function(event) {
	event.preventDefault();

	$(this)
		.show();
});
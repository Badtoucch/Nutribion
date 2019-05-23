$(function () {
	/* плавный скролл */
	$(document).on('click', 'a[href^="#"]', function (evt) {
		evt.preventDefault();
		var $this = $(this);
		var offset = 0;

		if ($this.hasClass('head__link')) {
			offset = 30;
		}

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - offset
		}, 500);
	});
});
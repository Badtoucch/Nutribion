$(function () {
  /* аккордеон на отзывах */
  var $reviewsButtons = $('.rev-box__btn');
  // var reviewToggleClass = 'rev-box__btn--toggle';

  $reviewsButtons.click(function(evt) {
    evt.preventDefault();

    var $this = $(this);
    // $this.toggleClass(reviewToggleClass);
    this.parentElement.parentElement.classList.toggle("content-plus");
  });

  /* карусель отзывов */
  var $reviewCarousel = $(".rev-content");
  var reviewCarouselSettings = {
		slidesToShow: 3,
		arrows: true,
		dots: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
  };

  $reviewCarousel.on("afterChange", function() {
    // $reviewsButtons.removeClass(reviewToggleClass);
    $(this)
      .find(".slick-slide.content-plus")
      .not(".slick-active")
      .removeClass("content-plus");
  });

	$reviewCarousel.slick(reviewCarouselSettings);
  
  /* попап добавления ревью */
  $('.btn-review').click(function () {
    var reviewInput1 = $('.input__val-1').val().length,
      reviewInput2 = $('.input__val-2').val().length,
      reviewInput3 = $('.input__val-3').val().length;
    if (reviewInput1 !== 0 && reviewInput2 !== 0 && reviewInput3 !== 0) {
      $('.input__val-1').val("");
      $('.input__val-2').val("");
      $('.input__val-3').val("");
      $('.popup__review').addClass('active');
      $('.popup__review').click(function () {
        $(this).removeClass('active');
      });
    } else {
      alert('Заполните все поля!');
    }
  });
});

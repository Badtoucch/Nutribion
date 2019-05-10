$(".rev-content").on("afterChange", function(event, slick, currentSlide) {
  $(this)
    .find(".slick-slide.content-plus")
    .not(".slick-active")
    .removeClass("content-plus");
});
$(".rev-box__plus").on("click", function() {
  this.parentElement.parentElement.classList.toggle("content-plus");
});
$(".rev-content").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
	arrows: true,
	dots: true,
	centerMode: true,
	variableWidth: true,
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
				slidesToScroll: 1,
				centerMode: false,
				variableWidth: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
				slidesToScroll: 1,
				centerMode: false,
				variableWidth: false
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: false,
				variableWidth: false
      }
		},
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: false,
				variableWidth: false
      }
    }
  ]
});

$('.btn-review').click(function () {
	var reviewInput1 = $('.input__val-1').val().length, reviewInput2 = $('.input__val-2').val().length,
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

$(function() {
  /* плавный скролл */
  $(document).on('click', 'a[href^="#"]', function(evt) {
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
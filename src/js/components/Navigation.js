var $ = require('jquery'),
	easing = require('jquery-easing');

export default (function Navigation(){

	var $window = $(window),
		mainNav = $('.main-nav'),
		navOffset = mainNav.offset().top,
		$contactBtn = mainNav.find('.Contact'),
		$contactForm = mainNav.find('.contact-form-wrapper'),
		$mobileNavBtn = mainNav.find('#Menu'),
		mobileMainNav = mainNav.find('.mobile_main-nav');

	$window.scroll(function(){
		var scrollTop = $(window).scrollTop();

		if (scrollTop >= navOffset) {
			mainNav.addClass('fixed');
		} else {
			mainNav.removeClass('fixed');
		}
	});

	$mobileNavBtn.on('click', function(){
		$(this).toggleClass('active');
		$('body').toggleClass('mobile-nav-active');
	});

	$('.main-wrapper').on('click touchend', function(){
		$mobileNavBtn.removeClass('active');
		$('body').removeClass('mobile-nav-active');
	});

	$contactBtn.on('click touchend', function(e){
		e.preventDefault();
		$contactForm.toggleClass('show');
		$(this).toggleClass('active');
	});

	if ( $('body').hasClass('Homepage') ) {
		$contactBtn.on('click touchend' ,function(){
			$('html, body').animate({
				scrollTop: $('.homepage_footer').offset().top
			}, 2000, 'easeInOutCubic');
		});
	}
		
}).call(this);
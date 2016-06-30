var $ = require('jquery'),
	slick = require('slick-carousel'),
	easing = require('jquery-easing');

export default (function Slick (){
	// Slick Carousel
	$('.intro_slider').slick({
		dots: false,
		arrows: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 12000
	});

}).call(this);
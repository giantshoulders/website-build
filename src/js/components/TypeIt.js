// Global jQuery Fix
global.jQuery = require('jquery');
var $ = global.jQuery;

var typeIt = require('typeit');

export default (function TypeIt (){

	$('.intro_slider').on('afterChange', function(){
		var $activeSlide = $(this).find('.slick-active'),
			$string = $activeSlide.find('.section_quote'),
			quote = $string.data('quote'),
			text = $string.html(quote);

		$string.fadeIn(1000);

		$string.typeIt({
			string: [text],
			speed: 100,
			startDelay: 1500
		});
	});

	var $activeSlide = $('.intro_slider').find('.slick-active'),
		$string = $activeSlide.find('.section_quote'),
		quote = $string.data('quote'),
		text = $string.html(quote);

	$string.fadeIn(1000);

	$string.typeIt({
		string: [text],
		speed: 100,
		startDelay: 1500
	});

}).call(this);
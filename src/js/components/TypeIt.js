// Global jQuery Fix
global.jQuery = require('jquery');
var $ = global.jQuery;

var typeIt = require('typeit');

export default (function TypeIt (){

	$('.intro_slider').on('afterChange', function(){
		var $activeSlide = $(this).find('.slick-active'),
			$string = $activeSlide.find('.section_quote'),
			quote = $string.text();

		$activeSlide.fadeIn(1000);

		$string.typeIt({
			string: [quote],
			speed: 100,
			startDelay: 1500
		});
	});


	var $activeSlide = $('.slick-active'),
		$string = $activeSlide.find('.section_quote'),
		quote = $string.text();

	$activeSlide.fadeIn(1000);

	$string.typeIt({
		string: [quote],
		speed: 100,
		startDelay: 1500
	});

	// $('.content').each(function(){

	// 	if ( $(this).hasClass('slick-active') ) {
	// 		// var $slideIndex = $(this).find('.slick-active'),
	// 		// 	$string = $slideIndex.find('.section_quote');

	// 		console.log('HI');
	// 	} else {
	// 		console.log("Not Fire");
	// 	}
	// });
	
	// if ( $('.content').hasClass('slick-active') ) {
	// 	console.log('FIRE')
	// 	$string.each(function () {
	// 	var quote = $(this).text();

	// 	console.log(quote)
	// 	$(this).typeIt({
	// 		string: [quote]
	// 	});
	// });
	// }

	

}).call(this);
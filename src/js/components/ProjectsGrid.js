var $ = require('jquery');

export default (function projectsGrid(){
	var $projectList = $('.projects-list-wrapper');

	function gridHover() {
		var $projectGrid = $projectList.find('.tile');

		$projectGrid.on('mouseenter',function(){
			$(this).addClass('hover');
		}).on('mouseleave', function(){
			$(this).removeClass('hover');
		});

		$('.touch .tile').on('touchstart', function(){
			$(this).addClass('hover');
		}).on('touchend', function(){
			$(this).removeClass('hover');
		});
	}

	function gridAdapt() {
		var oneCellWidth = $projectList.find('.one_cell').width();

		$projectList.css({
			'transform': 'translateY(-' + oneCellWidth + 'px)',
			'marginBottom': '-' + oneCellWidth + 'px'
		});
	}

	gridAdapt();
	gridHover();
	
	$(window).on('resize', function(){
		gridAdapt();
	});

}).call(this);
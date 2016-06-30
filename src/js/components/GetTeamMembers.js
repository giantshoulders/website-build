var $ = require('jquery');

export default (function getTeamAPI(){
	// ID of the Google Spreadsheet
	var googleDocURL = "https://spreadsheets.google.com/feeds/list/",
		spreadsheetID = "10EUVa46gljRyJmM_Oemy_yksp1ZNAjOW5qYTR6HRmYc",
		contentSheetID = "od6",
		teamSheetID = "og6zj2b";

	// Make sure it is public or set to Anyone with link can view 
	var contentSheetURL = googleDocURL + spreadsheetID + "/" + contentSheetID + "/public/values?alt=json",
		teamSheetURL = googleDocURL + spreadsheetID + "/" + teamSheetID + "/public/values?alt=json";

	// Get Content Sheet JSON
	// $.getJSON(contentSheetURL, function(data) {
	// 	var entry = data.feed.entry;
	// 		console.log(teamSheetURL);

	// 	$(entry).each(function(){
	// 	// Column names are name, age, etc.
	// 		$('.homepage-content').find('.content-here').append(this.gsx$homepage.$t);

	// 		$('.about-content').find('.content-here').append(this.gsx$aboutpage.$t);

	// 		$('.team-content').find('.content-here').append(this.gsx$teampage.$t);
	// 	});
	// });

	// Get Team Sheet JSON
	$.getJSON(contentSheetURL, function(data) {
		var entry = data.feed.entry,
			count = entry.length;

			// console.log(entry);

		$(entry).each(function(){
		// Column names are name, age, etc.
			$('.team-list').append(
				'<li class="team-member '+this.gsx$involvement.$t+'"><div class="name"><h2 class="member-name">' + this.gsx$name.$t + '</h2></div><div class="specialty-notable"><h3 class="h5 involvement">' + this.gsx$involvement.$t + '</h3><p class="specialty"><strong>Expertise</strong>: '+this.gsx$skillsetspecialty1.$t+', '+this.gsx$skillsetspecialty2.$t+', '+this.gsx$skillsetspecialty3.$t+'</p><p class="notable"><strong>Experience</strong>: '+this.gsx$notableclientorkeyemployment1.$t+', '+this.gsx$notableclientorkeyemployment2.$t+', '+this.gsx$notableclientorkeyemployment3.$t+'</p><ul class="icon-link"><li class="social-icons"><a href="http://'+this.gsx$personalconsultingwebsite.$t+'" target="_blank" class="icon weblink-link"><span class="icon-icon-weblink"></span></a></li><li class="social-icons"><a href="http://'+this.gsx$linkedinlink.$t+'" target="_blank" class="icon linkedin-link"><span class="icon-icon-linkedin"></span></a></li><li class="social-icons"><a href="http://'+this.gsx$twitterlink.$t+'" target="_blank" class="icon twitter-link"><span class="icon-icon-twitter"></span></a></li></ul></div><div class="member-profile-pic" style="background: url(../img/team/'+this.gsx$biopic.$t+'.jpg) center no-repeat;background-size: cover;"></div><div class="quote-wrapper"><div class="quote-content"><blockquote>"'+this.gsx$quote.$t+'" <br><cite>- '+this.gsx$quoteauthor.$t+'</cite></blockquote></div></div></li>'
			);

			if (!--count) {
				var $teamMember = $('.team-member'),
					itemWidth = $teamMember.width(),
					$teamList = $('.team-list'),
					itemWidths = Math.min(Math.max(parseInt(itemWidth), 1), 325);

				$teamMember.css({
					height: itemWidth
				});

				$teamList.css({
					'transform': 'translateY(-' + itemWidth + 'px)',
					'marginBottom': '-' + itemWidth + 'px'
				});
		
				$('.member-name').each(function(){
					var firstWord = $(this).text().split(' ')[0],
						addBreak = firstWord + '<br>',
						newString = $(this).html().replace(firstWord, addBreak);

					$(this).html(newString);
				});

				$teamMember.on('mouseenter',function(){
					$(this).addClass('hover');
					$(this).find('.name').css({
						'transform': 'translateY(' + (itemWidth/2 - 10) + 'px)',
					});
				}).on('mouseleave', function(){
					$(this).removeClass('hover');
					$(this).find('.name').css({
						'transform': 'translateY(0px)',
					});
				});

				$('.touch .team-member').on('touchstart', function(){
					$(this).addClass('hover');
					$(this).find('.name').css({
						'transform': 'translateY(' + (itemWidth/2 - 10) + 'px)',
					});
				}).on('touchend', function(){
					$(this).removeClass('hover');
					$(this).find('.name').css({
						'transform': 'translateY(0px)',
					});
				});
			}
		});
	});

	$(window).on('resize', function(){
		var $teamMember = $('.team-member'),
			itemWidth = $teamMember.width(),
			$teamList = $('#team-list'),
			itemWidths = Math.min(Math.max(parseInt(itemWidth), 1), 325);

		$teamMember.css({
			height: itemWidth
		});

		$teamList.css({
			'transform': 'translateY(-' + itemWidth + 'px)',
			'marginBottom': '-' + itemWidth + 'px'
		});

		$teamMember.on('mouseenter',function(){
			$(this).addClass('hover');
			$(this).find('.name').css({
				'transform': 'translateY(' + (itemWidth/2 - 10) + 'px)',
			});
		}).on('mouseleave', function(){
			$(this).removeClass('hover');
			$(this).find('.name').css({
				'transform': 'translateY(0px)',
			});
		});

	});

}).call(this);
	
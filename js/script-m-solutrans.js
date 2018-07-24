;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);
	var timer, timer2;

	$doc.ready(function() {
		$('.section-socials .link-socials').on('click', function(event) {
			event.preventDefault();

			$(this).closest('.section-socials').toggleClass('socials-visible');
		});

		$doc.on('touchstart', function(e){
			var $target= $(e.target);

			if (!$target.is('.socials-visible, .socials-visible *, .link-socials, .link-socials *')) {
				$('.socials-visible').removeClass('socials-visible');
			}
		});

		/* Newsletter form
        if ($('.newsletter-form').length) {
            var $form = $('.newsletter-form');

            $form.find('.nf-form-input input').attr('placeholder', 'Votre email');
            $form.find('.nf-main-content').append('<a href="#" class="form-close"/>');

            $('[href*="#newsletter"]').on('click', function(e){
                e.preventDefault();

                $form.addClass('form-shown');
            });

            $doc.on('click', function(e){
                var $target = $(e.target);

                if (($target.is('.form-close, .form-close *') || !$target.is('.nf-main-content, .nf-main-content *, [href*="#newsletter"], [href*="#newsletter"] *')) && $form.hasClass('form-shown')) {
                    e.preventDefault();

                    $form.removeClass('form-shown');
                }
            });

            if (window.location.href.indexOf('#newsletter') >= 0) {
                $form.addClass('form-shown');
            }
        }*/

        menuScroll();

        function menuScroll(){
        	var elWidth = 0;

        	$('.site-banner .quicklinks-navigation li').each( function() {
        		var w = $(this).width();
        		var m = parseInt($(this).css('margin-left'));
        		var p = parseInt($(this).css('padding-left'));

        		elWidth += w+m+p
        	})

        	$('.quicklinks-navigation .ql-list').css('width', elWidth+20)
        }

		$win.on('load', function() {
			if ($('.partner-gallery').length) {
				var $sliderGallery = $('.partner-gallery').clone();
				$('.partner-gallery').detach();
				$sliderGallery.appendTo('.partner .box-dark .inside');
			}
			
			if ( $('.slider-intro').length ) {
				$('.slider-intro').caroufredsel({
					width: '100%',
					responsive: true,
					align: 'center',
					swipe: true,
					auto: {
						play: true,
						timeoutDuration: 5000
					},
					pagination: ".slider-paging"
				});
			};

			if ( $('.section-products').length ) {
				$('.section-products .cols').caroufredsel({
					width: '100%',
					responsive: true,
					align: 'center',
					height: "auto",
					swipe: true,
					pagination: {
						container: $('#paging')
					},
					auto: {
						play: true,
						timeoutDuration: 5000
					}
				});
			};

			if ($('.front .list-articles').length) {
				
				var $sliderIntro = $('.list-articles .slider-content').clone();
				$('.list-articles .slider-content').detach();
				$sliderIntro.appendTo('.list-articles .inside');

				var pagingSize = $sliderIntro.find('.slider-item').length;
				var $sliderPaging = '<ol class="slider-paging"></ol>';

				$($sliderPaging).appendTo( $('#zone1 .list-articles .la-swiper') );
				$('<div class="slider-paging-hidden"></div>').appendTo( $('#zone1 .list-articles .la-swiper') );

				for( var i = 0; i < pagingSize; i++ ) {
					var index = i + 1;

					if( index < 10 ) {
						index = '0' + index;
					}

					$('<li><a href="#">' + index + '</a></li>').appendTo( $('#zone1 .la-swiper ol.slider-paging') );
				}

				
				$('.front .list-articles .slider-content').caroufredsel({
					width: '100%',
					responsive: true,
					align: 'center',
					swipe: true,
					auto: {
						play: true,
						timeoutDuration: 5000
					},
					scroll: {
						onAfter: function(data) {
							$('#zone1 .list-articles .la-swiper .slider-paging li')
																				.eq($('.list-articles .slider-content').triggerHandler('currentPosition'))
																				.addClass('active')
																				.siblings()
																				.removeClass('active');

							$('#zone1 .list-articles .slider-content .gla-item:first-child').addClass('visible');
						},
						fx: 'fade',
						duration: 1500,
						onBefore: function() {
							$('#zone1 .list-articles .slider-content .gla-item:first-child').removeClass('visible');
						}
					},
					onCreate: function() {
						var $slider = $(this);

						$('#zone1 .list-articles .slider-content .gla-item:first-child').addClass('visible');
						$('#zone1 .list-articles .la-swiper .slider-paging li').eq(0).addClass('active');
						$('#zone1 .list-articles .la-swiper .slider-paging a').on('click', function(event) {
							event.preventDefault();

							var index = $(this).parent().index();
							$(this).parent().addClass('active')
								.siblings().removeClass('active');

							$slider.trigger('slideTo', index);
							
						});
					}
				});

			}


			// $('.block-sectors-links .block-body ul').caroufredsel({
			// 	width: '100%',
			// 	align: 'center',
			// 	responsive: true,
			// 	swipe: true,
			// 	scroll  : 1,
			// 	auto: {
			// 		play: false,
			// 		timeoutDuration: 7000
			// 	},
			// 	items: {
			// 		visible: 1
			// 	}
			// });

			if ($('.slider-loader').length) {
				$('body').addClass('loader-visible');
				setTimeout(function() {
					$('.slider-loader').addClass('not-visible');

					$('.loader-visible').removeClass('loader-visible');
				},700);
			}
		});
	});

})(jQuery, window, document);

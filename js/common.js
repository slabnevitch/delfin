jQuery(function() {
	
	jQuery(document).ready(function() {

		svg4everybody();
		
		// lazy load
			$('[data-src]').Lazy();
		
		// end lazy load

		// section HEADER
			// to fixed menu
			var headerHeight;
			$(window).scroll(function() {
				headerHeight = $('.header').height();
				if($(this).scrollTop() > headerHeight){
					$('.header').addClass('header--fixed');
					
				}else{
					$('.header').removeClass('header--fixed');
				}
			});
		// end to fixed menu

		// mob-menu toggle
			$(".toggle-mnu").click(function() {
				$(this).toggleClass("on");
				$(".header-bottom .header-menu").stop(true, true).fadeToggle(100);
				var $html = $('html'); 
				$html.hasClass('freezed') ? $html.removeClass('freezed') : $html.addClass('freezed');
				
				return false;
			});

		// end mob-menu toggle

		// dropdown
			$('.header-loc select').dropdown({
				toggleText: $('.header-loc select option').first().text(), //текст в главном поле, по умолчанию
				autoToggle: true,
				autoToggleHTML: true,
				margin: 0,
				autoResize: 0,
				titleText: '',
				collision: false
			});
		// end dropdown

		// end section HEADER


		// section DELF-FILTER
			$('.delf-filter__item select').each(function(ind, elem) {
					$(elem).dropdown({
					toggleText: '', //текст в главном поле, по умолчанию
					autoToggle: true,
					autoToggleHTML: true,
					margin: 0,
					autoResize: 0,
					titleText: $(elem).prev().text(),
					collision: false
				});
			})
		// end section DELF-FILTER

		
		// sect bests

			$('.cards-slider').slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				dots: true,
				lazyLoad: 'ondemand',
				infinite: true,
				appendDots: $('.cards-slider-wrapper .slider-handlers__dots'),
				prevArrow: $('.cards-slider-wrapper .slider-handlers__prev .icon'),
				nextArrow: $('.cards-slider-wrapper .slider-handlers__next .icon'),
				responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1
					}
				}
				]
			});
		// end sect bests

		// section MANAGERS
			$('.managers-slider').slick({
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				lazyLoad: 'ondemand',
				prevArrow: $('.managers-bottom .slider-handlers__prev'),
				nextArrow: $('.managers-bottom .slider-handlers__next'),
				responsive: [
				{
					breakpoint: 1100,
					settings: {
						slidesToShow: 3
					}
				}
				]

			});
		// end section MANAGERS


		// section KVIZ
			var kvizSlider = $('.kviz-form').slick({
				arrows: false,
				accessibility: false,
				draggable: false,
				infinite: false,
				swipe: false,
				touchMove: false,
				dots: false,
				fade: true
		    });

			var kvizSlidesCount = $('.kviz-slide').length - 1;

			$('.kviz-forward').click(function(e) {
				var $th = $(this),
				$currentSlide = $th.closest('.kviz-slide'),
				thIndex = $('.kviz-slide').index($currentSlide);
				$currentRadios = $currentSlide.find('input[type="radio"], input[type="checkbox"]');

				if(thIndex !== kvizSlidesCount){

					if(!$currentRadios.length || $currentSlide.find('input[type="radio"]:checked, input[type="checkbox"]:checked').length){

						kvizSlider.slick('slickNext');
						e.preventDefault();
					}
				}

			});

		// end section KVIZ


		// end section CARD-TOP
			$('.card-display').slick({
				lazyLoad: 'ondemand',
				infinite: true,
				arrows: false,
				fade: true,
				asNavFor: '.card-display-nav'
			});

			$('.card-display-nav').slick({
				lazyLoad: 'ondemand',
				infinite: true,
				asNavFor: '.card-display',
				slidesToShow: 3,
				slidesToScroll: 1,
				focusOnSelect: true,
				centerMode: true,
				centerPadding: 0
			});
		// end section CARD-TOP


		// section CARD-
			
			var $tabs = $('.tabs__link');

			$tabs.on('click', function(e) {
				e.preventDefault();
				var $th = $(this),
				$href = $th.attr('href'),
				$parent = $th.parent(),
				$currentContentTab = $('.tabs__content').find($href);

				$parent.addClass('tabs__item--active')
				.siblings()
				.removeClass('tabs__item--active');

				$currentContentTab
					.addClass('active')
					.siblings()
					.removeClass('active');

				$currentContentTab.find('.cards-chars__toggle')
					.addClass('active')
					.siblings()
					.find('.cards-chars__toggle')
					.removeClass('active');
			});


			$('.cards-chars__toggle').click(function() {
				var $th = $(this),
						$thParent = $th.closest('.tabs__item'),
						$tabsTop = $('.tabs__content').offset().top,
						heightHeader = $('.header').outerHeight(),
						$thMirrorHref = '#' + $thParent.attr('id'),
						$thMirror = $('.card-chars__tabs .tabs__list').find('[href=' + $thMirrorHref +']');
				

				$('html, body').animate({scrollTop: $tabsTop - heightHeader - 30}, 100);
				
				$th.toggleClass('active');
				$thParent
					.toggleClass('active')
					.siblings()
					.removeClass('active')
					.find('.cards-chars__toggle')
					.removeClass('active');

				$thMirror
					.closest('.card-chars__tabs-item')
					.addClass('tabs__item--active')
					.siblings()
					.removeClass('tabs__item--active');

				return false;
			});
		// end section CARD-CHARS
	});
	
});

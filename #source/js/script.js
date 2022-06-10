$(function () {

	// BURGER TOGGLE 
	$('.menu__icon').click(function (event) {
		event.preventDefault();
		$(this).toggleClass('active');
		$('.menu__body').toggleClass('active');
		$('body').toggleClass('lock');
		$('.top').toggleClass('hidden');
	});


	// FIXED HEADER
	var header = $('#header');
	var headerH = header.innerHeight();
	var scrollPos = $(window).scrollTop();

	checkScroll(scrollPos, headerH);

	$(window).on('scroll resize', function () {
		var headerH = header.innerHeight();
		scrollPos = $(this).scrollTop();
		checkScroll(scrollPos, headerH);
	});

	function checkScroll(scrollPos, headerH) {
		if (scrollPos > headerH + 120) { header.addClass('fixed'); } else if (scrollPos < headerH - 45) {
			header.removeClass('fixed');
		}
	};


	// SWITCH BUTTON
	$('.switch__top-2').click(function () {
		$(this).addClass('active');
		$('.switch__top-1').removeClass('active');
	});
	$('.switch__top-1').click(function () {
		$(this).addClass('active');
		$('.switch__top-2').removeClass('active');
	});


	// IBG
	function ibg() {
		$.each($('.ibg'), function (index, val) {
			if ($(this).find('img').length > 0) {
				$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
			}
		});
	}
	ibg();


	// HOVER ITEM
	function hoverItem() {
		$('.items__block_item').hover(function(){
			$(this).toggleClass('item__hover');
		}); 
	}
	hoverItem();

	
	// SLIDER
	$(document).ready(function () {
		if ($('.starslider__body').length > 0) {
			$('.starslider__body').slick({
				// autoplay: true,
				// autoplaySpeed: 3000,
				infinite: false,
				dots: false,
				arrows: true,
				accessibility: false,
				slidesToShow: 1,
				adaptiveHeight: true,
				nextArrow: '<button type="button" class="slick-next"></button>',
				prevArrow: '<button type="button" class="slick-prev"></button>',

			});
		}
	});	
	
	// SMOOTH SCROLL
	$('[data-scroll]').on('click', function (event) {
		event.preventDefault();

		var elementId = $(this).data('scroll');
		var elementOffset = $(elementId).offset().top;

		$('.menu__list a').removeClass('link-active');
		$(this).addClass('link-active');
	
		$('.menu__body').removeClass('active');
		$('.menu__icon').removeClass('active');
		$('body').removeClass('lock');
		
		$('html, body').animate({ scrollTop: elementOffset - 55 }, 1500);
	});
	





})
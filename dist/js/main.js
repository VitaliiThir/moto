$(function(){
	var windowWidth = $(window).width();
	var topFixedBlock = $('<div class="top-fixed-block"></div>');
	$('body').append($(topFixedBlock));
	var topNavList = $('.navigation-list').clone();
	var logo = $('.header-top-lenta__item:eq(0)').clone();
	var icons = $('.header-top-lenta__item:eq(1)').clone();
	$(logo).addClass('nav-fixed-logo');
	$(icons).addClass('nav-fixed-icons');
	$(topNavList).addClass('top-nav-list');
	$(topFixedBlock).append($(logo), $(topNavList), $(icons));
	$('.top-fixed-block .navigation-list__link:first-child').children().addClass('navigation-list__link-a--active');

	navFixed = function(){
		if(windowWidth >= 992){
			$(window).on('scroll', function(){
				if ($(this).scrollTop() > 600) {
					$(topFixedBlock).addClass('top-fixed--active');                  
				} else {
					$(topFixedBlock).removeClass('top-fixed--active');
				};
			}); 
		};
	};

	$(window).on('resize', function(){
		var windowWidth = $(window).width();
		var windowHeight = $(window).scrollTop();
		if(windowWidth > 992 && windowHeight > 600){
			if($(".top-fixed-block:not('.top-fixed--active')")) {
				$(topFixedBlock).addClass('top-fixed--active');
			};           
		} else if(windowHeight < 600){
			if($(topFixedBlock).hasClass('top-fixed--active')) {
				$(topFixedBlock).removeClass('top-fixed--active');
			};
		} else {
			if($(topFixedBlock).hasClass('top-fixed--active')) {
				$(topFixedBlock).removeClass('top-fixed--active');
			};
		}                   
	});
	navFixed();
   // Меню закрывается при клике извне
   if(windowWidth < 992) {
   	$(document).click(function(e){
   		var nav = $(".navigation");
   		if(!nav.is(e.target) && nav.has(e.target).length === 0) {
   			$(".navigation").removeClass("navigation--active");
   			$(".c-hamburger").removeClass("is-active");
   		}
   	});
   };
   $('.c-hamburger').on('click', function(){
   	$(this).toggleClass('is-active');
   	$('.navigation').toggleClass('navigation--active');
   });

   // SCROLL BTN
   var btnScrollTop = $('.scroll-top');
   function scrollBtn(){
   	var bodyScroll = $('html, body').scrollTop();
   	if(bodyScroll > 300) {
   		$(btnScrollTop).addClass('scroll-top--visible');
   	} else {
   		$(btnScrollTop).removeClass('scroll-top--visible');
   	};
   };
   scrollBtn();
   // active Menu
   activeMenuLink = function() {
   	$('.top-fixed--active .navigation-list__link-a').each(function(){
   		var selector = $(this).attr('href');
   		var section = $(selector);
   		var windowTop = $(window).scrollTop();
   		var sectionTop = section.offset().top;
   		if(windowTop>sectionTop-150){
   			$('.top-fixed--active .navigation-list__link-a').removeClass('navigation-list__link-a--active').filter(this).addClass('navigation-list__link-a--active');
   		};
   	});
   };
   $(window).on('scroll', function(){
   	activeMenuLink();
   	scrollBtn();
   });
   $('.scroll-top').on('click', function(){
   	$('html, body').animate({
   		scrollTop: 0
   	}, 600);
   });
   // PAGE SCROLL
   $('.navigation-list__link-a').on('click', function(){
   	var selector = $(this).attr('href');
   	var h = $(selector);
   	$('html, body').animate({
   		scrollTop: h.offset().top - 70
   	}, 900);
   });
   // active Menu
   activeMenuLink = function() {
   	$('.top-fixed--active .navigation-list__link-a').each(function(){
   		var selector = $(this).attr('href');
   		var section = $(selector);
   		var windowTop = $(window).scrollTop();
   		var sectionTop = section.offset().top;
   		if(windowTop>sectionTop-150){
   			$('.top-fixed--active .navigation-list__link-a').removeClass('navigation-list__link-a--active').filter(this).addClass('navigation-list__link-a--active');
   		};
   	});
   };
// slider
$(".dummy-top-block-slider").owlCarousel({
	nav: true,
	navSpeed: 1200,
	autoplaySpeed: 1200,
	autoplayTimeout: 5000,
	items: 1,
	dots: false,
	loop: true,
	autoplay: true,
	pagination: false,
	navText: ["<img src='img/sliders/slider-arrow-left.png'>", "<img src='img/sliders/slider-arrow-right.png'>"],
	theme: "theme-1"
});
$("#reviews-slider").owlCarousel({
	nav: true,
	navSpeed: 1200,
	margin: 40,
	slidespeed: 1200,
	dots: false,
	loop: true,
	responsive:{
		0:{
			items:1
		},
		1200:{
			items:2
		}
	},
	autoplay: true,
	autoplaySpeed: 1200,
	autoplayTimeout: 5000,
	pagination: false,
	navText: ["<img src='img/sliders/slider-arrow-left.png'>", "<img src='img/sliders/slider-arrow-right.png'>"],
	theme: "theme-2"
});
$(".block-examples-slider").owlCarousel({
	nav: true,
	navSpeed: 1200,
	dots: false,
	responsive:{
		0:{
			items:1
		},
		768:{
			items:2
		},
		992:{
			items:3
		},
		1200:{
			items:4
		}
	},
	loop: true,
	singleItem: false,
	autoplay: true,
	autoplaySpeed: 1200,
	autoplayTimeout: 5000,
	pagination: false,
	navText: ["<img src='img/sliders/slider-arrow-left.png'>", "<img src='img/sliders/slider-arrow-right.png'>"],
	theme: "theme-4"
});

$(".fancybox").fancybox({
	helpers: {
		overlay: {
			locked: false
		}
	}
});
    // WOW JS
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 100, // default
        mobile: true, // default
        live: true // default
      });
    wow.init();
  });
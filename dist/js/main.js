$(function(){
	var topFixedBlock = $('<div class="top-fixed-block"></div>');
	$('body').append($(topFixedBlock));
	var topNavList = $('.navigation-list').clone();
	var logo = $('.header-top-lenta__item:eq(0)').clone();
	var icons = $('.header-top-lenta__item:eq(1)').clone();
    var tableFlag = false;

    $(logo).addClass('nav-fixed-logo');
    $(icons).addClass('nav-fixed-icons');
    $(topNavList).addClass('top-nav-list');
    $(topFixedBlock).append($(logo), $(topNavList), $(icons));
    $('.top-fixed-block .navigation-list__link:first-child').children().addClass('navigation-list__link-a--active');
    $('header').ready(function(){
        setTimeout(function(){
            $('.navigation-list').fadeIn(1500);
        }, 100);
    })

    // active Menu
    activeMenuLink = function() {
        $('.top-fixed--active .navigation-list__link-a').each(function(){
            var selector = $(this).attr('href');
            var windowTop = $(window).scrollTop();
            var sectionTop = $(selector).offset().top;
            if(windowTop>sectionTop-150){
                $('.top-fixed--active .navigation-list__link-a').removeClass('navigation-list__link-a--active').filter(this).addClass('navigation-list__link-a--active');
            };
        });
    };
    activeMenuLink();

    navFixedActive = function(){
        var windowWidth = $(this).width();
        if(windowWidth >= 992){
            if(!tableFlag) {
                tableFlag = true;
                $(window).on('scroll', function(){
                    if ($(this).scrollTop() > 600) {
                       $(topFixedBlock).addClass('top-fixed--active');                  
                   } else {
                       $(topFixedBlock).removeClass('top-fixed--active');
                   };
               });
            }          
        };
    };
    navFixedNotActive = function(){
        var windowWidth = $(this).width();
        if(windowWidth < 992){ 
            if(tableFlag) {
                tableFlag = false;
                $(topFixedBlock).removeClass('top-fixed--active')
                $(window).on('scroll', function(){
                    if ($(this).scrollTop() > 600) {
                        $(topFixedBlock).removeClass('top-fixed--active');                  
                    } else {
                       $(topFixedBlock).removeClass('top-fixed--active');
                   };
               });
            }                  
        };
    };
    $(window).on('resize', function(){
        var windowWidth = $(this).width();
        if(windowWidth > 992){
            navFixedActive();                      
        } else if(windowWidth < 992) {
            navFixedNotActive();      
        };                  
    });
    navFixedActive();
    navFixedNotActive();
   // Меню закрывается при клике извне
   var windowWidth = $(this).width();
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
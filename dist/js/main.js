$(function(){
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
    $('.c-hamburger').click(function(){
        $(this).toggleClass('is-active');
        $('.navigation').toggleClass('navigation--active');
    });
});
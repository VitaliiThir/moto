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

   $('.c-hamburger').on('click', function(){
    $(this).toggleClass('is-active');
    $('.navigation').toggleClass('navigation--active');
});
   // Меню закрывается при клике извне
   var windowWidth = $(window).width();
   if(windowWidth < 992) {
    $(document).click(function(e){
        var nav = $(".navigation");
        if(!nav.is(e.target) && nav.has(e.target).length === 0) {
            $(".navigation").removeClass("navigation--active");
            $(".c-hamburger").removeClass("is-active");
        }
    });
};


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
    $('.navigation a').on('click', function(){
        var selector = $(this).attr('href');
        var h = $(selector);
        $('html, body').animate({
            scrollTop: h.offset().top - 20
        }, 900);
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
    $(document).on('scroll', scrollBtn);
    $('.scroll-top').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });
});
$(function(){
	$(".dummy-top-block-slider").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 1200,
        singleItem: true,
        autoPlay: true,
        pagination: false,
        navigationText: ["<img src='img/sliders/slider-arrow-left.png'>", "<img src='img/sliders/slider-arrow-right.png'>"],
        theme: "theme-1"
      });
	$("#reviews-slider01").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 1200,
        singleItem: true,
        autoPlay: true,
        pagination: false,
        navigationText: ["<img src='img/sliders/slider-arrow-left.png'>", ""],
        theme: "theme-2"
      });
	$("#reviews-slider02").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 1200,
        singleItem: true,
        autoPlay: true,
        pagination: false,
        navigationText: ["", "<img src='img/sliders/slider-arrow-right.png'>"],
        theme: "theme-3"
      });
	$(".block-examples-slider").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 1200,
        items: 4,
        singleItem: false,
        autoPlay: true,
        pagination: false,
        navigationText: ["<img src='img/sliders/slider-arrow-left.png'>", "<img src='img/sliders/slider-arrow-right.png'>"],
        theme: "theme-4"
      });
});
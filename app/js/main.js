$(function() {

	// Mask form
	$('input[name="Lead[phone]"]').mask('8 (999) 999 - 99 - 99');


	// WOW 
	var wow = new WOW(
		{
		  boxClass:     'wow',
		  animateClass: 'animated',
		  offset:       120,
		  mobile:       false,
		  live:         true,
		  callback:     function(box) {
	
		  },
		  scrollContainer: null 
		}
	);
	wow.init();
	
	// Animate.css
	$('.top__title_main, .top__subtitle').addClass('animated fadeInRight');
	$('.top__subtitle_last').addClass('animated zoomIn');
	$('.top__item').addClass('animated fadeInRight');
	$('.top__discount, .navigation__discount').addClass('animated zoomIn');

	// Forms steps

	var steps = $(".form").children(".tab");
	var current_step = 0;
	var slide_count = steps.length-1;

	$(".navigation__slide_summ").text(slide_count);

	$(".navigation__next").click(function(){ 

		if (current_step == steps.length-2) {
			$(this).parent().hide();
			$(".step").hide();
			$(".last-step").show();
		}

		if (current_step == 0) {
			$(".discounts__percent").text(10);
		} else if (current_step == 1) {
			$(".discounts__percent").text(20);
		} else if (current_step == 2) {
			$(".discounts__percent").text(30);
		} else if (current_step == 3) {
			$(".discounts__percent").text(40);
		} else 
			$(".discounts__percent").text(55);

		current_step++;
		changeStep(current_step);
		$(".navigation__slide_current").text(current_step + 1);
		
	});

	function changeStep(i) {
		$(steps).hide();
		$(steps[i]).show();
	}

});

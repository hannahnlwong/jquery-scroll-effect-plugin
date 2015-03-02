//PANEL 1 JQUERY CODE
$.fn.scrollEffects = $(function() {
	var scrolled = false;
	var scrolled1 = false;
	var screenPosition = 0;
	var checkPage = 1;


	$(window).scroll(function() {
		var pixeltracker = $(window).scrollTop();
		if (pixeltracker > 10 && !scrolled) {
			scrolled = true;
			$('body, html').animate({
				'scrollTop': $('#panel2').offset().top
			}, 1000)
		} else if(pixeltracker <= 10) {
			scrolled = false;
		}
		this.scrollLeft=0;
		});


//PANEL 2 JQUERY CODE

	function scrolling(direction) {
		var windowWidth = $(window).width();
		if (direction == "left"){
			screenPosition -= windowWidth;
			$(".panelWrapper").animate({right: screenPosition} , 2000)
			checkPage -= 1;
		} else {
			screenPosition += windowWidth;
			$(".panelWrapper").animate({right: screenPosition} , 2000)
			checkPage += 1;
		}
		if (checkPage == 4) {
			$('.scroll-effect-button.next').hide();
		} else if (checkPage == 1) {
			$('.scroll-effect-button.prev').hide();
		} else {
			$('.scroll-effect-button.next').show();
			$('.scroll-effect-button.prev').show();
		}
		console.log(checkPage);
	};
	
	$('.scroll-effect-button.next').on('click', function() {
		scrolling("right");
	});

	$('.scroll-effect-button.prev').on('click', function() {
		scrolling ("left");
	});

//PANEL 3 JQUERY CODE

	$(window).scroll(function(){
		var scrolltracker = $(window).scrollTop();
		if(scrolltracker >= 1500 && !scrolled1) {
			scrolled1 = true;
			$('.images2').addClass('animated bounceIn')
		} else if (scrolltracker >= 1000){
			$('.images1').addClass('animated bounceIn');
	}});
});


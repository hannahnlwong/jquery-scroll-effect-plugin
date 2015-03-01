// panel 1
	// 1. set content to be 'intro' and what is the plug in?
	// 2. grab the 'window' or viewport using jquery
	// 3. find out how much we scrolled from the top of our content
	// 4. if it's at 100px, create smooth scroll effects to panel 2


//PANEL 1 JQUERY CODE
$.fn.scrollEffects = $(function() {
	var scrolled = false;
	var screenPosition = 0;
	var checkPage = 1;


	$(window).scroll(function() {
		var pixeltracker = $(window).scrollTop();
		// console.log(pixeltracker);
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

	// var windowSize = $(window).width();
	// var viewportHeight = $(window).height();

	// $(window).resize(function() {
	// 	var screenSize = $(window).innerWidth();
	// 	var windowSize = $(window).width();
	// 	console.log("the screen width is " + windowSize);
	// });

	// USE THIS CODE AFTER - REFACTORED
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
		if (checkPage == 3) {
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
		// var windowWidth = $(window).width();
		// scrolling ("right");
		// screenPosition += windowWidth;
		// console.log("this is the new screen width " + screenPosition);
		// $(".panelContainer1").offset({ top: 700, left: 300 });
		// $(".panelWrapper").animate({right: screenPosition} , 2000)
	});

	$('.scroll-effect-button.prev').on('click', function() {
		scrolling ("left");
	});

	// $(window).on('resize', function() {
	// 	//update size of panels and container based
	// 	//On window width.
	// });


// $(function() {
//         $('.right').on('click', function(e) {
//             e.preventDefault();
//             $(this).parent().next().css('display', 'block');
//             $(this).parent().hide();
            
//         });

//         $('.left').on('click', function(e) {
//             e.preventDefault();
//             var thingy = $(this).parent().prev();
//             $(this).parent().hide();
//             thingy.show();
//         });
//     });


//PANEL 3 JQUERY CODE

	$(window).scroll(function(){
		var scrolltracker = $(window).scrollTop();
		// console.log(scrolltracker)
		if(scrolltracker >= 1500) {
			$('.images2').addClass('animated bounceIn')
		} else if (scrolltracker >= 1000){
			$('.images1').addClass('animated bounceIn');
		}
	});
});
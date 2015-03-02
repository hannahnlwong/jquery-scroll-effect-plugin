Scroll Effects jQuery Plugin
Overview

Here is a plugin with various scroll effects.

How to use it

Link the "jquery.scrollEffect.js" file to your HTML file.
The "style.css" file contains the styles for this current page however changes may be required to customize the effects to fit your needs.
See specific code on the following slides to see how to customize the styles to your needs.

Smooth Scroll Effect

```
$(window).scroll(function() {
	var pixeltracker = $(window).scrollTop();
	if (pixeltracker > 10 && !scrolled) {
		scrolled = true;
	$('body, html').animate({
		'scrollTop': $('#panel2').offset().top
		}, 1000)
	} else if (pixeltracker <= 10) {
		scrolled = false;}
	this.scrollLeft=0;
});
```

The example above specifies that if the user scrolls to 10 pixels in the window, the smooth scroll effect will trigger. To customize, replace the number in red above in the code with the pixel number you would like.

Replace the code in yellow above with the id section that you would like the smooth scroll to scroll to when triggered. In this example, once smooth scroll is triggered, it will scroll to the section that has the id of panel2.

Side Scroll Slides Effect

```
function scrolling(direction) {
    var windowWidth = $(window).width();
    if (direction == "left"){
    	screenPosition -= windowWidth;
    $(".panelWrapper").animate({right: screenPosition}
    , 2000)
    	checkPage -= 1;} else {
    screenPosition += windowWidth;
    $(".panelWrapper").animate({right: screenPosition}
    , 2000)
    	checkPage += 1;}
	if (checkPage == 4) {
		$('.scroll-effect-button.next').hide();
	} else if (checkPage == 1) {
    		$('.scroll-effect-button.prev').hide();
	} else {
		$('.scroll-effect-button.next').show();
    		$('.scroll-effect-button.prev').show();}};
$('.scroll-effect-button.next').on('click', function() {
	scrolling("right");});
$('.scroll-effect-button.prev').on('click', function() {
	scrolling ("left");});
```

The code above will allow you to loop your slides and navigate with the arrows on each slide. The 1 in the code above tells the browser to start counting the pages at 1 while the 4 tells the browser that there is a max of 4 slides. To have more pages, this can be done by adjusting those numbers.

If you would like to have more than 4 slides, the code within the .css file will need to be adjusted slightly. Please just ensure that each .panelContainer section is divisible by 100%. Lastly, the total width of the section .panel2 will need to be the total number of slides times 100%.

Image Animations Effect

```
$(window).scroll(function(){
    var scrolltracker = $(window).scrollTop();
    if(scrolltracker >= 1500) {
      $('.images2').addClass('animated bounceIn')
    } else if (scrolltracker >= 1000){
      $('.images1').addClass('animated bounceIn');
    }
});
```

The code snippet above allows you to animate the image transitions when the window is scrolled to a specific pixel number. Like the first snippet of code for smooth scroll, the code above will trigger when the window is scrolled to 1000 and 1500 pixels. By changing these numbers in the code, the image animations will trigger when that user has scrolled to that pixel number in the window.

The bounceIn animation is linked to the .css file that contains the class of bounceIn. This transition effect can be changed depending on which css animation effect you would like to include on your page.

The images on this example are also separated into 2 classes, .images1 and .images2. When the window is scrolled to 1000 pixels in the window, the images with the class of .images1 will be triggered with the animation class of bounceIn.

Similar to the images with the class of .images1, the images with the class of .images2 will be triggered when the window is scrolled to 1500 pixels and this will then animate the images to bounceIn.

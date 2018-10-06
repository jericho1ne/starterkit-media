/*!
 * Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});


document.addEventListener("DOMContentLoaded", function(event) {
  var skmVideoLoop = document.getElementById("skm-loop");
  // console.warn("Video playing.");
  skmVideoLoop.play();

  $('.slider').sss({
    // Set to false to stop from automatically cyling.
    slideShow : false,

    // Slide to display first. Uses array notation (0 = first slide)
    // startOn : 0,

    // Slideshow speed in milliseconds
    speed : 5500,

    // Set to false to hide navigation arrows
    showNav : true,

    // Length (in milliseconds) of the fade transition.
    transition : 400,
  });

  // $(window).scroll(function() {
  //   var windowTop = $(this).scrollTop();
  //   var windowBottom = windowTop + $(this).innerHeight();
  //   var browserHeight = $(window).height();
  //   var opacity = 1.1 - (windowTop / browserHeight);

  //   if (opacity > 1) {
  //     opacity = 1;
  //   }

  //   if (windowTop > browserHeight) {
  //     $('.video-wrapper').css('display', 'none');
  //   } else {
  //     $('.video-wrapper').css('display', 'block');
  //   }
  //   $('.video-wrapper').css('opacity', opacity);
  // }).scroll();
});

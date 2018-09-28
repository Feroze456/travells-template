$(document).ready(function() {
 'use strict';

 $('.carousel').carousel({
  interval: 5000 //changes the speed
 })

 /* ---------------------------------------------- /*
		 * Transparent navbar animation
		/* ---------------------------------------------- */
 var navbar = $('.navbar');
 var win = $(window);
 if (navbar.length) {
  win.on('scroll', function() {
   var topScroll = win.scrollTop();
   if (topScroll >= 50) {
    navbar.addClass('navbar-sticky');
   } else {
    navbar.removeClass('navbar-sticky');
   }
  }).scroll();
 }

 /*==========================================
 Preloader
 ===========================================*/
 if ($('.preloader').length) {
  var $loader = $('.preloader');
  $(window).load(function() {
   $('.animation').delay(1000).fadeOut(300, function() {
    $loader.fadeOut(600);
   });
  });
 }

 /*==========================================
  	owl carousel
  ===========================================*/
 if ($("#testimonial-carousel").length) {
  $('#testimonial-carousel').owlCarousel({
   loop: true,
   margin: 0,
   items: 1,
   singleItem: true,
   animateOut: 'fadeOutLeft',
   animateIn: 'fadeInDown',
   nav: false
  });
 }


 /*==========================================
     I S O T O P E
     ===========================================*/
 if ($(".portfolio-items").length) {
  var $container = $('.portfolio-items').isotope({
   itemSelector: '.portfolio-item',
   masonry: {
    columnWidth: '.portfolio-item'
   }
  });
  // filter items when filter link is clicked
  $('.portfolio-filter a').on('click', function() {
   var selector = $(this).attr('data-filter');
   $container.isotope({
    filter: selector
   });
   return false;
  });

  $('.portfolio-filter a').on('click', function() {
   $('.portfolio-filter').find('.current').removeClass('current');
   $(this).parent().addClass('current');
  });
 }
 /*==========================================
  Magnific popup
 ===========================================*/
 if ($(".mfp-image").length) {
  $('.mfp-image').magnificPopup({
   type: 'image',
   removalDelay: 300
  });
 }
 /*==========================================
  counter
 ===========================================*/
 if ($(".counter").length) {
  $('.counter').counterUp({
   delay: 10,
   time: 1000
  });
 }
 /*==========================================
  contact form
 ===========================================*/
 $("#contactform").validate({
  submitHandler: function(form) {
   $.ajax({
    type: "POST",
    url: 'email.php',
    data: $('#contactform').serialize(),
    success: function(msg) {
     if (msg == 'success') {
      $('.alert-success-contact').show('fast');
      $("#contactform")[0].reset();
     } else {
      $('.alert-danger-contact').show('fast');
     }
    }
   });
  }
 });

 $("#bookingform").validate({
  submitHandler: function(form) {
   $.ajax({
    type: "POST",
    url: 'booking-email.php',
    data: $('#bookingform').serialize(),
    success: function(msg) {
     if (msg == 'success') {
      $('.alert-success-booking').show('fast');
      $("#bookingform")[0].reset();
     } else {
      $('.alert-danger-booking').show('fast');
     }
    }
   });
  }
 });

 // navigation Section
 $('.navbar-collapse a').on('click', function() {
  $(".navbar-collapse").collapse('hide');
 });

 // smoothscroll JS
 $('.page-scroll').on('click', function(event) {
  var $anchor = $(this);
  $('html, body').stop().animate({
   scrollTop: $($anchor.attr('href')).offset().top - 57
  }, 1000);
  event.preventDefault();
 });

 //back to top start
    var $top = $('.goto-top');
    var $html_body = $("html,body");
    var $window = $(window);
    $top.on('click', function () {
        $html_body.animate({
            scrollTop: 0
        }, 600)
    });
    $window.on('scroll', function () {
        var $offset = $(this).scrollTop();
        if ($offset > 200) {

            $top.fadeIn(1000);
        } else {
            $top.fadeOut(1000);
        }
 });
	
 // for video-version
    $(".player").mb_YTPlayer();
	
}); // END function
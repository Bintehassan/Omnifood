$(document).ready(function () {
  // For sticky navigation
  $('.js--section-features').waypoint(
    function (direction) {
      if (direction == 'down') {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    }, {
      offset: '60px;'
    }
  );

  // Scroll on buttons
  $('.js--scroll-to-plan').click(function () {
    $('html, body').animate({
        scrollTop: $('.js--section-plans').offset().top
      },
      1000
    );
  });

  $('.js--scroll-to-start').click(function () {
    $('html, body').animate({
        scrollTop: $('.js--section-features').offset().top
      },
      1000
    );
  });

  // Add smooth scrolling to all navigation links
  //Source: https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section2
  $('a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
          scrollTop: $(hash).offset().top
        },
        1000,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  //Animations on scrolling and other effects
  $('.js--wp-1').waypoint(
    function (direction) {
      $('.js--wp-1').addClass('animated fadeIn');
    }, {
      offset: '50%'
    }
  );

  $('.js--wp-2').waypoint(
    function (direction) {
      $('.js--wp-2').addClass('animated fadeInUp');
    }, {
      offset: '50%'
    }
  );

  $('.js--wp-3').waypoint(
    function (direction) {
      $('.js--wp-3').addClass('animated fadeIn');
    }, {
      offset: '50%'
    }
  );

  $('.js--wp-4').waypoint(
    function (direction) {
      $('.js--wp-4').addClass('animated pulse');
    }, {
      offset: '50%'
    }
  );

  // Hamburger menu
  $('.js--mobile-nav-icon').click(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--mobile-nav-icon ion-icon');
    nav.slideToggle(200)


    if (icon.hasClass('js--hamburger-nav-icon')) {
      icon.addClass('ion ion-md-close')
      icon.removeClass('js--hamburger-nav-icon')
    } else {
      icon.addClass('js--hamburger-nav-icon')
      icon.removeClass('ion ion-md-close')
    }

  });

});
// <ion-icon name="close-circle-outline"></ion-icon>
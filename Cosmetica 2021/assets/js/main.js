(function () {
  var navController = function() {
    var navLink = $('.nav-scroll'),
        elem = "";
    navLink.click(function(){
      elem = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(elem).offset().top
      }, 500);
    });
  }

  var carouselAfterBeforeController = function () {
    if ($('.after-before-carousel').length > 0) {
      $('.after-before-carousel').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        navClass: ["arrow arrow-prev", "arrow arrow-next"],
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          992: {
            items: 3
          }
        }
      });
    }
  }

  var carouselController = function () {
    if ($('.owl-videos').length > 0) {
      $('.owl-videos').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 50,
        nav: true,
        dots: false,
        navClass: ["arrow arrow-prev", "arrow arrow-next"],
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          992: {
            items: 3
          }
        }
      });
    }
  }


      $('.reviews').owlCarousel({
        autoplay: false,
        loop: true,
        margin: 25,
        nav: true,
        dots: true,
        navClass: ["arrow arrow-prev", "arrow arrow-next"],
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          992: {
            items: 4
          }
        }
      });
    

  var showSafetyController = function() {
    $( ".btn-show-steps" ).click(function() {
      $(".safety-steps-block").toggleClass("noheight");
      $(this).toggleClass("up");
    });
  }

  var init = function () {
    navController();
    carouselAfterBeforeController();
    carouselController();
    showSafetyController();
  }

  init();
})()
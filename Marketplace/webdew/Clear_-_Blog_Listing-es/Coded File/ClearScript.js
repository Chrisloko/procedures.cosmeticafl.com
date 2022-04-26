<!-- Begin partial -->
  
  $( () => {
  
  //On <a href="https://www.jqueryscript.net/tags.php?/Scroll/">Scroll</a> Functionality
  $(window).scroll( () => {
    var windowTop = $(window).scrollTop();
    windowTop > 100 ? $('.header-container-wrapper').addClass('Stickyheader') : $('.header-container-wrapper').removeClass('Stickyheader');
//     windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
  });
  
  //Click Logo To Scroll To Top
  $('#logo').on('click', () => {
    $('html,body').animate({
      scrollTop: 0
    },500);
  });
  
  //Smooth Scrolling Using Navigation Menu
  $('a[href*="#"]').on('click', function(e){
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100
    },500);
    e.preventDefault();
  });
  
  //landing page Menu
    $('#menu-toggle_lan').on('click', () => {
   $('#menu-toggle_lan').toggleClass('closeMenu'); 
    $('ul.landing-manu').toggleClass('showMenu');  
  });  
  
  //Toggle Menu
  $('#menu-toggle').on('click', () => {
    //alert();
   $('#menu-toggle').toggleClass('closeMenu');
    //$('.hs-menu-wrapper > ul').toggleClass('showMenu');
    //
    $('.hs-menu-wrapper > ul').toggleClass('showMenu');
    
    
    //$('.hs-menu-wrapper ul ul > li').on('click', () => {
     // $('.hs-menu-wrapper > ul').removeClass('showMenu');
      //$('#menu-toggle').removeClass('closeMenu');
   // });
  });  
  
 $(".hs-menu-item").click(function(e) {
   $('.hs-item-has-children').removeClass('active1');
   $(this).addClass('active1');
  });
});

$(document).ready(function() {
        $(".hs-menu-depth-1 .fa-search").click(function(e) {
            e.preventDefault(), e.stopPropagation(), $("#search-blog").toggle()
        }), $("#search-blog").click(function(e) {
            e.stopPropagation()
        }), $("body").click(function() {
            $("#search-blog").hide()
        })
    })

/****BLOG SEARCH HIDE***/
$(".close-btn").click(function(){
  $("#search-blog").hide();
});

$(document).ready(function() {
        $(".menu-search-icon .fa-search").click(function(e) {
            e.preventDefault(), e.stopPropagation(), $("#search-blog").toggle()
        }), $("#search-blog").click(function(e) {
            e.stopPropagation()
        }), $("body").click(function() {
            $("#search-blog").hide()
        })
    })
 
$(document).ready(function(){
  $("#pack_btn").click(function(){
    $("body").toggleClass("cl_fix");
  });
});


<!-- End partial -->
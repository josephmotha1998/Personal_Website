$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      // console.log("gsdfsd");
      $nav.toggleClass('scrolled', $(this).scrollTop() > 740);
    });
  });

$(document).ready(function(){
    setTimeout(function(){
        $('body').addClass('loaded');

    },3000);
});


    
        $(function() {
            // Smooth Scrolling
            $('a[href*="#"]:not([href="#"])').click(function() {
              if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                  $('html, body').animate({
                    scrollTop: target.offset().top
                  }, 1000);
                  return false;
                }
              }
            });
          });
// Wrap every letter in a span






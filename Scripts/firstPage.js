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
ScrollReveal({ distance: '60px' },{ reset: false },{ delay: 5000 });
ScrollReveal().reveal('.navbar', { origin: 'bottom' });
ScrollReveal().reveal('.showcase-left', { origin: 'top' });
ScrollReveal().reveal('.showcase-right', { origin: 'right' });
ScrollReveal().reveal('.showcase-btn', { origin: 'bottom' });
ScrollReveal().reveal('#testimonial div', { origin: 'bottom' });
ScrollReveal().reveal('.info-left', { origin: 'left' });
ScrollReveal().reveal('.info-right', { origin: 'right' });

    
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






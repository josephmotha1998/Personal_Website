
const scroll = new SmoothScroll('.navbar a[href*="#"]',{
    speed:800
});

$(document).ready(function(){
    setTimeout(function(){
        $('body').addClass('loaded');

    },3000);
});
// $('.navbar a').on('click', function (e) {
//   if (this.hash !== '') {
//     e.preventDefault();

//     const hash = this.hash;

//     $('html, body')
//       .animate({
//         scrollTop: $(hash).offset().top
//       },800);
//   }
// });




/*** MAIN.JS ***/

$(document).ready(function() {
 
  $(".owl-carousel").owlCarousel({
      
      items: 1,
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      navigation: true,
      navigationText: ''
})
 
 // var textSlie = $('.text-slide');
    
 //    function doHeight(){
 //     h = $('.owl-carousel').height();
     
 //     console.log(h);
     
 //     textSlie.css('height', h);
 //    }
 //    doHeight();
 
 // $(window).on('resize',doHeight);
 
 
});
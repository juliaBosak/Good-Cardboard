
$(document).ready(function () {
 $('.header-content__button, .button_mright').on('click', function(){
    $('.overlay').show();
    $('body')
 });
 $('.popup-close').on('click', function(){
    $('.overlay').hide()
 });
});
  $(document).ready(function(){
    $('.sl').slick({
      autoplaySpeed: 1000,
      speed: 1000, 
      cssEase: 'ease-out',
      arrows: false, 
      fade: true,
      asNavFor: '.sl2'
    });
  });
  $(document).ready(function(){
    $('.sl2').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      focusOnSelect: true,
      asNavFor: '.sl',
      variableWidth: true,
      swipeToSlide: false,
      nextArrow: '<button type="button" class="slick-button-next slick-arrow">Next</button>',
      prevArrow: '<button type="button" class="slick-button-prev slick-arrow">Previous</button>',
      responsive: [
         {
           breakpoint: 757,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
           }
         },
       ]
    });

  });
$(document).ready(function(){
  $('.reviews__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: '<button type="button" class="reviews__slick-next slick-arrow">Next</button>',
  prevArrow: '<button type="button" class="reviews__slick-prev slick-arrow">Previous</button>',
  responsive: [
     {
       breakpoint: 601,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
       }
     },
      {
       breakpoint: 757,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
       }
     },
   ]
});
 });  

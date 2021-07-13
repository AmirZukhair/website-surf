$(function(){

   $('.header__slider').slick({
       infinite: true,
       fade: true,
       prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg">',
       nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg">',
       asNavFor: '.slider-dotshead',
  });

  $('.slider-dotshead').slick({
     slidesToShow: 4,
     slidesToScroll: 4,
     asNavFor: '.header__slider',
    
    

  });

  $('.surf-slider').slick({
     slidesToShow: 4,
     slidesToScroll: 1,
     
     prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg">',
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg">',
      asNavFor: '.slider-map',
      responsive: [
    {
      breakpoint: 1040,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,

        
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
         centerMode:true

        
      }
    },
     {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
         centerMode: false

        
      }
    },

    
    
    
  ]

     

  });

  $('.slider-map').slick({
     slidesToShow: 8,
     slidesToScroll: 1,
     arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 1040,
      settings: {

        slidesToShow: 3,
        
        
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode:true
        
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:true

        
      }
    }
    
    
    
  ]
    


  });

  $('.holder__slider').slick({
     fade: true,
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg">',
       nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg">',
     

  });

   $('.shop__slider').slick({
     fade: true,
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg">',
       nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg">',
     

  });


    $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });


    $('.quantity-button').on('click', function(){
      let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() -1) * $('.summ').data('guests') ;

    $('.summ').html('$'+summ + ' USD');

    });

    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() -1) * $('.summ').data('guests') ;

    $('.summ').html('$'+summ + ' USD');

  
   $('.surfboard-box__circle').on('click', function(){
        $(this).toggleClass('activator');
   });



   $('.menu-btn').on('click', function(){
     $('.menu__list').toggleClass('active');
   });



    new WOW().init();


  

});

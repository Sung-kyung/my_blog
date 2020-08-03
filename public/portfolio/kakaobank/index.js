function MySlider__init() {
    $('.my-slider > .owl-carousel').owlCarousel({
      responsive:{
        0:{
          items:3
        }
      },
      loop:true,
      dots:false,
      nav:true,
      navText: ['<img src="https://sung-kyung.github.io/img1/pf/kakaobank/img-left.png" alt="">', '<img src="https://sung-kyung.github.io/img1/pf/kakaobank/img-right.png" alt="">'],
      center:true,
      stagePadding:30
    });
  }
  
  $(function() {
     MySlider__init(); 
  });
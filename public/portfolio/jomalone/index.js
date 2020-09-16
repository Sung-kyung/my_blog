$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      loop:true,
      spaceBetween: 30,
      navigation: false,
      pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      }
    });
  });
  
  $(document).ready(function() {
    var swiper = new Swiper('.swiper-container-2', {
      slidesPerView: 6,
      loop:true,
      spaceBetween: 30,
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', },
      pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
  });
  
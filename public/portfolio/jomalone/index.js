$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        loop: true,
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

    var $topBar = $('.top-bar');

    var windowHeight = $(window).height();

    $(window).resize(function () {
        windowHeight = $(window).height();
    });

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > windowHeight - 200) {
            $topBar.addClass('dark');
        } else {
            $topBar.removeClass('dark');
        }
    });

    var swiper = new Swiper('.swiper-container-2', {
        slidesPerView: 6,
        loop: true,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
        },
        breakpoints: {
          350: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
            540: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
          }
    });

});

function SideMenu__init() {
    $(".btn-toggle-mobile-side-bar").click(function () {
        var $btn = $(".btn-toggle-mobile-side-bar");
        var $sideMenu = $(".side-menu");
        var $sideMenu2 = $(".side-menu-2");
        var hasClass = $btn.hasClass("active");

        if (hasClass) {
            $btn.removeClass("active");
            $sideMenu.removeClass('active-on');
            $sideMenu.addClass('active-off');
            $sideMenu2.removeClass('active-on');
            $sideMenu2.addClass('active-off');
        } else {
            $btn.addClass("active");
            $sideMenu.addClass('active-on');
            $sideMenu.removeClass('active-off');
            $sideMenu2.addClass('active-on');
            $sideMenu2.removeClass('active-off');
        }
    });
}

function SideMenu2__Toggle() {
    $('.side-menu-2 > ul ul').hide();
    $('.side-menu-2 > ul > li > a').click(function() {
      $(this).next().slideToggle(800);
      $('.side-menu-2 > ul > li > a').not(this).next().slideUp(800);
    });
}




/* 발견되면 활성화시키는 라이브러리 시작 */
function ActiveOnVisible__init() {
    $(window).resize(_.debounce(ActiveOnVisible__initOffset, 500));
    ActiveOnVisible__initOffset();
  
    $(window).scroll(_.debounce(ActiveOnVisible__checkAndActive, 50));
    ActiveOnVisible__checkAndActive();
  }
  
  function ActiveOnVisible__initOffset() {
    $('.active-on-visible:not(.actived)').each(function(index, node) {
      var $node = $(node);
  
      var offsetTop = $node.offset().top;
      $node.attr('data-active-on-visible-offsetTop', offsetTop);
  
      if ( !$node.attr('data-active-on-visible-diff-y') ) {
        $node.attr('data-active-on-visible-diff-y', '0');
      }
      
      if ( !$node.attr('data-active-on-visible-delay') ) {
        $node.attr('data-active-on-visible-delay', '0');
      }
      
      var diffY = $node.attr('data-active-on-visible-diff-y');
      var delay = $node.attr('data-active-on-visible-delay');
      
      if ( diffY.substr(-2, 2) == 'vh' ) {
        diffY = parseInt(diffY);
        
        diffY = diffY * $(window).height() / 100;
      }
      else if ( diffY.substr(-1, 1) == '%' ) {
        diffY = parseInt(diffY);
        
        diffY = diffY * $node.height() / 100;
      }
      
      $node.data('data-active-on-visible-diff-y', diffY);
      $node.data('data-active-on-visible-delay', delay);
    });
  
    ActiveOnVisible__checkAndActive();
  }
  
  function ActiveOnVisible__checkAndActive() { 
    $('.active-on-visible:not(.actived)').each(function(index, node) {
      var $node = $(node);
  
      var offsetTop = $node.attr('data-active-on-visible-offsetTop') * 1;
      var diffY = parseInt($node.data('data-active-on-visible-diff-y'));
      var delay = parseInt($node.data('data-active-on-visible-delay'));
  
      var callbackFuncName = $node.attr('data-active-on-visible-callback-func-name');
  
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      var nodeHeight = $node.height();
  
      if ( scrollTop + windowHeight + diffY > offsetTop ) {
        setTimeout(function() {
          $node.addClass('active');
          
          if ( $node.hasClass('active-only-one') ) {
            $node.addClass('actived');
          }
          
          if ( window[callbackFuncName] ) {
            window[callbackFuncName]($node);
          }
        }, delay);
      }
      else {
        $node.removeClass('active');
      }
    });
  }
  /* 발견되면 활성화시키는 라이브러리 끝 */
  
$(function() {
    SideMenu__init();
    SideMenu2__Toggle();
    ActiveOnVisible__init();
});
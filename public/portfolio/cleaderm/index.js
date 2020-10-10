$(function() {
    setTimeout(function() {
        $('img').addClass('active');
    }, 100);
});

$(document).ready(function() {
    var $topBtn = $('#top-button');
    var $sideBtn = $('.side-menu');

    var windowHeight = $(window).height();
  
    $(window).resize(function () {
      windowHeight = $(window).height();
    });
  
    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
  
      if (scrollTop > 0) {
        $topBtn.addClass('active');
        $sideBtn.addClass('active');
      } else {
        $topBtn.removeClass('active');
        $sideBtn.removeClass('active');
      }
    });
  
});


function SideMenu__init() {
    $('.side-menu-icon').click(function() {
        var $sideMenu = $('.side-menu');
        var $sideBox = $('.side-menu > .side-box');

        if ($sideMenu.hasClass('on')) {
            $sideMenu.removeClass('on');
        }
        else {
            $sideMenu.addClass('on');
        }

        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
        
            if (scrollTop == 0) {
              $sideMenu.removeClass('on');
            }
          });
    });
}

function Search__init() {
    $(".top-menu-bar > .search-ico > a").click(function () {
        var $fade = $(".top-menu-bar > .search-ico > .search-fade");
        
        if ($fade.hasClass("search-active")) {
            $fade.removeClass("search-active");
        } 
        else {
            $fade.addClass("search-active");
        }
    });
}

$(function() {
    Search__init();
});

// $(function() {
//     $(".bg-slider > .bg-side-bars > div").click(function () {
//         var $clickBtn = $(this);
//         var $slider = $(this).parent().parent();
//         var $act = $slider.find(">.bg-slides > div.active");
//         var $next;
    
//         var goLeft = $(this).index() == 0;
//         if ( goLeft ) {
//             $next = $act.prev();
//             if ($next.length == 0) {
//                 $next = $slider.find(">.bg-slides > div:last-child");
//             }
//         } else {
//             $next = $act.next();
//             if ($next.length == 0) {
//                 $next = $slider.find(">.bg-slides > div:first-child");
//             }
//         }
    
//         $act.removeClass("active");
//         $next.addClass("active");
//     });
//     function auto(){
//         $('.bg-slider > .bg-side-bars > div:last-child').click();
//     }
//     setInterval(auto, 8000);
// });

/* 기능 */
function SliderK__show($slider, index) {
    var $currentSlide = $slider.find('.bg-slides > div.active');
    var $postSlide = $slider.find('.bg-slides > div').eq(index);
    
    $currentSlide.removeClass('active');
    $postSlide.addClass('active');
    
    $slider.find('.page-nav > div.active').removeClass('active');
    $slider.find('.page-nav > div').eq(index).addClass('active');
}

function SliderK__showPrev($slider) {
    SliderK__showPost($slider, -1);
}

function SliderK__showNext($slider) {
    SliderK__showPost($slider, 1);
}

function SliderK__showPost($slider, change) {
    var $currentSlide = $slider.find('.bg-slides > div.active');
    var $postSlide = null;
    var $firstSlide = $slider.find('.bg-slides > div:first-child');
    var $lastSlide = $slider.find('.bg-slides > div:last-child');
    
    if ( change == 1 ) {
        $postSlide = $currentSlide.next();
        
        if ( $postSlide.length == 0 ) {
            $postSlide = $firstSlide;
        }
    }
    else if ( change == -1 ) {
        $postSlide = $currentSlide.prev();
        
        if ( $postSlide.length == 0 ) {
            $postSlide = $lastSlide;
        }
    }
    
    SliderK__show($slider, $postSlide.index());
}

/* 초기화 */
function SliderK__init() {
    $('.slider-k').each(function(index, node) {
        var $slider = $(node);
        
        SliderK__initPageNav($slider);
        SliderK__initSideBtns($slider);
        SliderK__initAutoplay($slider);
    });
}

function top_move(){
    $('#top-button').click(function(){
        $('html,body').scrollTop('0');
    });
}
// 페이지 내비를 자동으로 만들어줍니다.
function SliderK__initPageNav($slider) {
    var currentIndex = $slider.find('.bg-slides > div.active').index();
    var slidesCount = $slider.find('.bg-slides > div').length;
    
    var html = '';
        
    for ( var i = 0; i < slidesCount; i++ ) {
        if ( i == currentIndex ) {
            html += '<div class="active"></div>';
        }
        else {
            html += '<div></div>';
        }
    }

    html = '<div class="page-nav">' + html + '</div>';
    $slider.append(html);
    
    $slider.find('.page-nav > div').click(function() {
        SliderK__show($slider, $(this).index());
    });
}

// 사이드 버튼에 이벤트를 겁니다.
function SliderK__initSideBtns($slider) {
    $slider.find('.bg-side-bars > div').click(function() {
        var index = $(this).index();
        
        if ( index == 0 ) {
            SliderK__showPrev($slider);
        }
        else {
            SliderK__showNext($slider);
        }
    });
}

function SliderK__initAutoplay($slider) {
    var autoplay = $slider.data('autoplay');
    
    $slider.data('autoplay-now-work', 'Y');
    
    $slider.mouseenter(function() {
        $slider.data('autoplay-now-work', 'N');
    });
    
    $slider.mouseleave(function() {
        $slider.data('autoplay-now-work', 'Y');
    });
    
    if ( autoplay != 'Y' ) {
        return false;
    }
    
    var autoplayInterval = $slider.data('autoplay-interval');
    
    if ( typeof autoplayInterval == 'undefined' ) {
        autoplayInterval = 2000;
    }
    else {
        // 문자열을 숫자화
        autoplayInterval = autoplayInterval * 1;
    }
    
    var autoplayDirIsLeft = $slider.data('autoplay-dir') == 'left';
    
    setInterval(function() {
        if ( $slider.data('autoplay-now-work') == 'Y' ) {
            if ( autoplayDirIsLeft ) {
                SliderK__showPrev($slider);
            }
            else {
                SliderK__showNext($slider);
            }
        }
    }, autoplayInterval);
}

/* 발견되면 활성화시키는 라이브러리 시작 */
function ActiveOnVisible__init() {
    $('.active-on-visible').each(function(index, node) {
      var $node = $(node);
  
      var onFuncName = $node.attr('data-active-on-visible-on-func-name');
      var offFuncName = $node.attr('data-active-on-visible-off-func-name');
  
      $node.data('data-active-on-visible-on-func-name', onFuncName);
      $node.data('data-active-on-visible-off-func-name', offFuncName);
    });
  
    $(window).resize(_.debounce(ActiveOnVisible__initOffset, 500));
    ActiveOnVisible__initOffset();
  
    $(window).scroll(_.debounce(ActiveOnVisible__checkAndActive, 50));
    ActiveOnVisible__checkAndActive();
  }
  
  function ActiveOnVisible__initOffset() {
    var windowHeight = $(window).height();
  
    $('.active-on-visible:not(.actived)').each(function(index, node) {
      var $node = $(node);
  
      var offsetTop = $node.offset().top;
  
      var matrix = $node.css('transform').replace(/[^0-9\-.,]/g, '').split(',')
      var translateX = matrix[12] || matrix[4];
      var translateY = matrix[13] || matrix[5];
  
      if ( translateY ) {
        offsetTop -= translateY;
      }
  
      $node.attr('data-active-on-visible-offsetTop', offsetTop);
      $node.data('data-active-on-visible-offsetTop', offsetTop);
  
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
  
        diffY = windowHeight * (diffY / 100);
      }
      else if ( diffY.substr(-1, 1) == '%' ) {
        diffY = parseInt(diffY);
  
        diffY = $node.height() * (diffY / 100);
      }
      else {
        diffY = parseInt(diffY);
      }
  
      $node.attr('data-active-on-visible-diff-y-real', diffY);
      $node.data('data-active-on-visible-diff-y', diffY);
      $node.data('data-active-on-visible-delay', delay);
    });
  
    ActiveOnVisible__checkAndActive();
  }
  
  function ActiveOnVisible__checkAndActive() { 
    $('.active-on-visible:not(.actived)').each(function(index, node) {
      var $node = $(node);
  
      var offsetTop = $node.data('data-active-on-visible-offsetTop') * 1;
      var diffY = parseInt($node.data('data-active-on-visible-diff-y'));
      var delay = parseInt($node.data('data-active-on-visible-delay'));
  
      var onFuncName = $node.data('data-active-on-visible-on-func-name');
      var offFuncName = $node.data('data-active-on-visible-off-func-name');
  
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      var nodeHeight = $node.height();
  
      if ( scrollTop + windowHeight + diffY > offsetTop ) {
        setTimeout(function() {
          if ( $node.hasClass('active') == false ) {
            $node.addClass('active');
  
            if ( $node.hasClass('can-active-once') ) {
              $node.addClass('actived');
            }
  
            if ( window[onFuncName] ) {
              window[onFuncName]($node);
            }
          }
        }, delay);
      }
      else {
        if ( $node.hasClass('active') ) {
          $node.removeClass('active');
  
          if ( window[offFuncName] ) {
            window[offFuncName]($node);
          }
        }
      }
    });
  }
  
  /* 발견되면 활성화시키는 라이브러리 끝 */

$(function(){
    top_move();
    SideMenu__init();
    SliderK__init();
    ActiveOnVisible__init();
});
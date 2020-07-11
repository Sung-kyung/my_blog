$(function() {
    setTimeout(function() {
        $('img').addClass('active');
    }, 100);
});

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

$(function(){
    SliderK__init();
});
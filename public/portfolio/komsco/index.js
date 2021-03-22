function Window__init() {
    var $topBar = $('.top-bar');
    var $popUp = $('.pop-up');

    var windowHeight = $(window).height();

    $(window).resize(function () {
        windowHeight = $(window).height();
    });

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > 0) {
            $topBar.addClass('active');
            $popUp.addClass('hide');
        } else {
            $topBar.removeClass('active');
            $popUp.removeClass('hide');
        }
    });

}

function TopBar__show() {
    var $menuBg = $(".top-bar>.top-bar-wrap>.menu-box>.sub-bg");

    $(".top-bar>.top-bar-wrap>.menu-box>ul>li").mouseenter(function () {
        var $this = $(this);
        var $subMenuBox = $this.find(' > .sub-menu-box');
        var $subTitle = $this.find('> .sub-title');

        //메뉴 높이입니당
       var menuHeight = 0;
       if ($subMenuBox.attr('data-menu-height') !== undefined) {
           menuHeight = parseInt($subMenuBox.attr('data-menu-height'));
       }
        
       $subMenuBox.addClass('active');
       $subTitle.addClass('active');
       $this.addClass("active2");
       $menuBg.css('height', menuHeight + 'px')
        
    });

    $(".top-bar>.top-bar-wrap>.menu-box>ul>li").mouseleave(function () {
        var $this = $(this);
        var $subMenuBox = $this.find(' > .sub-menu-box');
        var $subTitle = $this.find('> .sub-title');

        $this.removeClass("active2");
        $subMenuBox.removeClass('active');
        $subTitle.removeClass('active');
        $menuBg.css('height', 0 + 'px');
    });
}


/* 슬라이드 */
function SliderK__show($slider, index) {
    var $currentSlide = $slider.find(".bg-slides > div.active");
    var $postSlide = $slider.find(".bg-slides > div").eq(index);

    $currentSlide.removeClass("active");
    $postSlide.addClass("active");

    $slider.find(".page-nav > div.active").removeClass("active");
    $slider.find(".page-nav > div").eq(index).addClass("active");
}

function SliderK__showPrev($slider) {
    SliderK__showPost($slider, -1);
}

function SliderK__showNext($slider) {
    SliderK__showPost($slider, 1);
}

function SliderK__showPost($slider, change) {
    var $currentSlide = $slider.find(".bg-slides > div.active");
    var $postSlide = null;
    var $firstSlide = $slider.find(".bg-slides > div:first-child");
    var $lastSlide = $slider.find(".bg-slides > div:last-child");

    if (change == 1) {
        $postSlide = $currentSlide.next();

        if ($postSlide.length == 0) {
            $postSlide = $firstSlide;
        }
    } else if (change == -1) {
        $postSlide = $currentSlide.prev();

        if ($postSlide.length == 0) {
            $postSlide = $lastSlide;
        }
    }

    SliderK__show($slider, $postSlide.index());
}

/* 초기화 */
function SliderK__init() {
    $(".slider-k").each(function (index, node) {
        var $slider = $(node);

        SliderK__initPageNav($slider);
        SliderK__initSideBtns($slider);
        SliderK__initAutoplay($slider);
    });
}

// 페이지 내비를 자동으로 만들어줍니다.
function SliderK__initPageNav($slider) {
    var currentIndex = $slider.find(".bg-slides > div.active").index();
    var slidesCount = $slider.find(".bg-slides > div").length;

    var html = "";

    for (var i = 0; i < slidesCount; i++) {
        if (i == currentIndex) {
            html += '<div class="active"></div>';
        } else {
            html += "<div></div>";
        }
    }

    html = '<div class="page-nav">' + html + "</div>";
    $slider.append(html);

    $slider.find(".page-nav > div").click(function () {
        SliderK__show($slider, $(this).index());
    });
}

// 사이드 버튼에 이벤트를 겁니다.
function SliderK__initSideBtns($slider) {
    $slider.find(".bg-side-bars > div").click(function () {
        var index = $(this).index();

        if (index == 0) {
            SliderK__showPrev($slider);
        } else {
            SliderK__showNext($slider);
        }
    });
}

function SliderK__initAutoplay($slider) {
    var autoplay = $slider.data("autoplay");

    $slider.data("autoplay-now-work", "Y");

    $slider.mouseenter(function () {
        $slider.data("autoplay-now-work", "N");
    });

    $slider.mouseleave(function () {
        $slider.data("autoplay-now-work", "Y");
    });

    if (autoplay != "Y") {
        return false;
    }

    var autoplayInterval = $slider.data("autoplay-interval");

    if (typeof autoplayInterval == "undefined") {
        autoplayInterval = 2000;
    } else {
        // 문자열을 숫자화
        autoplayInterval = autoplayInterval * 1;
    }

    var autoplayDirIsLeft = $slider.data("autoplay-dir") == "left";

    setInterval(function () {
        if ($slider.data("autoplay-now-work") == "Y") {
            if (autoplayDirIsLeft) {
                SliderK__showPrev($slider);
            } else {
                SliderK__showNext($slider);
            }
        }
    }, autoplayInterval);
}

$(function () {
    Window__init();
    TopBar__show();
    SliderK__init();
});
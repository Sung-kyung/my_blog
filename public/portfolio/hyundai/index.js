console.clear();

/* 기능 */
function SliderK__show($slider, index) {
    var $currentSlide = $slider.find(".slides > div.active");
    var $postSlide = $slider.find(".slides > div").eq(index);

    $currentSlide.removeClass("active");
    $postSlide.addClass("active");

    $slider.find(".page-nav > div.active").removeClass("active");
    $slider.find(".page-nav > div").eq(index).addClass("active");
}

function SliderK__showPrev($slider) {
    SliderK__showPost($slider, 1);
}

function SliderK__showNext($slider) {
    SliderK__showPost($slider, -1);
}

function SliderK__showPost($slider, change) {
    var $currentSlide = $slider.find(".slides > div.active");
    var $postSlide = null;
    var $firstSlide = $slider.find(".slides > div:first-child");
    var $lastSlide = $slider.find(".slides > div:last-child");

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
        SliderK__initAutoplay($slider);
    });
}

// 페이지 내비를 자동으로 만들어줍니다.
function SliderK__initPageNav($slider) {
    var currentIndex = $slider.find(".slides > div.active").index();
    var slidesCount = $slider.find(".slides > div").length;

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
    SliderK__init();
});

function MobileSideBar__toggle() {
    var $btn = $('.btn-toggle-mobile-side-bar');
    var $MobileSideBar = $('.mobile-side-bar');
    var $MobileTopBar = $('.mobile-top-bar');

    if ($btn.hasClass('active')) {
        $btn.removeClass('active');
        $btn.css('display','block');
        $MobileSideBar.removeClass('active');
        $MobileTopBar.css('display','block');
    } else {
        $btn.addClass('active');
        $MobileSideBar.addClass('active');
        $MobileTopBar.css('display','none');
    }
}
function MobileSideBar__init() {
    $('.btn-toggle-mobile-side-bar').click(MobileSideBar__toggle);
}
$(function () {
    MobileSideBar__init();
});
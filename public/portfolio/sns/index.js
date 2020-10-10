$(function () {
    var myFullpage = new fullpage("#fullpage", {
        verticalCentered: false,
        navigation: true,
        navigationPosition: "right",
        anchors:['anchor1','anchor2','anchor3','achor4','anchor5'],
        scrollingSpeed: 1000
    });
});

function StartAni__init() {
    var $start = $(".main > .main-text-box");

    $start.addClass("active");
}

function SideBar__init() {
    $(".btn-side").click(function () {
        var $btn = $(".btn-side");
        var $sideBar = $(".side-bar");
        var hasClass = $btn.hasClass("active");

        if (hasClass) {
            $btn.removeClass("active");
            $sideBar.fadeOut();
            $sideBar.removeClass("ani-active");
        } else {
            $btn.addClass("active");
            $sideBar.fadeIn();
            $sideBar.addClass("ani-active");
        }
    });
}

function SliderBox3__init() {
    var mouseInOn = false;

    var switchAnimating = false;

    $('.slider-box-3 > .head > ul > li').click(function () {
        if (switchAnimating) {
            return;
        }

        switchAnimating = true;

        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');

        var index = $(this).index();

        var $old = $(this).closest('.slider-box-3').find(' > .body > div.active');

        $old.addClass('last-active');
        setTimeout(function () {
            $old.removeClass('last-active');
            switchAnimating = false;
        }, 500);
        $old.removeClass('active');
        $(this).closest('.slider-box-3').find(' > .body > div').eq(index).addClass('active');
    });

    setInterval(function () {
        var $post = $('.slider-box-3 > .head > ul > li.active').next();

        if ($post.length == 0) {
            $post = $('.slider-box-3 > .head > ul > li:first-child');
        }

        if (mouseInOn == false) {
            $post.click();
        }
    }, 3000);

    $('.slider-box-3 > .head > ul > li:first-child').click();

    $('.slider-box-3').mouseenter(function () {
        mouseInOn = true;
    });

    $('.slider-box-3').mouseleave(function () {
        mouseInOn = false;
    });
}


$(function () {
    StartAni__init();
    SideBar__init();
    SliderBox3__init();
});
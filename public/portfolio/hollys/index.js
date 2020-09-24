function Round1__init() {
    var $circle1 = $('.discover-round-1');

    var count = 25;

    for (var i = 1; i <= count; i++) {
        var $section = $('<section></section>');
        var deg = (360 / count) * i;
        $section.css('transform', 'translateX(-50%) rotate(' + deg + 'deg)');
        $circle1.append($section);
    }
}
var action1NowWork = false;

function Action1() {
    $('.roll').mouseover(function () {
        if ( action1NowWork ) {
            return;
        }

        action1NowWork = true;

        gsap.to(".roll", {
            duration: 3,
            yoyo:true,
            repeat:1,
            ease: "power1.inOut",
            immediateRender: true,
            motionPath: {
                path: "M43.716,17.28 C165.235,16.264 162.76,15.85 235.79,14.85 310.788,14.85 430.42,71.45 456.992,112.197",
                align: "#path",
                autoRotate: 0,
                alignOrigin: [0.5, 0.5]
            }
        });

        setTimeout(function() {
            action1NowWork = false;
        }, 7000);
    });
}

$(document).ready(function() {
    var $topBar = $('.top-bar');

    var windowHeight = $(window).height();
  
    $(window).resize(function () {
      windowHeight = $(window).height();
    });
  
    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
  
      if (scrollTop > windowHeight + 2000) {
        $topBar.addClass('white');
      } else {
        $topBar.removeClass('white');
      }
    });
});

$(function () {
    Round1__init();
    Action1();
});
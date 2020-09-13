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

function Action() {
    $('.roll').mouseover(function () {
            if (action1NowWork) {
                return;
            }

            action1NowWork = false;

            gsap.to(".roll", {
                duration: 3,
                ease: "power1.inOut",
                immediateRender: true,
                motionPath: {
                    path: "M131,24 C206,24 472.044,125.741 491.761,157.986 52.511,19.649 0,0 0,0 ",
                    align: "#path",
                    alignOrigin: [0.5, 0.5]
                }
            });
    });
}


$(function () {
    Round1__init();
    Action();
});
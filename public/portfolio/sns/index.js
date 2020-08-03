$(function () {
    var myFullpage = new fullpage("#fullpage", {
        verticalCenter: false,
        navigation: true,
        navigationPosition: "right",
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
            $sideBar.removeClass("active");
        } else {
            $btn.addClass("active");
            $sideBar.fadeIn();
             $sideBar.addClass("ani-active");
        }
    });
}

$(function () {
    StartAni__init();
    SideBar__init();
});

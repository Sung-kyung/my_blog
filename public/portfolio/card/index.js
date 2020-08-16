function MySlider1__init() {
    $('.my-slider-1 .owl-carousel').owlCarousel({
        responsive: {
            0: {
                items: 3
            }
        },
        loop: true,
        dots: false,
        nav: true,
        navText: ['<img src="https://sung-kyung.github.io/img1/pf/card/card_image/card_arrowlf.png" alt="">', '<img src="https://sung-kyung.github.io/img1/pf/card/card_image/card_arrowrt.png" alt="">'],
        center: true
    });
}

$(function () {
    MySlider1__init();
});

$(function () {
    var myFullpage = new fullpage("#fullpage", {
        verticalCentered: false,
        navigation: false,
        navigationPosition: "right",
        scrollingSpeed: 800
    });
});


function ShowSideBar__init() {
    $(".side-btn").click(function () {
        var $this = $(this);
        var $sideBar = $(".side-bar");
        var hasClass = $this.hasClass("active");

        if (hasClass) {
            $this.removeClass("active");
            $sideBar.removeClass("active");
        } else {
            $this.addClass("active");
            $sideBar.addClass("active");
        }
    });
}
$(function () {
    ShowSideBar__init();
});


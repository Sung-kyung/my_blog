function Owl__init() {
    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 100,
        nav: false,
        dots: false,
        autoWidth: true,
        items: 3
    });
}

function Slider1__itemClick(el) {
    var $el = $(el);
    var url = $el.attr('data-img-url');
    var link = $el.attr('data-link-url');
    var no = $el.attr('data-no');

    $('.img-box-1').empty().append("<a href='" + link + "' target='_blank'><img src='" + url + "'></a>");
    $('.txt-box-1').empty().append("<h1>" + no + "</h1>");
}

// 탭박스
function Tab__init() {
    $(".tab-box > .head > ul > li").click(function () {
        var $clickedLi = $(this);
        var index = $clickedLi.index();

        $clickedLi.siblings(".active-tab").removeClass("active-tab");
        $clickedLi.addClass("active-tab");

        var $tabBox = $clickedLi.closest(".tab-box");

        $tabBox.find(".body > ul > li").removeClass("active-tab");
        $tabBox.find(".body > ul > li").eq(index).addClass("active-tab");
    });
    // 메뉴 슬라이드

    $(".carousel-1 > .owl-carousel .owl-item").mouseenter(function () {
        var eventItem = this;
        var $carousel = $(this).closest(".owl-1");

        for (var i = 1; i <= 4; i++) {
            $carousel.removeClass("carousel-item-" + i + "-hover");
        }

        $carousel.find(".owl-item.active-tab").each(function (index, node) {
            if (eventItem == node) {
                $carousel.addClass("carousel-item-" + (index + 1) + "-hover");

                return false;
            }
        });
    }); 
  
    // 메뉴 마우스 리브

    $(".head > ul > li").click(function () {
        $click_menu = $(this);

        $click_menu.addClass("active-tab");
    });
}

// 클릭시 border active
function border_1() {
    $('.menu-1  .item').click(function () {
        var $border = $('.menu-1  .item.border');

        $border.removeClass('border');
        $(this).addClass('border');

    })
}


$(function () {
    Owl__init();
    Slider1__itemClick();
    border_1();
    Tab__init();
    $('.item-1').click();
});
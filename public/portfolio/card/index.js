function Carousel1__onTranslated() {
    $('.carousel-1 > .owl-carousel').trigger('play.owl.autoplay');
    
    $('.carousel-1').data('carousel-1-autoplay-status', 'Y');
    
    var no = $('.carousel-1 .owl-item.active.center > .item').attr('data-no') * 1;
    
    $('.carousel-2 > .owl-carousel').trigger('to.owl.carousel', [no - 1]);
    $('.carousel-2 .owl-item > .item.active').removeClass('active');
    $('.carousel-2 .owl-item > .item[data-no="' + no + '"]').addClass('active');
}

function Carousel1__init() {
    // 데이터 개수 적어두기
    var totalItemNo = $('.carousel-1 .item').length;
    $('.carousel-1').data('total-items', totalItemNo);
    
    // 각 아이템에 번호 매기기
    $('.carousel-1 .item').each(function(index, node) {
        $(node).attr('data-no', index + 1);
    });
    
    $('.carousel-1 .owl-carousel').owlCarousel({
        responsive: {
            0: {
                items: 3
            }
        },
        autoplay:false,
        loop: true,
        dots: false,
        nav: true,
        margin:0,
        navText: ['<img src="https://sung-kyung.github.io/img1/pf/card/card_image/card_arrowlf.png" alt="">', '<img             src="https://sung-kyung.github.io/img1/pf/card/card_image/card_arrowrt.png" alt="">'],
        center: true,
        autoplayHoverPause:false, /* 필수 */
        onTranslated: Carousel1__onTranslated,
    });
    $('.carousel-1 .play').on('click',function(){
        $('.carousel-1 > .owl-carousel').trigger('play.owl.autoplay');

        $('.carousel-1').data('carousel-1-autoplay-status', 'Y');
    });

    $('.carousel-1 .stop').on('click',function(){
        $('.carousel-1 > .owl-carousel').trigger('stop.owl.autoplay');

        $('.carousel-1').data('carousel-1-autoplay-status', 'N');
    });
}

$(function() {
   Carousel1__init(); 
});

/* 캐러셀 2 */
function Carousel2__itemClicked(el) {
    var $el = $(el);
    
    var no = $el.attr('data-no') * 1;
    var currentNo = $('.carousel-1 .owl-item.active > .item').attr('data-no') * 1;
 
    if ( no != currentNo ) {
        $('.carousel-1 > .owl-carousel').trigger('to.owl.carousel', [no - 1, 100]);
    }
}

function Carousel2__onTranslated() {
    $('.carousel-2 > .owl-carousel').trigger('play.owl.autoplay');
    
    $('.carousel-2').data('carousel-2-autoplay-status', 'Y');
}

function Carousel2__init() {
    // 데이터 개수 적어두기
    var totalItemNo = $('.carousel-2 .item').length;
    $('.carousel-2').data('total-items', totalItemNo);
    
    // 각 아이템에 번호 매기기
    $('.carousel-2 .item').each(function(index, node) {
        $(node).attr('data-no', index + 1);
    });
    
    $('.carousel-2 > .owl-carousel').owlCarousel({
        autoplay:false, // 오토 플레이
        loop:true, // 끝에서 다시 처음으로 시작
        margin:0,
        dots:false,
        nav:false,
        center:true,
        navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            }
        },
        autoplayHoverPause:false, /* 필수 */
        onTranslated: Carousel2__onTranslated,
    });

    $('.carousel-2 .play').on('click',function(){
        $('.carousel-2 > .owl-carousel').trigger('play.owl.autoplay');

        $('.carousel-2').data('carousel-2-autoplay-status', 'Y');
    });

    $('.carousel-2 .stop').on('click',function(){
        $('.carousel-2 > .owl-carousel').trigger('stop.owl.autoplay');

        $('.carousel-2').data('carousel-2-autoplay-status', 'N');
    });
}

var action1Done = false;

function action1() {
    if ( action1Done ) {
        return;
    }
    action1Done = true;
    gsap.to(".diving", {
        duration: 2, 
        ease: "power1.inOut",
        immediateRender: true,
        motionPath: {
            path: "M657.5,328.5s-3-242-8-248c0,0-19-78-82-46s-377,408-377,408",
            align: "#path",
            alignOrigin: [0.5, 0.5],
            autoRotate: 240
        }
    });
}

$(function() {
   Carousel2__init(); 
});

$(function () {
    var myFullpage = new fullpage("#fullpage", {
        verticalCentered: false,
        navigation: false,
        navigationPosition: "right",
        scrollingSpeed: 800,
        afterLoad: function(origin, destination, direction) {
            if ( $(destination.item).hasClass('section-5') ) {
                action1();
            }

            if ( $(destination.item).hasClass('section-4') ) {
                $('.video-box video').get(0).play();
            }
        }
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


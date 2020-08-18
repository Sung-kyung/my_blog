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
        duration: 4, 
        ease: "power1.inOut",
        immediateRender: true,
        motionPath: {
            path: "M1683.5,501.5s-3-242-8-248c0,0-19-78-82-46s-377,408-377,408l-139,157s-84,125-172,144-182,0-182,0-135-86-193-148l-457-384-143-124-82-81",
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
            $('html').attr('data-fullpage-index', destination.index);

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

var $window = $(window);

var windowWidth = $window.width();
var windowHeight = $window.height();

$window.resize(_.throttle(function() {
    windowWidth = $window.width();
    windowHeight = $window.height();
}, 100));

$window.resize(_.throttle(function() {
    MousemoveEffect1__update();
}, 100));

var MousemoveEffect1__$el = null;
var MousemoveEffect1__lastPosX = 0;
var MousemoveEffect1__lastPosY = 0;
var MousemoveEffect1__animationQuality = 10; // 숫자가 낮을 수록 좋음, 대신 느려질 수 있음

if ( MousemoveEffect1__animationQuality < 10 ) {
    MousemoveEffect1__animationQuality = 10;
}

function MousemoveEffect1__update() {
    console.log("MousemoveEffect1__lastPosX : " + MousemoveEffect1__lastPosX);
    console.log("MousemoveEffect1__lastPosY : " + MousemoveEffect1__lastPosY);
    
    MousemoveEffect1__$el.each(function(index, node) {
        var $node = $(node);
        var horRes = $node.data('data-mousemove-effect1-hor-res');
        var verRes = $node.data('data-mousemove-effect1-ver-res');
        
        var x = (MousemoveEffect1__lastPosX - (windowWidth / 2)) * horRes;
        var y = (MousemoveEffect1__lastPosY - (windowHeight / 2)) * verRes;
        $(node).css('transform', 'translateX(' + x + 'px) translateY(' + y + 'px)');
    });
}

function MousemoveEffect1__init() {
    MousemoveEffect1__$el = $('.mousemove-effect-1-el');
    
    MousemoveEffect1__$el.each(function(index, node) {
        var $node = $(node);
        // 좌우 민감도
        $node.data('data-mousemove-effect1-hor-res', $node.attr('data-mousemove-effect1-hor-res') * 1);
        // 위아래 민감도
        $node.data('data-mousemove-effect1-ver-res', $node.attr('data-mousemove-effect1-ver-res') * 1);
    });
    
    var MousemoveEffect1__updateThrottled = _.throttle(function() {
        MousemoveEffect1__update();
    }, MousemoveEffect1__animationQuality);

    $window.mousemove(function(e) {
        MousemoveEffect1__lastPosX = e.clientX;
        MousemoveEffect1__lastPosY = e.clientY;
        
        MousemoveEffect1__updateThrottled();
    });
}

$(function() {
   MousemoveEffect1__init(); 
});
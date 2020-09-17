$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 30,
        navigation: false,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        }
    });

    var $topBar = $('.top-bar');

    var windowHeight = $(window).height();

    $(window).resize(function () {
        windowHeight = $(window).height();
    });

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > windowHeight - 200) {
            $topBar.addClass('dark');
        } else {
            $topBar.removeClass('dark');
        }
    });

    var swiper = new Swiper('.swiper-container-2', {
        slidesPerView: 6,
        loop: true,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
          }
    });

});
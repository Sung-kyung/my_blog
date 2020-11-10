  //메인 슬라이더
  function Slider__init() {
    $(".slider-div").slick({
      slide: "div",
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 800,
      arrows: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: ".prev",
      nextArrow: ".next",

    });
  }

  //menu hover  
  function HoverBar__init() {
    $(".hover-bar-nav .hover-bar-menu").mouseenter(function () {
      var $this = $(this);

      var menuWidth = $this.width();
      var menuPadding = ($this.innerWidth() - $this.width()) / 2;
      var menuPosition = $this.position().left;

      var $hoverBar = $(".hover-bar");

      $hoverBar.css("width", menuWidth + "px");
      $hoverBar.css("left", menuPosition + menuPadding + "px");
    });

    $(".hover-bar-nav").mouseleave(function () {
      var $this = $(this);
      var $hoverBar = $(".hover-bar");
      $hoverBar.css("width", "");
      $hoverBar.css("left", "");
    });
  }

  function Scroll__init() {
    var $topBar = $('.top-bar');
    var $topBar2 = $('.top-bar-2');

    var windowHeight = $(window).height();

    $(window).resize(function () {
      windowHeight = $(window).height();
    });

    $(window).scroll(function (e) {
      if ($('body').hasClass('prevent')) {
        e.stopPropagation();
        e.preventDefault();
        return false;
      }

      var scrollTop = $(window).scrollTop();

      if (scrollTop > windowHeight - 700) {
        $topBar.addClass('white');
        $topBar2.addClass('white');
      } else {
        $topBar.removeClass('white');
        $topBar2.removeClass('white');
      }
    });
  }

  /* 사이드 메뉴 */
  function SideMenu__init() {
    $('.menu-bar-icon').click(function () {
      var $topBar2 = $('.top-bar-2');

      if ($('.side-menu-wrap').hasClass('active')) {
        $topBar2.removeClass('white');
        $topBar2.removeClass('active');
        $('.side-menu-wrap').removeClass('active');
        $('body').removeClass('prevent');
      } else {
        $topBar2.addClass('white');
        $topBar2.addClass('active');
        $('.side-menu-wrap').addClass('active');
        $('body').addClass('prevent');
      }

    });

    var slideSpeed = 150;

    $('.side-menu-wrap > .side-bg > ul > li').click(function () {
      if ($(this).hasClass('active2')) {
        $(this).removeClass('active2');
        $(this).find(' > ul').slideUp(slideSpeed);
      } else {
        $(this).siblings('.active2').find('> ul').slideUp(slideSpeed);
        $(this).siblings('.active2').removeClass('active2');
        $(this).addClass('active2');
        $(this).find(' > ul').slideDown(slideSpeed);
      }
    });

  }

  /* 발견되면 활성화시키는 라이브러리 시작 */
  function ActiveOnVisible__init() {
    $('.active-on-visible').each(function (index, node) {
      var $node = $(node);

      var onFuncName = $node.attr('data-active-on-visible-on-func-name');
      var offFuncName = $node.attr('data-active-on-visible-off-func-name');

      $node.data('data-active-on-visible-on-func-name', onFuncName);
      $node.data('data-active-on-visible-off-func-name', offFuncName);
    });

    $(window).resize(_.debounce(ActiveOnVisible__initOffset, 500));
    ActiveOnVisible__initOffset();

    $(window).scroll(_.debounce(ActiveOnVisible__checkAndActive, 40));
    ActiveOnVisible__checkAndActive();
  }

  function ActiveOnVisible__initOffset() {
    var windowHeight = $(window).height();

    $('.active-on-visible:not(.actived)').each(function (index, node) {
      var $node = $(node);

      var offsetTop = $node.offset().top;

      var matrix = $node.css('transform').replace(/[^0-9\-.,]/g, '').split(',')
      var translateX = matrix[12] || matrix[4];
      var translateY = matrix[13] || matrix[5];

      if (translateY) {
        offsetTop -= translateY;
      }

      $node.attr('data-active-on-visible-offsetTop', offsetTop);
      $node.data('data-active-on-visible-offsetTop', offsetTop);

      if (!$node.attr('data-active-on-visible-diff-y')) {
        $node.attr('data-active-on-visible-diff-y', '0');
      }

      if (!$node.attr('data-active-on-visible-delay')) {
        $node.attr('data-active-on-visible-delay', '0');
      }

      var diffY = $node.attr('data-active-on-visible-diff-y');
      var delay = $node.attr('data-active-on-visible-delay');

      if (diffY.substr(-2, 2) == 'vh') {
        diffY = parseInt(diffY);

        diffY = windowHeight * (diffY / 100);
      } else if (diffY.substr(-1, 1) == '%') {
        diffY = parseInt(diffY);

        diffY = $node.height() * (diffY / 100);
      } else {
        diffY = parseInt(diffY);
      }

      $node.attr('data-active-on-visible-diff-y-real', diffY);
      $node.data('data-active-on-visible-diff-y', diffY);
      $node.data('data-active-on-visible-delay', delay);
    });

    ActiveOnVisible__checkAndActive();
  }

  function ActiveOnVisible__checkAndActive() {
    $('.active-on-visible:not(.actived)').each(function (index, node) {
      var $node = $(node);

      var offsetTop = $node.data('data-active-on-visible-offsetTop') * 1;
      var diffY = parseInt($node.data('data-active-on-visible-diff-y'));
      var delay = parseInt($node.data('data-active-on-visible-delay'));

      var onFuncName = $node.data('data-active-on-visible-on-func-name');
      var offFuncName = $node.data('data-active-on-visible-off-func-name');

      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      var nodeHeight = $node.height();

      if (scrollTop + windowHeight + diffY > offsetTop) {
        setTimeout(function () {
          if ($node.hasClass('active') == false) {
            $node.addClass('active');

            if ($node.hasClass('can-active-once')) {
              $node.addClass('actived');
            }

            if (window[onFuncName]) {
              window[onFuncName]($node);
            }
          }
        }, delay);
      } else {
        if ($node.hasClass('active')) {
          $node.removeClass('active');

          if (window[offFuncName]) {
            window[offFuncName]($node);
          }
        }
      }
    });
  }


  /* 발견되면 활성화시키는 라이브러리 끝 */
  function Owl__init() {
    $('.lastest-2 > .owl-carousel').owlCarousel({
      loop: false,
      margin: 20,
      nav: false,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
        0: {
          items: 1,
        },
        767: {
          items: 2,
          autoplay: false
        },
        1000: {
          items: 2,
          autoplay: false
        }
      }
    });
  }


  function LangBox__init() {
    $('.top-bar-2 .lang-2').click(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
      } else {
        $(this).addClass('active');
      }

    });
  }

  function FootMenu__init() {
    var slideSpeed = 150;

    $('.footer-2 >.footer-2-wrap > ul > li').click(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).find(' > ul').slideUp(slideSpeed);
      } else {
        // 다른 것들을 닫는다.
        $(this).siblings('.active').find(' > ul').slideUp(slideSpeed);
        $(this).siblings('.active').removeClass('active');


        // 어떤 것을 열기 전에
        $(this).addClass('active');
        $(this).find(' > ul').slideDown(slideSpeed);
      }
    });
  }

  function Owl2__init() {
    $('.news-box-2 > .owl-carousel').owlCarousel({
      loop: false,
      margin: 20,
      nav: false,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
        0: {
          items: 1,
        },
        767: {
          items: 1,
          autoplay: false
        }
      }
    });
  }

  function TopBtn__init() {
    $('.top-btn').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 500);
    });
    
  }

  function TopBtn__showPhase1() {
    $('.top-btn').addClass('active');
  }

  function TopBtn__showPhase2() {
    $('.top-btn').removeClass('active');
  }

  function TopBtn__phase1() {
    $('.top-btn').addClass('down');
  }

  function TopBtn__phase2() {
    $('.top-btn').removeClass('down');

  }

  $(function () {
    setTimeout(function () {
      ActiveOnVisible__init();
    }, 500);
    Slider__init();
    HoverBar__init();
    Scroll__init();
    SideMenu__init();
    Owl__init();
    LangBox__init();
    FootMenu__init();
    Owl2__init();
    TopBtn__init();
    
    setTimeout(function() {
      TopBtn__showPhase2();
      TopBtn__phase2();
    }, 10);
    
  });
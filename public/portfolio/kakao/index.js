function hoverBar__init() {
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

function FootSubMenu__init() {
  $('footer > .foot-wrap > ul > li').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).siblings('.active').find('> ul').css("display", "none");
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
    }

  });
}

function TopBtn__init() {
  $(window).scroll(function () {

    var $topBtn = $('.top-btn-box');
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();

    if (scrollTop > windowHeight - 700) {
      $topBtn.addClass('show');
    } else {
      $topBtn.removeClass('show');
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

  $(window).scroll(_.debounce(ActiveOnVisible__checkAndActive, 10));
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

function TopBtn__phase1($node) {
  var offsetTop = $node.data('data-active-on-visible-offsetTop');
  var diffY = parseInt($node.data('data-active-on-visible-diff-y'));

  $('.top-btn-box').css({
    'position': 'absolute',
    'top': offsetTop + diffY
  });
}

function TopBtn__phase2($node) {
  $('.top-btn-box').css({
    'position': '',
    'top': ''
  });
}

$(function () {

  setTimeout(function () {
    ActiveOnVisible__init();
  }, 500);

  setTimeout(function () {
    hoverBar__init();
    FootSubMenu__init();
    TopBtn__init();
  }, 600);
});
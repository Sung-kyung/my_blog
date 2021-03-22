
$(function () {
    
    $(".slider-div").slick({
      slide: "div",
      slidesToShow: 5,
      centerPadding:50,
      slidesToScroll: 1, 
      speed: 100, 
      arrows: true,
      dots: false, 
      autoplay: false,
      autoplaySpeed: 10000,
      pauseOnHover: true,
      vertical: false,
      draggable: true,
      breakpoints: {
        '320': {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        '640': {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        '960': {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }
    });
  });
  
  $(document).ready(function () {
    var $topBar = $(".top-bar");

    var windowHeight = $(window).height();

    $(window).resize(function () {
        windowHeight = $(window).height();
    });

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > 0) {
            $topBar.addClass("show");
        } else {
            $topBar.removeClass("show");
        }
    });
});


function ActiveOnVisible__initOffset() {
    $(".active-on-visible").each(function (index, node) {
        var $node = $(node);

        var offsetTop = $node.offset().top;
        $node.attr("data-active-on-visible-offsetTop", offsetTop);

        if (!$node.attr("data-active-on-visible-diff-y")) {
            $node.attr("data-active-on-visible-diff-y", "0");
        }

        if (!$node.attr("data-active-on-visible-delay")) {
            $node.attr("data-active-on-visible-delay", "0");
        }
    });

    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__checkAndActive() {
    $(".active-on-visible").each(function (index, node) {
        var $node = $(node);

        var offsetTop = parseInt(
            $node.attr("data-active-on-visible-offsetTop")
        );
        var diffY = parseInt($node.attr("data-active-on-visible-diff-y"));
        var delay = parseInt($node.attr("data-active-on-visible-delay"));

        if ($(window).scrollTop() + $(window).height() + diffY > offsetTop) {
            setTimeout(function () {
                $node.addClass("active");
            }, delay);
        }
    });
}

//contact 실행
function sendEmailFormSubmit(form) {
    if (form.receiverName.value.length == 0) {
        alert('폼안에 receiverName 의 value 를 입력해주세요.');
        return false;
    }

    if (form.receiverEmail.value.length == 0) {
        alert('폼안에 receiverEmail 의 value 를 입력해주세요.');
        return false;
    }

    form.senderName.value = form.senderName.value.trim();

    if (form.senderName.value.length == 0) {
        alert('당신의 이름을 입력해주세요.');
        form.senderName.focus();
        return false;
    }

    form.senderEmail.value = form.senderEmail.value.trim();

    if (form.senderEmail.value.length == 0) {
        alert('당신의 이메일을 입력해주세요.');
        form.senderEmail.focus();
        return false;
    }

    form.body.value = form.body.value.trim();

    if (form.body.value.length == 0) {
        alert('내용을 입력해주세요.');
        form.body.focus();
        return false;
    }

    var senderName = form.senderName.value;
    var senderEmail = form.senderEmail.value;
    var title = '[이력서 보고 연락 드립니다]';
    var body = nl2br(form.body.value);
    var receiverName = form.receiverName.value;
    var receiverEmail = form.receiverEmail.value;

    var url = 'https://email.oa.gg/doSendEmail2.php?senderName=' + senderName + '&senderEmail=' + senderEmail + '&receiverName=' + receiverName + '&receiverEmail=' + receiverEmail + '&title=' + title + '&body=' + body;

    //console.log("URL : " + url);

    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}

function nl2br(str) {
    return str.replace(/\n/g, "<br />");
}

function Email__callback(data) {
    if (data.resultCode.substr(0, 2) == 'S-') {
        document.sendEmailForm.reset();
    }

    alert(data.msg);
}


$(function () {
  // 스크롤 이벤트
  ActiveOnVisible__initOffset();

  setTimeout(function () {
      ActiveOnVisible__checkAndActive();
  }, 100);

  $(window).resize(ActiveOnVisible__initOffset);
  $(window).scroll(ActiveOnVisible__checkAndActive);
});
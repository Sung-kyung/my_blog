

function Owl__init() {
    $('.owl-1 > .owl-carousel').owlCarousel({
        loop: false,
        margin: 100,
        nav: false,
        dots: false,
        autoWidth: true,
        items: 3
    });
}
function Owl2__init() {
    $('.slide-2 > .owl-carousel').owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        items: 4
    });
}

function Slider1__itemClick(el) {
    var $el = $(el);
    var url = $el.attr('data-img-url');
    var link = $el.attr('data-link-url');
    var no = $el.attr('data-no');
    
    $('.img-box-1').empty().append("<a href='" + link + "' target='_blank' style=\"background-image:url(\'" + url + "\')\"></a>");
    $('.txt-box-1').empty().append("<h1>" + no + "</h1>");
}

function Slider1__itemClick2(el) {
    var $el = $(el);
    var url2 = $el.attr('data-img2-url');
    var title = $el.attr('data-title-en');
    var titleKo = $el.attr('data-title-ko');
    var creat = $el.attr('data-creat');
    var no2 = $el.attr('data-no2');

    $('.img-box-2').empty().append("<img src='" + url2 + "'>");
    $('.title-en-box').empty().append("<h2>" + title + "</h2>");
    $('.creat-box').empty().append("<h5>" + creat + "</h5>");
    $('.title-ko-box').empty().append("<div>" + titleKo + "</div>");
    $('.txt-box-2').empty().append("<h1>" + no2 + "</h1>");
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
function border_2() {
    $('.owl-2 .item').click(function () {
        var $border = $('.owl-2 .item.border-1');

        $border.removeClass('border-1');
        $(this).addClass('border-1');

    })
}


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
    if ( form.receiverName.value.length == 0 ) {
        alert('폼안에 receiverName 의 value 를 입력해주세요.');
        return false;
    }

    if ( form.receiverEmail.value.length == 0 ) {
        alert('폼안에 receiverEmail 의 value 를 입력해주세요.');
        return false;
    }

    form.senderName.value = form.senderName.value.trim();

    if ( form.senderName.value.length == 0 ) {
        alert('당신의 이름을 입력해주세요.');
        form.senderName.focus();
        return false;
    }

    form.senderEmail.value = form.senderEmail.value.trim();

    if ( form.senderEmail.value.length == 0 ) {
        alert('당신의 이메일을 입력해주세요.');
        form.senderEmail.focus();
        return false;
    }

    form.body.value = form.body.value.trim();

    if ( form.body.value.length == 0 ) {
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

    var head= document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}

function nl2br(str){  
    return str.replace(/\n/g, "<br />");  
}

function Email__callback(data) {
    if ( data.resultCode.substr(0, 2) == 'S-' ) {
        document.sendEmailForm.reset();
    }

    alert(data.msg);
}


$(function() {
    Owl__init();
    Owl2__init();
    Slider1__itemClick();
    Slider1__itemClick2();
    border_1();
    border_2();
    Tab__init();
    $('.owl-1 > .menu-1  .item-1').click();
    $('.owl-2  .item-2-1').click();

    // 스크롤 이벤트
    ActiveOnVisible__initOffset();
    
    setTimeout(function(){
        ActiveOnVisible__checkAndActive();
    }, 100);
    
    $(window).resize(ActiveOnVisible__initOffset);
    $(window).scroll(ActiveOnVisible__checkAndActive);
});
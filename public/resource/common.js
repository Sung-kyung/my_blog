function MobileSideBar__toggle() {
    var $btn = $('.btn-toggle-mobile-side-bar');
    var $MobileSideBar = $('.mobile-side-bar');
    var $MobileSideBarBg = $('.mobile-side-bar-bg');
    var $html = $('html');

    if ($btn.hasClass('active')) {
        $btn.removeClass('active');
        $MobileSideBar.removeClass('active');
        $MobileSideBarBg.removeClass('active');
        $html.removeClass('active');
    }
    else {
        $btn.addClass('active');
        $('.mobile-side-bar').addClass('active');
        $('.mobile-side-bar-bg').addClass('active');
        $html.addClass('active');
    }
}

function MobileSideBar__init() {
    $('.btn-toggle-mobile-side-bar,.mobile-side-bar-bg').click
    (MobileSideBar__toggle);
}

$(function() {
    MobileSideBar__init();
});




function MobileSideBar__toggle() {
    var $btn = $('.btn-toggle-mobile-side-bar');
    var $MobileSideBar = $('.mobile-side-bar');
    var $MobileSideBarBg = $('.mobile-side-bar-bg');
    var $html = $('html');

    if ($btn.hasClass('active')) {
        $btn.removeClass('active');
        $MobileSideBar.removeClass('active');
        $MobileSideBarBg.removeClass('active');
        $html.removeClass('mobile-side-bar-actived');
        
    }
    else {
        $btn.addClass('active');
        $MobileSideBar.addClass('active');
        $MobileSideBarBg.addClass('active');
        $html.addClass('mobile-side-bar-actived');
        
    }
}

function MobileSideBar__init() {
    $('.btn-toggle-mobile-side-bar,.mobile-side-bar-bg').click
    (MobileSideBar__toggle);

    $('.mobile-side-bar .menu-box-2 ul > li ').click(function(e) {
       if( $(this).hasClass('active')) {
        $(this).removeClass('active');
       }
       else {
        $(this).addClass('active');
        $(this).siblings('.active').find('li.active').removeClass('active');
        $(this).siblings('.active').removeClass('active');
       }
       e.stopPropagation();
    });
}

$(function() {
    MobileSideBar__init();
    $('.btn-toggle-mobile-side-bar').click();
    $('.mobile-side-bar .menu-box-2>ul > li:last-child ').click();

});





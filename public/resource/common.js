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

    $('.slider > .side-bars > div').click(function() {
        var $clickedBtn = $(this);
        var $slider = $clickedBtn.parent().parent();
        var $current = $slider.find('>.slides > div.active');
        var $post;

        var isLeft = $clickedBtn.index() == 0;
        if (isLeft) {
            $post = $current.prev();
            if($post.length == 0) {
                $post = $slider.find('>.slides > div:last-child');
              }
        }
        else {
            $post = $current.next();
            if($post.length == 0) {
                $post = $slider.find('>.slides > div:first-child');
              }
        }
    
        $current.removeClass('active');
        $post.addClass('active');
    });
    function auto() {
        $('.slider > .side-bars > div:last-child').click();
    }
    setInterval(auto,5000);
});

$(function(){
    $('form').mouseenter(function() {
        $(this).find('input').focus();
    })
    
    
    $('form').mouseleave(function() {
        $(this).find('input').blur();
        $(this).find('input').val('');
    })
});



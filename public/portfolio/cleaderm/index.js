$(function() {
    setTimeout(function() {
        $('img').addClass('active');
    }, 100);
});

$(function() {
    $(".bg-slider > .bg-side-bars > div").click(function () {
        var $clickBtn = $(this);
        var $slider = $(this).parent().parent();
        var $act = $slider.find(">.bg-slides > div.active");
        var $next;
    
        var goLeft = $(this).index() == 0;
        if ( goLeft ) {
            $next = $act.prev();
            if ($next.length == 0) {
                $next = $slider.find(">.bg-slides > div:last-child");
            }
        } else {
            $next = $act.next();
            if ($next.length == 0) {
                $next = $slider.find(">.bg-slides > div:first-child");
            }
        }
    
        $act.removeClass("active");
        $next.addClass("active");
    });
    function auto(){
        $('.bg-slider > .bg-side-bars > div:last-child').click();
    }
    setInterval(auto, 8000);
});
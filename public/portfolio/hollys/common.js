console.clear();
function Round1__init() {
    var $circle1 = $('.discover-round-1');

    var count = 25;

    for ( var i = 1; i <= count; i++ ) {
        var $section = $('<section></section>');
        var deg = (360 / count) * i;
        $section.css('transform', 'translateX(-50%) rotate(' + deg + 'deg)');
        $circle1.append($section);
    }
}

$(function() {
    Round1__init();
});
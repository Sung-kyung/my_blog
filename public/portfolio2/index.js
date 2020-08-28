function Owl__init() {
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:100,
        nav:false,
        dots:false,
        autoWidth:true,
        items:3
    });
}

function Slider1__itemClick(el) {
    var $el = $(el);
    var url = $el.attr('data-img-url');
    var link = $el.attr('data-link-url');
    var no = $el.attr('data-no');
    
    $('.img-box-1').empty().append("<a href='" + link + "' target='_blank'><img src='" + url + "'></a>");
    $('.txt-box-1').empty().append("<h1>" + no + "</h1>");
}


function border_1(){
    $('.menu-1  .item').click(function(){
        var $border = $('.menu-1  .item.border');

        $border.removeClass('border');
        $(this).addClass('border');
        
    })
}


$(function() {
    Owl__init();
    Slider1__itemClick();
    border_1();
    $('.item-1').click();
});

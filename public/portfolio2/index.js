function Owl__init() {
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:3
            }
        }
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
$(function() {
    Owl__init();
    Slider1__itemClick(el);
});

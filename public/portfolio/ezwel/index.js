function TopBar__init() {
    $('.top-bar > .menu-box-1 > ul').mouseenter(function() {
       var $this = $(this);
        var $parent = $this.parent();
        var $bgActive = $parent.find('> div.bg-box');
        
        $bgActive.addClass('active');
        $this.addClass('active');
    });
       $('.top-bar > .menu-box-1 > ul').mouseleave(function() {
       var $this = $(this);
        var $parent = $this.parent();
        var $bgActive = $parent.find('> div.bg-box');
        
        $bgActive.removeClass('active');
        $this.removeClass('active');
    }); 
}
$(function() {
    TopBar__init();
});
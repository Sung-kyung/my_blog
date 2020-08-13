$(function () {
    var myFullpage = new fullpage("#fullpage", {
        verticalCentered: false,
        navigation: false,
        navigationPosition: "right",
        scrollingSpeed: 800
    });
});


function ShowSideBar__init() {
    $(".side-btn").click(function () {
        var $this = $(this);
        var $sideBar = $(".side-bar");
        var hasClass = $this.hasClass("active");

        if (hasClass) {
            $this.removeClass("active");
            $sideBar.removeClass("active");
        } else {
            $this.addClass("active");
            $sideBar.addClass("active");
        }
    });
}
$(function() {
   ShowSideBar__init(); 
});
  //메인 슬라이더
  function Slider__init() {
    $(".slider-div").slick({
      slide: "div", //슬라이드 되어야 할 태그 ex) div, li
      infinite: true, //무한 반복 옵션
      slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
      slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
      speed: 800, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
      arrows: true, // 옆으로 이동하는 화살표 표시 여부
      dots: true, //크롤바 아래 점으로 페이지네이션 여부
      autoplay: true, // 자동 스크롤 사용 여부
      autoplaySpeed: 3000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
      draggable: true,
      prevArrow:".prev",
      nextArrow:".next",
    });
  }

//menu hover  
function HoverBar__init() {
    $(".hover-bar-nav .hover-bar-menu").mouseenter(function () {
      var $this = $(this);
  
      var menuWidth = $this.width();
      var menuPadding = ($this.innerWidth() - $this.width()) / 2;
      var menuPosition = $this.position().left;
  
      var $hoverBar = $(".hover-bar");
  
      $hoverBar.css("width", menuWidth + "px");
      $hoverBar.css("left", menuPosition + menuPadding + "px");
    });
  
    $(".hover-bar-nav").mouseleave(function () {
      var $this = $(this);
      var $hoverBar = $(".hover-bar");
      $hoverBar.css("width", "");
      $hoverBar.css("left", "");
    });
  }
  function Scroll__init() {
    var $topBar = $('.top-bar');

    var windowHeight = $(window).height();
  
    $(window).resize(function () {
      windowHeight = $(window).height();
    });
  
    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
  
      if (scrollTop > windowHeight - 500) {
        $topBar.addClass('white');
      } else {
        $topBar.removeClass('white');
      }
    });
  }
  
  $(function(){
    Slider__init();
    HoverBar__init();
    Scroll__init();
  });
  
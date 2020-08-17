<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hyundai Card</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- 아울 캐러셀 불러오기 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
    <script src="https://alvarotrigo.com/fullPage/fullpage.js"></script>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/MotionPathPlugin.min.js"></script>
    <script>
        gsap.registerPlugin(MotionPathPlugin);
    </script>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css">
    <link rel="stylesheet" href="/portfolio/card/index.css">
    <script src="/portfolio/card/index.js"></script>
</head>

<body>
    <!--탑바-->
    <div class="main-top-bar flex flex-jc-sb">
        <div class="logo flex flex-1-0-0">
            <a href="#" class="flex flex-ai-c"><img
                    src="https://sung-kyung.github.io/img1/pf/card/card_image/logo_header%20(1).png" alt=""></a>
        </div>
        <div class="side-btn flex">
            <span class="flex flex-ai-c"><i class="fas fa-bars"></i></span>
        </div>
    </div>
    <!--사이드바-->
    <div class="side-bar">
        <ul>
            <li><a href="#">CARD</a></li>
            <li><a href="#">MY ACCOUNT</a></li>
            <li><a href="#">BENEFIT</a></li>
            <li><a href="#">FINANCE</a></li>
            <li><a href="#">CULTURE & LIFE</a></li>
            <li><a href="#">SERVICE</a></li>
        </ul>
        <div class="side-btn close-btn"><span><i class="fas fa-times"></i></span></div>
    </div>
    <!--풀페이지 시작 -->
    <div id="fullpage">
        <!--메인페이지-->
        <div class="section section-1">
            <div class="main">
                <div class="side-text">HYUNDAI CARD</div>
                <div class="main-box">
                    <div class="box-1 relative">
                        <div class="bg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 490.1">
                                <path class="path"
                                    d="M555.5,196.5v464s1,11,14,12h283s11-1,11-12v-464s-1-12-13-12h-279S557.5,182.5,555.5,196.5Z"
                                    transform="translate(-554.5 -183.4)" />
                            </svg>
                        </div>
                    </div>
                    <div class="main-text">
                        <span>세상에 없던<br>놀라운 카드</span>
                    </div>
                    <div class="show-card"><img
                            src="https://sung-kyung.github.io/img1/pf/card/card_image/card_ZRO_h.png" alt=""></div>
                </div>

            </div>
        </div>
        <!--제로 에디션-->
        <div class="section section-2" style="position:relative;">
            <div class="zero-box-1">
                <div class="box">
                    <img src="https://sung-kyung.github.io/img1/pf/card/card_image/card-trans.png" alt="">
                </div>
            </div>
            <div class="zero-text-box">
                <div class="z-text-1">ZERO</div>
                <div class="z-text-2">EDITION</div>
            </div>
            <div class="circle">
                <img class="circle-1" src="https://sung-kyung.github.io/img1/pf/card/card_image/circle-1.png" alt="">
                <img class="circle-2" src="https://sung-kyung.github.io/img1/pf/card/card_image/circle-2.png" alt="">
                <div class="y-circle y-circle-1"></div>
                <div class="y-circle y-circle-2"></div>
                <div class="y-circle y-circle-3"></div>
                <div class="y-circle y-circle-4"></div>
            </div>
            <div class="zero-sub-box">
                <div class="sub-text sub-text-w sub-1">
                    <p class="sub-title">제한 없이 누구나 쉽게</p>
                    <p class="sub-con">전월 실적 걱정은 그만<br>누구나 혜택 제공 횟수와 한도 제한 없이</p>
                </div>
                <div class="sub-text sub-text-w sub-2">
                    <p class="sub-title">제한 없이 누구나 쉽게</p>
                    <p class="sub-con">전월 실적 걱정은 그만<br>누구나 혜택 제공 횟수와 한도 제한 없이</p>
                </div>
                <div class="sub-text sub-text-b sub-3">
                    <p class="sub-title">제한 없이 누구나 쉽게</p>
                    <p class="sub-con">전월 실적 걱정은 그만<br>누구나 혜택 제공 횟수와 한도 제한 없이</p>
                </div>
                <div class="sub-text sub-text-b sub-4">
                    <p class="sub-title">제한 없이 누구나 쉽게</p>
                    <p class="sub-con">전월 실적 걱정은 그만<br>누구나 혜택 제공 횟수와 한도 제한 없이</p>
                </div>
            </div>
        </div>

        <!--디지털 러버-->
        <div class="section section-3">
            <div class="digital">
                <div class="digi-text-box">
                    <div class="digi-title">나만의 우주를 여행하는</div>
                    <div class="digi-title digi-title-bold">디지털 여행자를 위한 특별한 디자인.</div>
                    <div class="digi-title">&nbsp; 그 네가지 이야기를 소개합니다.</div>
                    <div class="go-to-benefit">
                        <p class="go-btn">혜택 보러가기</p>
                        <a href="#"><img src="https://sung-kyung.github.io/img1/pf/card/card_image/go.png" alt=""></a>
                    </div>
                </div>
                <div class="digi-content">
                    <div class="slide-digi-box carousel-2" data-carousel-1-autoplay-status="Y">
                        <div class="owl-carousel owl-theme">
                            <div onclick="Carousel2__itemClicked(this);" class="item slide-digi active"
                                style="background-image:url(https://sung-kyung.github.io/img1/pf/card/card_image/90059145_3383433341671068_9076477566851743744_o.jpg);">
                            </div>
                            <div onclick="Carousel2__itemClicked(this);" class="item slide-digi"
                                style="background-image:url(https://sung-kyung.github.io/img1/pf/card/card_image/90189834_3383433108337758_1704240703770460160_o.jpg);">
                            </div>
                            <div onclick="Carousel2__itemClicked(this);" class="item slide-digi"
                                style="background-image:url(https://sung-kyung.github.io/img1/pf/card/card_image/90246372_3383432808337788_604448833673363456_o.jpg);">
                            </div>
                            <div onclick="Carousel2__itemClicked(this);" class="item slide-digi"
                                style="background-image:url(https://sung-kyung.github.io/img1/pf/card/card_image/90377355_3383433215004414_7847199051324850176_o.jpg);">
                            </div>
                        </div>
                    </div>
                    <div class="card-slide-box">
                        <div class="carousel-1 my-slider-1">
                            <div class="owl-carousel owl-theme">
                                <div class="item">
                                    <img src="https://sung-kyung.github.io/img1/pf/card/card_image/card_ONOF_h.png"
                                        alt="">
                                    <div class="digi-title">Jean Crush</div>
                                    <div class="digi-con">디지털 러버의 우주선에서 떨어져 나온 조각, Jean Crush<br>
                                        우주선에서 떨어진 메탈 조각을 상상하여 그려낸 카드</div>
                                </div>
                                <div class="item">
                                    <img src="https://sung-kyung.github.io/img1/pf/card/card_image/img_card_rustyrobot.png"
                                        alt="">
                                    <div class="digi-title">Rusty Robot</div>
                                    <div class="digi-con">디지털 러버의 오랜 로봇 친구, Rusty Robot<br>
                                        부식되어 빛바랜 낡은 로봇을 모티브로 한 카드</div>
                                </div>
                                <div class="item">
                                    <img src="https://sung-kyung.github.io/img1/pf/card/card_image/img_card_foggyplanet.png"
                                        alt="">
                                    <div class="digi-title">Foggy Planet</div>
                                    <div class="digi-con">디지털 러버의 우주선으로 통하는 카드키, Foggy Planet<br>
                                        우주선 안으로 안내해 줄 디지털 러버의 ID, 카드키를 모티브로 한 카드</div>
                                </div>
                                <div class="item">
                                    <img src="https://sung-kyung.github.io/img1/pf/card/card_image/img_card_starbomb.png"
                                        alt="">
                                    <div class="digi-title">Star Bomb</div>
                                    <div class="digi-con">우주선 창 너머로 보이는 별의 강렬한 폭발, Star Bomb<br>
                                        행성이 폭발할 때 발산하는 에너지를 강렬한 컬러 대비로 표현한 카드</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--m/x edition-->
        <div class="section section-4">
            <div class="mx-edition">
                <div class="video-box">
                    <video src="https://sung-kyung.github.io/img1/pf/card/card_image/hyundai_card.mp4"
                        autoplay="autoplay" loop="loop" muted="muted"></video>
                </div>
                <div class="mx-text-box row">
                    <div class="mx-text cell-right">
                        <div class="mx-title">Colorful, Wonderful</div>
                        <div class="mx-sub">The world is changing, and I can't stand it.<br>Enjoy a various benefits
                            with Hyundai Card</div>
                    </div>
                    <div class="line"></div>
                </div>
            </div>
        </div>
        <!--dive-->
        <div class="section section-5">
            <div class="dive">
                <div class="bg-white">
                    <div class="dive-logo">
                        <img src="https://sung-kyung.github.io/img1/pf/card/card_image/animation.gif" alt="">
                        <div class="dive-text">
                            <h2>힙스터들의 필수 앱</h2>
                            <p>Get word from Hyundai Card as soon as possible.<br>With the dive app, you can be a
                                hipster
                                from today.</p>
                        </div>
                    </div>
                    <div class="diving">
                        <img src="https://sung-kyung.github.io/img1/pf/card/card_image/diving-sm.png?dummy12312312" alt="">
                    </div>
                </div>
                <div class="bg-black">
                    <div class="phone">
                        <img class="phone-img"
                            src="https://sung-kyung.github.io/img1/pf/card/card_image/phone-shadow.png?dummy123123"
                            alt="no">
                        <img class="app" src="https://sung-kyung.github.io/img1/pf/card/card_image/unnamed.png" alt="">
                    </div>
                    <img class="hand-img"
                        src="https://sung-kyung.github.io/img1/pf/card/card_image/hand-1.png?dummy123123123123"
                        alt="no">
                    <div class="download">
                        <div class="download-text">지금 바로 다운로드 받으세요</div>
                        <div class="google">
                            <div>GOOGLE PLAY</div>
                        </div>
                        <div class="apple">
                            <div>APPLE STORE</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">페이지 6</div>
    </div>
</body>

</html>
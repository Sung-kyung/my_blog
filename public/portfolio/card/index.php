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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.19/lodash.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css">
    <link rel="stylesheet" href="/portfolio/card/index.css">
    <script src="/portfolio/card/index.js"></script>
</head>

<body>
    <!--탑바-->
    <div class="main-top-bar flex flex-jc-sb">
        <div class="logo flex flex-1-0-0">
            <a href="#" class="flex flex-ai-c"><img
                    src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/logo_header%20(1).png" alt="">
                <img src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/logo_header.png" alt=""
                    class="logo-white">
            </a>
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
    <!--홈버튼-->
    <div id="top" class="top-btn" style="cursor:pointer;">
        <a href="#anchor1">
            <img src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/top-btn-2.png?dummy123123" alt="">
        </a>
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
                            src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/card_ZRO_h.png" alt=""></div>
                </div>

            </div>
        </div>
        <!--제로 에디션-->
        <div class="section section-2" style="position:relative;">
            <div class="zero-box-1">
                <div class="box">
                    <img src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/card-trans.png" alt="">
                </div>
            </div>
            <div class="zero-text-box">
                <div class="z-text-1">ZERO</div>
                <div class="z-text-2">EDITION</div>
            </div>
            <div class="circle">
                <img class="circle-1" src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/circle-1.png" alt="">
                <img class="circle-2" src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/circle-2.png" alt="">
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
                        <a href="#"><img src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/go.png" alt=""></a>
                    </div>
                </div>
                <div class="digi-content">
                    <div class="slide-digi-box carousel-2" data-carousel-1-autoplay-status="Y">
                        <div class="owl-carousel owl-theme">
                            <div onclick="Carousel2__itemClicked(this);" class="item slide-digi active"
                                style="background-image:url(https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/90059145_3383433341671068_9076477566851743744_o.jpg);">
                            </div>
                            <div onclick="Carousel2__itemClicked(this);" class="item slide-digi"
                                style="background-image:url(https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/90189834_3383433108337758_1704240703770460160_o.jpg);">
                            </div>
                            <div onclick="Carousel2__itemClicked(this);" class="item slide-digi"
                                style="background-image:url(https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/90246372_3383432808337788_604448833673363456_o.jpg);">
                            </div>
                            <div onclick="Carousel2__itemClicked(this);" class="item slide-digi"
                                style="background-image:url(https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/90377355_3383433215004414_7847199051324850176_o.jpg);">
                            </div>
                        </div>
                    </div>
                    <div class="card-slide-box">
                        <div class="carousel-1 my-slider-1">
                            <div class="owl-carousel owl-theme">
                                <div class="item">
                                    <img src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/card_ONOF_h.png"
                                        alt="">
                                    <div class="digi-title">Jean Crush</div>
                                    <div class="digi-con">디지털 러버의 우주선에서 떨어져 나온 조각, Jean Crush<br>
                                        우주선에서 떨어진 메탈 조각을 상상하여 그려낸 카드</div>
                                </div>
                                <div class="item">
                                    <img src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/img_card_rustyrobot.png"
                                        alt="">
                                    <div class="digi-title">Rusty Robot</div>
                                    <div class="digi-con">디지털 러버의 오랜 로봇 친구, Rusty Robot<br>
                                        부식되어 빛바랜 낡은 로봇을 모티브로 한 카드</div>
                                </div>
                                <div class="item">
                                    <img src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/img_card_foggyplanet.png"
                                        alt="">
                                    <div class="digi-title">Foggy Planet</div>
                                    <div class="digi-con">디지털 러버의 우주선으로 통하는 카드키, Foggy Planet<br>
                                        우주선 안으로 안내해 줄 디지털 러버의 ID, 카드키를 모티브로 한 카드</div>
                                </div>
                                <div class="item">
                                    <img src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/img_card_starbomb.png"
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
                    <video src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/hyundai_card.mp4"
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
                        <img src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/animation.gif" alt="">
                        <div class="dive-text">
                            <h2>힙스터들의 필수 앱</h2>
                            <p>Get word from Hyundai Card as soon as possible.<br>With the dive app, you can be a
                                hipster
                                from today.</p>
                        </div>
                    </div>
                    <div class="diving">
                        <img src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/diving-sm.png?dummy12312312"
                            alt="">
                    </div>
                    <img class="water" src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/water.gif?dummy123"
                        alt="">
                </div>
                <div class="bg-black">
                    <div class="phone">
                        <img class="phone-img"
                            src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/phone-shadow.png?dummy123123"
                            alt="no">
                        <img class="app" src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/unnamed.png" alt="">
                    </div>
                    <img class="hand-img"
                        src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/hand-1.png?dummy123123123123"
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
                    <div class="black-box"></div>

                </div>
            </div>
        </div>
        <div class="section section-6">
            <div class="dive-box-1 row">
                <div class="dive-card-box cell">
                    <ul class="row">
                        <li class="dive-1 cell"><img
                                src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/dive-4.png" alt="no"
                                srcset=""></li>
                        <li class="dive-2 cell"><img
                                src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/dive-5.png" alt="no"
                                srcset=""></li>
                        <li class="dive-3 cell"><img
                                src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/dive-6.png" alt="no"
                                srcset=""></li>
                    </ul>
                </div>
                <div class="dive-textbox-1 cell">
                    <h1>매일매일 취향을 업데이트</h1>
                    <ul>
                        <li>#가성비갑_여행법</li>
                        <li>#한정판_스니커즈</li>
                        <li>#요즘_뜨는_맛집</li>
                        <li>#소장각_플레이리스트</li>
                        <li>#힙스터_필수템</li>
                    </ul>
                </div>
            </div>
            <div class="dive-box-2 row">
                <div class="dive-textbox-2 cell">
                    <h1>현대카드의 컬쳐소식을<br>가장 빠르게</h1>
                    <ul>
                        <li>#라이브러리_무료입장</li>
                        <li>#이태원_핫한_전시_예매</li>
                        <li>#스페셜토크_단독예매</li>
                        <li>#고메위크_완전정복</li>
                        <li>#넥스트_슈퍼콘서트</li>
                    </ul>
                </div>
                <div class="dive-card-box-2 cell">
                    <ul class="row">
                        <li class="dive-4 cell"><img
                                src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/dive-3.png" alt="no"
                                srcset=""></li>
                        <li class="dive-5 cell"><img
                                src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/dive-2.png" alt="no"
                                srcset=""></li>
                        <li class="dive-6 cell"><img
                                src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/dive-1.png" alt="no"
                                srcset=""></li>
                    </ul>
                </div>
            </div>
            <div class="mousemove-effect-1-el mousemove-effect-1-el-1" data-mousemove-effect1-hor-res="0.01"
                data-mousemove-effect1-ver-res="0.1">
                <img src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/flower-left.png" alt="">
            </div>

            <div class="mousemove-effect-1-el mousemove-effect-1-el-2" data-mousemove-effect1-hor-res="0.01"
                data-mousemove-effect1-ver-res="0.1">
                <img src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/flower-right.png" alt="">
            </div>
        </div>
        <!--footer-->
        <div class="section footer fp-auto-height">
            <div class="foot">
                <nav class="foot-text-box">
                    <ul class="about flex">
                        <li class="flex">About</li>
                        <ul class="flex flex-ai-c">
                            <li class="flex"><a href="#">회사소개</a></li>
                            <li class="flex"><a href="#">지배구조</a></li>
                            <li class="flex"><a href="#">고객권리안내문</a></li>
                            <li class="flex"><a href="#">전자민원접수</a></li>
                            <li class="flex"><a href="#">이용안내</a></li>
                            <li class="flex"><a href="#">투자정보</a></li>
                        </ul>
                    </ul>
                    <ul class="service flex">
                        <li class="flex">Service</li>
                        <ul class="flex flex-ai-c">
                            <li class="flex"><a href="#">이용약관</a></li>
                            <li class="flex"><a href="#">상품공시실</a></li>
                            <li class="flex"><a href="#">사이버신문고</a></li>
                            <li class="flex"><a href="#">개인정보처리방침</a></li>
                            <li class="flex"><a href="#">고객권리안내문</a></li>
                            <li class="flex"><a href="#">위치기반서비스</a></li>
                        </ul>
                    </ul>
                    <ul class="contact flex">
                        <li class="flex">Contact</li>
                        <ul class="flex flex-ai-c">
                            <li class="flex"><a href="#">고객센터 1577-6000</a></li>
                            <li class="flex"><a href="#">(해외 82-2-3015-9000)</a></li>
                            <li class="flex"><a href="#">카드신청 1577-0100 </a></li>
                            <li class="flex"><a href="#">금융신청 1577-6100</a></li>
                            <li class="flex"><a href="#">도난분실신고 1577-6200</a></li>
                        </ul>
                    </ul>
                    <div class="address flex flex-jc-c">서울시 영등포구 의사당대로 3 현대캐피탈빌딩 대표이사 정태영 사업자 등록번호 213-86-15419</div>
                    <div class="copyright flex flex-jc-c">© HYUNDAI CARD Corp.</div>
                    <div class="foot-img flex flex-jc-c"><img src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/card/card_image/logo_footer.png" alt=""></div>
                </nav>
            </div>
        </div>
    </div>
</body>

</html>
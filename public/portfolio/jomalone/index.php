<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jo Malone</title>
    <!-- 스토어.js 불러오기 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/store2/2.11.1/store2.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- swiper 불러오기 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.5/js/swiper.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.5/css/swiper.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">
    <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="/portfolio/jomalone/index.css">
    <script src="/portfolio/jomalone/index.js"></script>
</head>

<body>
    <!--팝업-->
    <div class="pop-up">
        <div class="box">
            <div class="close-btn"><i class="fas fa-times"></i></div>
            <img src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/welcome-2.png" alt="">
            <div class="wel">WELCOME GIFT</div>
            <div class="line"></div>
            <div class="pop-text">
                <p>온라인 부티크 첫 구매 고객께<br>바디 앤 핸드워시(15ml) & 바디 크림 (15ml)<br>2종을 선물로 드립니다.<br>결제 시 쿠폰 코드 창에 WELCOME을 입력하세요.
                </p>
            </div>
            <div class="more"><a href="#">자세히보기</a></div>
            <div class="not-open">
                <a class="btn-close-for-a-while">
                    <i class="fas fa-window-close"></i>
                    오늘 하루 이 창을 띄우지 않음
                </a>
            </div>
        </div>

    </div>
    <!--메인-->
    <div class="page-1 main">
        <video src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/videoplayback.mp4" autoplay="autoplay" loop="loop"
            muted="muted"></video>
    </div>

    <div class="top-bar flex flex-jc-sb flex-ai-c">
        <div class="flex logo"><img src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/logo.png" alt="" class="up">
        <img src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/logo-2.png" alt="" class="down"></div>
        <div class="flex menu-ico">
            <div class="btn-toggle-mobile-side-bar">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>

    <!--사이드메뉴-->
    <nav class="side-menu visible-md-up">
        <ul class="menu-box-1 row con">
            <li class="cell"><a href="#">베스트 셀러</a>
                <ul>
                    <li><a href="#">베스트셀러</a></li>
                    <li><a href="#">코롱</a></li>
                    <li><a href="#">온라인 익스클루시브</a></li>
                    <li><a href="#">리틀 럭셔리</a></li>
                </ul>
            </li>
            <li class="cell"><a href="#">프레그런스</a>
                <ul>
                    <li><a href="#">시트러스</a></li>
                    <li><a href="#">프루티</a></li>
                    <li><a href="#">라이트 플로랄</a></li>
                    <li><a href="#">플로랄</a></li>
                    <li><a href="#">스파이시</a></li>
                    <li><a href="#">우디</a></li>
                    <li><a href="#">코롱 인텐스</a></li>
                    <li><a href="#">프레그런스 전체보기</a></li>
                    <li><a href="#">프레그런스 파인더</a></li>
                    <li><a href="#">센트 페어링</a></li>
                </ul>
            </li>
            <li class="cell"><a href="#">배스 앤 바디</a>
                <ul>
                    <li><a href="#">배스 앤 샤워</a></li>
                    <li><a href="#">바디 케어</a></li>
                    <li><a href="#">헤어 케어</a></li>
                    <li><a href="#">잉글리쉬 민트 앤 진저 립밤</a></li>
                </ul>
            </li>
            <li class="cell"><a href="#">홈 컬렉션</a>
                <ul>
                    <li><a href="#">캔들</a></li>
                    <li><a href="#">디퓨저</a></li>
                    <li><a href="#">디자인 에디션</a></li>
                    <li><a href="#">센트 투 고</a></li>
                    <li><a href="#">린넨 스프레이</a></li>
                    <li><a href="#">룸 스프레이</a></li>
                </ul>
            </li>
            <li class="cell"><a href="#">선물 제안</a>
                <ul>
                    <li><a href="#">기프트 파인더</a></li>
                    <li><a href="#">프레그런스 파인더</a></li>
                    <li><a href="#">공간을 위한 선물</a></li>
                    <li><a href="#">브라이덜 웨딩 컬렉션</a></li>
                </ul>
            </li>
        </ul>
    </nav>

    <div class="side-menu-top-icon">
        <ul class="row">
            <li class="cell"><a href="#"><img src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/seach.png" alt=""></a>
            </li>
            <li class="cell"><a href="#"><img src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/login.png" alt=""></a>
            </li>
            <li class="cell"><a href="#"><img src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/wish.png" alt=""></a>
            </li>
            <li class="cell"><a href="#"><img src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/cart.png" alt=""></a>
            </li>
        </ul>
    </div>

    <div class="side-menu-top-icon-2">
        <ul class="row">
            <li class="cell"><a href="#"><img src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/seach.png" alt=""></a>
            </li>
            <li class="cell"><a href="#"><img src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/login.png" alt=""></a>
            </li>
            <li class="cell"><a href="#"><img src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/wish.png" alt=""></a>
            </li>
            <li class="cell"><a href="#"><img src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/cart.png" alt=""></a>
            </li>
        </ul>
    </div>

    <nav class="side-menu-2 visible-sm-down">
        <ul>
            <li><a href="#">베스트셀러</a>
                <ul>
                    <li><a href="#">베스트셀러</a></li>
                    <li><a href="#">코롱</a></li>
                    <li><a href="#">온라인 익스클루시브</a></li>
                    <li><a href="#">리틀 럭셔리</a></li>
                </ul>
            </li>
            <li><a href="#">프레그런스</a>
                <ul>
                    <li><a href="#">시트러스</a></li>
                    <li><a href="#">프루티</a></li>
                    <li><a href="#">라이트 플로랄</a></li>
                    <li><a href="#">플로랄</a></li>
                    <li><a href="#">스파이시</a></li>
                    <li><a href="#">우디</a></li>
                    <li><a href="#">코롱 인텐스</a></li>
                    <li><a href="#">프레그런스 전체보기</a></li>
                    <li><a href="#">프레그런스 파인더</a></li>
                    <li><a href="#">센트 페어링</a></li>
                </ul>
            </li>
            <li><a href="#">배스 앤 바디</a>
                <ul>
                    <li><a href="#">배스 앤 샤워</a></li>
                    <li><a href="#">바디 케어</a></li>
                    <li><a href="#">헤어 케어</a></li>
                    <li><a href="#">잉글리쉬 민트 앤 진저 립밤</a></li>
                </ul>
            </li>
            <li><a href="#">홈 컬렉션</a>
                <ul>
                    <li><a href="#">캔들</a></li>
                    <li><a href="#">디퓨저</a></li>
                    <li><a href="#">디자인 에디션</a></li>
                    <li><a href="#">센트 투 고</a></li>
                    <li><a href="#">린넨 스프레이</a></li>
                    <li><a href="#">룸 스프레이</a></li>
                </ul>
            </li>
            <li><a href="#">선물 제안</a>
                <ul>
                    <li><a href="#">기프트 파인더</a></li>
                    <li><a href="#">프레그런스 파인더</a></li>
                    <li><a href="#">공간을 위한 선물</a></li>
                    <li><a href="#">브라이덜 웨딩 컬렉션</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    <!--신제품-->
    <div class="page-2 new-product">
        <div class="con page-2-box">
            <div class="new-text-box active-on-visible active-only-one" data-active-on-visible-diff-y="-100">
                <div class="ancient">Ancient Airborne Garden</div>
                <div class="description">고대 공중정원의 아름다운 전설에 영감을 받은<br>
                    조 말론 런던의 새로운 컬렉션, 로스트 인 원더.</div>
                <a href="#" class="more-view">MORE VIEW &nbsp;&nbsp;> </a>
            </div>
            <div class="swiper-container">
                <div class="swiper-wrapper slides">
                    <div class="swiper-slide"
                        style="background-image:url(https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/slide-1.jpg);">
                    </div>
                    <div class="swiper-slide"
                        style="background-image:url(https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/slide-3.jpg?dummy123123);">
                    </div>
                </div>
            </div>
            
            <div class="swiper-container-1">
                <div class="swiper-wrapper slides-2">
                    <div class="swiper-slide"
                        style="background-image:url(https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/slide-1-res.jpg?dummy123123);">
                    </div>
                    <div class="swiper-slide"
                        style="background-image:url(https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/slide-2-res.jpg?dummy123123123);">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--베스트셀러-->

    <div class="page-3 best-seller">
        <div class="page-3-box">
            <div class="best">Best Seller</div>
            <div class="best-sub">조 말론 런던 온라인 부티크에서<br>
                가장 사랑 받는 제품을 만나보세요</div>
        </div>
        <div class="swiper-container-2">
            <div class="swiper-wrapper">
                <div class="swiper-slide"
                    style="background-image:url(https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/best1.png);">
                    <div class="slide-text-box">
                        <p class="best-name">Blackberry & Bay Cologne</p>
                        <p class="best-cont">이제 막 수확한 월계수 잎과 브램블리 우드의 신선함에 진하고 톡 쏘는 느낌의 블랙베리 과즙</p>
                    </div>
                </div>
                <div class="swiper-slide"
                    style="background-image:url(https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/best1.png);">
                    <div class="slide-text-box">
                        <p class="best-name">English Pear & Freesia Cologne</p>
                        <p class="best-cont">은은하면서 신선하고 감미로운 향. <br>부드럽고 감미로운 향</p>
                    </div>
                </div>
                <div class="swiper-slide"
                    style="background-image:url(https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/best1.png);">
                    <div class="slide-text-box">
                        <p class="best-name">Wood Sage & Sea Salt Cologne</p>
                        <p class="best-cont">부서지는 파도 씨 솔트와 물보라로 신선해진 공기 가파르고 거친 절벽에서 느낄 수 있는 미네랄 향기</p>
                    </div>
                </div>
                <div class="swiper-slide"
                    style="background-image:url(https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/lime2.png?dummy123123);">
                    <div class="slide-text-box">
                        <p class="best-name">Lime Basil & Mandarin Cologne</p>
                        <p class="best-cont">조 말론 런던의 시그니처 향.카리브해의 산들바람에서 실려온 듯한 라임향에 톡 쏘는 바질과 백리향</p>
                    </div>
                </div>
                <div class="swiper-slide"
                    style="background-image:url(https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/best1.png);">
                    <div class="slide-text-box">
                        <p class="best-name">Peony & Blush Suede Cologne</p>
                        <p class="best-cont">화려하게 핀 작약에 붉은 사과의 향기로운 과즙과 자스민, 장미, 카네이션, 블러쉬 스웨이드</p>
                    </div>
                </div>
                <div class="swiper-slide"
                    style="background-image:url(https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/best1.png);">
                    <div class="slide-text-box">
                        <p class="best-name">Nectarine Blossom & <br>Honey Cologne</p>
                        <p class="best-cont">아카시아 꿀 향기 속에 과즙이 풍부한 천도 복숭아, 복숭아, 카씨스, 여린 봄 꽃</p>
                    </div>
                </div>
                <div class="swiper-slide"
                    style="background-image:url(https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/black.png);">
                    <div class="slide-text-box">
                        <p class="best-name">Blackberry & Bay Cologne Duo</p>
                        <p class="best-cont">조 말론에서 가장 사랑받는 코롱과 미니어처 코롱을 리미티드 타운하우스 틴 케이스에 담아 선보입니다.</p>
                    </div>
                </div>
                <div class="swiper-slide"
                    style="background-image:url(https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/trio.png);">
                    <div class="slide-text-box">
                        <p class="best-name">Little Luxuries Trio 2</p>
                        <p class="best-cont">조 말론 런던에서 가장 사랑 받는 세 가지 향으로 구성된 세트입니다.</p>
                    </div>
                </div>
                <div class="swiper-slide"
                    style="background-image:url(https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/daisy.png);">
                    <div class="slide-text-box">
                        <p class="best-name">Peony & Blush Suede<br> Cologne - Daisy Leaf</p>
                        <p class="best-cont">조 말론 런던에서 특별한 레이스를 코롱 보틀과 캔들에 담은 아름다운 웨딩 컬렉션을 선보입니다.</p>
                    </div>
                </div>
                <div class="swiper-slide"
                    style="background-image:url(https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/best1.png);">
                    <div class="slide-text-box">
                        <p class="best-name">Peony & Blush Suede Cologne</p>
                        <p class="best-cont">화려하게 핀 작약에 붉은 사과의 향기로운 과즙과 자스민, 장미, 카네이션, 블러쉬 스웨이드</p>
                    </div>
                </div>
                <div class="swiper-slide"
                    style="background-image:url(https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/best1.png);">
                    <div class="slide-text-box">
                        <p class="best-name">Peony & Blush Suede Cologne</p>
                        <p class="best-cont">화려하게 핀 작약에 붉은 사과의 향기로운 과즙과 자스민, 장미, 카네이션, 블러쉬 스웨이드</p>
                    </div>
                </div>
                <div class="swiper-slide"
                    style="background-image:url(https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/best1.png);">
                    <div class="slide-text-box">
                        <p class="best-name">Peony & Blush Suede Cologne</p>
                        <p class="best-cont">화려하게 핀 작약에 붉은 사과의 향기로운 과즙과 자스민, 장미, 카네이션, 블러쉬 스웨이드</p>
                    </div>
                </div>
                <div class="swiper-slide"
                    style="background-image:url(https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/best1.png);">
                    <div class="slide-text-box">
                        <p class="best-name">Peony & Blush Suede Cologne</p>
                        <p class="best-cont">화려하게 핀 작약에 붉은 사과의 향기로운 과즙과 자스민, 장미, 카네이션, 블러쉬 스웨이드</p>
                    </div>
                </div>
            </div>

            <div class="swiper-scrollbar"></div>
        </div>
        <div class="bg">
        </div>
    </div>
    <!--포장서비스-->
    <div class="page-4 packaging-service">
        <div class="con row">
            <div class="pack-box cell">
                <div class="pack-video">
                    <video src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/packaging.mp4" autoplay="autoplay"
                        loop="loop" muted="muted"></video>
                </div>
                <div class="rec"></div>
            </div>
            <div class="pack-text cell active-on-visible active-only-one" data-active-on-visible-diff-y="-20%">
                <p class="pack-title">Packaging Service</p>
                <p class="pack-title-ko">시그니처 포장 서비스</p>
                <p class="pack-cont">제품 구매 시 시그니처 박스에<br>
                    정성스럽게 포장해 드립니다.<br>
                    크림색 박스와 검은 리본이 주는<br>
                    행복함을 느껴보세요.
                </p>
                <p class="pack-notice">*일부 품목은 포장 서비스에서 제외됩니다.</p>
                <div class="feel">Feel your happiness</div>
            </div>
        </div>
    </div>
    <!--센트페어링-->
    <div class="page-5 scent-pairing">
        <div class="scent-bg"
            style="background-image:url(https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/scent.jpg?dummy123123);"></div>
        <div class="scent-black-bg"></div>
        <div class="scent-text-box active-on-visible active-only-one" data-active-on-visible-diff-y="-2%">
            <p class="scent-title">Scent Pairing</p>
            <p class="scent-sub">Tailor Your Scent</p>
            <p class="scent-sub-ko">당신은 향의 맞춤 재단사입니다.</p>
            <div class="scent-cont">
                <p>각기 다른 향들을 더하여 당신을 표현하는 향기를 찾아보세요.</p>
                <p>당신만의 컬렉션을 만들어 딱 맞는 향의 조합을 찾도록 실험해보세요.</p>
                <p>서로 다른 향을 조합하여 당신을 표현하는 향으로 만들어보세요.</p>
            </div>
            <div class="scent-btn">
                <img src="https://cdn.jsdelivr.net/gh/Sung-kyung/img1/pf/jomalone/button.png" alt="">
                <span>Going to Combine</span>
            </div>
        </div>

    </div>
    <!--footer-->
    <footer>
        <div class="foot con">
            <div class="foot-menu-box">
                <ul class="row">
                    <li class="cell"><a href="#">이용약관 및 개인정보 처리방침</a>
                        <ul>
                            <li><a href="#">이용약관</a></li>
                            <li><a href="#">개인정보 처리방침</a></li>
                        </ul>
                    </li>
                    <li class="cell"><a href="#">고객관리지원팀</a>
                        <ul>
                            <li><a href="#">배송정보</a></li>
                            <li><a href="#">이메일 문의</a></li>
                        </ul>
                    </li>
                    <li class="cell"><a href="#">법인 판매</a></li>
                    <li class="cell"><a href="#">매장 안내</a></li>
                </ul>
            </div>
            <div class="foot-info">
                <ul class="row">
                    <li class="cell">서울시 강남구 강남대로 382 메리츠타워</li>
                    <li class="cell">사업자등록번호: 211-81-71889</li>
                    <li class="cell">통신판매업신고번호: 강남-15737호</li>
                    <li class="cell">사업자정보조회</li>
                </ul>
                <ul class="row">
                    <li class="cell">고객관리지원팀: 02-6971-3228</li>
                    <li class="cell">user_support_kr@jomalone.com</li>
                    <li class="cell">호스팅서비스 사업자: ㈜엘지유플러스</li>
                    <li class="cell">이엘씨에이한국(유) 대표 SLAVIN PAUL</li>
                </ul>
            </div>
            <div class="copyright">COPYRIGHT ©JO MALONE LONDON 2020 ALL RIGHTS RESERVED</div>
        </div>
    </footer>

</body>

</html>
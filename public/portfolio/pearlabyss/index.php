<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>펄어비스</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- Slick 불러오기 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="/portfolio/pearlabyss/index.css">
    <script src="/portfolio/pearlabyss/index.js"></script>
</head>

<body>
    <!--탑바 md-up -->
    <div class="top-bar visible-md-up">
        <div class="top-border">
            <div class="top-inner con flex flex-jc-sb">
                <div class="logo-box flex"></div>
                <div class="menu-box-1 hover-bar-box flex">
                    <ul class="hover-bar-nav flex flex-ai-c">
                        <li class="hover-bar-menu"><span>소개</span>
                            <ul class="sub-menu">
                                <li><a href="#">펄어비스 소개</a></li>
                                <li><a href="#">연구소</a></li>
                            </ul>
                        </li>
                        <li class="hover-bar-menu"><span>게임</span>
                            <ul class="sub-menu">
                                <li><a href="#">검은사막</a></li>
                                <li><a href="#">검은사막 모바일</a></li>
                                <li><a href="#">섀도우 아레나</a></li>
                                <li><a href="#">붉은사막</a></li>
                                <li><a href="#">도깨비</a></li>
                                <li><a href="#">플랜 8</a></li>
                            </ul>
                        </li>
                        <li class="hover-bar-menu"><span>미디어</span>
                            <ul class="sub-menu">
                                <li><a href="#">보도자료</a></li>
                                <li><a href="#">미디어 행사</a></li>
                            </ul>
                        </li>
                        <li class="hover-bar-menu"><span>문화</span>
                            <ul class="sub-menu">
                                <li><a href="#">기업문화</a></li>
                                <li><a href="#">복지</a></li>
                                <li><a href="#">펄어비스인</a></li>
                                <li><a href="#">펄어비스 소식</a></li>
                            </ul>
                        </li>
                        <li class="hover-bar-menu"><span>채용</span>
                            <ul class="sub-menu">
                                <li><a href="#">채용소개</a></li>
                                <li><a href="#">지원하기</a></li>
                            </ul>
                        </li>
                        <li class="hover-bar-menu"><span>투자정보</span>
                            <ul class="sub-menu">
                                <li><a href="#">기업지배구조</a></li>
                                <li><a href="#">주가정보</a></li>
                                <li><a href="#">재무정보</a></li>
                                <li><a href="#">공시·공고</a></li>
                                <li><a href="#">IR 자료</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div class="hover-bar"></div>
                </div>
                <div class="lang flex flex-ai-c">
                    <span>KOR</span><span>ENG</span>
                </div>
            </div>
        </div>
    </div>
    <!--탑바 반응형 sm-down -->
    <div class="top-bar-2 visible-sm-down flex flex-jc-sb flex-ai-c" >
        <div class="menu-bar-icon flex">1</div>
        <div class="logo-box-2 flex"></div>
        <div class="lang-2 flex"></div>
    </div>
    <!--메인 슬라이더-->
    <div class="bn-bar">
        <div class="slider-div">
            <div class="bn1 bn">
                <h3 class="title">최상의 게임 경험을 전달하기 위해<br>기술을 연구합니다</h3>
            </div>
            <div class="bn2 bn">
            </div>
            <div class="bn3 bn">
                <h3 class="title">새롭고, 흥미롭고,잊지 못할 모험을 선사하는<br>자시혁신적인 게임 회사, 펄어비스</h3>
            </div>
        </div>
        <div class="button con">
            <div class="prev"></div>
            <div class="next"></div>
        </div>
    </div>
    <!--news-->
    <div class="news-box">
        <h3 class="con">NEWS</h3>
        <ul class="row con">
            <li class="cell">
                <div class="news-text-box">
                    <h4>“달콤살벌 공포 파티” 펄어비스 검은사막, 할로윈 이벤트</h4>
                    <p>2020.10.14</p>
                    <p class="news-cont">펄어비스(대표 정경인)가 오픈월드 MMORPG ‘검은사막’의 배경을 할로윈 분위기로 새롭게 단장하고 이벤트를 오늘(14일)부터 시작한다.
                    </p>
                </div>
            </li>
            <li class="cell">
                <div class="news-text-box">
                    <h4>검은사막, 일본 인기 게임 순위 1위 등극</h4>
                    <p>2020.10.12</p>
                    <p class="news-cont">펄어비스(대표 정경인)의 오픈월드 MMORPG 검은사막이 일본 게임 전문 사이트 'OlineGamer(온라인 게이머)'의 온라인 게임 인기
                        순위 1위를 차지했다. </p>
                </div>
            </li>
            <li class="cell">
                <div class="news-text-box" id="text-last">
                    <h4>가을 분위기 물씬 ‘펄어비스 검은사막’ 단풍놀이 시작</h4>
                    <p>2020.10.07</p>
                    <p class="news-cont">펄어비스(대표 정경인)가 ‘검은사막’의 게임 내 배경을 단풍으로 물들여 가을 분위기를 한껏 내고 ‘나랑 같이 단풍놀이 갈래?’ 스크린샷
                        이벤트를 오늘(7일)부터 시작한다.</p>
                </div>
            </li>
        </ul>
    </div>
    <!--메인메뉴 -->
    <div class="main-menu-wrap con active-on-visible" data-active-on-visible-diff-y="-200">
        <ul class="row">
            <li class="cell">
                <a href="#" class="block">
                    <div class="img">
                        <img src="https://sung-kyung.github.io/img1/pf/pearlabyss/main_category_company.jpg" alt="">
                    </div>
                    <div class="main-text-box">
                        <h4>펄어비스</h4>
                        <div class="line"></div>
                        <div class="main-cont">우리의 비전과 가치</div>
                    </div>
                </a>
            </li>
            <li class="cell">
                <a href="#" class="block">
                    <div class="img">
                        <img src="https://sung-kyung.github.io/img1/pf/pearlabyss/main_category_lab.jpg" alt="">
                    </div>
                    <div class="main-text-box">
                        <h4>연구소</h4>
                        <div class="line"></div>
                        <div class="main-cont">한계를 뛰어넘는 곳</div>
                    </div>

                </a>
            </li>
            <li class="cell">
                <a href="#" class="block">
                    <div class="img">
                        <img src="https://sung-kyung.github.io/img1/pf/pearlabyss/main_category_culture.jpg" alt="">
                    </div>
                    <div class="main-text-box">
                        <h4>문화</h4>
                        <div class="line"></div>
                        <div class="main-cont">파괴적인 창조자</div>
                    </div>
                </a>
            </li>
            <li class="cell">
                <a href="#" class="block">
                    <div class="img">
                        <img src="https://sung-kyung.github.io/img1/pf/pearlabyss/main_category_in.jpg" alt="">
                    </div>
                    <div class="main-text-box">
                        <h4>펄어비스인</h4>
                        <div class="line"></div>
                        <div class="main-cont">꿈을 실현하는 사람들</div>
                    </div>
                </a>
            </li>
            <li class="cell">
                <a href="#" class="block">
                    <div class="img">
                        <img src="https://sung-kyung.github.io/img1/pf/pearlabyss/main_category_news.jpg" alt="">
                    </div>
                    <div class="main-text-box">
                        <h4>소식</h4>
                        <div class="line"></div>
                        <div class="main-cont">생생한 펄어비스 이야기</div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
    <!--lastest-->
    <div class="lastest-wrap con active-on-visible" data-active-on-visible-diff-y="-200">
        <ul class="row">
            <li class="cell">
                <a href="#" class="block">
                    <div class="img-2"> <img
                            src="https://sung-kyung.github.io/img1/pf/pearlabyss/7X84M5DOWHTJUTM120201013100135639.400x225.jpg"
                            alt=""></div>
                    <div class="lastest-text-box">
                        <p class="last-text-1">펄어비스인</p>
                        <p class="last-text-2">링 위의 경기처럼, 매 순간 최선을 다하는 게임 개발자 이야기</p>
                    </div>
                </a>
            </li>
            <li class="cell">
                <a href="#" class="block">
                    <div class="img-2"> <img
                            src="https://sung-kyung.github.io/img1/pf/pearlabyss/SAS8EZ822ISHH58320200909065518833.400x225.jpg"
                            alt=""></div>
                    <div class="lastest-text-box">
                        <p class="last-text-1">펄어비스 소식</p>
                        <p class="last-text-2">펄어비스의 사회공헌 활동</p>
                    </div>
                </a>
            </li>
            <li class="cell">
                <a href="#" class="block">
                    <div class="img-2"> <img
                            src="https://sung-kyung.github.io/img1/pf/pearlabyss/O7ANE2O61LKJX4RS20200908133249843.400x225.jpg"
                            alt=""></div>
                    <div class="lastest-text-box">
                        <p class="last-text-1">펄어비스 소식</p>
                        <p class="last-text-2">펄어비스 신규입사자를 위한 웰컴키트</p>
                    </div>
                </a>
            </li>
            <li class="cell">
                <a href="#" class="block">
                    <div class="img-2"> <img
                            src="https://sung-kyung.github.io/img1/pf/pearlabyss/SLWSRXQKFTN1WVVH20200908134418474.400x225.jpg"
                            alt=""></div>
                    <div class="lastest-text-box">
                        <p class="last-text-1">펄어비스인</p>
                        <p class="last-text-2">생산직 근로자에서 게임 개발자로, 서른 한 살에 시작된 인생 2막</p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
    <!--footer-->
    <footer>
        <div class="foot-wrap">
            <ul class="foot-menu-1 row">
                <li class="cell"><a href="#">소개</a>
                    <ul>
                        <li><a href="#">펄어비스 소개</a></li>
                        <li><a href="#">연구소</a></li>

                    </ul>
                </li>
                <li class="cell"><a href="#">게임</a>
                    <ul>
                        <li><a href="#">검은사막</a></li>
                        <li><a href="#">검은사막 모바일</a></li>
                        <li><a href="#">섀도우 아레나</a></li>
                        <li><a href="#">붉은사막</a></li>
                        <li><a href="#">도깨비</a></li>
                        <li><a href="#">플랜 8</a></li>
                    </ul>
                </li>
                <li class="cell"><a href="#">미디어</a>
                    <ul>
                        <li><a href="#">보도자료</a></li>
                        <li><a href="#">미디어 행사</a></li>
                    </ul>
                </li>
                <li class="cell"><a href="#">문화</a>
                    <ul>
                        <li><a href="#">기업문화</a></li>
                        <li><a href="#">복지</a></li>
                        <li><a href="#">펄어비스인</a></li>
                        <li><a href="#">펄어비스 소식</a></li>
                    </ul>
                </li>
                <li class="cell"><a href="#">채용</a>
                    <ul>
                        <li><a href="#">채용소개</a></li>
                        <li><a href="#">지원하기</a><i></i></li>
                    </ul>
                </li>
                <li class="cell"><a href="#">투자정보</a>
                    <ul>
                        <li><a href="#">기업지배구조</a></li>
                        <li><a href="#">주가정보</a></li>
                        <li><a href="#">재무정보</a></li>
                        <li><a href="#">공시·공고</a></li>
                        <li><a href="#">IR 자료</a></li>
                    </ul>
                </li>
            </ul>
            <ul class="foot-menu-2 row">
                <li class="cell"><a href="#">광고/제휴 문의</a></li>
                <li class="cell"><a href="#">기업윤리 신고센터</a></li>
                <li class="cell"><a href="#">개인정보 처리방침</a></li>
                <li class="cell"><a href="#">펄어비스 스토어</a></li>
                <li class="cell"><a href="#">게임 고객센터</a></li>
            </ul>
        </div>
    </footer>
    <div class="copy-wrap flex flex-ai-c flex-jc-c">
        <div class="foot-logo flex">
            <img src="https://sung-kyung.github.io/img1/pf/pearlabyss/cm_bi_black.svg" alt="">
        </div>
        <div class="copy-right flex">Copyright © Pearl Abyss Corp. All Rights Reserved</div>
        <div class="sns-wrap">
            <ul class="row">
                <li class="cell"><a href="#"><i class="icon-1"></i></a></li>
                <li class="cell"><a href="#"><i class="icon-2"></i></a></li>
                <li class="cell"><a href="#"><i class="icon-3"></i></a></li>
            </ul>
        </div>
    </div>
</body>

</html>
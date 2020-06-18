<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>블로그</title>
    <link rel="icon" href="./resource/img/favicon.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css">
    <link rel="stylesheet" href="/resource/common.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="/resource/common.js"></script>
    <link rel="stylesheet" href="/resource/index.css">
</head>

<body>
    <div class="mobile-top-bar visible-sm-down flex flex-1-0-0">
        <div class="flex flex-1-0-0"> <a href="#" onclick="return false;" class="btn-toggle-mobile-side-bar flex-as-c">
                <div></div>
                <div></div>
                <div></div>
            </a>
        </div>

        <div class="mobile-side-logo flex flex-as-c"><a href="#" class="flex">BIBLOG</a></div>

        <div class="flex flex-1-0-0"></div>
    </div>
    <div class="mobile-side-bar-bg visible-sm-down"></div>

    <div class="mobile-side-bar visible-sm-down">
        <nav class="menu-box-2">
            <ul>
                <li><a href="#" class="block">Home</a></li>
                <li><a href="#" class="block">Article</a>
                    <ul>
                        <li><a href="#">Notice</a></li>
                        <li><a href="#">Free</a></li>
                    </ul>
                </li>
                <li><a href="#" class="block">Artwork</a>
                <li><a href="#" class="block">About Me</a></li>
                <li><a href="#" class="block">Daliy</a>
                <li><a href="#" class="block">SNS</a>
                    <ul>
                        <li><a href="#">Instagram</a>
                            <ul>
                                <li><a href="#">Private</a></li>
                                <li><a href="#">Public</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Github</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>

    <div class="top-bar visible-md-up con">
        <div class="con height-100p">
            <nav class="menu-box-1 height-100p">
                <ul class="height-100p flex">
                    <li class="flex-1-0-0 flex"><a href="/" class="flex flex-1-0-0 flex-jc-c flex-ai-end">Home</a></li>
                    <li class="flex-1-0-0 flex"><a href="/list.php"  class="flex flex-1-0-0 flex-jc-c flex-ai-end">Articles</a></li>
                    <li class="flex-1-0-0 flex"><a href="/list.php"  class="flex flex-1-0-0 flex-jc-c flex-ai-end">Artwork</a></li>
                    <li class="flex-1-0-0 flex"><a href="/" class="flex flex-1-0-0 flex-jc-c flex-ai-end"><img src="/resource/img/logo_1.png" alt=""></a></li>
                    <li class=" flex-1-0-0 flex"><a href="/aboutMe.php" class="flex flex-1-0-0 flex-jc-c flex-ai-end">About Me</a></li>
                    <li class=" flex-1-0-0 flex"><a href="/aboutMe.php" class="flex flex-1-0-0 flex-jc-c flex-ai-end">Daliy</a></li>
                    <li class="flex-1-0-0 flex">
                        <a href="#" class="flex flex-1-0-0 flex-jc-c flex-ai-end">SNS</a>
                        <ul>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Github</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>

    </div>
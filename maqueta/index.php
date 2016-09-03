<?php

    //require 'inc/token-validation.php';

?>



<!doctype html>

<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->

<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->

<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->

<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->

    <head>

        <meta charset="utf-8">

        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

        <title>pok</title>

        <meta name="description" content="">

        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">

        <link rel="apple-touch-icon" href="apple-touch-icon.png">



        <link rel="stylesheet" href="css/normalize.css">

        <link href='https://fonts.googleapis.com/css?family=Lato:700' rel='stylesheet' type='text/css'>

        <link rel="stylesheet" href="css/main.css">

        <link rel="stylesheet" href="css/mq.css">

        <link rel="stylesheet" href="js/fancybox/source/jquery.fancybox.css?v=2.1.5" type="text/css" media="screen" />

        <meta property="og:title" content="" />

        <meta property="og:description" content="Cambia tu foto de perfil en Facebook y WhatsApp ¡ Y actívate por el cambio !" />

        <meta property="og:site_name" content=""/>

        <meta property="og:type" content="article"/>

        <meta property="fb:app_id" content="447297352129313" />

        <meta property="og:locale" content="es_ES" />

        <meta property="og:image:width" content="400" />

        <meta property="og:image:height" content="400" />

        <meta property="article:publisher" content="" />



        <!-- fuentes -->

        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet">

        <!-- fuentes -->

        <?php

            $dominio = "https://datapola.tk";

            if(isset($_GET["id"])){

            ?>

            <meta property="og:image" content='<?php echo $dominio.$_GET["id"];?>' />

            <?php

            }else{

            ?>

            <meta property="og:image" content="https://datapola.tk/img/fondo2.jpg" />

            <?php

            }

        ?>



        <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>

    </head>

    <body>





        <div class="loader" style="display:none">

            <div class="loader_center"></div>

        </div>



        <div class="wrapper">

            <div class="content_video visible_not">

                <canvas id="can" height="" width=""></canvas>

                <canvas id="can_hidden" height="700" width="1024" style="position:relative; z-index:3; border:none;"></canvas>

                <input type="button" value="Play" id="play" class="play" style="text-indent:-9999px; font:18px Helvetica; cursor:pointer;">

                <!--video src="demo/Gav_green.mp4"  style="display:none"></video-->

                <div id="profile-thumb" style="z-index: 2;position: absolute;left: 33%;-webkit-filter: saturate(53%) brightness(98%) contrast(43%) blur(0.8px);  filter:saturate(53%) brightness(98%) contrast(43%) blur(0.8px); width: 19%; transform: rotate(2deg); "></div>

                <video id="vid" autoplay="autoplay" poster="img/bg.png" style="" title="vid_1" webkit-playsinline>

                    <source src="eh5v.files/html5video/ARMANDO_BRONCA.m4v" type="video/mp4" />

                    <source src="eh5v.files/html5video/ARMANDO_BRONCA.webm" type="video/webm" />

                    <source src="eh5v.files/html5video/ARMANDO_BRONCA.ogv" type="video/ogg" />

                    <source src="eh5v.files/html5video/ARMANDO_BRONCA.mp4" />

                </video>

                <!--div class="slider" id="slider"

                     onmousedown="mouseDown()" onmousemove="mouseXY()"

                     ontouchstart="touchXY()" ontouchmove="touchXY()">

                    <div class="bar"></div>

                    <div id="knob" class="knob">

                        <br />

                        Alpha

                    </div>

                </div-->

            </div>

            <?php include 'content.php'; ?>

        </div>









        <footer>

            <div class="box_share mobile">

                <a href="javascript:void(0);" class="legal"></a>

                <a href="" class="facebook"></a>

                <a href="" class="twitter"></a>

                <a href="" class="youtube"></a>

                <a href="" class="instagram"></a>

            </div>

            <img src="img/logo.png" alt="" class="logo">

            <a href="mailto:datapola@poker.com" class="mail">datapola@poker.com</a>

            <a href="terms.php" target="_blank" class="terminos_mobile mobile">términos y condiciones</a>

            <div class="box_share desktop">

                <a href="terms.php" target="_blank" class="legal">LEGAL</a>

                <a href="" class="facebook"></a>

                <a href="" class="twitter"></a>

                <a href="" class="youtube"></a>

                <a href="" class="instagram"></a>

                <a href="javascript:void(0);" class="sound"></a>

                <a href="javascript:void(0);" id="fs-doc-button" class="full_2"></a>

                <a href="javascript:void(0);" id="fs-exit-doc-button" class="full"></a>

            </div>

            <img src="img/poker_amigo_mobile.png" class="mobile" alt="">

        </footer>

















        <div id="fb-root"></div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>

        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>

        <!--<script src="http://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.4.0/fabric.min.js"></script>-->

        <script src="js/fabric/dist/fabric.min.js"></script>

        <!-- Add fancyBox -->



        <script type="text/javascript" src="js/fancybox/source/jquery.fancybox.pack.js?v=2.1.5"></script>



        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->

        <script type="text/javascript" src="js/fb_functions.js"></script>

        <!--script type="text/javascript" src="js/general.js"></script-->



        <script>

            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=

            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;

            e=o.createElement(i);r=o.getElementsByTagName(i)[0];

            e.src='//www.google-analytics.com/analytics.js';

            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));

            ga('create','UA-XXXXX-X','auto');ga('send','pageview');

        </script>

    </body>

</html>


<!doctype html>

<?php require_once 'mobile/Mobile_Detect.php'; ?>

<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->

<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->

<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->

<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->

    <head>

        <meta charset="utf-8">

        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

        <title>DataPola</title>

        <meta name="description" content="">

        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">

        <link rel="apple-touch-icon" sizes="57x57" href="icons/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="icons/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="icons/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="icons/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="icons/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="icons/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="icons/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="icons/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192"  href="icons/android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="icons/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png">
        <link rel="manifest" href="icons/manifest.json">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="icons/ms-icon-144x144.png">
        
        <meta name="theme-color" content="#ffffff">



        <link rel="stylesheet" href="css/normalize.css">
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">

        <link rel="stylesheet" href="css/main.css">

        <link rel="stylesheet" href="css/mq.css">

        <link rel="stylesheet" href="js/fancybox/source/jquery.fancybox.css?v=2.1.5" type="text/css" media="screen" />

        <meta property="og:description" content="Tú también puedes reportar a tus amigos en DATAPOLA." />

        <meta property="fb:app_id" content="1660712804256395" />

        <?php

            $dominio = "https://datapola.com";

            if(isset($_GET["id"])){

                $bodyref = 'refered';

            ?>
            <meta property="og:type" content="datapola:amigo"/>
            <meta property="datapola:amigo" content="<?php echo $_GET["id"]; ?>" /> 
            
            <meta property="og:image:secure_url" content='<?php echo $dominio."/subidas/".$_GET["id"].".jpg";?>' />
            <meta property="og:image" content='<?php echo $dominio."/subidas/".$_GET["id"].".jpg";?>' />
            <meta property="og:image:width" content="600" />
            <meta property="og:image:height" content="600" />
            
            <meta property="og:url" content='<?php echo $dominio."/index.php?id=".$_GET["id"]; ?>' />
            <meta property="datapola:amigo" content="<?php echo $_GET["id"]; ?>" />


            <?php

            }else{

            ?>

            <meta property="og:image" content="https://datapola.com/img/datapola.jpg" />
            <meta property="og:title" content="DATAPOLA" />
            <?php

            }

        ?>

        <!-- fuentes -->

        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet">

        <!-- fuentes -->

        <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>

    </head>

    <body <?php if (isset($bodyref)){echo 'class="'.$bodyref.'"';}?>>

        <!--Loader-->
        <div class="loader" style="width: 100%;height: 100%;background-color: black;z-index: 10000;display:block">

            <div class="loader_center"></div>

        </div>



        <div class="wrapper">

            <?php require 'content_leo.php'; ?>

        </div><!--end of wrapper-->

        <footer>

            <div class="box_share mobile">

                <a href="javascript:void(0);" class="legal"></a>

                <a href="https://www.facebook.com/CervezaPoker/?fref=ts" target="_blank"  class="facebook"></a>

                <a href="https://twitter.com/cervezapoker?lang=es" class="twitter"></a>

                <a href="https://www.youtube.com/user/CervezaPokerColombia" target="_blank" class="youtube"></a>

                <a href="https://www.instagram.com/cervezapoker/"  target="_blank" class="instagram"></a>

            </div>

            <img src="img/logo.png" alt="" class="logo">

            <a href="mailto:datapola@poker.com" class="mail">datapola@poker.com</a>

            <a href="https://datapola.com/terminos.php" target="_blank" class="terminos_desktop desktop">TÉRMINOS Y CONDICIONES</a>


            <div class="amigos_une_amigos">
                <img src="img/poker_amigo_desktop.png" alt="">
            </div>


            <div class="box_share desktop">

                <a href="javascript:void(0);" target="_blank" class="legal">LEGAL</a>

                <a href="https://www.facebook.com/CervezaPoker/?fref=ts" target="_blank" class="facebook"></a>

                <a href="https://twitter.com/cervezapoker?lang=es" target="_blank" class="twitter"></a>

                <a href="https://www.youtube.com/user/CervezaPokerColombia" target="_blank" class="youtube"></a>

                <a href="https://www.instagram.com/cervezapoker/"  target="_blank" class="instagram"></a>

                <a href="javascript:void(0);" class="sound"></a>

                <a href="javascript:void(0);" id="fs-doc-button" class="full_2"></a>

                <a href="javascript:void(0);" id="fs-exit-doc-button" class="full"></a>

            </div>

            <img src="img/poker_amigo_mobile.png" class="mobile" alt="">

        </footer>

        <div id="fb-root"></div>


        <script type = "text/javascript" src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        
        <script type = "text/javascript" src = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js"></script>

        <!--<script src="http://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.4.0/fabric.min.js"></script>-->

        <script src="js/fabric/dist/fabric.min.js"></script>

        <!-- Add fancyBox -->



        <script type="text/javascript" src="js/fancybox/source/jquery.fancybox.pack.js?v=2.1.5"></script>
        <script type="text/javascript" src="js/iphone-inline-video.browser.js"></script>


        <script type="text/javascript" src="js/jquery-cookie.js"></script>
        <script>
            $( document ).ready(function() {

                var w = $('body').width();
                var h = $('body').height();

                var wv = 1920;
                var hv = 1080;

                var scale;
                function resize_fn(){
                    scale = Math.min(Number(h-150)/hv, w/wv);
                    $('#contenedor_videos').css({
                        transform: "scale(" + scale + ")"
                    });
                    var widthcont = Number($('#contenedor_videos').width()*scale)/2;
                    console.log(widthcont);
                    $('#contenedor_videos').css({
                        left:  "calc( 50% - " + widthcont + "px)"
                    });
                    
                    return scale
                }
                $( window ).resize(function() {
                    w = $('body').width();
                    h = $('body').height();
                    console.log(resize_fn());
                });
                
                setTimeout(function(){ resize_fn();}, 2000);
                console.log("Listo scalador");
            });
        </script>



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

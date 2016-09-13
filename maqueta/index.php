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

                $bodyref = 'refered';

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

    <body <?php if (isset($bodyref)){echo 'class="'.$bodyref.'"';}?>>


        <div class="loader" style="display:none">

            <div class="loader_center"></div>

        </div>



        <div class="wrapper">

            <div class="content_ingresar">

                <p>Si usted es mayor de edad, ingrese su fecha de nacimiento.</p>

                <div class="border_top"></div>

                <form id="ageGateForm" name="ageGateForm">

                    <input type="hidden" name="requiredAge" id="requiredAge" value="18">

                    <div class="border_gradient">

                        <input type="text" id="birthDay" placeholder="DÍA" class="date">

                    </div>

                    <div class="border_gradient">

                        <input type="text" id="birthMonth" placeholder="MES" class="date">

                    </div>

                    <div class="border_gradient">

                        <input type="text" id="birthYear" placeholder="AÑO" class="date">

                    </div>

                    <input type="submit" class="ingresar" value="INGRESAR">

                </form>

            </div> <!--end of agegate-->

            <?php include 'content.php'; ?>

        </div><!--end of wrapper-->

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
            
            <a href="https://www.cervezapoker.com/sm_agegate?destination=" target="_blank" class="terminos_desktop desktop">TÉRMINOS Y CONDICIONES</a>


            <div class="amigos_une_amigos">
                <img src="img/poker_amigo_desktop.png" alt="">
            </div>


            <a href="https://www.cervezapoker.com/sm_agegate?destination=" target="_blank" class="terminos_mobile mobile">términos y condiciones</a>

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
        <script type="text/javascript" src="js/jquery-cookie.js"></script>
        <script type="text/javascript" src="js/fb_functions.js"></script>

        <!--script type="text/javascript" src="js/general.js"></script-->

        <script>
            $(document).ready(function() {
                $( 'a.legal' ).hover(function() {
                        $( '.amigos_une_amigos' ).animate({'bottom': '-30px', 'opacity': '1'}, 400);
                      }, function() {
                        $( '.amigos_une_amigos' ).animate({'bottom': '-330px', 'opacity': '0'}, 400);
                });
            });     

        </script>

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


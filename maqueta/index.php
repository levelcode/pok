<!doctype html>

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

        <link rel="apple-touch-icon" href="apple-touch-icon.png">



        <link rel="stylesheet" href="css/normalize.css">

        <link href='https://fonts.googleapis.com/css?family=Lato:700' rel='stylesheet' type='text/css'>

        <link rel="stylesheet" href="css/main.css">

        <link rel="stylesheet" href="css/mq.css">

        <link rel="stylesheet" href="js/fancybox/source/jquery.fancybox.css?v=2.1.5" type="text/css" media="screen" />

        <meta property="og:description" content="Que todo el mundo sepa que usted le promete polas de cumpleaños a sus amigos y nunca les paga." />

        <meta property="og:type" content="datapola:amigo"/>

        <meta property="fb:app_id" content="1660712804256395" />

        <meta property="og:image:width" content="400" />

        <meta property="og:image:height" content="400" />

        <meta property="datapola:amigo" content="<?php echo $_GET["id"]; ?>" /> 

        <?php

            $dominio = "https://datapola.com";

            if(isset($_GET["id"])){

                $bodyref = 'refered';

            ?>

            <meta property="og:image" content='<?php echo $dominio."/subidas/".$_GET["id"]."_p.jpg";?>' />
            <meta property="og:url" content='<?php echo $dominio."/index.php?id=".$_GET["id"]; ?>' />
            <meta property="datapola:amigo" content="<?php echo $_GET["id"]; ?>" />


            <?php

            }else{

            ?>

            <meta property="og:image" content="https://datapola.com/img/fondo2.jpg" />

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
            
            <!--div class="content_terms">
                <div class="drop_bg"></div><!--ghost bg-->
                <!--div class="box_terms">
                    <a href="javscript:void(0);" class="close">x</a>
                    <h2>Publicar en Facebook</h2>
                    <div class="border_top_yellow"></div>
                    <form>
                        <label>Edita el texto de tu publicacion</label>
                        <input type="text" id="publication" placeholder="Escribe el mensaje que acompañará la publicación">
                    </form>
                    <button id="push_public" class="boton fb_boton"></button>

                    <p id="retorno_pub"></p>
                </div>
            </div-->

            <?php include 'content.php'; ?>

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

            <a href="https://www.cervezapoker.com/sm_agegate?destination=" target="_blank" class="terminos_desktop desktop">TÉRMINOS Y CONDICIONES</a>


            <div class="amigos_une_amigos">
                <img src="img/poker_amigo_desktop.png" alt="">
            </div>


            <a href="https://www.cervezapoker.com/politica-de-proteccion-de-datos" target="_blank" class="terminos_mobile mobile">términos y condiciones</a>

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

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>

        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>

        <!--<script src="http://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.4.0/fabric.min.js"></script>-->

        <script src="js/fabric/dist/fabric.min.js"></script>

        <!-- Add fancyBox -->



        <script type="text/javascript" src="js/fancybox/source/jquery.fancybox.pack.js?v=2.1.5"></script>

        <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.6.4/fabric.min.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        

        <script type="text/javascript" src="js/jquery-cookie.js"></script>
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

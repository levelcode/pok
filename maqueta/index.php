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
        $dominio = "http://www.venezuelaquiere.com/personal/uploads/";
        if(isset($_GET["id"])){
        ?>
        <meta property="og:image" content='<?php echo $dominio.$_GET["id"];?>' />
        <?php
        }else{
        ?>
        <meta property="og:image" content="http://www.venezuelaquiere.com/personal/uploads/fondo2.jpg" />
        <?php
        }
        ?>

        <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
    </head>
    <body onload="init()" onmouseup="mouseUp()">

        
        <div class="loader" style="display:none">
            <div class="loader_center"></div>
        </div>





        <div class="wrapper">
            <div class="content_video visible_not">
                <canvas id="can" height="" width="">
                </canvas>
                <input type="button" value="Play" onclick="playPauseVideo()" id="play" class="play" style="font:18px Helvetica">
                <video src="demo/Gav_green.mp4" id="vid" style="display:none"></video>
                <div class="slider" id="slider"
                     onmousedown="mouseDown()" onmousemove="mouseXY()"
                     ontouchstart="touchXY()" ontouchmove="touchXY()">
                    <div class="bar"></div>
                    <div id="knob" class="knob">
                        <br />
                        Alpha
                    </div>
                </div>
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
        <script type="text/javascript">

            (function() {
                var canvas = document.getElementById('can'),
                        context = canvas.getContext('2d');

                // resize the canvas to fill browser window dynamically
                window.addEventListener('resize', resizeCanvas, false);

                function resizeCanvas() {
                        canvas.width = window.innerWidth;
                        canvas.height = window.innerHeight;

                        /**
                         * Your drawings need to be inside this function otherwise they will be reset when 
                         * you resize the browser window and the canvas goes will be cleared.
                         */
                        drawStuff(); 
                }
                resizeCanvas();

                function drawStuff() {
                        // do your drawing stuff here
                }
            })();
            /********* full screen *******************/

            var requestFullscreen = function (ele) {
                if (ele.requestFullscreen) {
                    ele.requestFullscreen();
                } else if (ele.webkitRequestFullscreen) {
                    ele.webkitRequestFullscreen();
                } else if (ele.mozRequestFullScreen) {
                    ele.mozRequestFullScreen();
                } else if (ele.msRequestFullscreen) {
                    ele.msRequestFullscreen();
                } else {
                    console.log('Fullscreen API is not supported.');
                }
            };

            var exitFullscreen = function () {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else {
                    console.log('Fullscreen API is not supported.');
                }
            };

            var fsDocButton = document.getElementById('fs-doc-button');
            var fsExitDocButton = document.getElementById('fs-exit-doc-button');

            fsDocButton.addEventListener('click', function(e) {
                e.preventDefault();
                requestFullscreen(document.documentElement);
                $('.full_2').css('display', 'none');
                $('.full').css('display', 'block');
            });

            fsExitDocButton.addEventListener('click', function(e) {
                e.preventDefault();
                exitFullscreen();
                $('.fullº').css('display', 'none');
                $('.full_2').css('display', 'block');
            });




            /********* full screen *******************/

            /********* sonido *******************/

            $( '.sound' ).click(function() {
                $( this ).toggleClass( 'active' );
            });


            /*************  ancho y alto del canvas **************************/
            
            /*************  ancho y alto del canvas **************************/


            var can, ctx, vid, play, vidTimer, mouseIsDown = 0,
                knobMid, pixData, pixels, knobX = 100;

            function init() {
                vid = document.getElementById("vid");
                play = document.getElementById("play");
                can = document.getElementById("can");
                ctx = can.getContext('2d');
                vid.addEventListener('ended', vidEnd, false);
                vid.addEventListener('play', vidSet, false);
                knobMid = knob.offsetWidth / 2;
                showVid();
            }

            function vidSet() {
                clearTimeout(vidTimer);
                vidTimer = setTimeout(showVid, 25);
            }

            function showVid() {
                ctx.drawImage(vid, 0, 0);
                processImage();
                if (!document.querySelector("video").paused)
                // Repeat 40 times a second to oversample 30 fps video
                    vidTimer = setTimeout(showVid, 25);
            }

            function processImage() {
                // get pixel data for entire canvas
                pixels = ctx.getImageData(0, 0, can.width, can.height);
                pixData = pixels.data;
                // set alpha value using slider
                var alphaVal = parseInt(knobX * 2.55)
                // for each pixel
                for (i = 0; i < can.width * can.height; i++) {
                    // get combined rgb value to determine brightness
                    var rgbVal = pixData[i*4] + pixData[i*4 + 1] + pixData[i*4 + 2];
                    // set alpha value for dark pixels to knob value
                    if (rgbVal < 150)
                        pixData[i*4 + 3] = alphaVal;
                }
                 // put modified data back into image object
                 pixels.data = pixData;
                 // blit modified image object to screen
                 ctx.putImageData(pixels, 0, 0);
            }


            function playPauseVideo() {
                if (play.value == "Play") {
                    vid.play();
                    play.value = "Pause";
                    $('#play').addClass('pause');

                }
                else {
                    vid.pause();
                    play.value = "Play";
                    $('#play').removeClass('pause');
                }
            }

            function vidEnd() {
                    console.log(playing);
                    play.value = "Play";
            }

            function mouseDown() {
                mouseIsDown = 1;
                mouseXY();
            }

            function mouseUp() {
                mouseIsDown = 0;
            }

            function mouseXY(e) {
                if (mouseIsDown) {
                    if (!e)
                        var e = event;
                    var mouseX = e.pageX - slider.offsetLeft;
                    if (mouseX >= 0 && mouseX <= slider.offsetWidth) {
                        setKnob(mouseX);
                    }
                }
            }
            function touchXY(e) {
                if (!e)
                    var e = event;
                // slide, don't scroll
                e.preventDefault();
                var touchX = e.touches[0].pageX - slider.offsetLeft;
                if (touchX >= 0 && touchX <= slider.offsetWidth) {
                    setKnob(touchX);
                }
            }

            function setKnob(x) {
                knobX = x - knobMid;
                knobX = Math.max(knobX, 0);
                knobX = Math.min(knobX, slider.offsetWidth - knob.offsetWidth);
                knob.style.left = knobX;
            }
            </script>
        <script>

        //Globales
        var canvas ='';
        var context ='';
        var imageLoader = '';


        $( window ).load(function() {
            //Facebook
            var url_l = String((window.location != window.parent.location) ? document.referrer: document.location.href);
            var dominio = "venezuelaquiere.com/personal/";
            var movil = false;
            var ios =  iOS();
            var downloadURL = "";



            /**
             * jQuery.browser.mobile (http://detectmobilebrowser.com/)
             *
             * jQuery.browser.mobile will be true if the browser is a mobile device
             *
             **/
            (function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

            movil = jQuery.browser.mobile;


            if(movil==true){
                //window.top.location.href = "https://www.venezuelaquiere.com/personal/"
            }else{
                //
            }
            var ref = document.referrer;
            var fb_valid = false;
            if (ref.match(/^https?:\/\/([^\/]+\.)?facebook\.com(\/|$)/i)) {
              fb_valid = true;
            }

            if(url_l == "https://www."+dominio  || url_l == "https://"+dominio || url_l == "http://"+dominio || url_l == "http://www."+dominio){
                if(fb_valid == false){
                    //afuera de Facebook
                    (function(d, s, id) {
                      var js, fjs = d.getElementsByTagName(s)[0];
                      if (d.getElementById(id)) return;
                      js = d.createElement(s); js.id = id;
                      js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.5&appId=447297352129313";
                      fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));
                }else{
                    //viene de Facebook
                    //window.top.location.href = "https://www.facebook.com/pages/VenezuelaQuiere/836776256420302?sk=app_447297352129313";

                    window.fbAsyncInit = function() {
                        FB.init({
                          appId      : '447297352129313',//app
                          //appId      : '451759441683104',//test
                          
                          xfbml      : true,
                          version    : 'v2.5'
                        });
                        FB.getLoginStatus(function(response) {
                          // Check login status on load, and if the user is
                          // already logged in, go directly to the welcome message.
                          if (response.status == 'connected') {
                            //onLogin(response);
                            FB.login(function(response) {
                              onLogin(response);
                            }, {scope: 'publish_actions'});
                          } else {
                            // Otherwise, show Login dialog first.
                            FB.login(function(response) {
                              onLogin(response);
                            }, {scope: 'publish_actions'});
                          }
                        });
                        FB.Canvas.setSize({ width: 760, height: 1200});
                        // ADD ADDITIONAL FACEBOOK CODE HERE
                    };

                    (function(d, s, id){
                     var js, fjs = d.getElementsByTagName(s)[0];
                     if (d.getElementById(id)) {return;}
                     js = d.createElement(s); js.id = id;
                     js.src = "//connect.facebook.net/en_US/sdk.js";
                     fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));

                    // Place following code after FB.init call.

                    function onLogin(response) {
                      if (response.status == 'connected') {
                        FB.api('/me?fields=first_name', function(data) {
                            var value_t = data.first_name;
                            $("#texto1").val(value_t);
                            canvas.clear();
                            init("img/back_photo.jpg", value_t, 0,78, 'Lato', 60);
                        });
                      }
                    }
                }
            }else{
                //adentro de Facebook
                window.fbAsyncInit = function() {
                    FB.init({
                      appId      : '447297352129313',//app
                      //appId      : '451759441683104',//test
                      xfbml      : true,
                      version    : 'v2.5'
                    });
                    FB.getLoginStatus(function(response) {
                      // Check login status on load, and if the user is
                      // already logged in, go directly to the welcome message.
                      if (response.status == 'connected') {
                        //onLogin(response);
                        FB.login(function(response) {
                          onLogin(response);
                        }, {scope: 'publish_actions'});
                      } else {
                        // Otherwise, show Login dialog first.
                        FB.login(function(response) {
                          onLogin(response);
                        }, {scope: 'publish_actions'});
                      }
                    });
                    FB.Canvas.setSize({ width: 760, height: 1200});
                    // ADD ADDITIONAL FACEBOOK CODE HERE
                };

                (function(d, s, id){
                 var js, fjs = d.getElementsByTagName(s)[0];
                 if (d.getElementById(id)) {return;}
                 js = d.createElement(s); js.id = id;
                 js.src = "//connect.facebook.net/en_US/sdk.js";
                 fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));

                // Place following code after FB.init call.

                function onLogin(response) {
                  if (response.status == 'connected') {
                    FB.api('/me?fields=first_name', function(data) {
                        var value_t = data.first_name;
                        $("#texto1").val(value_t);
                        canvas.clear();
                        init("img/back_photo.jpg", value_t, 0,78, 'Lato', 60);
                    });
                  }
                }
            }
            //******
            //Canvas
            //******
            $("#share_f").hide();
            $("#share_l").hide();
            $("#download").hide();

            var canvas = new fabric.Canvas('c');
            canvas.setWidth(400);
            canvas.setHeight(400);
            //desactivamos seleccion por grupos
            canvas.selection = false;
            // Permitimos el scroll
            canvas.allowTouchScrolling = true;

            //inicializacion
            init("img/back_photo.jpg", "", 0,78, 'Lato', 60);
            function init(url, texto_inicial, x, y, font, size){
                // Creamos el BackGround de la foto
                var rect = new fabric.Rect({
                  left: 0,
                  top: 0,
                  fill: 'white',
                  width: 400,
                  height: 400,
                  selectable: false
                });
                //Se agrega al canvas
                var texto_p = texto_inicial.toUpperCase().substr(0,10);
                var texto1 = new fabric.Text(texto_p, { 
                  fontFamily: font,
                  top: y,
                  evented: false,
                  fontSize: size,
                  stroke : '#FFF',
                  strokeWidth: 2.5,
                  selectable: false
                });
                canvas.add(rect);
                canvas.moveTo(rect, -2);
                insertarFotoDrag(url,false, false,1,"portada");
                canvas.add(texto1);
                canvas.centerObjectH(texto1);
                canvas.moveTo(texto1, 2);
                canvas.renderAll();
            }
            // Redimensionar las imagenes subidas para que no se salgan del canvas
            canvas.on({
                'object:selected': selectedObject,
                'mouse:down': mousedown,
                'mouse:up': mouseup
            });
            function mousedown(e){
                var id = canvas.getObjects().indexOf(e.target);
                if (id == 1) {
                    var portada = canvas.item(2);
                    portada.opacity = 0.5;
                    canvas.renderAll();
                }

            }
            function mouseup(e){
                var id = canvas.getObjects().indexOf(e.target);
                if (id == 1) {
                    var portada = canvas.item(2);
                    //portada.opacity = 1;
                    canvas.renderAll();
                }
            }

            function selectedObject(e) {
                var id = canvas.getObjects().indexOf(e.target);
                var object = canvas.item(id);
                if(id != 1){
                    canvas.moveTo(object, 100);
                    canvas.moveTo(canvas.getObjects('text')[0], 101);
                }else{
                    var portada = canvas.item(2);
                    portada.opacity = 0.5;
                    canvas.renderAll();
                }
                
            }

            //Funcion para insertar los elementos desde una URL 
            function insertarFotoDrag(url, seleccionable, eventos, zindex, nombre)
            {
                fabric.Image.fromURL(url, function(oImg) { 
                    oImg.scale(1);
                    oImg.selectable = seleccionable;
                    oImg.evented = eventos;
                    oImg.set({
                        borderColor: 'red',
                        cornerColor: 'green',
                        cornerSize: 10,
                        transparentCorners: false
                    });
                    canvas.add(oImg);
                    canvas.moveTo(oImg, zindex);
                    canvas.renderAll();
                });
            }
            
            //texto dinamico
            

            $("#texto1").keydown(function(e) {
                setTimeout(function () {
                    var value_t = $("#texto1").val();
                    var texto_t = canvas.getObjects('text')[0];
                    texto_t.text = value_t.toUpperCase().substr(0,10);
                    var texto_w = texto_t.width;
                    var texto_l = texto_t.left;
                    texto_t.left = 180-(texto_w/2);
                    canvas.renderAll();
                    $("#save").show();
                    $("#share_l").hide();
                    $("#download").hide();
                }, 100);
            });

            $('#save').click(function(e){
                var value_t = $("#texto1").val();
                if(value_t != ""){
                    canvas.discardActiveObject();
                    canvas.renderAll(); 
                    var imagen = canvas.toDataURL({
                        format: 'jpeg',
                        multiplier: 1,
                        quality: 10
                    })
                    var file= dataURLtoBlob(imagen);
                    //creamos un form data object
                    var fd = new FormData();
                    fd.append("foto", file);
                    // Envío del canvas via ajax
                    $.ajax({
                       url: "upload_photo.php",
                       type: "POST",
                       data: fd,
                       processData: false,
                       contentType: false,
                    }).done(function(respond){
                        $("#save").hide();
                        
                        $("#share_l").show();
                        $("#download").show();
                        var nombre_t = $("#texto1").val().toLowerCase();
                        downloadURL = "https://www.venezuelaquiere.com/personal/download_pic.php?file="+respond+"&name="+nombre_t+"QuiereCambio";
                        if(ios == true){
                            var modalios = "<div><img src='"+respond+"'> </br><p>Mantén presionado sobre la foto para descargarla</p></div>"
                            /*$.fancybox({
                                width: "600px",
                                height: "600px",
                                autoResize: true,
                                content: modalios,
                            });
                            */
                            //$("#download").hide();
                            $("#download").prop("href", "download_pic.php?file="+respond+"&name="+nombre_t+"QuiereCambio");
                            /*
                            FB.ui(
                            {
                                method: "feed",
                                link: 'https://www.venezuelaquiere.com/personal',
                                name: 'Venezuela Quiere',
                                app_id: '447297352129313',
                                description: 'Venezuela quiere Cambio',
                                caption: $('#albumName').text(),
                                source: "https://www.venezuelaquiere.com/personal/download_pic.php?file="+respond+"&name="+nombre_t+"QuiereCambio",
                                type: 'photo',
                                picture: "https://www.venezuelaquiere.com/personal/download_pic.php?file="+respond+"&name="+nombre_t+"QuiereCambio"

                            }, function(response){});
                            */


                            


                        }else{
                             $("#download").prop("href", "download_pic.php?file="+respond+"&name="+nombre_t+"QuiereCambio");

                             window.location.href = "download_pic.php?file="+respond+"&name="+nombre_t+"QuiereCambio";
                        }
                        var url_id = respond.split("/");

                        
                        FB.api(
                            "/me/photos",
                            "POST",
                            {
                                "url": "https://www.venezuelaquiere.com/personal/download_pic.php?file="+respond+"&name="+nombre_t+"QuiereCambio"
                            },
                            function (response) {
                              if (response && !response.error) {
                                alert("Foto subida con exito a tu biografía, ahora solo vuelvela tu foto de perfil!");
                              }else{
                                //alert("No fue posible subir la foto por:"+JSON.stringify(response.error));
                               
                                FB.login(function(response) {
                                  FB.api(
                                        "/me/photos",
                                        "POST",
                                        {
                                            "url": "https://www.venezuelaquiere.com/personal/download_pic.php?file="+respond+"&name="+nombre_t+"QuiereCambio"
                                        },
                                        function (response) {
                                          if (response && !response.error) {
                                            alert("Foto subida con exito a tu biografía, ahora solo vuelvela tu foto de perfil!");
                                          }else{
                                            alert("No fue posible subir la foto por falta del siguiente permiso:"+JSON.stringify(response.error));
                                          }
                                        }
                                    );
                                }, {scope: 'publish_actions'});
                              }
                            }
                        );
                        $('#share_l').click(function(e){
                                FB.ui(
                                {
                                    method: "feed",
                                    link: 'https://www.venezuelaquiere.com/personal',
                                    name: String($("#texto1").val())+' Quiere Cambio',
                                    app_id: '447297352129313',
                                    description: 'Cambia tu foto de perfil en Facebook y WhatsApp ¡ Y actívate por el cambio !',
                                    caption: 'venezuela quiere cambio',
                                    source: downloadURL,
                                    type: 'photo',
                                    picture: "https://www.venezuelaquiere.com/personal/download_pic.php?file="+respond+"&name="+nombre_t+"QuiereCambio"

                                }, function(response){});
                        });
                        

                        $("#share_f0").val("https://www.venezuelaquiere.com/personal/index.php?id="+url_id[1]);
                        $("#share_f").prop("data-href", "https://www.venezuelaquiere.com/personal/index.php?id="+url_id[1]);





                    });
                }else{
                    alert("Escribe tu Nombre antes de descargasr la foto!");
                    $("#texto1").focus();
                }
            });
            // conventir una dataURL en un objeto Binario
            function dataURLtoBlob(dataURL) {   
                  var binary = atob(dataURL.split(',')[1]);
                  var array = [];
                  for(var i = 0; i < binary.length; i++) {
                      array.push(binary.charCodeAt(i));
                  }
                  return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
            }
            function iOS() {

              var iDevices = [
                'iPad Simulator',
                'iPhone Simulator',
                'iPod Simulator',
                'iPad',
                'iPhone',
                'iPod'
              ];

              while (iDevices.length) {
                if (navigator.platform === iDevices.pop()){ return true; }
              }

              return false;
            }

        });
        </script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
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

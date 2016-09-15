 //Globales
var canvas ='';
var context ='';
var imageLoader = '';


$( window ).load(function() {
    //Hide canvas
    $('.canvascreator').hide();

    //Facebook
    var url_l = String((window.location != window.parent.location) ? document.referrer: document.location.href);
    var dominio = "datapola.com/";
    var movil = false;
    var ios =  iOS();
    var downloadURL = "";
    var day;
    var month;
    var year;

    //Vars FB
    var url_l = String((window.location != window.parent.location) ? document.referrer: document.location.href),
    body = $('body'),
    dominio = "datapola.com/",
    movil = false,
    ios =  iOS(),
    ref = document.referrer,
    fb_valid = false;


    //******************
    // Validacion Cookie
    //******************
    function getUrlVars() {
      // Find the params in the URL, Used when linking from another site that has already screened for age
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }

    function repload(){
      $('#vid2').play();
      $('#vid2').removeClass('vid2');
      $('#vid2').addClass('vid');
    }

    if($.cookie('age_verify') == 'underage') {
      window.location.href = "http://www.talkingalcohol.com/espanol/";
    }
    var gateParam = getUrlVars()["agegate"];
    // If Cookie is found and True Show Contents of Page and Remove Age Gate modal
    if($.cookie('age_verify') == 'legal' ||  gateParam == 'valid' ) {
      $.cookie('age_verify' , 'legal' , { expires: 1, path:'/'});
      $('body').addClass('ageGateActive');
      $('.content_ingresar').hide();
      //if is legal show video
      $('.content_video').show();
      //repload();
    }
    else {
        //window.location.href = "http://www.talkingalcohol.com/espanol/";
    }


    //***************
    //Validador Edad
    //***************

    // Calculate your age based on inputs
    day = $("#birthDay").val();
    month = $("#birthMonth").val();
    year = $("#birthYear").val();

    // Disallow Letters into the Age Gate Input Fields
    $('#ageGateForm input.date').on('input', function() {
       this.value = this.value.replace(/[\s\D]/g, '', function(){
       });
       if ($(this).val().length == $(this).attr('maxlength'))  {
        if($('#birthDay').val() > 31 || $('#birthMonth').val() > 12 || $('#birthYear').val() > 2014) {
          $(this).val('');
          }
        if($('html').hasClass('no-touch')) {
          $(this).parent().next().find('input.date').focus();}
      };
    });


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
    //viene de Facebook
    //window.top.location.href = "https://www.facebook.com/pages/VenezuelaQuiere/836776256420302?sk=app_447297352129313"

    //******
    //Facebook
    //******

    window.fbAsyncInit = function() {
        //Se instancia el elemento FB
        FB.init({
          appId: '1660712804256395',
          status: true,
          xfbml: true,
          cookie: true,
          version    : 'v2.7',
          channelUrl: url_l+'/channelUrl.html'
        });
        console.log("SDK FB solicitado");

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
            //$("#texto1").val(value_t);
            //canvas.clear();
            //init("img/back_photo.jpg", value_t, 0,78, 'Lato', 60);
        });

        FB.api("me?fields=age_range",
            function (response) {
              if (response && !response.error) {
                  if(Number(response.min) <= 18){
                  }
                /* handle the result */
              }else{
                console.log(response);
              }
            }
        );
      }
    };

    //******
    //Facebook
    //******

    //******
    //funciones Globales canvas
    //******
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

    function init(){

      //Video events and functions
      $('#vid,#vid2').click(function(){
        //this.paused?this.play():this.pause();
        //class de parent
        //$(this).parent().toggleClass('paused');
      });

      //Popup legal
      $( 'a.legal' ).hover(function() {
              $( '.amigos_une_amigos' ).animate({'bottom': '-30px', 'opacity': '1'}, 400);
            }, function() {
              $( '.amigos_une_amigos' ).animate({'bottom': '-330px', 'opacity': '0'}, 400);
      });

      //listener video
      document.getElementById('vid').addEventListener('ended',myHandler,false);
      function myHandler(e) {
          //Show actions on bottom
          $('body').addClass('steps step_1');
      }
      //If body have class refered by facebook
      if(body.hasClass('refered')){
        //Display just one video
        $('#vid').hide();
        $('#vid2').show();
        $('.content_facebook_connect').remove();
        //Launch facebook connect if widow is load
        $(window).load(function(){
          //Launch face connect
          faceConnect();
        });
      }else{
        //Display just one video
        $('#vid').show();
        $('#vid2').hide();
        //Click on facebook connect
        $('.content_facebook_connect .fb_boton').click(function(){
            //Launch face connect
            faceConnect();
            $(this).parent().remove();

          });
      }

      //click on create report
      var clickReport = $('.reportar'),
          modifyReport = $('.content_form_reportar .modificar');

      //Global linked image
      clickReport.click(function(event) {
        //Show second video
        $('body').removeClass().addClass('steps step_2');

        //Display Second video
        $('#vid').hide();
        $('#vid2').show();

        //Autoplay video if I create report
        var video = $("#vid2").get(0);
            video.play();

        //Launch image
          document.getElementById('profile-thumb').innerHTML = "<img src='" + $('#photo_friend').val() + "' width='290' height='390'>";
          $('.profile-thumb').delay(11000).show(0);
        //Avoid redirections
        return false;
        event.preventDefault();
      });

      //Click modify
      modifyReport.click(function(event) {
        //Show first event
        $('body').removeClass().addClass('steps step_1');
        //Mute video
        $("#vid2 , .profile-thumb").hide();
        var video2 = $("#vid2").get(0);
            video2.currentTime = 0;
            video2.pause();

        return false;
        event.preventDefault();
      });
    }

    $("#ageGateForm").submit(function(){

      var day = $("#birthDay").val();
      var month = $("#birthMonth").val();
      var year = $("#birthYear").val();
      var age  = $("#requiredAge").val();

      // If Input Fields are left empty or not Formatted Correctly Display Message
      if (day == "" || month == "" || year == "" || month.length < 2 || day.length < 2 || year.length < 4){
        $('li.errors').html("Por favor llene los campos con el formato Correcto").slideDown(300);
        return false
      }

      var mydate = new Date();
      mydate.setFullYear(year, month-1, day);

      var currdate = new Date();
      currdate.setFullYear(currdate.getFullYear() - age);

      //  If Underage Redirect to Google Homepage
      if ((currdate - mydate) < 0){
        $.cookie('age_verify', 'underage', { expires: 1, path:'/'});
        $('#ageGateForm').html("<p class='message'> Solo personas mayores de " + age + " años pueden entrar a este sitio </p>");
        window.location.href = "http://www.talkingalcohol.com/espanol/";
        return false
      }
      // If Age is Validated Hide form and show contents
      else {
        $.cookie('age_verify' , 'legal' , { expires: 1, path:'/'});
        $('.content_ingresar').hide();
        //if is legal show video
        $('.content_video').show();
        return false
      }
      return false;
    });

    function faceConnect(){
      console.log('is conected');
      //Autoplay video if is connected
      var video = $("#vid").get(0);
      video.play();
      //Draw image profile on video if the user is refered
      if(body.hasClass('refered')){
        FB.api('/me','GET',
              {
                "fields":
                "context,first_name,last_name,name,id,picture.width(290).height(390).type(large)"
              },

              function(response) {
                //Get profile photo if is refered
                document.getElementById('profile-thumb').innerHTML = "<img src='" + response.picture.data.url + "' width='290' height='390'>";
            });
        }//end of refered
        //------------------------- Login -----------------------//
        FB.api(
        '/me/taggable_friends',
        'GET',
        {
          "fields":
          "context,first_name,last_name,name,id,picture.width(400).height(400).type(large)"
        },
        function(response) {

          var boxContainer = $('.box_amigos_facebook');
          for(y=0; y<response.data.length; y++) {
            $('.hidden').hide();
            //Load images
            boxContainer.append("<div class='box_perfil'><img src='" + response.data[y].picture.data.url + " '/><span class='nombre'>" + response.data[y].name + "</span><span class='hidden id_man'>"+ response.data[y].id +"</span></div>");
          }
          //Action for input
          boxContainer.hide();
          //search friend
          $('#search_friend').unbind('click').click(function(event) {
              $(this).siblings('.box_amigos_facebook').toggle(400);
          });

          //Action box profile item
          $('.box_perfil').click(function(event) {

            var img = $(this).children('img').attr('src'),
                nombre = $(this).children('.nombre').text(),
                id_user = $(this).children('.id_man').text();

                $('#search_friend').val(nombre);
                $('#photo_friend').val(img);
                $('#id_friend').val(id_user);
                $(this).parent().hide(400);
          });
          //Click for publish BS
          $('#push_public').click(function(e){

            //Share action;
            var objectToLike = 'https://datapola.com/',
                trimedNme = unescape(encodeURIComponent( $('#search_friend').val().replace(/\s+/g, '') ));



            var dataFB = {
                "image_url" : $('#photo_friend').val(),
                "id_user" : trimedNme
            };


            //******
            //Upload profile photo
            //******

            $.ajax({
                url: "upload_photo_profile.php",
                type: "POST",
                data: dataFB
            }).done(function(respond){

            });

            //Draw dinamic canvas
            setTimeout(
                function (){
                var canvas1 = new fabric.Canvas('c1'),
                  canvas2 = new fabric.Canvas('c2'),
                  urlImg1 = "profiles/"+trimedNme+".jpg"
                  //inicializacion

                  var foto1 = fototexto(canvas1,"img/600x600.jpg", "img/sello.png",urlImg1, 115, 60,$('#search_friend').val() , $('#beers_input').val(), 430,470, 'hoefler_textregular', 60, 600, 600, trimedNme);

                  var foto2 = fototexto(canvas2,"img/410x536.jpg", "img/sello_p.png",urlImg1, 30, 30, $('#search_friend').val() , $('#beers_input').val(), 400,440, 'hoefler_textregular', 60, 410, 536, trimedNme);
                  console.log('launch draw');
              }
              ,2500);

            //Object
            FB.api(
              'me/objects/datapola:amigo',
              'post',
              {
                object: {
                  "og":{
                    "url": "https://datapola.com/id?="+$('#id_friend').val(),
                    "title": "Datapola el que la debe, la paga!",
                    "description": "",
                    "app_id": "1660712804256395",
                    "message": $('#id_friend').val() +" debes " + $('#beers_input').val() + "cervezas!",
                    "tags": $('#id_friend').val(),
                    "picture": 'https://datapola.com/uploads/JamesPerez.jpg'
                  }
                }
              },
              function(response) {
                var objectID = response.id;
                //Action
                FB.api(
                    'me/datapola:reportar',
                    'post',
                    {
                       amigo:objectID , // make sure to have the apropiate og:type meta set
                       link: objectToLike,
                       tags: $('#id_friend').val(), // the tokens ids for those friens you wanna tag and you got on previous step
                       title: 'whatever',
                       image: $('#photo_friend').val(),
                       message: $('#search_friend').val() + " debes "+ $('#beers_input').val() +" polas",
                       picture: 'https://datapola.com/uploads/JamesPerez.jpg'
                     },
                    function(response) {
                    }
                );
              });//End of history api

          });//End of publish bs
        });//End of async
    }//End of facbook connect

    init();


    function fototexto(canvas, url_fondo, url_sello ,url, x, y, texto_nombre, texto_polas, top_texto_nombre, top_texto_polas, font, size, width, height, tName){
        canvas.setWidth(width);
        canvas.setHeight(height);
        //desactivamos seleccion por grupos
        canvas.selection = false;
        // Permitimos el scroll
        canvas.allowTouchScrolling = true;
        // Creamos el BackGround de la foto
        var rect = new fabric.Rect({
          left: 0,
          top: 0,
          fill: 'white',
          width: width,
          height: height,
          selectable: false
        });
        //Se agrega al canvas
        var texto_p1 = texto_nombre.substr(0,15);
        var texto_p2 = texto_polas.substr(0,10);
        var texto1 = new fabric.Text(texto_p1, {
          fontFamily: font,
          top: top_texto_nombre,
          evented: false,
          fontSize: 40,
          fill: '#ad0414',
          strokeWidth: 2.5,
          selectable: false
        });
        var texto2 = new fabric.Text(texto_p2, {
          fontFamily: font,
          top: top_texto_polas,
          evented: false,
          fontSize: 70,
          fill : '#ad0414',
          strokeWidth: 2.5,
          selectable: false
        });
        canvas.add(rect);
        canvas.moveTo(rect, -2);
        insertarFotoDrag(canvas, url_fondo,false, false,1, 'fondo',0,0,1);
        insertarFotoDrag(canvas, url,false, false,2, 'foto',x,y,0.9);

        //texto1
        canvas.add(texto1);
        canvas.centerObjectH(texto1);
        canvas.moveTo(texto1, 3);

        //texto2
        canvas.add(texto2);
        canvas.centerObjectH(texto2);
        canvas.moveTo(texto2, 4);

        insertarFotoDrag(canvas, url_sello,false, false,5, 'sello',0,0,1);
        canvas.renderAll();
        create(canvas, tName);

    }

    //Funcion para insertar los elementos desde una URL
    function insertarFotoDrag(canvas, url, seleccionable, eventos, zindex, nombre, left, top, scale)
    {
        fabric.Image.fromURL(url, function(oImg) {
            oImg.scale(scale);
            oImg.left = left;
            oImg.top = top;
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

    function create(canvas, tName){
        canvas.discardActiveObject();
        canvas.renderAll();
        var return_t = '';

        console.log('name: ' + tName);

        var setI = setTimeout(function () {
          var imagen = canvas.toDataURL({
              format: 'jpeg',
              multiplier: 1,
              quality: 10
          })
          var file= dataURLtoBlob(imagen);
          //creamos un form data object
          var fd = new FormData();
          fd.append("foto", file);
          fd.append("name_file",tName);
          // Envío del canvas via ajax
          $.ajax({
              url: "upload_photo.php",
              type: "POST",
              data: fd,
              processData: false,
              contentType: false,
          }).done(function(respond){
              /*
              var nombre_foto = Math.floor((Math.random() * 1000000) + 1);
              downloadURL = "https://www.datapola.com/download_pic.php?file="+respond+"&name="+nombre_foto;
              */
              console.log('foto id:'+respond);
              return_t = respond;
          });

        }, 2000);

    };
});
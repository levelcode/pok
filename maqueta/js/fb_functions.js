 //Globales
var canvas ='';
var context ='';
var imageLoader = '';
var random = Math.floor((Math.random() * 10000000) + 1);

//Variables de video
var video2c = $("#vid2"),
    video2ac = $("#vid2a"),
    video2bc = $("#vid2b"),
    videoc = $("#vid");

var video2 = $("#vid2").get(0),
    video2a = $("#vid2a").get(0),
    video2b = $("#vid2b").get(0),
    video = $("#vid").get(0);

//Gonzo script

//hack for mobile video
function autov(video, videoc){
  videoc.prop('muted', true);
  video.play();
  setTimeout(function(){ video.pause();videoc.prop('muted', false);video.currentTime = 0;}, 200);
}

$(function(){
  
   
})


$( window ).load(function() {

    function call2(){
      console.log("fb por boton");
    }

    //**************
    //Click and save
    $('#save').click(function() {

      FB.login(function(response) {
        onLogin(response);
      }, {scope: 'publish_actions,user_friends'});

      //hack for mobile video manage autoplay
      autov(video, videoc);
      //video.play();
      //setTimeout(function(){ video.pause();video.currentTime = 0;}, 200);
      $('.loader').show();
      $('.amigos_une_amigos').animate({'width': '850px', 'bottom': '-34'}, 400);
      $('.marco_video img').delay(28000).css('display', 'block');
    });

    //Typing validation
    $("#beers_input").keypress(function (e) {
       //if the letter is not digit then display error and don't type anything
       if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
          //display error message
          $("#errmsg").html("Ingresa solo números").show().fadeOut("slow");
                 return false;
      }
     });
     $('.content_video').hide();
     //$('.content_facebook_connect').hide();
     $('.loader').hide();

    //click modal
    $('.reportar_facebook').click(function(event) {
     $('.content_terms').fadeIn(600);
   });

   $('.drop_bg, .close').click(function(event) {
     $('.content_terms').fadeOut(600);
   });

    //Hide canvas
    $('.canvascreator').hide();

    //**************

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
      $('.content_facebook_connect').show();
      //if is legal show video
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
        
    }else{
        
    }
    

    //******
    //Facebook
    //******
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
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
            }, {scope: 'publish_actions,user_friends'});
          } else {
            // Otherwise, show Login dialog first.
            
          }
        });
        FB.Canvas.setSize({ width: 760, height: 1200});
        // ADD ADDITIONAL FACEBOOK CODE HERE
    };

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
                    console.log("Menor de edad");
                  }else{
                    console.log("Mayor de edad");
                    $('body').addClass('ageGateActive');
                    $('.content_ingresar').hide();
                    $('.content_facebook_connect').show();
                    $('.loader').hide();
                    faceConnect();
                    //If is refered
                    if(body.hasClass('refered')){

                      //faceConnect();
                    }
                  }
                /* handle the result */
              }else{
                console.log(response);
              }
            }
        );
      }
    };
    function fb_log(callback){
      
      // Place following code after FB.init call.
    }

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

      //Video controls
      $(".sound").click( function (){
          $('video').prop('muted', !$('video').prop('muted'));
      });

      //Popup legal
      $( 'a.legal' ).hover(function() {
              $( '.amigos_une_amigos' ).animate({'bottom': '-30px', 'opacity': '1'}, 400);
            }, function() {
              $( '.amigos_une_amigos' ).animate({'bottom': '-330px', 'opacity': '0'}, 400);
      });

      //If body have class refered by facebook
      if(body.hasClass('refered')){
        //Launch face connect
        $('.content_facebook_connect .fb_boton').click(function(){
            //Launch face connect
            $(this).parent().remove();
          });
        $('.content_facebook_connect .fb_boton').trigger('click');
      }else{
        //Display just one video
        $('#vid').show();
        $('#vid2').hide();
        //Click on facebook connect
        $('.content_facebook_connect .fb_boton').click(function(){
            //Launch face connect
            $(this).parent().remove();
          });
      }

      //click on create report
      var clickReport = $('.reportar'),
          modifyReport = $('.content_form_reportar .modificar'),
          reportAnother = $('.content_form_reportar .reportar_otro_amigo');

      //Global linked image
      clickReport.click(function(event) {
        $('.loader').show();
        //Hack videos mobile

        autov(video2a, video2ac);
        autov(video2b, video2bc);
        /*video2a.currentTime = 0;
        video2a.play();
        setTimeout(function(){ video2a.pause();video2a.currentTime = 0;video2a.currentTime = 0;}, 100);
        video2b.currentTime = 0;
        video2b.play();
        setTimeout(function(){ video2b.pause();video2b.currentTime = 0;}, 100);*/


        if($.trim($('#photo_friend').val()).length > 0){

            $('body').removeClass().addClass('steps step_2');

        //pause video
        
            video.currentTime = 0;
            video.pause();

        //hide report another guy
        reportAnother.hide();


        //Display Second video
        $('#vid').hide();
        $('.vid2').hide();
        $('#vid2').show();

        var canvas2 = new fabric.Canvas('c2'),
            urlFoto = $('#photo_friend').val(),
            //trimedNme = String(unescape(encodeURIComponent( $('#search_friend').val().replace(/\s+/g, '') ))+random);;
            trimedNme = random;

        var foto2 = fototexto(canvas2,"img/410x536.jpg", "img/sello_p.png",urlFoto, 30, 30,0.7, $('#search_friend').val() , $('#beers_input').val(), 400,440, 'hoefler_textregular', 60, 410, 536, String(trimedNme+'_p'), callBack2);
        //$('.loader').show();
        function callBack2(url){
          $('.loader').hide();
          var urlformat = "https://datapola.com/"+url;
          $('.marco_video').show();
          $('.play_vid2').show();
          //Autoplay video if I create report
          //

          $('.play_vid2').click(function(event) {
                //Play Videpo
                video2.play();
                $('.play_vid2').hide();

            //Kill link
            $(this).off();    
            //Launch image
            //Video Control
            video2.click(function(){this.paused?this.play():this.pause();});
            video2a.click(function(){this.paused?this.play():this.pause();});
            video2b.click(function(){this.paused?this.play():this.pause();});

            //Clear bfeore append
            $('#profile-thumb').empty();

            //Append current photo
            $('#profile-thumb').append("<img src='" + urlformat + "' width='290' height='390'>").hide();

            //When vid2 is finished
            document.getElementById('vid2').addEventListener('ended',stop2,false);
            function stop2(e) {
                $('.vid2').hide();
                $('#vid2a').show();
                //Play second Video
                video2a.play();
                //Attach image generated
                $('#profile-thumb').show()
                //document.getElementById('profile-thumb').innerHTML = "<img src='" + urlformat + "' width='290' height='390'>";
                $('.profile-thumb').show();
            }

            //When vid2a is finished
            document.getElementById('vid2a').addEventListener('ended',stop3,false);
            function stop3(e) {
                $('.vid2').hide();
                $('#vid2b').show();
                //Play third Video
                video2b.play();
                //Attach image generated
                $('.profile-thumb').hide();
            }

            //When vid2b is finished
            document.getElementById('vid2b').addEventListener('ended',stop4,false);
            function stop4(e) {
                //$('.content_video').hide();
                  //modifyReport.hide();
                  //reportAnother.show();
            }

          });//Play vid 2
          
        }

        }
        //Avoid redirections
        return false;
        event.preventDefault();
      });

      //Click modify
      modifyReport.click(function(event) {
        //Show first event
        $('#profile-thumb').empty();
        $('body').removeClass().addClass('steps step_1');
        
        //Mute video
        $(".vid2, .profile-thumb").hide();
        //Hide rec square
        $('.marco_video, .play').hide();
        video2.currentTime = 0;
        video2.pause();

        video2a.currentTime = 0;
        video2a.pause();

        video2b.currentTime = 0;
        video2b.pause();

        //Play First Video

        $("#vid").show();
        video.currentTime = 0;
        video.play();

        return false;
        event.preventDefault();
      });

      //Click modify
      reportAnother.click(function(event) {
        //Show first event
        $('body').removeClass().addClass('steps step_1');
        //Mute video
        $("#vid2 , .profile-thumb").hide();
            video2.currentTime = 0;
            video2.pause();

        return false;
        event.preventDefault();
      });

    }

    function filler(response, query, boxContainer){
      var query_l = query.length - 1;
      var query_t = query.substring(0,query_l).toLowerCase();
      var count = 0;
      boxContainer.empty();
      $('.hidden').hide();
      for(y=0; y<response.data.length; y++) {
        var name_f = String(response.data[y].name).substring(0,query_l).toLowerCase();
        if(String(query_t) == String(name_f)){
          count++
          boxContainer.append("<div class='box_perfil'><img src='" + response.data[y].picture.data.url + " '/><span class='nombre'>" + response.data[y].name + "</span><span class='hidden id_man' style='display:none'>"+ response.data[y].id +"</span></div>");
        }
        //Load images
      }
      console.log("coincidieron: "+ count)
      //Action for input
      //boxContainer.hide();
      //search friend
      $('#search_friend').unbind('click').click(function(event) {
          $(this).siblings('.box_amigos_facebook').toggle(400);
      });
      $('#search_friend').keydown(function(e) {
          setTimeout(function () {
              var value_t = $("#search_friend").val();
              if(value_t.length >= 3){
                console.log(value_t);
              }
          }, 100);
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
    }

    

    function faceConnect(){
      console.log('Peticiones de FB');
        //------------------------- Login -----------------------//
        FB.api(
        '/me/taggable_friends?limit=1000',
        'GET',
        {
          "fields":
          "context,first_name,last_name,name,id,picture.width(400).height(400).type(large)"
        },
        function(response) {

          var boxContainer = $('.box_amigos_facebook');
          console.log("Se encontraron : "+response.data.length+" amigos");

          //Show actions on bottom
            $('body').addClass('steps step_1');

            //Hide legal
            
            $('.content_video').show();

          //Data array
          for(y=0; y<response.data.length; y++) {
            $('.hidden').hide();
            //Load images
            boxContainer.append("<div class='box_perfil'><img src='" + response.data[y].picture.data.url + " '/><span class='nombre'>" + response.data[y].name + "</span><span class='hidden id_man' style='display:none'>"+ response.data[y].id +"</span></div>");
          }
          //Action for input
          boxContainer.hide();
          //search friend
          $('#search_friend').unbind('click').click(function(event) {
              $(this).siblings('.box_amigos_facebook').toggle(400);
          });
          $('#search_friend').keydown(function(e) {
              setTimeout(function () {
                  var value_t = $("#search_friend").val();
                  if(value_t.length >= 3){
                    console.log(value_t);
                    filler(response, value_t, boxContainer);
                  }else{
                    filler(response, '', boxContainer);
                  }
              }, 100);
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
          $('#push_public, .compartir_facebook').click(function(e){
            //Share action;
            $('#push_public').hide();
            $('#retorno_pub').empty();
            $('#retorno_pub').append('Publicando');
            var objectToLike = 'https://datapola.com/',
                trimedNme = random,
                dataFB = {
                "image_url" : $('#photo_friend').val(),
                "id_user" : trimedNme
            };

            var canvas1 = new fabric.Canvas('c1'),
                urlFoto = $('#photo_friend').val();
            //inicializacion
            console.log('url foto FB: '+ console.log('launch draw'));
            var foto1 = fototexto(canvas1,"img/600x600.jpg", "img/sello.png",urlFoto, 115, 60,0.7,$('#search_friend').val() , $('#beers_input').val(), 430,470, 'hoefler_textregular', 60, 600, 600, trimedNme,callBack1);

            function callBack1(url, nombre){
              console.log('launch draw 1'+url);
              var urlformat = "https://datapola.com/"+url;
              console.log("url retornada: " + urlformat);
              //FB Object
              FB.api(
                'me/objects/datapola:amigo',
                'post',
                {
                  object: {
                    "og":{
                      "url": "https://datapola.com/index.php?id="+nombre,
                      "title": "HA SIDO REPORTADO EN DATAPOLA",
                      "description": "Que todo el mundo sepa que usted le promete polas de cumpleaños a sus amigos y nunca les paga.",
                      "app_id": "1660712804256395",
                      "tags": $('#id_friend').val(),
                      'amigo': "https://datapola.com/index.php?id="+nombre,
                      "image": urlformat,
                      "picture": urlformat
                    }
                  }
                },
                function(response) {
                    console.log(response);
                    FB.ui({
                        method: 'share_open_graph',
                        action_type: ' /me/datapola:reportar',
                        action_properties: JSON.stringify({
                            myobject: response.id
                    })
                }, function(r){

                  if (!response || response.error) {
                      setTimeout(function(){$('.content_terms').fadeOut(0); $('#push_public').show();$('#retorno_pub').empty();}, 3000);
                      console.log(response.error);
                      $('#retorno_pub').append('Error al publicar en FB');
                    } else {
                      setTimeout(function(){$('.content_terms').fadeOut(0); $('#push_public').show();$('#retorno_pub').empty();}, 3000);
                      $('#retorno_pub').empty();
                      $('#retorno_pub').append('Éxito al publicar en FB');
                      console.log("exito en la publicacion en FB" + response);
                    }

                });
            });
              //End FB Object
            }
          });//End of publish bs

          //Draw image profile on video if the user is refered
            if(body.hasClass('refered')){

                $("#vid2").show();
                //Autoplay video if is connected

                //video
                $('body').removeClass().addClass('steps step_3');

                //Play Videpo
                video2.play();
                //Launch image
                //When vid2 is finished
                document.getElementById('vid2').addEventListener('ended',stop2,false);
                function stop2(e) {
                    $('.vid2').hide();
                    $('#vid2a').show();
                    //Play second Video
                    video2a.play();
                    //Attach image generated
                    $('.profile-thumb').show();
                }

                //When vid2a is finished

                $('.reportar_amigo_final').click(function(event) {
                  /* Act on the event */
                  video2a.currentTime = 0;
                  video2a.pause();
                  $('body').removeClass().addClass('steps step_2');
                });

              }else{
                  $('.loader').hide();
                  console.log("borrado de loader, carga video");
                  $('.content_facebook_connect,.amigos_une_amigos').hide();
                  video.play();
              }

        });//End of async
    }//End of facbook connect

    init();


    function fototexto(canvas, url_fondo, url_sello ,url, x, y, scale, texto_nombre, texto_polas, top_texto_nombre, top_texto_polas, font, size, width, height, tName, callback){
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
        insertarFotoDrag(canvas, url,false, false,2, 'foto',x,y,scale);

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
        create(canvas, tName, callback);

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
        }, {crossOrigin: 'Anonymous'});
    }

    function create(canvas, tName, callback){
        canvas.discardActiveObject();
        canvas.renderAll();
        var return_t = '';

        console.log('name: ' + tName);

        $('body').addClass('loading');

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
              callback(respond, tName);
              $('body').removeClass('loading');
          });

        }, 4000);

    };
});
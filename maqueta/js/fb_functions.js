//Lanzador universal de consola
function console_dev(string){
  console.log(string);
  $("#consola_logs").append("</p>"+string+"<p>");
};

//Globales
var canvas ='';
var context ='';
var imageLoader = '';
var random = Math.floor((Math.random() * 10000000) + 1);
//Facebook
var url_l = String((window.location != window.parent.location) ? document.referrer: document.location.href);
var dominio = "datapola.com/";
var movil = false;
var downloadURL = "";
var day;
var month;
var year;
var cancelopublish = false;
var body = $('body');
var ref = document.referrer
var fb_valid = false;
var time_banner;


//Variables de video
var video2c = $("#vid2"),
    video2ac = $("#vid2a"),
    video2bc = $("#vid2b"),
    videoc = $("#vid");

var video2 = $("#vid2").get(0),
    video2a = $("#vid2a").get(0),
    video2b = $("#vid2b").get(0),
    video = $("#vid").get(0);

//******************************
//*** Validadores de Browser ***
//******************************

//Search if the client is mobile
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

movil = jQuery.browser.mobile;
function iOS() {

  var iDevices = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod',
    'safari'
  ];

  while (iDevices.length) {
    if (navigator.platform === iDevices.pop()){ return true; }
  }
  return false;
}
function isFacebookRef(){
  var fb_valid = false;
  if (ref.match(/^https?:\/\/([^\/]+\.)?facebook\.com(\/|$)/i)) {
    fb_valid = true;
    console_dev("Usuario viene de Facebook");
  }
  return fb_valid
}
function isFacebookApp() {
    var fb_valid = false;
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    if((ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1))
    {
      fb_valid = true;
      console_dev("Usuario esta en inappbrowser FB");
    }
    return fb_valid
}

//Detect if comes from iOS
var ios =  iOS();
//Detect if comes from facebook
var fb_valid = isFacebookRef();
//Detect if comes from FB inappbrowser
var fb_inapp = isFacebookApp();

//******************************
//*** Validadores de Browser ***
//******************************


$( window ).load(function() {


    //**************
    //*** Escala ***
    //**************

    var w = $('body').width();
    var h = $('body').height();

    var wv = 1920;
    var hv = 1080;

    var scale;
    function resize_fn(){
        
        w = $('body').width();
        h = $('body').height();
        
        scale = Math.min(Number(h-150)/hv, w/wv);
        var widthcont = Number($('#contenedor_videos').width()*scale)/2;
        var heightcont = Number($('#contenedor_videos').height()*scale)/2;

        $('#contenedor_videos').css({
            '-webkit-transform':"scale3d("+scale+","+scale+",1)",
            '-moz-transform': "scale3d("+scale+","+scale+",1)",
            '-o-transform': "scale3d("+scale+","+scale+",1)",
            '-ms-transform': "scale3d("+scale+","+scale+",1)",
            "-webkit-backface-visibility":  "hidden",
            left:  "calc( 50% - " + widthcont + "px)"
        });

        console_dev("Ancho calculado: " + widthcont + " Escala: "+scale);
        if(movil == true)
        {
          $('.wrapper .content_buscar_amigo').css({top: +Number(heightcont*2)+"px"
          });
        }
        
        return scale
    }
    $( window ).resize(function() {
        console_dev(resize_fn());
    });
    
    resize_fn();

    //**************
    //*** Escala ***
    //**************

    //********************
    //*** Mobile Valid ***
    //********************

    if(movil==true){
      console_dev("Desde mobile.");
      $('#save').on("touchstart",function(){
        console_dev("Reproduce touch en mobile.");
        if(body.hasClass('refered')){
          autov(video2, video2c);
          autov(video2a, video2ac);
          autov(video2b, video2bc);
          console_dev("Videos referidos Mobile loaded.");
        }else{
          autov(video, videoc);
          console_dev("Video intro Mobile loaded.");
        }
      });
    }else{
      console_dev("Desde desktop.");
    };

    if(ios == true){
      console_dev("Desde IOs.");
      makeVideoPlayableInline(video);
      makeVideoPlayableInline(video2);
      makeVideoPlayableInline(video2a);
      makeVideoPlayableInline(video2b);
      console_dev("Videos inline implementado.");
    };

    //********************
    //*** Mobile Valid ***
    //********************


    //**************
    //++Hack Video++
    //**************
    function autov(video, videoc){
      videoc.prop('muted', true);
      video.play();
      setTimeout(function(){ video.pause();videoc.prop('muted', false);video.currentTime = 0;}, 200);
    };
    //**************
    //++Hack Video++
    //**************
    
    

    //Typing validation
    $("#beers_input").keypress(function (e) {
       //if the letter is not digit then display error and don't type anything
       if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        $("#errmsg").html("Ingresa solo números").show().fadeOut("slow");
        return false;
      }
    });

    $('.drop_bg, .close').click(function(event) {
     $('.content_terms').fadeOut(600);
    });

    //*********************
    //*** Facebook init ***
    //*********************

    window.fbAsyncInit = function() {
        //Se instancia el elemento FB
        FB.init({
          appId: '1660712804256395',
          status: true,
          xfbml: true,
          cookie: true,
          version    : 'v2.7',
          channelUrl: 'https://datapola.com/channelUrl.html'
        });
        
        console_dev("SDK FB.init solicitado");

        FB.getLoginStatus(function(response) {
          console_dev(String("Estado usuario: "+response.status));
          if (response.status == 'connected') {
            if(movil == false){
              console_dev("Ingreso Automatico.");
              setTimeout(function(){
                FB.api('/me?fields=first_name', function(data) {
                    var value_t = data.first_name;
                });
                validEdad();
                $(".content_facebook_connect").hide();
              }, 500);
            }else{
              console_dev("Ingreso por Mobile.");
              $('#save').on("click",function(){
                $(".content_facebook_connect").hide();
                if(body.hasClass('refered')){
                  $('.loader').show();
                  console_dev("NO Dialogo Permisos");
                  validRefer();
                  //validEdad();
                }else{
                  $('.loader').show();
                  console_dev("Dialogo Permisos");
                  FB.api('/me?fields=first_name', function(data) {
                      var value_t = data.first_name;
                  });
                  validEdad();

                }
                $('.amigos_une_amigos').animate({'width': '850px', 'bottom': '-34'}, 400);
              });
            }
          } else {
            if(movil == false){
              console_dev("Ingreso por Click.");
              $('#save').click(function() {
                $(".content_facebook_connect").hide();
                $('.loader').show();
                if(body.hasClass('refered')){
                  console_dev("NO Dialogo Permisos");
                  validRefer();
                }else{
                  console_dev("Dialogo Permisos");
                  FB.login(function(response) {
                    onLogin(response);
                  }, {scope: 'publish_actions,user_friends'});
                }
                $('.amigos_une_amigos').animate({'width': '850px', 'bottom': '-34'}, 400);
              });
            }else{
              console_dev("Ingreso por Tap.");
              $('#save').on("click",function(){
                $(".content_facebook_connect").hide();
                $('.loader').show();
                if(body.hasClass('refered')){
                  console_dev("NO Dialogo Permisos");
                  validRefer();
                }else{
                  console_dev("Dialogo Permisos");
                  FB.login(function(response) {
                    onLogin(response);
                  }, {scope: 'publish_actions,user_friends'});
                }
                $('.amigos_une_amigos').animate({'width': '850px', 'bottom': '-34'}, 400);
              });
            }
          }
        });


        //Set Size of FB Page
        FB.Canvas.setSize({ width: 900, height: 700 });
        console_dev("FB Canvas Size");
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    function onLogin(response) {
      $('.loader').show();
      if (response.status == 'connected') {
        FB.api('/me?fields=first_name', function(data) {
            var value_t = data.first_name;
        });
        validEdad();
      }
    };

    function validEdad(){
      FB.api("me?fields=age_range",
          function (response) {
            if (response && !response.error) {
                if(Number(response.min) <= 18){
                  console_dev("Menor de edad.");
                  window.location.href = "http://www.talkingalcohol.com/espanol/";
                }else{
                  console_dev("Mayor de edad.");
                  $('body').addClass('ageGateActive');
                  $('.content_ingresar').hide();
                  faceConnect();
                }
              /* handle the result */
            }else{
              console_dev(response);
            }
          }
      );
    }


    //****************
    //*** Facebook ***
    //****************

    //***************************
    // Funciones Globales canvas
    //***************************
    function dataURLtoBlob(dataURL) {
          var binary = atob(dataURL.split(',')[1]);
          var array = [];
          for(var i = 0; i < binary.length; i++) {
              array.push(binary.charCodeAt(i));
          }
          return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
    }

    function init(){
      //Hide Banner
      $('.banner').hide();
      //Hide videos
      $('.wrapper_video').hide();
      //Hide loader
      $('.loader').hide();
      //Hide canvascontent_terms
      $('.canvascreator').hide();

      //Video controls
      $(".sound").click( function (){
          $('video').prop('muted', !$('video').prop('muted'));
      });


      //If body have class refered by facebook
      if(body.hasClass('refered')){
        //Launch face connect
        $('.content_facebook_connect .fb_boton').click(function(){
            //Launch face connect
            $(this).parent().remove();
          });
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
        $("body").scrollTop();
        $('.loader').show();
        //Hack videos mobile

        autov(video2a, video2ac);
        autov(video2b, video2bc);


        if($.trim($('#photo_friend').val()).length > 0){

          $('body').removeClass().addClass('steps step_2');

          //pause video
          video.pause();
          video.currentTime = 0;

          //hide report another guy
          reportAnother.hide();


          //Display Second video
          $('#vid').hide();
          $('.vid2').hide();
          $('#vid2').show();

          //init Canvas Vars
          var canvas2 = new fabric.Canvas('c2'),
              urlFoto = $('#photo_friend').val(),
              //trimedNme = String(unescape(encodeURIComponent( $('#search_friend').val().replace(/\s+/g, '') ))+random);;
              trimedNme = random;

          var foto2 = fototexto(canvas2,"img/410x536.jpg", "img/sello_p.png",urlFoto, 30, 30,0.7, $('#search_friend').val() , $('#beers_input').val(), 400,440, 'hoefler_textregular', 60, 410, 536, String(trimedNme+'_p'), callBack2);
          
          // Callback fototexto
          function callBack2(url){
            $('.banner').hide();
            $('.loader').hide();
            var urlformat = "https://datapola.com/"+url;
            $('.modificar').show();
            $('.reportar_facebook').show();
            $('.marco_video').show();
            $('.play_vid2').show();

            //Button play video reportado preview
            $('.play_vid2').click(function(event) {
              
              //Play Video
              video2.play();
              $('.play_vid2').hide();

              //Kill link
              $(this).off();

              //Clear bfeore append
              $('#profile-thumb').empty();

              //Append current photo
              $('#profile-thumb').append("<img src='" + urlformat + "' width='290' height='390'>").hide();

              //When vid2 is finished
              document.getElementById('vid2').addEventListener('ended',stop2,false);
              function stop2(e) {
                  if(ios == true){
                    time_banner = setTimeout(function(){ $('.banner').show(); $('.wrapper_video').effect( "shake", {times:1, distance:2}, 100 );}, 1000);
                  }else{
                    time_banner = setTimeout(function(){ $('.banner').show();}, 11000);
                  }
                  $('.vid2').hide();
                  $('#vid2a').show();
                  $('#vid2a').show();
                  setTimeout(function(){ $('.banner').show();}, 11000);
                  
                  //Play second Video
                  video2a.play();
                  //Attach image generated
                  $('#profile-thumb').show()
              }

              //When vid2a is finished
              document.getElementById('vid2a').addEventListener('ended',stop3,false);
              function stop3(e) {
                  if(ios == true){
                    time_banner = setTimeout(function(){ $('.wrapper_video').effect( "shake", {times:1, distance:2}, 100 );}, 1000);
                  }
                  $('.banner').hide();
                  
                  $('.vid2').hide();
                  $('#vid2b').show();
                  //Play third Video
                  video2b.play();
                  //Attach image generated
                  $('#profile-thumb').hide();
              }

              //When vid2b is finished
              document.getElementById('vid2b').addEventListener('ended',stop4,false);
              function stop4(e) {
                  
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
        random = Math.floor((Math.random() * 10000000) + 1);
        console_dev("Se Genera nuevo ID");

        clearTimeout(time_banner);
        console_dev("Se elimina timeout Banner");
        //Show first event
        $('.reportar_facebook').show();
        $('.reportar_otro_amigo').hide();
        $('#search_friend').val('');
        $('#photo_friend').val('');
        $('#id_friend').val('');
        $('#beers_input').val('');

        $('#profile-thumb').empty();
        $('body').removeClass().addClass('steps step_1');

        //Mute video
        $(".vid2, #profile-thumb").hide();
        //Hide rec square
        $('.marco_video, .play').hide();

        
        video2.pause();
        video2.currentTime = 0;

        
        video2a.pause();
        video2a.currentTime = 0;

        
        video2b.pause();
        video2b.currentTime = 0;
        console_dev("Se paran todos los videos");

        //Play First Video

        $("#vid").show();
        video.currentTime = 0;
        video.play();
        
        return false;
        event.preventDefault();
      });

      //Click modify
      reportAnother.click(function(event) {
        random = Math.floor((Math.random() * 10000000) + 1);
        console_dev("Se Genera nuevo ID");

        clearTimeout(time_banner);
        console_dev("Se elimina timeout Banner");
        //Show first event
        $('.reportar_facebook').show();
        $('.reportar_otro_amigo').hide();
        $('#search_friend').val('');
        $('#photo_friend').val('');
        $('#id_friend').val('');
        $('#beers_input').val('');

        $('#profile-thumb').empty();
        $('body').removeClass().addClass('steps step_1');

        //Mute video
        $(".vid2, #profile-thumb").hide();
        //Hide rec square
        $('.marco_video, .play').hide();
        
        video2.pause();
        video2.currentTime = 0;
        
        video2a.pause();
        video2a.currentTime = 0;

        
        video2b.pause();
        video2b.currentTime = 0;
        console_dev("Se paran todos los videos");

        //Play First Video

        $("#vid").show();
        video.currentTime = 0;
        video.play();
        
        return false;
        event.preventDefault();
      });
    }

    //Search friends inside FB response.
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
      console_dev("coincidieron: "+ count)

      // Input: search friend
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
    }

    

    function faceConnect(){
      console_dev('Peticiones de FB');
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
        console_dev("Se encontraron : "+response.data.length+" amigos");
        $('.loader').hide();

        //Show actions on bottom
        $('body').addClass('steps step_1');
          

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
            $('.box_amigos_facebook').slideDown(400);
            setTimeout(function () {
                var value_t = $("#search_friend").val();
                if(value_t.length >= 1){
                  console_dev(value_t);
                  filler(response, value_t, boxContainer);
                }else{
                  filler(response, '', boxContainer);
                }
            },100);
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
          $(this).addClass('loaded');
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
          var foto1 = fototexto(canvas1,"img/600x600.jpg", "img/sello.png",urlFoto, 115, 60,0.7,$('#search_friend').val() , $('#beers_input').val(), 430,470, 'hoefler_textregular', 60, 600, 600, trimedNme,callBack1);

          function callBack1(url, nombre){
            console_dev('Foto Generada 1: '+url);
            var urlformat = "https://datapola.com/subidas/"+nombre+".jpg";
            console_dev("URL retornada: " + urlformat);

            //Post object
            FB.api(
              'me/objects/datapola:amigo',
              'post',
              {'object': {
                'og:url': 'https://datapola.com/i.php?id='+nombre,
                'og:title': 'DESCUBRE POR QUÉ ESTÁS REPORTADO INGRESANDO AQUÍ',
                'og:type': 'datapola:amigo',
                'og:image': urlformat,
                'og:description': 'Tú también puedes reportar a tus amigos en DATAPOLA.',
                'fb:app_id': '1660712804256395'
              }},
                function(response) {
                  if (!response || response.error) {
                    console_dev(String('Error: '+response.error));
                  } else {
                    console_dev("Exito al Crear Objero ");
                  }
                //Read last object
                console_dev("Objeto Creado: " + urlformat);
                FB.api(
                  'me/objects/datapola:amigo',
                  'get',
                  function(response) {
                    if (!response || response.error) {
                      console_dev(String('Error: '+r.error));
                    } else {
                      console_dev("Exito al Recuperar Objeto ");
                    }
                    var id_amiguito = response.data[0].id;

                    //Action Standar
                    if(ios == true){
                      console_dev("Abriendo Modal iOS");
                      FB.api(
                          'me/datapola:reportar',
                          'post',
                          {
                             amigo: id_amiguito, // make sure to have the apropiate og:type meta set
                             tags: $('#id_friend').val(), // the tokens ids for those friens you wanna tag and you got on previous step
                          },
                          function(response) {
                            if (!response || response.error) {
                              console_dev(response.error);
                            } else {
                              alert("Su publicacion se realizo con éxito");
                              $('.reportar_facebook').hide();
                              $('.modificar').hide();
                              $('.reportar_otro_amigo').show();
                              console_dev("Exito en la publicacion en FB" + r);
                              //$('#fb-root').empty();
                              $('.reportar_facebook').removeClass('loaded');
                              cancelopublish = true;
                            }
                            
                          }
                      );
                    }else{
                      FB.ui({
                        method: 'share_open_graph',
                        action_type: 'datapola:reportar',
                        action_properties: JSON.stringify({
                          amigo:id_amiguito,
                          tags:String($('#id_friend').val())
                        })
                      }, function(r){ 
                        if (!r || r.error) {
                          console_dev(String('Error: '+r.error));
                        } else {
                          $('.reportar_facebook').hide();
                          $('.modificar').hide();
                          $('.reportar_otro_amigo').show();
                          console_dev("Exito en la publicacion en FB" + r);
                          //$('#fb-root').empty();
                          $('.reportar_facebook').removeClass('loaded');
                          cancelopublish = true;
                          
                        }
                      });// FB ui

                    }//else ios
                    
                });//FB api get
            });//FB api post
          }
        });//End of publish bs

        //Validamos si es un referido
        validRefer();
        //Draw image profile on video if the user is refere

      });//End of async
    }//End of facbook connect
    
    function validRefer(){
      if(body.hasClass('refered')){
        $('.compartir_facebook').click(function(){
          FB.ui({
              method: 'share',
              href: window.location.href ,
          });
        });
        $('.loader').hide();
        $('.banner').hide();
        $('.wrapper_video').show();
        $("#vid2").show();
        
        
        //Autoplay video if is connected

        //video
        $('body').removeClass().addClass('steps step_3');

        //Play Videpo
        setTimeout(function(){ video2.play(); }, 500);
        
        //Launch image
        //When vid2 is finished
        document.getElementById('vid2').addEventListener('ended',stop2,false);
        function stop2(e) {
            if(ios == true){
              setTimeout(function(){ $('.banner').show(); $('.wrapper_video').effect( "shake", {times:1, distance:2}, 100 );}, 1000);
            }else{
              setTimeout(function(){ $('.banner').show();}, 11000);
            }
            

            $('.vid2').hide();
            $('#vid2a').show();
            //Play second Video
            video2a.play();
            //Attach image generated
            $('#profile-thumb').show()
            //document.getElementById('profile-thumb').innerHTML = "<img src='" + urlformat + "' width='290' height='390'>";
            $('#profile-thumb').show();
        }

        //When vid2a is finished
        document.getElementById('vid2a').addEventListener('ended',stop3,false);
        function stop3(e) {
            if(ios == true){
              setTimeout(function(){ $('.wrapper_video').effect( "shake", {times:1, distance:2}, 100 );}, 1000);
            }

            $('.banner').hide();
            $('.vid2').hide();
            $('#vid2b').show();
            //Play third Video
            console_dev("Play ultimo video");
            video2b.play();
            //Attach image generated
            $('#profile-thumb').hide();
        }

        //When vid2b is finished
        document.getElementById('vid2b').addEventListener('ended',stop4,false);
        function stop4(e) {
        }

        $('.reportar_amigo_final').click(function(event) {
          /* Act on the event */
          //
          window.location.href = "https://datapola.com";
        });

      }else{
          $('.loader').hide();
          console_dev("borrado de loader, carga video 1");
          //$('.marco_video').show();
          $('.wrapper_video').show();
          $('#vid').show();
          video.play();
          document.getElementById('vid').addEventListener('ended',stopT,false);
          function stopT(e) {
              
          }
          console_dev('shake vid');
      }
    }





    //************
    //*** INIT ***
    //************

    init();

    //******************
    //*** FOTO TEXTO ***
    //******************

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
        insertarFotoDrag(canvas, url_fondo,false, false,1, 'fondo',0,0,1, callback1);
        insertarFotoDrag(canvas, url,false, false,2, 'foto',x,y,scale, callback2);
        //texto1
        canvas.add(texto1);
        canvas.centerObjectH(texto1);
        canvas.moveTo(texto1, 3);

        //texto2
        canvas.add(texto2);
        canvas.centerObjectH(texto2);
        canvas.moveTo(texto2, 4);

        insertarFotoDrag(canvas, url_sello,false, false,5, 'sello',0,0,1, callback3);
        canvas.renderAll();

        var carga1 = false;
        var carga2 = false;
        var carga3 = false;
        function callback1(nombre_foto){
          //console_dev(nombre_foto);
          carga1 = true;
          validCallbacks()
        }
        function callback2(nombre_foto){
          //console_dev(nombre_foto);
          carga2 = true;
          validCallbacks()
        }
        function callback3(nombre_foto){
          //console_dev(nombre_foto);
          carga3 = true;
          validCallbacks()
        }
        function validCallbacks(){
          if(carga1==true && carga2==true && carga3==true){
            create(canvas, tName, callback);
            console_dev("Todas las fotos cargadas al canvas... creando");
          }else{
            //console_dev("Faltan fotos por cargar al canvas");
          }

        }
    }

     //******************
    //*** FOTO TEXTO ***
    //******************

    //Funcion para insertar los elementos desde una URL
    function insertarFotoDrag(canvas, url, seleccionable, eventos, zindex, nombre, left, top, scale, callback_imagen)
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
            callback_imagen(String(nombre+" cargada en canvas"));
        }, {crossOrigin: 'Anonymous'});
    }

    //Funcion para crear la foto en el canvas
    function create(canvas, tName, callback){
        canvas.discardActiveObject();
        canvas.renderAll();
        var return_t = '';

        console_dev('name: ' + tName);

        $('body').addClass('loading');
        var imagen = canvas.toDataURL({
            format: 'jpeg',
            multiplier: 2,
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
            console_dev('foto id:'+respond);
            callback(respond, tName);
            $('body').removeClass('loading');
        });
    };
});
//Globales
  var canvas ='';
  var context ='';
  var imageLoader = '';


  $( window ).load(function() {
      //Video events and functions

      $('#vid').click(function(){
        this.paused?this.play():this.pause();
        //class de parent
        $(this).parent().toggleClass('paused');
      });

      //Facebook
      var url_l = String((window.location != window.parent.location) ? document.referrer: document.location.href);
      var dominio = "datapola.tk/";
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
          //window.top.location.href = "https://datapola.tk/"
      }else{
          //
      }
      var ref = document.referrer;
      var fb_valid = false;
      if (ref.match(/^https?:\/\/([^\/]+\.)?facebook\.com(\/|$)/i)) {
        fb_valid = true;
      }

      if(url_l == "https://www."+dominio  || url_l == "https://"+dominio || url_l == "http://"+dominio || url_l == "http://www."+dominio){
          // if(fb_valid == false){
          //     //afuera de Facebook
          //     (function(d, s, id) {
          //       var js, fjs = d.getElementsByTagName(s)[0];
          //       if (d.getElementById(id)) return;
          //       js = d.createElement(s); js.id = id;
          //       js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.7&appId=1660712804256395";
          //       fjs.parentNode.insertBefore(js, fjs);
          //     }(document, 'script', 'facebook-jssdk'));
          // }else{
              //viene de Facebook
              //window.top.location.href = "https://www.facebook.com/pages/VenezuelaQuiere/836776256420302?sk=app_447297352129313";
              (function(d, s, id){
               var js, fjs = d.getElementsByTagName(s)[0];
               if (d.getElementById(id)) {return;}
               js = d.createElement(s); js.id = id;
               js.src = "//connect.facebook.net/en_US/sdk.js";
               fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));
              
              window.fbAsyncInit = function() {
                  FB.init({
                    appId: '1660712804256395',
                    status: true,
                    xfbml: true,
                    cookie: true,
                    version    : 'v2.7',
                    channelUrl: url_l+'/channelUrl.html'
                  });
                  FB.getLoginStatus(function(response) {
                    // Check login status on load, and if the user is
                    // already logged in, go directly to the welcome message.
                    if (response.status == 'connected') {
                      //Hide facebook connect div
                      $('.content_facebook_connect').hide();

                      FB.api(
                        '/me',
                        'GET',
                        {
                          "fields":
                          "context,first_name,last_name,name,id,picture.width(290).height(390).type(large)"},
                        function(response) {
                            document.getElementById('profile-thumb').innerHTML = "<img src='" + response.picture.data.url + "' width='290' height='390'>";
                        }
                      );

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
              // };

              

              // Place following code after FB.init call.

              function onLogin(response) {
                if (response.status == 'connected') {
                  FB.api('/me?fields=first_name', function(data) {
                      var value_t = data.first_name;
                      $("#texto1").val(value_t);
                      canvas.clear();
                      init("img/bg.png", value_t, 0,78, 'Lato', 60);
                  });
                }
              }
          }
      }else{
          //adentro de Facebook
          window.fbAsyncInit = function() {
              FB.init({
                appId      : '1660712804256395',//app
                xfbml      : true,
                version    : 'v2.7'
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
                  init("img/bg.png", value_t, 0,78, 'Lato', 60);
              });
            }
          }
      }
      //******
      //Canvas
      //******
      //$("#share_f").hide();
      //$("#share_l").hide();
      //$("#download").hide();

      var canvas = new fabric.Canvas('c');
      canvas.setWidth(400);
      canvas.setHeight(400);
      //desactivamos seleccion por grupos
      canvas.selection = false;
      // Permitimos el scroll
      canvas.allowTouchScrolling = true;

      //inicializacion
      //Toma la foto de FB dentro del canvas

      init("img/bg.png", "", 0,78, 'Lato', 60);
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
                  var nombre_t = $("#texto1").val();
                  downloadURL = "https://datapola.tk/download_pic.php?file="+respond+"&name="+nombre_t;
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
                      $("#download").prop("href", "download_pic.php?file="+respond+"&name="+nombre_t);
                      /*
                      FB.ui(
                      {
                          method: "feed",
                          link: 'https://datapola.tk',
                          name: 'Venezuela Quiere',
                          app_id: '447297352129313',
                          description: 'Venezuela quiere Cambio',
                          caption: $('#albumName').text(),
                          source: "https://datapola.tk/download_pic.php?file="+respond+"&name="+nombre_t+"QuiereCambio",
                          type: 'photo',
                          picture: "https://datapola.tk/download_pic.php?file="+respond+"&name="+nombre_t+"QuiereCambio"

                      }, function(response){});
                      */





                  }else{
                       $("#download").prop("href", "download_pic.php?file="+respond+"&name="+nombre_t);

                       window.location.href = "download_pic.php?file="+respond+"&name="+nombre_t;
                  }
                  var url_id = respond.split("/");


                  FB.api(
                      "/me/photos",
                      "POST",
                      {
                          "url": "https://datapola.tk/download_pic.php?file="+respond+"&name="+nombre_t+"QuiereCambio"
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
                                      "url": "https://datapola.tk/download_pic.php?file="+respond+"&name="+nombre_t+"QuiereCambio"
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
                              link: 'https://datapola.tk',
                              name: String($("#texto1").val())+' Quiere Cambio',
                              app_id: '447297352129313',
                              description: 'Cambia tu foto de perfil en Facebook y WhatsApp ¡ Y actívate por el cambio !',
                              caption: 'venezuela quiere cambio',
                              source: downloadURL,
                              type: 'photo',
                              picture: "https://datapola.tk/download_pic.php?file="+respond+"&name="+nombre_t+"QuiereCambio"

                          }, function(response){});
                  });


                  $("#share_f0").val("https://datapola.tk/index.php?id="+url_id[1]);
                  $("#share_f").prop("data-href", "https://datapola.tk/index.php?id="+url_id[1]);





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
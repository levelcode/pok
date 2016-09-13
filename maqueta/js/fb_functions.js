// custom functions
$(function(){

//Video events and functions
$('#vid,#vid2').click(function(){
  this.paused?this.play():this.pause();
  //class de parent
  $(this).parent().toggleClass('paused');
});

//Hide canvas
$('#can_hidden').hide();

//Facebook global variables

var url_l = String((window.location != window.parent.location) ? document.referrer: document.location.href),
    body = $('body'),
    dominio = "datapola.com/",
    movil = false,
    ios =  iOS(),
    ref = document.referrer,
    fb_valid = false;


function faceConnect(){

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

            //Autoplay video if is connected
            var video = $("#vid, #vid2").get(0);
                video.play();

            //Draw Hidden Canvas
            function drawHidden(url) {

              var can = document.getElementById('can_hidden'),

                ctx = can.getContext('2d'),
                imgUrl = url;

                var img = new Image();
                img.src = url;

                var img2 = new Image();
                img2.src = 'https://'+dominio+'img/bg-canvas.jpg';

                ctx.drawImage(img2, 0, 0);
                ctx.drawImage(img, 30, 80);


                $('#can_hidden').hide();

            }

            //Draw image profile on video
            FB.api(
              '/me',
              'GET',
              {

                "fields":
                "context,first_name,last_name,name,id,picture.width(290).height(390).type(large)"},

              function(response) {

                  //Get profile photo if is refered
                  if(body.hasClass('refered')){
                    document.getElementById('profile-thumb').innerHTML = "<img src='" + response.picture.data.url + "' width='290' height='390'>";
                  }
              }

            );

            //Login for perimisions
            FB.login(function(response) {
              FB.api(
                '/me/friends',
                'GET',
                {

                  "fields":
                  "context,first_name,last_name,name,id,picture.width(290).height(390).type(large)"},

                function(response) {

                    var boxContainer = $('.box_amigos_facebook');

                    for(y=0; y<response.data.length; y++) {

                      $('.hidden').hide();

                      //Load images
                       boxContainer.append("<div class='box_perfil'><img src='" + response.data[y].picture.data.url + "'/><span class='nombre'>" + response.data[y].name + "</span><span class='hidden id_man'>"+ response.data[y].id +"</span></div>");


                      //Action for input
                      boxContainer.hide();

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

                  //Click for publish BS
                  $('#push_public').click(function(e){
                    //Share action

                      FB.ui(

                      {

                          method: "feed",

                          to: $('#id_friend').val(),

                          link: 'https://datapola.tk/?id='+$('#id_friend').val(),

                          name: $('#search_friend').val() + ' debes '+ $('#beers_input').val() + ' Polas',

                          app_id: '1660712804256395',

                          description: 'Ingresa y reporta a los amigos que te deben las polas',

                          caption: 'Datapola',

                          //source: downloadURL,

                          type: 'photo',

                          picture: $('#photo_friend').val()



                      }, function(response){});

                      //Create canvas

                      var can = document.getElementById('can_hidden'),
                          ctx = can.getContext('2d'),
                          imgUrl = $('#photo_friend').val();

                        var img = new Image();
                        img.src = imgUrl;

                        var img2 = new Image();
                        img2.src = 'https://'+dominio+'img/bg-canvas.jpg';

                        ctx.drawImage(img2, 0, 0);
                        ctx.drawImage(img, 0, 0);

                      return false;

                  });

                }

              );

            }, {scope: 'publish_actions'});

          } else {

            // Otherwise, show Login dialog first.

            FB.login(function(response) {

            }, {scope: 'publish_actions'});

          }

        });
    }
}//End of face connect

  //Agegate validation

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

    $(window).load(function() {
      // If There is no Age Cookie or Cookie is set to Failed Hide Contents of Page and display Age Gate PopUp
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
          }
        else {
            //window.location.href = "http://www.talkingalcohol.com/espanol/";
        }
    });
    // Calculate your age based on inputs

      var day = $("#birthDay").val();
      var month = $("#birthMonth").val();
      var year = $("#birthYear").val();

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


  // FORM Submit
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




//iOS emulator function

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

  //Handle if video is finished
  document.getElementById('vid').addEventListener('ended',myHandler,false);
  function myHandler(e) {
      //Show actions on bottom
      $('body').addClass('steps');
  }

  document.getElementById('vid2').addEventListener('ended',myHandler,false);
  function myHandler(e) {
      //Show actions on bottom
      $('body').addClass('steps');
    }


//Domain validation



    //Function Facebook connect

    //If body have class refered by facebook
    if(body.hasClass('refered')){
      //Display just one video
      $('#vid').show();
      $('#vid2').remove();
      $('.content_facebook_connect').remove();
      //Launch facebook connect if widow is load
      $(window).load(function(){
        //Launch face connect
        faceConnect();
      });
    }else{
      //Display just one video
      $('#vid').remove();
      $('#vid2').show();
      //Click on facebook connect
      $('.content_facebook_connect .fb_boton').click(function(){
          //Launch face connect
          faceConnect();
          $(this).parent().remove();

        });
    }






});

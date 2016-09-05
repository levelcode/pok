// custom functions
$(function(){


//Facebook global variables

var url_l = String((window.location != window.parent.location) ? document.referrer: document.location.href),
    body = $('body'),
    dominio = "datapola.tk/",
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
                $('.content_facebook_connect').remove();

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

                  //Launch Canvas
                  setTimeout(2000,drawHidden(response.picture.data.url));

              }

            );

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


//Video events and functions
  $('#vid').click(function(){
    this.paused?this.play():this.pause();
    //class de parent
    $(this).parent().toggleClass('paused');

  });


//Domain validation

  if(url_l == "https://www."+dominio  || url_l == "https://"+dominio || url_l == "http://"+dominio || url_l == "http://www."+dominio){

    //Function Facebook connect

    //If body have class refered by facebook
    if(body.hasClass('refered')){
      //Launch facebook connect if widow is load
      console.log('enterhere');
      $(window).load(function(){
        //Launch face connect
        faceConnect();
      });
    }else{
      //Click on facebook connect
      $('.content_facebook_connect .fb_boton').click(function(){
          //Launch face connect
          faceConnect();
      });

    }


  }//End of domain validation



});

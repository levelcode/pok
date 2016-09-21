//FB Object POST METHOD
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
  var objectID = response.id;
  //Action
  FB.api(
      'me/datapola:reportar',
      'post',
      {
         amigo: "https://datapola.com/index.php?id="+nombre, // make sure to have the apropiate og:type meta set
         link: objectToLike,
         tags: $('#id_friend').val(), // the tokens ids for those friens you wanna tag and you got on previous step
         caption: 'DATAPOLA',
         description: 'Que todo el mundo sepa que usted le promete polas de cumpleaños a sus amigos y nunca les paga.',
         image: urlformat,
         message: $('#publication').val(),
         picture: urlformat
      },
      function(response) {
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
        
      }
  );
});//End FB Object


//FB Object UI

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
            action_type: 'me/datapola:reportar',
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


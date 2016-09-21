FB.api(
    'me/objects/datapola:amigo',
    'post',
    {'object': {
      'og:url': 'https://datapola.com/test/index.php?id='+nombre,
      'og:title': 'HA SIDO REPORTADO EN DATAPOLA',
      'og:type': 'datapola:amigo',
      'og:image': urlformat,
      'og:description': 'Que todo el mundo sepa que usted le promete polas de cumpleaños a sus amigos y nunca les paga.',
      'fb:app_id': '1660712804256395'
    }},
     function(response) {
      console.log(response);
      FB.api(
      'me/datapola:reportar',
      'post',
      {
        'caption': 'HA SIDO REPORTADO EN DATAPOLA',
        'tags' : String($('#id_friend').val()),
        'message' : String($('#publication').val()),
        'amigo': String('"'+'https://datapola.com/test/index.php?id='+nombre+'"')
      },
     function(response) {
        if (!response || response.error) {
          setTimeout(function(){$('.content_terms').fadeOut(0); $('#push_public').show();$('#retorno_pub').empty();}, 3000);
          console.log(response.error);
          $('#retorno_pub').empty();
          $('#retorno_pub').append('Error al publicar en FB');
        } else {
          setTimeout(function(){$('.content_terms').fadeOut(0); $('#push_public').show();$('#retorno_pub').empty();}, 3000);
          $('#retorno_pub').empty();
          $('#retorno_pub').append('Éxito al publicar en FB');
          console.log("Éxito en la publicacion en FB" + response);
        }
      }
    );
      
  });


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


  $(document).ready(function() {



// Отправить POST запрос на сервер с определенным URL, данными, и функцией которую нужно выполнить в success
  })
function ajaxPostReq(urlToServer, dataToServer, doFunctionOnSuccess){
           var test;
           console.log('addBildingsToStreetsHidenRow');
           
           $.ajax(urlToServer, {
             type: 'POST',
             data: dataToServer,
            success: function(result){
                doFunctionOnSuccess(result);        
        }
    })
  }; 

// Отправить Get запрос на сервер с определенным URL(urlToServer), и с ответом выполнить функцию ( doWhithRespons) 
  function ajaxGetReq(urlToServer, doWhithRespons){
          $.get(urlToServer, doWhithRespons);
  }

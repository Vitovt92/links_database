  $(document).ready(function() {



// Отправить POST запрос на сервер с определенным URL, данными, и функцией которую нужно выполнить в success

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
      
      
  }
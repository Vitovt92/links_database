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
      
  function ajaxGetReq(urlToServer, doWhithRespons){
          $.get(urlToServer, function(response){
      console.log(response);
     $('.street_table').remove();
      var table = $('<table></table>').addClass('street_table');

      $('.streetHolder').append(table);
    
    for(var i=0; i<response.length;i++){
          console.log(response[i].deleted);
        if(response[i].deleted){
            console.log(i+'breaked');
            continue;
        }
        
    var tableTd = $('<td class="street_column_id">' + response[i].id + '</td>'+'<td class="street_column_new_name">' + response[i].name_street_new + '</td>'+'<td>' + response[i].name_street_old + '</td>' + '<td>' + response[i].comment  + '</td>'+'<td>'+'<a class="delete_street_button"> x </a>'+'</td>');
    var tableTr = $('<tr></tr>').addClass('street_table_row').append(tableTd);
        console.log('new row');
    var tableTrHiden = $('<tr class="street_table_row_hiden"></tr>').hide();    
      $('.street_table').append(tableTr);
      $('.street_table').append(tableTrHiden);
    }
 });
  }

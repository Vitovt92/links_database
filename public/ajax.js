$(document).ready(function() {
$.get('/streets', function(response){
      console.log(response[1].id);
    
      var table = $('<table class="street_table"></table>');
      var tableTr = $('<tr class="street_row"></tr>');
      
      $('.streetHolder').append(table);
    
    for( var i=0; i < response.length - 1; i++){
        
      var tableId = $('<td>'+response[i].id+'</td>');
      var tableNameStreetNew = $('<td>' + response[i].name_street_new + '</td>');
      var tableNameStreetOld = $('<td>' + response[i].name_street_old + '</td>');
      var tableComment  = $('<td>' + response[i].comment  + '</td>');
    
      $('.street_table').prepend(tableTr);
      $('.street_table').children('tr').append(tableId);
      $('.street_table').children('tr').append(tableNameStreetNew);
      $('.street_table').children('tr').append(tableNameStreetOld);
      $('.street_table').children('tr').append(tableComment);
    }
  });
});

// Добавить новую улицу в Базу 

$('.add_new_street_form')on('submit', function(event){
    event.preventDefault();
    var form = $(this);
    $.ajax('/add_new_street', {
        type:'POST',
        data: form.serialize(),
        success:function(result){
            console.log('result');
        }
    })
})
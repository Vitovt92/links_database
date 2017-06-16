 
$(document).ready(function() {
// Поиск площадок
    
$('.find_place_button').on('click', function(){
  
    $('.find_street_form').css('display', 'block');
    
    $.get('/streets', function(response){
        
      for(var i=0; i<response.length; i++){
        
        if(response[i].deleted){
            continue;
        }
          
        var nameOfStreetNew = response[i].name_street_new;
        var nameOfStreetOld = '(' + response[i].name_street_old + ')';
            
        if (response[i].name_street_old == null){nameOfStreetOld = ""};
            
        var option = $('<option>').val(nameOfStreetNew + ' ' + nameOfStreetOld ).data('streetsID', response[i].id);
        
        console.log(option.data('streetsID'));
        
        $('#streets').append(option);
            
      }
    })
})
    
$('.find_street_form').on('submit', function(event){
  event.preventDefault();
  console.log('selected');
  
});
    
    
// Показать список улиц
    
$('.list_of_streets_buttom').on('click', function(){
 
    $.get('/streets', function(response){
      console.log(response);
     $('.street_table').remove();
      var table = $('<table></table>').addClass('street_table');
     // var tableTr = $('<tr></tr>').addClass('street_table_row');
    
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
   
})
// Добавить список домов в таблицу
    
$('.streetHolder').on('click', '.street_column_new_name', function(){
   
   var hidenRow = $(this).closest('.street_table_row').next('.street_table_row_hiden');
   var clickedRow = $(this).closest('.street_table_row');
    
    var clickedRowId = clickedRow.find('.street_column_id').text();
     console.log(clickedRowId);
    if(hidenRow.css('display') === 'table-row'){
         hidenRow.fadeOut();
    } else {
//        var bildings = getBildingsFromServer();
        addBildingsToStreetsHidenRow()
        hidenRow.fadeIn();   
        };  
    
     function addBildingsToStreetsHidenRow(){
      
  
       
       var ansver = function(callback){
          var data; 
           $.ajax('/bildings_of_street', {
      
             type: 'POST',
             data: {
             "idOfStreet": clickedRowId
             },
            success: function(result){
                 var addingBildingRowHead = $('<th><td> Номер дома </td><td> Комментарий </td></th>');
                 var addingBildingRow = $('<tr></tr>');
                 var addingBildingColumn = $('<td></td>').text(result[0].bilding_namber); 
                
                hidenRow.append(addingBildingRowHead);
                addingBildingRow.append(addingBildingColumn);
                hidenRow.append(addingBildingRow); 
              console.log(result[0]);
              callback(result);
              console.log(data);
        }
    })
           
         console.log(data);
        

     }
    
    
  }; 
  

    
    
// Пометить улицу как удаленную

$('.streetHolder').on('click', '.delete_street_button', function(){
    
    var deleted_street_id = $(this).closest('.street_table_row').find('.street_column_id').text();
     
    if(ask_prevent_question("пометить улицу с id = " + deleted_street_id + " как удаленную?")){
      console.log('deleted' + deleted_street_id);
        
      $(this).closest('.street_table_row').addClass('deleted');
        
      $.ajax('/remove_street', {
        type: 'POST',
        data: {
            "id": deleted_street_id
        }
    })
    };
     
});
    
// Добавление улиц в БД
    
$('.add_new_street_form').on('submit', function(event){
    console.log("toot");
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
 
    // Спросить, действительно
    function ask_prevent_question(whatYouWhantToDelete){
        return confirm("Вы уверены, что хотите " + whatYouWhantToDelete );
};
    
})
});
 
// Добавить таблицу с информацией по улицам на страницу

function appendStreetTable(response){
     
     var containerOfStreets = $('.container_of_streets'); 
     var nameOfColumnsHeader = $('<header><table><tr><td>Название улицы</td><td>Район</td> <td>Комментарий</td> <td><i title="Добавить улицу" class="material-icons show_new_street_form_button">add</i></td> </tr></table></header>')
     var sectionAddNewStreetForm = $('<div></div>').addClass('section_add_new_street_form');
     var streetArticle = $('<article></article>').addClass('street_article');
     var streetHeader = $('<header></header>').addClass('street_header');
     var table = $('<table></table>');

     containerOfStreets.empty(); // Предварительно очистить єлемент от всего.
      
     containerOfStreets.append(nameOfColumnsHeader); // Добавить хедер таблицы
    
     containerOfStreets.append(sectionAddNewStreetForm);
    
     streetHeader.data('street_id', response[0].id);
       
     containerOfStreets.append(streetHeader);
     
     for(var i=0; i<response.length; i++){
        addStreetRow(response[i]); 
     };
    
      containerOfStreets.append(table);
//     $('.streetHolder').append(table);
//    
//    for(var i=0; i<response.length;i++){
//          console.log(response[i].deleted);
//        if(response[i].deleted){
//            console.log(i+'breaked');
//            continue;
//        }
//        
//    var tableTd = $('<td class="street_column_id">' + response[i].id + '</td>'+'<td class="street_column_new_name">' + response[i].name_street_new + '</td>'+'<td>' + response[i].name_street_old + '</td>' + '<td>' + response[i].comment  + '</td>'+'<td>'+'<a class="delete_street_button"> x </a>'+'</td>');
//    var tableTr = $('<tr></tr>').addClass('street_table_row').append(tableTd);
//        console.log('new row');
//    var tableTrHiden = $('<tr class="street_table_row_hiden"></tr>').hide();    
//      $('.street_table').append(tableTr);
//      $('.street_table').append(tableTrHiden);
//    }
 
function addStreetRow(streetsObject){
   
     var nameOfNeededProp = ["name_street_new", "name_street_old", "comment"];
     var classOfTd = 'street_header_td'
     var appendedColumns = createTableColumnUsingObjProp(streetsObject, nameOfNeededProp, classOfTd);
     var tr = $('<tr></tr>');
     var iconBild = $('<td class="show_edit_form_table"><i class="material-icons">build</i></td>');
    
     tr.append(appendedColumns);
     tr.append(iconBild);
    
     table.append(tr);
    
    
};
}



// Берет объект object, и создает колонки таблицы. Используя только те свойства объекта которые указаны в массиве propWeNeedArr. Еще добавляет колонкам CSS класс classOfTd
function createTableColumnUsingObjProp(object, propWeNeedArr, classOfTd){
    if (!classOfTd){ classOfTd = ''};
    var columns = '';
    for (objProp in object){
        propWeNeedArr.forEach(function(item, i, arr){
            if (objProp === item){
                if (object[objProp] === null){
                columns += '<td class="' + classOfTd + '">' + '</td>'; 
                } else {
                columns += '<td class="' + classOfTd + '">' + object[objProp] + '</td>';
                }
            }
            
        });
    }
     console.log(columns);
    return columns;
}
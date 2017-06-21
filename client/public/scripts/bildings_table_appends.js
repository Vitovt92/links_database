 
// Добавить таблицу с информацией по улицам на страницу

function appendStreetTable(response){
     
     var containerOfStreets = $('.container_of_streets'); 
     var nameOfColumnsHeader = $('<header><table><tr><td>Название улицы</td><td>Устаревшее название</td><td>Район</td> <td>Комментарий</td> <td><i title="Добавить улицу" class="material-icons show_new_street_form_button">add</i></td> </tr></table></header>')
     var sectionAddNewStreetForm = $('<div></div>').addClass('section_add_new_street_form');
     var streetArticle = $('<article></article>').addClass('street_article');
     

     containerOfStreets.empty(); // Предварительно очистить єлемент от всего.
      
     containerOfStreets.append(nameOfColumnsHeader); // Добавить хедер таблицы
    
     containerOfStreets.append(sectionAddNewStreetForm);
    
     for(var i=0; i<response.length; i++){
        addStreetRow(response[i]); 
     };
    

function addStreetRow(streetsObject){
   
     var nameOfNeededProp = ["name_street_new", "name_street_old", "district", "comment"];
     var classOfTd = 'street_header_td'
     
     var tr = $('<tr></tr>');
    
     var streetHeader = $('<header></header>').addClass('street_header');
     var table = $('<table></table>');
    
    var appendedColumns = createTableColumnUsingObjProp(streetsObject, nameOfNeededProp, classOfTd);
    
     tr.append(appendedColumns);
    
     table.append(tr);
    
     streetHeader.append(table);
     streetHeader.data('street_id', streetsObject.id);
    
    containerOfStreets.append(streetHeader);
  
};
}



// Берет объект object, и создает колонки таблицы. Используя только те свойства объекта которые указаны в массиве propWeNeedArr. Еще добавляет колонкам CSS класс classOfTd

function createTableColumnUsingObjProp(object, propWeNeedArr, classOfTd){
    if (!classOfTd){ classOfTd = ''};
    
    var iconBild = '<td class="show_edit_form_table"><i class="material-icons">build</i></td>';
    var columns = '';
    
    for (objProp in object){
        propWeNeedArr.forEach(function(item, i, arr){
            if (objProp === item){
                console.log(objProp);
            if (object[objProp] === null){
                columns += '<td class="' + classOfTd + '">' + '</td>'; 
             } else {
                columns += '<td class="' + classOfTd + '">' + object[objProp] + '</td>';
             }
   
            }
        });
            
    }
     columns += iconBild;
        
             if (object.deleted){
                 columns = '';
             }
    return columns;
}


function appendAddNewStreetForm() {
  var addNewStreetForm = '<form class="add_new_street_form" action = "/add_new_street" method="post">'+
                '<p>'+
                 ' <label for="new_street_name_new">Сучасна назва вулиці</label>'+
                '</p>'+
                '<p>'+
                  '<input type="text" required placeholder="Назва вулиці" name="new_street_name_new" class="new_street_name_new">'+
                '</p>'+
                '<p>'+
                  '<label for="new_street_name_old">Устаревшее название улицы</label>'+
               ' </p>'+
                '<p>'+
                  '<input type="text" name="new_street_name_old" class="new_street_name_old" placeholder="Застаріла назва">'+
                '</p>'+
               '<p>'+
                 '<label for="new_street_comments" >Комментарии</label>'+
               '</p>'+
               '<p>'+
                 '<input type="text" name="new_street_comments" class="new_street_comments" placeholder="Коментарі">'+
               '</p>'+
                 '<input type="submit" value="Додати вулицю">'+
               '</form>'
      return addNewStreetForm ;
    }
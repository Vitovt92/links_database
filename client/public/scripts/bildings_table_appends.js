 
// Добавить таблицу с информацией по улицам на страницу

function resAndAppendStreetTable(){
    var urlToServer = '/streets';
    var doWhithRespons = appendStreetTable;
  
    ajaxGetReq(urlToServer, doWhithRespons);
};

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

// Добавить сообщение message в элемент elementToAppend
function appendMessageNewStreet(elementToAppend, message){
    elementToAppend.append(message);
};

// Создать форму добавления улицы
function appendAddNewStreetForm() {
  var addNewStreetForm = '<form class="add_new_street_form">'+
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
                
                       '<p>'+
                         '<label for="new_street_district">Выберите район расположения улицы:</label>'+
                       '</p>'+
                       '<p>'+
                         '<select name="new_street_district">'+
                           '<option value="Голосеевский">Голосеевский</option>'+
                           '<option value="Дарницкий">Дарницкий</option>'+
                           '<option value="Деснянский">Деснянский</option>'+
                           '<option value="Днепровский">Днепровский</option>'+
                           '<option value="Оболонский">Оболонский</option>'+
                           '<option value="Печерский">Печерский</option>'+
                           '<option value="Подольский">Подольский</option>'+
                           '<option value="Святошинский">Святошинский</option>'+
                           '<option value="Соломенский">Соломенский</option>'+
                           '<option value="Шевченковский">Шевченковский</option>'+
                           '<option value="другое">Другое</option>'+
                        '</select>'+
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

// Создать форму редактирования улицы
function createEditThisStreetForm(thisStreet){
    var editForm = '<a class="delete_this_street"><i class="fa fa-trash"></i></a>'+
                   '<form class="edit_this_street_form" action = "/edit_this_street" method="post">'+
                   '<div class="block_of_edit_street_form">'+
                     '<p>'+
                       'Современное назнание улицы: <span class="modern_name_of_street">' +
                          thisStreet.this_street_name_new + 
                    '</span> <i class="material-icons change_button_edit_street_form">settings</i>' +
                     '</p>' +
                     '<div class="hiden_part_of_edit_street_form">'+
                       '<p>' +
                         '<label for="edit_street_name_new">Введите новое значение:</label>' +
                       '</p>' +
                       '<p>' +
                         '<input type="text" placeholder="" name="edit_street_name_new" class="edit_street_name_new">' +
                       '</p>' +
                     '</div>' +
                   '</div>' +
                   '<div class="block_of_edit_street_form">' +
                     '<p>' + 
                       'Устаревшее назнание улицы: <span class="old_name_of_street">' +
                          thisStreet.this_street_name_old +   
        '</span><i class="material-icons change_button_edit_street_form">settings</i>' +
                     '</p>' +
                     '<div class="hiden_part_of_edit_street_form">' +
                       '<p>' +
                         '<label for="edit_street_name_old">Введите устаревшее название улицы (не обязательно):</label>' +
                       '</p>' +
                       '<p>' +
                         '<input type="text" name="edit_street_name_old" class="edit_street_name_old" placeholder="">' +
                       '</p>' +
                    '</div>' +
                   '</div>' +
                   '<div class="block_of_edit_street_form">' +
                     '<p>' +
                       'Район: <span class="edit_district_of_street">' +
                           thisStreet.this_street_district +
                    '</span> <i class="material-icons change_button_edit_street_form">settings</i>' +
                     '</p>' +
                     '<div class="hiden_part_of_edit_street_form">' +      
                       '<p>' +
                         '<label for="new_street_comments">Выберите район расположения улицы:</label>' +
                       '</p>' +
                       '<p>' +
                         '<select name="districts">' +
                           '<option value="Голосеевский">Голосеевский</option>'+
                           '<option value="Дарницкий">Дарницкий</option>'+
                           '<option value="Деснянский">Деснянский</option>'+
                           '<option value="Днепровский">Днепровский</option>'+
                           '<option value="Оболонский">Оболонский</option>'+
                           '<option value="Печерский">Печерский</option>'+
                           '<option value="Подольский">Подольский</option>'+
                           '<option value="Святошинский">Святошинский</option>'+
                           '<option value="Соломенский">Соломенский</option>'+
                           '<option value="Шевченковский">Шевченковский</option>'+
                           '<option value="другое">Другое</option>'+
                        '</select>'+
                       '</p>'   +
                     '</div>'+
                   '</div>'+
                   '<div class="hiden_part_of_edit_street_form"> '+
                     '<p>'+
                       'Комментарии: <span class="edit_comments_of_street">' + 
                           thisStreet.this_street_comments +
                           '</span> <i class="material-icons change_button_edit_street_form">settings</i>' +
                     '</p>' +
                     '<div class="hiden_part_of_edit_street_form">' +      
                         '<p>' +
                           '<label for="new_street_comments">Введите новый коментарии (не обязательно):</label>' +
                         '</p>' +
                         '<p>' +
                           '<input type="text" name="new_street_comments" class="new_street_comments" placeholder="">' +
                         '</p>' +
                     '</div>' +
                   '</div>' +
                   
                 '<input type="submit" value="Сохранить изминения"> <a class="abort_changes_to_street">Отменить изменения</a>' +
               '</form>'
    return editForm;
}
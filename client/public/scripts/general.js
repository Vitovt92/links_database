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

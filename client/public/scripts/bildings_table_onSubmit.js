// Добавление улиц в БД
    
$('.container_of_streets').on('submit', '.add_new_street_form', function(event){
  
    event.preventDefault();
    var form = $(this);
    var urlToServer = '/streets/add_new_street';
    var dataToServer = form.serialize();
    
    var sectionAddNewStreetForm = form.closest('.section_add_new_street_form');
    
    appendMessageNewStreet(sectionAddNewStreetForm, );
    
    ajaxPostReq(urlToServer, dataToServer, doFunctionOnSuccess)
    
    function doFunctionOnSuccess(result){
        console.log(result);
        
        appendMessageNewStreet(sectionAddNewStreetForm, result);
        
        resAndAppendStreetTable();
        
        form.fadeOut();
    };
})

// Редактирование улиц

$('.container_of_streets').on('submit', '.edit_this_street_form', function(event){

    event.preventDefault();
    var form = $(this);
    var urlToServer = {
        edit_street_name_new: ,
        edit_street_name_old: ,
        districts: ,
        new_street_comments
    };
    
    var dataToServer = form.serialize();
    console.log(dataToServer);
    
});
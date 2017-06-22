// Добавление улиц в БД
    
$('.container_of_streets').on('submit', '.add_new_street_form', function(event){
    console.log("toot");
    event.preventDefault();
    var form = $(this);
    var urlToServer = '/add_new_street';
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
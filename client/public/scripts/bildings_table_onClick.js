$(document).ready(function() {

    //показать или спрятать форму добавления новой улицы
$('.container_of_streets').on('click', '.show_new_street_form_button', function(){
    var sectionAddNewStreetForm = $('.section_add_new_street_form');
    sectionAddNewStreetForm.empty();
    sectionAddNewStreetForm.append(appendAddNewStreetForm());
    showHide(sectionAddNewStreetForm);
})

    // показать или спрятать список домов на конкретной улице
$('.container_of_streets').on('click', '.street_header_td', function(){
    var infoOfStreet = $(this).closest('.street_article').find('.info_of_street');
    
    showHide(infoOfStreet);
})

    // показать или спрятать форму редактирования конкретрой улицы
$('.container_of_streets').on('click', '.show_edit_form_table', function(){
    var streetTr = $(this).closest('tr');

    var thisStreet = {
       this_street_name_new: streetTr.find('td:nth-child(1)').text(),
       this_street_name_old: streetTr.find('td:nth-child(2)').text(),
       this_street_district: streetTr.find('td:nth-child(4)').text(),
       this_street_comments: streetTr.find('td:nth-child(3)').text()
    };
    
    var street_article = $(this).closest('.street_article');
    var streetHeader = street_article.find('.street_header');
    var editThisStreet = street_article.find('.edit_this_street');
    
    editThisStreet.empty();
    editThisStreet.append(createEditThisStreetForm(thisStreet));
    showHide(editThisStreet);
    console.log(editThisStreet);
})
    // показать или спрятать части формы для редактирования улицы
$('.container_of_streets').on('click', '.change_button_edit_street_form', function(){
    var hidenPartOfStreetForm = $(this).closest('.block_of_edit_street_form').find('.hiden_part_of_edit_street_form');
    
    showHide(hidenPartOfStreetForm);
})
    // показать или спрятать список квартир в доме
$('.container_of_streets').on('click', '.bilding_header', function(){
    var placesInBildingHiden = $(this).closest('.bilding_container').find('.places_in_bilding_hiden');
    
    showHide(placesInBildingHiden);
})

  // Показать или спрятать описание абонента.  
    $('.container_of_streets').on('click', '.what_in_place', function(){
    var infoPlace = $(this).closest('.what_in_place_container').find('.info_place');
    showHide(infoPlace);
})

  
// Показать список улиц
    
$('.list_of_streets_buttom').on('click', function(){
    
    resAndAppendStreetTable();   
})    
 
    
// Функция показать/спрятать элемент    
function showHide(hidenElement){
  if(hidenElement.css('display') === 'block'){
      hidenElement.fadeOut(); 
  } else {
      hidenElement.fadeIn();
    }
};
});
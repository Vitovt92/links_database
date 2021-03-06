$(document).ready(function() {

    //показать или спрятать форму добавления новой улицы
$('.show_new_street_form_button').on('click', function(){
    var sectionAddNewStreetForm = $('.section_add_new_street_form');
    
    showHide(sectionAddNewStreetForm);
})

    // показать или спрятать список домов на конкретной улице
$('.container_of_streets').on('click', '.street_header_td', function(){
    var infoOfStreet = $(this).closest('.street_article').find('.info_of_street');
    
    showHide(infoOfStreet);
})

    // показать или спрятать форму редактирования конкретрой улицы
$('.container_of_streets').on('click', '.show_edit_form_table', function(){
    var editThisStreet = $(this).closest('.street_article').find('.edit_this_street');
    
    showHide(editThisStreet);
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


    
function showHide(hidenElement){
  if(hidenElement.css('display') === 'block'){
      hidenElement.fadeOut(); 
  } else {
      hidenElement.fadeIn();
    }
};
});
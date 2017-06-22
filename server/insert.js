var connection = require('./mysql_connection');

var street = {
  name_street_new: 'Хрещатик',
  comment: 'метро Хрещатик, метро Майдан незалежності'
};

var query = connection.query('insert into street_table set ?', street, function(err,resalt){
  if(err){
    console.error(err);
    return;
}
  console.error(resalt);
});

//module.exports = insert_to_street_table;

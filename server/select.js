var connection = require('./mysql_connection');

var  select_from_street_table = connection.query('select * from street_table', function(err, streets){
  if (err){
    console.error(err);
}
return streets;
});

module.exports = select_from_street_table;

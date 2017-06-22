var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var bodyParser = require('body-parser');

var connection;

var db_config = {
  host: 'localhost',
  user: 'root',
  password: 'yjdfzcbcmrf',
  database: 'links'
};

function handleDisconnect() {
  connection = mysql.createConnection(db_config); // Recreate the connection, since
                                                  // the old one cannot be reused.

  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

handleDisconnect();


// Отдать клиенту улицы из базы.

router.get('/showTable', function(req, res) {
   console.log('got req');
        
   connection.query('SELECT * FROM street_table ORDER BY name_street_new', function(err, streets, fields){
       
  if (!!err){
    console.error('Error in the query');
}else {
 console.log('successful quiry');

 res.json(streets);

}
});
    
});

// Добавить новую улицу в БД

router.post('/add_new_street',function(req, res){
    console.log(req.body);
    
    var street = {
      name_street_new: req.body.new_street_name_new,
      name_street_old: req.body.new_street_name_old,
      comment: req.body.new_street_comments,
      district: req.body.new_street_district
    };
   
    var query = connection.query('insert into street_table set ?', street, function(err,resalt){
    if(err){
    console.error(err);
     res.json('Ошибка добавления улицы в базу');
}
  console.error(resalt);
});
   res.json('Вы успешно добавили улицу ' + street.name_street_new + ' в базу');  
   
})

// Пометить улицу как удаленную

router.post('/remove_street',function(req, res){
    console.log('He whant to delet street id = '+req.body.id);
    
    var deleted_street = {
        id: req.body.id
    };
        
    
    var query_delet_street = connection.query('UPDATE street_table SET deleted = TRUE WHERE ?', deleted_street, function(err, resalt){
      console.log(query_delet_street.sql);  
    if(err){
    console.error(err);
    
}
  console.error(resalt);
});
    
});

// Отдать клиенту Дома из БД

router.post('/bildings_of_street', function(req, res) {
    console.log('got /bildings_of_street request '+ req.body.idOfStreet);
    var requestedStreet = {
      name_street_id : req.body.idOfStreet
  };
    
   connection.query('SELECT * FROM street_table st INNER JOIN bilding_table bt ON st.id = bt.name_street_id WHERE ?;', requestedStreet, function(err, bildings, fields){
       
  if (!!err){
    console.log('Error in the query');
}else {
 console.log('successful quiry');
 console.log(bildings);
 res.json(bildings);
}
});
});

module.exports = router;
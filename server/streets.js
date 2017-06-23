var express = require('express');
var streets = express.Router();

var db = require('./sql_connection')

// Отправить клиенту список улиц

streets.get('/showTable', function(req, res) {
   console.log('got req streets/showTable');
        
   db.query('SELECT * FROM street_table ORDER BY name_street_new', function(err, streets, fields){
       
  if (!!err){
    console.error('Error in the query');
}else {
 console.log('successful quiry');

 res.json(streets);

}
});
});

// Добавить новую улицу в БД

streets.post('/add_new_street',function(req, res){
    console.log(req.body);
    
    var street = {
      name_street_new: req.body.new_street_name_new,
      name_street_old: req.body.new_street_name_old,
      comment: req.body.new_street_comments,
      district: req.body.new_street_district
    };
   
    var query = db.query('insert into street_table set ?', street, function(err,resalt){
    if(err){
    console.error(err);
     res.json('Ошибка добавления улицы в базу');
}
  console.error(resalt);
});
   res.json('Вы успешно добавили улицу ' + street.name_street_new + ' в базу');  
   
})

// Редактировать улицу

streets.post('/edit_this_street',function(req, res){
    
})


// Пометить улицу как удаленную

streets.post('/remove_street',function(req, res){
    console.log('He whant to delet street id = '+req.body.id);
    
    var deleted_street = {
        id: req.body.id
    };
        
    
    var query_delet_street = db.query('UPDATE street_table SET deleted = TRUE WHERE ?', deleted_street, function(err, resalt){
      console.log(query_delet_street.sql);  
    if(err){
    console.error(err);
    
}
  console.error(resalt);
});
});

// Отдать клиенту Дома из БД

streets.post('/bildings_of_street', function(req, res) {
    console.log('got /bildings_of_street request '+ req.body.idOfStreet);
    var requestedStreet = {
      name_street_id : req.body.idOfStreet
  };
    
   db.query('SELECT * FROM street_table st INNER JOIN bilding_table bt ON st.id = bt.name_street_id WHERE ?;', requestedStreet, function(err, bildings, fields){
       
  if (!!err){
    console.log('Error in the query');
    }else {
     console.log('successful quiry');
     console.log(bildings);
     res.json(bildings);
    }
});
});

module.exports = streets;
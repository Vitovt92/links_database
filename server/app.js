var express = require('express');

var app = express();

var mysql = require('mysql');

var bodyParser = require('body-parser');

// SQL соединение

var connection = mysql.createConnection({
  
});

connection.connect(function(error){
    if(!!error){
        console.log('Error');
    } else {
        console.log('Connected');
    }
});

app.use(express.static('./../client/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Отдать клиенту улицы из базы.

app.get('/streets', function(req, res) {
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

app.post('/add_new_street',function(req, res){
    console.log(req.body);
    
    var street = {
      name_street_new: req.body.new_street_name_new,
      name_street_old: req.body.new_street_name_old,
      comment: req.body.new_street_comments
    };
   
    var query = connection.query('insert into street_table set ?', street, function(err,resalt){
    if(err){
    console.error(err);
    
}
  console.error(resalt);
});
    
    res.json('Street added');
})

// Пометить улицу как удаленную

app.post('/remove_street',function(req, res){
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

app.post('/bildings_of_street', function(req, res) {
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


app.listen(3000, function(){
  console.log('Listening on port 3000');
});

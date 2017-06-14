var express = require('express');

var app = express();

var mysql = require('mysql');

var bodyParser = require('body-parser');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yjdfzcbcmrf',
  database: 'links'
});

connection.connect(function(error){
    if(!!error){
        console.log('Error');
    } else {
        console.log('Connected');
    }
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/streets', function(req, res) {
   
   connection.query('select * from street_table', function(err, streets, fields){
       
  if (!!err){
    console.error('Error in the query');
}else {
 console.log('successful quiry');

 res.json(streets);
}
});


});

app.post('/add_new_street',function(req, res){
    console.log(req.body);
    
    var street = {};
    street.name_street_new = req.body.new_street_name_new,
    street.name_street_old = req.body.new_street_name_old,
    street.comment = req.body.new_street_comments
    

    var query = connection.query('insert into street_table set ?', street, function(err,resalt){
    if(err){
    console.error(err);
    
}
  console.error(resalt);
});
    
    res.json('Street added');
})

module.exports = app;

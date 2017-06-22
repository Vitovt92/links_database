var express = require('express');

var app = express();

var mysql = require('mysql');

var bodyParser = require('body-parser');

var router = require('./router');

app.use(express.static('./../client/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/streets', router);

app.listen(3000, function(){
  console.log('Listening on port 3000');
});

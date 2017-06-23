var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var streets = require('./streets');

app.use(express.static('./../client/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/streets', streets);

app.listen(3000, function(){
  console.log('Listening on port 3000');
});

mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yjdfzcbcmrf',
  database: 'links'
});

connection.connect();

module.exports = connection;

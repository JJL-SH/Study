var mysql = require('mysql');
var connection = mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'root',
  database:'test'
})
connection.connect();

var addSql = 'INSERT INTO users(id, name) VALUES(0,?)';
var addSqlParams = ['Anna'];

connection.query(addSql, addSqlParams, function(error, results) {
  if (error) {
    console.error(error);
  }
  console.log('The solution is:', JSON.stringify(results));
})
connection.end();

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'wp_okr'
})

connection.connect();

connection.query('SELECT * FROM auto_csv', function(err, results, fields){
  if (err) {
    console.log(err);
    return;
  }

  console.log(results[0].csv);
})
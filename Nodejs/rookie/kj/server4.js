var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://192.168.29.164:27017/runoob';


function getNextSequenceValue(db, sequenceName) {
  db.counters.findAndModify({ _id: sequenceName}, {$inc:{sequence_value:1}}, {new:true}, function(err, res){
    console.log(res);
  });
}
MongoClient.connect(DB_CONN_STR, function(err, db){
  console.log('connect success');
  getNextSequenceValue(db, 'productid');
})
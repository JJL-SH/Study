var express = require('express');
var mysql = require('mysql');
var util = require('util');
var app = express();
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'pro_lacoste'
})
connection.connect();

app.get('/question/:id', function(req, res) {
  connection.query('SELECT * FROM questions WHERE id=?', [req.params.id], function(err, results, fields){
    if (err) {
      console.log(err);
    }
    res.json(results[0])
  })
})
app.listen(3000);


{title: 'Neo4j Overview', description: 'Neo4j is no sql database', by_user: 'Neo4j', url: 'http://www.neo4j.com', tags: ['neo4j', 'database', 'NoSQL'], likes: 750}



<div><b>开场视频</b></div>
<div>致辞-任汇川</div>
<div style="margin:0 0 5px 0;"><span style="font-size: 12px;"><font color="#ffffff">【平安集团总经理】</font></span></div>
<div>演讲-徐林</div>
<div style="margin:0 0 5px 0;"><span style="font-size: 12px;"><font color="#ffffff">【国家发改委 城市和小镇改革发展中心主任】</font></span></div>
<div>入盟仪式</div>
<div style="margin:0 0 5px 0;"><span style="font-size: 12px;"><font color="#ffffff">【平安加入智慧城市联盟】</font></span></div>
<div>致辞-艾学峰</div>
<div style="margin:0 0 5px 0;"><span style="font-size: 12px;"><font color="#ffffff">【深圳副市长】</font></span></div>
<div>SMART大会揭幕仪式</div>
<div>《强AI者为王》</div>
<div style="margin:0 0 5px 0;"><span style="font-size: 12px;"><font color="#ffffff">【平安科技CEO-陈立明】</font></span></div>
<div>智慧城市主题演讲</div>
<div style="margin:0 0 5px 0;"><span style="font-size: 12px;"><font color="#ffffff">【平安科技COO-胡玮】</font></span></div>
<div>《Beyond the Self-Aware City超越智能城市》</div>
<div style="margin:0 0 5px 0;"><span style="font-size: 12px;"><font color="#ffffff">【硅谷人工智能研究院创始人-Piero Scaruff教授】</font></span></div>
<div>《科技创新引领金融生态变革》</div>
<div style="margin:0 0 5px 0;"><span style="font-size: 12px;"><font color="#ffffff">【金融壹账通CTO兼COO-黄宇翔】</font></span></div>
<div>《智能健康大数据——洞见，预测，改变》</div>
<div style="margin:0 0 5px 0;"><span style="font-size: 12px;"><font color="#ffffff">【平安医疗健康首席医疗官-郑毅 】</font></span></div>
<div>《人工智能：过去、现在和未来》</div>
<div style="margin:0 0 5px 0;"><span style="font-size: 12px;"><font color="#ffffff">【UC伯克利大学 AI教授-Laurent El Ghaoui】</font></span></div>
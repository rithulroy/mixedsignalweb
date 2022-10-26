var mysql      = require('mysql');
var value = '';
var cors = require('cors');
var bodyParser = require("body-parser");
var express = require('express');
var app = express();
/*connection.query('SELECT * from cognoscere_reg', function (error, results, fields) {
  if (error) throw error;
  //console.log('The solution is: ', results[0].Name);
  value = results[0].Name;
});*/
app.use(bodyParser.text({ type: "application/json" }));
app.get("/", function (req, res)
{
  var connection = mysql.createConnection({
  host     : 'sql12.freemysqlhosting.net',
  user     : 'sql12338561',
  password : 'Abarth@500',
  database : 'sql12338561'
  });

  connection.connect();
  if (req.query)
  {
    var id = req.query.sql;
    //var id =11;
    console.log(req.query);
    //connection.connect();

connection.query(id, function (error, results, fields) {
  if (error) throw error;
  //console.log('The solution is: ', results[0].Name); 
  res.setHeader("Access-Control-Allow-Origin", "*");
  //console.log(results[0]);
  if (results[0] == null)
  {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json("OK");
  }
  else
  {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(results[0]);
  }
  //value = results[0].Name;
});
    connection.end();
    //var member = JSON.parse( req.body ); // parse req.body as an object
    //console.log("member_nm: " + member.member_nm );
    //console.log("member_type: " + member.member_type );
    //res.render(__dirname + "/shop.html",{name: value});
    //res.writeHead(200, {'Content-Type': 'application/json'})
    //connection.connect();
    //res.json(results[0]);
    //res.sendStatus(200); // success status
  }
  else
  {
    res.sendStatus(400); // error status
  }
});

//connection.end();
app.listen(1234, function(){
  console.log('listening for requests ..')
});

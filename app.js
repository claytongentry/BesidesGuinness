var express = require('express');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var app = express();

// var connectionString = process.env.MONGOLAB_URI;
// var db = mongojs(connectionString, ['beers']);

var path = __dirname + '/public';
app.use(express.static(path));

app.use(bodyParser.urlencoded({extended:true}));

var port = 3000 || process.env.PORT;
app.listen(port, function(){
  console.log("Cookin' on port " + port);
});

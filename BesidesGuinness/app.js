var express = require('express');
var app = express();

var path_to_public = __dirname + '/public';
app.use(express.static(path_to_public));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.get('/results',function(req,res){
  res.sendFile('/results.html');
});

var port = 3000 || process.env.PORT;
app.listen(port);
console.log("Cookin on port " + port);

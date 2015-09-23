var express = require('express');
var app = express();

var path = __dirname + '/public';
app.use(express.static(path));

var port = 3000 || process.env.PORT;
app.listen(port);
console.log("Cookin on port " + port);

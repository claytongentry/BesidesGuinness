var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var path = __dirname + '/public';
app.use(express.static(path));

app.use(bodyParser.urlencoded({extended:true}));

// Beer quotes for launch fun
var quote1 = "Beer. Now there's a temporary solution.";
var quote2 = "Beer makes you feel the way you ought to feel without beer.";
var quote3 = "Give me a woman who loves beer and I will conquer the world.";
var quote4 = "There is no such thing as a bad beer. It's that some taste better than others.";
var quote5 = "Milk is for babies. When you grow up you have to drink beer.";
var quote6 = "He was a wise man who invented beer.";
var quote7 = "Beer, it's the best damn drink in the world.";
var quote8 = "They who drink beer will think beer.";
var quote9 = "In my opinion, most of the great men of the past were only there for the beer - the wealth, prestige and grandeur that went with the power.";
var quote10 = "For drink, there was beer which was very strong when not mingled with water, but was agreeable to those who were used to it. They drank this with a reed, out of the vessel that held the beer, upon which they saw the barley swim.";
var inspiration = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10];

// Go time
var port = 3000 || process.env.PORT;
app.listen(port, function(){
	var inspiring_quote = inspiration[Math.floor(inspiration.length * Math.random())]
	console.log(inspiring_quote + " We're brewing on port " + port + ".");
});

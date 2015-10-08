var data = [
	{
		"name": "Smithwick's",
		"color": "red",
		"flavor": "hoppy",
		"mouthfeel": "light"
	},
	{
		"name": "Ohara's",
		"color": "red",
		"flavor": "malty",
		"mouthfeel": "light"
	},
	{
		"name": "Porterhouse's Oyster Stout",
		"color": "dark",
		"flavor": "spicy",
		"mouthfeel": "heavy"
	}
]

var prefs = {
	"color": "dark",
	"flavor": "malty",
	"mouthfeel": "heavy"
};

var beers = data; // list to sort and return to user


function match_score(prefs, beer) {
	score = 0;
	for (key in prefs)
		if (prefs[key] === beer[key]) score++;
	beer["score"] = score
	return score;
}

function sort_beers(beers) {
	console.log("Sorting beers according to match...");
	console.log(beers);
	var returned_beers = beers.sort(function(a, b) {
		return b.score - a.score;
	});
	console.log("Sorted: ");
	console.log(returned_beers);
	return returned_beers;
}

// MAIN
for (var i = 0; i < beers.length; i++) {
	console.log("Checking if " + beers[i].name + " is a good match...");
	beers[i].score = match_score(prefs, beers[i]);
	console.log(beers[i].name + ": " + beers[i].score + "\n"); 
}

var sorted_beers = sort_beers(beers);
console.log("\n\nRECOMMENDATIONS, IN ORDER: ");
for (var j = 0; j < sorted_beers.length; j++) {
	console.log(sorted_beers[j].name);
}



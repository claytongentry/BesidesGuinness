$(document).ready(function() {
	// Make Slick work
	$('.form_element').slick();
});

function main() {
	
	// Load beer data from JSON
	loadData("./js/beers.json");
	var beer_data = loadData("./js/beers.json");
	
	// Get user preferences
	var prefs = parseForm();
	console.log("User preferences: ");
	console.log(prefs);
	
	// Give each beer a score according to preferences
	score_beers(prefs, beer_data);
	
	// Sort beers according to their score
	var recommendations = sort_beers(beer_data);
	
	// Populate recommendation w/ highest scoring beer beer
	fillResults(recommendations[0]);
}

// Parses results from form into a dict
function parseForm() {
    var preferences = {};
    var pref_types = ["color", "flavor", "mouthfeel"]; // should pick these up dynamically, eventually...
    var elements = document.getElementsByClassName('slick-current');
    for (var i = 0; i < elements.length; i++)
        preferences[pref_types[i]] = elements[i].textContent;
    return preferences;
}

function loadData(datafile) {
	
	// Eventually want to pull this from the JSON file
	var json_data = [
		{
			"name": "Smithwick's",
			"color": "Red",
			"flavor": "Spicy",
			"mouthfeel": "Light",
			"image": "images/smithwicks.png"
		},
		{
			"name": "Ohara's",
			"color": "Red",
			"flavor": "Hoppy",
			"mouthfeel": "Light",
			"image": "images/oharas.png"
		},
		{
			"name": "Porterhouse's Oyster Stout",
			"color": "Dark",
			"flavor": "Malty",
			"mouthfeel": "Heavy",
			"image": "images/porterhouse.png"
		}
	];
	return json_data;
}

function sort_beers(beers) {
	var sorted_beers = beers.sort(function(a, b) {
		return b.score - a.score;
	});
	return sorted_beers;
}

function score_beers(prefs, beers) {
	for (var i = 0; i < beers.length; i++) {
		beers[i].score = match_score(prefs, beers[i]);
		console.log(beers[i]);
	}
}

function match_score(prefs, beer) {
	score = 0;
	for (key in prefs)
		if (prefs[key] === beer[key]) score++;
	beer["score"] = score
	return score;
}

function fillResults(beer) {
	// Need to populate results template with next beer
	document.getElementById('rec-name').innerHTML = beer.name;
	document.getElementById('logo').src = beer.image;
	var beer_form = document.getElementsByClassName('beer-form');
	var rec = document.getElementsByClassName('results');
	$(beer_form).fadeOut(function() {
		$(rec).fadeIn();
	});
}

// ANOTHER
function anotherBeer() {
	// Pop the next one off the stack
	return beers.shift();
}

/*var beers_init = ["Smithwick's", "Ohara's Celtic Stout", "Porterhouse's Oyster Stout", "Kilkenny Irish Cream Ale", "Murphy's Irish Red", "Murphy's Irish Stout", "Beamish Irish Stout", "Black Irish Stout", "Harp Lager", "Devil's Backbone", "Graffiti's Trouble Brewing", "Rascal's Ginger Porter", "Metalman Pale Ale", "Black Boar's The White Hag", "Kinnegar's Scraggy Bay", "Wicklow Wolf's Locavore Blonde"];*/

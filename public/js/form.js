// Parses results from form
function parseResults() {
    var preferences = {};
    var pref_types = ["color", "flavor", "mouthfeel"];
    var elements = document.getElementsByClassName('slick-current');
    for (var i = 0; i < elements.length; i++) {
        preferences[pref_types[i]] = elements[i].textContent;
    }
    console.log(preferences);
    return preferences;
}
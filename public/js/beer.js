$(document).ready(function() {
  var beers_init = ["Smithwick's", "Ohara's Celtic Stout", "Porterhouse's Oyster Stout", "Kilkenny Irish Cream Ale", "Murphy's Irish Red", "Murphy's Irish Stout", "Beamish Irish Stout", "Black Irish Stout", "Harp Lager"];
  var beers = beers_init;

  // Parses results from form
  function getResults() {
    var preferences = 0; // This will be a dict
    return preferences;
  }

  // Sorts and lists beers according to preferences dictionary
  function orderBeers(preferences) {
    var beerlist = 0;
    return beerlist;
  }

  // Returns best beer from list of sorted beers
  function getBeer(beers) {
    // Pop the first one off the stack
    return beers.shift();
  }

  // STARTOVER
  function startover() {
    beers = beers_init;
  }

  // ANOTHER
  function anotherBeer() {
    // Pop the next one off the stack
    return beers.shift();
  }
});

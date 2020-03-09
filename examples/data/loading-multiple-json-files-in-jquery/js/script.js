// Loading multiple JSON files in jQuery
// Pippin Barr
//
// Tarot and Zodiac JSON data from Darius Kazemi's corpora repository
// https://github.com/dariusk/corpora

// Variables to store our two sets of JSON data
let tarot;
let zodiac;

$(document).ready(setup);

// Setup starts the loading process
function setup() {
  // We can use $.when() to call multiple $.getJSON functions and
  // the following $.then() will only be called when they're all complete
  $.when(
    // Load the tarot, including a fail state
    $.getJSON("assets/data/tarot_interpretations.json")
    .done(tarotLoaded)
    .fail(loadingError),
    // Load the Zodiac, including a fail state
    $.getJSON("assets/data/zodiac.json")
    .done(zodiacLoaded)
    .fail(loadingError)
  ).then(allDataLoaded); // Call allDataLoaded() when the loading is done
}

// Called when the tarot file loads and stores the data
function tarotLoaded(data) {
  tarot = data;
}

// Called when the zodiac file loads and stores the data
function zodiacLoaded(data) {
  zodiac = data;
}

// Called then there is a loading error for either file and reports the error
function loadingError(request, text, error) {
  console.error(error);
}

// Called when all data is finished loading, which means the data is accessible
function allDataLoaded() {
  // For now we just print it out
  console.log(tarot);
  console.log(zodiac);
}
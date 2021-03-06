"use strict";

/*********

Nonsense Generator
Pippin Barr

Generate an endless stream of made up language for the computer to speak.

*********/

const RATE_MIN = 0.8;
const RATE_RANGE = 0.4;
const PITCH_MIN = 0.8;
const PITCH_RANGE = 0.4;
const WORDS_MIN = 5;
const WORDS_RANGE = 10;
const PHONEMES_MIN = 1;
const PHONEMES_RANGE = 4;
const COMMA_CHANCE = 0.1;

// Constants with the consontants and vowels we'll use to create basic phonemes
const consonants = "bcdfghjklmnprstvwxyz";
const vowels = "aeiou";

// When the document is ready a click will trigger the main nonsense-speaking
$(document).ready(setup);

function setup() {
  $(document).one('click', startNonsense);
};

function startNonsense() {
  $('#click').remove();
  sayNonsense();
}

// sayNonsense
//
// Generates and speaks a sentence-worth of nonsense, then starts the next
function sayNonsense() {
  // Generate the nonsense sentence
  let nonsense = generateNonsense();
  // Options with some randomness for variation, plus calling this function
  // again once the speech has finished
  let options = {
    rate: RATE_MIN + Math.random() * RATE_RANGE,
    pitch: PITCH_MIN + Math.random() * PITCH_RANGE,
    onend: sayNonsense
  }
  // Add the sentence to the page followed by a space (so the next sentence will
  // be in the right place.)
  $('#content').append(`${nonsense} `);
  // Say it
  responsiveVoice.speak(nonsense, "UK English Male", options);
}

// generateNonsense()
//
// Generates a random-length sentence of nonsense with some random punctuation
function generateNonsense() {
  // A variable to hold the sentence
  let sentence = '';
  // Randomly select how long the sentence will be (in words)
  let numWords = WORDS_MIN + Math.random() * WORDS_RANGE;
  // Loop to generate each word
  for (let j = 0; j < numWords; j++) {
    // A variable to hold the current word
    let word = '';
    // Randomly select how many phonemes this word is
    let wordLength = PHONEMES_MIN + Math.floor(Math.random() * PHONEMES_RANGE);
    // Loop to generate the phonemes of the word
    for (let i = 0; i < wordLength; i++) {
      // Add a consonant from the consonants string (treat it like an array)
      word += consonants[Math.floor(Math.random() * consonants.length)];
      // Add a vowel in the same way
      word += vowels[Math.floor(Math.random() * vowels.length)];
    }
    // Add this word to the sentence
    sentence += word;
    // If it's not the last word...
    if (j < numWords - 1) {
      // Sometimes add a comma, for fun
      if (Math.random() < COMMA_CHANCE) {
        sentence += ',';
      }
      // Add a space so the next word is in the right spot
      sentence += ' ';
    }
  }
  // Capitalise the first letter of the sentence (this is ugly, oh well)
  sentence = sentence.charAt(0).toUpperCase() + sentence.substring(1, sentence.length);
  // Return the sentence including its full-stop
  return `${sentence}.`;
}
# Activity: ResponsiveVoice: Slamina

---

## Brief

An experience in which:

- The user is given five animal names as multiple choice answers
- The computer reads out one of the animal names in reverse
- The user clicks on the animal they think it is
- If right, we get a new animal to guess
- If wrong, we hear the name again

---

## 1. Start a project

Download the [template jQuery project](https://github.com/pippinbarr/cart263-2019/raw/master/templates/template-jquery-project.zip)

Add ResponsiveVoice to the project

???

__Solution:__

Add the following to the libraries section of your HTML:
```html
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>

<link rel="stylesheet" type="text/css" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />

<script
  src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
  integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
  crossorigin="anonymous"></script>

<script src='https://code.responsivevoice.org/responsivevoice.js'></script>
```

---

## 2. Create an array with a list of animals

1. Declare an array variable at the top of your script called `animals`
1. Go to https://github.com/dariusk/corpora/blob/master/data/animals/common.json and copy the array of animal names (e.g. the stuff in the square brackets)
1. Paste the array of animals into your script so that it is stored in the `animals` variable
1. Add a variable to the top of the script called `correctAnimal` that will store the current correct animal to guess

???

__Solution:__

```javascript
let animals = [
  "aardvark",
  "alligator",
  "alpaca",
  "antelope",
  "ape",
  "armadillo",
  "baboon",
  "badger",
  "bat",
  "bear",
  "beaver",
  "bison",
  "boar",
  "buffalo",
  "bull",
  "camel",
  "canary",
  "capybara",
  "cat",
  "chameleon",
  "cheetah",
  "chimpanzee",
  "chinchilla",
  "chipmunk",
  "cougar",
  "cow",
  "coyote",
  "crocodile",
  "crow",
  "deer",
  "dingo",
  "dog",
  "donkey",
  "dromedary",
  "elephant",
  "elk",
  "ewe",
  "ferret",
  "finch",
  "fish",
  "fox",
  "frog",
  "gazelle",
  "gila monster",
  "giraffe",
  "gnu",
  "goat",
  "gopher",
  "gorilla",
  "grizzly bear",
  "ground hog",
  "guinea pig",
  "hamster",
  "hedgehog",
  "hippopotamus",
  "hog",
  "horse",
  "hyena",
  "ibex",
  "iguana",
  "impala",
  "jackal",
  "jaguar",
  "kangaroo",
  "koala",
  "lamb",
  "lemur",
  "leopard",
  "lion",
  "lizard",
  "llama",
  "lynx",
  "mandrill",
  "marmoset",
  "mink",
  "mole",
  "mongoose",
  "monkey",
  "moose",
  "mountain goat",
  "mouse",
  "mule",
  "muskrat",
  "mustang",
  "mynah bird",
  "newt",
  "ocelot",
  "opossum",
  "orangutan",
  "oryx",
  "otter",
  "ox",
  "panda",
  "panther",
  "parakeet",
  "parrot",
  "pig",
  "platypus",
  "polar bear",
  "porcupine",
  "porpoise",
  "prairie dog",
  "puma",
  "rabbit",
  "raccoon",
  "ram",
  "rat",
  "reindeer",
  "reptile",
  "rhinoceros",
  "salamander",
  "seal",
  "sheep",
  "shrew",
  "silver fox",
  "skunk",
  "sloth",
  "snake",
  "squirrel",
  "tapir",
  "tiger",
  "toad",
  "turtle",
  "walrus",
  "warthog",
  "weasel",
  "whale",
  "wildcat",
  "wolf",
  "wolverine",
  "wombat",
  "woodchuck",
  "yak",
  "zebra"
];
let correctAnimal;
```

---

## 3. Adding buttons

1. Define a function `addButton(label)` at the bottom of your script (label will be the argument it is passed with the animal name to put on the button):
  1. Use jQuery to create a `div` element with class `guess` and put it in a variable
  1. Use jQuery to set the text of the element to the `label` provided
  1. Use jQuery UI's `.button()` function to turn the element into a button
  1. Add the button element to the page

Test with:

```javascript
function setup() {
  addButton("Lamb");
  addButton("Llama");
}
```

???

__Solution:__

```javascript
function addButton(label) {
  let $button = $('<div></div>');
  $button.addClass("guess");
  $button.text(label);
  $button.button();
  $('body').append($button);
}
```

---

## 4. Generating guesses

1. Declare an empty array called `answers` and a constant called `NUM_OPTIONS` with the number of guesses you want at the top of your script,
1. Define a function called `newRound()` which does the following:
  1. Sets the `answers` array to be empty
  1. Runs a for loop `NUM_OPTIONS` times that:
      1. Chooses a random animal name from the `animals` array
      1. Uses `addButton` to add a button with that animal's name to the page
      1. Adds the animal's name to the `answers` (using `push()`)
  1. Set `correctAnimal` to a random element in the `answers` array
1. Call `newRound()` in `setup()` (remove your earlier `addButton()` calls from there)

You should see the number of options you specified, one of which will be correct

???

__Solution:__

```javascript
let animals = [...]; // Animal names are in here
let correctAnimal;
let answers = [];
const NUM_OPTIONS = 5;

function setup() {
  newRound();
}

function newRound() {
  answers = [];
  for (let i = 0; i < NUM_OPTIONS; i++) {
    let answer = animals[Math.floor(Math.random() * animals.length)];
    addButton(answer);
    answers.push(answer);
  }
  correctAnimal = answers[Math.floor(Math.random() * answers.length)];
}
```

---

## 5. React to the correct guess

1. In `addButton()` we need to make it respond to clicks, so add a click handler (using `.on()`) to the button that is created and have it call a function `handleGuess`
1. Define the `handleGuess()` at the bottom of your script, it should:
  1. Use an if statement to check if the button clicked was correct (you can use `$(this).text()` to get the label on the button and compare it to `correctAnimal`)
  1. Use jQuery to remove all guesses from the screen (use the `guess` class to select them)
  1. Call `newRound()` after a delay (use `setTimeout()`)

???

__Solution:__

```javascript
function addButton(label) {
  let $button = $('<div></div>');
  $button.addClass("guess");
  $button.text(label);
  $button.button();
  $button.on('click',handleGuess); // NEW
  $('body').append($button);
}

function handleGuess() {
  if ($(this).text() === correctAnimal) {
    $('.guess').remove();
    setTimeout(newRound,1000);
  }
}
```

---

## 6. Add speech

1. Define a function called `sayBackwards(text)` that will read out the text provided backwards:
  1. Reverse the provided text and store it in a variable (this is kind of complex, so here's the code: `let backwardsText = text.split('').reverse().join('');`
  1. Create an object literal called `options` with properties `rate` and `pitch` set to random numbers between 0 and 1
  1. Use ResponsiveVoice to speak the reversed text, with voice "UK English Male" (or something else), and the options object
1. In `newRound()` use `sayBackwards()` to speak the name of the correct animal after it has been chosen

???

__Solution:__

```javascript
function sayBackwards(text) {
  let backwardsText = text.split('').reverse().join('');
  let options = {
    pitch: Math.random(),
    rate: Math.random()
  };
  responsiveVoice.speak(backwardsText,'UK English Male',options);
}

...

function newRound() {
  answers = [];
  for (let i = 0; i < NUM_OPTIONS; i++) {
    let answer = animals[Math.floor(Math.random() * animals.length)];
    addButton(answer);
    answers.push(answer);
  }
  correctAnimal = answers[Math.floor(Math.random() * answers.length)];
  sayBackwards(correctAnimal); // NEW
}
```

---

## 7. Wrong!

It would be more fun if the game also reacted to being wrong, so

1. In `handleGuess()` add an `else` to your if statement that checks if the guess is correct, to handle incorrect guesses, it should:
  1. Use jQuery UI's `.effect('shake')` on the button that was clicked
  1. Use `sayBackwards()` to say the name of the correct animal again

???

__Solution__

```javascript
function handleGuess() {
  if ($(this).text() === correctAnimal) {
    $('.guess').remove();
    setTimeout(newRound,1000);
  }
  else { // NEW
    $(this).effect('shake'); // NEW
    sayBackwards(correctAnimal); // NEW
  } // NEW
}
```


---

# }

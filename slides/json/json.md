# JSON {

---

## JSON

- (__J__)ava(__S__)cript (__O__)bject (__N__)otation
- It's a format for __describing structured data__ that we can then load into our programs
- `.json` files are __just text files__ written in a specific way
- A JSON file can either contain an __object__ or an __array__

---

## JSON object

`miffy.json`

```json
{
  "name": "Miffy",
  "species": "Rabbit",
  "age": 67,
  "cute": true
}
```

- JSON data can look almost exactly like a standard JavaScript Object
- That is, a series of name/value pairs separated by commas
- Note that the __property names__ (`name`, `species`, etc.) __must be surrounded in double quotes__
- Note that the __values__ (`"Miffy"`, `67`, etc.) are a set of standard JavaScript values (string, number, object literal, array, boolean, `null`)
- Note that you __cannot__ have a comma after the final value

---

## JSON array

`muppets.json`

```json
[
  "Grover",
  "Kermit",
  "Miss Piggy",
  "Animal"
]
```

- JSON data can look exactly like a JavaScript array
- That is, comma separated values inside square brackets
- Note that you __cannot__ have a comma after the final value

---

## Complex JSON

- The two key points of JSON are
  1. To store (often large amounts of) data in a separate file because separating data and programming is desirable
  1. To represent arbitrarily complex data through its notation

`egyptian_gods.json` (Excerpt from [Darius Kazemi's corpora](https://github.com/dariusk/corpora/blob/master/data/mythology/egyptian_gods.json))

```json
{
  "description":  "Gods and goddesses from Egyptian mythology",
  "egyptian_gods":  {
    "Aani": {"depictions": ["ape"], "genders": ["male"], "keywords": ["ape", "protection"]},
    "Abu": {"depictions": [], "genders": ["male"], "keywords": ["light"]},
    "Ahti": {"depictions": ["hippopotamus"], "genders": ["female"], "keywords": ["hippopotamus"]},
    "Aker": {"depictions": [], "genders": ["male"], "keywords": ["earth", "horizon"]},
    "Amathaunta": {"depictions": [], "genders": ["female"], "keywords": ["ocean", "sea"]},
  }
}
```

???

- Here we can start to see how nested data can powerfully represent __organized__ data
- In our __file__ we have
  - a property called __description__ containing a string describing the file itself
  - a property called __egyptian_gods__ which contains an __object__
    - With __properties__ for each __god's name__ containing __objects__ with property/value pairs about the god
      - __depictions__ contains an __array__ of physical forms (sometimes empty)
      - __genders__ contains an __array__ of genders
      - __keywords__ contains an __array__ of keywords relevant to the god

---

## Arbitrary levels of complexity

- JSON files can be as complicated and "nested" as is necessary to represent the kind of data you want to organize
- Take a look at these [tarot interpretations](https://github.com/dariusk/corpora/blob/master/data/divination/tarot_interpretations.json) for instance
- Or this [zodiac data](https://github.com/dariusk/corpora/blob/master/data/divination/zodiac.json)

---

## Roll your own JSON or borrow

- JSON has two obvious uses
- You can __write your own JSON__ to structure data that you're generating yourself and want to store in an organized format outside your code
  - This can often make otherwise irritating programming much more structured and clear
  - This also forces you to think about your program in terms of code/logic and data separately, which is healthy
- You can __find existing JSON-formatted data__ (such as in [Darius Kazemi's corpora](https://github.com/dariusk/corpora)) and use it as input into your own code
  - This can be a great way to have new ideas, because data often tells a story or suggests a possible use (Tarot! Tarot with a creepy ResponsiveVoice telling you you're going to meet the love of your life tomorrow! Etc.!)

---

## JSON in

- Many libraries (including jQuery and p5) provide specific functions for __loading__ JSON data from a file
- When you read in the data it ends up in a __variable__ that contains the data in the file
  - If the file represented an object full of data, you get an object in your variable
  - If the file represented an array full of data, you get an array in your variable
- As with loading sounds or images or other files, loading a JSON file is not __instantaneous__, and this means you can't __use__ the data right away
- We have to __wait__ for it to load, and this is an important part of how we program with it


---

## Let's try this

- In jQuery we have [`$.getJSON()`](https://api.jquery.com/jQuery.getJSON/)
- In p5 we have [`loadJSON()`](https://p5js.org/reference/#/p5/loadJSON)
- Let's look at both jQuery and p5's approaches, using [`tarot_interpretations.json`](https://github.com/dariusk/corpora/blob/master/data/divination/tarot_interpretations.json)
- For now, we'll __download__ the JSON file and include it in our project (say in an `assets/data` folder)


---

## p5 and `loadJSON()` in `preload()`

- In p5 the easiest way to use `loadJSON()` is in `preload()`
- Just like with `loadImage()` and `loadSound()` we assign the result of the function to a variable, and then that variable will contain the data in the file

```javascript
let tarot;

function preload() {
  tarot = loadJSON("assets/data/tarot_interpretations.json");
}

function setup() {
  console.log(tarot);
}
```

---

## p5 and `loadJSON()` elsewhere

- We can also load data at some other point in our program
- But then we need to handle the loading process ourselves with an event handler function
- The event handler will be passed a __parameter__ containing the data loaded

```javascript
let tarot;

function setup() {}

function mousePressed() {
  loadJSON("assets/data/tarot_interpretations.json",tarotLoaded);
}

function tarotLoaded(data) {
  tarot = data;
  console.log(tarot);
}
```

- Note that we __cannot__ use `tarot` for anything until `tarotLoaded()` gets called

---

## jQuery and `$.getJSON()`

- Because jQuery doesn't have a `preload()` function, we always need to explicitly handle the result of loading ourselves with an event handler as in the previous slide

```javascript
let tarot;

$(document).ready(setup);

function setup() {
  $.getJSON("assets/data/tarot_interpretations.json",tarotLoaded);
}

function tarotLoaded(data) {
  tarot = data;
  console.log(tarot);
}
```

---

## jQuery, `$.getJSON()` with `.done()` and `.fail()`

- These days, it's more classy to handle the data via the extra `.done()` function and react to problems with the extra `.fail()` function

```javascript
let tarot;

$(document).ready(setup);

function setup() {
  $.getJSON("assets/data/tarot_interpretations.json")
    .done(tarotLoaded) // Call tarotLoaded on successful load
    .fail(tarotNotLoaded); // Call tarotNotLoaded on failed load
}

function tarotLoaded(data) {
  tarot = data;
  console.log(tarot);
}

function tarotNotLoaded(jqxhr, textStatus, error) {
  console.error(error);
}
```

---

## Accessing specific data once loaded

- Once you have your JSON data in a variable, you access it using the standard JavaScript syntax associated with __objects__ (dot notation) and __arrays__ (square brackets notation)
- So if we load our tarot in p5

```javascript
tarot = loadJSON("assets/data/tarot_interpretations.json");
```

- Then to access the Fool's first "shadow meaning" we have to start with the `tarot` variable and write out path through to that piece of data:

tarot
--
.tarot_interpretations
--
[0]
--
.meanings
--
.shadow
--
[0]

--

"Being gullible and naive"

---

## Getting a random tarot card and interpretation (p5)

```javascript
let tarot;

function setup() {}

function mousePressed() {
  loadJSON("assets/data/tarot_interpretations.json", tarotLoaded);
}

function tarotLoaded(data) {
  tarot = data.tarot_interpretations; // We only want the actual cards
  makePrediction();
}

function makePrediction() {
  let card = random(tarot); // Choose a random card
  let cardName = card.name; // Get the name
  let fortune = random(card.fortune_telling); // Choose a random fortune
  let prediction = `You have chosen ${cardName}! ${fortune}!`; // Make a prediction string
  console.log(prediction); // Say it
}
```

???

- Notice how in this example we're not writing code that chooses a specific card/fortune directly
- Rather, we're using programming logic (via random array choices) to make something that _dynamically_ accesses the JSON data

---

## Displaying the names of all the tarot cards

```javascript
let tarot;

function setup() {}

function mousePressed() {
  loadJSON("assets/data/tarot_interpretations.json", tarotLoaded);
}

function tarotLoaded(data) {
  tarot = data.tarot_interpretations; // We only want the actual cards
  for (let i = 0; i < tarot.length; i++) {
    console.log(tarot[i].name);
  }
}
```

---

## APIs and JSON

- A big use of JSON online is API's that return JSON data
- For example [official-joke-api.appspot.com](https://official-joke-api.appspot.com) provides access to jokes in JSON format
- See the slide notes for a random joke teller

???

```javascript
let jokes; // A place to store the jokes

function preload() {
  // Load the jokes by accessing the API endpoint
  // Jokes will contain an OBJECT with ten jokes in it
  jokes = loadJSON("https://official-joke-api.appspot.com/jokes/programming/ten");
}

function setup() {}

function mousePressed() {
  // Tell a joke when they click
  tellJoke();
}

function tellJoke() {
  // Get an array with the name of each property in the jokes object
  let keys = Object.keys(jokes);
  // Choose a random property name (they're actually just numbers, yet it's not an array)
  let randomKey = random(keys);
  // Get the joke with that property name
  let joke = jokes[randomKey];
  // Get the setup part
  let jokeSetup = joke.setup;
  // And the punchline part
  let jokePunchline = joke.punchline;
  // Display the setup
  console.log(jokeSetup);
  // After a delay of two seconds...
  setTimeout(function() {
    // ... display the punchline
    console.log(jokePunchline);
  }, 2000);
}
```

---

## So, JSON

- The key to JSON is being able to read and write the syntax of the format itself
- We also need to understand how to load the data once we have it ready
- And we need to be able to access specific parts of the data with standard JavaScript syntax
- There is tons of publicly data available out on the internet in the JSON format
- And there are many APIs that allow accessing live JSON-based data

---

# }

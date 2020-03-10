# Activity: Condiments {

---

## Brief

An experience in which:

- We see a randomly generated description of a condiment based on loaded data!

---

## 1. Start a project

1. Download the [template jQuery project](https://github.com/pippinbarr/cart263-2020/raw/master/templates/template-jquery-project.zip)
2. Download the [JSON data](https://raw.githubusercontent.com/pippinbarr/cart263-2020/master/activities/data/condiments/data/data.json) and put it in a `data` folder in your project

---

## 2. Start the script

1. Add the basic "document ready" code to your `script.js` so you're ready to start writing code

???

__Solution:__

```javascript
$(document).ready(setup);

function setup() {
  // Code to run on the page goes here
}
```

---

## 3. Load the data

1. Use jQuery's `$.getJSON()` method to load the data file
2. Use jQuery's `.done()` to call a handler called `dataLoaded` when the data loads
3. Use jQuery's `.fail()` to call a handler called `dataError` when the data fails to load
4. Define `dataLoaded()` and remember it should take one argument (which will contain the data)
5. In `dataLoaded()` use `console.log()` to print out the contents of the data argument
6. Define `dataError()` and print the error to the console in it


If it's working, you should see the JSON data in the console when you run the page.

???

__Solution__

```javascript
$(document).ready(setup);

function setup() {
  $.getJSON('data/data.json')
    .done(dataLoaded)
    .error(dataError)
}

function dataLoaded(data) {
  console.log(data);
}

function dataError(request, text, error) {
  console.error(error);
}
```

---

## 4. Write a random array element function

Because we're going to want to select random elements from arrays more than once, let's write a function to do that

1. Define a function called `getRandomElement()` that takes one argument, the array to select an element from
1. In the function, we choose a random element from the array passed in the argument
1. Return this element from the function

???

__Solution__

```javascript
function getRandomElement(array) {
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}
```

---

## 5. Choose a random condiment

In your `dataLoaded()` function

1. Use `getRandomElement()` to get a random element from the `condiments` array inside the data object (e.g. `data.condiments`), store it in a variable called `condiment` and log it to the console

???

__Solution__

```javascript
function dataLoaded(data) {
  console.log(data);
  let condiment = getRandomElement(data.condiments);
  console.log(condiment);
}
```

---

## 6. Choose a verb

We want to use 'is' if the condiment is singular and 'are' if it's plural. The simplest way to do this is to check if the condiment's name ends with an 's'. After the previous code:

1. Declare a variable called `verb` with value `'is'`
2. Write an if-statement that checks if the last letter of the condiment is an 's' and if it is, changes `verb` to `'are'` (we'll use `.charAt()` to check the last character - remember we can get the length of a string with `.length`)
3. Log the verb out to the console

If we keep reloading the page, you should see the verb as "is" when the condiment has no "s" and "are" when it does.

???

__Solution__

```javascript
function dataLoaded(data) {
  console.log(data);
  let condiment = getRandomElement(data.condiments);
  console.log(condiment);
  let verb = 'is';
  if (condiment.charAt(condiment.length - 1) === 's') {
    verb = 'are';
  }
  console.log(verb);
}
```

- This isn't perfect, because not all plurals end in 's' and not every word ending in 's' is a plural. Oh well.

---

## 7. Choose the cat and the room

After the previous code, continue building up our random phrase data:

1. Use `getRandomElement()` to put a random cat into a variable called `cat`
1. Use `getRandomElement()` to put a random room into a variable called `room`
1. Log them both to the console

???

__Solution__

```javascript
function dataLoaded(data) {
  console.log(data);
  let condiment = getRandomElement(data.condiments);
  console.log(condiment);
  let verb = 'is';
  if (condiment.charAt(condiment.length - 1) === 's') {
    verb = 'are';
  }
  console.log(verb);
  let cat = getRandomElement(data.cats);
  console.log(cat);
  let room = getRandomElement(data.rooms);
  console.log(room);
}
```

---

## 8. Create a template string and add it to the page

After the previous code, build the description itself!

1. Create a variable called `description` containing a template string of the form "CONDIMENT IS/ARE like a CAT in a ROOM" (where the capitalised words are replaced by our variables)
2. Add the resulting `description` to the `body` using `.append()`
3. Consider some CSS to style `body` so that the text looks a little more impressive?

???

```javascript
function dataLoaded(data) {
  console.log(data);
  let condiment = getRandomElement(data.condiments);
  console.log(condiment);
  let verb = 'is';
  if (condiment.charAt(condiment.length - 1) === 's') {
    verb = 'are';
  }
  console.log(verb);
  let cat = getRandomElement(data.cats);
  console.log(cat);
  let room = getRandomElement(data.rooms);
  console.log(room);
  let description = `${condiment} ${verb} like a ${cat} in a ${room}.`;
  $('body').append(description);
}
```

---

# }

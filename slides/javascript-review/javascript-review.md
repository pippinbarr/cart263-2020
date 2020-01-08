# JavaScript review

---

## Contents

- JavaScript
- Variables and values
- Math
- Constants
- Functions
- Arrays
- Conditionals
- Loops
- Object-Oriented Programming

---

## JavaScript

- The __language of interactivity__ on the web
- __Incredibly popular__
- It Has __countless libraries and extensions available__
- __Not just for the web__

???

- Pretty much every fancy thing you see a web page do is done with JavaScript
- JavaScript is a great learning language because so many people use it for so many tasks. For any question you have, there is likely an answer online. For any genre of program you want to write, there is probably a community online.
- Perhaps most importantly for learning, JavaScript is a modern language with the standard suite of features we expect to see. Your knowledge of JavaScript will allow you to learn other languages much, much more easily.
- JavaScript has been around for a long time and has had many, many libraries and extensions created for it that give you greater power with less work! (More on this later in the course.)
- JavaScript isn't limited to programming for the web. With technologies like [Node](https://nodejs.org/en/) and [Electron](https://electronjs.org/) you can build your own applications in JavaScript.

---

## ES6

- JavaScript is under constant development, so there are actually a series of "releases" of the language
- In this class we will mostly be using the most fundamental parts of the language, which have been around "forever", but we will use a couple of features from what is called the ES6 release of JavaScript:
  - We will use `let` to declare variables
  - We will use `const` to declare constants
  - We will use the `class` structure to define classes

???

- If you're interested in all the other stuff ES6 introduces, do feel free to investigate online - there are many resources - but do be prepared to be a little blown away if you're not already quite familiar with JavaScript
- Example: https://flaviocopes.com/es6/

---

## Use strict

- In this class we will include the `"use strict";` directive at the top of every `.js` file we create
- This will turn on special rules that will help us to find errors in our code more easily
- For example, it won't let us use variable we haven't explicitly declared

```javascript
"use strict";

x = 10; // No! Error! x doesn't exist!

let x;
x = 10; // Good.
```

- It has other implications, but basically should make life better

---

## Variables and values

- A variable is a __named container for data__
- To create a variable we __declare__ it

---

## Declaring a variable

```javascript
let x;
let pi;
let greetingText;
```

- The above declares __three__ variables called `x`, `pi` and `greetingText` respectively
- We use `camelCase` for variable names (first letter lower case, subsequent words capitalized, no spaces)
- Because these variables have __no value stored in them__ they will contain `undefined` by default

???

- What is the difference between `let` and `var`?
- It's a difference in __scope__
- Variables declared with `var` are visible/usable anywhere within the __function__ they are declared in or, if declared outside all functions, they are visible everywhere
- Variables declared with `let` are visible/usable only within the __block__ they are declared in (the curly brackets they are inside) or, if declared outside all blocks, they are visible everywhere

---

## Declaring a variable with a value

```javascript
let x = 10;
let pi = 3.14159;
let greetingText = "Hello, World!";
```

- The above declares the same three variables but now they begin their lives with the specified values
- We put values into variables using the __assignment operator__ which is a __single__ `=` sign

---

## Using the assignment operator

```javascript
let x = 100;
...
x = 101;
```

- We can use the assignment operator to set the value at the moment of declaration or any time afterwards

---

## Types of values

- JavaScript has a specific sets of __types__ of data we can put into variables (and manipulate and use more generally in our programming)
- They are:
  - `undefined` (nothing)
  - Number (numbers like `6` and `3.14`)
  - `NaN` (not a number)
  - Boolean (`true` or `false`)
  - String (`"Text in quotation marks"`)
  - Object (a more complex data structure)
  - `null` (also nothing)

???

- See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

---

## Undefined

- As we have already seen, `undefined` is what is stored in a variable by default if nothing is assigned to it

```javascript
let x;
console.log(x); // undefined
```

- You can set something to `undefined` on purpose if you want

```javascript
let meaningOfLife = undefined; // So true
```

---

## Number

- We can store numbers in variables

```javascript
let x = 10;
let pi = 3.14159;
```

- To write a number value we just write it like you'd expect

---

## NaN (Not a Number)

- If you use certain functions that return a number, but something goes wrong and they can't give a number back, they return NaN
- You can't check if something is NaN with the equality operator, you need to use `isNaN()`

```javascript
let i = Math.sqrt(-1); // The square root of -1 is not a number (it's irrational)
console.log(i); // NaN
console.log(i === NaN); // false
console.log(isNaN(i)); // true
```

???

- Similarly you can get NaN with nonsense-y things like the following:

```javascript
let x = Math.floor("hello!");
console.log(x); // NaN
let y = parseInt("This is not a number!");
console.log(y); // NaN
```

---

## Boolean

- Boolean values are limited to being `true` or `false` and are the basis of logic in our programming

```javascript
let programmingIsMyPassion = true;
let programmingIsTooHardForMe = false;
```

- So to write the value `true` or `false` you just write the word, no special syntax

---

## String

- String values allow us to store text of any length in a variable
- You write a string __inside quotation marks__

```javascript
let theLetterA = "a";
let greeting = "Hello, World";
let mobyDick = "Call me Ishmael. Some years ago, ... only found another orphan. THE END.";
```

- You can also use __single quotes__

```javascript
let greeting = 'Hello, World!';
```

???

- You might choose single quotes because you want to include double quotes in your string itself, like

```javascript
let sheSaid = 'She said, "This is the life!"';
```

---

## Addition and strings

- You can combine strings using `+`:

```javascript
let greeting = "Hello" + ", " + "World" +"!";
console.log(greeting); // "Hello, World!"
```

- You can even add other kinds of values into strings

```javascript
let sentence = "My favorite number is ";
let number = 7;
let sayFavoriteNumber = sentence + number + "!";
console.log(sayFavoriteNumber); // "My favorite number is 7!"
```

---

## Template literals

- There is a special extra way of writing strings in ES6 called template literals, where you write your string inside backtick characters

```javascript
let greeting = `Hello, World!`;
```

- They're special for two reasons. One, they respect formatting:

```javascript
let greeting = `Hello, World!
How are you?`; // The carriage return is part of the string
```

- Two, you can include variables (or any expression) using `${expression}`:

```javascript
let name = "World";
let greeting = `Hello, ${name}!`;
console.log(greeting); // "Hello, World!"
```

???

- More here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

---

## Math

- We can do the obvious kinds of maths using numbers

```javascript
3 + 3 // 6
3 - 3 // 0
3 * 3 // 9
3 / 3 // 1
3 ** 3 // 27 (power of)
```

---

## Math and variables

- We often use variables instead of literal values for this kind of math
- We often assign the results into variables

```javascript
let x = 10;
let y = 15;
let z = x * y; // z is 150
```

---

## More math

- There are other operators specifically for changing variables

```javascript
let x = 10;
x++; // x is now 11 (++ increases by one)
x--; // x is now 10 (-- decreases by one)
x += 3; // x is now 13 (+= adds the amount to the variable)
x -= 3; // x is now 10 (-= subtracts the amount from the variable)
x *= 2; // x is now 20 (*= multiplies the variable by the amount)
x /= 2; // x is now 10 (/= divides the variable by the amount)
```

---

## Type coercion

- In JavaScript there is the idea of __type coercion__
- This means JavaScript will try where possible to __convert values__ into types that will make sense in the context, for example

```javascript
2 + true; // 3 (true is converted to 1)
2 + false; // 2 (false is converted to 0)
```

- This becomes more weird with conditionals
- Generally just __avoid ever relying on type coercion__

???

- See more: https://medium.freecodecamp.org/js-type-coercion-explained-27ba3d9a2839

---

## Object

- The concept of an object is more complex than other data types
- In essence an object is a data type that __structures__ other data
- The most basic version of this is an __object literal__
- (But we also create objects via Object Oriented Programming)

---

## Object literals (declaring)

- We can declare objects literals like this

```javascript
let mobyDick = {
  author: "Herman Melville",
  title: "Moby Dick",
  alternateTitle: "The Whale",
  pages: 585,
  greatBook: true
};
```

- This kind of object is declared inside curly brackets, with a list of __properties__ and __values__ separated by commas inside them
- Each property has a name (with the same rules as variables) and can store any kind of data type as its value
- They're super useful for organizing related information together!

---

## Object literals (accessing)

- We access the properties of any object with __dot notation__

```javascript
let miffy = {
  name: "Miffy",
  age: 63
}
console.log(miffy.name); // "Miffy"
console.log(miffy.age); // 63
```

---

## Classes

- We can also define objects via classes

```javascript
class Rabbit {
  constructor(name, age, cuteness) {
    this.name = name;
    this.age = age;
    this.cuteness = cuteness;
  }

  sayHi() {
    console.log(`Hello, my name is ${this.name}!`);
  }

  getAge() {
    return this.age;
  }
}
```

---

## Creating objects from classes

- We create objects from classes using the special word `new` and their constructor function (which has the same name as the class)

```javascript
let miffy = new Rabbit("Miffy", 63, 100);
```

- We use these objects with the same dot notation we already saw for object literals

```javascript
miffy.sayHi(); // "Hello, my name is Miffy!"
let miffyAge = miffy.getAge(); // miffyAge is set to 63
```

---

## Inheritance with `extends`

- We can create classes based on other classes using __inheritance__

```javascript
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, my name is ${this.name}!`);
  }
}
```

```javascript
class Rabbit extends Animal {
  constructor(name, age, cuteness) {
    super(name, age); // Calls the parent's (Animal's) constructor
    this.cuteness = cuteness; // A new property just for a Rabbit
  }

  isCute() { // A new method just for a Rabbit
    return (this.cuteness > 50); // true if cuteness is greater than 50
  }
}
```

---

## Using classes with inheritance

- A class that extends another class has all the properties and methods of the parent class as well as anything the child class adds on

```javascript
let miffy = new Rabbit("Miffy", 63, 100); // Creates a Rabbit object

miffy.sayHi(); // "Hi, my name is Miffy!" because it uses the Animal properties and method

if (miffy.isCute()) { // true because we set miffy's cuteness to 100
  console.log("Miffy is cute!"); // "Miffy is cute!"
}
```

---

## null

- `null` is used to indicate the absence of an object
- You can use it yourself in cases where a variable is intended to contain an object but doesn't right now (maybe you need to create the object later)

```javascript
let miffy = null;
```

- `null` is often returned in cases when a function that normally returns an object needs to return an empty/not-found value

```javascript
// getElementById returns null if it can't find an element
let div = document.getElementById("wrapper");
// Assuming there is no element with id wrapper, div will be null
```

---

## Constants

- Sometimes we want to declare variables that __won't ever change__ and for this we use __constants__

```javascript
const PI = 3.14159;
const PROGRAMMING_IS_FUN = true;

PI = 4; // Error!
PROGRAMMING_IS_FUN = false; // Error!
```

- We just use `const` instead of `let` to declare a constant
- We conventionally use `ALL_CAPS_SEPARATED_BY_UNDERSCORES` for constant names

---

## Functions

- Functions create reusable code that is separate out from the rest of our program

```javascript
// Function definition
function sayYouLoveJavaScript() {
  console.log("I love JavaScript!");
}

// Function call
sayYouLoveJavaScript(); // "I love JavaScript!"
```

- We __define a function__ by writing `function`, then the name of the function in camelCase, then parentheses, then curly brackets with the code for that function inside them
- We __call a function__ by writing its name with parentheses

---

## Functions with arguments

- We can define arguments for our functions to be able to pass values into them for them to use

```javascript
function sayTo(person, text) {
  console.log("Hey " + person + " ...");
  console.log(text);
}

sayTo("Susie", "I love programming!"); // "Hey Susie..." "I love programming!"
```

- You can have as many arguments as you want (separated by commas) and they can contain any kind of value you want
- You use them in your function just like other variables

---

## Functions with return values

- We can define functions that give information back using `return`

```javascript
function square(x) {
  let result = x * x;
  return result;
}

console.log(square(2)); // 4
console.log(square(10)); // 100
```

- We use `return` to "send back" a value from the function
- If a function has a return value we can use the function anywhere we want to use the value it returns (the function call is "replaced" by the value returned)

---

## Weird: Functions are objects!

- JavaScript has what are called "first class functions"
- This means that functions are "just" another kind of object
- For our purposes this means: you can store functions in variables (and also in the properties of objects)

---

## A function in a variable

```javascript
function square(x) {
  return x * x;
}

let mySquareFunction = square;

console.log(mySquareFunction(10)); // 100
```

- We define a function called square
- We declare a variable called `mySquareFunction` which will contain the function and __assign__ the `square` function to it
- Then we can __call__ the function by writing the name of the variable with the function in it (`mySquareFunction`) and then parentheses with the arguments, and it works

---

## An anonymous function in a variable

```javascript
let square = function (x) {
  return x * x;
};

console.log(square(10)); // 100
```

- Note the difference in syntax here
- We declare a variable called `square` which will contain the function
- We define the function __without a name__, but otherwise the same: just `function` and the parentheses with its arguments and the body of the function inside curly brackets and __store__ it in the variable `square`
- Again, we __call__ the function by writing the name of the variable and then parentheses with the arguments
- A function without a name like this is called an __anonymous function__

---

## Functions as arguments!

- This means you can pass a function as an argument to a function
- A classic example of this is with `setTimeout()` which takes a __function__ as a parameter as well as the __delay__ after which to call it

```javascript
let hello = function () {
  console.log("Hello, World!");
}

setTimeout(hello, 1000); // Prints "Hello, World!" after 1000 milliseconds
```

- Or even...

```javascript
setTimeout(function () {
  console.log("Hello, World!");
}, 1000); // Prints "Hello, World!" after 1000 milliseconds
```

---

## Arrays

- An array is a data type that allows us to store values in order
- The values (elements) in an array are numbered (indexed) starting at `0`
- We can declare an array with values in it when we create it
- We access array __elements__ by their __index__ (number)

```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers[0]); // 1
console.log(numbers[9]); // 10
numbers[9] = 20;
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 20]
```

- We can use an array element anywhere we would use a value
- And we can assign to array elements just like they're variables

---

## Pushing and popping

- We can use `push()` on an array to add an element to the end
- We can use `pop()` on an array to remove the element at the end

```javascript
let numbers = [1,2,3,4,5];
let endValue = numbers.pop();
console.log(endValue); // 5
console.log(numbers); // [1,2,3,4]
numbers.push(100);
console.log(numbers); // [1,2,3,4,100]
```

---

## Shifting and unshifting

- We can use `unshift()` to add an element to the front
- We can use `shift()` to remove an element from the front

```javascript
let numbers = [1,2,3,4,5];
let firstValue = numbers.shift();
console.log(firstValue); // 1
console.log(numbers); // [2,3,4,5]
numbers.unshift(100);
console.log(numbers); // [100,2,3,4]
```

---

## Length

- We can find out the length of an array using its `length` property

```javascript
let numbers = [1,2,3,4,5];
console.log(numbers.length); // 5
numbers.pop();
console.log(numbers.length); // 4
```

---

## Arrays are objects!

- You may have already worked out from the dot notation used with `push()`, `pop()`, `length`, etc. that arrays are another kind of object
- We can use arrays anywhere you would use a value: in a variable, as an argument for a function, as a property of an object, even as an element in another array!

---

## Conditionals

- A huge part of programming is deciding __whether or not to do something__ dynamically in response to the current state of the program
- To achieve this we use __conditionals__, also known as __if-statements__

```javascript
let x = 10;
if (x < 20) {
  console.log("x is less than 20");
}
```

- The key to an if-statement is the __conditional expression__ inside the parentheses after the word `if`
- This expression has to be something that evaluates to either `true` or `false`
- If it's `true` the code inside the curly brackets will run

---

## Conditional operators

- The kinds of conditions you can check are all based on simple math

```javascript
let x = 10;
let y = 20;
let z = 30;
x + y === z // equality, true
x - y !== z // inequality, true
x < y // less than, true
z > y // greater than, true
x <= z // less than or equal, true
z >= y // greater-than or equal, true
```

- Note we should always prefer __`===` to check for equality__ and __`!==` to check for inequality__

???

- We prefer `===` and `!==` because they are more strict and don't allow type coercion to convert values "helpfully"
- For example:

```javascript
let x = true;
let y = 1;

console.log(x === y); // false, as you would hope since they aren't equal!

console.log(x == y); // true! Because 1 is converted to true before comparison. Boo!
```

---

## Else

- We can make conditionals more flexible by specifying what to do if the conditional expression is `false` using an `else`

```javascript
let r = Math.random(); // Math.random() returns a random number between 0 and 1
if (r < 0.5) {
  console.log("I'm happy!");
}
else {
  console.log("I'm sad!");
}
```

- The `else` code here is run when the condition of the `if` is false (i.e. when `r >= 0.5`)

???

- The example code is now a highly realistic simulation of life, day by day

---

## Else if

- We can create more complex conditions by checking a series of conditions

```javascript
let x = Math.random();
if (x < 0.2) {
  console.log("I'm happy!");
}
else if (x < 0.4) {
  console.log("I'm sad!");
}
else if (x < 0.6) {
  console.log("I'm confused!");
}
else {
  console.log("I feel nothing anymore.");
}
```

- Each subsequent `else if` and the final `else` are __only checked if the previous condition(s) were `false`__

---

## Logic operators

- We can make more efficient conditional expressions with the three logic operators

```javascript
a && b // true if both a AND b are true, false otherwise

a || b // true if one or both of a and b are true, false if both are false

!a // true if a is false, false if a is true
```

- `a` and `b` both need to be something that is true or false (i.e. conditional expressions themselves)

---

## Switch statement

- A useful way of writing a set of conditions where you want to check the specific value in a variable is a `switch` statement, which works as follows:

```javascript
let state = 1;

switch (state) {
  case 1:
  console.log("State 1!");
  break;

  case 2:
  console.log("State 2!");
  break;

  case 3:
  console.log("State 3!");
  break;

  default:
  console.log("None of the above!");
}
```

???

- So the switch statement checks the value in the variable provided (`state` in this example)
- It compares it with each `case` listed and if it matches the value specified by a case it executes the code inside the case
- We include `break;` after a case so that code doesn't keep executing into the next case
- We use the `default` case at the end to catch if the variable doesn't have any of our specific values in it
- So the above would print "State 1!"
- If we had used `let state = 3;` it would print "State 3!"
- If we had used `let state = 4;` it would print "None of the above!"

---

## Switch statement

- Switch statements don't have to check numbers:

```javascript
let state = "HAPPY";

switch (state) {
  case "SAD":
  console.log("*sob*");
  break;

  case "AMBIVALENT":
  console.log("Meh.");
  break;

  case "HAPPY":
  console.log("Wheeeee!");
  break;

  default:
  console.log("I feel really default.");
}
```

---

## Loops

- Quite often in programming it's useful to repeat the same or similar set of code over and over again
- We achieve this more efficiently using loops
- There are two main kinds of loops, `while` loops and `for` loops

---

## While loop

- A while loop keep executing the code inside it until its condition becomes `false`

```javascript
let x = 5;
while (x > 0) {
  console.log(`Loop ${x}!`);
  x--;
}
```

- Importantly, the condition used in a while loop needs to become `false` or you have a loop that will never stop!
- Above, we will see: "Loop 5" "Loop 4" "Loop 3" "Loop 2" "Loop 1"
- Then the loop will stop because `x` becomes `0`

???

- A simple infinite loop would be to just make `x` go up instead of down

```javascript
let x = 5;
while (x > 0) {
  console.log("Loop!");
  x++;
}
```

- This loop can't end because `x` starts out greater than `0` and keeps getting bigger!
- Clearly one could do this with a typo, so be careful!
- There is also such a thing as a do while loop
- A do while loop is exactly the same as a while loop, except that it executes the code before checking the condition

```javascript
let x = 5;
do {
  console.log(`Loop ${x}!`);
  x--;
} while (x > 0)
```

- Again, the loop runs five times

---

## For loop

- A for loop is a special kind of loop syntax that focuses on loops based on __counting__
- It creates a special variable called an __iterator__ and changes the iterator using the __update step__ until the loop's __condition__ becomes false

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

- Here `i` is the __iterator__, it goes up by 1 each time through the loop, and the loop stops when i is no longer less than 10
- The __condition__ is checked before the loop runs while the __update step__ (`i++`) is performed __after__ the loop has run
- `i` starts at 0, and then becomes 1, 2, 3, 4, 5, 6, 7, 8, 9 before the loop ends (because `i` becomes 10 and the condition becomes false)

---

## For loops and arrays

- For loops are especially marvelous at going through an array and doing stuff with it

```javascript
let numbers = [1,2,3,5,7,11,13];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

- Note the use of `numbers.length` to limit `i` (this guarantees it won't count past the end of the array)
- This code will print out the value of every element in the array (the prime numbers from 1 to 13)

---

## Extra: forEach loops

- There's another kind of loop specifically for arrays
- It works by calling a _function_ on each element in an array, passing the element as an argument

```javascript
let numbers = [1,2,3,5,7,11,13];
numbers.forEach(function (element) {
  console.log(element);
});
```

- `forEach` is __not guaranteed to go through the array in order__
- But it can be a nice way to do something to every array element when order doesn't matter, e.g.

```javascript
enemies.forEach(function (enemy) {
  enemy.update();
  enemy.display();
});
```

???

- Note that this is a classic use of an anonymous function!
- This kind of use of a function, passed as a parameter to some other function so it can be used at the appropriate time or with the appropriate data, is called a "callback" function
- If you dislike using anonymous functions (which is fine!) you can write a defined function instead:

```javascript
enemies.forEach(handleEnemy);

function handleEnemy(enemy) {
  enemy.update();
  enemy.display();
}
```

---

## Extra: Objects as parameters

- One nice way to deal with functions or constructors that have many parameters is to use an object literal instead

```javascript
class Animal {
  constructor(config) {
    this.age = config.age;
    this.name = config.name;
    this.weight = config.weight;
    this.legs = config.legs;
  }
}
```

```javascript
let config = {
  age: 10,
  name: "fido",
  weight: 55,
  legs: 4
}
let dog = new Animal(config);
```

- Note how this lets us explicitly name the parameters in a nice way, too

---

## Extra: Arrow functions

- Just so you know, there's another way to write anonymous functions in an abbreviated style

```javascript
setTimeout(function() {
  console.log("... one second later!");
},1000);
```

becomes

```javascript
setTimeout(() => {
  console.log("... one second later!");
},1000);
```

???

- There are a few important differences with arrow functions
- Obviously they're a bit more compact
- Perhaps most "interestingly" they preserve the existing context when you use `this` inside the function, which can be helpful especially with object oriented programming - essentially with a normal anonymous function a new context (and therefore a new `this`) is created, but with arrow functions this doesn't happen

```javascript
class Tiger {
  constructor() {
    this.name = "Tony";
  }

  sayNameAfterDelay() {
    setTimeout(function () {
      console.log(this.name); // undefined
    },1000);
  }
}
```

- The above doesn't work because the `this` inside the anonymous function actually refers to the context of the anonymous function and __not__ the class, it will print `undefined`

```javascript
class Tiger {
  constructor() {
    this.name = "Tony";
  }

  sayNameAfterDelay() {
    setTimeout(() => {
      console.log(this.name); // Tony
    },1000);
  }
}
```

- The above arrow function version does work because the arrow function __doesn't__ create a new context (or `this`), and so the `this` still refers to the `Tiger`.

- Read more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions (or Google it)

---

## That's JavaScript, folks

- There's of course more to the language than what we've reviewed here
- But we've covered the real fundamentals of JavaScript programming (and, not so secretly, most standard programming)
- If anything in here felt weird or unfamiliar, please review it and/or ask for help
- Moving forward, it will more or less be assumed that you understand what we've just seen (though there's always time for questions!)

---

# }

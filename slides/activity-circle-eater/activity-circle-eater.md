# Activity: Circle Eater

---

## Brief

A game in which:

- The player controls a circle with the mouse to move it on screen
- Another circle appears randomly on screen
- When the player overlaps the other circle, it "eats" it and a new circle appears
- The player decreases in size over time, but gains size when eating
- If the player completely shrinks, the game is over

---

## 1. Set up a template p5 project

Go to the course website and download the [template p5 project](https://github.com/pippinbarr/cart263-2020/raw/master/templates/p5-project.zip) then open the project in Atom.

---

## 2. Create an player object literal

Create a variable called `player` that stores a javascript object literal with the following properties:
- An x and y position
- A maximum size
- A current size
- A boolean that tracks whether the player is active (e.g. not dead)

???

```javascript
let player = {
  x: 0,
  y: 0,
  maxSize: 64,
  size: 64,
  active: true,
}
```

---

## 3. Create a food object

Create a variable called `food` that stores a javascript object literal with the following properties:
- An x and y position
- A size

???

```javascript
let food = {
  x: 0,
  y: 0,
  size: 64,
}
```

---

## 4. Setup

Fill in the p5 `setup()` function to
- Create a canvas (you choose the size)
- Set the position properties of the food to a random location on the canvas
- Disable the cursor with `noCursor()`

???

```javascript
function setup() {
  createCanvas(windowWidth,windowHeight);
  food.x = random(0,width);
  food.y = random(0,height);
  noCursor();
}
```

---

## 5. Draw
Add an instruction to clear the canvas to a solid color into `draw()`. You choose the color.

???

```javascript
function draw() {
  background(0);
}
```

---

## 6. Updating the avatar

Define a function called `updatePlayer()` that updates the player's position. It should:
1. Set the player's position to be the same as the mouse position (remember that p5 has built-in variables to tell you the mouse's position - look them up if you don't remember)
1. Reduce the player's size by a set amount
1. Constrain the player's size to be between 0 and its maximum size (use `constrain()` or an `if` statement to achieve this)
1. Check if the player's size has reached 0 and set it to be inactive if so

Call this function in `draw()`

???

```javascript
function draw() {
  background(0);
  updatePlayer();
}

function updatePlayer() {
  player.x = mouseX;
  player.y = mouseY;
  player.size = constrain(player.size - 0.5,0,player.maxSize);
  if (player.size === 0) {
    player.active = false;
  }
}
```

---

## 7. Displaying the player

Define a function that displays the player on the canvas. It should:
1. Set the stroke to not display
1. Set the fill to a color you want for the player
1. Draw a circle at the player's location with the player's size
1. Use `push()` and `pop()` around all the display instructions to avoid problems

Call this function in `draw()` after the player update function.

At this point you should be able to run the program and see the player circle move around based on the mouse location

???

```javascript
function draw() {
  background(0);
  updatePlayer();
  displayPlayer();
}

...

function displayPlayer() {
  push();
  noStroke();
  fill(255,0,0); // Red
  ellipse(player.x,player.y,player.size);
  pop();
}
```

---

## 8. Displaying the food

Define a function that displays the food on the canvas. It should:

1. Set the stroke to not display
1. Set the fill to a color you want for the food
1. Draw a circle at the food's location with the food's size
1. Use `push()` and `pop()` around all the display instructions to avoid problems

Call this function in `draw()` after the player display function. At this point you should be able to see the food circle on the screen.

???

```javascript
function draw() {
  background(0);
  updatePlayer();
  displayPlayer();
  displayFood();
}

...

function displayFood() {
  push();
  noStroke();
  fill(255,255,0); // Yellow
  ellipse(food.x,food.y,food.size);
  pop();
}
```

---

## 9. Checking for a collision/eating

Define a function that checks whether the player overlaps the food and reacts appropriately. It should:
1. Calculate the distance from the player to the food (p5 has a function called `dist()` for calculating the distance between two points)
1. Check if that distance is less that the sum of the radii of the player and food (e.g. they overlap)
1. If so, increase the player's size by a set amount (but don't let it get larger than than its maximum size, use an `if`-statement or `constrain()`) and move the food to a new random location
1. If not, do nothing

Call this function in `draw()` after the player update function.

At this point the "game" should pretty much work, with a couple of exceptions.

???

```javascript
function draw() {
  background(0);
  updatePlayer();
  checkCollision();
  displayPlayer();
  displayFood();
}

...

function checkCollision() {
  let d = dist(player.x,player.y,food.x,food.y);
  if (d < player.size/2 + food.size/2) {
    player.size = constrain(player.size + 50,0,player.maxSize);
    food.x = random(0,width);
    food.y = random(0,height);
  }
}
```

---

## 10. Death

Add an if-statement to the start of `draw()` that only calls the functions we've defined __if the player is still alive/active__ and doesn't run them if not.

???

- One option:

```javascript
function draw() {
  if (!player.active) {
    return;
  }

  background(0);
  updatePlayer();
  checkCollision();
  displayPlayer();
  displayFood();
}
```

- Another option:

```javascript
function draw() {
  if (player.active) {
    background(0);
    updatePlayer();
    checkCollision();
    displayPlayer();
    displayFood();
  }
}
```

---

## 11. Done.

At this point you should have a fully working version of this simple game.

---

# }

"use strict";

/*****************

Circle Eater
Pippin Barr

A simple game in which the player controls a shrinking circle with their mouse and tries
to overlap another circle (food) in order to grow bigger.

******************/

// Constants defining key quantities
const PLAYER_SIZE_GAIN = 50;
const PLAYER_SIZE_LOSS = 1;

// Player is an object defined by its properties
let player = {
  x: 0,
  y: 0,
  maxSize: 64,
  size: 64,
  active: true,
  color: '#cccc55'
}

// Food is an object defined by its properties
let food = {
  x: 0,
  y: 0,
  size: 64,
  color: '#55cccc'
}

// preload()
//
// Not needed

function preload() {

}


// setup()
//
// Create the canvas, position the food, remove the cursor

function setup() {
  createCanvas(windowWidth, windowHeight);
  positionFood();
  noCursor();
}


// draw()
//
// Move the player, check for collisions, display player and food

function draw() {
  // Make sure the player is still alive - if not, we don't run
  // the rest of the draw loop
  if (!player.active) {
    // By using "return" the draw() function exits immediately
    return;
  }

  // Otherwise we handle the game
  background(0);
  updatePlayer();
  checkCollision();
  displayPlayer();
  displayFood();
}

// updatePlayer()
//
// Set the position to the mouse location
// Shrink the player
// Set it to inactive if it reaches a size of zero
function updatePlayer() {
  player.x = mouseX;
  player.y = mouseY;
  // Shrink the player and use constrain() to keep it to reasonable bounds
  player.size = constrain(player.size - PLAYER_SIZE_LOSS, 0, player.maxSize);
  if (player.size === 0) {
    player.active = false;
  }
}

// checkCollision()
//
// Calculate distance of player to food
// Check if the distance is small enough to be an overlap of the two circles
// If so, grow the player and reposition the food
function checkCollision() {
  let d = dist(player.x, player.y, food.x, food.y);
  if (d < player.size / 2 + food.size / 2) {
    player.size = constrain(player.size + PLAYER_SIZE_GAIN, 0, player.maxSize);
    positionFood();
  }
}

// displayPlayer()
//
// Draw the player in its current position, using its size and color
// Use push() and pop() around it all to avoid affecting the rest of the program
// with drawing commands
function displayPlayer() {
  push();
  noStroke();
  fill(player.color);
  ellipse(player.x, player.y, player.size);
  pop();
}

// displayFood()
//
// Draw the food in its current position, using its size and color
// Use push() and pop() around it all to avoid affecting the rest of the program
// with drawing commands
function displayFood() {
  push();
  noStroke();
  fill(food.color);
  ellipse(food.x, food.y, food.size);
  pop();
}

// positionFood()
//
// Set the food's position properties to random numbers within the canvas dimensions
function positionFood() {
  food.x = random(0, width);
  food.y = random(0, height);
}
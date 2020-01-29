"use strict";

/*****************

Eat Up
Pippin Barr

Using jQuery UI's draggable and droppable methods to
feed a hungry animal!

Sounds:
Buzzing: https://freesound.org/people/soundmary/sounds/194931/
Chewing: https://freesound.org/people/InspectorJ/sounds/412068/

******************/

// Sound effects for the experience
let buzzSFX = new Audio("assets/sounds/buzz.mp3");
let crunchSFX = new Audio("assets/sounds/crunch.wav");

// Variable to hold our two key elements
let $animal;
let $fly;

$(document).ready(setup);

function setup() {
  // Get the animal element from the page
  $animal = $('#animal');
  // Make it droppable
  $animal.droppable({
    // The drop option specifies a function to call when a drop is completed
    drop: onDrop
  });

  // The fly buzz should loop
  buzzSFX.loop = true;
  // Get the fly element from the page
  $fly = $('#fly');
  // Make it draggable and start and stop the buzzing
  // when dragging starts and stops
  $fly.draggable({
    start: function() {
      buzzSFX.play();
    },
    stop: function() {
      buzzSFX.pause();
    }
  });
}

// onDrop(event,ui)
//
// Called when a draggable element is dragged over the droppable element (the animal)
// In this instance it can only be the fly (it's the only draggable element).
// The arguments 'event' and 'ui' are automatically passed by jQuery UI and contain
// helpful information about the event.
function onDrop(event, ui) {
  // When we drop the fly into the animal we should remove the fly from the page
  // ui contains a reference to the draggable element that was just dropped in ui.draggable
  // .remove() removes the select element from the page
  ui.draggable.remove(); // $fly.remove() would work here too
  // We should make the animal chew by changing its image to the animated GIF version
  // .attr() lets us change specific attributes on HTML element by specifying the attribute
  // and then what we want to set it to - in this case the 'src' attribute to the closed image
  $(this).attr('src', 'assets/images/chewing.gif');
  // Play the sound effect
  crunchSFX.loop = true;
  crunchSFX.play();
}
"use strict";

/*****************

Simple Rememberer
Pippin Barr

A page that remember if you like dogs or cats.

******************/

$(document).ready(setup);

function setup() {
  // Load the user data we may have saved using localStorage and JSON.parse()
  let userData = JSON.parse(localStorage.getItem("userData"));
  // Check if there's anything here (it will be null if there's no saved data)
  if (userData === null) {
    // If the data is empty (null), we need to display the choice interface
    $("#choices").show();
    // And listen for clicks on either choice button
    $(".choice").on('click', saveChoice);
  }
  else {
    // Otherwise, we have data and we can use it
    let greeting = `Hi again. Kiss any ${userData.animal} lately?`;
    $("body").text(greeting);
  }
}

// saveChoice()
//
// Called when one of the buttons is clicked and saves the
// associated data in local storage
function saveChoice() {
  // Get the text on the clicked button ("dogs" or "cats")
  let choice = $(this).text();
  // Save the choice they made in an object for easier storage
  let userData = {
    animal: choice
  }
  // Save the object using localStorage and JSON.stringify()
  localStorage.setItem("userData", JSON.stringify(userData));
  // Hide the question interface
  $('#choices').hide();
  // Tell them you'll remember
  let message = `I'll remember that next time.`;
  $("body").text(message);
}
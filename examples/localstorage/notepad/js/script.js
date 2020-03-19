"use strict";

/*****************

Notepad
Pippin Barr

A very simple persistent notepad! Uses "contenteditable" in the HTML to make a DIV
editable, and saves the contents when it is changed.

******************/

$(document).ready(setup);

function setup() {
  // Load the notes data (if there is any)
  let notesData = JSON.parse(localStorage.getItem('notes'));
  // If it's not null, then there's data to display
  if (notesData !== null) {
    // Set the HTML of the notepad to the data loaded
    $('#notepad').html(notesData.html);
  }
  // Listen for keypresses in the notepad and save the data each time
  $('#notepad').on('keyup', saveNotes);

});

// saveNotes()
//
// Saves the current notes to localStorage
function saveNotes() {
  // Grab the current HTML of the notepad
  let currentNotesHTML = $('#notepad').html();
  // Store the HTML in an object
  let notesData = {
    html: currentNotesHTML
  }
  // Save it to localStorage
  localStorage.setItem('notes', JSON.stringify(notesData));
}
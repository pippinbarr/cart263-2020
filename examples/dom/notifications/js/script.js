"use strict";

/********************************************************************

Notifications
Pippin Barr

A dystopian notifications experience! Keep the notifications at 0,
or else... something! Nothing! What?

*********************************************************************/

// Constants to track key numbers
const MIN_DELAY = 500;
const DELAY_RANGE = 1000;

// Our loading function
window.onload = setup;


// setup
//
// Called on page load. Goes through all icons and adds event listeners
// for clicks on them, also starts a notification timer for each one that
// will add notifications after a delay.
function setup() {
  // Get all elements with a class of 'icon'
  let icons = document.getElementsByClassName('icon');
  // Go through them all like an array (technically it's not an array)
  for (let i = 0; i < icons.length; i++) {
    // Add an click listener to each
    icons[i].addEventListener('click', iconClicked);
    // Start a notification timer for each
    addNotificationTimer(icons[i]);
  }
}

// iconClicked
//
// Called when any icon is clicked, subtracts one from its notifications badge
function iconClicked(e) {
  // Get the icon element from the target of the event
  let icon = e.target;
  // Get the overall app div (the parent)
  let app = icon.parentElement;
  // Get the badge element by class name (we use [0] to get the first, and only
  // element in the returned set of elements - there's only one badge)
  let badge = app.getElementsByClassName('badge')[0];
  // Get the badge count
  let badgeCount = getBadgeCount(badge);
  // Reduce the badge count by one
  badgeCount--;
  // Don't let the badge count drop below 0
  if (badgeCount < 0) {
    badgeCount = 0;
  }
  // Set the new badge count on the badge
  setBadgeCount(badge, badgeCount);
}

// addNotificationTimer
//
// Adds a notification to the icon after a random delay
function addNotificationTimer(icon) {
  setTimeout(addNotification, MIN_DELAY + Math.random() * DELAY_RANGE, icon);
}

// addNotification
//
// Add one to the number of notifications on the icon and start another timer
function addNotification(icon) {
  // Get the app
  let app = icon.parentElement;
  // Get the badge
  let badge = app.getElementsByClassName('badge')[0];
  // Get the badge count
  let badgeCount = getBadgeCount(badge);
  // Increate by between 1 and 3
  badgeCount = badgeCount + 1 + Math.floor(Math.random() * 3);
  // Set the badge
  setBadgeCount(icon, badgeCount);
  // Start a new timer
  addNotificationTimer(icon);
}

// getBadgeCount
//
// Retrieves the current badge count from the html of the element
function getBadgeCount(badge) {
  let badgeCount = parseInt(badge.innerHTML);
  return badgeCount;
}

// setBadgeCount
//
// Sets the badge for the icon to the specified count
function setBadgeCount(icon, count) {
  // Get the app
  let app = icon.parentElement;
  // Get the badge
  let badge = app.getElementsByClassName('badge')[0];
  // Set the badge to the count
  badge.innerHTML = count;
  // If the count is zero, hide the badge with opacity,
  // otherwise make it visible
  if (count === 0) {
    badge.style.opacity = '0';
  }
  else {
    console.log('here');
    badge.style.opacity = '1';
  }
}
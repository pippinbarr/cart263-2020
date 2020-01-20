# Assignment 2: Raving Redactionist Redux

__Grade__: 2% of final grade (see grading guidelines at bottom)  
__Deadline__: 11:59PM on the day of class on week of 27 January 2020.

## Brief

Improve the Raving Redactionist activity code.

## Learning objectives

- Building confidence with jQuery
- Learning new jQuery functions

## Starting up

Either begin with your own _Raving Redactionist_ code from the in-class activity, or download a completed version here: [raving-redactionist.zip](https://github.com/pippinbarr/cart263-2020/raw/master/activities/jquery/raving-redactionist.zip).

Before you begin working make sure you __commit__ your work with a descriptive message that includes the assignment number (e.g. __"A2: Added starting code"__).

## Challenge

Add an interaction to the page in which the user finds other secret words in the document by mousing over them, causing them to be highlighted. The page should display a count of how many of the total number of secret words have been found. Each secret found should only be counted once, not every time it is moused over.

For each step you take, commit your code with a descriptive message and the assignment number.

## An approach

### HTML

1. Add spans to the HTML with a class of "secret" that go around words or phrases on the page (don't make them overlap with the existing redacted spans)
1. Add text somewhere on the page that reports how many secrets have been found. something like "0 out of 10 secrets found". Put spans around each number (the found secrets and the total secrets) with id attributes to allow you to address them from your code.

### CSS

1. Add a class to your CSS called something like "found" that will brightly highlight a secret once it has been found. Consider adding a bright background color for instance.

### JavaScript

1. Add a variable to the top of your program to track how many secrets were found (call it something like `secretsFound`) and how many secrets there are in total (something like `secretsTotal`)
1. Calculate the total number of secrets on the page by selecting the `secret` class and checking the `.length` property of the result. Store the result in `secretsTotal` __and__ set the appropriate span on the page to this value using jQuery's `text()` function.
1. Add an event for "mouseover" to all the secrets (use jQuery to select the `secret` class and use `on()` to attach an event for mouseover). You will need to define an event handler function to be called on mouse over of course.
1. In the event handler function
  1. Add the "found" class to the element that was moused over so it highlights (remember that in an mouse event handler `this` refers to the targeted element)
  1. Remove the mouseover event from the found element (use jQuery's `off()` function)
  1. Increase the counter variable by one
  1. Select the span containing the count of secrets found and set its text to be the value of the counter variable (use jQuery's `text()` function)

__NOTE:__ This brief is the bare minimum of additions in order to pass, please always use these assignments as a playground to try out more than just this!

__Additional challenge:__: Add an "ending" to the experience by indicating (however you wish) that the user has failed if all the redacted passages are revealed, and do not allow them to continue the experience if this happens.

## Submission

You will submit this exercise as a __comment__ on an __Issue__ on the course repository here:

https://github.com/pippinbarr/cart263-2020/issues

(Click on the Issue with the name of the exercise and your section letter and follow the instructions.)


## Grading

Grading for exercises is pass/fail based on
- meeting the brief
- clear, commented code
- a commit history that reflects organized work

# Assignment 1: Pixel Painter Pro

__Grade__: 2% of final grade (see grading guidelines at bottom)  
__Deadline__: 11:59PM on the day of class on week of 20 January 2020.

## Brief

Improve the Pixel Painter activity code.

## Learning objectives

- Exploring JavaScript DOM programming in conjunction with HTML and CSS
- Using the document structure of a webpage creatively

## Starting up

Either begin with your own _Pixel Painter_ code from the in-class activity, or download a completed version here: [pixel-painter.zip](https://github.com/pippinbarr/cart263-2020/raw/master/activities/dom/pixel-painter.zip).

Before you begin working make sure you __commit__ your work with a descriptive message that includes the assignment number (e.g. __"A1: Added starting code"__).

## Challenges

For each step below, commit your code with a descriptive message and the assignment number.

1. Choose the painting color randomly each time the user paints a pixel (remember we use `Math.random()` in regular JavaScript to get a number between `0` and `1`)
2. Add an event listener to all pixels for `click` that calls a function `remove` which removes the target pixel from the screen (in order to leave a "hole" you'll need to set the pixel's opacity to 0 rather than actually remove it)
3. Add a global variable called `rotation` that starts as `0`
4. Add an event listener to the `document` for `keydown` that calls a function `rotate` that rotates all the pixels on the screen by 1 degree clockwise when the right arrow key is pressed, and 1 degree counter-clockwise when the left arrow key is pressed. (You'll need to check the keyCode pressed against the keycodes for left and right arrows. You'll need to use the `transform` style property with its `rotate()` function, and use the `rotation` variable you defined to track the rotation to set.)
5. Add a global variable called `currentKey` that starts a `""`
6. Add another `keydown` event listener to the document that called a function `typed` which sets `currentKey` to the `keyCode` of the key just presse
7. Add another `mouseover` event listener to all the pixels that called a function `addText` which adds the `currentKey` as text to the currently moused over pixel (use `.innerHTML`). Style the pixels in your `style.css` so this text appears centered in the pixel. (Remember that if you set `line-height` to be the same as the height of an element, single-line text will be centered in it.)

__Optional__ challenge:
- Can you turn this into a more sophisticated drawing program where you can select colors with the mouse and then paint them on the pixels by clicking and dragging?

## Submission

You will submit this exercise as a __comment__ on an __Issue__ on the course repository here:

https://github.com/pippinbarr/cart253-2020/issues

(Click on the Issue with the name of the exercise and your section letter and follow the instructions.)


## Grading

Grading for exercises is pass/fail based on whether you meet the brief.

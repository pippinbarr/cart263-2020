# Activity: jQuery UI: Eat Up {

---

## Brief

An experience in which:

- We see an image of an animal and a fly on screen
- The fly starts making a buzzing sound on mouse down (and stops on mouse up)
- We can drag the fly around on the screen
- If we drop the fly on the animal, the fly vanishes and the animal starts chewing (and making a chewing sound)

---

## 1. Start a project

Download an __empty project template__ (**not** p5) project and include jQuery and jQuery UI by adding the appropriate CDN script tags to `index.html`, e.g.

```html
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"
></script>

<link
  rel="stylesheet"
  type="text/css"
  href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
/>

<script
  src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
  integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
  crossorigin="anonymous"
></script>
```

- Remember that jQuery UI requires the use of a stylesheet as well as the JavaScript file

---

## 2. Create the basic HTML content

1. Add two images to `index.html` (`img` elements):
1. One should be an image of the animal with an open mouth with an `id` of `animal`
1. One should be an image of a fly with an `id` of `fly`
1. (Obviously you'll need to put the images themselves in the appropriate folder and link to them)

(To save time, use [this fly](https://github.com/pippinbarr/cart263-2020/raw/master/activities/jqueryui/eat-up/assets/images/fly.png) and [this open mouthed animal](https://raw.githubusercontent.com/pippinbarr/cart263-2020/master/activities/jqueryui/eat-up/assets/images/open.png), and download [this chewing GIF](https://raw.githubusercontent.com/pippinbarr/cart263-2020/master/activities/jqueryui/eat-up/assets/images/chewing.gif) for later)

You should now be able to view the page in your browser, and see the animal with its mouth open and a fly.

???

```html
<img id="animal" src="assets/images/open.png" />
<img id="fly" src="assets/images/fly.png" />
```

---

## 3. Start the script

1. Add the basic "document ready" code to your `script.js` so you're ready to start writing code

???

```javascript
$(document).ready(setup);

function setup() {
  // Code to run on the page goes here
}
```

---

## 4. Save variables containing the mouth and fly elements on the page

1. Declare two variables at the top of your program to store the animal and fly elements (since we're using jQuery you should prefix the variable names with `$`)
1. In your "document ready" function, use jQuery to select the two elements on the page and store them in the appropriate variables

???

```javascript
let $animal;
let $fly;

$(document).ready(setup);

function setup() {
  $animal = $("#$animal");
  $fly = $("#fly");
}
```

---

## 5. Make the fly draggable

1. In `setup()` use jQuery UI to make the fly element `draggable` (look it up in the demo documentation to see how - it's very simple)

You should now be able to drag the fly around on the screen!

???

```javascript
function setup() {
  $animal = $("#animal");
  $fly = $("#fly");

  $fly.draggable();
}
```

---

## 6. Make the animal droppable

1. In `setup()` use jQuery UI to make the animal `droppable` (look it up)
1. When making it droppable, add an option to call a function called `onDrop` when an element is dropped (look it up)
1. Define the `onDrop` function below `setup` and have it `console.log()` something to show it works
1. Take note of the parameters that this handler (`onDrop`) will receive by default (can be seen in the demos or the API) - make sure you include those parameters in your function definition

Now you should be able to drag the fly onto the animal and see your message in the console!

???

```javascript
function setup() {
  $animal = $("#animal");
  $fly = $("#fly");

  $fly.draggable();
  $animal.droppable({
    drop: onDrop
  });
}

function onDrop(event, ui) {
  console.log("Dropped!");
}
```

---

## 7. Make the fly vanish when it's dropped on the animal

1. In `onDrop`, use jQuery's `.remove()` function to remove the fly when it's dropped (note that you can use `$fly` to target the fly or you can use `ui.draggable` to generically target the element that was just dropped, __the latter is better__)

Now when you drag the fly onto the animal it should vanish!

???

```javascript
function onDrop(event, ui) {
  console.log("Dropped!");
  ui.draggable.remove();
}
```

---

## 8. Make the animal chew when it has eaten a fly

To make the animal chew we'll need to replace the current static image (`open.png`) with the animated GIF version (`chewing.gif`).

1. In the `onDrop()` function, use jQuery's `.attr()` function to set the `src` attribute of the animal to the path to the chewing animated GIF

Now when you drag the fly onto the animal it should vanish and the animal should start "chewing"!

???

```javascript
function onDrop(event, ui) {
  ui.draggable.remove();
  $animal.attr('src','assets/images/chewing.gif');
}
```

---

## 9. Add sound effects

1. Obtain the [buzzing sound](https://raw.githubusercontent.com/pippinbarr/cart263-2020/master/activities/jqueryui/eat-up/assets/sounds/buzz.mp3) and [chewing sound](https://raw.githubusercontent.com/pippinbarr/cart263-2020/master/activities/jqueryui/eat-up/assets/sounds/crunch.wav) and add them to your project folder (you may need to explicitly "save" them from the file menu)
1. Add the buzzing sound effect to the program (load it into a variable), set it to loop
1. Add the chewing sound effect to the program (load it into a variable)
1. In the `.draggable()` function call add the options for a `start` and `stop` event handler. In the start function play the buzzing sound, in the stop function pause the buzzing sound.
1. Set the chewing sound to loop and play it in the `onDrop()` function

Now when you run the page and start dragging the fly you should hear buzzing, and when you drop the fly on the animal it should vanish and stop buzzing, and a chewing sound should start. Done!

???

```javascript
// At top of program
let buzzSFX = new Audio("assets/sounds/buzz.mp3");
let crunchSFX = new Audio("assets/sounds/crunch.wav");

...

// In document ready
buzzSFX.loop = true;

$fly.draggable({
  start: function () {
    buzzSFX.play();
  },
  stop: function () {
    buzzSFX.pause();
  }
});

...

function onDrop(event, ui) {
  ui.draggable.remove();
  $animal.attr('src','assets/images/chewing.gif');
  crunchSFX.loop = true;
  crunchSFX.play();
}
```

---

# }

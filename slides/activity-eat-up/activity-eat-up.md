# Activity: jQuery UI: Eat Up {

---

## Brief

An experience in which:

- We see an image of a mouth and a fly on screen
- The fly starts making a buzzing sound on mouse down (and stops on mouse up)
- We can drag the fly around on the screen
- If we drop the fly on the mouth, the fly vanishes and the mouth starts chewing (and making a chewing sound)
- Disgusting!

---

## 1. Start a project

Download an empty project template (**not** p5) project and include jQuery and jQuery UI by adding the appropriate CDN script tags to `index.html`, e.g.

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
1. One should be an image of an open mouth with an `id` of `mouth`
1. One should be an image of a fly with an `id` of `fly`
1. (Obviously you'll need to put the images themselves in the appropriate folder and link to them)

(To save time, use [this fly](https://github.com/pippinbarr/cart263-2020/raw/master/activities/jqueryui/eat-up/assets/images/fly.png)] and [this open mouth](https://raw.githubusercontent.com/pippinbarr/cart263-2020/master/activities/jqueryui/eat-up/assets/images/mouth-open.png), and download [this closed mouth](https://raw.githubusercontent.com/pippinbarr/cart263-2020/master/activities/jqueryui/eat-up/assets/images/mouth-closed.png) for later)

You should now be able to view the page in your browser, and see a mouth and a fly.

???

```html
<img id="mouth" src="assets/images/mouth-open.png" />
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

1. Declare two variables at the top of your program to store the mouth and fly elements (since we're using jQuery you should prefix the variable names with `$`)
1. In your "document ready" function, use jQuery to select the two elements on the page and store them in the appropriate variables

???

```javascript
let $mouth;
let $fly;

$(document).ready(setup);

function setup() {
  $mouth = $("#mouth");
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
  $mouth = $("#mouth");
  $fly = $("#fly");

  $fly.draggable();
}
```

---

## 6. Make the mouth droppable

1. In `setup()` use jQuery UI to make the mouth `droppable` (look it up)
1. When making it droppable, add an option to call a function called `onDrop` an element is dropped (look it up)
1. Define the `onDrop` function below `setup` and have it `console.log()` something to show it works
1. Take special note of the parameters that this handler (`onDrop`) will receive by default (can be seen in the demos or the API)

Now you should be able to drag the fly onto the mouth and see your message in the console!

???

```javascript
function setup() {
  $mouth = $("#mouth");
  $fly = $("#fly");

  $fly.draggable();
  $mouth.droppable({
    drop: onDrop
  });
}

function onDrop(event, ui) {
  console.log("Dropped!");
}
```

---

## 7. Make the fly vanish when it's dropped on the mouth

1. In `onDrop`, use jQuery's `remove()` function to remove the fly when it's dropped (note that you can use `$fly` to target the fly or you can use `ui.draggable` to generically target the element that was dropped, __the latter is better__)

Now when you drag the fly onto the mouth it should vanish!

???

```javascript
function onDrop(event, ui) {
  console.log("Dropped!");
  ui.draggable.remove();
}
```

---

## 8. Make the mouth chew when it has eaten a fly

1. After removing the fly, use `setInterval()` to repeatedly call a `chew()` function at some interval (you can tweak the number to your liking)
1. Define the `chew()` function in your code, it should:
  1. Check if the current image displayed in the mouth element is open (use jQuery's `attr()` function to check if the `src` attribute matches the path of the open mouth image)
  1. If it is, swap the image to the closed image (use `attr()` to **set** the `src` property)
  1. If it isn't it must be closed, so swap the image to the open image

Now when you drag the fly onto the mouth it should vanish and the mouth should start "chewing"!

???

```javascript
function onDrop(event, ui) {
  ui.draggable.remove();
  setInterval(chew, 250);
}

function chew() {
  if ($mouth.attr("src") === "assets/images/mouth-open.png") {
    $mouth.attr("src", "assets/images/mouth-closed.png");
  } else {
    $mouth.attr("src", "assets/images/mouth-open.png");
  }
}
```

---

## 9. Add sound effects

1. Obtain the [buzzing sound](https://raw.githubusercontent.com/pippinbarr/cart263-2020/master/activities/jqueryui/eat-up/assets/sounds/buzz.mp3) and [chewing sound](https://raw.githubusercontent.com/pippinbarr/cart263-2020/master/activities/jqueryui/eat-up/assets/sounds/crunch.wav) and add them to your project folder (you may need to explicitly "save" them from the file menu)
1. Add the buzzing sound effect to the program, set it to loop, and add a `mousedown` event to the fly element that plays the buzzing sound (to avoid problems with triggering sounds before any interaction)
1. Pause the buzzing sound effect on the `mouseup` event on the fly
1. Pause the buzzing sound effect when the user drops the fly on the mouth
1. Add the chewing sound effect to the program, play it every time the mouth is changed to the closed image

Now when you run the page and start draggin the mouse you should hear buzzing, and when you drop the fly on the mouth it should vanish and stop buzzing, and a chewing sound should start. Done!

???

```javascript
// At top of program
let buzzSFX = new Audio("assets/sounds/buzz.mp3");
let crunchSFX = new Audio("assets/sounds/crunch.wav");

...

// In document ready
buzzSFX.loop = true;

$fly.on('mousedown',function () {
  buzzSFX.play();
});
$fly.on('mouseup',function () {
  buzzSFX.pause();
});

...

// In the drop handler function
crunchSFX.play();
buzzSFX.pause();

...

// In the mouse closed part of your if statement in the interval function
crunchSFX.play();
```

---

# }

# Activity: Raving Redactionist {

---

## Brief

An experience in which:

- We see a screen of text with some passages "redacted" (covered in black bars)
- Over time the redactions disappear, revealing the text beneath them
- The user is in charge of keeping the information secret, so they click the secret text to restore the redaction

---

## 1. Start a project

1. Download the [empty template project](https://github.com/pippinbarr/cart263-2020/raw/master/templates/empty-project.zip)  
2. Add jQuery to the project by adding the appropriate script tag from a CDN such as jQuery or Google to `index.html`, e.g.

```html
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
```

---

## 2. Create the basic HTML content

1. Create three or four paragraphs of text (inside `p` tags) in your HTML `body` containing placeholder text (I often use a [lorem ipsum generator](https://www.lipsum.com/)). Make sure there's enough text that it looks roughly like a document.
1. Add `span` tags with a `class` attribute of `redacted` around the parts of text you want to be redacted (use small sets of 5-10 words, say).

You should now be able to view the page in your browser, but it won't be redacted yet because that CSS class doesn't exist!

???

__Solution:__

```html
<p>
  Lorem ipsum dolor sit amet, <span class="redacted">consectetur adipiscing elit</span>. Suspendisse magna nisl, feugiat a pulvinar eu, placerat consequat ante. Morbi nec sem in quam sodales luctus ullamcorper nec turpis. Duis porta tellus et quam rutrum, quis condimentum nunc viverra. Donec venenatis orci sit amet dolor pellentesque, <span class="redacted">a elementum orci pretium</span>. Donec ullamcorper ipsum neque. Nulla facilisi. <span class="redacted">Morbi fringilla tellus sed erat vestibulum, at vehicula ex aliquam</span>.
</p>

<p>
  <span class="redacted">Ut consectetur cursus elit sit amet dictum</span>. Sed dictum, urna id laoreet fringilla, felis ligula interdum leo, in sagittis neque turpis sed purus. Ut lacinia posuere nunc, <span class="redacted">non vestibulum enim</span>. Duis ac neque at sem posuere sagittis eget id metus. Praesent porttitor nisl et eros varius cursus. Vestibulum tincidunt bibendum elit, sed pharetra quam. <span class="redacted">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</span>; Curabitur ut nisi eget massa ullamcorper porta.
</p>

<p>
  Cras accumsan id <span class="redacted">mauris et sollicitudin</span>. Ut varius tellus felis, eu lacinia massa gravida vel. Sed blandit diam vitae ipsum feugiat euismod sit amet vel neque. Praesent at dapibus velit. In tempor venenatis elit, sed pharetra sem pretium in. Sed eu arcu euismod, mattis enim ut, congue quam. <span class="redacted">Cras tempor, justo ac pretium egestas</span>, orci orci sodales ipsum, <span class="redacted">id lobortis tortor turpis quis velit</span>. Curabitur rhoncus nulla orci, non bibendum sem euismod quis. Sed a metus et sem elementum congue sit amet sit amet dolor. <span class="redacted">Aliquam bibendum velit id justo gravida suscipit</span>. Ut eu euismod felis. Sed in mi quis nisl aliquam interdum. Sed sit amet aliquet mi. Suspendisse quis nunc risus. Nulla facilisi. Aenean condimentum eros augue, quis dictum mi vestibulum in.
</p>
```

---

## 3. Set up CSS

1. Style the `body` and `p` tags however you want to create margins, fonts, sizes, etc. that suit you (don't spend much time on this, you can do more later)
1. Create a `redacted` class that sets the background color to black and the text color to transparent (to avoid people seeing the text when they highlight it)
1. Create a `revealed` class that sets the background color to transparent, and the text color to red (to induce panic!)

When you view the page now, the text you put spans around should be redacted!

???

__Solution:__

```css
body {
  font-family: Courier, monospace;
  width: 800px;
  margin-left: 100px;
  margin-top: 100px;
}

.redacted {
  background-color: black;
  color: transparent;
}

.revealed {
  background-color: transparent;
  color: red
}
```

---

## 4. Start the program

In `script.js` create the basic "document ready" code so that we can start writing our program in jQuery. For now, use the version that called a function called `setup` and define that function. (Put in a `console.log()` if you want to check whether it's working.)

???

__Solution:__

```javascript
$(document).ready(setup);

function setup () {
  // Code will go in here
}
```

- Or with an anonymous function:

```javascript
$(document).ready(function () {
  // Code will go in here
});
```

- Or with an arrow function:

```javascript
$(document).ready(() => {
  // Code will go in here
});
```

---

## 5. Time!

We want the redactions to randomly disappear __over time__, so we'll need a timing function. We'll use the `setInterval()` function to call a function repeatedly over time. Remember `setInterval()` takes two parameters:
  - a _function_ to call each time the interval passes
  - the _length in milliseconds_ of the interval

1. Define an `update()` function at the bottom of your script and include a `console.log()` message in it that says something like "Update!"
1. In your `setup` function call `setInterval` with your `update` function and an appropriate interval time as arguments (500 milliseconds is probably reasonable)

Once this works, you'll see the "Update!" message repeating at the interval.

???

__Solution:__

```javascript
function setup () {
  setInterval(update,500);
};

function update() {
  console.log("Update!");
}
```

---

## 6. Updating all the spans

Each interval we need to check each of the spans on the page and potentially reveal them one at a time. So we'll need to call a updating function on each span on the page to handle this.

1. Define a new function called `updateSpan()` or similar and put a `console.log()` in it that reports something like "Updating span!"
1. In your `update()` function use jQuery's `.each()` method to call this new function on all the spans on the page. (You'll need to __select__ the spans and then use jQuery's `each()` method on the selection - here is the [jQuery documentation for `each()`](https://api.jquery.com/each/#each-function) to look at.)

???

__Solution:__

```javascript
function update() {
  console.log("Update!");
  $('span').each(updateSpan);
}

function updateSpan() {
  console.log("Updating span!");
}
```

---

## 7. Updating each span

Now we want our `updateSpan()` function to randomly change the currently selected (by `each()`) span from redacted to revealed. (This function will be called repeatedly on all the spans so that eventually they'll all be revealed.)

In your `updateSpan` function:
1. Generate a random number (note that in JavaScript we use `Math.random()` to generate a random number between `0` and `1`)
1. Check if the random number is less than some probability (e.g. `0.1` for a 10% likelihood)
1. If it is, remove the `redacted` class from the current span (using `this` as the selector, because `each()` sets `this` to be the current item being processed)
1. Add the `revealed` class to the current span (using `this` as the selector)

(Use the [jQuery API](https://api.jquery.com/) to find how to __add__ a __class__ and how to __remove__ a __class__)

???

__Solution:__

```javascript
function updateSpan() {
  console.log("Updating span!");
  let r = Math.random();
  if (r < 0.1) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}
```

- You can also chain those methods:

```javascript
function updateSpan() {
  console.log("Updating span!");
  let r = Math.random();
  if (r < 0.1) {
    $(this).removeClass('redacted').addClass('revealed');
  }
}
```

---

## 8. Redaction!

We want the user to be able to redact revealed passages by clicking on them, so we need a click event handler using jQuery's `on` function

1. In your `setup` function, add a 'click' event to all spans ("span" selector) using `on()` that calls a `spanClicked` function
1. Define a new function called `spanClicked` to handle the clicks, in the function you should add the "redacted" class to the clicked span (again with the `this` selector) and also remove the "revealed" class from the clicked span (`this` selector)

(Look up the `on` event in the jQuery API if you want to see an example.)

???

__Solution:__

```javascript
function setup () {
  setInterval(update,500);
  $('span').on('click',spanClicked);
};

function spanClicked() {
  $(this).removeClass('revealed');
  $(this).addClass('redacted');
}
```

- Note that there is also a `.click()` method that does the same thing in a very slightly different syntax:

```javascript
$(document).ready(setup);

function setup () {
  setInterval(update,500);
  $('span').click(spanClicked);
};

function spanClicked() {
  $(this).removeClass('revealed');
  $(this).addClass('redacted');
}
```

---

## 9. Efficiency

If you're going to be using it repeatedly, it's technically better to __store__ a jQuery selection in a variable to avoid looking it up with jQuery every time. We can do this with all the spans on the page. (Though note this won't work if you're dynamically adding and removing things from the page, as your variable won't stay up to date.)

1. Declare a `$spans` variable at the top of the program
1. At the start of the "document ready" function, store the selection of all "span" tags in the variable
1. Throughout the program, wherever you used `$('span')` you can now use `$spans`

After this step we're done!

???

- In this case it's probably overkill, but it's good practice to get used to this kind of thing

__Solution:__

```javascript
let $spans;

$(document).ready(setup);

function setup () {
  $spans = $('span');
  setInterval(update,500);
  $spans.on('click',spanClicked);
};

function spanClicked() {
  $(this).removeClass('revealed');
  $(this).addClass('redacted');
}

function update() {
  $spans.each(updateSpan);
}

function updateSpan() {
  let r = Math.random();
  if (r < 0.1) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}
```

---

# }

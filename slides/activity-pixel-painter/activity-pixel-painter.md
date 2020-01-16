# Activity: Pixel Painter {

---

## Brief

An experience in which:

- The user sees a grid of black squares on the page
- When the user mouses over a square it turns white
- After a delay, white squares turn black again

The overall effect will be of "painting" the page with the mouse, and then having the trail vanish after a delay.

---

## 1. Set up a template project

Go to the course website and download the [template empty project](https://github.com/pippinbarr/cart263-2020/raw/master/templates/empty-project.zip) then open the project in Atom.

__Do not download a p5 template__, it will only confuse matters.

---

## 2. Create the "pixel" CSS

In the `style.css` file, create a `pixel` class selector and give it the following properties:

1. Background color of black (or any other color you like)
1. Width and height of 30 pixels (or whatever size you like)
1. Make it float to the left (or make it display as inline block)

To test this, add a div with class `pixel` to your `index.html`. You should see a square the size and color you specified in your CSS.

???

```css
.pixel {
  background-color: black;
  width: 30px;
  height: 30px;
  float: left;
}
```

---

## 3. Create a setup function

1. Define an empty function called `setup`
1. set the `window`'s `onload` callback to be `setup`

To test this, add a `console.log()` statement (with some text to print) into the `setup` function. You should see your text appear when you load the page.

???

```javascript
window.onload = setup;

function setup() {
  console.log("Testing, testing, 1 2 3...")
}
```

---

## 4. Add your pixels

In the `setup` function, dynamically add your pixels to the page by using a `for` loop that counts from `0` to `1000`. Inside the loop:

1. Use the `document.createElement()` function to create a new `div` and store it in a variable called `pixel`
1. Add the `pixel` class to the new element using the `setAttribute()` function
1. Add the new element to the page's `body` (`document.body`) using the `appendChild()` function

You should now see 1000 of your pixel divs appear on the page when you load it!

???

```javascript
function setup() {
  for (let i = 0; i < 1000; i++) {
    let pixel = document.createElement('div');
    pixel.setAttribute('class', 'pixel');
    document.body.appendChild(pixel);
  }
}
```

---

## 5. Mouseover
In `setup()` add a `mouseover` event listener to each pixel element with `addEventListener()`. It should provide a function (which we will define in a moment) called `paint`.

We won't see anything special happen after this step, because the `paint()` function doesn't exist yet!

???

```javascript
function setup() {
  for (let i = 0; i < 1000; i++) {
    let pixel = document.createElement('div');
    pixel.setAttribute('class', 'pixel');
    pixel.addEventListener('mouseover', paint); // NEW
    document.body.appendChild(pixel);
  }
}
```

---

## 6. Painting

Define a function called `paint()` with one parameter called `e` (for event) to change the color of a pixel. In the function:

1. Create a new variable called `pixel` and store `e.target` in it (remember that `e.target` in an event handler like this one will have the element targeted by the event in it, i.e. the pixel on the page that was moused over)
1. Set the pixel's background color to white. (Remember you need to access the `style` property of the pixel, and the `backgroundColor` property of the `style`. Remember you need to set the color using a string.)

After this step, you should be able to move the mouse over the pixels on the page and see them change from black to white!

???

```javascript
function paint(e) {
  let pixel = e.target;
  pixel.style.backgroundColor = 'white';
}
```

---

## 7. Reverting the pixel color

We want the pixel to change back to black, so define a function called `resetPixel()` that takes a parameter called `pixel`. It should:

1. Set the background color of the provided `pixel` parameter back to black.

Add a `setTimeout()` function to the end of your `paint()` function that calls the `resetPixel` function after a delay of `1000` milliseconds. After the delay parameter, add `pixel` as the third parameter so that the correct pixel to reset is passed to `resetPixel()`

After this step, you should have a working paint program! Enjoy!

???

```javascript
function paint(e) {
  let pixel = e.target;
  pixel.style.backgroundColor = 'white';
  setTimeout(resetPixel, 1000, pixel); // NEW
}

function resetPixel(pixel) {
  pixel.style.backgroundColor = 'black';
}
```

---

# }

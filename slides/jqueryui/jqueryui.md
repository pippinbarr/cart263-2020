# jQuery UI {

---

## Contents

- jQuery UI in general
- Interactions
- Effects
- Widgets

---

## jQuery UI

- jQuery UI is an add-on to core jQuery that focuses on the creation of **user-interfaces**
- It makes specific **interactions** easier to implement, such as drag and drop or the creation of dialog boxes
- Like jQuery, it is **super corporate** in a way that can be fun to play with!

---

## Remember the process for your "first date" with a new library

1. **Go to the homepage** and read the introductory material
1. **Find resources** provided for learning the library, especially **examples** and **tutorials**
1. If present, **look at examples** to get a broad sense of the usage
1. **Obtain the library** itself and incorporate it into a project template
1. **Run examples** in your own setup to confirm the library works
1. **Read/browse the API** to get a sense of the range of the library's abilities
1. **Start an experiment** of your own!

Off we go...

---

## The jQuery UI homepage

- https://www.jqueryui.com
- Our first task should always be to read the information on the homepage
- After all, this is the stuff they really want us to know immediately

---

## Learning more

- The homepage provides pretty clear directions for learning more about the library
  - A [getting started guide](https://learn.jquery.com/jquery-ui/getting-started/)
  - A [learning centre](https://learn.jquery.com/jquery-ui/)
  - A number of [demos](https://jqueryui.com/demos/) (these form the core for rapid learning)
  - The [API documentation](https://api.jqueryui.com/)
- In our case we'll cover a brief ad hoc introduction with these slides
- But be aware of and return to the above options

---

## Obtaining jQuery UI via CDN

- Just like jQuery, jQuery UI is available from the jQuery CDN at [code.jquery.com](https://code.jquery.com)
- It is vital to note that you **must have jQuery in your project to use jQuery UI**
- Additionally, notice that jQuery UI also **requires a stylesheet** that determines the appearance of its widgets (and other things)
- There are various premade stylesheets, or you can use the [ThemeRoller](https://jqueryui.com/themeroller/) to create your own fairly painlessly (you will then need to download it)

---

## Set up a jQuery UI project

- So, download an [empty project template](https://github.com/pippinbarr/cart263-2020/raw/master/templates/empty-project.zip)
- Add the libraries and stylesheet to `index.html` **above** your script

```html
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>

<link
  rel="stylesheet"
  type="text/css"
  href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"/>

<script
  src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
  integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
  crossorigin="anonymous"></script>
```

---

## Page content

- In order to manipulate anything with jQuery, we'll need some HTML and CSS in our project...
- For now let's just add the following HTML and CSS to our project

```html
<div class="square"></div>
```

```css
.square {
  background-color: red;
  width: 200px;
  height: 200px;
}
```

---

## "Document Ready"

- As per usually, we should set up our `script.js` with the old "document ready" template

```javascript
$(document).ready(setup);

function setup() {
  // This code will run when the document is ready!
}
```

---

## Selection and action

- It's __still__ the case in jQuery UI that our basic form of coding relies on __selection__ and __action__
- Unsurprising given that jQuery UI is an extension of jQuery
- It's just that this time the __actions__ we use are from jQuery UI
- Let's choose something to try out...

---

## Interaction: `.draggable()`

- One of the simple interactions jQuery UI provides is to make __any element draggable__
- Let's check out the Draggable demo page and make it work
- Because we're interested in __doing__ this, we need to "View Source" in the demo, and find the line that makes the magic happen...
--

- It's kind of incredible, but all we need to do in our `setup()` is

```javascript
$('.square').draggable();
```

- Wow.

---

## More demos of `.draggable()`...

- So we now have an amazing __action__ (function) from jQuery UI
- To use it more fully we need to provide it with __options__
- An easy way to get ideas is to look at the other demos, that use options to specify the experience more
- Take a look at the __Constrain Movement__ demo, for instance... let's constrain our square to only move horizontally...

--

```javascript
$('.square').draggable({
  axis: 'x'
});
```

- Amazing.

---

## The API for `.draggable()`

- Of course to truly understand what `.draggable()` is capable of, we should read the API
- The jQuery UI API is laid out differently to the jQuery API, something we need to get used to
- We can see it's divided into
  - __Options__, which are properties we can provide when setting something as draggable
  - __Methods__, which are specific commands we can give a draggable element (via the `.draggable()` function)
  - __Events__, which are specific events we can listen for on a draggable element, usually via properties when we create it
- Fortunately every one of these has a small code example that tends to help understand things

---

## Idea: Make something draggable only once

- If we wanted a situation where you can only drag an element once, we'd need to disable dragging when the first drag stops. What do we need?
--

- We need a function called for the `stop` event
- And that function needs to use the `disable` method
- Reading the documentation we therefore need...

--

```javascript
$('.square').draggable({
  stop: function () {
    $(this).draggable('disable');
  }
});
```

- Refreshingly annoying!
- This is the process we need to follow in all these cases!

---

## Effect: `.animate()`

- In fact, __jQuery__ provides an animation function via its `.animate()` function
- jQuery UI extends this specifically to allow the animation of __color__ which is neat
- Looking at the demo we can see that in the simplest case we need to provide the CSS properties to animate __to__ and the duration of the animation itself

```javascript
const ANIMATION_TIME = 5000;
$('.square').animate({
  backgroundColor: 'green'
},ANIMATION_TIME);
```

---

## More complex animation options

- To learn more about `.animate()` (beyond colors), we would need to return to the __jQuery__ API documentation and examples
- For instance, we can add event handlers to do things relative to the color animation

```javascript
const ANIMATION_TIME = 2000;
$('.square').animate({
  backgroundColor: 'green'
},{
  duration: ANIMATION_TIME,
  done: function () {
    $(this).animate({
      backgroundColor: 'red'
    },ANIMATION_TIME);
  }
});
```

- Yes, there's an anonymous function here (to keep it easily pasteable). You should be able to read these things whether or not you plan to use them

---

## Note just color

- The point of the broader jQuery `.animate()` is to animate __any__ CSS (that it makes sense to animate)
- So we can animate dimensions, positions, font sizes, and so on

```javascript
const ANIMATION_TIME = 5000;
$('.square').animate({
  backgroundColor: 'green',
  width: '500px',
  height: '500px',
  borderRadius: '10%'
}, {
  duration: ANIMATION_TIME,
});
```

---

## Widget: `.dialog()`

- The most complex element that jQuery UI introduces is the ability to create entire "widget" (user-interface elements) incredibly quickly
- Consider the dialog demo and then let's make our own quick example...
--

- Note how we need at least a `div` element (which will become the dialog) containing HTML which will be "in" the dialog, and a `title` attribute which will be the title of the dialog

`index.html`
```html
<div id="question" title="Hi there!"><p>How are you?</p></div>
```

`script.js`
```javascript
$(document).ready(function () {
  $('#question').dialog();
});
```

---

## `.dialog()` options

- As you might expect, the `.dialog()` widget is __highly configurable__ via options and methods
- Again, we can look at the Demos for general ideas and the API for the specifics
- For instance, we could create a dialog with two `buttons`, one of which closes the dialog and one which shakes the dialog (for which we need to use `.effect()`)...
--

```javascript
$(document).ready(function() {
  $('#question').dialog({
    buttons: {
      "Good": function() {
        $(this).dialog('close');
      },
      "Bad": function() {
        $(this).parent().effect('shake');
      }
    }
  });
});
```

???

- Unclear why this formats poorly on the slide

---

## There's much, much more

- Just as with jQuery, the Demos and API make it clear there's a ton of possibilities for using jQuery to achieve all kinds of (UI-related) effects
- Once again, we need to be able to engage with
  - the [jQuery UI Learning Center](https://learn.jquery.com/jquery-ui/)
  - the [jQuery UI API](https://api.jqueryui.com/) (Application Programming Interface)
  - the magic of [using Google](https://www.google.ca/)
  - The [External Resources](https://github.com/pippinbarr/cart263-2020/blob/master/course-information/external-resources.md#jquery) on the course homepage
  - the many, many other tutorials and resources online, e.g. [Google "jquery ui tutorial"](https://www.google.com/search?q=jquery+tutorial)

---

# }

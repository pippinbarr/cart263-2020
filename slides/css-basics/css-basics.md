# CSS Basics

---

## CSS

- Stands for __Cascading Style Sheets__
- It is the language we use to control the __visual style__ of web pages
- Targets HTML tags and attributes to select specific parts of a page to style
- Controls style via properties
- Generally lives in a text file with extension `.css` (often called `style.css`)

---

```css
body {
  font-family: Helvetica, sans-serif;
  font-size: 1em;
}

#main-heading {
  font-size: 2em;
  color: silver;
}

.main-text {
  font-family: Times, serif;
}
```

- Note the basic form of a __selector__ (`body`, `#main-heading`, `.main-text`) and a set of __properties__ and __values__
- Note that a selector can be
  - a __tag name__ (e.g. `body`)
  - an __id__ (prefixed with `#`, e.g. `#main-heading`)
  - a __class__ (prefixed with `.`, e.g. `.main-text`)
  - (There are some other kinds of selectors, but this will do for now.)


???

- Other selectors include "pseudo-classes", prefixed with `:`,
  - e.g. `:hover` selects an element that has the mouse hovering over it
  - e.g. `:nth-child(2)` selects the elements that are the second child of their parent
  - e.g. `:invalid` selects form elements that are not validated successfully
- More here: https://developer.mozilla.org/en/docs/Web/CSS/Pseudo-classes

---

## What you most need to know

- In order to use CSS in at least a basic fashion you need to

1. Be able to __select__ the element on the page you want to style
  - For this reason it's very common to give any element you want to style an __id__ or __class__ so that it's easy to target
1. Know what __properties__ you want to manipulate on that element
  - For this reason you will want to familiarize yourself with the available properties via a reference like [Mozilla's CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
  - Be aware there are __many__ properties, you won't be able to learn them all, and you will almost certainly end up taking inspiration from examples (which is fine)

---

## CSS-friendly HTML

As previously stated, it's generally a good idea to attach `id` and/or `class` attributes to your HTML elements to make them easily targetable via CSS.

```html
<!DOCTYPE html>

<html>

<head>
  <link rel="stylesheet" href="css/style.css" type="text/css"/>
</head>

<body>
  <h1 id="main-title">Krazy Kat Fan Page</h1>
  <p id="intro-text">Welcome to my Krazy Kat Fan Page</p>
  <h2 id="love">Things I love about Krazy Kat</h2>
  <ul>
    <li class="krazy-list">He's so funny</li>
    <li class="krazy-list">Ignatz</li>
  </ul>
</body>

</html>
```

???

Try looking at this page without any CSS...

---

## CSS

```css
body {
  width: 600px;
  margin: 0 auto;
  font-family: Times, serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: Helvetica, sans-serif;
}

#main-title {
  color: rgb(100,100,100);
}

#intro-text {
  text-align: center;
}

#love {
  color: pink;
}

.krazy-list {
  text-decoration: underline;
}
```

---

## There is a lot more to CSS

- So, CSS is a whole thing
- The key is to remember it's there to style your content
- There are many resources to learn more, such as
  - Reference lists like the [Mozilla CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
  - Tutorials like the [freeCodeCamp CSS lessons](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/)
  - Googling specific property names or questions and reading the documentation
  - Using your browser's "Inspector" option to look at the CSS of pages you're browsing

---

# }

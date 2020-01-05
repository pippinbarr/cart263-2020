# HTML Basics

---

## HTML

- Stands for __HyperText Markup Language__
- It is the language we use to express the __structure__ and __content__ of web pages
- Premised on the idea of a web page as a __document__
- Uses a very recognizable style of __tags__
- Generally lives in a text file with extension `.html`

---

## A document

```html
<!DOCTYPE html>

<html>

<head>
  <title>Page title goes here</title>
  <link rel="stylesheet" type="text/css" href="css/style.css" />
</head>

<body>
  <h1>My amazing webpage!</h1>
  <p>
    Look at it go!
  </p>
</body>

</html>
```

- Mostly importantly, note how we use __tags__ to indicate special types of content
- Also note how tags (almost) always open and close around their content, e.g. `<h1>` is matched by `</h1>`

???

- In this simple webpage we can see a few of the key features of an HTML document
- The `<!DOCTYPE html>` tag at the top is there to tell the browser that this file contains HTML markup so that it can process it appropriately
- The `<html>` tag surrounds all the HTML content on the page
- The `<head>` tag surrounds information __about__ the page that won't actually be displayed on the page
  - Such as the `<title>` tag which sets the title displayed by the browser (and bookmarks)
  - And the `<link>` tag we can use to point to a CSS file that will style the page visually
- The `<body>` tag surrounds the actual content to be displayed on the page itself
  - The `<h1>` tag denotes a first (top) level heading
  - The `<p>` tag denotes a paragraph of text
- All the tags open with their tag name in angle brackets `<name>` and close with their name prefixed with a forward slash in angle brackets `</name>`
  - There are exceptions to this, including `<link>`, but generally speaking it's the rule

---

## Structure, not style

- Generally speaking HTML these days is used to represent the __content__ of the page and its __structure__, not what it will actually look like
- Thus, the vast majority of tags are about structuring your content

---

## High level structure

- The classic tag for grouping together content on a webpage is the `<div>` tag
- It's kind of like an imaginary box

```html
<div>
<h2>Information about cats</h2>
<p>
  Cats are great.
</p>
</div>
```

- Here the `<h2>` and `<p>` tags are grouped together by the `<div>`
- A `<div>` doesn't do a whole lot on its own, but we frequently use CSS to style them

---

## More specific high level structure

- Since HTML5, we have a number of more specifically named tags that function more or less the same way as `<div>` tags, but just help to make our HTML more readable
- Some examples of these are
  - `<article>` - to group the content of a specific article
  - `<section>` - to group the content of a specific section (such as in an article)
  - `<header>` and `<footer>` - to group content for the top or bottom of the page
  - `<nav>` - to group content for navigating the website

---

## Mid-level structure

- In terms of the actual texts being displayed, we might often think in terms of headings and paragraphs
- `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, and `<h6>` represent diminishing headings
- We use `<p>` to surround paragraphs of text
- We can also use `<br />` to indicate a single line break

```html
<h1>Big idea!</h1>

<h2>Part one of the big idea</h2>
<p>
  Here are some ideas about this part of the big idea.
</p>
<h2>Part two of the big idea</h2>
<p>
  Here are some ideas about this part of the
  <br />
  big idea.
</p>
```

---

## Low-level structure

- At the level of specific text, we can think in terms of things like emphasis and linking
- We use `<em>` tags to represent emphasis and `<strong>` to represent importance
- We use the `<a>` tag to represent text that is a link

```html
<p>
  I simply <em>cannot</em> express it any more clearly:
  <strong>cats are the key to a happy life</strong>.
</p>

<p>
  If you don't know what a cat is, check out
  the <a href="https://en.wikipedia.org/wiki/Cat">Cat page on Wikipedia</a>.
</p>
```

- The `href` attribute in the `<a>` tag provides the destination of the link

---

## Images

- The internet is a visual place, so HTML includes the ability to include images with the `<img>` tag

```html
<p>
  Here is a picture of a cat:
  <br />
  <img src="images/cat.png" alt="Picture of a cat">
</p>
```

- The `src` attribute provides the path (or link) to the image file
- The `alt` attribute provides an alternate text for the image (for browsers that can't load them or people who can't see them)

---

## `id` and `class`

- As with `<a>` and `<img>`, HTML tags can have a variety of extra information inside the opening tag called __attributes__
- Two of the most important attributes to know about are `id` and `class`
- The `id` attribute provides an identifier for a tag that is __unique__ on the page
- The `class` attribute provides a class name for a tag that is (usually) __shared__ with other tags on the page

```html
<h1 id="main-heading">Main heading</h1>
<p class="main-text">
  Blah blah blah
</p>
<p class="main-text">
  Yadda yadda yadda
</p>
```

- `id` and `class` are how we chiefly style our HTML with CSS

---

## There is a lot more to HTML

- HTML is a whole thing
- The key is to remember it's there to structure your content (not style it)
- There are many resources to learn more, such as
  - Reference lists like the [W3 Schools HTML Reference](https://www.w3schools.com/tags/ref_byfunc.asp)
  - Tutorials like the [freeCodeCamp HTML lessons](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/)
  - Googling specific tag names or questions and reading the documentation
  - Using your browser's "View Source" option to look at the HTML of pages you're browsing

---

# }

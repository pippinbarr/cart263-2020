# ResponsiveVoice {

---

## ResponsiveVoice

- In essence it lets you __make the computer talk__
- ResponsiveVoice is a JavaScript library to make modern browsers' speech API easier to use
- It provides a layer on top of the underlying API that simplifies matters

---

## Again, remember the "first date with a library" process

1. __Go to the homepage__ and read the introductory material
1. __Find resources__ provided for learning the library, especially __examples__ and __tutorials__
1. If present, __look at examples__ to get a broad sense of the usage
1. __Obtain the library__ itself and incorporate it into a project template
1. __Run examples__ in your own setup to confirm the library works
1. __Read/browse the API__ to get a sense of the range of the library's abilities
1. __Start an experiment__ of your own!

---

## The ResponsiveVoice homepage

- https://responsivevoice.org/
- So let's read the homepage and find out the basics...
--

- __Important:__ the homepage makes it seem like you need an API key to use the library, but this turns out __not__ to be true (for now at least), you can include the library in a project without the key
- For academic/learning purposes, this seems fine, but be aware that any commercial/public use should involve paying for the library's use

---

## Learning more

- The homepage provides some directions for learning more
  - A "support" menu including
    - An "academy" section (__not very useful?__)
    - An FAQ (__not very useful?__)
    - A [list of languages](https://responsivevoice.org/text-to-speech-languages/) available (__useful__)
  - The [API documentation](https://responsivevoice.org/api/) (__very useful!__)
- In our case we'll cover an introduction with the following slides, based on the API

---

## Obtaining the library

- When we look at the API documentation, the first thing we encounter is how to include the library in a script tag:

```html
<script src="https://code.responsivevoice.org/responsivevoice.js?key=YOUR_UNIQUE_KEY"></script>
```

- As note earlier, you don't __technically__ need the API key element to play around with the library, so you can instead use

```html
<script src="https://code.responsivevoice.org/responsivevoice.js"></script>
```

- Still, it's useful and important to note that some libraries (and other API services) __require__ the use of an API key to use them (so that they can track use and, often, make you pay for it (with money!))

---

## Set up a project to use ResponsiveVoice

- So, download an [jQuery project template](https://github.com/pippinbarr/cart263-2020/raw/master/templates/jquery-project.zip)
- Add the libraries to `index.html` __above__ your script

```html
<script src="https://code.responsivevoice.org/responsivevoice.js"></script>
```

- If you run the program and look in the console, you should see the message

```
ResponsiveVoice r1.6.0
```

---

## Say something

- The very first entry in the API after the script tag itself is the all important speak() function
- The documentation presents the __function signature__ like this

```
speak(String text, [String voice], [Object parameters])
```

- Notice how each parameter here has the __type__ of value preceding it
- `String text` means there is a parameter called `text` which is of type String!
- Then there are two __optional__ parameters (we know because they're in square brackets), which are called `voice` (a String) and `parameters` (an Object)
- __Not the most clear__, but fortunately we have the examples beneath!

---

## Say anything

- In this particular API documentation, we're better off looking at the examples to understand what's possible
- To just speak some text with defaults (not using the optional parameters) we use:

```javascript
responsiveVoice.speak("hello world");
```

- It's a good idea to __experiment__ with the possibilities of any given function or parameter that a library provides - you might find something interesting!
- In the spirit of experimentation, what kinds of texts could we try here?

???

- How about strings with punctuation?

```javascript
responsiveVoice.speak("hello... world?!!!");
```

- How about strings in another language?

```javascript
responsiveVoice.speak("Salut, monde. Comment ça va?");
```

- How about strings made of numbers?

```javascript
responsiveVoice.speak("23948903284023");
```

- How about strings made of nonsense?

```javascript
responsiveVoice.speak("sdjfhlsfhlasdmuhleuwifmla");
```

---

## Changing voices

- Per the second example, it turns out we can change the voice that speaks with the second parameter, a string containing the name of a voice

```javascript
responsiveVoice.speak("hello world", "UK English Male");
```

- This clearly changes a lot in terms of the experience of hearing the voice! All the qualities of a voice convey __meaning__ after all

---

## Any voice?

- It would be amazing if you could just specify any voice at all:

```javascript
responsiveVoice.speak("hello world", "Frida Kahlo as performed by Salma Hayek");
```

- But no, it's not like that (although maybe in the dystopian AI future...)
- Instead, there's a [list of voices you can use](https://responsivevoice.org/text-to-speech-languages/), corresponding to __languages__
- So we can say something in "French":

```javascript
responsiveVoice.speak("hello world", "French Female");
```

- Immediately interesting! Different voices say the "same thing" differently! Clearly another site for __experimentation__!
- But note that not every voice is available ("Latin Male" didn't work for me)


???

```javascript
responsiveVoice.speak("hello world", "Thai Female");
```

---

## Changing parameters

- The API also shows examples of controlling three key options for a voice, the `pitch`, `rate`, and `volume`
- They show these all being used separately, but because they are being specified in an object, we can combine them

```javascript
responsiveVoice.speak("Hello world", "UK English Male", {
  pitch: 2,
  rate: 2,
  volume: 1
});
```

- Talk about the opportunity to __experiment__! What values can we use for `pitch` and `rate` especially?
- The documentation tells us `pitch` can be between `0` to `1` and `rate` can be between `0` to `1.5`

???

- Weirdly, some rate and pitch combinations seemed to break the speech engine at least in my browser, when I was setting rate outside its range especially - something to be aware of

---

## Events and callbacks

- As in most JavaScript functions that do something that takes time, ResponsiveVoice provides two __callback__ options
- We can call a function when the speech __starts__ with the `onstart` option, and call a function when the speech __ends__ with the `onend` option

```javascript
$(document).ready(setup);

function setup() {
  responsiveVoice.speak("Hello world", "UK English Male", {
    onstart: showSpeaking,
    onend: hideSpeaking
  });
}

function showSpeaking() {
  $('body').css('background-color', 'green');
}

function hideSpeaking() {
  $('body').css('background-color', 'white');
}
```

---

## The rest

- The rest of the API is probably less fascinating, but worth browsing so you know what else is available
- Notable are
  - `cancel()` to stop speech
  - `voiceSupport()` if you are caring enough to check the browser your code is running in can support speech output in the first place
  - `getVoices()` to get an array of the possible voices you could use (perhaps you could choose one at random!)
  - `isPlaying()` to check if the voice is already talking (perhaps so you don't interrupt something)
  - `pause()` and `resume()` to... pause and resume the voice

---

## Random voice

```javascript
$(document).ready(setup);

function setup() {
  // Get the array of voices
  let voices = responsiveVoice.getVoices();
  // Choose a random voice
  let voice = voices[Math.floor(Math.random() * voices.length)];
  // Say the text using the randomly chosen voice and with
  // random rate and pitch
  responsiveVoice.speak("Hello world", voice.name, {
    rate: Math.random() * 2,
    pitch: Math.random() * 1.5
  });
}
```

- __Note__ that it was necessary to log the contents of `voices` when writing this to realize it is an array of __objects__ with a `name` property specifying the voice
- __Note__ that not all voices work!

---


## There's not much more?

- Unlike huge libraries like p5 or jQuery, ResponsiveVoice isn't all that complex and so there isn't that much to learn
- This sort of library is more modular and specific - it does one job and it does it quite well
- What's important, then, is __what you do with it__
- Experimenting with the __technical possibilities__ in conjunction with the __meaning of voices__ in terms of socio-cultural impact is a good start

---

# }

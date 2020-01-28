# Basic sound {

---

## In this module

- Sound!
- Loading sounds
- Playing sounds

---

## Sound!

- So far our programs have been purely visual
- It would be nice if they made sounds
- The simplest way to do that is just to be able to play sound files when we want to
--

- As Freud said, __sometimes the sound of a cigar is more evocative than the cigar itself.__

???

- (Freud didn't say that.)

---

## Loading a sound

- To play a sound we need to load it and store it in a variable
- It is mercifully simple:

```javascript
const exampleSound = new Audio("assets/sounds/exampleSound.mp3");
```
--

- Now the variable `exampleSound` has our sound stored inside it
- Note that in this example our sound file is stored in the `assets/sounds` folder to keep everything nicely organised
- Note how our `exampleSound` is an __object__ instantiated from the `Audio` class (provided by the browser API)

---

## `.play()`

- The `.play()` function for audio allows us to play a sound file stored in a variable

```javascript
const exampleSound = new Audio("assets/sounds/exampleSound.mp3");

$(document).ready(setup);

function setup() {
  exampleSound.play();
}
```

???

- As we know because of the use of dot notation, `exampleSound` must be an __object__
- And `play()` is a __function defined in that object__
- So we can call its `play()` function using dot notation

---

## `.play()` and the "autoplay" restriction in Browsers

- Many browsers restrict the playing of sounds (and videos) on webpages by requiring that the user of the page __interact__ (press a key, click the mouse) with it before a sound can be played
- This means, for instance, that playing a sound in `setup()` won't work, because the user hasn't interacted with the page yet
- The __solution__ to this is often to require some kind of interaction from the user before your program starts playing sounds
- Something like a "Click to Start" screen at the beginning of the program could work this way. The user clicks, the program starts, and any sound files can now be played.

---

## Waiting for an interaction before playing sound

```javascript
const music = new Audio("assets/sounds/music.mp3");

$(document).ready(setup);

function setup() {
  $(document).one('mousedown',startMusic); // .one() let's us listen for an event just once!
}

function startMusic() {
  music.play();
}
```

---

## `.pause()`

- To __pause__ a playing sound we use `pause()`
- So with the `exampleSound` that would be

```javascript
exampleSound.pause();
```

- The sound pauses and when you next call `play()` it will resume from where it was

---

## `.currentTime`

- To "__rewind__" your sound before playing it again you call `play()`:

```javascript
exampleSound.currentTime = 0;
exampleSound.play();
```

- This will reset the sound to the start
- (You can also set `.currentTime` to other numbers - it represents the position in the sound file in __seconds__ to jump to.)

???

- This is notably useful if you want to force the sound to play from the start even if it's already playing
- Otherwise if you call `play()` when a sound is already playing, it will have no effect

---

## `.loop`

- To __loop__ your sound so it plays over and over when you call `play()`:

```javascript
exampleSound.loop = true;
exampleSound.play();
```

- Now it will loop forever

---

## The JavaScript Audio Object

- There are other functions and properties available for use with sounds
- But this will get us started with simple tasks like playing music of sound effects
- We'll leave it at that for now and might come back to more sophisticated audio later in the course

---

# }

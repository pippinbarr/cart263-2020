# Pizzicato {

---

## Pizzicato

- A fairly standard-issue, but nicely made sound library
- It has a particular focus on applying processing effects to sound

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

## The Pizzicato homepage

- Findable by Googling "pizzicato javascript" or even "javascript sound library"
- https://alemangui.github.io/pizzicato/
- So let's read the homepage and find out the basics...
--

- "Pizzicato aims to simplify the way you create and manipulate sounds via the Web Audio API"
- Like many libraries, Pizzicato takes a technology implemented by browsers (the Web Audio API in this instance) and wraps it in an easy(er)-to-use API
- Compare with the actual [documentation of the Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- The homepage presents a series of interactive examples of each of the pieces of functionality Pizzicato provides

---

## Learning more

- The homepage provides two key directions for learning more
  1. The set of interactive examples with sample code
  1. A link to the [API documentation](https://github.com/alemangui/pizzicato) (at the top left, surprisingly small)
- In our case we'll cover an introduction with the following slides
- But clearly the first thing to do is __run through the examples__
--

- Feels quite a lot like playing with a bunch of interesting effects pedals for a guitar or similar

---

## Obtaining the library

- When we look at the homepage, we don't see an immediate script tag to just copy and paste, what do we see?
--

- We see two download links in the lefthand navigation menu
- We see a set of icons for other methods, including __bower__, __npm__, and __cdnjs__
  - Bower and npm are __package management systems__ that can be used to download and maintain libraries and frameworks for our projects
  - cdnjs is, as we've seen with jQuery and ResponsiveVoice, a CDN (Content Delivery Network), providing the library hosted online for placing in a script tag...
--

- So for now, let's stick with the CDN for ease of use:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/pizzicato/0.6.4/Pizzicato.min.js"></script>
```

???

- Note the complaint you probably see about "SameSite" cookies
- For now if you want to avoid this you can include the `samesite="none"` attribute in the script tag:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/pizzicato/0.6.4/Pizzicato.min.js" samesite="none"></script>
```

---

## Set up a project to use Pizzicato.js

- So, download a [jQuery project template](https://github.com/pippinbarr/cart263-2020/raw/master/templates/jquery-project.zip)
- Add the librart to `index.html` __above__ your script

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/pizzicato/0.6.4/Pizzicato.min.js"></script>
```

---

## Synthesis

- The very first option in Pizzicato is to do basic sound synthesis

```javascript
let sineWave = new Pizzicato.Sound({
    source: 'wave',
    options: {
        frequency: 440
    }
});

sineWave.play();
```

- What if we wanted a different waveform?
--

- We have to go into the API documentation to see there is a `type` option which can be `sine`, `square`, `triangle` or `sawtooth`
- This is a typical experience when working from example code - we should inevitably look at the API to understand the broader possibilities of any one part of a library

???

- Note that in keeping with our use of ES6 I converted their `var` to a `let`
- Note that the documentation for the waveform source includes a bunch of other options, too, including frequency, volume, release, attack, and detached
- From here we can clearly experiment with elements such as what the different frequencies sound like, as well as to compose music, given that specific frequencies correspond to musical tones

---

## Playback

- Another key form of audio playback is via sound files, and here Pizzicato is much like any sound library we've used before
- That is, we indicate a sound file to load, and the play it

```javascript
let barkSFX = new Pizzicato.Sound('./assets/sounds/bark.wav', function() {
    // Sound loaded!
    barkSFX.play();
});
```

- What is the anonymous function here for?
--

- It is a __callback function__ that is called when the file has __completed loading__, meaning it is safe to play it
- Again, we need to look at the documentation for the full set of possibilities here, including desired uses like looping

---

## Playback without the callback

- As we've tended to do with the simple Audio object, we don't strictly have to use the loading completed callback, so long as we're at peace with potentially trying to play a sound before it's fully loaded
- e.g. in jQuery

```javascript
let barkSFX = new Pizzicato.Sound('./assets/sounds/bark.wav');

$(document).ready(setup) {
  $(document).on('click',bark);
}

function bark() {
  barkSFX.play();
}
```

- That is, we just "have faith" the sound will be loaded in time to play on click
- Indeed, if you click fast enough on page load, the sound just doesn't play

---

## Generation

- An exciting, but also daunting, option provided by Pizzicato is to dynamically generate the audio that is played
- We can do this by providing a function that sets the data in an audio buffer, as per their example

```javascript
let whiteNoise = new Pizzicato.Sound(function(e) {
  let output = e.outputBuffer.getChannelData(0);
  for (let i = 0; i < e.outputBuffer.length; i++) {
    output[i] = Math.random();
  }
});
whiteNoise.play();
```

- To actually harness something like this we need to know more about audio programming that I do personally, though see the notes for an example of generating a sine wave and perlin noise

???

- Here is a sine wave...

```javascript
let angle = 0;
let whiteNoise = new Pizzicato.Sound(function(e) {
  let output = e.outputBuffer.getChannelData(0);
  for (let i = 0; i < e.outputBuffer.length; i++) {
    output[i] = Math.sin(angle);
    angle += 0.1;
  }
});
whiteNoise.play();
```

- Compare that with what happens if we move the angle variable inside the function:

```javascript
let sine = new Pizzicato.Sound(function(e) {
  let angle = 0;
  let output = e.outputBuffer.getChannelData(0);
  for (let i = 0; i < e.outputBuffer.length; i++) {
    output[i] = Math.sin(angle);
    angle += 0.1;
  }
});
sine.play();
```

- What's going on there?
- Essentially each time the library needs to generate the continuation of the audio output buffer, it is calling this function to produce the data, but the function resets the angle to zero, resetting the sinewave being produced, hence the kind of clicking reset sound
- What would Perlin noise sound like? (Assuming we're using p5 here)

```javascript
let angle = 0;

let perlinNoise = new Pizzicato.Sound(function(e) {
  let output = e.outputBuffer.getChannelData(0);
  for (let i = 0; i < e.outputBuffer.length; i++) {
    output[i] = noise(angle);
    angle += 0.01;
  }
});
perlinNoise.play();
```

---

## Attack and release

- Two very important basic concepts in sound engineering are attack and release
- __Attack__ is how long it takes to reach full volume after being started
- __Release__ is how long it takes to reach zero volume after being stopped

```javascript
let sineWave = new Pizzicato.Sound({
  source: 'wave',
  options: {
    frequency: 440,
    attack: 2,
    release: 2
  }
});

sineWave.play();
setTimeout(stopSineWave, 2000);

function stopSineWave() {
  sineWave.stop();
}
```

???

- If you really want to get into it, start thinking about the ADSR envelope
- ADSR stands for (A)ttack, (D)ecay, (S)ustain, (R)elease
- However Pizzicato doesn't explicit support decay and sustain
- Good explanation of the ADSR envelope here: https://www.wikiaudio.org/adsr-envelope/

---

## Effects

- At the heart of the Pizzicato library is a series of effects that can transform whatever sound is being played in a variety of ways
- Each effect is a __separate object__ that we create and then __add__ to a sound we want to take on the effect

```javascript
let delay = new Pizzicato.Effects.Delay({
  feedback: 0.6,
  time: 0.4,
  mix: 0.5
});

let barkSFX = new Pizzicato.Sound('./assets/sounds/bark.wav', function() {
  barkSFX.addEffect(delay);
  barkSFX.play();
});
```

- In order to work well with effects we need to get to grips with the specific options either by being an audio engineer or some kind already, or through reading the documentation and experimentation!

---

## There's not much more?

- As another highly specific library, Pizzicato doesn't require the same kind of extreme mastery as something like p5 or jQuery
- Instead we can focus on the basic categories of playback (synthesis, sound file, generation) and effects (delay, reverb, etc.) in order to come up with our ideas


---

# }

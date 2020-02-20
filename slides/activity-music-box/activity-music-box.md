# Activity: Music Box {

---

## Brief

An experience in which:

- The page plays procedurally (randomly) generated musical notes and a pre-written drum pattern

---

## 1. Start a project

1. Download the [template p5 project](https://github.com/pippinbarr/cart263-2020/raw/master/templates/p5-project.zip) (We're just using p5 for fun, it could be written in jQuery just as easily given we have no visual element to deal with)
2. Include the [Pizzicato library](https://github.com/alemangui/pizzicato#cdnjs) by adding a script tag with the CDN URL for the library __before__ the script tag for your own program

---

## 2. What's the frequency?

If we want to play randomly selected notes, we should keep them all in the same scale so they sound nice together! To play notes with a synthesizer we'll need __frequencies__.

Let's use __A Major__ as our scale, which is __A, B, C♯, D, E, F♯, and G♯__. To get the frequencies, look them up online here: http://pages.mtu.edu/~suits/notefreqs.html

1. Create an array called `frequencies` at the top of the script which stores the frequencies for the notes in A Major. (I suggest starting at A3 and going up from there until you have one entry for each note. If you want to include more than one octave, feel free.)

???

__Solution:__

```javascript
let frequencies = [
  220,246.94,277.18,293.66,329.63,369.99,415.30
];
```

---

## 3. Set up the instruments

To play tones and drum sounds we need a synthesizer (wave form) and some sound files to play.

1. Download the sound files for the [kick](https://pippinbarr.github.io/cart263-2020/activities/pizzicato/music-box/assets/sounds/kick.wav), [snare](https://pippinbarr.github.io/cart263-2020/activities/pizzicato/music-box/assets/sounds/snare.wav), and [hihat](https://pippinbarr.github.io/cart263-2020/activities/pizzicato/music-box/assets/sounds/hihat.wav) and store them in your `assets/sounds` folder
2. Declare variables for `synth`, `kick`, `snare`, and `hihat` at the top of the program and use Pizzicato to store the appropriate sound in each (you can do this at the top of the script or in the `setup()` function)

???

__Solution__

```javascript
let frequencies = [
  220,246.94,277.18,293.66,329.63,369.99,415.30
];
// The synth
let synth;
// The sound files
let kick;
let snare;
let hihat;

function setup() {
  createCanvas(windowWidth,windowHeight);

  // Create the synth
  synth = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine', // This is the default anyway
    }
  });

  // Load the three drum sounds from wav files
  kick = new Pizzicato.Sound('assets/sounds/kick.wav');
  snare = new Pizzicato.Sound('assets/sounds/snare.wav');
  hihat = new Pizzicato.Sound('assets/sounds/hihat.wav');
}
```

---

## 4. Playing a random note

We want to be able to play random notes based on our frequencies, so let's write a function called `playRandomNote()` that does this. It should:

1. Select a random frequency from the `frequencies` array
2. Set the frequency of the `synth` to that frequency (look up [frequency](https://github.com/alemangui/pizzicato#sounds-frequency) in the Pizzicato documentation)
3. Play the `synth`

Write a `mousePressed()` function and add a call to `playRandomNote()` to it. You should hear a random note each time you click.

???

__Solution__

```javascript
function mousePressed() {
  playRandomNote();
}

// playRandomNote
//
// Chooses a random frequency and assigns it to the synth
function playRandomNote() {
  // Pick a random frequency from the array
  let frequency = frequencies[Math.floor(Math.random() * frequencies.length)];
  // Set the synth's frequency
  synth.frequency = frequency;
  // If it's not already playing, play the synth
  synth.play();
}
```

- Or, in p5 specifically because the `random()` function can select from arrays:

```javascript
// playRandomNote
//
// Chooses a random frequency and assigns it to the synth
function playRandomNote() {
  // Pick a random frequency from the array
  let frequency = random(frequencies);
  // Set the synth's frequency
  synth.frequency = frequency;
  // If it's not already playing, play the synth
  synth.play();
}
```

---

## 5. Play notes on an interval

We want to play random notes over time, so we should have an interval that repeatedly calls `playRandomNote()` to play different notes. We'll start the interval when the mouse is pressed.

2. In the `mousePressed()` use `setInterval()` to call `playNote` every 500 milliseconds

Now if you click when the page loads you should hear random notes playing! Deedle deedle dee!

???

(__Note:__ currently if you click again you'll start another interval. Something to fix!)

__Solution__

```javascript
function mousePressed() {
  // Start an interval for the notes
  setInterval(playRandomNote,500);
}

```

---

## 6. Drum patterns

It doesn't make much sense to just play random drums per beat, so we want to specify a __sequence__ of beats that loops. So we need some kind of data representation of the drum sequence.

1. Create an array called `drumLoop`
2. In the array, store eight empty strings - each one will represent the drum type to play for a single beat in order
3. In each string enter the symbol for the drum you want to play for that beat (use `x` for kick, `o` for snare, `*` for hihat, and an empty string for no drum)
4. Create a variable called `currentBeat` set to `0` that will track which beat in the array we're up to

Example pattern array: `['x','','o','','x','x','*','*']`

???

__Solution__

```javascript
// Our drum loop
// Each array element is one beat and has a string with each
// drum to play for that beat
// x = kick, o = snare, * = hihat
let drumLoop = ['x','*','x',' ','x','x','o','*'];
// Which beat of the pattern we're at right now
let currentBeat = 0;
```

---

## 7. Playing drums

Now we need a function to be called on an interval that will play the current drum sound for the current beat. Create a function called `playDrum()` and in it:

1. Get the current beat symbol in the `drumLoop` array (using the `currentBeat` variable as an index) and store the result in a variable called `drum`
2. For __each drum symbol__ (`x`, `o`, and `*`) write an `if` statement that checks if the current drum symbol is a match, and if so plays the appropriate drum sound
4. Advance `currentBeat` by 1 and set it back to `0` if it reaches the end of the `drumLoop` array

???

__Solution__

```javascript
function playDrum() {
  // Get the symbols for the current beat in the drum loop
  let drum = drumLoop[currentBeat];

  // If it's an 'x', play the kick
  if (drum === 'x') {
    kick.play();
  }
  // If it's an 'o', play the snare
  if (drum === 'o') {
    snare.play();
  }
  // If it's an '*', play the hihat
  if (drum === '*') {
    hihat.play();
  }
  // Advance the loop by a beat
  currentBeat++;
  if (currentBeat >= drumLoop.length) {
    currentBeat = 0;
  }
}
```

You can also advance `currentBeat` like this:

```javascript
currentBeat = (currentBeat + 1) % drumLoop.length;
```

---

## 8. Drum interval

Finally, add another `setInterval()` to `mousePressed` that calls `playDrum` every 250 milliseconds (or some other multiple of the synthesizer's note length)

Hey presto, a music box!

???

```javascript
function mousePressed() {
  // Start an interval for the notes
  setInterval(playRandomNote,500);
  // Start an interval for the drums
  setInterval(playDrum,250);
}
```

---

# }

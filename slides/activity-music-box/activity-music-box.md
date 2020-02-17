# Activity: Music Box {

---

## Brief

An experience in which:

- The page plays procedurally (randomly) generated musical notes and a pre-written drum pattern

---

## 1. Start a project

1. Download the [template p5 project](https://github.com/pippinbarr/cart263-2020/raw/master/templates/p5-project.zip) (We're just using p5 for fun, it could be written in jQuery just as easily given we have no visual element to deal with)
2. Include the [Pizzicato library](https://cdnjs.com/libraries/pizzicato) by adding a script tag with the CDN URL for the library __before__ the script tag for your own program

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

To play tones and drum sounds we need a synthesizer and some sound files to play.

1. Download the sound files for the [kick](https://pippinbarr.github.io/cart263-2020/activities/pizzicato/music-box/assets/sounds/kick.wav), [snare](https://pippinbarr.github.io/cart263-2020/activities/pizzicato/music-box/assets/sounds/snare.wav), and [hihat](https://pippinbarr.github.io/cart263-2020/activities/pizzicato/music-box/assets/sounds/hihat.wav) and store them in your `assets/sounds` folder
2. Declare variables for `synth`, `kick`, `snare`, and `hihat` at the top of the program and use Pizzicato to store the appropriate sound in each (you can either do this immediately at the top of the script or in the `setup()` function)

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
      type: 'sine',
      frequency: 220
    }
  });

  // Load the three drum sounds as wav files
  kick = new Pizzicato.Sound({
    source: 'file',
    options: {
      path: 'assets/sounds/kick.wav'
    }
  });

  snare = new Pizzicato.Sound({
    source: 'file',
    options: {
      path: 'assets/sounds/snare.wav'
    }
  });

  hihat = new Pizzicato.Sound({
    source: 'file',
    options: {
      path: 'assets/sounds/hihat.wav'
    }
  });
}
```

---

## 4. Playing a random note

We want to be able to play random notes based on our frequencies, so let's write a function called `playNote()` that does this. It should:

1. Select a random frequency from the `frequencies` array
2. Set the frequency of the `synth` to that frequency (look up [frequency](https://github.com/alemangui/pizzicato#sounds-frequency) in the Pizzicato documentation)
3. Play the `synth`

(If you need to remember how to select a random element from an array, Google it or check a previous week's slides for the formula.)

???

__Solution__

```javascript
// playNote
//
// Chooses a random frequency and assigns it to the synth
function playNote() {
  // Pick a random frequency from the array
  let frequency = frequencies[Math.floor(Math.random() * frequencies.length)];
  // Set the synth's frequency
  synth.frequency = frequency;
  // If it's not already playing, play the synth
  synth.play();
}
```

---

## 5. Play notes on an interval

We want to play random notes over time, so we should have an interval that repeatedly calls `playNote()` to play different notes. We'll start the interval when the mouse is pressed.

1. Define a `mousePressed()` function (remember p5?!)
2. In the function use `setInterval()` to call `playNote` at some specific interval of your choice (500 milliseconds is fairly nice)

Now if you click when the page loads you should hear random notes playing! Deedle deedle dee!

???

(__Note:__ currently if you click again you'll start another interval. Something to fix in the assignment!)

__Solution__

```javascript
function mousePressed() {
  // Start an interval for the notes
  setInterval(playNote,500);
}

```

---

## 6. Drum patterns

Unlike notes, it doesn't make as much sense to just play random drums per beat, rather we want to specify a __pattern__ of drums over time. To do that we need some kind of data representation of the drum sequence. We'll do this with an array of strings that specify which drums to play per beat.

1. Create an array called `pattern`
2. In the array, store eight empty strings - each one will represent the drums to play for a single beat in order (with the overall pattern being eight beats)
3. In each string enter symbols for the drums you want to play for that beat (use `x` for kick, `o` for snare, and `*` for hihat)
4. Create a variable called `beat` set to `0` that will track which beat in the array we're up to

???

__Solution__

```javascript
// Our drum pattern
// Each array element is one beat and has a string with each
// drum to play for that beat
// x = kick, o = snare, * = hihat
let pattern = ['x','*','xo*',' ','x','x','xo','*'];
// Which beat of the pattern we're at right now
let beat = 0;
```

---

## 7. Playing drums

Now we need a function to be called on an interval that will play the current drum sounds for the current beat. Create a function called `playDrum()` and in it:

1. Get the current `beat` in the `pattern` array and store it in a variable (call it `symbols` perhaps)
2. For each drum symbol (`x`, `o`, and `*`) write an `if` statement that uses `symbols.includes()` to check if that drum symbol appears in the current beat symbols (note that `.includes()` returns `true` or `false`)
3. If it does appear, tell play the correct drum sound to play
4. Finally, advance `beat` by 1 and set it back to `0` if it reaches the end of the `pattern` array

???

__Solution__

```javascript
function playDrum() {
  // Get the symbols for the current beat in the pattern
  let symbols = pattern[beat];

  // If there's an 'x' in there, play the kick
  if (symbols.includes('x')) {
    kick.play();
  }
  // If there's an 'o' in there, play the snare
  if (symbols.includes('o')) {
    snare.play();
  }
  // If there's an '*' in there, play the hihat
  if (symbols.includes('*')) {
    hihat.play();
  }
  // Advance the pattern by a beat
  beat = (beat + 1) % pattern.length;
}
```

You can also advance `beat` like this:

```javascript
beat++;
if (beat >= pattern.length) {
  beat = 0;
}
```

---

## 8. Drum interval

Finally, add another `setInterval()` to `mousePressed` that calls `playDrum` repeatedly (try 250ms, or some other multiple of the synthesizer's note length.)

Hey presto, a music box!

???

```javascript
function mousePressed() {
  // Start an interval for the notes
  setInterval(playNote,500);
  // Start an interval for the drums
  setInterval(playDrum,250);
}
```

---

# }


# speed Typing game
## Live Demo
A Pen created on CodePen.io [Live-Demo](https://codepen.io/sajjad-10/pen/OJzYmdV?editors=1010).

## Roadmap

- Create with HTML & CSS & SASS Animation

- JavaScript:

-  DOM, Time & setTimeout & setInterval

## Usage/javascript
Init
```javascript
const words = [];   // list of words 
let randomWord;     // Init word 
let score = 0;      // Init scores
let time = 10;      // Init time
```
Generate random word from array + add to DOM
```javascript
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}
addWordToDOM();
```
Update score
```javascript
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}
```
Event listeners
```javascript
text.addEventListener('input', e => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    e.target.value = '';

    if (difficulty === 'hard') {
      time += 2;
    } else if (difficulty === 'medium') {
      time += 3;
    } else {
      time += 5;
    }

    updateTime();
  }
});
```

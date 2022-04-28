
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

Focuses on text on start
```javascript
text.focus();
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
Start counting don + updateTime El + game Over
```javascript
const timeInterval = setInterval(updateTime, 1000);

function updateTime() {
    time--;
    timeEl.innerHTML = time + 's';
    if (time === 0) {
        clearInterval(timeInterval);
        gameOver();
    }
}
```
game Over UI
```javascript
function gameOver(params) {
    endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score os ${score}</p>
    <button onclick="window.location.reload()">Reload</button`;
    endgameEl.style.display = 'flex';
}
```

Event input
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
Event setting Btn
```javascript
settingsForm.addEventListener('change', (e) => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
})
```

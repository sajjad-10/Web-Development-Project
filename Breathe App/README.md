
# Breathe app

A relaxing breathing app with a visual director to tell you when to breathe in, and when hold and breathe out
## Live Demo

A Pen created on CodePen.io [Live-Demo](https://codepen.io/sajjad-10/pen/yLpwwLE).


## Roadmap

- Create with HTML & CSS & SASS Animation

- JavaScript:

-  DOM, Time & setTimeout & setInterval


## Usage/javascript
This is Timing app
```javascript
const totalTime = 7500,
      breatheTime = (totalTime / 5) * 2,
      holdTime = totalTime / 5;
```
Function for timing.
```javascript
function breathAnimation() {
  text.innerText = 'Breathe In!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);
```

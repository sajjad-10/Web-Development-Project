const container = document.getElementById("container"),
  text = document.getElementById("text");
const totalTime = 7500,
  breatheTime = (totalTime / 5) * 2,
  holdTime = totalTime / 5;
breathAnimation();

function breathAnimation() {
  text.innerText = "Breathe In!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Breathe Out!";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);

let seconds = 0;
let timer = null;

function startTimer() {
  if (timer !== null) return;

  timer = setInterval(() => {
    seconds++;
    displayTime();
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  displayTime();
}

function displayTime() {
  const min = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");
  document.getElementById("time").textContent = `${min}:${sec}`;
}

let timer = document.getElementById("timer");
let startBtn = document.querySelector("#play-btn");
let resetBtn = document.querySelector("#reset-btn");

// Variables for timer values.
let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading zeros.
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval = null;
let timerStatus = "stopped";

// Start  timer function.
const startWatch = () => {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }
  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }
  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }
  timer.innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
};

// Event Listener on user click either, on play or pause button.
startBtn.addEventListener("click", () => {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(startWatch, 800);
    startBtn.innerHTML =
      '<iconify-icon icon="iconoir:pause-solid"></iconify-icon>';
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    startBtn.innerHTML =
      '<iconify-icon icon="iconoir:play-solid"></iconify-icon>';
    timerStatus = "stopped";
  }
});

// Event Listener that clear timerInterval and rest the timer.
resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  timer.innerText = "00:00:00";
  startBtn.innerHTML =
      '<iconify-icon icon="iconoir:play-solid"></iconify-icon>';
});

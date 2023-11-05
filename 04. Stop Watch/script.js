let timer = document.getElementById("timer");
let startBtn = document.querySelector("#play-btn");
let resetBtn = document.querySelector("#reset-btn");

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval = null;
let timerStatus = "stopped";

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

startBtn.addEventListener("click", () => {
  timerInterval = window.setInterval(startWatch, 1000);
  // startBtn.classList.add ='pause-btn'
  startBtn.innerHTML =
    '<iconify-icon icon="iconoir:pause-solid"></iconify-icon>';
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  timer.innerText = "00:00:00";
});


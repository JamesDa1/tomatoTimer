const work = 25 * 60;
const short_break = 5 * 60;
const long_break = 10 * 60;

let time = work;
let minutes = 0;
let seconds = 0;

const countdown = document.getElementById("countdown");

// Change time
const btnWork = document.getElementById("btn-work");
const btnShortBreak = document.getElementById("btn-short");
const btnLongBreak = document.getElementById("btn-long");

btnWork.addEventListener("click", function () {
  time = work;
  updateCountDown();
});

btnShortBreak.addEventListener("click", function () {
  time = short_break;
  updateCountDown();
});
btnLongBreak.addEventListener("click", function () {
  time = long_break;
  updateCountDown();
});

btnLongBreak.addEventListener("dblclick", function () {
  playSound();
});

let timer = setInterval(updateCountDown, 1000);

function updateCountDown() {
  minutes = Math.floor(time / 60);
  seconds = Math.floor(time % 60);
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  countdown.innerHTML = `${minutes}:${seconds}`;
  time -= 1;
  if (time === 0) {
    playSound();
    countdown.innerHTML = `${"00"}:${"00"}`;
    clearInterval(timer);
  }
}

function playSound() {
  const sound = new Audio("VivaLaVida.mp3");
  sound.play();
}

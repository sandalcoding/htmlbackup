var milliseconds = 0, seconds = 0, minutes = 0;
var interval = 1;
var h2 = document.getElementById("time"),
  start = document.getElementById("bstart"),
  pause = document.getElementById("bpause"),
  reset = document.getElementById("breset");

function count() {
  interval = 1;
  milliseconds += interval;
  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds += interval;
  }
  if (seconds >= 60) {
    seconds = 0;
    minutes += interval;
  }
  h2.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds ? (seconds > 9 ? seconds : "0" + seconds): "00") + ":" + (milliseconds > 9 ? milliseconds : "0" + milliseconds);
timer();

}

function timer() {
  b = setTimeout(count, 10);
}

start.onclick = count;

pause.onclick = function() {
  clearTimeout(b);
}

reset.onclick = function(){
  clearTimeout(b);
  h2.textContent = "00:00:00";
  milliseconds = 0, seconds = 0, minutes = 0;
  interval=0;
}
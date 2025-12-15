function startTimer() {
  clearInterval(interval);

  const work = convertToSeconds(parseInt(workTime.value), workUnit.value);

  const rest = convertToSeconds(parseInt(restTime.value), restUnit.value);

  remainingCycles = parseInt(cycles.value);
  if (remainingCycles <= 0) return;

  isWork = true;
  isPaused = false;
  currentTime = work;
  totalTime = work;

  setupProgress();
  updateDisplay();
  const status = document.getElementById("status");
  const pauseBtn = document.getElementById("pauseBtn");
  const timer = document.getElementById("timer");
  status.innerText = getTranslation("work");
  setProgressColor("work");
  pauseBtn.innerText = getTranslation("pause");

  interval = setInterval(timerTick, 1000);
}

function timerTick() {
  const status = document.getElementById("status");
  if (isPaused) return;

  currentTime--;
  updateDisplay();

  if (currentTime <= 0) {
    if (isWork) {
      isWork = false;
      currentTime = convertToSeconds(restTime.value, restUnit.value);
      totalTime = currentTime;

      status.innerText = getTranslation("rest");
      setProgressColor("rest");
    } else {
      remainingCycles--;
      if (remainingCycles <= 0) {
        stopTimer();
        status.innerText = getTranslation("completed");
        return;
      }
      isWork = true;
      currentTime = convertToSeconds(workTime.value, workUnit.value);
      totalTime = currentTime;
      status.innerText = getTranslation("work");
      setProgressColor("work");
    }
    setupProgress();
  }
}

function stopTimer() {
  const status = document.getElementById("status");
  const pauseBtn = document.getElementById("pauseBtn");

  clearInterval(interval);
  interval = null;
  isPaused = false;
  pauseBtn.innerText = getTranslation("pause");
  status.innerText = getTranslation("stopped");
}
function convertToSeconds(value, unit) {
  if (unit === "minutes") return value * 60;
  if (unit === "hours") return value * 3600;
  return value;
}

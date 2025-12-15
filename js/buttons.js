function togglePause() {
  const status = document.getElementById("status");
  const pauseBtn = document.getElementById("pauseBtn");

  if (!interval) return;

  isPaused = !isPaused;
  pauseBtn.innerText = isPaused ? getTranslation("resume") : getTranslation("pause");
  status.innerText = isPaused ? getTranslation("paused") : isWork ? getTranslation("work") : getTranslation("rest");
}

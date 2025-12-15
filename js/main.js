function updateDisplay() {
  const safeTime = Math.max(0, currentTime);
  const min = String(Math.floor(safeTime / 60)).padStart(2, "0");
  const sec = String(safeTime % 60).padStart(2, "0");
  timer.innerText = `${min}:${sec}`;
  updateProgress();
}

// Initialize language on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("timerLanguage") || "pt";
  document.getElementById("languageSelector").value = savedLanguage;
  applyTranslations();
});

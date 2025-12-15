function updateDisplay() {
  const min = String(Math.floor(currentTime / 60)).padStart(2, "0");
  const sec = String(currentTime % 60).padStart(2, "0");
  timer.innerText = `${min}:${sec}`;
  updateProgress();
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('timerLanguage') || 'pt';
  document.getElementById('languageSelector').value = savedLanguage;
  applyTranslations();
});

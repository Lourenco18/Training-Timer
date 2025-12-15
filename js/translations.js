const translations = {
  pt: {
    title: "Temporizador de Treino",
    clock: "Temporizador de Treino",
    stopped: "Parado",
    paused: "Pausado",
    work: "Treino",
    rest: "Descanso",
    completed: "Concluído",
    pause: "Pausar",
    resume: "Retomar",
    workTimeLabel: "Tempo de cada ciclo",
    restTimeLabel: "Tempo de descanso",
    cyclesLabel: "Número de ciclos",
    seconds: "Segundos",
    minutes: "Minutos",
    hours: "Horas",
    start: "Iniciar",
    stop: "Parar",
    language: "Idioma",
    errorTitle: "Valores inválidos!",
    errorWorkTime: "O tempo de treino deve ser superior a 0",
    errorRestTime: "O tempo de descanso não pode ser negativo",
    errorCycles: "O número de ciclos deve ser superior a 0",
  },
  en: {
    title: "Workout Timer",
    clock: "Workout Timer",
    stopped: "Stopped",
    paused: "Paused",
    work: "Work",
    rest: "Rest",
    completed: "Completed",
    pause: "Pause",
    resume: "Resume",
    workTimeLabel: "Work time per cycle",
    restTimeLabel: "Rest time",
    cyclesLabel: "Number of cycles",
    seconds: "Seconds",
    minutes: "Minutes",
    hours: "Hours",
    start: "Start",
    stop: "Stop",
    language: "Language",
    errorTitle: "Invalid values!",
    errorWorkTime: "Work time must be greater than 0",
    errorRestTime: "Rest time cannot be negative",
    errorCycles: "Number of cycles must be greater than 0",
  },
  fr: {
    title: "Minuteur d'Entraînement",
    clock: "Minuteur d'Entraînement",
    stopped: "Arrêté",
    paused: "En pause",
    work: "Travail",
    rest: "Repos",
    completed: "Terminé",
    pause: "Pause",
    resume: "Reprendre",
    workTimeLabel: "Temps de travail par cycle",
    restTimeLabel: "Temps de repos",
    cyclesLabel: "Nombre de cycles",
    seconds: "Secondes",
    minutes: "Minutes",
    hours: "Heures",
    start: "Démarrer",
    stop: "Arrêter",
    language: "Langue",
    errorTitle: "Valeurs invalides!",
    errorWorkTime: "Le temps de travail doit être supérieur à 0",
    errorRestTime: "Le temps de repos ne peut pas être négatif",
    errorCycles: "Le nombre de cycles doit être supérieur à 0",
  },
};

let currentLanguage = localStorage.getItem("timerLanguage") || "pt";

function setLanguage(lang) {
  if (!translations[lang]) return;

  currentLanguage = lang;
  localStorage.setItem("timerLanguage", lang);
  applyTranslations();
}

function applyTranslations() {
  const t = translations[currentLanguage];

  // Update title
  document.title = t.title;

  // Update page elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (t[key]) {
      if (element.tagName === "OPTION") {
        element.textContent = t[key];
      } else if (element.tagName === "BUTTON") {
        element.textContent = t[key];
      } else {
        element.textContent = t[key];
      }
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = currentLanguage;
}

function getTranslation(key) {
  return translations[currentLanguage][key] || key;
}

// Language selector functions
const languageFlags = {
  pt: "🇵🇹",
  en: "🇬🇧",
  fr: "🇫🇷",
};

function toggleLanguageMenu() {
  const options = document.getElementById("languageOptions");
  options.classList.toggle("open");
}

function selectLanguage(lang) {
  setLanguage(lang);
  document.getElementById("currentFlag").textContent = languageFlags[lang];
  document.getElementById("languageOptions").classList.remove("open");
}

// Close language menu when clicking outside
document.addEventListener("click", function (event) {
  const selector = document.getElementById("languageSelector");
  if (selector && !selector.contains(event.target)) {
    document.getElementById("languageOptions").classList.remove("open");
  }
});

// Initialize flag on page load
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("currentFlag").textContent =
    languageFlags[currentLanguage];
});

// Error handling functions
function showError(message) {
  const errorAlert = document.getElementById("errorAlert");
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = message;
  errorAlert.style.display = "flex";
}

function closeError() {
  console.log("closeError called");
  const errorAlert = document.getElementById("errorAlert");
  if (errorAlert) {
    errorAlert.style.display = "none";
  }
}

// Initialize error handlers
window.addEventListener("load", function () {
  const closeBtn = document.getElementById("errorCloseBtn");
  if (closeBtn) {
    closeBtn.addEventListener("click", function (e) {
      console.log("Close button clicked");
      e.preventDefault();
      e.stopPropagation();
      closeError();
    });
  }

  const errorAlert = document.getElementById("errorAlert");
  if (errorAlert) {
    errorAlert.addEventListener("click", function (e) {
      if (e.target === errorAlert) {
        closeError();
      }
    });
  }

  const errorContent = document.querySelector(".error-content");
  if (errorContent) {
    errorContent.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }
});

// Validation and start timer
function validateAndStart() {
  console.log("validateAndStart called");
  const workTime = parseInt(document.getElementById("workTime").value);
  const restTime = parseInt(document.getElementById("restTime").value);
  const cycles = parseInt(document.getElementById("cycles").value);

  console.log("Values:", { workTime, restTime, cycles });

  let error = null;

  if (isNaN(workTime) || workTime <= 0) {
    error = getTranslation("errorWorkTime");
  } else if (isNaN(restTime) || restTime < 0) {
    error = getTranslation("errorRestTime");
  } else if (isNaN(cycles) || cycles <= 0) {
    error = getTranslation("errorCycles");
  }

  console.log("Error:", error);

  if (error) {
    console.log("Showing error");
    showError(error);
    return false;
  }

  // If validation passes, start the timer
  console.log("Starting timer");
  if (typeof startTimer === "function") {
    startTimer();
  } else {
    console.error("startTimer is not defined");
  }

  return false;
}

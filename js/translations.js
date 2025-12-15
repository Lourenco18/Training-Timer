const translations = {
  pt: {
    title: "Temporizador de Treino",
    clock: "Clock",
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
    language: "Idioma"
  },
  en: {
    title: "Workout Timer",
    clock: "Clock",
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
    language: "Language"
  },
  fr: {
    title: "Minuteur d'Entraînement",
    clock: "Horloge",
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
    language: "Langue"
  }
};

let currentLanguage = localStorage.getItem('timerLanguage') || 'pt';

function setLanguage(lang) {
  if (!translations[lang]) return;
  
  currentLanguage = lang;
  localStorage.setItem('timerLanguage', lang);
  applyTranslations();
}

function applyTranslations() {
  const t = translations[currentLanguage];
  
  // Update title
  document.title = t.title;
  
  // Update page elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (t[key]) {
      if (element.tagName === 'OPTION') {
        element.textContent = t[key];
      } else if (element.tagName === 'BUTTON') {
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

function setupProgress() {
  const circle = document.querySelector(".progress");
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = circumference;
}

function updateProgress() {
  const circle = document.querySelector(".progress");
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDashoffset = circumference * (1 - currentTime / totalTime);
}
function setProgressColor(type) {
  const circle = document.querySelector(".progress");

  if (type === "work") {
    circle.style.stroke = "#22c55e"; // verde
  } else if (type === "rest") {
    circle.style.stroke = "#ef4444"; // vermelho
  }
}

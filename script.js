document.getElementById("startPlanBtn").addEventListener("click", () => {
  document.getElementById("formSection").classList.remove("hidden");
  document.getElementById("formSection").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("weeklyForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const sales = [
    parseFloat(document.querySelector('input[name="day1"]').value),
    parseFloat(document.querySelector('input[name="day2"]').value),
    parseFloat(document.querySelector('input[name="day3"]').value),
    parseFloat(document.querySelector('input[name="day4"]').value),
    parseFloat(document.querySelector('input[name="day5"]').value),
    parseFloat(document.querySelector('input[name="day6"]').value),
    parseFloat(document.querySelector('input[name="day7"]').value),
  ];

  const avg = sales.reduce((a, b) => a + b, 0) / sales.length;
  const predictedWaste = (avg * 0.15).toFixed(2);

  document.getElementById("result").innerText = `Predicted weekly waste: ${predictedWaste} units`;
});

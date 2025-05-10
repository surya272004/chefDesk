document.getElementById('startPlanBtn').addEventListener('click', () => {
  document.getElementById('introSection').style.display = 'none';
  document.getElementById('formSection').style.display = 'block';
});

document.getElementById('weekDataForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = [...new FormData(this).values()].map(Number);
  const avg = data.reduce((a,b)=>a+b,0)/data.length;
  const predictedWaste = Math.max(0, Math.round(avg * 0.1)); // simple 10% waste prediction
  document.getElementById('result').innerHTML = `<h3>Predicted Weekly Waste: ${predictedWaste} kg</h3>`;
  document.getElementById('result').style.display = 'block';
});

// Show the form when user clicks "Start Your Plan"
document.getElementById('startPlanBtn').addEventListener('click', function() {
  document.getElementById('formSection').style.display = 'block';
  this.style.display = 'none'; // hide the button
});

// Prediction logic
document.getElementById('weekDataForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let sales = [];
  for (let i = 1; i <=7; i++) {
    sales.push(parseFloat(document.querySelector(`input[name=day${i}]`).value));
  }

  let avgSales = sales.reduce((a,b) => a + b, 0) / sales.length;
  let predictedWaste = avgSales * 0.1; // simple AI logic (can improve later)

  let resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `<h3>Predicted Waste for Next Week: ${predictedWaste.toFixed(2)} units</h3>`;
  resultDiv.style.display = 'block';
});

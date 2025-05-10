document.getElementById('weekDataForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get all 7 day sales inputs
  let sales = [];
  for (let i = 1; i <=7; i++) {
    sales.push(parseFloat(document.querySelector(`input[name=day${i}]`).value));
  }

  // Example: Simple AI prediction (you can replace this formula with real ML later)
  let avgSales = sales.reduce((a,b) => a + b, 0) / sales.length;
  let predictedWaste = avgSales * 0.1; // assuming 10% waste by default

  // Display result
  let resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `<h3>Predicted Weekly Waste: ${predictedWaste.toFixed(2)} units</h3>`;
  resultDiv.style.display = 'block';
});

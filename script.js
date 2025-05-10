// script.js
document.getElementById('predictForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const sales = parseFloat(document.getElementById('salesInput').value);
  const guests = parseFloat(document.getElementById('guestsInput').value);
  const eventType = document.getElementById('eventTypeInput').value;

  // Simple formula or placeholder
  let predictedWaste = (sales * 0.1) + (guests * 0.05);

  if (eventType.toLowerCase() === 'party') {
    predictedWaste *= 1.2; // increase waste for party
  }

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `<strong>Predicted Waste:</strong> ${predictedWaste.toFixed(2)} kg`;
  resultDiv.style.display = 'block';
});

import React, { useState } from 'react';

function App() {
  const [inputs, setInputs] = useState({
    inventory: '',
    temperature: '',
    previous_waste: ''
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  // Replace this URL with your backend endpoint (e.g., your ngrok or deployed Flask API URL)
  const API_URL = 'https://your-backend-url/predict';

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPrediction(null);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inventory: Number(inputs.inventory),
          temperature: Number(inputs.temperature),
          previous_waste: Number(inputs.previous_waste)
        }),
      });

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      setPrediction('Error: Could not fetch prediction.');
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, background: '#f9f9f9', borderRadius: 10 }}>
      <h2>AI Food Waste Predictor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Inventory:</label>
          <input
            type="number"
            name="inventory"
            value={inputs.inventory}
            onChange={handleChange}
            required
            style={{ width: '100%', marginBottom: 10 }}
          />
        </div>
        <div>
          <label>Temperature (°C):</label>
          <input
            type="number"
            name="temperature"
            value={inputs.temperature}
            onChange={handleChange}
            required
            style={{ width: '100%', marginBottom: 10 }}
          />
        </div>
        <div>
          <label>Previous Waste (kg):</label>
          <input
            type="number"
            name="previous_waste"
            value={inputs.previous_waste}
            onChange={handleChange}
            required
            style={{ width: '100%', marginBottom: 10 }}
          />
        </div>
        <button type="submit" disabled={loading} style={{ width: '100%', padding: 10, background: '#38b000', color: '#fff', border: 'none', borderRadius: 5 }}>
          {loading ? 'Predicting...' : 'Predict Waste'}
        </button>
      </form>
      {prediction !== null && (
        <div style={{ marginTop: 20, fontWeight: 'bold' }}>
          {typeof prediction === 'number'
            ? `Predicted Waste: ${prediction.toFixed(2)} kg`
            : prediction}
        </div>
      )}
    </div>
  );
}

export default App;

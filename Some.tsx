import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState(null);

  const calculateInterest = () => {
    if (amount && interest && time) {
      const SI = (parseFloat(amount) * parseFloat(interest) * parseFloat(time)) / 100;
      setResult(SI.toFixed(2)); 
    } else {
      setResult('Please fill all fields');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Simple Interest Calculator</h2>
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Interest (%)"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Time (Years)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button onClick={calculateInterest}>Calculate</button>
        {result !== null && <p className="result">Simple Interest: {result}</p>}
      </div>
    </div>
  );
};

export default Home;



body {
  background-color: #f4f4f9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Poppins', sans-serif;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 350px;
}

h2 {
  margin-bottom: 15px;
  color: #333;
}

input {
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.result {
  margin-top: 15px;
  font-size: 18px;
  color: #28a745;
  font-weight: bold;
}









import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const calculateInterest = () => {
    if (amount && interest && time) {
      const SI = (parseFloat(amount) * parseFloat(interest) * parseFloat(time)) / 100;
      setResult(SI.toFixed(2));
    } else {
      setResult(null);
    }
  };

  const clearFields = () => {
    setAmount("");
    setInterest("");
    setTime("");
    setResult(null);
  };

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <div className="card">
        <div className="header">
          <h2>Simple Interest Calculator</h2>
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          onKeyUp={calculateInterest}
        />
        <input
          type="number"
          placeholder="Enter Interest (%)"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          onKeyUp={calculateInterest}
        />
        <input
          type="number"
          placeholder="Enter Time (Years)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          onKeyUp={calculateInterest}
        />

        <div className="button-group">
          <button onClick={calculateInterest}>Calculate</button>
          <button className="clear" onClick={clearFields}>Clear</button>
        </div>

        {result !== null && <p className="result">Simple Interest: ₹{result}</p>}
      </div>
    </div>
  );
};

export default Home;



body {
  font-family: "Poppins", sans-serif;
  transition: background 0.3s ease;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  transition: background 0.3s ease;
}

.container.light {
  background-color: #f4f4f9;
}

.container.dark {
  background-color: #1e1e1e;
  color: white;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 350px;
  transition: all 0.3s ease;
}

.container.dark .card {
  background: #333;
  color: white;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.theme-toggle {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
}

input {
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
}

.container.dark input {
  background: #444;
  color: white;
  border: 1px solid #888;
}

.button-group {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

button {
  flex: 1;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #0056b3;
}

button.clear {
  background-color: #ff4d4d;
}

button.clear:hover {
  background-color: #cc0000;
}

.result {
  margin-top: 15px;
  font-size: 18px;
  color: #28a745;
  font-weight: bold;
}


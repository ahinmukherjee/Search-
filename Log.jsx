import React, { useState } from "react";
import "./styles.css";

function App() {
  const [showSignup, setShowSignup] = useState(false);

  const toggleSignup = () => setShowSignup(!showSignup);
  const closeSignup = () => setShowSignup(false);

  return (
    <div className="header">
      {showSignup && <div className="overlay" onClick={closeSignup}></div>}

      <div className="container">
        {/* Left Section */}
        <div className="leftpart">
          <h1>Facebook</h1>
          <h3>Connect with friends and the world around you on Facebook.</h3>
        </div>

        {/* Right Section (Login) */}
        <div className="rightpart">
          <div className="login-box">
            <form>
              <input type="text" placeholder="Email or phone number" className="login-input" />
              <input type="password" placeholder="Password" className="login-input" />
              <button className="login-btn">Log In</button>
            </form>
            <p className="forgot-password">Forgot password?</p>
            <hr />
            <button className="create-account-btn" onClick={toggleSignup}>
              Create a new account
            </button>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      {showSignup && <SignupForm closeSignup={closeSignup} />}
    </div>
  );
}

// Signup Component
function SignupForm({ closeSignup }) {
  return (
    <div className="signup-modal">
      <div className="signup-header">
        <h2>Sign Up</h2>
        <p>It's quick and easy.</p>
        <button className="close-btn" onClick={closeSignup}>×</button>
      </div>
      <hr />

      <form className="signup-form">
        <div className="name-fields">
          <input type="text" placeholder="First Name" className="input-box" />
          <input type="text" placeholder="Last Name" className="input-box" />
        </div>
        <input type="text" placeholder="Email or Phone number" className="input-box full-width" />
        <input type="password" placeholder="Password" className="input-box full-width" />

        <div className="birthday-section">
          <p>Birthday</p>
          <div className="birthday-fields">
            <select>{["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => <option key={m} value={m}>{m}</option>)}</select>
            <select>{[...Array(31)].map((_, i) => <option key={i} value={i + 1}>{i + 1}</option>)}</select>
            <select>{[...Array(100)].map((_, i) => <option key={i} value={2024 - i}>{2024 - i}</option>)}</select>
          </div>
        </div>

        <div className="gender-section">
          <p>Gender</p>
          <div className="gender-options">
            <label><input type="radio" name="gender" value="female" /> Female</label>
            <label><input type="radio" name="gender" value="male" /> Male</label>
            <label><input type="radio" name="gender" value="custom" /> Custom</label>
          </div>
        </div>

        <p className="terms">
          By clicking Sign Up, you agree to our <span className="blue">Terms, Privacy Policy, and Cookies Policy</span>.
        </p>

        <button className="signup-btn">Sign Up</button>
      </form>
    </div>
  );
}

export default App;


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  width: 90%;
}

.leftpart {
  flex: 1;
  text-align: left;
  margin-right: 20px;
}

h1 {
  color: #1877f2;
  font-size: 50px;
}

h3 {
  color: black;
  font-size: 20px;
}

.rightpart {
  flex: 1;
  display: flex;
  justify-content: center;
}

.login-box {
  background-color: white;
  padding: 20px;
  width: 350px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.login-input {
  width: 100%;
  height: 40px;
  margin: 10px 0;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-btn {
  width: 100%;
  height: 45px;
  background-color: #1877f2;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.forgot-password {
  color: #1877f2;
  font-size: 14px;
  cursor: pointer;
}

.create-account-btn {
  width: 100%;
  height: 45px;
  background-color: #42b72a;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.signup-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  width: 400px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 20;
}

.signup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.input-box {
  width: 100%;
  height: 40px;
  margin: 8px 0;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.birthday-section, .gender-section {
  margin-top: 10px;
}

.signup-btn {
  width: 100%;
  height: 45px;
  background-color: #42b72a;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

import React, { useState } from "react";
import "./App.css";

function App() {
  const [showSignup, setShowSignup] = useState(false);

  const toggleSignup = () => setShowSignup(!showSignup);
  const closeSignup = () => setShowSignup(false);

  return (
    <div className="header">
      {showSignup && <div className="layer" onClick={closeSignup}></div>}

      <div className="container">
        {/* Left Part */}
        <div className="leftpart">
          <h1>Facebook</h1>
          <h3>Connect with friends and the world around you on Facebook</h3>
        </div>

        {/* Right Part (Login) */}
        <div className="rightpart">
          <div className="loginpage">
            <form>
              <input type="text" placeholder="Email or phone number" className="logininput" />
              <input type="password" placeholder="Password" className="logininput" />
              <button className="logIn">Log In</button>
            </form>
            <p id="forget_password">Forgot password?</p>
            <hr />
            <div className="creteaccount" onClick={toggleSignup}>
              Create a new account
            </div>
          </div>
        </div>
      </div>

      {/* Signup Form */}
      {showSignup && <SignupForm closeSignup={closeSignup} />}
    </div>
  );
}

// Signup Component
function SignupForm({ closeSignup }) {
  return (
    <div className="signup">
      <div className="top">
        <div>
          <h2>Sign Up</h2>
          <p id="signpara">It's quick and easy</p>
        </div>
        <img src="/image/icon.jpg" alt="close" onClick={closeSignup} />
      </div>
      <hr id="signupLine" />

      <form>
        <div className="signup_body">
          <div className="name">
            <input type="text" placeholder="First Name" className="same" />
            <input type="text" placeholder="Last Name" className="same" />
          </div>
          <div className="bottom">
            <input type="text" placeholder="Email or Phone number" />
            <input type="password" placeholder="Password" />
          </div>
        </div>

        <div className="birthday">
          <p>Birthday</p>
          <div className="date">
            <select>
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month) => (
                <option key={month} value={month.toLowerCase()}>{month}</option>
              ))}
            </select>
            <select>
              {[...Array(31)].map((_, i) => (
                <option key={i} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <select>
              {[...Array(100)].map((_, i) => (
                <option key={i} value={2024 - i}>{2024 - i}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="gender">
          <p>Gender</p>
          <div className="person">
            <label><input type="radio" name="gender" value="female" /> Female</label>
            <label><input type="radio" name="gender" value="male" /> Male</label>
            <label><input type="radio" name="gender" value="custom" /> Custom</label>
          </div>
        </div>

        <div className="content">
          <p>People who use our service may have uploaded your contact information to Facebook. <span className="blue">Learn more..</span></p>
          <p>By clicking Sign Up, you agree to our Terms, <span className="blue">Privacy Policy, and Cookies Policy</span>. You may receive SMS notifications from us and can opt out anytime.</p>
        </div>

        <button id="btn">Sign Up</button>
      </form>
    </div>
  );
}

export default App;


* {
  margin: 0;
  padding: 0;
}

.header {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(222, 220, 224);
}

.container {
  margin: -175px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
}

.leftpart {
  width: 40%;
  margin-right: 25px;
}

h1 {
  color: royalblue;
  font-size: 60px;
}

h3 {
  color: black;
  font-size: 30px;
  margin-top: 5px;
}

.rightpart {
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.loginpage {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 450px;
  height: 370px;
  border-radius: 10px;
  box-shadow: 10px -10px 15px rgba(0, 0, 0, 0.1), 10px 10px 15px rgba(0, 0, 0, 0.1);
}

.logininput {
  width: 300px;
  height: 50px;
  margin: 10px 0;
  padding: 0 10px;
  outline: none;
  border: 1px solid #ccc;
  font-size: 15.5px;
  border-radius: 10px;
}

.logIn {
  background-color: royalblue;
  color: white;
  font-size: 20px;
  line-height: 48px;
  padding: 0 15px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  width: 80%;
}

.creteaccount {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  width: 250px;
  height: 50px;
  font-size: 20.5px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
}

.signup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  padding-bottom: 15px;
  border-radius: 10px;
  display: none;
}

.show {
  display: block;
}

.layer {
  height: 100vh;
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: none;
}

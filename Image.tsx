import React, { useState } from "react";
import "./SignUpModal.css";

const SignUpModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    birthday: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-modal">
      <div className="modal-content">
        <div className="top">
          <h2>Sign Up</h2>
          <p>It's quick and easy</p>
          <button onClick={onClose} className="close-btn">X</button>
        </div>
        <hr />
        <form>
          <div className="name">
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
          </div>
          <input type="text" name="email" placeholder="Email or Phone number" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
          
          <div className="birthday">
            <p>Birthday</p>
            <input type="date" name="birthday" onChange={handleChange} />
          </div>

          <div className="gender">
            <p>Gender</p>
            <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
            <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
            <label><input type="radio" name="gender" value="Custom" onChange={handleChange} /> Custom</label>
          </div>

          <p className="terms">
            By clicking Sign Up, you agree to our <span className="blue">Terms, Privacy Policy, and Cookies Policy.</span>
          </p>

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: rgb(222,220,224);
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.leftpart h1 {
  color: royalblue;
  font-size: 60px;
}

.leftpart h3 {
  font-size: 24px;
  color: black;
}

.rightpart {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loginpage {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}

.logininput {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.logIn {
  background-color: royalblue;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
}

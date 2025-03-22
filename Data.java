import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Fill out the form below.</p>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Full Name</label>
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Email ID</label>
        </div>

        <div className="input-group">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label>Phone Number</label>
        </div>

        <div className="input-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
          <label>Message</label>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default App;



@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #667eea, #764ba2);
}

/* Contact Form Container */
.contact-container {
    background: rgba(255, 255, 255, 0.1);
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 90%;
    max-width: 400px;
    backdrop-filter: blur(10px);
    color: white;
}

/* Form Heading */
h2 {
    margin-bottom: 10px;
    font-size: 24px;
}

p {
    font-size: 14px;
    margin-bottom: 20px;
}

/* Input Fields */
.input-group {
    position: relative;
    margin-bottom: 20px;
}

.input-group input, 
.input-group textarea {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    outline: none;
    transition: 0.3s;
}

/* Label Animation */
.input-group label {
    position: absolute;
    left: 12px;
    top: 14px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
    transition: 0.3s;
    pointer-events: none;
}

/* Input Focus Effect */
.input-group input:focus, 
.input-group textarea:focus {
    background: rgba(255, 255, 255, 0.3);
}

.input-group input:focus + label,
.input-group input:valid + label,
.input-group textarea:focus + label,
.input-group textarea:valid + label {
    top: -10px;
    left: 10px;
    font-size: 12px;
    color: #ffdd57;
}

/* Submit Button */
button {
    background: #ffdd57;
    color: black;
    border: none;
    padding: 12px 20px;
    width: 100%;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background: #ffcc00;
    transform: scale(1.05);
      }



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <div class="container">
        <h2>Contact Us</h2>
        <form action="#" method="POST">
            <div class="input-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" required>
            </div>

            <div class="input-group">
                <label for="email">Email ID</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required>
            </div>

            <div class="input-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required>
            </div>

            <div class="input-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>

</body>
</html>


/* Reset Default Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

/* Center the form */
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f4f4f4;
}

/* Container Styling */
.container {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
}

/* Form Heading */
h2 {
    margin-bottom: 20px;
    color: #333;
}

/* Input Field Styling */
.input-group {
    margin-bottom: 15px;
    text-align: left;
}

.input-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

.input-group input, 
.input-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

.input-group textarea {
    resize: none;
}

/* Submit Button */
button {
    background: #007bff;
    color: #fff;
    border: none;
    padding: 10px 15px;
    width: 100%;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background: #0056b3;
    }
    

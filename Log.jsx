import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>We provide the best products and services to our customers with top-notch support.</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><FaPhoneAlt /> +1 234 567 890</p>
          <p><FaEnvelope /> support@example.com</p>
          <p><FaMapMarkerAlt /> 123 Main Street, City, Country</p>
        </div>

        {/* Social Media Icons */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


.footer {
  background: #222;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
}

.footer-section {
  flex: 1;
  min-width: 250px;
  margin: 15px;
  text-align: left;
}

.footer-section h3 {
  font-size: 18px;
  margin-bottom: 15px;
  color: #ff9900;
}

.footer-section p, .footer-section ul {
  font-size: 14px;
  line-height: 1.6;
  color: #ddd;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 8px;
}

.footer-section ul li a {
  color: #ddd;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #ff9900;
}

.contact p {
  display: flex;
  align-items: center;
  gap: 10px;
}

.social-icons {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.social-icons a {
  color: #fff;
  font-size: 18px;
  transition: color 0.3s ease, transform 0.2s ease;
}

.social-icons a:hover {
  color: #ff9900;
  transform: scale(1.1);
}

.footer-bottom {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #444;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
  }
  
  .contact p {
    justify-content: center;
  }
}



import React, { useState } from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaComments } from "react-icons/fa";

const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Toggle Chat Window
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Handle Chat Input
  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatMessage.trim()) {
      setMessages([...messages, { text: chatMessage, sender: "user" }]);
      setChatMessage("");
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { text: "Hello! How can I help you?", sender: "bot" }]);
      }, 1000);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>We provide the best products and services to our customers with top-notch support.</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><FaPhoneAlt /> +1 234 567 890</p>
          <p><FaEnvelope /> support@example.com</p>
          <p><FaMapMarkerAlt /> 123 Main Street, City, Country</p>
        </div>

        {/* Social Media Icons */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <button className="chat-button" onClick={toggleChat}>
        <FaComments /> Chat with Us
      </button>

      {/* Chat Box */}
      {isChatOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <span>Live Chat</span>
            <button className="close-chat" onClick={toggleChat}>✖</button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <form className="chat-input" onSubmit={handleChatSubmit}>
            <input
              type="text"
              placeholder="Type a message..."
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


.footer {
  background: #222;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
  position: relative;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
}

.footer-section {
  flex: 1;
  min-width: 250px;
  margin: 15px;
  text-align: left;
}

.footer-section h3 {
  font-size: 18px;
  margin-bottom: 15px;
  color: #ff9900;
}

.footer-section p, .footer-section ul {
  font-size: 14px;
  line-height: 1.6;
  color: #ddd;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 8px;
}

.footer-section ul li a {
  color: #ddd;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #ff9900;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icons a {
  color: #fff;
  font-size: 18px;
  transition: color 0.3s ease, transform 0.2s ease;
}

.social-icons a:hover {
  color: #ff9900;
  transform: scale(1.1);
}

/* Chat Button */
.chat-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #ff9900;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.chat-button:hover {
  background: #e68a00;
}

/* Chat Box */
.chat-box {
  position: fixed;
  bottom: 70px;
  right: 20px;
  width: 300px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.chat-header {
  background: #ff9900;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}

.close-chat {
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.chat-messages {
  max-height: 200px;
  overflow-y: auto;
  padding: 10px;
}

.chat-message {
  padding: 8px;
  margin: 5px;
  border-radius: 5px;
  max-width: 80%;
}

.chat-message.user {
  background: #ff9900;
  color: white;
  align-self: flex-end;
  text-align: right;
}

.chat-message.bot {
  background: #ddd;
  color: black;
  align-self: flex-start;
}

.chat-input {
  display: flex;
  border-top: 1px solid #ddd;
}

.chat-input input {
  flex: 1;
  padding: 8px;
  border: none;
}

.chat-input button {
  background: #ff9900;
  color: white;
  border: none;
  padding: 8px 10px;
  cursor: pointer;
}




@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

.footer {
    background: linear-gradient(135deg, #1e1e2f, #3a3a60);
    color: white;
    padding: 40px 20px;
    text-align: center;
}

.footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 1100px;
    margin: auto;
}

.footer-section {
    flex: 1;
    min-width: 250px;
    margin: 20px 10px;
}

.footer-section h3 {
    font-size: 20px;
    margin-bottom: 15px;
    position: relative;
    display: inline-block;
}

.footer-section h3::after {
    content: '';
    width: 50px;
    height: 3px;
    background: #ffcc00;
    position: absolute;
    left: 50%;
    bottom: -5px;
    transform: translateX(-50%);
}

.footer-section p,
.footer-section ul {
    font-size: 14px;
    opacity: 0.8;
}

.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section ul li {
    margin: 8px 0;
}

.footer-section ul li a {
    text-decoration: none;
    color: white;
    transition: 0.3s;
}

.footer-section ul li a:hover {
    color: #ffcc00;
}

/* Contact Section */
.footer-section.contact p {
    display: flex;
    align-items: center;
    justify-content: center;
}

.footer-section.contact p svg {
    margin-right: 8px;
}

/* Social Media Icons */
.social-icons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 10px;
}

.social-icons a {
    text-decoration: none;
    color: white;
    font-size: 20px;
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transition: 0.3s;
}

.social-icons a:hover {
    background: #ffcc00;
    color: black;
    transform: scale(1.1);
}

/* Footer Bottom */
.footer-bottom {
    margin-top: 20px;
    padding-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.footer-bottom p {
    font-size: 13px;
    opacity: 0.7;
}

/* Responsive Design */
@media (max-width: 768px) {
    .footer-container {
        flex-direction: column;
        text-align: center;
    }

    .footer-section {
        margin-bottom: 20px;
    }
}

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

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Vocation China</h3>
          <p>Your trusted partner for exploring the beauty and culture of China.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Tour Types</Link></li>
            <li><Link to="/">Destinations</Link></li>
            <li><Link to="/">Routes</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Email: dreamexperience@126.com</li>
            <li>Wechat: (1)781-521-4920</li>
            <li>Whatsapp: (1)781-521-4920</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Vocation China. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
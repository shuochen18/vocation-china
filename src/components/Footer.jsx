import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout, Row, Col, Typography } from 'antd';
import { Link } from 'react-router-dom';
import './Footer.css';

const { Footer: AntFooter } = Layout;
const { Text, Link: TextLink } = Typography;

const Footer = () => {
  const { t } = useTranslation();

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
            <li>Email: info@chinatravel.com</li>
            <li>Phone: +86 123 4567 8900</li>
            <li>WeChat: ChinaTravel</li>
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
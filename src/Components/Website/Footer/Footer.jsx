import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src="https://logowik.com/content/uploads/images/rapido-bike-taxi8263.jpg" alt="Company Logo" className="footer-logo" />
          <p className="footer-description">
            Rapido has come a long way ever since its inception in 2015. With a lot of hard work and perseverance, we have made a place for ourselves in the market.
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/safety">Safety</a></li>
            <li><a href="/carrer">Carrers</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/press">Press</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>123 KPHB,Hyderabad, Telangana, 56789</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@rapido.com</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" className='facebook'> 
              <img src="/assets/facebook logo.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank"  >
              <img src="/assets/twitter logo.png" alt="Twitter" style={{backgroundColor:"white"}}/>
            </a>
            <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank" >
              <img src="/assets/instagram logo.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Rapido. All rights reserved.</p>
        <ul>
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Terms of Service</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

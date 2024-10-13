import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { IoWarning } from "react-icons/io5";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Intro */}
          <div className="footer-intro">
            <img src="https://www.eci.gov.in/newimg/eci-logo-white.svg" alt="Intro" className="footer-intro-img" />
            <div className="footer-intro-text">
              <h2>Election Commission of India</h2>
              <p>The Election Commission of India is an autonomous constitutional authority responsible for administering election processes in India...</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-quick-links">
            <h3>Quick Links</h3>
            <div className="quick-links-container">
              <div className="quick-links-column">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about/about-us">About Us</Link></li>
                  <li><Link to="/about/mission">Mission</Link></li>
                </ul>
              </div>
              <div className="quick-links-column">
                <ul>
                  <li><Link to="/about/media-gallery">Media Gallery</Link></li>
                  <li><Link to="/voter/apply-new-voter">Apply New Voter</Link></li>
                  <li><Link to="/voter/track-application">Track Application</Link></li>
                </ul>
              </div>
              <div className="quick-links-column">
                <ul>
                  <li><Link to="/voter/download-voter-card">Download Voter Card</Link></li>
                  <li><Link to="/">Voter Registration Status</Link></li> {/* Add appropriate path */}
                  <li><Link to="/political-party/register">Political Party Register</Link></li>
                </ul>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="social-icons-grid">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+123-456-7890</a></p>
            <p>Address: <span>Nirvachan Sadan, Ashoka Road, New Delhi 110001</span></p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} . All Rights Reserved. Dev. By <a href='https://ankitprotfolio1250.netlify.app/'style={{color:'red'}}>Ankit</a></p>
        <p className="warning-message">
      <IoWarning className="warning-icon" /> This is not an official website, it's made for educational purposes only.
    </p>
      </div>
    </footer>
  );
};

export default Footer;

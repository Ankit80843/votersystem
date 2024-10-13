import React, { useState, useEffect } from 'react';
import './Navbar.css'; 
import { FaHome } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { Link } from 'react-router-dom'; // Import Link for routing
import AOS from 'aos';
import { DiVim } from 'react-icons/di';

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMenuIconVisible, setIsMenuIconVisible] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 600) {
      setIsMenuIconVisible(true);
      setIsNavVisible(false);
    } else {
      setIsMenuIconVisible(false);
      setIsNavVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
<>
    
      {isMenuIconVisible && (
        <TiThMenu className='menubar' onClick={toggleNav} />
      )}
      <nav className={`navbar ${isNavVisible ? 'show' : 'hide'}`}>
        <ul className="nav-list">
          <li className="dropdown">
            <Link to="/"><FaHome /> Home</Link>
          </li>

          <li className="dropdown">
            <Link to="/about">About <span className="dropdown-icon">&#9662;</span></Link>
            <ul className="dropdown-menu">
              <li><Link to="/about/about-us">About Us</Link></li>
              <li><Link to="/about/mission">Mission</Link></li>
              <li><Link to="/about/media-gallery">Media Gallery</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            <Link to="/voter">Voter <span className="dropdown-icon">&#9662;</span></Link>
            <ul className="dropdown-menu">
              <li><Link to="/voter/apply-new-voter">Apply New Voter</Link></li>
              <li><Link to="/voter/track-application">Track Application</Link></li>
              <li><Link to="/voter/download-voter-card">Download Voter Card</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            <Link to="/political-party">Political Party/Candidate <span className="dropdown-icon">&#9662;</span></Link>
            <ul className="dropdown-menu">
              <li><Link to="/political-party/register">Political Party Register</Link></li>
              <li><Link to="/political-party/candidate-nomination">Candidate Nomination</Link></li>
              <li><Link to="/political-party/view-all-parties">View All Parties</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

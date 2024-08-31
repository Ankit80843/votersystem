

import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import the external CSS file
import { FaHome } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";

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
    handleResize(); // Set initial state based on window size

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
        < TiThMenu  className='menubar' onClick={toggleNav} />
      )}
      <nav className={`navbar ${isNavVisible ? 'show' : 'hide'}`}>
        <ul className="nav-list">
          <li className="dropdown">
            <a href="#"><FaHome /> Home</a>
          </li>
          <li className="dropdown">
            <a href="#">About <span className="dropdown-icon">&#9662;</span></a>
            <ul className="dropdown-menu">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Mission</a></li>
              <li><a href="#">Media Gallery</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">Voter <span className="dropdown-icon">&#9662;</span></a>
            <ul className="dropdown-menu">
              <li><a href="#">Apply New Voter</a></li>
              <li><a href="#">Track Application</a></li>
              <li><a href="#">Download Voter Card</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">Political Party/Candidate <span className="dropdown-icon">&#9662;</span></a>
            <ul className="dropdown-menu">
              <li><a href="#">Political Party Register</a></li>
              <li><a href="#">Candidate Nomination</a></li>
              <li><a href="#">View All Parties</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

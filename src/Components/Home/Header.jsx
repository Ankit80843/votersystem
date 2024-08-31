import React from 'react';
import './Header.css'; // Import the external CSS file

const Header = () => {
  return (
    <header>
      {/* Logo */}
      <div className="logo-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_of_India_logo.svg/2560px-Government_of_India_logo.svg.png" alt="Logo" />
      </div>

      {/* Text Section */}
      <div className="text-section">
        <h1>भारत निर्वाचन आयोग के पोर्टल में आपका स्वागत है</h1>
        <h2>Welcome to Election Commission of India Portal</h2>
      </div>

      {/* Small Image */}
      <div className="small-image-container">
        <img src="https://www.eci.gov.in/newimg/eci-logo.svg" alt="Small Icon" />
      </div>
    </header>
  );
};

export default Header;



